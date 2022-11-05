import { Button, Space, Popup, Form, Radio, Slider, Switch } from 'antd-mobile';
import { SetOutline, RedoOutline, AddOutline, DeleteOutline, CloseOutline } from 'antd-mobile-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import useKeyPress from '~/hooks/useKeyPress';
import ColorPicker from '../ColorPicker';
import { objList } from '../StilLife/objList';
import { store } from '../StilLife/proxyStilLife';
import s from './Setting.module.scss';

interface Props {
}

const Setting:React.FC<Props> = () => {
    const [isSetting, setIsSetting] = useState(false);
    const [visibleSetting, setVisibleSetting] = useState(false);
    const willDelete = useKeyPress('Delete');

    const [ form ] = Form.useForm();
    const data = useSnapshot(store);

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
        store.current = store.list.length - 1;
    }, []);

    const setObj = useCallback(() => {
        if (data.current === undefined) return;
        setVisibleSetting(true);
        form.setFieldsValue(store.list[data.current]);
    }, [data, form]);


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
            visible: true,
            showText: false,
            color: '#0693e3',
        });
        store.currentGuid = store.guide.length - 1
    }, []);

    const showGridText = useCallback(() => {
        if (data.currentGuid !== undefined)
            store.guide[data.currentGuid].showText =
                !store.guide[data.currentGuid]?.showText;
    }, [data.currentGuid]);

    const deleteObj = useCallback(() => {
        store.current = undefined
        store.list = store.list.filter((item, ind) => ind !== data.current);
    }, [data]);

    const deleteGuid = useCallback(() => {
        store.currentGuid = undefined
        store.guide = store.guide.filter((item, ind) => ind !== data.currentGuid);
    }, [data.currentGuid]);

    const onFieldsChange = useCallback(() => {
        const data = form.getFieldsValue();
        console.log(data);
        if (store.current !== undefined) {
            store.list = store.list.map((item, ind) => ({
                ...item,
                ...(ind === store.current ? data : {}),
            }));
            console.log('store.list', );
            
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
    }, [data, deleteGuid, deleteObj, willDelete]);

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
                        <Space align="center" block>
                            <span className="menulabel">场景</span>
                            <Button
                                size="mini"
                                fill={!data.autoRotate ? 'outline' : 'solid'}
                                onClick={() => store.autoRotate = !data.autoRotate}
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
                            {data.current !== undefined && (
                                <Button
                                    size="mini"
                                    fill="outline"
                                    onClick={setObj}
                                >
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
                        <Space align="center" block>
                            <span className="menulabel">透视线</span>
                            <Button
                                size="mini"
                                fill="outline"
                                onClick={createGrid}
                            >
                                <AddOutline />
                            </Button>
                            {data.currentGuid !== undefined && (
                                <ColorPicker
                                    onChange={(e) => {
                                        store.guide[data.currentGuid!].color = e;
                                    }}
                                    color={data.guide[data.currentGuid!]?.color}
                                />
                            )}
                            {data.currentGuid !== undefined && (
                                <Button
                                    size="mini"
                                    fill={
                                        !data.guide[data.currentGuid!]?.showText
                                            ? 'outline'
                                            : 'solid'
                                    }
                                    onClick={showGridText}
                                >
                                    Text
                                </Button>
                            )}
                            {data.currentGuid !== undefined && (
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
    )
}

export default Setting;