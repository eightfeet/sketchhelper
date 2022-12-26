import { Center, useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import { angleToRotation } from '~/core/helper';
import CircleStepCross from '../../GuideGroup/CircleStepCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Apple: React.FC<Props> = ({ position, opacity, shadow, showEdige = false }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/apple.glb`) as any;
    return (
        <group>
            <Center top scale={20} position={[0, -1, 0]}>
                <mesh
                    receiveShadow={shadow}
                    rotation={[0, 0, 0]}
                    position={position as any}
                    castShadow={shadow}
                    geometry={nodes.appleobj.geometry}
                    dispose={null}
                >
                    <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} emissive={new THREE.Color(0x000000)} envMapIntensity={0.5} />

                </mesh>
            </Center>
            {!!showEdige && (
                <>
                    <group>
                        <CircleStepCross
                            position={[-0.015, 0.5, 0.205]}
                            rotation={[0.30, 0, -0.1]}
                            split={10}
                            extendLine={true}
                            extendArray={[
                                { extend: 0, radius: .04, cross: false },
                                { extend: 0.1, radius: .03, cross: false },
                                { extend: 0.2, radius: .026, cross: false },
                                { extend: 0.3, radius: .026, cross: false },
                            ]} />
                    </group>
                    <group position={[0.044, 0.88, 0.32]} rotation={[angleToRotation(8), 0, angleToRotation(-22)]}>
                        <group position={[0, -0.4, 0]} >
                            <CircleStepCross
                                position={[0, 0, 0]}
                                rotation={[0, 0, 0]}
                                split={10}
                                extendLine={true}
                                extendArray={[
                                    { extend: 0.36, radius: .032, cross: false },
                                    { extend: 0.5, radius: .040, cross: false },
                                ]} />
                        </group>
                    </group>
                    <group position={[0, 0.56, 0.22]} rotation={[angleToRotation(17), 0, angleToRotation(-2)]}>
                        <group position={[0, -0.4, 0]} >
                            <CircleStepCross
                                position={[0, 0, 0]}
                                rotation={[0, 0, 0]}
                                split={6}
                                extendLine={true}
                                lineWidth={3}
                                extendArray={[
                                    { extend: 0.36, radius: .032, cross: false },
                                    { extend: 0.5, radius: .2, cross: false },
                                    { extend: 0.6, radius: .4, cross: false },
                                    { extend: 0.52, radius: .67, cross: false },
                                    { extend: 0.3, radius: .9, cross: false },
                                    { extend: -0.05, radius: 1.0, cross: false },
                                ]} />
                        </group>
                    </group>
                </>
            )}
        </group>
    );
};

export default Apple;
