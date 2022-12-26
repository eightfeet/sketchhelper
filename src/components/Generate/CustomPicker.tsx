import { Button, DatePicker } from 'antd-mobile';
import { useCallback, useState } from 'react';

import React from 'react';
import dayjs from 'dayjs';

interface Props {
    defaultValue?: Date;
    onChange?: (date: Date) => void;
    value?: Date;
}

const CustomPicker: React.FC<Props> = ({ defaultValue, onChange, value }) => {
    const [visible, setVisible] = useState(false);

    const labelRenderer = useCallback((type: string, data: number) => {
        switch (type) {
            case 'year':
                return data + '年';
            case 'month':
                return data + '月';
            case 'day':
                return data + '日';
            case 'hour':
                return data + '时';
            case 'minute':
                return data + '分';
            case 'second':
                return data + '秒';
            default:
                return data;
        }
    }, []);

    return (
        <>
            <Button
                onClick={() => {
                    setVisible(true);
                }}
            >
                {value ? dayjs(value.toDateString()).format('YYYY-MM-DD') : '选择'}
            </Button>
            <DatePicker
                title="时间选择"
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                defaultValue={defaultValue || new Date()}
                min={dayjs().subtract(1, 'year').toDate()}
                onConfirm={(val) => {
                    onChange?.(val)
                }}
                renderLabel={labelRenderer}
            />
        </>
    );
};

export default CustomPicker;
