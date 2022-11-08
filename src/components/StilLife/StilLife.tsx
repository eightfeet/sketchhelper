import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
    Environment,
    OrbitControls,
    PivotControls,
    Plane,
    softShadows,
    Html} from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { LayerMaterial, Depth, Noise } from 'lamina';
import Wrap from '../Wrap';
import Box from '../Box';
import Sphere from '../Sphere';
import Cone from '../Cone';
import { Suspense, useState } from 'react';
import { pickGuid, pickObj, store } from './proxyStilLife';
import {
    DotLoading,
} from 'antd-mobile';
import Guide from '../Guide';
import Setting from '../Setting';
import CylinderEight from '../CylinderEight';

softShadows();

const Cylinder = React.lazy(() => import('../Cylinder'));
const CoffeeCup = React.lazy(() => import('../CoffeeCup'));
const Bust = React.lazy(() => import('../Bust'));
const Apple = React.lazy(() => import('../Apple'));
const Foot = React.lazy(() => import('../Foot'));
const Venus = React.lazy(() => import('../Venus'));
const Bottle = React.lazy(() => import('../Bottle'));
const KitchenGroup = React.lazy(() => import('../KitchenGroup'));
const FruitsGroup = React.lazy(() => import('../FruitsGroup'));
const Shape = React.lazy(() => import('../Shape'));

export default function StilLife() {
    const data = useSnapshot(store);
    const [vLightCtrl, setVLightCtrl] = useState(false);

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
                {data.list.map(({ name, ...other }, index) => (
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
                            {name === 'box' && <Box {...other} />}
                            {name === 'cone' && <Cone {...other} />}
                            {name === 'sphere' && <Sphere {...other} />}
                            {name === 'cylinder' && <Cylinder {...other} />}
                            {name === 'cylindereight' && <CylinderEight {...other} />}
                            {name === 'shapea' && <Shape name="shapea" {...other} />}
                            {name === 'shapeb' && <Shape name="shapeb" {...other} />}
                            {name === 'shapec' && <Shape name="shapec" {...other} />}
                            {name === 'shaped' && <Shape name="shaped" {...other} />}
                            
                            {name === 'coffeeCup' && <CoffeeCup {...other} />}
                            {name === 'bust' && <Bust {...other} />}
                            {name === 'apple' && <Apple {...other} />}
                            {name === 'foot' && <Foot {...other} />}
                            {name === 'venus' && <Venus {...other} />}
                            {name === 'bottle' && <Bottle {...other} />}
                            {name === 'apple' && (
                                <FruitsGroup name="Apple" {...other} />
                            )}
                            {name === 'pear' && (
                                <FruitsGroup name="Pear" {...other} />
                            )}
                            {name === 'apricot' && (
                                <FruitsGroup name="Apricot" {...other} />
                            )}
                            {name === 'banana' && (
                                <FruitsGroup name="Banana" {...other} />
                            )}
                            {name === 'bowl' && (
                                <KitchenGroup name="Bowl" {...other} />
                            )}
                            {name === 'butterknife' && (
                                <KitchenGroup name="ButterKnife" {...other} />
                            )}
                            {name === 'cup' && (
                                <KitchenGroup name="Cup" {...other} />
                            )}
                            {name === 'cuphandle' && (
                                <KitchenGroup name="CupHandle" {...other} />
                            )}
                            {name === 'fork' && (
                                <KitchenGroup name="Fork" {...other} />
                            )}
                            {name === 'plate' && (
                                <KitchenGroup name="Plate" {...other} />
                            )}
                            {name === 'pot' && (
                                <KitchenGroup name="Pot" {...other} />
                            )}
                            {name === 'scoop' && (
                                <KitchenGroup name="Scoop" {...other} />
                            )}
                            {name === 'scoopstuff' && (
                                <KitchenGroup name="ScoopStuff" {...other} />
                            )}
                            {name === 'spatula' && (
                                <KitchenGroup name="Spatula" {...other} />
                            )}
                            {name === 'spoon' && (
                                <KitchenGroup name="Spoon" {...other} />
                            )}
                            {name === 'fryingpan' && (
                                <KitchenGroup name="FryingPan" {...other} />
                            )}
                        </Suspense>
                    </Wrap>
                ))}
                {data.guide.map((item, index) => (
                    <Guide
                        key={item.tag}
                        {...item}
                        onClick={() => pickGuid(index)}
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