import { Line } from '@react-three/drei';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import { angleToRotation } from '~/core/helper';
import GuideGroup from '../../GuideGroup';
import CircleCross from '../../GuideGroup/CircleCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Cone: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <mesh
            castShadow={shadow}
            // receiveShadow={shadow}
            position={[0, 0.26, 0]}
        >
            <coneGeometry args={[1, 2.5, 100]} />
            <meshStandardMaterial
                transparent
                opacity={opacity}
                metalness={0.1}
            />
            {showEdige && <>
                <CircleCross
                    segments={4}
                    color={'#fff'}
                    cross
                    position={[0, -1.248, 0]}
                    rotation={[0, 0.79, 0]}
                    extend={2.5}
                    // extendCone
                    radius={1.45}
                />
                <CircleStepCross
                    position={[0, -1.25, 0]}
                    rotation={[0,angleToRotation(52),0]}
                    lineWidth={2}
                    split={6}
                    extendArray={[
                        {
                            extend: 0,
                            radius: 1.02
                        },
                        {
                            extend: 1,
                            radius: 0.61
                        },
                        {
                            extend: 2.52,
                            radius: 0
                        }
                    ]}
                />
            </>}
        </mesh>
    );
};

export default Cone;
