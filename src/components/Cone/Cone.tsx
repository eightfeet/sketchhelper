import { Line } from '@react-three/drei';
import React from 'react';
import GuideGroup from '../GuideGroup';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Cone: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <mesh
            castShadow={shadow}
            // receiveShadow={shadow}
            position={[0, 0.5, 0]}
        >
            <coneGeometry args={[1, 3, 100]} />
            <meshStandardMaterial
                transparent
                opacity={opacity}
                metalness={0.1}
            />
            {showEdige && <>
                <GuideGroup color='red' position={[0, -1.49, 0]} rotation={[-1.57, 0, 0]}></GuideGroup>
                <GuideGroup color='red' position={[0, 1.49, 0]} rotation={[-1.57, 0, 0]}></GuideGroup>

                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [1, 1.5, -1],
                        [1, -1.5, -1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [0, 1.5, -0],
                        [1, -1.5, 0],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [1, 1.5, -0],
                        [1, -1.5, 0],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [0, 1.5, -0],
                        [0, -1.5, -1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [0, 1.5, 0],
                        [0, -1.5, 0],
                    ]}
                    color="red"
                />

                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [0, 1.5, -1],
                        [0, -1.5, -1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [-1, 1.5, -1],
                        [-1, -1.5, -1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [1, 1.5, 1],
                        [1, -1.5, 1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [-1, 1.5, 1],
                        [-1, -1.5, 1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [0, 1.5, 0],
                        [0, -1.5, 1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [0, 1.5, 1],
                        [0, -1.5, 1],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [0, 1.5, 0],
                        [-1, -1.5, 0],
                    ]}
                    color="red"
                />
                <Line
                    rotation={[0, 0, 0]}
                    points={[
                        [-1, 1.5, 0],
                        [-1, -1.5, 0],
                    ]}
                    color="red"
                />
            </>}
        </mesh>
    );
};

export default Cone;
