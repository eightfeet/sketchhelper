import { Center, Line } from '@react-three/drei';
import * as THREE from 'three';
import React, { useCallback } from 'react';
import { GroupProps } from '@react-three/fiber';

interface Props extends GroupProps {
    radius?: number;
    segments?: number;
    cross?: boolean;
    color?: string;
    innerRing?: boolean;
    extendArray?: {
        extend: number,
        radius: number,
        cross?: boolean,
        innerRing?: boolean,
        color?: string,
        lineWidth?: number,
    }[];
    extendCone?: boolean;
    lineWidth?: number;
    extendLine?: boolean;
    split?: number;
}

const CircleStepCross: React.FC<Props> = ({
    segments = 48,
    cross = true,
    color = '#000',
    extendCone,
    extendArray = [

    ],
    lineWidth = 1.5,
    innerRing = true,
    extendLine = true,
    split,
    ...other
}) => {

    const renderCross = useCallback(
        ({
            points, cross,
            color, lineWidth, position = 0
        }: {
            points: THREE.Vector2[];
            cross?: boolean;
            color?: string;
            lineWidth?: number;
            position?: number
        }) => {
            if (points.length % 2 === 0 || !cross) return null;
            const crossPoints = points.slice(1);
            const linesNode: React.ReactNode[] = [];
            const half = crossPoints.length / 2;
            for (let index = 0; index < half; index++) {
                if (split && index % split !== 0) {
                    continue;
                }
                const pointA = crossPoints[index];
                const pointB = crossPoints[index + half];
                linesNode.push(
                    <Line
                        color={color}
                        key={index}
                        lineWidth={lineWidth}
                        position={[0, 0, position]}
                        points={[
                            [pointA.x, pointA.y, 0],
                            [pointB.x, pointB.y, 0],
                        ]}
                    />
                );
            }
            return linesNode;
        },
        [split]
    );


    const getCirclePoints = useCallback(
        (radius: number, segments: number) => new THREE.Path()
            .absarc(0, 0, radius, 0, Math.PI * 2, true)
            .getSpacedPoints(segments),
        [],
    )

    const renderExtendsArr = useCallback(
        () => {
            if (!(extendArray instanceof Array)) return null;
            const extendNode: React.ReactNode[] = [];
            let yPosition = 0;
            extendArray.forEach((item, index) => {
                const points = getCirclePoints(item.radius, segments);
                const nextItem = extendArray[index + 1];
                const nextPoints = nextItem ? getCirclePoints(nextItem.radius, segments) : undefined;
                yPosition = yPosition + item.extend;
                const extendSubNode: React.ReactNode[] = [];

                // 环形
                if (item.innerRing ?? innerRing) {
                    extendSubNode.push(
                        <Line
                            rotation={[0, 0, 0]}
                            position={[0, 0, item.extend]}
                            key={`ring${index}`}
                            points={points}
                            color={item.color || color}
                            lineWidth={item.lineWidth ?? lineWidth}
                        />
                    )
                }
                // 交叉线
                if (item.cross || cross) {
                    extendSubNode.push(
                        renderCross({
                            points: points,
                            position: item.extend,
                            cross: item.cross ?? cross,
                            lineWidth: item.lineWidth ?? lineWidth,
                            color: item.color ?? color,
                        })
                    )
                }

                if (nextPoints) {
                    const crossPoints = points.slice(1);
                    const extendCrossPoints = nextPoints.slice(1);

                    for (let ind = 0; ind < crossPoints.length; ind++) {
                        const element = crossPoints[ind];
                        const topItem = extendCrossPoints[ind];
                        if (split && ind % split !== 0) {
                            continue;
                        }
                        if (extendLine) {
                            extendSubNode.push(
                                <Line
                                    color={color}
                                    key={`cross${ind}_${index}`}
                                    lineWidth={item.lineWidth ?? lineWidth}
                                    points={[
                                        [element.x, element.y, item.extend],
                                        [topItem.x, topItem.y, nextItem?.extend ?? item.extend],
                                    ]}
                                />
                            );
                        }
                    }
                }
                extendNode.push(<group>{extendSubNode}</group>)
            })

            return extendNode;
        },
        [color, cross, extendArray, extendLine, getCirclePoints, innerRing, lineWidth, renderCross, segments, split],
    )

    return (
        <group {...other}>
            <group rotation={[Math.PI / 180 * -90, 0, 0]} position={[0, 0, 0]}>
                {renderExtendsArr()}
            </group>
        </group>
    );
};

export default CircleStepCross;
