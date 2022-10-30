import { Line } from '@react-three/drei';
import React from 'react';

import Wrap from '../Wrap';

interface Props {
    onClick: () => void;
    tag: number;
    visible: boolean;
}

const Guide: React.FC<Props> = ({ onClick, visible }) => {
    return (
        <Wrap visible={visible} onClick={onClick}>
            <mesh>
                <Line
                    points={[
                        [-100000, 0, 0],
                        [100000, 0, 0],
                    ]}
                    color="royalblue"
                />
                <sphereGeometry args={[0.05,20,20]} />
                <meshStandardMaterial color="royalblue" transparent opacity={0.2} />
            </mesh>
        </Wrap>
    );
};

export default Guide;
