import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Environment,
    OrbitControls,
    PivotControls,
    Plane,
    softShadows,
    Html,
    Line
} from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { LayerMaterial, Depth, Noise } from 'lamina';
import Wrap from '../Wrap';
import Box from '../obj/Box';
import Sphere from '../obj/Sphere';
import Cone from '../obj/Cone';
import { Suspense, useState } from 'react';
import { pickFramework, pickGuid, pickObj, store } from './../StilLife/proxyStilLife';
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
import Light from './Light';

// softShadows();

export default function StilLife() {
    const data = useSnapshot(store);
    
    return (
        <>
            <Setting />
            <Canvas
                dpr={[1, 2]}
                linear
                legacy
                shadows
                raycaster={{ params: { Line: { threshold: 2 } } }}
                camera={{ position: [-20, 20, 20], fov: 20 }}
            >
                {/* <fog attach="fog" args={['#ccc', 0, 160]} />
                <color attach="background" args={['#bbb']} /> */}
                <ambientLight intensity={0.3} />
                {/**灯光 */}
                <Light />
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
                                <Comp {...other} />
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
                                colorA="#fff"
                                colorB="#fff"
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