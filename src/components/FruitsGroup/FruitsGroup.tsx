import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
    name: 'Apricot' |
    'Banana' |
    'Apple' |
    'Pear';
}

const FruitsGroup: React.FC<Props> = ({ position, opacity, showEdige, name }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/Fruits.glb`) as any;
    console.log(nodes);
    

    const groups = {
        Apricot: [nodes.Apricot.geometry, [1.6, 0, 0]],
        Banana: [nodes.Banana.geometry, [1.6, 0, 0], 1.5],
        Apple: [nodes.appleobj.geometry, [1.6, 0, 0]],
        Pear: [nodes.pear.geometry, [1.6, 0, 0]],
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

export default FruitsGroup;
