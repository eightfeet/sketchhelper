import { Html, Line } from '@react-three/drei';
import React from 'react';

import Wrap from '../Wrap';

interface Props {
    onClick: () => void;
    tag: number;
    visible: boolean;
    showText: boolean;
    color: string;
}

const Guide: React.FC<Props> = ({ onClick, visible, showText, color }) => {
    return (
        <Wrap visible={visible} onClick={onClick}>
            <mesh>
                <Line
                    points={[
                        [-100000, 0, 0],
                        [100000, 0, 0],
                    ]}
                    color={color}
                    lineWidth={3}
                />
                {showText && <>
                    <mesh position={[-900, 16, 28]}>
                        <Html>
                            <div className="xiaoshidian">消失点</div>
                        </Html>
                    </mesh>
                    <mesh position={[900, 16, -28]}>
                        <Html>
                            <div className="xiaoshidian">消失点</div>
                        </Html>
                    </mesh>
                </>}
            </mesh>
            {/* <Line
                points={[
                    [-100000, 0, 0],
                    [100000, 0, 0],
                ]}
                color="royalblue"
                transparent
                opacity={0}
                lineWidth={10}
            /> */}
        </Wrap>
    );
};

export default Guide;
