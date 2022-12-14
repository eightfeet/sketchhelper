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
    Toast,
    Dialog,
} from 'antd-mobile';
import {
    SetOutline,
    RedoOutline,
    AddOutline,
    DeleteOutline,
    CloseOutline,
} from 'antd-mobile-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSnapshot } from 'valtio';
import useKeyPress from '~/hooks/useKeyPress';
import ColorPicker from '../ColorPicker';
import { objList } from '~/core/objList';
import { store, unvisibleData } from '../StilLife/proxyStilLife';
import s from './Setting.module.scss';
import { auth } from '~/core/helper';

const pickData = (() => {
    const data: { label: string; value: string }[][] = [[]];
    for (let index = 1; index < 20; index++) {
        data[0].push({
            label: `${index * 0.5}像素`,
            value: `${index * 0.5}`,
        });
    }
    return data;
})();

interface Props {}

const Setting: React.FC<Props> = () => {
    const [isSetting, setIsSetting] = useState(true);
    const [visibleSetting, setVisibleSetting] = useState(false);
    const [visibleFramework, setVisibleFramework] = useState(false);
    const [visibleGuide, setVisibleGuide] = useState(false);
    const willDelete = useKeyPress('Delete');

    const [form] = Form.useForm();
    const radiusForm = Form.useForm()[0];
    const authForm = Form.useForm()[0];

    const data = useSnapshot(store);

    useEffect(() => {
        const sn = window.localStorage.getItem('sn');
        if (sn) {
            const { name, license } = JSON.parse(sn);
            auth(name, license);
        }
    }, []);

    const createObj = useCallback(() => {
        unvisibleData();
        store.list.push({
            name: 'box',
            opacity: 1,
            showEdige: false,
            visible: true,
            shadow: true,
            obj: objList[0],
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
            store.list = store.list.map((item, ind) => {
                if (item.obj.checkedlocked && !store.auth) {
                    return { ...item };
                }

                return {
                    ...item,
                    ...(ind === store.current
                        ? {
                              ...data,
                              obj: objList.find((el) => el.name === data.name),
                          }
                        : {}),
                };
            });
        }
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

    const changeradius = useCallback(() => {
        const { frameworkradius } = radiusForm.getFieldsValue();
        if (
            !isNaN(Number(frameworkradius)) &&
            store.currentFramework !== undefined
        ) {
            store.framework[store.currentFramework].radius =
                Number(frameworkradius);
        }
    }, [radiusForm]);

    const refDialog = useRef<any>();

    const authFormSubmit = useCallback(async () => {
        const { name, license } = authForm.getFieldsValue();
        try {
            await auth(name, license);
            Toast.show(
                decodeURI('%E6%BF%80%E6%B4%BB%E6%88%90%E5%8A%9F%EF%BC%81')
            );
            refDialog.current.close();
            window.localStorage.setItem(
                'sn',
                JSON.stringify({ name, license })
            );
        } catch (error) {
            Toast.show(decodeURI(error as string));
        }
    }, [authForm]);

    const checkAuth = useCallback(() => {
        refDialog.current = Dialog.show({
            title: '暂无访问权限，请输入账户名与激活码',
            content: (
                <Form
                    form={authForm}
                    onFinish={authFormSubmit}
                    className={s.formbody}
                >
                    <Form.Item
                        label="账户名"
                        name="name"
                        rules={[{ required: true, message: '请输入账户名' }]}
                    >
                        <Input placeholder="请输入账户名" />
                    </Form.Item>
                    <Form.Item
                        label="激活码"
                        name="license"
                        rules={[{ required: true, message: '请输入激活码' }]}
                    >
                        <Input placeholder="请输入激活码" />
                    </Form.Item>
                </Form>
            ),

            actions: [
                [
                    {
                        key: 'cancel',
                        text: '取消',
                        style: { color: 'var(--leva-colors-accent3)' },
                    },
                    {
                        key: 'confirm',
                        text: '确定',
                        style: {
                            color: 'var(--leva-colors-accent3)',
                            fontWeight: 'bolder',
                        },
                    },
                ],
            ],
            onAction(action, index) {
                if (action.key === 'confirm') {
                    authForm.submit();
                } else {
                    refDialog.current?.close();
                }
            },
        });
    }, [authForm, authFormSubmit]);

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
                        <span className="menulabel">物体</span>
                        <Button
                            size="mini"
                            fill="outline"
                            style={{ background: '#000', color: '#fff' }}
                            onClick={createObj}
                        >
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
                        <Button
                            size="mini"
                            fill="outline"
                            onClick={() => {
                                data.light === 'directional'
                                    ? (store.light = 'point')
                                    : (store.light = 'directional');
                            }}
                        >
                            {data.light === 'directional' && '切换到点光源'}
                            {data.light === 'point' && '切换到平行光'}
                        </Button>
                        {data.light === 'point' && (
                            <Button
                                size="mini"
                                fill="outline"
                                onClick={() =>
                                    (store.fixedPointLight =
                                        !data.fixedPointLight)
                                }
                            >
                                {data.fixedPointLight ? '旋转光源' : '固定光源'}
                            </Button>
                        )}
                        {data.light !== 'point' && (
                            <Button
                                size="mini"
                                fill="outline"
                                onClick={() => {
                                    store.wideAngle = !data.wideAngle;
                                }}
                            >
                                {!data.wideAngle
                                    ? '切换到广角镜头'
                                    : '切换到标准镜头'}
                            </Button>
                        )}
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
                            onCancel={() => setVisibleFramework(false)}
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
                                        radiusForm.setFieldsValue({
                                            frameworkradius:
                                                data.currentFramework
                                                    ? store.framework[
                                                          data.currentFramework!
                                                      ]?.radius
                                                    : 1,
                                        });
                                        Modal.alert({
                                            title: '半径',
                                            content: (
                                                <Form
                                                    form={radiusForm}
                                                    onFinish={changeradius}
                                                >
                                                    <Form.Item
                                                        label="结构线半径"
                                                        name={'frameworkradius'}
                                                        initialValue={store.framework[
                                                            data.currentFramework!
                                                        ]?.radius.toString()}
                                                    >
                                                        <Input
                                                            placeholder="请输入数值"
                                                            type="number"
                                                            max={6}
                                                            step={0.1}
                                                        />
                                                    </Form.Item>
                                                </Form>
                                            ),
                                            confirmText: '确定',
                                            onConfirm: () => {
                                                radiusForm.submit();
                                            },
                                        });
                                    }}
                                >
                                    半径:{' '}
                                    {store.framework[
                                        data.currentFramework!
                                    ]?.radius.toString()}
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
                                store.hideFramework = !data.hideFramework;
                            }}
                            fill={!store.hideFramework ? 'outline' : 'solid'}
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
                            onCancel={() => setVisibleGuide(false)}
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
                            fill={!store.hideGuide ? 'outline' : 'solid'}
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
                maskStyle={{ background: 'none' }}
            >
                <Form
                    className={s.listform}
                    layout="horizontal"
                    form={form}
                    onFieldsChange={onFieldsChange}
                >
                    <Form.Item
                        name="name"
                        label="模型"
                        layout="vertical"
                        rules={[{ required: true, message: '请选择模块类型' }]}
                    >
                        <Radio.Group>
                            <Space direction="horizontal" className={s.modulewrap} wrap>
                                {objList.map((item) => (
                                    <Radio
                                        key={item.name}
                                        value={item.name}
                                        disabled={
                                            item.checkedlocked && !data.auth
                                        }
                                    >
                                        <img
                                            src={item.thumbnail}
                                            className="thumbnail"
                                            onClick={() =>
                                                item.checkedlocked &&
                                                !data.auth &&
                                                checkAuth()
                                            }
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
