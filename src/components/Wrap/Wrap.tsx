import { PivotControls } from '@react-three/drei';
import React from 'react';

interface Props {
    children?: React.ReactNode;
    visible?: boolean;
    onClick?: (data: any) => void;
    onDoubleClick?: (data: any) => void;
}

const Wrap: React.FC<Props> = ({ children, onClick, onDoubleClick, ...other}) => {
    const { visible = false } = other;
    return (
        <PivotControls
            rotation={[0, -Math.PI / 2, 0]}
            scale={75}
            depthTest={false}
            fixed
            disableAxes={!visible}
            disableRotations={!visible}
            disableSliders={!visible}
            displayValues={true}
            lineWidth={2}
            visible={visible}
        >
            <mesh onClick={(e) => {
                e.stopPropagation();
                onClick?.(other);
            }} onDoubleClick={() => onDoubleClick?.(other)}>
                {children}
            </mesh>
        </PivotControls>
    );
};

export default Wrap;

