import { PivotControls, Html, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import s from './Light.module.scss';

interface Props {
}

const Light: React.FC<Props> = ({ }) => {
    const [vLightCtrl, setVLightCtrl] = useState(false);

    const lightGroup = useRef<any>()
    useFrame(() => {
        if (lightGroup.current) {
            lightGroup.current.rotation.y += 0.005;
        }
    })
    return (
        <group ref={lightGroup} position={[0, -1, 0]}>
            <PivotControls
                rotation={[0, -Math.PI / 2, 0]}
                anchor={[0, 0, 0]}
                scale={75}
                depthTest={false}
                fixed
                lineWidth={2}
                visible={vLightCtrl}
            >
                <mesh
                    position={[2.5, 8, 3]}
                    onClick={() => setVLightCtrl((status) => !status)}
                >
                    <Html>
                        <div className="guangyuan">
                            光源
                        </div>
                    </Html>
                    <sphereGeometry args={[0.1, 20, 20]} />
                    <meshBasicMaterial
                        attach="material"
                        color="#ff0"
                        toneMapped={false}
                    />
                </mesh>
                <directionalLight
                    position={[2.5, 8, 3]}
                    intensity={1}
                >
                </directionalLight>
                <Line points={[[2.5, 8, 3], [2.5, -20, 4]]} color={'#f00'} />
                <pointLight
                    castShadow
                    position={[2.5, 8, 3]}
                    intensity={2}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <directionalLight
                    position={[-2.5, -8, -5]}
                    intensity={0.2}
                />
            </PivotControls>
        </group>
    )
}

export default Light;