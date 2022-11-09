import React from 'react';
import CircleCross from '../GuideGroup/CircleCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const CylinderEight: React.FC<Props> = ({
    position,
    opacity,
    showEdige,
    shadow,
}) => {
    return (
        <mesh position={(position as any) || [0, 1, 0]} castShadow={shadow} receiveShadow={shadow}>
            <cylinderGeometry args={[1, 1, 2.99, 8]} />
            <meshStandardMaterial
                depthTest
                depthWrite
                color={'#fff'}
                transparent
                opacity={opacity}
            />
            {showEdige && (
                <group>
                    <CircleCross
                        lineWidth={2.5}
                        color="red"
                        radius={1.01}
                        cross
                        extend={3}
                        position={[0, -1.5, 0]}
                    />
                    <CircleCross
                        radius={0.93}
                        color="#666"
                        innerRing={false}
                        outerRing={false}
                        rotation={[0, 1.175, 0]}
                        lineWidth={2.5}
                        cross
                        extend={3}
                        position={[0, -1.5, 0]}
                        segments={4}
                    />
                    <CircleCross
                        lineWidth={2}
                        color="#666"
                        extend={3}
                        radius={1.32}
                        rotation={[0, 0.39, 0]}
                        segments={4}
                        position={[0, -1.5, 0]}
                    />
                </group>
            )}
        </mesh>
    );
};

export default CylinderEight;
