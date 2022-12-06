import { Button, Space } from 'antd-mobile';
import React, { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { request } from '~/core/request';
import s from './Generate.module.scss';
import { dtop, ptod } from '~/core/helper';
import { generateKey } from '~/core/pwd';
import licenseKey from 'license-key-gen';

interface Props {}
const useInfo = {
    // mobile: '13800101001'
    // date: 2022
};

const userLicense = {
    info: useInfo,
    prodCode: 'ART',
    appVersion: '1.0',
    osType: 'IOS8',
};

const Generate: React.FC<Props> = ({}) => {
    const [data, setData] = useState();
    const createPwd = useCallback(async () => {
        try{
            const license = licenseKey.createLicense(userLicense);
            const validate = licenseKey.validateLicense(userLicense, "W0247-4RXD3-6TW0F-0FD63-64EFD-38180");
            console.log('验证', validate);
        }catch(err){
            console.log(err);
        }


    }, []);

    return (
        <Space style={{ padding: 20 }}>
            <Button onClick={createPwd}>创建</Button>
        </Space>
    );
};

export default Generate;
