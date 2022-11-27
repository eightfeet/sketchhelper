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

const Goblet: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/goblet.glb`) as any;

    return (
        <group {...groups}>
            <mesh
                scale={2}
                receiveShadow={shadow}
                rotation={[0, 0, 0]}
                position={[0, -1, 0]}
                castShadow={shadow}
                geometry={nodes.goblet.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                {!!showEdige && <Edges threshold={17} /> }
            </mesh>

            {!!showEdige && (
                <>
                    <group scale={1} position={[0, 0, 0]}>

                        {/* <StandardCross
                            radius={0.86}
                            position={[0, -0.95, 0]}
                            squareColor="#666"
                        />

                        <StandardCross
                            radius={0.28}
                            position={[0, -0.85, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            radius={0.12}
                            position={[0, -0.75, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            radius={0.12}
                            position={[0, 0, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            radius={0.25}
                            position={[0, 0.2, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            radius={1.15}
                            position={[0, 1.1, 0]}
                            squareColor="#666"
                        />

                        
                        <SquareCross  
                        crossExtend={false} 
                        diagonalExtend={false}
                        position={[0,-0.95,0]}
                        cross={[]} width={0} height={0} extend={2.90} /> */}
                        <StandardCross
                            radius={1.15}
                            position={[0, .9, 0]}
                            squareColor="#666"
                            color='#000'
                        />
                        <StandardCross
                            radius={0.95}
                            position={[0, 1.95, 0]}
                            squareColor="#666"
                            color='#000'
                        />
                        <StandardCross
                            radius={0.86}
                            position={[0, -0.95, 0]}
                            squareColor="#666"
                            color='#000'
                        />
                        <CircleStepCross
                            rotation={[0, angleToRotation(7), 0]}
                            split={12}
                            position={[0, -1, 0]}
                            cross={false}
                            extendArray={[
                                {
                                    extend: 2.94,
                                    radius: 0.9
                                },
                                {
                                    extend: 2.97,
                                    radius: 0.92,
                                },
                                {
                                    extend: 2.93,
                                    radius: 0.986
                                },
                                {
                                    extend: 2.5,
                                    radius: 1.115
                                },
                                {
                                    extend: 2.2,
                                    radius: 1.16,
                                    innerRing: false,
                                },
                                {
                                    extend: 1.9,
                                    radius: 1.15
                                },
                                {
                                    extend: 1.7,
                                    radius: 1.08,
                                    innerRing: false,
                                },
                                {
                                    extend: 1.6,
                                    radius: 1.015
                                },
                                {
                                    extend: 1.5,
                                    radius: 0.9,
                                    innerRing: false,
                                },
                                {
                                    extend: 1.4,
                                    radius: 0.77,
                                    innerRing: false,
                                },
                                {
                                    extend: 1.3,
                                    radius: 0.55
                                },
                                {
                                    extend: 1.2,
                                    radius: 0.24
                                },
                                {
                                    extend: 1.1,
                                    radius: 0.14
                                },
                                {
                                    extend: 1,
                                    radius: 0.11
                                },
                                {
                                    extend: 0.4,
                                    radius: 0.1
                                },
                                {
                                    extend: 0.25,
                                    radius: 0.11
                                },
                                {
                                    extend: 0.2,
                                    radius: 0.15
                                },
                                {
                                    extend: 0.15,
                                    radius: 0.25
                                },
                                {
                                    extend: 0.1,
                                    radius: 0.5
                                },
                                {
                                    extend: 0.06,
                                    radius: 0.85
                                },
                                {
                                    extend: 0.02,
                                    radius: 0.88
                                }
                            ]}
                        />
                    </group>
                </>
            )}
        </group>
    );
};

export default Goblet;
