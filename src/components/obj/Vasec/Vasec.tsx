import { Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Vaseb: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/vasec.glb`) as any;
    

    return (
        <group {...groups} >
            <group position={[0, -1, 0]} rotation={[Math.PI / 180 * -180, 0, 0]} scale={0.05}>
                <mesh
                    scale={2}
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    castShadow={shadow}
                    geometry={nodes.Vasec.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    {!!showEdige && <Edges color={'#000'} threshold={6.46} />}
                </mesh>

            </group >

            {!!showEdige && (
                <>
                    <StandardCross radius={0.48} position={[0, -0.96, 0]} color="#fff" squareColor='#fff' />
                    <StandardCross radius={0.51} position={[0, 1.93, 0]} color="#fff" squareColor='#fff' />
                    <CircleStepCross
                        rotation={[0, angleToRotation(8), 0]}
                        position={[0.008, -.98, -0.001]}
                        cross={false}
                        split={6}
                        lineWidth={2.5}
                        innerRing={false}
                        extendArray={[
                            {
                                extend: 0,
                                radius: 0.45,
                                lineWidth: 3,
                                innerRing: true
                            },
                            {
                                extend: 0.03,
                                radius: 0.5
                            },
                            {
                                extend: 0.15,
                                radius: 0.52
                            },
                            {
                                extend: 0.3,
                                radius: 0.665,
                                lineWidth: 3,
                                innerRing: true
                            },
                            {
                                extend: 0.5,
                                radius: 0.845
                            },
                            {
                                extend: 0.7,
                                radius: 0.95
                            },
                            {
                                extend: 0.9,
                                radius: 0.975,
                                innerRing: true,
                            },
                            {
                                extend: 1.1,
                                radius: 0.94,
                                innerRing: true,
                                cross: true,
                            },
                            {
                                extend: 1.3,
                                radius: 0.78
                            },
                            {
                                extend: 1.5,
                                radius: 0.56,
                                innerRing: true
                            },
                            {
                                extend: 1.7,
                                radius: 0.385,
                                innerRing: true
                            },
                            {
                                extend: 1.9,
                                radius: 0.31
                            },
                            {
                                extend: 2.1,
                                radius: 0.29
                            },
                            {
                                extend: 2.3,
                                radius: 0.29
                            },
                            {
                                extend: 2.5,
                                radius: 0.315,
                                innerRing: true
                            },
                            {
                                extend: 2.7,
                                radius: 0.376,
                                innerRing: true
                            },
                            {
                                extend: 2.9,
                                radius: 0.5,
                                innerRing: true
                            },
                        ]}
                    />
                    <SquareCross width={0} height={0} extend={3.5} position={[0, -1.5, 0]} />
                </>
            )}
        </group>
    );
};

export default Vaseb;
