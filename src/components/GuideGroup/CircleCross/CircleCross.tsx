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
    innerRing?: boolean;
    extend?: number;
    extendRadius?: number;
    extendCone?: boolean;
    lineWidth?: number;
    extendLine?: boolean;
}

const CircleCross: React.FC<Props> = ({
    extend = 0,
    radius = 1,
    segments = 8,
    cross,
    color = '#000',
    outerRing,
    extendRadius,
    extendCone,
    lineWidth = 1.5,
    innerRing = true,
    extendLine = true,
    ...other
}) => {
    const points = new THREE.Path()
        .absarc(0, 0, radius, 0, Math.PI * 2, true)
        .getSpacedPoints(segments);

    const renderCross = useCallback(
        (p = points) => {
            if (p.length % 2 === 0 || cross !== true) return null;
            const crossPoints = p.slice(1);
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
        (rad = radius) =>
            outerRing ? (
                <Line
                    rotation={[0, 0, 0]}
                    points={new THREE.Path()
                        .absarc(0, 0, rad, 0, Math.PI * 2, true)
                        .getSpacedPoints(60)}
                    color={color}
                    lineWidth={lineWidth}
                />
            ) : null,
        [radius, outerRing, color, lineWidth]
    );

    const renderExtends = useCallback(() => {
        if (!extend) return null;
        const crossPoints = points.slice(1);
        const extendNode: React.ReactNode[] = [];
        const extendPoints =
            extendRadius !== undefined
                ? new THREE.Path()
                      .absarc(0, 0, extendRadius, 0, Math.PI * 2, true)
                      .getSpacedPoints(segments)
                : points;
        const extendCrossPoints = extendPoints.slice(1);

        crossPoints.forEach((element, index) => {
            const topItem = extendCrossPoints[index];
            if (extendLine) {
                extendNode.push(
                    <Line
                        color={color}
                        key={index}
                        lineWidth={lineWidth}
                        points={[
                            [element.x, element.y, 0],
                            [topItem.x, topItem.y, extend],
                        ]}
                    />
                );
            }
            
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
        cross && extendLine && extendNode.push(
            <Line
                key={crossPoints.length + 1}
                rotation={[0, 0, 0]}
                points={[
                    [0, 0, 0],
                    [0, 0, extend],
                ]}
                color={color}
                lineWidth={lineWidth}
            />
        );

        extendNode.push(
            <group key="extendcap" position={[0, 0, extend]}>
                {renderCross(extendPoints)}
                {renderOuterRing(extendRadius)}
                {innerRing && <Line
                    rotation={[0, 0, 0]}
                    points={extendPoints}
                    color={color}
                    lineWidth={lineWidth}
                />}
            </group>
        );
        return extendNode;
    }, [extend, points, extendRadius, segments, cross, color, lineWidth, renderCross, renderOuterRing, innerRing, extendCone]);

    return (
        <group {...other}>
            <group rotation={[-1.57, 0, 0]} position={[0,-1,0]}>
                {innerRing && <Line
                    rotation={[0, 0, 0]}
                    points={points}
                    color={color}
                    lineWidth={lineWidth}
                />}
                {renderOuterRing()}
                {renderCross()}
                {renderExtends()}
            </group>
        </group>
    );
};

export default CircleCross;
