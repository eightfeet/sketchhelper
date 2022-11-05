import { Line } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import s from './GuideGroup.module.scss';

interface Props extends GroupProps {
    radius?: number;
    segments?: number;
    color?: string;
    lineWidth?: number;
}

const GuideGroup: React.FC<Props> = ({ radius=1, segments=60, color='#ff0', lineWidth=1.5, ...groupProps }) => {
    return (
        <group {...groupProps}>
            <Line
                rotation={[0, 0, 0.785]}
                points={new THREE.Path().absarc(0, 0, radius, 0, Math.PI * 2, true).getSpacedPoints(segments)}
                color={color}
                lineWidth={lineWidth}
            />
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