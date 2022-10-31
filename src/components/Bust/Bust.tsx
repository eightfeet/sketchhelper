import { Center, useGLTF } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Bust: React.FC<Props> = ({ position }) => {
    const { nodes } = useGLTF('/glb/bust-1-d.glb') as any;
    console.log(nodes);
    
    return (
        <Center top scale={0.5} position={[0, -1, 0]}>
            <mesh
                receiveShadow
                position={position as any}
                castShadow
                geometry={nodes.Mesh_0001.geometry}
                dispose={null}
            >
                <meshStandardMaterial attach="material" transparent opacity={1} metalness={0.1} />
            </mesh>
        </Center>
    );
};

export default Bust;
