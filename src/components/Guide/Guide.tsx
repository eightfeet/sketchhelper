import { Line } from '@react-three/drei';
import React from 'react';

import Wrap from '../Wrap';

interface Props {}

const Guide: React.FC<Props> = ({}) => {
    return (
        <>
            <Wrap>
                <Line
                    points={[
                        [-100000, 0, 0.5],
                        [100000, 0, 0.5],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [-100000, 1, 0.5],
                        [100000, 1, 0.5],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [-100000, 0, -0.5],
                        [100000, 0, -0.5],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [-100000, 1, -0.5],
                        [100000, 1, -0.5],
                    ]}
                    color="royalblue"
                />
            </Wrap>

            <Wrap>
                <Line
                    points={[
                        [-0.5, -100000, 0.5],
                        [-0.5, 100000, 0.5],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [0.5, -100000, 0.5],
                        [0.5, 100000, 0.5],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [-0.5, -100000, -0.5],
                        [-0.5, 100000, -0.5],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [0.5, -100000, -0.5],
                        [0.5, 100000, -0.5],
                    ]}
                    color="royalblue"
                />
            </Wrap>
            <Wrap>
                <Line
                    points={[
                        [-0.5, 1, -100000],
                        [-0.5, 1, 100000],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [0.5, 0, -100000],
                        [0.5, 0, 100000],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [-0.5, 0, -100000],
                        [-0.5, 0, 100000],
                    ]}
                    color="royalblue"
                />
                <Line
                    points={[
                        [0.5, 1, -100000],
                        [0.5, 1, 100000],
                    ]}
                    color="royalblue"
                />
            </Wrap>
        </>
    );
};

export default Guide;
