import { Center, Edges, Html, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';
import { angleToRotation } from '~/core/helper';
import './SkeletonB.css';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const SkeletonB: React.FC<Props> = ({ visible, opacity=1, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/skeleton_b.glb`) as any;
    console.log(nodes);

    return (
        <group {...groups} >
            <Center position={[0, 2.55, 0]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(90), angleToRotation(0), 0]} scale={0.174}>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Fabricio_Works_Skeleton.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial color={'#fff'} transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                    </mesh>
                </group >
            </Center>

            {!!showEdige && (
                <group rotation={[0, angleToRotation(-85), 0]} position={[0, -0.98, -0.4]}>
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

export default SkeletonB;
