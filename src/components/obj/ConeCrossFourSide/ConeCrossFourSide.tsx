import { useGLTF } from '@react-three/drei';
import React from 'react';
import CircleCross from '~/components/GuideGroup/CircleCross';
import SquareCross from '~/components/GuideGroup/SquareCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const ConeCrossFourSide: React.FC<Props> = ({
    position,
    opacity,
    showEdige,
    shadow,
}) => {
    const { nodes } = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/shape.glb`
    ) as any;

    return (
        <group position={[0, 0.46, 0]}>
            <mesh
                receiveShadow={shadow}
                rotation={[1.57, 0.78, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.shapeb.geometry}
                scale={0.6}
                dispose={null}
            >
                <meshStandardMaterial
                    transparent
                    opacity={opacity}
                    roughness={0.7}
                    metalness={0.25}
                    envMapIntensity={0.5}
                />
            </mesh>
            {showEdige && <>
                <SquareCross
                    rotation={[0, 0.786, 0]}
                    lineWidth={2.0}
                    width={1.59}
                    height={1.59}
                    position={[0, -1.45, 0]}
                    extend={2.76}
                    color="#777"
                />
                <CircleCross
                    lineWidth={2.0}
                    cross
                    extendRadius={0}
                    radius={1.13}
                    extendCone
                    position={[0, -1.45, 0]}
                    extend={2.77}
                    color="#f00"
                    segments={4}
                />
                <SquareCross
                    rotation={[0, 0.786, 0]}
                    lineWidth={2.0}
                    width={1.59}
                    height={1.59}
                    position={[0, -1.45, 0]}
                    extend={2.76}
                    color="#777"
                />
                <CircleCross
                    lineWidth={2.0}
                    cross
                    extendRadius={0}
                    radius={1.13}
                    extendCone
                    position={[0, -1.45, 0]}
                    extend={2.77}
                    color="#f00"
                    segments={4}
                />
                <CircleCross
                    color="red"
                    lineWidth={2.0}
                    radius={0.475}
                    cross
                    rotation={[1.57, 0, 0]}
                    position={[0, 0, -1.115]}
                    extend={2.24}
                    segments={4}
                />
            </>}
        </group>
    );
};

export default ConeCrossFourSide;
