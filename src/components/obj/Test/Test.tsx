import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleCross from '~/components/GuideGroup/CircleCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Test: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/cupa.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            {/* <Center position={[0, 1.15, 0]}> */}
                <group position={[0, 0, 0]} rotation={[Math.PI / 180 * -90, 0, 0]} scale={10}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.cup1.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges /> */}
                    </mesh>

                </group >
            {/* </Center> */}

            {!!showEdige && (
                <>
                    <StandardCross radius={2} position={[0, 1.4, 0]} />
                    <StandardCross radius={1.4} position={[0, -0.96, 0]} />
                    <StandardCross radius={1.6} position={[0, 2.95, 0]} />
                    <StandardCross radius={1.62} position={[0, 2.6, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.74} position={[0, 2.78, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.735} position={[0, 2.85, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.62} position={[0, 2.87, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <StandardCross radius={1.85} position={[0, 0.5, 0]} lineWidth={3} color="#333" isSquare={false} />
                    <SquareCross width={0} height={0} extend={5} position={[0, -1.5, 0]} />
                </>
            )}
        </group>
    );
};

export default Test;
