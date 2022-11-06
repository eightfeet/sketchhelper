import { Line, LineProps } from '@react-three/drei';
import * as THREE from 'three';
import React from 'react';

interface Props {
    radius?: number;
    segments?: number;
    color?: string;
    lineWidth?: number;
    resolution?: THREE.Vector2
}

const GuideCircle:React.FC<Props> = ({
    radius=1,
    segments=60,
    color='red',
    lineWidth=1.5,
    resolution,
}) => {
    return (
        <Line
            rotation={[0, 0, 0.785]}
            points={new THREE.Path().absarc(0, 0, radius|| 1, 0, Math.PI * 2, true).getSpacedPoints(segments)}
            color={color}
            lineWidth={lineWidth}
            resolution={resolution}
        />
    )
}

export default GuideCircle;