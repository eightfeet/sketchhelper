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
    extend?: number;
    extendCone?: boolean;
    lineWidth?: number;
}

const CircleCross: React.FC<Props> = ({
    extend = 0,
    radius = 1,
    segments = 8,
    cross,
    color = '#000',
    outerRing,
    extendCone,
    lineWidth=1.5,
    ...other
}) => {
    const points = new THREE.Path()
        .absarc(0, 0, radius, 0, Math.PI * 2, true)
        .getSpacedPoints(segments);
    const renderCross = useCallback(
        () => {
            if (points.length % 2 === 0 || cross !== true) return null;
            const crossPoints = points.slice(1);
            const linesNode: React.ReactNode[] = [];
            const half = crossPoints.length / 2;
            for (let index = 0; index < half; index++) {
                const pointA = crossPoints[index];
                const pointB = crossPoints[index + half];
                linesNode.push(
                    <Line
                        color={color}
                        key={index}
                        lineWidth={lineWidth}
                        points={[
                            [pointA.x, pointA.y, 0],
                            [pointB.x, pointB.y, 0],
                        ]}
                    />
                );
            }
            return linesNode;
        },
        [points, cross, color, lineWidth]
    );

    const renderOuterRing = useCallback(
        () =>
            outerRing ? (
                <Line
                    rotation={[0, 0, 0]}
                    points={new THREE.Path()
                        .absarc(0, 0, radius, 0, Math.PI * 2, true)
                        .getSpacedPoints(60)}
                    color={color}
                    lineWidth={lineWidth}
                />
            ) : null,
        [color, outerRing, radius, lineWidth]
    );

    const renderExtends = useCallback(() => {
        if (!extend) return null;
        const crossPoints = points.slice(1);
        const extendNode: React.ReactNode[] = [];
        crossPoints.forEach((element, index) => {
            extendNode.push(
                <Line
                    color={color}
                    key={index}
                    lineWidth={lineWidth}
                    points={[
                        [element.x, element.y, 0],
                        [element.x, element.y, extend],
                    ]}
                />
            );
            if (extendCone) {
                extendNode.push(
                    <Line
                        color={color}
                        lineWidth={lineWidth}
                        key={`cone${index}`}
                        points={[
                            [element.x, element.y, 0],
                            [0, 0, extend],
                        ]}
                    />
                );
            }
        });
        extendNode.push(<Line
            key={crossPoints.length + 1}
            rotation={[0, 0, 0]}
            points={[[0,0,0],[0,0,extend]]}
            color={color}
            lineWidth={lineWidth}
        />)
        extendNode.push(
            <group key="extendcap" position={[0,0,extend]}>
                {renderCross()}
                {renderOuterRing()}
                <Line
                    rotation={[0, 0, 0]}
                    points={points}
                    color={color}
                    lineWidth={lineWidth}
                />
            </group>
        );
        return extendNode;
    }, [color, extend, extendCone, points, renderCross, renderOuterRing]);

    return (
        <group {...other}>
            <Line
                rotation={[0, 0, 0]}
                points={points}
                color={color}
                lineWidth={lineWidth}
            />
            {renderOuterRing()}
            {renderCross()}
            {renderExtends()}
        </group>
    );
};

export default CircleCross;
