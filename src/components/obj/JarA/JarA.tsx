import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const JarA: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/jarA.glb`) as any;
    return (
        <group {...groups} >
            <Center position={[0, 2.1, 0]}>
                <group rotation={[Math.PI / 180 * -180, 0, 0]} scale={10}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 1.5, 0]}
                        castShadow={shadow}
                        geometry={nodes.oba.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges /> */}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 1.5, 0]}
                        castShadow={shadow}
                        geometry={nodes.obb.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {!!showEdige && (
                            <Edges threshold={38} />)}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 1.5, 0]}
                        castShadow={shadow}
                        geometry={nodes.obc.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges /> */}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 1.5, 0]}
                        castShadow={shadow}
                        geometry={nodes.obd.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges /> */}
                    </mesh>
                </group >
            </Center>
            {!!showEdige && (
                <>
                    <StandardCross isSquare={false} radius={1.85} lineWidth={2.5} color="#111" position={[0, 5.2, 0]} />
                    <StandardCross isSquare={false} radius={1.94} lineWidth={2.5} color="#111" position={[0, 5.2, 0]} />
                    <StandardCross radius={1.86} lineWidth={2.5} color="#111" position={[0, 4.18, 0]} squareColor="#eee" />
                    <StandardCross isSquare={false} radius={1.86} lineWidth={2.5} color="#111" position={[0, 5.0, 0]} />
                    <StandardCross isSquare={false} radius={1.73} lineWidth={2.5} color="#111" position={[0, 4.82, 0]} />
                    <StandardCross isSquare={false} radius={2.2} lineWidth={2.5}  color="#111" position={[0, 4, 0]} />
                    <StandardCross radius={2} position={[0, -0.95, 0]}  lineWidth={2.5}  squareColor="#eee" color='#111' />
                    <StandardCross radius={2.8} position={[0, 3.4, 0]}  lineWidth={2.5} squareColor="#eee" color='#111' />
                    <SquareCross width={0} height={0} position={[0, -0.95, 0]} extend={6.2} />
                </>
            )}
        </group>
    );
};

export default JarA;
