import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Apple: React.FC<Props> = ({ position, opacity, showEdige = false }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/apple.glb`) as any;
    console.log(nodes);

    return (
        <Center top scale={20} position={[0, -1, 0]}>
            <mesh
                receiveShadow
                rotation={[0, 0, 0]}
                position={position as any}
                castShadow
                geometry={nodes.appleobj.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} emissive={new THREE.Color(0x000000)} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={1} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color="red"
                    />
                )}
            </mesh>
        </Center>
    );
};

export default Apple;
