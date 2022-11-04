import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
    name: 'shapea' |
    'shapeb' |
    'shapec' |
    'shaped';
}

const Shape: React.FC<Props> = ({ position, opacity, showEdige, name }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/shape.glb`) as any;
    

    const groups = {
        shapea: [nodes.shapea.geometry, [0, 0, 0],0.5],
        shapeb: [nodes.shapeb.geometry, [1.23, 0.72, 0.5],0.5],
        shapec: [nodes.shapec.geometry, [1.58, 0, 0.8],0.5],
        shaped: [nodes.shaped.geometry, [0, 0, 0],0.5],
    }

    const current = groups[name];

    return (
        <Center top scale={current[2] || 0.25} position={[0, -1, 0]}>
            <mesh
                receiveShadow
                rotation={current[1]}
                position={position as any}
                castShadow
                geometry={current[0]}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={5} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color="red"
                    />
                )}
            </mesh>
        </Center>
    );
};

export default Shape;
