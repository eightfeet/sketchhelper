import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const SpeedHeadAnatomy: React.FC<Props> = ({ position, opacity, showEdige = false, shadow }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/speed_head_anatomy.glb`) as any;

    return (
        <Center top scale={0.17} position={[0, 5.2, 0]} rotation={[angleToRotation(90),angleToRotation(90),angleToRotation(90)]}>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), angleToRotation(90), angleToRotation(180)]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_2.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
        </Center>
    );
};

export default SpeedHeadAnatomy;
