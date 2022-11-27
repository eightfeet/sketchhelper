import { useGLTF } from '@react-three/drei';
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

const WineBottle: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/winebottle.glb`) as any;

    return (
        <group {...groups}>
            <mesh
                scale={2}
                receiveShadow={shadow}
                rotation={[0, 0, 0]}
                position={[0, -1, 0]}
                castShadow={shadow}
                geometry={nodes.winebottle.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
            </mesh>

            {!!showEdige && (
                <>
                    <CircleStepCross
                        cross={false}
                        rotation={[0,angleToRotation(7.8),0]}
                        split={6}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: -0.98,
                                radius: 0.58,
                            },
                            {
                                extend: -0.94,
                                radius: 0.61,
                            },
                            {
                                extend: 0.7,
                                radius: 0.68,
                            },
                            {
                                extend: 0.9,
                                radius: 0.69,
                            },
                            {
                                extend: 1,
                                radius: 0.67,
                                innerRing: false,
                            },
                            {
                                extend: 1.05,
                                radius: 0.65,
                                innerRing: false,
                            },
                            {
                                extend: 1.1,
                                radius: 0.63,
                                innerRing: false,
                            },
                            {
                                extend: 1.22,
                                radius: 0.55,
                                innerRing: false,
                            },
                            {
                                extend: 1.3,
                                radius: 0.46,
                                innerRing: false,
                            },
                            {
                                extend: 1.4,
                                radius: 0.33,
                                // innerRing: false,
                            },
                            {
                                extend: 1.5,
                                radius: 0.24,
                                innerRing: false,
                            },
                            {
                                extend: 1.55,
                                radius: 0.225,
                                innerRing: false,
                            },
                            {
                                extend: 1.58,
                                radius: 0.22,
                                innerRing: false,
                            },
                            {
                                extend: 1.7,
                                radius: 0.22,
                                innerRing: false,
                            },
                            {
                                extend: 2.68,
                                radius: 0.22,
                                innerRing: false,
                            },
                            {
                                extend: 2.69,
                                radius: 0.245,
                            },
                            {
                                extend: 2.8,
                                radius: 0.242,
                            },
                            {
                                extend: 2.82,
                                radius: 0.21,
                            },
                            {
                                extend: 2.93,
                                radius: 0.2,
                            },
                            {
                                extend: 2.93,
                                radius: 0.14,
                            },
                        ]}
                    />
                    <SquareCross
                        crossExtend={false}
                        diagonalExtend={false}
                        position={[0, -0.95, 0]}
                        cross={[]} width={0} height={0} extend={4} />
                    <StandardCross
                        radius={0.6}
                        position={[0, -0.98, 0]}
                        squareColor="#fff"
                        color='#000'
                        lineWidth={2}
                    />

                    <StandardCross
                        radius={0.69}
                        position={[0, 0.9, 0]}
                        squareColor="#fff"
                        color='#000'
                        lineWidth={2}
                    />

                    <StandardCross
                        radius={0.56}
                        position={[0, 1.2, 0]}
                        squareColor="#fff"
                        color='#000'
                        lineWidth={2}
                    />

                    <StandardCross
                        radius={0.225}
                        position={[0, 1.56, 0]}
                        squareColor="#fff"
                        color='#000'
                    />

                </>
            )}
        </group>
    );
};

export default WineBottle;
