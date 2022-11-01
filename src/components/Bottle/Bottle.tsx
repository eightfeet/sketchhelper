import { Center, Trail, useGLTF } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Bottom: React.FC<Props> = ({ position, opacity }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/bottle.glb`) as any;
    console.log(nodes);
    
    return (
        <Center top scale={35} position={[0, -1, 0]}>
            <mesh
                receiveShadow
                position={position as any}
                rotation={[1.6, 0, 0.3]}
                castShadow
                geometry={nodes['LP_BeerBottle_Cylinder'].geometry}
                dispose={null}
            >
                <meshStandardMaterial attach="material" transparent opacity={opacity} metalness={0.1} />
            </mesh>
        </Center>
    );
};

export default Bottom;
