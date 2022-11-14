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

const WineBottle: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/winebottle.glb`) as any;

    return (
        <group {...groups}>
            <mesh
                scale={2}
                receiveShadow={shadow}
                rotation={[0, 0, 0]}
                position={[0, -1, 0]}
                castShadow={shadow}
                geometry={nodes.winebottle.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
            </mesh>
            {!!showEdige && (
                <>
                    <SquareCross
                        crossExtend={false}
                        diagonalExtend={false}
                        position={[0, -0.95, 0]}
                        cross={[]} width={0} height={0} extend={4} />
                    <StandardCross
                        raduis={0.6}
                        position={[0, -0.98, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        raduis={0.69}
                        position={[0, 0.9, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        raduis={0.56}
                        position={[0, 1.2, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        raduis={0.22}
                        position={[0, 1.56, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        raduis={0.22}
                        position={[0, 2.6, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        raduis={0.24}
                        position={[0, 2.69, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        raduis={0.19}
                        position={[0, 2.92, 0]}
                        squareColor="#666"
                    />
                </>
            )}
        </group>
    );
};

export default WineBottle;
