import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const MultinodularGoitre: React.FC<Props> = ({
    visible,
    opacity,
    showEdige,
    shadow,
    ...groups
}) => {
    const res = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/body/multinodular_goitre.glb`
    ) as any;
    const { nodes, materials } = res;
    console.log(res);

    return (
        <group {...groups}>
            <Center position={[0,1.93,0]} scale={0.02}>
                <group
                    position={[0, 0, 0]}
                    rotation={[angleToRotation(180), angleToRotation(0), 0]}
                    scale={0.2}
                >
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        geometry={nodes.Object_2.geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        geometry={nodes.Object_3.geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        geometry={nodes.Object_4.geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        geometry={nodes.Object_5.geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.Object_6.geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={0.7}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.Sketchfab_model.children[0].children[0].geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={0.7}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.Sketchfab_model.children[0].children[1].geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={0.7}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.Sketchfab_model.children[0].children[2].geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={0.7}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.Sketchfab_model.children[0].children[3].geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={0.7}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, -2.6]}
                        castShadow={shadow}
                        geometry={nodes.Sketchfab_model.children[0].children[4].geometry}
                        dispose={null}
                    >
                        {!!showEdige && <Edges threshold={5} color="#5e2429" />}
                        <meshStandardMaterial
                            transparent
                            opacity={0.7}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                    </mesh>
                </group>
            </Center>
        </group>
    );
};

export default MultinodularGoitre;
