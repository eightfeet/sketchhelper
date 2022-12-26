import {
    Button,
    Dialog,
    Form,
    Input,
    Space,
    TextArea,
} from 'antd-mobile';
import React, { useCallback, useRef, useState } from 'react';
import s from './Generate.module.scss';
import { baseLicense, encodeDate } from '~/core/helper';
import licenseKey from 'license-key-gen';
import CustomPicker from './CustomPicker';
import dayjs from 'dayjs';

interface Props {}
const Generate: React.FC<Props> = ({}) => {
    const [data, setData] = useState<any>();
    const refDialog = useRef<any>();

    const authForm = Form.useForm()[0];

    const createPwd = useCallback(async () => {
        try {
            const values = authForm.getFieldsValue();
            const userLicenseData = {
                ...baseLicense,
                info: {
                    name: values.name
                },
            };
            const { license } = licenseKey.createLicense(userLicenseData);
            setData({
                ...authForm.getFieldsValue(),
                license: encodeDate(license, dayjs(values.date.toDateString()).format('YYYY-MM-DD')),
            });
            refDialog.current.close();
        } catch (err) {
            console.log(err);
        }
    }, [authForm]);

    const submit = useCallback(() => {
        createPwd();
    }, [createPwd]);

    const showCreate = useCallback(() => {
        refDialog.current = Dialog.show({
            title: '创建用户',
            content: (
                <Form form={authForm} className={s.formbody} onFinish={submit}>
                    <Form.Item
                        label="用户名"
                        name="name"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item
                        label="结束日期"
                        name="date"
                        rules={[{ required: true, message: '请选择日期' }]}
                    >
                        <CustomPicker />
                    </Form.Item>
                </Form>
            ),
            actions: [
                [
                    {
                        key: 'cancel',
                        text: '取消',
                        style: { color: 'var(--text-color)' },
                    },
                    {
                        key: 'confirm',
                        text: '确定',
                        style: {
                            color: 'var(--text-color)',
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
    }, [authForm, submit]);

    return (
        <>
            <Space style={{ padding: 20 }} direction="vertical">
                <Button onClick={showCreate}>创建</Button>
                {data && (
                    <TextArea
                        rows={5}
                        style={{ width: '20rem', font: '1rem' }}
                        defaultValue={`用户名：${data?.name}\n激活码：${data?.license}`}
                    />
                )}
            </Space>
        </>
    );
};

export default Generate;
