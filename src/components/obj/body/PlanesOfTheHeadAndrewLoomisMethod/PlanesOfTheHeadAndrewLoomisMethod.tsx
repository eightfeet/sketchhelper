import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const PlanesOfTheHeadAndrewLoomisMethod: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/planes_of_the_head_andrew_loomis_method.glb`) as any;
    

    return (
        <group {...groups} >
            <Center position={[0,0.8,0.4]} rotation={[angleToRotation(0),angleToRotation(-90),angleToRotation(-90)]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(180), angleToRotation(-90), 0]} scale={0.5}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Face04_heads_0_1.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {!!showEdige && (<Edges threshold={12} />)}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        castShadow={false}
                        position={[1.7, -1.27, -0.07]}
                        geometry={nodes["1001_00Linhas_0001"].geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial color="#000" visible={showEdige} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Face04_heads_0_2.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    </mesh>
                </group >
            </Center>
        </group>
    );
};

export default PlanesOfTheHeadAndrewLoomisMethod;
