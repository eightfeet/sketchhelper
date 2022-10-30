import { Edges } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Sphere: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <>
            {!showEdige ? <mesh castShadow={shadow} receiveShadow={shadow} position={position as any}>
                <sphereGeometry args={[1, 48, 48]} />
                <meshStandardMaterial transparent opacity={opacity} metalness={0.1} />
            </mesh> :
                <mesh castShadow={shadow} receiveShadow={shadow} position={position as any}>
                    <sphereGeometry args={[1, 24, 24]} />
                    <meshStandardMaterial transparent opacity={opacity} metalness={0.1} />
                    <Edges
                        threshold={5} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color="red"
                    />
                </mesh>
            }
        </>
    )
}

export default Sphere;