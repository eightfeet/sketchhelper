import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,
    PivotControls,
    Plane,
    softShadows,
    Html,
    GizmoHelper,
    GizmoViewcube
} from '@react-three/drei';
import { useSnapshot } from 'valtio';
import Wrap from '../Wrap';
import { Suspense, useState } from 'react';
import { pickFramework, pickGuid, pickObj, store } from './proxyStilLife';
import {
    DotLoading,
} from 'antd-mobile';
import Guide from '../Guide';
import Setting from '../Setting';
import Framework from '../Framework';

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
                        shadow-camera-far={500}
                        shadow-camera-left={-4}
                        shadow-camera-right={4}
                        shadow-camera-top={4}
                        shadow-camera-bottom={-4}
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
                                            <span>模型加载中</span>
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
                <GizmoHelper
                    alignment="bottom-right" // widget alignment within scene
                    margin={[80, 80]} // widget margins (X, Y)
                >
                    <GizmoViewcube />
                </GizmoHelper>
            </Canvas>
        </>
    );
}