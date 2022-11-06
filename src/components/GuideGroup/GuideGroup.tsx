import { Line } from '@react-three/drei';
import { Euler, GroupProps } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import s from './GuideGroup.module.scss';

interface Props extends GroupProps {
    radius?: number;
    segments?: number;
    color?: string;
    lineWidth?: number;
    innerRadius?: number;
    innerRotation?: Euler;
    hideInner?: boolean;
}

const GuideGroup: React.FC<Props> = ({hideInner, innerRotation, radius=1, innerRadius, segments=60, color='#ff0', lineWidth=1.5, ...groupProps }) => {
    return (
        <group {...groupProps}>
            {hideInner===true ? null : <Line
                rotation={innerRotation || [0, 0, 0.785]}
                points={new THREE.Path().absarc(0, 0, innerRadius || radius, 0, Math.PI * 2, true).getSpacedPoints(segments)}
                color={color}
                lineWidth={lineWidth}
            />}
            <Line
                points={[
                    [-1*radius, 0, 0],
                    [1*radius, 0, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />

            <Line
                points={[
                    [-1*radius, 1*radius, 0],
                    [1*radius, 1*radius, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
            <Line
                points={[
                    [-1*radius, -1*radius, 0],
                    [1*radius, -1*radius, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
            <Line
                points={[
                    [0, -1*radius, 0],
                    [0, 1*radius, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
            <Line
                points={[
                    [1*radius, -1*radius, 0],
                    [1*radius, 1*radius, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
            <Line
                points={[
                    [-1*radius, -1*radius, 0],
                    [-1*radius, 1*radius, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
            <Line
                points={[
                    [1*radius, -1*radius, 0],
                    [-1*radius, 1*radius, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
            <Line
                points={[
                    [1*radius, 1*radius, 0],
                    [-1*radius, -1*radius, 0],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
            
        </group>
    )
}

export default GuideGroup;