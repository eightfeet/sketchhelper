import { Button, Dialog, Form, Input, Space, TextArea } from 'antd-mobile';
import React, { useCallback, useRef, useState } from 'react';
import s from './Generate.module.scss';
import { baseLicense, decodeDate, encodeDate } from '~/core/helper';
import licenseKey from 'license-key-gen';

interface Props {}
const Generate: React.FC<Props> = ({}) => {
    const [data, setData] = useState<any>();
    const refDialog = useRef<any>();

    const authForm = Form.useForm()[0];

    const createPwd = useCallback(async () => {
        try {
            const userLicenseData = {
                ...baseLicense,
                info: authForm.getFieldsValue(),
            }
            const { license } = licenseKey.createLicense(userLicenseData);
            // const validate = licenseKey.validateLicense(licData, lice);
            console.log('结果', license, decodeDate(encodeDate(license)));
            setData({
                ...authForm.getFieldsValue(),
                license: encodeDate(license),
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
                console.log(action);
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
                    <TextArea rows={5} style={{width: '20rem', font: '1rem'}} defaultValue={`用户名：${data?.name}\n激活码：${data?.license}`} />
                )}
            </Space>
        </>
    );
};

export default Generate;
