import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const HumanMaleSkull: React.FC<Props> = ({
    visible,
    opacity,
    showEdige,
    shadow,
    ...groups
}) => {
    const { nodes } = useGLTF(
        `${
            process.env.PUBLIC_URL || ''
        }/glb/body/human_male_skull.glb`
    ) as any;
    

    return (
        <group {...groups}>
            <Center
                position={[0, 1, 0.4]}
                rotation={[0, angleToRotation(0), 0]}
            >
                <group
                    position={[0, 8, 0]}
                    rotation={[angleToRotation(-90), angleToRotation(0), angleToRotation(0)]}
                    scale={0.1}
                >
                    {nodes.Merged_male_skullOBJcleanergles.children[0].children.map(
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

export default HumanMaleSkull;
