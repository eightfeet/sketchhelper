import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const GroupDemo: React.FC<Props> = ({ position, opacity, showEdige }) => {
    // 头部
    // const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/head1.glb`) as any;
    // const groups = {
    //     Obj: [nodes.Object_2.geometry, [1.5, -2.9, 5], 0.1],
    // }
    // 手
    // const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/anatomy.glb`) as any;
    // const groups = {
    //     Obj: [nodes.hand.geometry, [1.6, -3.15, 5.3], 0.1],
    // }
    // 动态
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/anatomy.glb`) as any;
    const groups = {
        Obj: [nodes.action.geometry, [1.6, -3.15, 5.3], 0.9],
    }

    console.log(nodes);

    const current = groups.Obj;

    

    return (
        <Center top scale={current[2] || 0.25} position={[0, -1, 0]}>
            <mesh
                receiveShadow
                rotation={current[1]}
                position={position as any}
                castShadow
                geometry={current[0]}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={5} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color="red"
                    />
                )}
            </mesh>
        </Center>
    );
};

export default GroupDemo;