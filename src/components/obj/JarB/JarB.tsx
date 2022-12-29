import { Center, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const JarB: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/jarB.glb`) as any;
    

    return (
        <group {...groups} >
            <Center position={[0, 1.15, 0]}>
                <group position={[0, 0, 0]} rotation={[Math.PI / 180 * -90, 0, 0]} scale={10}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Jarb.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges /> */}
                    </mesh>

                </group >
            </Center>




            {!!showEdige && (
                <>
                    <CircleStepCross
                        split={6}
                        rotation={[0, angleToRotation(-4.5), 0]}
                        extendArray={[
                            { extend: 2.98, radius: 1.6, lineWidth: 2, },
                            { extend: 2.85, radius: 1.61, lineWidth: 2.5, cross: false },
                            { extend: 2.85, radius: 1.74, lineWidth: 2, cross: false },
                            { extend: 2.75, radius: 1.74, lineWidth: 3.5, cross: false },
                            { extend: 2.6, radius: 1.62, lineWidth: 2, cross: false },
                            { extend: 2.3, radius: 1.81, lineWidth: 3.5, cross: false },
                            { extend: 1.8, radius: 2, lineWidth: 1, cross: false },
                            { extend: 0.9, radius: 1.96, lineWidth: 2, cross: false },
                            { extend: 0.1, radius: 1.76, lineWidth: 2, cross: false },
                            { extend: -0.95, radius: 1.4, lineWidth: 2, cross: false },
                        ]}
                    />
                    <StandardCross color='#000' squareColor='#eee' radius={2} position={[0, 1.4, 0]} rotation={[0, -0.2, 0]} />
                    <StandardCross
                        color='#000'
                        squareColor='#eee'
                        radius={1.38}
                        position={[0, -0.94, 0]}
                        rotation={[0, -0.2, 0]}
                    />
                    <SquareCross lineWidth={1.5} color='#000' diagonalExtend={false} cross={[]} width={0.45} height={0.15} extend={0.258} position={[0,3,0]} />
                    <SquareCross width={0} height={0} extend={6} position={[0, -1.5, 0]} />
                    {/* <StandardCross color='#000' squareColor='#eee' radius={2} position={[0, 1.4, 0]} rotation={[0, -0.2, 0]} />
                    <SquareCross width={0} height={0} extend={5} position={[0, -1.5, 0]} /> */}
                </>
            )}
        </group>
    );
};

export default JarB;
