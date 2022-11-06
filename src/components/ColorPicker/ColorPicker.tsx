import { Button } from 'antd-mobile';
import React, { useCallback, useState } from 'react';
import { ColorChangeHandler, TwitterPicker } from 'react-color';
import s from './ColorPicker.module.scss';

interface Props {
    color: string;
    colors?: string[];
    onChange: (color:string) => void;
}

const ColorPicker:React.FC<Props> = ({ color, onChange, colors }) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const handleCoveClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setDisplayColorPicker(false)
      },
      [],
    )

    const handleChange: ColorChangeHandler = useCallback(
      (e) => {
        onChange(e.hex)
      },
      [onChange],
    )
    
    
    return (
        <div className={s.root}>
            <Button size="mini" style={{backgroundColor: color}} onClick={() => setDisplayColorPicker(true)}>&nbsp;</Button>
            {displayColorPicker ? <div className={s.pickerwrap}>
                <div className={s.cover} onClick={handleCoveClick} />
                <br />
                <TwitterPicker colors={colors} onChange={handleChange} />
            </div> : null}
        </div>
    )
}

export default ColorPicker;