import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleCross from '~/components/GuideGroup/CircleCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Test: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/eye-v1.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            {/* <Center position={[0, 1.15, 0]}> */}
                <group position={[0, 8, 0]} rotation={[angleToRotation(180), angleToRotation(-90), 0]} scale={6.25}>
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
                        <Edges threshold={5} />
                    </mesh>

                </group >
            {/* </Center> */}

            {!!showEdige && (
                <group rotation={[0,angleToRotation(-5),0]}>
                    <StandardCross lineWidth={2.5} color='#000' radius={12.55} position={[0, 9.6, 0]} isSquare={false}  />
                    <StandardCross lineWidth={2.5} color='#000' radius={12.55} position={[0, 9.6, 0]} rotation={[angleToRotation(90),0,0]} isSquare={false}  />
                    <StandardCross lineWidth={2.5} color='#000' radius={12.55} position={[0, 9.6, 0]} rotation={[0, 0, angleToRotation(90)]} isSquare={false}  />
                   
                </group>
            )}
        </group>
    );
};

export default Test;
