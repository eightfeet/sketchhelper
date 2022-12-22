import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import { BufferGeometry } from 'three';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const MaleFacialMusclesEcorche: React.FC<Props> = ({
    visible,
    opacity,
    showEdige,
    shadow,
    ...groups
}) => {
    const { nodes, materials } = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/body/male_facial_muscles_ecorche.glb`
    ) as any;
    console.log(nodes, materials);

    return (
        <group {...groups}>
            <Center
                position={[0, 2.2, 0.4]}
                rotation={[0, angleToRotation(0), 0]}
            >
                <group
                    position={[0, 0, 0]}
                    rotation={[angleToRotation(-90), angleToRotation(0), 0]}
                    scale={0.18}
                >
                    {nodes["Male_Facial-muscles_EcorcheOBJcleanermaterialmergergles"].children.map((item:{geometry:BufferGeometry},index: number) => <mesh
                        scale={1}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={
                            item.geometry
                        }
                        dispose={null}
                        key={index}
                        material={materials.material_0}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>)}
                    
                </group>
            </Center>
            {!!showEdige && (
                <group
                    rotation={[0, angleToRotation(0), 0]}
                    position={[0, 2, 0]}
                >
                    {/* <StandardCross lineWidth={2.5} color='#000' radius={1} rotation={[angleToRotation(90), 0, 0]} isSquare={false} /> */}

                    <CircleStepCross
                        split={6}
                        rotation={[
                            angleToRotation(37.5),
                            0,
                            angleToRotation(90),
                        ]}
                        position={[1.3, 1.25, 0.6]}
                        extendArray={[
                            {
                                radius: 1.2,
                                extend: 0,
                            },
                            {
                                radius: 1.2,
                                extend: 2.6,
                            },
                        ]}
                    />
                </group>
            )}
        </group>
    );
};

export default MaleFacialMusclesEcorche;
