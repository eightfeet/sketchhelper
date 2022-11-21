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
                    {/* <group position={[0, -0.98, 0]}>
                        <Line points={[
                            [0.21, 3.9, 0],
                            [0.21, 3.8, 0],
                            [0.25, 3.76, 0],
                            [0.25, 3.68, 0],
                            [0.23, 3.65, 0],
                            [0.215, 2.72, 0],
                            [0.215, 2.60, 0],
                            [0.23, 2.50, 0],
                            [0.255, 2.45, 0],
                            [0.37, 2.35, 0],
                            [0.54, 2.2, 0],
                            [0.60, 2.14, 0],
                            [0.665, 2.0, 0],
                            [0.681, 1.9, 0],
                            [0.685, 1.8, 0],
                            [0.60, 0, 0]

                        ]} lineWidth={3} color="#333" />
                    </group>
                    <group position={[0, -0.98, 0]} rotation={[0, 1.57, 0]}>
                        <Line points={[
                            [0.21, 3.9, 0],
                            [0.21, 3.8, 0],
                            [0.25, 3.76, 0],
                            [0.25, 3.68, 0],
                            [0.23, 3.65, 0],
                            [0.215, 2.72, 0],
                            [0.215, 2.60, 0],
                            [0.23, 2.50, 0],
                            [0.255, 2.45, 0],
                            [0.37, 2.35, 0],
                            [0.54, 2.2, 0],
                            [0.60, 2.14, 0],
                            [0.665, 2.0, 0],
                            [0.681, 1.9, 0],
                            [0.685, 1.8, 0],
                            [0.60, 0, 0]

                        ]} lineWidth={3} color="#333" />
                    </group>
                    <group position={[0, -0.98, 0]} rotation={[0, 1.57 * 2, 0]}>
                        <Line points={[
                            [0.21, 3.9, 0],
                            [0.21, 3.8, 0],
                            [0.25, 3.76, 0],
                            [0.25, 3.68, 0],
                            [0.23, 3.65, 0],
                            [0.215, 2.72, 0],
                            [0.215, 2.60, 0],
                            [0.23, 2.50, 0],
                            [0.255, 2.45, 0],
                            [0.37, 2.35, 0],
                            [0.54, 2.2, 0],
                            [0.60, 2.14, 0],
                            [0.665, 2.0, 0],
                            [0.681, 1.9, 0],
                            [0.685, 1.8, 0],
                            [0.60, 0, 0]

                        ]} lineWidth={3} color="#333" />
                    </group>
                    <group position={[0, -0.98, 0]} rotation={[0, 1.57 * 3, 0]}>
                        <Line points={[
                            [0.21, 3.9, 0],
                            [0.21, 3.8, 0],
                            [0.25, 3.76, 0],
                            [0.25, 3.68, 0],
                            [0.23, 3.65, 0],
                            [0.215, 2.72, 0],
                            [0.215, 2.60, 0],
                            [0.23, 2.50, 0],
                            [0.255, 2.45, 0],
                            [0.37, 2.35, 0],
                            [0.54, 2.2, 0],
                            [0.60, 2.14, 0],
                            [0.665, 2.0, 0],
                            [0.681, 1.9, 0],
                            [0.685, 1.8, 0],
                            [0.60, 0, 0]

                        ]} lineWidth={3} color="#333" />
                    </group> */}
                    <SquareCross
                        crossExtend={false}
                        diagonalExtend={false}
                        position={[0, -0.95, 0]}
                        cross={[]} width={0} height={0} extend={4} />
                    <StandardCross
                        radius={0.6}
                        position={[0, -0.98, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        radius={0.69}
                        position={[0, 0.9, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        radius={0.56}
                        position={[0, 1.2, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        radius={0.22}
                        position={[0, 1.56, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        radius={0.22}
                        position={[0, 2.6, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        radius={0.24}
                        position={[0, 2.69, 0]}
                        squareColor="#666"
                    />

                    <StandardCross
                        radius={0.19}
                        position={[0, 2.92, 0]}
                        squareColor="#666"
                    />
                </>
            )}
        </group>
    );
};

export default WineBottle;
