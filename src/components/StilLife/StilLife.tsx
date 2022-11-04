import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
    Environment,
    OrbitControls,
    PivotControls,
    Plane,
    Html,
    Ring
} from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { LayerMaterial, Depth, Noise } from 'lamina';
import ColorPicker from '../ColorPicker';
import Wrap from '../Wrap';
import Box from '../Box';
import Sphere from '../Sphere';
import Cone from '../Cone';
import { Suspense, useCallback, useState } from 'react';
import { store } from './proxyStilLife';
import {
    Button,
    DotLoading,
    Form,
    Popup,
    Radio,
    Slider,
    Space,
    Switch,
} from 'antd-mobile';
import {
    AddOutline,
    CloseOutline,
    DeleteOutline,
    RedoOutline,
    SetOutline,
} from 'antd-mobile-icons';
import Guide from '../Guide';
import KitchenGroup from '../KitchenGroup';
import FruitsGroup from '../FruitsGroup';
import { objList } from './objList';
import s from './StilLife.module.scss';
import useKeyPress from '~/hooks/useKeyPress';

const Cylinder = React.lazy(() => import('../Cylinder'));
const CoffeeCup = React.lazy(() => import('../CoffeeCup'));
const Bust = React.lazy(() => import('../Bust'));
const Apple = React.lazy(() => import('../Apple'));
const Foot = React.lazy(() => import('../Foot'));
const Venus = React.lazy(() => import('../Venus'));
const Bottle = React.lazy(() => import('../Bottle'));

export default function StilLife() {
    const data = useSnapshot(store);
    const [current, setCurrent] = useState<number>();
    const [currentGuid, setCurrentGuid] = useState<number>();
    const [visibleSetting, setVisibleSetting] = useState(false);
    const [form] = Form.useForm();
    const [autoRotate, setAutoRotate] = useState(false);
    const willDelete = useKeyPress('Delete');

    const onClick = useCallback(
        (
            index: number,
            other: {
                opacity: number;
                showEdige: boolean;
                visible: boolean;
                shadow: boolean;
            }
        ) => {
            store.list = store.list.map((item, ind) => ({
                ...item,
                visible: item.visible ? false : index === ind,
            }));
            store.guide = store.guide.map((item, ind) => ({
                ...item,
                visible: false,
            }));
            store.list.some((el, ind) => {
                setCurrent(el.visible ? ind : undefined);
                return el.visible;
            });
        },
        []
    );

    const onClickGrid = useCallback(
        (
            index: number,
            other: {
                tag: number;
                visible: boolean;
            }
        ) => {
            store.guide = store.guide.map((item, ind) => ({
                ...item,
                visible: item.visible ? false : index === ind,
            }));
            store.list = store.list.map((item, ind) => ({
                ...item,
                visible: false,
            }));
            store.guide.some((el, ind) => {
                setCurrentGuid(el.visible ? ind : undefined);
                return el.visible;
            });
        },
        []
    );

    const onDoubleClick = useCallback(
        (
            index: number,
            other: {
                opacity: number;
                showEdige: boolean;
                visible: boolean;
                shadow: boolean;
            }
        ) => {
            setCurrent(index);
            store.list = store.list.filter((item, ind) => ind !== index);
        },
        []
    );

    const createObj = useCallback(() => {
        store.list = store.list.map((item, ind) => ({
            ...item,
            visible: false,
        }));
        store.guide = store.guide.map((item, ind) => ({
            ...item,
            visible: false,
        }));
        store.list.push({
            name: 'box',
            opacity: 1,
            showEdige: false,
            visible: true,
            shadow: true,
        });
    }, []);

    const setObj = useCallback(() => {
        if (current === undefined) return;
        setVisibleSetting(true);
        form.setFieldsValue(store.list[current]);
    }, [current, form]);

    const deleteObj = useCallback(() => {
        setCurrent(undefined);
        store.list = store.list.filter((item, ind) => ind !== current);
    }, [current]);

    const deleteGuid = useCallback(() => {
        store.guide = store.guide.filter((item, ind) => ind !== currentGuid);
        setCurrentGuid(undefined);
    }, [currentGuid]);

    const onFieldsChange = useCallback(() => {
        const data = form.getFieldsValue();
        console.log(data);
        if (current !== undefined) {
            store.list = store.list.map((item, ind) => ({
                ...item,
                ...(ind === current ? data : {}),
            }));
        }
    }, [current, form]);

    const createGrid = useCallback(() => {
        store.list = store.list.map((item, ind) => ({
            ...item,
            visible: false,
        }));
        store.guide = store.guide.map((item, ind) => ({
            ...item,
            visible: false,
        }));
        store.guide.push({
            tag: (store.guide.slice(-1)[0]?.tag || 0) + 1,
            visible: false,
            showText: false,
            color: '#0693e3',
        });
        setCurrentGuid(store.guide.length - 1);
    }, []);

    const showGridText = useCallback(() => {
        if (currentGuid !== undefined)
            store.guide[currentGuid].showText =
                !store.guide[currentGuid].showText;
    }, [currentGuid]);

    const [isSetting, setIsSetting] = useState(false);
    const [vLightCtrl, setVLightCtrl] = useState(false);

    // 键盘删除
    useEffect(() => {
        if (current !== undefined && willDelete) {
            deleteObj();
        }
        if (currentGuid !== undefined && willDelete) {
            deleteGuid();
        }
    }, [current, currentGuid, deleteGuid, deleteObj, willDelete]);

    return (
        <>
            <div className="navbar" onClick={(e) => e.stopPropagation()}>
                <br />
                {!isSetting ? (
                    <Button
                        size="mini"
                        fill="none"
                        onClick={() => setIsSetting(true)}
                    >
                        <SetOutline />
                    </Button>
                ) : (
                    <div>
                        <Space align="center" block>
                            <span className="menulabel">场景</span>
                            <Button
                                size="mini"
                                fill={!autoRotate ? 'outline' : 'solid'}
                                onClick={() => setAutoRotate((res) => !res)}
                            >
                                <RedoOutline />
                            </Button>
                        </Space>
                        <br />
                        <Space align="center" block>
                            <span className="menulabel">物体</span>
                            <Button
                                size="mini"
                                fill="outline"
                                onClick={createObj}
                            >
                                <AddOutline />
                            </Button>
                            {current !== undefined && (
                                <Button
                                    size="mini"
                                    fill="outline"
                                    onClick={setObj}
                                >
                                    <SetOutline />
                                </Button>
                            )}
                            {current !== undefined && (
                                <Button
                                    size="mini"
                                    fill="outline"
                                    onClick={deleteObj}
                                >
                                    <DeleteOutline />
                                </Button>
                            )}
                        </Space>
                        <br />
                        <Space align="center" block>
                            <span className="menulabel">透视线</span>
                            <Button
                                size="mini"
                                fill="outline"
                                onClick={createGrid}
                            >
                                <AddOutline />
                            </Button>
                            {currentGuid !== undefined && (
                                <ColorPicker
                                    onChange={(e) => {
                                        store.guide[currentGuid].color = e;
                                    }}
                                    color={data.guide[currentGuid].color}
                                />
                            )}
                            {currentGuid !== undefined && (
                                <Button
                                    size="mini"
                                    fill={
                                        !data.guide[currentGuid].showText
                                            ? 'outline'
                                            : 'solid'
                                    }
                                    onClick={showGridText}
                                >
                                    Text
                                </Button>
                            )}
                            {currentGuid !== undefined && (
                                <Button
                                    size="mini"
                                    onClick={deleteGuid}
                                    fill="outline"
                                >
                                    <DeleteOutline />
                                </Button>
                            )}
                        </Space>
                        <br />
                        <Space>
                            <span className="menulabel">&nbsp;</span>
                            <Button
                                size="mini"
                                fill="none"
                                onClick={() => setIsSetting(false)}
                            >
                                <CloseOutline />
                            </Button>
                        </Space>
                    </div>
                )}
                <Popup
                    visible={visibleSetting}
                    onMaskClick={() => {
                        setVisibleSetting(false);
                    }}
                    position="top"
                >
                    <Form
                        className={s.listform}
                        layout="horizontal"
                        form={form}
                        onFieldsChange={onFieldsChange}
                    >
                        <Form.Item
                            name="name"
                            label="模块类型"
                            layout="vertical"
                            rules={[
                                { required: true, message: '请选择模块类型' },
                            ]}
                        >
                            <Radio.Group>
                                <Space direction="horizontal" wrap>
                                    {objList.map((item) => (
                                        <Radio
                                            key={item.name}
                                            value={item.name}
                                        >
                                            <img
                                                src={`./glb/thumbnail/${item.name}.png`}
                                                className="thumbnail"
                                                alt={item.label}
                                            />
                                        </Radio>
                                    ))}
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="opacity" label="透明度">
                            <Slider ticks step={0.1} min={0} max={1} />
                        </Form.Item>
                        <Form.Item name="showEdige" label="显示边框">
                            <Switch uncheckedText="关" checkedText="开" />
                        </Form.Item>
                        <Form.Item name="shadow" label="显示/接受投影">
                            <Switch uncheckedText="关" checkedText="开" />
                        </Form.Item>
                    </Form>
                </Popup>
            </div>
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
                        shadowBias={-0.0001}
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
                            args={[-5, 5, 5, -5, 1, 50]}
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
                        onClick={() => {
                            onClick(index, other);
                        }}
                        onDoubleClick={() => onDoubleClick(index, other)}
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
                        onClick={() => onClickGrid(index, item)}
                    />
                ))}
                <Plane
                    // onClick={onClickPlan}
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1, 0]}
                    args={[10000, 10000]}
                >
                    <meshStandardMaterial attach="material" color="#555" />
                </Plane>
                <OrbitControls
                    makeDefault
                    autoRotate={autoRotate}
                    autoRotateSpeed={1}
                />
                <Environment background resolution={5}>
                    <mesh scale={1000}>
                        <sphereGeometry args={[1, 64, 64]} />
                        <LayerMaterial side={THREE.BackSide}>
                            <Depth
                                colorA="#fff"
                                colorB="#aaa"
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
