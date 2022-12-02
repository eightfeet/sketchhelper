import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
    Environment,
    OrbitControls,
    PivotControls,
    Plane,
    softShadows,
    Html
} from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { LayerMaterial, Depth, Noise } from 'lamina';
import Wrap from '../Wrap';
import Box from '../obj/Box';
import Sphere from '../obj/Sphere';
import Cone from '../obj/Cone';
import { Suspense, useState } from 'react';
import { pickFramework, pickGuid, pickObj, store } from './proxyStilLife';
import {
    DotLoading,
} from 'antd-mobile';
import Guide from '../Guide';
import Setting from '../Setting';
import CylinderEight from '../obj/CylinderEight';
import CupHandle from '../obj/CupHandle';
import Test from '../obj/Test';
import Framework from '../Framework';
import { angleToRotation } from '~/core/helper';

softShadows();

export default function StilLife() {
    const data = useSnapshot(store);
    const [vLightCtrl, setVLightCtrl] = useState(false);

    return (
        <>
            <Setting />
            <Canvas
                dpr={[1, 2]}
                key={`${data.wideAngle}`}
                linear
                legacy
                shadows
                raycaster={{ params: { Line: { threshold: 2 } } }}
                camera={{ position: [-20, 20, 20], fov: data.wideAngle ? 130 : 20 }}
            >
                {/* <fog attach="fog" args={['#ccc', 0, 160]} />
                <color attach="background" args={['#bbb']} /> */}
                <ambientLight intensity={0.3} />
                {/**灯光 */}
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
                        position={[2.5, 8, 5]}
                        onClick={() => setVLightCtrl((status) => !status)}
                    >
                        <sphereGeometry args={[0.1, 20, 20]} />
                        <meshBasicMaterial
                            attach="material"
                            color="#fff"
                            toneMapped={false}
                        />
                    </mesh>
                    <directionalLight
                        castShadow
                        position={[2.5, 8, 5]}
                        intensity={1.5}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    >
                        <orthographicCamera
                            attach="shadow-camera"
                            left={-4}
                            right={4}
                            top={4}
                            bottom={-4}
                            near={0}
                            far={25}
                        />
                    </directionalLight>
                    <directionalLight
                        position={[-2.5, -8, -5]}
                        intensity={0.2}
                    />
                </PivotControls>
                {/* <Wrap visible>
                    <Test opacity={1} scale={0.08} shadow  />
                </Wrap> */}
                {/* <Wrap >
                    <Apple opacity={0.5}   />
                </Wrap>  */}

                {/* <Wrap >
                    <CupA opacity={1} showEdige shadow />
                </Wrap> */}

                {data.list.map(({ name, obj, ...other }, index) => {
                    const Comp = React.lazy(() => import(`../obj/${obj.component}`));
                    return (
                        <Wrap
                            key={index}
                            onClick={() => pickObj(index)}
                            {...other}
                        >
                            <Suspense
                                fallback={
                                    <Html>
                                        <div className="loading">
                                            <DotLoading />
                                        </div>
                                    </Html>
                                }
                            >
                                <Comp {...other}/>
                            </Suspense>
                        </Wrap>
                    )
                })}
                {data.guide.map((item, index) => (
                    <Guide
                        key={item.tag}
                        {...item}
                        onClick={() => pickGuid(index)}
                    />
                ))}
                {data.framework.map((item, index) => (
                    <Framework
                        key={item.tag}
                        {...item}
                        onClick={() => pickFramework(index)}
                    />
                ))}
                <Plane
                    // onClick={onClickPlan}
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1, 0]}
                    args={[10000, 10000]}
                >
                    <meshStandardMaterial fog color={data.planeColor} />
                </Plane>
                <OrbitControls
                    makeDefault
                    autoRotate={data.autoRotate}
                    autoRotateSpeed={1}
                />
                <Environment background resolution={5}>
                    <mesh scale={1000}>
                        <sphereGeometry args={[1, 64, 64]} />
                        <LayerMaterial side={THREE.BackSide}>
                            <Depth
                                colorA="#000"
                                colorB="#000"
                                alpha={0.5}
                                mode="normal"
                                near={0}
                                far={300}
                                origin={[100, 100, 100]}
                            />
                            <Noise
                                mapping="local"
                                type="cell"
                                scale={0.5}
                                mode="softlight"
                            />
                        </LayerMaterial>
                    </mesh>
                </Environment>
            </Canvas>
        </>
    );
}