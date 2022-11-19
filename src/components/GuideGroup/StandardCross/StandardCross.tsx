import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleCross from '../CircleCross';
import SquareCross from '../SquareCross';
import s from './StandardCross.module.scss';

interface Props extends GroupProps {
    lineWidth?: number;
    color?: string;
    raduis?: number;
    squareColor?: string;
}

const StandardCross: React.FC<Props> = ({ squareColor="red", lineWidth, color="red", raduis=1, ...groups}) => {
    return (
        <group
            {...groups}
        >
            <CircleCross
                radius={raduis}
                segments={60}
                color={color}
                lineWidth={lineWidth} />
            <SquareCross color={squareColor}
                lineWidth={lineWidth}
                cross={['diagonal', 'cross']}
                width={raduis * 2}
                height={raduis * 2}
            />
        </group>
    )
}

export default StandardCross;