import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const FemaleHead2: React.FC<Props> = ({
    position,
    opacity,
    showEdige = false,
    shadow,
}) => {
    const { nodes } = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/body/female_head_2.glb`
    ) as any;

    return (
        <Center
            top
            scale={1.5}
            position={[0, -1, 0]}
            rotation={[0, angleToRotation(0), 0]}
        >
            {nodes["968230f3904b4e10b289f0ffb0ef03f9fbx"].children[0].children[0].children.map(
                (item: { geometry: any }, index: number) => (
                    <mesh
                        key={index}
                        scale={2}
                        receiveShadow={shadow}
                        rotation={[0, 0, 0]}
                        position={[0, 0, 0]}
                        castShadow={shadow}
                        geometry={item.geometry}
                        dispose={null}
                    >
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            envMapIntensity={0.5}
                        />
                        {!!showEdige && <Edges threshold={5} />}
                    </mesh>
                )
            )}
        </Center>
    );
};

export default FemaleHead2;
