import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const SculptureBustOfRozaLoewenfeld: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/sculpture_bust_of_roza_loewenfeld.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            <Center position={[0,1.72,0.4]} rotation={[angleToRotation(0),angleToRotation(-90),angleToRotation(-90)]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(180), angleToRotation(-90), 0]} scale={0.006}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_3.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    </mesh>
                </group >
                {!!showEdige && ( null)}
            </Center>
        </group>
    );
};

export default SculptureBustOfRozaLoewenfeld;
