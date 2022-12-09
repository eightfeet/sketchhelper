import { Center, Edges, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props extends GroupProps {
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const SkeletonHeadD: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const data = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/skeleton_head_d.glb`) as any;
    const { nodes, materials } = data;
    console.log(data);
    
    return (
        <group {...groups} >
            <Center position={[0,0.8,0.4]} rotation={[angleToRotation(0),angleToRotation(90),angleToRotation(90)]}>
                <group position={[0, 8, 0]} rotation={[angleToRotation(180), angleToRotation(-270), 0]} scale={0.8}>
                    <mesh
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={nodes.Sketchfab_model.children[0].children[0].geometry}
                        dispose={null}
                        material={materials.defaultMat}
                    >
                        {!!showEdige && (<Edges threshold={5} />)}
                    </mesh>
                    

                </group >
            </Center>
        </group>
    );
};

export default SkeletonHeadD;
