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

const CupHandleC: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/cuphandlec.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            <group position={[0, -0.98, 0]} rotation={[angleToRotation(-180), angleToRotation(90), 0]} scale={1}>
                <mesh
                    scale={1}
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    castShadow={shadow}
                    geometry={nodes.cup2.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    {/* <Edges /> */}
                </mesh>

            </group >

            {!!showEdige && (
                <>
                    <SquareCross width={2.25} height={2.25} extend={2.02} position={[0, -0.98, 0]} color="#fff" />
                    <SquareCross width={0.58} height={0.4} extend={1.2} position={[-1.38, -0.55, 0]} color='#000' cross={[]} axis={false} diagonalExtend={false} />
                    <CircleStepCross
                        color='#000'
                        split={6}
                        lineWidth={2.5}
                        cross={false}
                        rotation={[0, angleToRotation(7.5), 0]}
                        extendArray={[
                            {
                                extend: -0.96,
                                radius: 1,
                                cross: false
                            },
                            {
                                extend: -0.93,
                                radius: 1.01,
                                cross: false
                            },
                            {
                                extend: -0.55,
                                radius: 1.03,
                                cross: false
                            },
                            {
                                extend: -0.3,
                                radius: 0.98,
                            },
                            {
                                extend: 0.4,
                                radius: 1.02,
                            },
                            {
                                extend: 0.6,
                                radius: 1.1,
                            },
                            {
                                extend: 1.03,
                                radius: 1.12,
                                cross: false
                            },
                            {
                                extend: 1,
                                radius: 0.93,
                                cross: false
                            },
                            {
                                extend: 1.035,
                                radius: 0.94,
                                cross: false
                            },
                        ]} />
                </>
            )}
        </group>
    );
};

export default CupHandleC;
