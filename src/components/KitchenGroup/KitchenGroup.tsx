import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
    name: 'Bowl' |
    'ButterKnife' |
    'Cup' |
    'CupHandle' |
    'Fork' |
    'Plate' |
    'Pot' |
    'Scoop' |
    'ScoopStuff' |
    'Spatula' |
    'Spoon' |
    'FryingPan';
}

const KitchenGroup: React.FC<Props> = ({ position, opacity, showEdige, name }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/kitchen.glb`) as any;
    const groups = {
        Bowl: [nodes.Bowl.geometry, [1.6, 0, 0]],
        ButterKnife: [nodes.ButterKnife.geometry, [1.6, 0, 0]],
        Cup: [nodes.Cup.geometry, [1.6, 0, 0]],
        CupHandle: [nodes.CupHandle.geometry, [1.6, 0, 0]],
        Fork: [nodes.Fork.geometry, [1.6, 0, 0]],
        Plate: [nodes.Plate.geometry, [1.6, 0, 0]],
        Pot: [nodes.Pot.geometry, [1.6, 0, 0]],
        Scoop: [nodes.Scoop.geometry, [1.6, 0, 0]],
        ScoopStuff: [nodes.ScoopStuff.geometry, [1.6, 0, 0]],
        Spatula: [nodes.Spatula.geometry, [1.6, 0, 0]],
        Spoon: [nodes.Spoon.geometry, [1.6, 0, 0]],
        FryingPan: [nodes.FryingPan.geometry, [1.6, 0, 0]],
    }

    const current = groups[name];

    return (
        <Center top scale={0.25} position={[0, -1, 0]}>
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

export default KitchenGroup;
