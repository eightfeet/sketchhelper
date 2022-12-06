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
        `${process.env.PUBLIC_URL || ''}/glb/loomis_head.glb`
    ) as any;
    const { nodes, materials } = res;
    console.log(res);

    return (
        <group {...groups}>
            <Center position={[0,1,0]}>
                <group
                    position={[0, 0, 0]}
                    rotation={[angleToRotation(-90), angleToRotation(0), 0]}
                    scale={0.2}
                >
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.Plane001_0.geometry}
                        dispose={null}
                        material={materials['Material.002']}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Sphere_0.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                </group>
            </Center>
        </group>
    );
};

export default Eye;
