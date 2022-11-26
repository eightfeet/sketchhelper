import { Edges, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import s from './City.module.scss';

interface MainCityProps {
    opacity: number;
    edgeColor: string;
    showEdige: boolean;
}

const MainCity: React.FC<MainCityProps> = ({ opacity, edgeColor, showEdige }) => {

    const group = useRef<any>()
    const { nodes, materials } = useGLTF('/glb/scene-draco.glb') as any
    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.001
        }
    })
    return (

        <group ref={group} scale={0.002} position={[0, -18, 0]} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-202253.52, -310688.86, 0]}>
                    <mesh geometry={nodes.mesh_0.geometry} receiveShadow >
                        <meshStandardMaterial transparent opacity={opacity} />
                        {showEdige?<Edges
                            threshold={70} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                            color={edgeColor}
                        />:null}
                    </mesh>
                    <mesh geometry={nodes.mesh_1.geometry} >
                        <meshStandardMaterial transparent opacity={opacity} />
                        {showEdige?<Edges
                            threshold={70} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                            color={edgeColor}
                        />:null}
                    </mesh>
                    <mesh geometry={nodes.mesh_2.geometry} >
                        <meshStandardMaterial transparent opacity={opacity} />
                        {showEdige?<Edges
                            threshold={70} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                            color={edgeColor}
                        />:null}
                    </mesh>
                </group>
                <mesh scale={2000} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry />
                    <shadowMaterial transparent opacity={opacity} />
                </mesh>
            </group>
        </group>

    )
}

interface Props {}

const City: React.FC<Props> = ({ }) => {
    const [autoRotate, setAutoRotate] = useState(false);

    return <Canvas
        linear
        shadows
        raycaster={{ params: { Line: { threshold: 0.15 } } }}
        // camera={{ position: [-150, 100, 150], fov: 20 }}
        camera={{ position: [-100, 20, 200], fov: 400 }}
    >
        <color attach="background" args={['#fff']} />
        <ambientLight intensity={0.3} />
        <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1}
            shadow-mapSize={[1024, 1024]}
        >
            <orthographicCamera
                attach="shadow-camera"
                args={[-5, 5, 5, -5, 1, 100]}
            />
        </directionalLight>

        <mesh scale={20} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry />
            <shadowMaterial transparent opacity={0.5} />
        </mesh>
        <MainCity opacity={0.9} edgeColor={'black'} showEdige/>
        <OrbitControls makeDefault autoRotate={autoRotate} />
    </Canvas>
}

export default City;