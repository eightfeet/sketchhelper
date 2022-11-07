import { Line } from '@react-three/drei';
import * as THREE from 'three';
import React, { useCallback } from 'react';
import { GroupProps } from '@react-three/fiber';

interface Props extends GroupProps {
    radius?: number;
    segments?: number;
    cross?: boolean;
    color?: string;
    outerRing?: boolean;
}

const CircleCross:React.FC<Props> = ({radius=1, segments=8, cross, color="#000", outerRing, ...other}) => {
    const points = new THREE.Path().absarc(0, 0, radius, 0, Math.PI * 2, true).getSpacedPoints(segments);
    const renderCross = useCallback(
      () => {
        if (points.length % 2 === 0 || cross !== true) return null;
        const crossPoints = points.slice(1);
        const linesNode: React.ReactNode[]  = [];
        const half = crossPoints.length/2;
        for (let index = 0; index < half; index++) {
            const pointA = crossPoints[index];
            const pointB = crossPoints[index + half];
            linesNode.push(<Line color={color} key={index} points={[[pointA.x, pointA.y, 0], [pointB.x, pointB.y, 0]]}>asd</Line>);
        }
        return linesNode;
      },
      [points, cross, color],
    )

    const renderOuterRing = useCallback(
      () => outerRing ? <Line
            rotation={[0, 0, 0]}
            points={new THREE.Path().absarc(0, 0, radius, 0, Math.PI * 2, true).getSpacedPoints(60)}
            color={color}
            lineWidth={1.5}
        /> : null,
      [color, outerRing, radius],
    )
    
    
    return (
        <group {...other}>
            <Line
                rotation={[0, 0, 0]}
                points={points}
                color={color}
                lineWidth={1.5}
            />
            {renderOuterRing()}
            {renderCross()}
        </group>
    )
}

export default CircleCross;