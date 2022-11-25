import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleCross from '../CircleCross';
import SquareCross from '../SquareCross';

interface Props extends GroupProps {
    lineWidth?: number;
    color?: string;
    radius?: number;
    squareColor?: string;
    isSquare?: boolean;
}

const StandardCross: React.FC<Props> = ({ squareColor = "red", isSquare = true, lineWidth, color = "red", radius = 1, ...groups }) => {
    return (
        <group
            {...groups}
        >
            <CircleCross
                radius={radius}
                segments={60}
                color={color}
                lineWidth={lineWidth} />
            {isSquare && <SquareCross color={squareColor}
                lineWidth={lineWidth}
                cross={['diagonal', 'cross']}
                width={radius * 2}
                height={radius * 2}
            />}
        </group>
    )
}

export default StandardCross;