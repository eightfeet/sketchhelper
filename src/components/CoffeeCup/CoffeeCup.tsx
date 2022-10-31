import { Center, Trail, useGLTF } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const CoffeeCup: React.FC<Props> = ({ position }) => {
    const { nodes } = useGLTF('/glb/coffee-transformed.glb') as any;
    return (
        <Center top scale={1.5} position={[0, -1, 0]}>
            <mesh
                receiveShadow
                position={position as any}
                castShadow
                geometry={nodes.coffee_cup_top_16oz.geometry}
                dispose={null}
            >
                <meshStandardMaterial attach="material" transparent opacity={1} metalness={0.1} />
            </mesh>
        </Center>
    );
};

export default CoffeeCup;
