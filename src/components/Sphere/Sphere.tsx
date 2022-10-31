import { Edges } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';

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
                    <meshStandardMaterial roughness={0.7}  metalness={0.25} transparent opacity={opacity} emissive={new THREE.Color(0x000000)} envMapIntensity={0.5} />
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