import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const EcorcheAnatomyStudy: React.FC<Props> = ({ position, opacity, showEdige = false, shadow }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/ecorche_anatomy_study.glb`) as any;
    console.log(nodes);
    
    return (
        <Center top scale={0.09} position={[0, 2.05, 0]} rotation={[angleToRotation(-90),angleToRotation(0),0]}>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_2.children[0].children[0].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_2.children[0].children[1].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_2.children[0].children[2].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_2.children[0].children[3].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_2.children[1].children[0].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_2.children[2].children[0].geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_4.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
            <mesh
                receiveShadow={shadow}
                rotation={[angleToRotation(0), 0, 0]}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Object_5.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>

        </Center>
    );
};

export default EcorcheAnatomyStudy;
