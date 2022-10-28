import { PivotControls } from '@react-three/drei';
import React from 'react';

interface Props {
    children?: React.ReactNode;
    visible?: boolean;
}

const Wrap: React.FC<Props> = ({ children, visible = false }) => {
    return (
        <PivotControls
            rotation={[0, -Math.PI / 2, 0]}
            scale={75}
            depthTest={false}
            fixed
            disableAxes={!visible}
            disableRotations={!visible}
            disableSliders={!visible}
            displayValues={!visible}
            lineWidth={2}
            visible={visible}
        >
            {children}
        </PivotControls>
    );
};

export default Wrap;
