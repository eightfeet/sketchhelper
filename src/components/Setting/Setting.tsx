import {
    Button,
    Space,
    Popup,
    Form,
    Radio,
    Slider,
    Switch,
    Picker,
    Modal,
    Input,
} from 'antd-mobile';
import {
    SetOutline,
    RedoOutline,
    AddOutline,
    DeleteOutline,
    CloseOutline,
} from 'antd-mobile-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import useKeyPress from '~/hooks/useKeyPress';
import ColorPicker from '../ColorPicker';
import { objList } from '../StilLife/objList';
import { store, unvisibleData } from '../StilLife/proxyStilLife';
import s from './Setting.module.scss';

const pickData = [
    [
        { label: '1像素', value: '1' },
        { label: '1.5像素', value: '1.5' },
        { label: '2像素', value: '2' },
        { label: '2.5像素', value: '2.5' },
        { label: '3像素', value: '3' },
        { label: '3.5像素', value: '3.5' },
        { label: '4像素', value: '4' },
        { label: '4.5像素', value: '4.5' },
        { label: '5像素', value: '5' },
        { label: '5.5像素', value: '5.5' },
        { label: '6像素', value: '6' },
        { label: '6.5像素', value: '6.5' },
        { label: '7像素', value: '7' },
        { label: '7.5像素', value: '7.5' },
        { label: '8像素', value: '8' },
        { label: '8.5像素', value: '8.5' },
        { label: '9像素', value: '9' },
        { label: '9.5像素', value: '9.5' },
        { label: '10像素', value: '10' },
    ],
];

interface Props { }

const Setting: React.FC<Props> = () => {
    const [isSetting, setIsSetting] = useState(false);
    const [visibleSetting, setVisibleSetting] = useState(false);
    const [visibleFramework, setVisibleFramework] = useState(false);
    const [visibleGuide, setVisibleGuide] = useState(false);
    const willDelete = useKeyPress('Delete');

    const [form] = Form.useForm();
    const radiusForm = Form.useForm()[0];


    const data = useSnapshot(store);

    const createObj = useCallback(() => {
        unvisibleData();
        store.list.push({
            name: 'box',
            opacity: 1,
            showEdige: false,
            visible: true,
            shadow: true,
            obj: objList[0]
        });
        store.current = store.list.length - 1;
    }, []);

    const setObj = useCallback(() => {
        if (data.current === undefined) return;
        setVisibleSetting(true);
        form.setFieldsValue(store.list[data.current]);
    }, [data, form]);

    const createGrid = useCallback(() => {
        unvisibleData();
        store.guide.push({
            tag: (store.guide.slice(-1)[0]?.tag || 0) + 1,
            visible: true,
            showText: false,
            color: '#0693e3',
        });
        store.currentGuid = store.guide.length - 1;
    }, []);

    const showGridText = useCallback(() => {
        if (data.currentGuid !== undefined)
            store.guide[data.currentGuid].showText =
                !store.guide[data.currentGuid]?.showText;
    }, [data.currentGuid]);

    const createFramework = useCallback(() => {
        unvisibleData();
        store.framework.push({
            tag: (store.framework.slice(-1)[0]?.tag || 0) + 1,
            visible: true,
            showText: false,
            color: '#0693e3',
            radius: 1,
        });
        store.currentFramework = store.framework.length - 1;
    }, []);

    const deleteObj = useCallback(() => {
        store.current = undefined;
        store.list = store.list.filter((item, ind) => ind !== data.current);
    }, [data]);

    const deleteGuid = useCallback(() => {
        store.currentGuid = undefined;
        store.guide = store.guide.filter(
            (item, ind) => ind !== data.currentGuid
        );
    }, [data.currentGuid]);

    const deleteFramework = useCallback(() => {
        store.currentFramework = undefined;
        store.framework = store.framework.filter(
            (item, ind) => ind !== data.currentFramework
        );
    }, [data.currentFramework]);

    const onFieldsChange = useCallback(() => {
        const data = form.getFieldsValue();
        if (store.current !== undefined) {
            console.log('data', data);
            console.log('store.current', store.current);

            store.list = store.list.map((item, ind) => ({
                ...item,
                ...(ind === store.current ? { ...data, obj: objList.find(el => el.name === data.name) } : {}),
            }));
        }
        console.log('storelist', store.list);
    }, [form]);

    // 键盘删除
    useEffect(() => {
        if (data.current !== undefined && willDelete) {
            deleteObj();
        }
        if (data.currentGuid !== undefined && willDelete) {
            deleteGuid();
        }
        if (data.currentFramework !== undefined && willDelete) {
            deleteFramework();
        }
    }, [data, deleteFramework, deleteGuid, deleteObj, willDelete]);

    const changeradius = useCallback(
        () => {
            const { frameworkradius } = radiusForm.getFieldsValue();
            if (!isNaN(Number(frameworkradius)) && store.currentFramework !== undefined) {
                store.framework[store.currentFramework].radius = Number(frameworkradius);
            }
        },
        [radiusForm],
    )


    return (
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
                    <Space align="center" block wrap>
                        <span className="menulabel">场景</span>
                        <Button
                            size="mini"
                            fill={!data.autoRotate ? 'outline' : 'solid'}
                            onClick={() =>
                                (store.autoRotate = !data.autoRotate)
                            }
                        >
                            <RedoOutline />
                        </Button>
                        <ColorPicker
                            onChange={(e) => {
                                store.planeColor = e;
                            }}
                            color={data.planeColor}
                            colors={[
                                '#222',
                                '#333',
                                '#555',
                                '#666',
                                '#777',
                                '#888',
                                '#999',
                                '#AAA',
                                '#CCC',
                                '#eee',
                            ]}
                        />
                    </Space>
                    <br />
                    <Space align="center" block wrap>
                        <span className="menulabel">物体</span>
                        <Button size="mini" fill="outline" onClick={createObj}>
                            <AddOutline />
                        </Button>
                        {data.current !== undefined && (
                            <Button size="mini" fill="outline" onClick={setObj}>
                                <SetOutline />
                            </Button>
                        )}
                        {data.current !== undefined && (
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
                    <Space align="center" block wrap>
                        <span className="menulabel">结构线</span>
                        <Button
                            size="mini"
                            fill="outline"
                            onClick={createFramework}
                        >
                            <AddOutline />
                        </Button>
                        <Picker
                            columns={pickData}
                            value={[data.frameworkWidth.toString()]}
                            visible={visibleFramework}
                            onConfirm={() => setVisibleFramework(false)}
                            onSelect={([v]) => {
                                if (Number(v)) {
                                    store.frameworkWidth = Number(v);
                                }
                            }}
                        >
                            {(_, actions) => (
                                <Button
                                    size="mini"
                                    fill="outline"
                                    onClick={() => {
                                        setVisibleFramework(true);
                                    }}
                                >
                                    {data.frameworkWidth}像素
                                </Button>
                            )}
                        </Picker>
                        {data.currentFramework !== undefined && (
                            <Space>
                                <Button
                                    size="mini"
                                    fill="outline"
                                    onClick={() => {
                                        radiusForm.setFieldsValue({ frameworkradius: data.currentFramework ? store.framework[data.currentFramework!]?.radius : 1 })
                                        Modal.alert({
                                            title: '半径',
                                            content: <Form form={radiusForm}
                                                onFinish={changeradius}
                                            >
                                                <Form.Item label="结构线半径"
                                                    name={'frameworkradius'}
                                                    initialValue={store.framework[data.currentFramework!]?.radius.toString()}
                                                >
                                                    <Input
                                                        placeholder='请输入数值'
                                                        type="number" max={6}
                                                        step={0.1}
                                                    />
                                                </Form.Item></Form>,
                                            confirmText: '确定',
                                            onConfirm: () => {
                                                radiusForm.submit();
                                            }
                                        })
                                    }}
                                >
                                    半径: {store.framework[data.currentFramework!]?.radius.toString()}
                                </Button>
                                {/* <div className={s.size}>
                            粗细<Slider value={data.frameworkWidth} onChange={(e) => store.frameworkWidth = e as number} className={s.slide} ticks step={0.5} min={0} max={5} />
                        </div> */}

                                <ColorPicker
                                    onChange={(e) => {
                                        store.framework[
                                            data.currentFramework!
                                        ].color = e;
                                    }}
                                    color={
                                        data.framework[data.currentFramework!]
                                            ?.color
                                    }
                                />
                                <Button
                                    size="mini"
                                    onClick={deleteFramework}
                                    fill="outline"
                                >
                                    <DeleteOutline />
                                </Button>
                            </Space>
                        )}
                        <Button
                            size="mini"
                            onClick={() => {
                                store.hideFramework =
                                    !data.hideFramework;
                            }}
                            fill={
                                !store.hideFramework
                                    ? 'outline'
                                    : 'solid'
                            }
                        >
                            {data.hideFramework ? '显示' : '隐藏'}
                        </Button>
                    </Space>
                    <br />
                    <Space align="center" block wrap>
                        <span className="menulabel">透视线</span>
                        <Button size="mini" fill="outline" onClick={createGrid}>
                            <AddOutline />
                        </Button>
                        <Picker
                            columns={pickData}
                            value={[data.guideWidth.toString()]}
                            visible={visibleGuide}
                            onConfirm={() => setVisibleGuide(false)}
                            onSelect={([v]) => {
                                if (Number(v)) {
                                    store.guideWidth = Number(v);
                                }
                            }}
                        >
                            {(_, actions) => (
                                <Button
                                    size="mini"
                                    fill="outline"
                                    onClick={() => {
                                        setVisibleGuide(true);
                                    }}
                                >
                                    {data.guideWidth || 0}像素
                                </Button>
                            )}
                        </Picker>
                        {data.currentGuid !== undefined && (
                            <Space>

                                <ColorPicker
                                    onChange={(e) => {
                                        store.guide[data.currentGuid!].color =
                                            e;
                                    }}
                                    color={data.guide[data.currentGuid!]?.color}
                                />
                                <Button
                                    size="mini"
                                    fill={
                                        !data.guide[data.currentGuid!]?.showText
                                            ? 'outline'
                                            : 'solid'
                                    }
                                    onClick={showGridText}
                                >
                                    T
                                </Button>
                                <Button
                                    size="mini"
                                    onClick={deleteGuid}
                                    fill="outline"
                                >
                                    <DeleteOutline />
                                </Button>
                            </Space>
                        )}
                        <Button
                            size="mini"
                            onClick={() => {
                                store.hideGuide = !data.hideGuide;
                            }}
                            fill={
                                !store.hideGuide ? 'outline' : 'solid'
                            }
                        >
                            {data.hideGuide ? '显示' : '隐藏'}
                        </Button>
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
                        rules={[{ required: true, message: '请选择模块类型' }]}
                    >
                        <Radio.Group>
                            <Space direction="horizontal" wrap>
                                {objList.map((item) => (
                                    <Radio key={item.name} value={item.name}>
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
                    <Form.Item
                        name="showEdige"
                        label="显示边框"
                        valuePropName="checked"
                    >
                        <Switch uncheckedText="关" checkedText="开" />
                    </Form.Item>
                    <Form.Item
                        name="shadow"
                        label="显示/接受投影"
                        valuePropName="checked"
                    >
                        <Switch uncheckedText="关" checkedText="开" />
                    </Form.Item>
                </Form>
            </Popup>
        </div>
    );
};

export default Setting;
