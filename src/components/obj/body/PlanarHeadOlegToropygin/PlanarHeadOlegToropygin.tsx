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

const PlanarHeadOlegToropygin: React.FC<Props> = ({
    visible,
    opacity,
    showEdige,
    shadow,
    ...groups
}) => {
    const res = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/body/planar_head_oleg_toropygin.glb`
    ) as any;
    const { nodes, materials } = res;
    console.log(res);

    return (
        <group {...groups}>
            <Center position={[0,1.6,0]}>
                <group
                    position={[0, 0, 0]}
                    rotation={[angleToRotation(180), angleToRotation(0), 0]}
                    scale={0.24}
                >
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_2.geometry}
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
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_3.geometry}
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

export default PlanarHeadOlegToropygin;
