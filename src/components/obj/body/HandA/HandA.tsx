import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const HandA: React.FC<Props> = ({ position, opacity, showEdige = false, shadow }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/hand_a.glb`) as any;
    
    return (
        <Center top scale={1.5} position={[0, -1, 0]} rotation={[0,angleToRotation(0),0]}>
            <mesh
                receiveShadow={shadow}
                rotation={[-3.15, 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.hand002_1.children[0].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[-3.15, 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.hand002_1.children[1].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[-3.15, 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.hand002_1.children[2].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
        </Center>
    );
};

export default HandA;
