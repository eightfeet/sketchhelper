import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleCross from '~/components/GuideGroup/CircleCross';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const PlateC: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/platec.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            <group position={[0, -0.96, 0]} rotation={[angleToRotation(180), 0, 0]} scale={1}>
                <mesh
                    scale={1}
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    castShadow={shadow}
                    geometry={nodes.Plate_3.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    {/* <Edges /> */}
                </mesh>

            </group >

            {!!showEdige && (
                <group position={[0,0.03,0]}>
                    <CircleStepCross
                        color='#000'
                        split={6}
                        lineWidth={1.5}
                        rotation={[0, angleToRotation(7.5), 0]}
                        extendArray={[
                            {
                                extend: -0.98,
                                radius: 1,
                            },
                            {
                                extend: -0.94,
                                radius: 1.0,
                                lineWidth: 3,
                                cross: false
                            },
                            {
                                extend: -0.79,
                                radius: 1.09,
                                lineWidth: 3,
                                cross: false
                            },
                            {
                                extend: 0.01,
                                radius: 1.55,
                                lineWidth: 3,
                                cross: false
                            },
                            {
                                extend: 0.035,
                                radius: 1.53,
                                lineWidth: 3,
                                cross: false
                            },
                            
                        ]} />
                </group>
            )}
        </group>
    );
};

export default PlateC;
