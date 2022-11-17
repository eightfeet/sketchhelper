import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import SquareCross from '~/components/GuideGroup/SquareCross';
import StandardCross from '~/components/GuideGroup/StandardCross';

interface Props extends GroupProps{
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Test: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/test.glb`) as any;
    console.log(nodes);
    
    return (
        <group {...groups}>
            <mesh
                scale={2}
                receiveShadow={shadow}
                rotation={[0, 0, 0]}
                position={[0, -1, 0]}
                castShadow={shadow}
                geometry={nodes.bc.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
            </mesh>

            {!!showEdige && (
                <>
                   
                </>
            )}
        </group>
    );
};

export default Test;
