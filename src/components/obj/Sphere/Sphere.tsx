import { Edges, Line } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import { angleToRotation } from '~/core/helper';
import GuideGroup from '../../GuideGroup';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Sphere: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <>
            <mesh castShadow={shadow} receiveShadow={shadow} position={position as any}>
                <sphereGeometry args={[1, 48, 48]} />
                <meshStandardMaterial roughness={0.7} metalness={0.25} transparent opacity={opacity} emissive={new THREE.Color(0x000000)} envMapIntensity={0.5} />
            </mesh>
            {showEdige && <mesh castShadow={shadow} receiveShadow={shadow} position={position as any}>
                <GuideGroup lineWidth={0.5} segments={80} radius={1} rotation={[0, 0, 0]} color="#555" hideInner />
                <GuideGroup lineWidth={0.5} segments={80} radius={1} rotation={[-1.57, 0, 0]} color="#000" />
                <CircleStepCross
                    rotation={[0, angleToRotation(7) ,0]}
                    split={12}
                    innerRing={false}
                    cross={false}
                    extendArray={[
                        {
                            extend: 1,
                            radius: 0
                        },
                        {
                            extend: .98,
                            radius: .2
                        },
                        {
                            extend: .95,
                            radius: .32
                        },
                        {
                            extend: .94,
                            radius: .35
                        },
                        {
                            extend: .9,
                            radius: .448
                        },
                        {
                            extend: .8,
                            radius: .61
                        },
                        {
                            extend: .7,
                            radius: .72
                        },
                        {
                            extend: .6,
                            radius: .805
                        },
                        {
                            extend: .5,
                            radius: .87
                        },
                        {
                            extend: .4,
                            radius: .92
                        },
                        {
                            extend: .3,
                            radius: .96
                        },
                        {
                            extend: .2,
                            radius: .985
                        },
                        {
                            extend: .1,
                            radius: 1
                        },
                        {
                            extend: 0,
                            radius: 1
                        },
                        {
                            extend: -.1,
                            radius: 1
                        },
                        {
                            extend: -.2,
                            radius: .985
                        },
                        {
                            extend: -.3,
                            radius: .96
                        },
                        {
                            extend: -.4,
                            radius: .92
                        },
                        {
                            extend: -.5,
                            radius: .87
                        },
                        {
                            extend: -.6,
                            radius: .805
                        },
                        {
                            extend: -.7,
                            radius: .72
                        },
                        {
                            extend: -.8,
                            radius: .61
                        },
                        {
                            extend: -.9,
                            radius: .448
                        },
                        {
                            extend: -.94,
                            radius: .35
                        },
                        {
                            extend: -.95,
                            radius: .32
                        },
                        {
                            extend: -.98,
                            radius: .2
                        },
                        {
                            extend: -1,
                            radius: 0
                        }
                    ]}
                />
                <SquareCross position={[0,-1,0]} color='#000' lineWidth={0.5} width={2} height={2} extend={2} />
            </mesh>
            }
        </>
    )
}

export default Sphere;