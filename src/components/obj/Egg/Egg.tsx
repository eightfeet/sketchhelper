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

const Test: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/egg.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            {/* <Center position={[0, 1.15, 0]}> */}
            <group position={[0, -0.48, 0]} rotation={[Math.PI / 180 * -90, 0, 0]} scale={0.25}>
                <mesh
                    scale={2}
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    castShadow={shadow}
                    geometry={nodes.An_Egg.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    {/* <Edges /> */}
                </mesh>

            </group >
            {/* </Center> */}

            {!!showEdige && (
                <group scale={1.25} position={[0,0.265,0]}>
                    <SquareCross color='#fff' position={[0, -0.98, 0]} width={0.81} height={0.81} extend={1.07} diagonalExtend={false} />
                    <CircleStepCross
                        cross={false}
                        position={[0,0.05,0]}
                        rotation={[0,angleToRotation(8),0]}
                        split={6}
                        lineWidth={2}
                        extendArray={[
                            {
                                radius: 0.05,
                                extend: 0.04,
                                innerRing: false,
                                cross: true
                            },
                            {
                                radius: 0.12,
                                extend: 0.008,
                                innerRing: false,
                            },
                            {
                                radius: 0.235,
                                extend: -0.1
                            },
                            {
                                radius: 0.31,
                                extend: -0.2,
                                innerRing: false,
                            },
                            {
                                radius: 0.35,
                                extend: -0.3
                            },
                            {
                                radius: 0.38,
                                extend: -0.4,
                                innerRing: false,
                            },
                            {
                                radius: 0.4,
                                extend: -0.5,
                                innerRing: false,
                            },
                            {
                                radius: 0.4,
                                extend: -0.6,
                                innerRing: false,
                            },
                            {
                                radius: 0.39,
                                extend: -0.7
                            },
                            {
                                radius: 0.36,
                                extend: -0.8,
                                innerRing: false,
                            },
                            {
                                radius: 0.3,
                                extend: -0.9,
                                innerRing: false,
                            },
                            {
                                radius: 0.22,
                                extend: -0.98,
                                innerRing: false,
                            },
                            {
                                radius: 0.1,
                                extend: -1.04,
                                innerRing: false,
                            },
                            {
                                radius: 0,
                                extend: -1.05,
                                innerRing: false,
                                cross: true
                            },
                        ]} />
                </group>
            )}
        </group>
    );
};

export default Test;
