import { Center, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const MaleBody: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/bodymale.glb`) as any;
    

    return (
        <group {...groups} >
            <Center position={[0, 2.7, 0]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(0), angleToRotation(0), 0]} scale={0.03}>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Body_Decimated.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial color="#fff" transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges threshold={5} /> */}
                    </mesh>
                    <mesh
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Ecorche_Decimated.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial color="#eee" roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
                        {/* <Edges threshold={5} /> */}
                    </mesh>
                </group >
            </Center>
        </group>
    );
};

export default MaleBody;
