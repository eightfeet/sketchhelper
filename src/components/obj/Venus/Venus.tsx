import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import { angleToRotation } from '~/core/helper';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Venus: React.FC<Props> = ({ position, opacity, showEdige = false }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/venus.glb`) as any;
    console.log(nodes);

    return (
        <group rotation={[0, angleToRotation(0), 0]} position={[0,-1,0]}>
            <mesh
                scale={0.003}
                receiveShadow
                position={position as any}
                castShadow
                geometry={nodes.Venus.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0} metalness={0} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={1} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color="red"
                    />
                )}
            </mesh>
        </group>
    );
};

export default Venus;
