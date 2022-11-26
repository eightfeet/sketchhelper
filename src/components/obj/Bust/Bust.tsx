import { Center, useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Bust: React.FC<Props> = ({ position, shadow }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/bust-1-d.glb`) as any;
    
    return (
        <Center top scale={0.5} position={[0, -1, 0]}>
            <mesh
                receiveShadow={shadow}
                position={position as any}
                rotation={[0, Math.PI / 1, 0]}
                castShadow
                geometry={nodes.Mesh_0001.geometry}
                dispose={null}
            >
                    {/* <meshStandardMaterial transparent opacity={1} metalness={0.1} /> */}
                    <meshStandardMaterial roughness={0.7}  metalness={0.25} emissive={new THREE.Color(0x000000)} envMapIntensity={0.5} />
                
                {/* <meshStandardMaterial attach="material" transparent opacity={1} metalness={0.1} />
                <shadowMaterial opacity={1} /> */}
            </mesh>
        </Center>
    );
};

export default Bust;
