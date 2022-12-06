import { Button, Space } from 'antd-mobile';
import React, { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { request } from '~/core/request';
import s from './Generate.module.scss';
import { dtop, ptod } from '~/core/helper';

interface Props {}

function genPassword() {
    var chars =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordLength = 6;
    var password = '';
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return [password, dayjs().format('YYYY-MM-DD')];
}
const test = 'WlRaeGRHaDVTaXd5TURJeUxURXlMVEEyLFpUWnhkR2g1U2l3eU1ESXlMVEV5TFRBMixXbXh0V1U1R1J5d3lNREl5TFRFeUxUQTI=';

const Generate: React.FC<Props> = ({}) => {
    const [data, setData] = useState()
    const createPwd = useCallback(async () => {
        // const data = await request.get('./az.json');
        ptod()
        const allpwds = dtop(test)

        const pwds = genPassword(); 
        console.log(pwds);

        console.log(allpwds);
    }, []);

    return (
        <Space style={{ padding: 20 }}>
            <Button onClick={createPwd}>创建</Button>
        </Space>
    );
};

export default Generate;
