import { Center, Edges, Html, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const HeadReference: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/head_planes_reference.glb`) as any;
    console.log(nodes);
    const step = 1.30;
    return (
        <group {...groups} >
            <Center position={[0, 2.5, 0.4]} rotation={[0, angleToRotation(-90), 0]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(0), angleToRotation(90), 0]} scale={1}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* {!!showEdige && (<Edges threshold={6} />)} */}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0_1.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* {!!showEdige && (<Edges threshold={6} />)} */}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0_2.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* {!!showEdige && (<Edges threshold={6} />)} */}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0_3.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* {!!showEdige && (<Edges threshold={6} />)} */}
                    </mesh>
                </group >
            </Center>
            {!!showEdige && (
                <>
                    <group position={[0, 3.85, 0.3]} rotation={[0, angleToRotation(0), angleToRotation(0)]}>

                        <Html position={[2.2, 0.7, 0]}><span style={{ fontSize: '1rem', color: '#f00' }}>1/3</span></Html>
                        <Html position={[2.2, -0.7, 0]}><span style={{ fontSize: '1rem', color: '#f00' }}>1/3</span></Html>
                        <Html position={[2.2, -2.0, 0]}><span style={{ fontSize: '1rem', color: '#f00' }}>1/3</span></Html>
                        <SquareCross color='#f00' cross={[]} width={3} height={4} extend={step} axis={false} position={[0, 0 * step, 0,]} />
                        <SquareCross color='#f00' cross={[]} width={3} height={4} extend={step} axis={false} position={[0, -1 * step, 0,]} />
                        <SquareCross color='#f00' cross={[]} width={3} height={4} extend={step} axis={false} position={[0, -2 * step, 0,]} />

                    </group>
                    <group position={[0, 3, 3]} rotation={[0, angleToRotation(0), angleToRotation(0)]}>
                        <Html position={[0, 0.5, 0]}><span style={{ fontSize: '1rem', color: '#0ff' }}>1/5</span></Html>
                        <SquareCross color='#0ff' lineWidth={8} axis={false} width={0.7} height={0} extend={step / 2} crossExtend={false} diagonalExtend={false} />
                        <SquareCross color='#0ff' axis={false} width={1.4} position={[1.05, 0, 0]} height={0} extend={step / 2} />
                        <SquareCross color='#0ff' axis={false} width={1.4} position={[-1.05, 0, 0]} height={0} extend={step / 2} />
                    </group>
                </>
            )}
        </group>
    );
};

export default HeadReference;
