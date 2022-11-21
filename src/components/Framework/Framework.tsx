import React from 'react';
import { useSnapshot } from 'valtio';
import StandardCross from '../GuideGroup/StandardCross';
import { store } from '../StilLife/proxyStilLife';

import Wrap from '../Wrap';

interface Props {
    onClick: () => void;
    tag: number;
    visible: boolean;
    showText: boolean;
    color: string;
    radius: number;
}

const Framework: React.FC<Props> = ({ onClick, visible, showText, color, radius }) => {
    const data = useSnapshot(store);
    return (
        <Wrap visible={visible && !data.hideFramework} onClick={onClick}>
            <mesh>
                <StandardCross
                    lineWidth={data.hideFramework ? 0 : data.frameworkWidth}
                    color={color}
                    squareColor={color}
                    radius={radius}
                />
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

export default Framework;
