import { Edges } from '@react-three/drei';
import React from 'react';

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
            position={position as any}
        >
            <coneGeometry args={[1, 3, 100]} />
            <meshStandardMaterial
                transparent
                opacity={opacity}
                metalness={0.1}
            />
            {showEdige && (
                <Edges
                    threshold={5} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    color="red"
                />
            )}
        </mesh>
    );
};

export default Cone;
