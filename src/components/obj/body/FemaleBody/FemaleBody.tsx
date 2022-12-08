import { Center, Html, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';
import './FemaleBody.css';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const FemaleBody: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/bodyfemalemin.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            <Center position={[0, 2.7, 0]} rotation={[0,angleToRotation(90),0]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(0), angleToRotation(-90), 0]} scale={0.03}>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes["femalesculpt_02-2"].geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges threshold={5} /> */}
                    </mesh>

                </group >
            </Center>

            {!!showEdige && (
                <group rotation={[0, angleToRotation(90), 0]} position={[-.0, -0.75, -.6]}>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10 / 4 * 1} />
                    <mesh position={[-0, 7.10 / 4 * 1, 2]}>
                        <Html>
                            <div className="femalebodytag">1/4</div>
                        </Html>
                    </mesh>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10 / 4 * 2} />
                    <mesh position={[-0, 7.10 / 4 * 2, 2]}>
                        <Html>
                            <div className="femalebodytag">2/4</div>
                        </Html>
                    </mesh>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10 / 4 * 3} />
                    <mesh position={[-0, 7.10 / 4 * 3, 2]}>
                        <Html>
                            <div className="femalebodytag">3/4</div>
                        </Html>
                    </mesh>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10} />
                    <mesh position={[-0, 7.10, 2]}>
                        <Html>
                            <div className="femalebodytag">4/4</div>
                        </Html>
                    </mesh>
                    <SquareCross position={[-0.1, 3.5, 0]} rotation={[0, 0, angleToRotation(30)]} width={0.6} height={0.9} extend={.75} cross={[]} color="#000" diagonalExtend={false} axis={false} />
                    <SquareCross position={[-0.6, 4.6, 0]} rotation={[0, 0, angleToRotation(-15)]} width={0.7} height={1.1} extend={1.15} cross={[]} color="#000" diagonalExtend={false} axis={false} />
                    <SquareCross position={[-0.4, 6.15, 0]} rotation={[0, 0, angleToRotation(-5)]} width={0.7} height={.6} extend={.9} cross={[]} color="#000" diagonalExtend={false} axis={false} />
                    <group>
                        <CircleStepCross
                            position={[-0.2, 0, -0.2]}
                            split={12}
                            rotation={[angleToRotation(-3), 0, 0]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.12,
                                    extend: 0.3,
                                },
                                {
                                    radius: 0.2,
                                    extend: 1.80,
                                }
                            ]} />
                        <CircleStepCross
                            position={[-0.15, 0, -0.15]}
                            split={12}
                            rotation={[angleToRotation(-4), 0, angleToRotation(3)]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.2,
                                    extend: 2.1,
                                },
                                {
                                    radius: 0.30,
                                    extend: 3.20,
                                },
                            ]} />
                    </group>
                    <group>
                        <CircleStepCross
                            position={[-0.12, 0, .22]}
                            split={12}
                            rotation={[angleToRotation(3), 0, 0]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.12,
                                    extend: 0.3,
                                },
                                {
                                    radius: 0.2,
                                    extend: 1.80,
                                }
                            ]} />
                        <CircleStepCross
                            position={[-0.15, 0, 0.17]}
                            split={12}
                            rotation={[angleToRotation(4), 0, angleToRotation(3)]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.2,
                                    extend: 2.1,
                                },
                                {
                                    radius: 0.30,
                                    extend: 3.20,
                                },
                            ]} />
                    </group>
                    <group position={[0, 3.7, 1]}>
                        <CircleStepCross
                            position={[-.34, 0, .25]}
                            split={12}
                            rotation={[angleToRotation(-22), 0, angleToRotation(-5)]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.15,
                                    extend: .9,
                                },
                                {
                                    radius: 0.10,
                                    extend: 0,
                                },
                            ]} />
                        <CircleStepCross
                            position={[-.34, 0, .1]}
                            split={12}
                            rotation={[angleToRotation(-15), 0, angleToRotation(-5)]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.15,
                                    extend: 1.1,
                                },
                                {
                                    radius: 0.2,
                                    extend: 1.9,
                                },
                            ]} />
                    </group>
                    <group position={[-.7, 3.7, -1]} >
                        <CircleStepCross
                            position={[.20, 0, -.2]}
                            split={12}
                            rotation={[angleToRotation(22), 0, angleToRotation(-5)]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.15,
                                    extend: .9,
                                },
                                {
                                    radius: 0.10,
                                    extend: 0,
                                },
                            ]} />
                        <CircleStepCross
                            position={[.25, 0, -.02]}
                            split={12}
                            rotation={[angleToRotation(15), 0, angleToRotation(-5)]}
                            cross={false}
                            extendArray={[
                                {
                                    radius: 0.15,
                                    extend: 1.1,
                                },
                                {
                                    radius: 0.2,
                                    extend: 1.9,
                                },
                            ]} />
                    </group>
                </group>
            )}
        </group>
    );
};

export default FemaleBody;
