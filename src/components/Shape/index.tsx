import { Center, useGLTF } from '@react-three/drei';
import React from 'react';
import CircleCross from '../GuideGroup/CircleCross';
import SquareCross from '../GuideGroup/SquareCross';

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
        shapec: [nodes.shapec.geometry, [1.58, 0, 0.8]],
        shaped: [nodes.shaped.geometry, [0, 0, 0], 0.5],
    }

    const current = groups[name];

    return (
        <>
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
                </mesh>
            </Center>

            <CircleCross 
                lineWidth={2.0} 
                rotation={[0,1.195,0]}
                cross 
                extendRadius={0} 
                radius={0.93} 
                extendCone 
                innerRing
                outerRing={false} 
                position={[0, -1.005, 0]} 
                extend={2.3} color="gray" 
                segments={4} 
                />
            {/* <SquareCross 
                color='gray' 
                cross={['diagonal']} 
                diagonalExtend={false} 
                extend={2.3} 
                rotation={[0,0.41,0]}
                width={1.33} 
                height={1.33} 
                position={[0,-1.015,0]} 
                />
                <group rotation={[0,0,0.9]}>
                    <SquareCross 
                        lineWidth={2.0} 
                        width={0.62} 
                        height={0.62} 
                        rotation={[0, 0.4, 0]} 
                        position={[0, 0, 0]} 
                        extend={1.9} 
                        color="#777" 
                        />
                </group> */}
            

            {!!showEdige && (
                <>
                    {name === 'shapea' &&
                        <group scale={0.5} position={[0,-0.09,0]}>
                            <CircleCross radius={2.35} extendRadius={1.215} rotation={[0, 0.526, 0]} segments={6} position={[0, -1.8, 0]} color="red"  cross extend={2.1} lineWidth={2} />
                            <CircleCross radius={2.35} extendRadius={0} rotation={[0, 0.526, 0]} segments={6} position={[0, -1.8, 0]} color="red" extendCone cross extend={4.35} lineWidth={2} />
                            <SquareCross color='gray' cross={['diagonal']} diagonalExtend={false} extend={4.35} width={4.1} height={4.7} position={[0,-1.8,0]} />
                        </group>
                    }
                </>
            )}
        </>
    );
};

export default Shape;
