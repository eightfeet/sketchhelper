import { Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Vaseb: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/vaseb.glb`) as any;
    

    return (
        <group {...groups} >
            {/* <Center position={[0, 1.15, 0]}> */}
            <group position={[0, -1, 0]} rotation={[Math.PI / 180 * -90, 0, 0]} scale={0.12}>
                <mesh
                    scale={2}
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    castShadow={shadow}
                    geometry={nodes.Object_3001.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    {!!showEdige && <Edges threshold={20} />}
                </mesh>

            </group >
            {/* </Center> */}

            {!!showEdige && (
                <>
                    {/* <StandardCross radius={2} position={[0, 1.4, 0]} />
                    <StandardCross radius={1.4} position={[0, -0.96, 0]} />
                    <StandardCross radius={1.6} position={[0, 2.95, 0]} />
                    <StandardCross radius={1.62} position={[0, 2.6, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.74} position={[0, 2.78, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.735} position={[0, 2.85, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.62} position={[0, 2.87, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.85} position={[0, 0.5, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <SquareCross width={0} height={0} extend={5} position={[0, -1.5, 0]} /> */}
                    <CircleStepCross
                        rotation={[0, angleToRotation(8), 0]}
                        position={[0, 1.6, 0]}
                        cross={false}
                        split={6}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: 1.17,
                                radius: 0.62
                            },
                            {
                                extend: 1.16,
                                radius: 0.72
                            },
                            {
                                extend: 1.1,
                                radius: 0.77
                            },
                            {
                                extend: 0.45,
                                radius: 0.6
                            },
                            {
                                extend: 0,
                                radius: 0.55
                            }
                        ]}
                    />
                    <CircleStepCross
                        rotation={[0, angleToRotation(0), 0]}
                        position={[0, 0.73, 0]}
                        segments={8}
                        cross={false}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: 0,
                                radius: 1.52,
                                innerRing: false
                            },
                            {
                                extend: .89,
                                radius: 0.5,
                                innerRing: false
                            }
                        ]}
                    />
                    <CircleStepCross
                        segments={16}
                        position={[0, 0.82, 0]}
                        cross={false}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: 0,
                                radius: 1.4,
                            }
                        ]}
                    />
                    <CircleStepCross
                        rotation={[0, angleToRotation(22), 0]}
                        position={[0, -0.35, 0]}
                        segments={8}
                        cross={false}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: 0,
                                radius: 1.4,
                                innerRing: false
                            },
                            {
                                extend: 1.25,
                                radius: 1.4,
                                cross: true,
                                innerRing: false
                            }
                        ]}
                    />
                    <CircleStepCross
                        segments={16}
                        position={[0, -0.2, 0]}
                        cross={false}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: 0,
                                radius: 1.4,
                            }
                        ]}
                    />
                    <CircleStepCross
                        rotation={[0, angleToRotation(0), 0]}
                        position={[0, -.95, 0]}
                        segments={8}
                        cross={false}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: 0,
                                radius: 0.8,

                            },
                            {
                                extend: 0.04,
                                radius: 0.84,
                                cross: true,

                            },
                            {
                                extend: 1,
                                radius: 1.6,
                                innerRing: false
                            }
                        ]}
                    />
                </>
            )}
        </group>
    );
};

export default Vaseb;
