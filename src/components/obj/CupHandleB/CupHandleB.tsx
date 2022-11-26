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

const CupA: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/cupa.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            <group position={[0, -0.98, 0]} rotation={[angleToRotation(-180), 0, 0]} scale={1}>
                <mesh
                    scale={1}
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    castShadow={shadow}
                    geometry={nodes.cup1.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    {/* <Edges /> */}
                </mesh>

            </group >

            {!!showEdige && (
                <>
                    <SquareCross width={2.05} height={2.05} extend={2} position={[0, -0.98, 0]} color="#fff" />
                    <SquareCross width={0.95} height={0.3} extend={1.55} position={[-1.5, -0.7, 0]} color='#000' cross={[]} axis={false} diagonalExtend={false} />
                    <CircleStepCross
                        color='#000'
                        split={6}
                        lineWidth={2.5}
                        rotation={[0, angleToRotation(7.5), 0]}
                        extendArray={[
                            {
                                extend: -0.98,
                                radius: 1,
                                cross: false
                            },
                            {
                                extend: -0.3,
                                radius: 1,
                            },
                            {
                                extend: 1,
                                radius: 1,
                                cross: false
                            },
                            {
                                extend: 1.036,
                                radius: 0.97,
                                cross: false
                            },
                            {
                                extend: 1.035,
                                radius: 0.94,
                                cross: false
                            }
                        ]} />
                </>
            )}
        </group>
    );
};

export default CupA;
