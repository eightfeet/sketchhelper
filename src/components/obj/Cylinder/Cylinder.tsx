import { Line } from '@react-three/drei';
import React from 'react';
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

const Cylinder: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <group position={[0,0.98,0]}>
            <mesh castShadow={shadow} receiveShadow={shadow} position={position as any}>
                <cylinderGeometry args={[1, 1, 4, 100]} />
                <meshStandardMaterial transparent opacity={opacity} metalness={0.1} />

            </mesh>
            {showEdige && <group>
                <CircleStepCross
                    cross={false}
                    rotation={[
                        0,angleToRotation(7.45),0
                    ]}
                    split={6}
                    position={[0, -3, 0]}
                    lineWidth={2}
                    extendArray={[
                        {
                            extend: 1,
                            radius: 1.01
                        },
                        {
                            extend: 3,
                            radius: 1.01,
                            cross: true
                        },
                        {
                            extend: 5.02,
                            radius: 1.01
                        },
                    ]}
                />
                <SquareCross color='#fff' width={2} height={2} position={[0,-2,0]} extend={4} />
            </group>}
        </group>
    )
}

export default Cylinder;