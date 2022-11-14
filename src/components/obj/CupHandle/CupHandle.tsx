import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const CupHandle: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/cuphandle.glb`) as any;

    return (
        <group {...groups}>
            <mesh
                scale={0.15}
                receiveShadow={shadow}
                rotation={[1.57, 0, 0]}
                position={[0, -.428, 0]}
                castShadow={shadow}
                geometry={nodes.CupHandle.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
            </mesh>
            {!!showEdige && (
                <>
                    <SquareCross
                        crossExtend={false}
                        diagonalExtend={false}
                        position={[-0.035, -0.95, 0.01]}
                        cross={[]} width={0} height={0} extend={1.5} />
                    <SquareCross
                        position={[-0.035, -0.8, 0.01]}
                        cross={[]} width={1.595} height={1.595} extend={1.27}
                        crossExtend={false}

                    />
                    <StandardCross
                        raduis={0.7}
                        position={[-0.035, -0.98, 0.01]}
                        squareColor="#666"
                    />
                    <StandardCross
                        raduis={0.8}
                        position={[-0.035, -0.8, 0.01]}
                        squareColor="#666"
                    />
                    <StandardCross
                        raduis={0.8}
                        position={[-0.035, 0.47, 0.01]}
                        squareColor="#666"
                    />
                    <SquareCross
                        // crossExtend={false}
                        axis={false}
                        diagonalExtend={false}
                        position={[1.05, -0.75, 0.01]}
                        cross={[]} width={0.58} height={0.25} extend={1.12} />

                </>
            )}
        </group>
    );
};

export default CupHandle;
