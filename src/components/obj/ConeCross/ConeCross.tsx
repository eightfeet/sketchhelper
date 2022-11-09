import { Center, Line, useGLTF } from '@react-three/drei';
import React from 'react';
import CircleCross from '~/components/GuideGroup/CircleCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const ConeCross: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/conecross.glb`) as any;

    console.log(nodes);
    


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
                rotation={[1.57,0,0]}
            >
                <cylinderGeometry args={[0.46, 0.46, 2, 100]} />
                {/* <boxGeometry args={[2, 0.7, 0.7]} /> */}
                <meshStandardMaterial
                    transparent
                    opacity={opacity}
                    metalness={0.1}
                />
            </mesh>
            
            {!!showEdige && (
                <>
                    <CircleCross cross extendRadius={0} radius={1.01} extendCone innerRing={false} outerRing position={[0,-1,0]} extend={2.52} segments={4} />
                    <CircleCross cross extendRadius={0} radius={1.01} extendCone innerRing={false} outerRing position={[0,-1,0]} extend={2.52} segments={4} />
                </>
            )}
        </>
    );
};

export default ConeCross;
