import { Line } from '@react-three/drei';
import React from 'react';
import GuideGroup from '../../GuideGroup';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Cylinder: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <mesh castShadow={shadow} receiveShadow={shadow} position={position as any}>
            <cylinderGeometry args={[1, 1, 2, 100]} />
            <meshStandardMaterial transparent opacity={opacity} metalness={0.1} />
            {showEdige && <group>
                <GuideGroup color='red' position={[0, 1, 0]} rotation={[1.57, 0, 0]} />
                <GuideGroup color='red' position={[0, -1, 0]} rotation={[1.57, 0, 0]} />
                <Line
                    points={[
                        [0, -1, 0],
                        [0, 1, 0],
                    ]}
                    color={'gray'}
                    lineWidth={1.5}
                />
                <Line
                    points={[
                        [1, -1, 1],
                        [1, 1, 1],
                    ]}
                    color={'yellow'}
                    lineWidth={1.5}
                />
                <Line
                    points={[
                        [-1, -1, -1],
                        [-1, 1, -1],
                    ]}
                    color={'yellow'}
                    lineWidth={1.5}
                />
                <Line
                    points={[
                        [-1, -1, 1],
                        [-1, 1, 1],
                    ]}
                    color={'yellow'}
                    lineWidth={1.5}
                />
                <Line
                    points={[
                        [1, -1, -1],
                        [1, 1, -1],
                    ]}
                    color={'yellow'}
                    lineWidth={1.5}
                />
                <group>
                    <Line
                        points={[
                            [1, -1, 0],
                            [1, 1, 0],
                        ]}
                        color={'red'}
                        lineWidth={1.5}
                    />
                    <Line
                        points={[
                            [0, -1, 1],
                            [0, 1, 1],
                        ]}
                        color={'red'}
                        lineWidth={1.5}
                    />
                    <Line
                        points={[
                            [0, -1, -1],
                            [0, 1, -1],
                        ]}
                        color={'red'}
                        lineWidth={1.5}
                    />
                    <Line
                        points={[
                            [-1, -1, 0],
                            [-1, 1, 0],
                        ]}
                        color={'red'}
                        lineWidth={1.5}
                    />
                </group>
            </group>}
        </mesh>
    )
}

export default Cylinder;