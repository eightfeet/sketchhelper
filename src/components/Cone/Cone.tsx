import { Line } from '@react-three/drei';
import React from 'react';
import GuideGroup from '../GuideGroup';
import CircleCross from '../GuideGroup/CircleCross';

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
                cross
                position={[0, -0.245, 0]}
                color={'red'}
                extend={2.5}
                extendRadius={0}
                radius={1}
                innerRing={false}
                outerRing
                lineWidth={2.5}
            />
            <CircleCross
                segments={4}
                cross
                position={[0, -0.245, 0]}
                color={'red'}
                extend={1.2}
                extendRadius={0.52}
                radius={1}
                innerRing={false}
                outerRing
                lineWidth={2.5}
            />
            <CircleCross
                segments={4}
                color={'#666'}
                cross
                position={[0, -0.245, 0]}
                rotation={[0,0.79,0]}
                extend={2.5}
                extendCone
                radius={1.4}
                lineWidth={2}
            />
            <CircleCross
                segments={4}
                color={'#666'}
                cross
                position={[0, 0.955, 0]}
                rotation={[0,0.79,0]}
                radius={0.735}
                lineWidth={2}
            />
            </>}
        </mesh>
    );
};

export default Cone;
