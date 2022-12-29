import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Vasea: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/vasea.glb`) as any;
    

    return (
        <group {...groups} >
            {/* <Center position={[0, 1.15, 0]}> */}
            <group position={[0, -0.98, 0]} rotation={[Math.PI / 180 * 0, 0, 0]} scale={0.025}>
                <mesh
                    scale={2}
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    castShadow={shadow}
                    geometry={nodes.Vase.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    {/* <Edges /> */}
                </mesh>

            </group >
            {/* </Center> */}

            {!!showEdige && (
                <>
                    <CircleStepCross
                        rotation={[0, angleToRotation(15), 0]}
                        cross={false}
                        split={6}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: -.97,
                                radius: 1.11,
                            },
                            {
                                extend: -.95,
                                radius: 1.18
                            },
                            {
                                extend: -.9,
                                radius: 1.19,
                            },
                            {
                                extend: -.75,
                                radius: 1.21,
                            },
                            {
                                extend: -.2,
                                radius: 1.52,
                                innerRing: false
                            },
                            {
                                extend: 0.5,
                                radius: 1.77,
                            },
                            {
                                extend: 0.8,
                                radius: 1.8,
                                innerRing: false
                            },
                            {
                                extend: 1.05,
                                radius: 1.78,
                                cross: false,
                            },
                            {
                                extend: 1.2,
                                radius: 1.72,
                                innerRing: false
                            },
                            {
                                extend: 1.4,
                                radius: 1.55,
                            },
                            {
                                extend: 1.68,
                                radius: 1.15,
                                innerRing: false
                            },
                            {
                                extend: 1.9,
                                radius: 0.7,
                            },
                            {
                                extend: 2.2,
                                radius: 0.63,
                                innerRing: false
                            },
                            {
                                extend: 2.3,
                                radius: 0.615,
                                innerRing: false
                            },
                            {
                                extend: 2.5,
                                radius: 0.6,
                                innerRing: false
                            },

                            {
                                extend: 3,
                                radius: 0.62,
                                innerRing: false
                            },

                            {
                                extend: 3.2,
                                radius: 0.69,
                                innerRing: false
                            },
                            {
                                extend: 3.2,
                                radius: 0.72,
                            },
                            {
                                extend: 3.3,
                                radius: 0.88,
                            },
                            {
                                extend: 3.58,
                                radius: 1.025,
                            },
                            {
                                extend: 3.61,
                                radius: 1.,
                            },
                            {
                                extend: 3.61,
                                radius: .94,
                            },
                        ]} />

                    <SquareCross color='#fff' width={2.35} height={2.35} position={[0, -0.97, 0]} rotation={[0,angleToRotation(8.5),0]} />
                    <SquareCross color='#fff' width={2} height={2} position={[0, 3.62, 0]} rotation={[0,angleToRotation(8.5),0]} />
                    <SquareCross width={0} height={0} extend={5} position={[0, -1, 0]} />

                </>
            )}
        </group>
    );
};

export default Vasea;
