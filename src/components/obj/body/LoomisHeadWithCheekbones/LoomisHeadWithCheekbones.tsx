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

const LoomisHeadWithCheekbones: React.FC<Props> = ({
    visible,
    opacity,
    showEdige,
    shadow,
    ...groups
}) => {
    const res = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/body/loomis_head_with_cheekbones.glb`
    ) as any;
    const { nodes, materials } = res;
    console.log(res);

    return (
        <group {...groups}>
            <Center position={[0,1.52,0]}>
                <group
                    position={[0, 0, 0]}
                    rotation={[angleToRotation(-90), angleToRotation(0), angleToRotation(0)]}
                    scale={0.5}
                >
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_2.geometry}
                        dispose={null}
                        material={materials.Blue}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_3.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_4.geometry}
                        dispose={null}
                        material={materials.Green}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_5.geometry}
                        dispose={null}
                        material={materials.Green}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_6.geometry}
                        dispose={null}
                        material={materials.material}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_7.geometry}
                        dispose={null}
                        material={materials.material}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_8.geometry}
                        dispose={null}
                        material={materials.Purple}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_9.geometry}
                        dispose={null}
                        material={materials.Purple}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_10.geometry}
                        dispose={null}
                        material={materials.Purple}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_11.geometry}
                        dispose={null}
                        material={materials.Yellow}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_12.geometry}
                        dispose={null}
                        material={materials.Yellow}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                    <mesh
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        geometry={nodes.Object_13.geometry}
                        dispose={null}
                        material={materials.Yellow}
                    >
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                </group>
            </Center>
        </group>
    );
};

export default LoomisHeadWithCheekbones;
