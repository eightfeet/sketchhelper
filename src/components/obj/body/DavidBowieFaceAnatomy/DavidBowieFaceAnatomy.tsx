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

const Eye: React.FC<Props> = ({
    visible,
    opacity,
    showEdige,
    shadow,
    ...groups
}) => {
    const res = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/body/David_Bowie_Face_Anatomy.glb`
    ) as any;
    const { nodes, materials } = res;
    console.log(res);

    return (
        <group {...groups}>
            <Center position={[0,0.7,0]} scale={2}>
                <group
                    position={[0, 0, 0]}
                    rotation={[angleToRotation(90), angleToRotation(0), 0]}
                    scale={0.2}
                >
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.David_Bowie_Face_Anatomy.geometry}
                        dispose={null}
                        material={materials['Material.002']}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    
                </group>
            </Center>
        </group>
    );
};

export default Eye;
