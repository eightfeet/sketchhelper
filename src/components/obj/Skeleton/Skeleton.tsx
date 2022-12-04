import { Center, Edges, Html, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';
import './Skeleton.css';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Skeleton: React.FC<Props> = ({ visible, opacity=1, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/skeleton.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            <Center position={[0, 2.54, 0]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(0), angleToRotation(-90), 0]} scale={0.00415}>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_48.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial color={'#fff'} transparent opacity={opacity - 0.5} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    </mesh>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_48_1.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial color={'#f88'} transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    </mesh>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_48_2.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges threshold={5} /> */}
                    </mesh>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_48_3.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges threshold={5} /> */}
                    </mesh>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_48_4.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges threshold={5} /> */}
                    </mesh>

                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Object_100.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges threshold={5} /> */}
                    </mesh>
                </group >
            </Center>

            {!!showEdige && (
                <group rotation={[0, angleToRotation(-5), 0]} position={[0.6, -0.98, 0]}>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10 / 4 * 1} />
                    <mesh position={[-0, 7.10 / 4 * 1, 2]}>
                        <Html>
                            <div className="femalebodytag">1/4</div>
                        </Html>
                    </mesh>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10 / 4 * 2} />
                    <mesh position={[-0, 7.10 / 4 * 2, 2]}>
                        <Html>
                            <div className="femalebodytag">2/4</div>
                        </Html>
                    </mesh>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10 / 4 * 3} />
                    <mesh position={[-0, 7.10 / 4 * 3, 2]}>
                        <Html>
                            <div className="femalebodytag">3/4</div>
                        </Html>
                    </mesh>
                    <SquareCross width={0} height={4} cross={[]} extend={7.10} />
                    <mesh position={[-0, 7.10, 2]}>
                        <Html>
                            <div className="femalebodytag">4/4</div>
                        </Html>
                    </mesh>
                </group>
            )}
        </group>
    );
};

export default Skeleton;
