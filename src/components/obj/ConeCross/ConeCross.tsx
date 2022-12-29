import React from 'react';
import CircleCross from '~/components/GuideGroup/CircleCross';
import SquareCross from '~/components/GuideGroup/SquareCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const ConeCross: React.FC<Props> = ({ opacity, showEdige, shadow }) => {

    return (
        <>
            <mesh
                castShadow={shadow}
                receiveShadow={shadow}
                position={[0, 0.26, 0]}
            >
                <coneGeometry args={[1, 2.5, 100]} />
                <meshStandardMaterial
                    transparent
                    opacity={opacity}
                    metalness={0.1}
                />
            </mesh>
            <mesh
                castShadow={shadow}
                receiveShadow={shadow}
                position={[0, 0.26, 0]}
                rotation={[1.57, 0, 0]}
            >
                <cylinderGeometry args={[0.46, 0.46, 2, 100]} />
                {/* <boxGeometry args={[2, 0.7, 0.7]} /> */}
                <meshStandardMaterial
                    transparent
                    opacity={opacity}
                    metalness={0.1}
                />
            </mesh>

            {!!showEdige && (<>
                    <CircleCross lineWidth={2.0} cross extendRadius={0} radius={1.01} extendCone innerRing={false} outerRing position={[0, -1.005, 0]} extend={2.52} color="red" segments={4} />
                    <SquareCross lineWidth={2.0} width={2.01} height={2.01} position={[0, -1, 0]} extend={2.52} color="#777" />
                    <SquareCross lineWidth={2.0} width={0.92} height={0.92} rotation={[1.57, 0, 0]} position={[0, 0.26, -1]} extend={2.0} color="#777" />
                    <CircleCross color='red' lineWidth={2.0} radius={0.465} cross rotation={[1.57, 0, 0]} innerRing={false} outerRing position={[0, 0.26, -1.005]} extend={2.01} segments={4} />
            </>
            )}
        </>
    );
};

export default ConeCross;
