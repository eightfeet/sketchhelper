import { Center, Line, useGLTF } from '@react-three/drei';
import React from 'react';
import CircleCross from '../GuideGroup/CircleCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
    name: 'shapea' |
    'shapeb' |
    'shapec' |
    'shaped';
}

const Shape: React.FC<Props> = ({ position, opacity, showEdige, name, shadow }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/shape.glb`) as any;


    const groups = {
        shapea: [nodes.shapea.geometry, [0, 0, 0], 0.5],
        shapeb: [nodes.shapeb.geometry, [1.23, 0.72, 0.5], 0.5],
        shapec: [nodes.shapec.geometry, [1.58, 0, 0.8], 0.5],
        shaped: [nodes.shaped.geometry, [0, 0, 0], 0.5],
    }

    const current = groups[name];

    return (
        <Center top scale={current[2] || 0.25} position={[0, -1, 0]}>
            <mesh
                receiveShadow={shadow}
                rotation={current[1]}
                position={position as any}
                castShadow={shadow}
                geometry={current[0]}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />

                {!!showEdige && (
                    <>
                    {name==='shapea' && 
                        <>
                            <CircleCross radius={2.35} rotation={[0, 0.526, 0]} segments={6} position={[0, -1.18, 0]} color="gray" extendCone cross extend={4.35} lineWidth={2} />
                            <Line position={[2.045,-2.19,0]} 
                                points={[
                                    [0,0,-2.35], 
                                    [0,0,2.35],
                                    [-4.09,0,2.35],
                                    [-4.09,0,-2.35],
                                    [0,0,-2.35], 
                                    [-4.09,0,2.35],
                                    [-4.09,0,-2.35],
                                    [0,0,2.35],
                                ]} 
                            />
                            <Line position={[2.045,2.19,0]} 
                                points={[
                                    [0,0,-2.35], 
                                    [0,0,2.35],
                                    [-4.09,0,2.35],
                                    [-4.09,0,-2.35],
                                    [0,0,-2.35], 
                                    [-4.09,0,2.35],
                                    [-4.09,0,-2.35],
                                    [0,0,2.35],
                                ]} 
                            />
                        </>
                    }
                    </>
                )}

            </mesh>
        </Center>
    );
};

export default Shape;
