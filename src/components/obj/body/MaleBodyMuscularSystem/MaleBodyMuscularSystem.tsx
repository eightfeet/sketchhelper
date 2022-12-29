import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const MaleBodyMuscularSystem: React.FC<Props> = ({
    visible,
    opacity,
    showEdige,
    shadow,
    ...groups
}) => {
    const { nodes } = useGLTF(
        `${
            process.env.PUBLIC_URL || ''
        }/glb/body/male_body_muscular_system.glb`
    ) as any;
    

    return (
        <group {...groups}>
            <Center
                position={[0, 2.5, 0.4]}
                rotation={[0, angleToRotation(0), 0]}
            >
                <group
                    position={[0, 8, 0]}
                    rotation={[angleToRotation(-90), angleToRotation(0), angleToRotation(0)]}
                    scale={0.22}
                >
                    {nodes.male_skeleton_first_muscles_anatomy_studyOBJcleanergles.children.map(
                        (item: {geometry: any}, index: number) => (
                            <mesh
                                key={index}
                                scale={2}
                                receiveShadow={shadow}
                                rotation={[0, 0, 0]}
                                position={[0, 0, 0]}
                                castShadow={shadow}
                                geometry={item.geometry}
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
                        )
                    )}
                    
                </group>
               
            </Center>
        </group>
    );
};

export default MaleBodyMuscularSystem;
