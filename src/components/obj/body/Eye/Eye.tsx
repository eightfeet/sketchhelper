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

const Eye: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/eye-v1.glb`) as any;

    return (
        <group {...groups} >
            <Center position={[0,0.8,0.4]} rotation={[0,angleToRotation(-90),0]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(180), angleToRotation(-90), 0]} scale={0.5}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_2.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {!!showEdige && (<Edges threshold={5} />)}
                    </mesh>

                </group >
                {!!showEdige && (
                    <group rotation={[0, angleToRotation(-5), 0]}>
                        <StandardCross lineWidth={2.5} color='#000' radius={1} position={[0, 8.13, 0]} isSquare={false} />
                        <StandardCross lineWidth={2.5} color='#000' radius={1} position={[0, 8.13, 0]} rotation={[angleToRotation(90), 0, 0]} isSquare={false} />
                        <StandardCross lineWidth={2.5} color='#000' radius={1} position={[0, 8.13, 0]} rotation={[0, 0, angleToRotation(90)]} isSquare={false} />

                    </group>
                )}
            </Center>
        </group>
    );
};

export default Eye;
