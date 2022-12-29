import { Center, Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const HandAnatomy: React.FC<Props> = ({
    opacity,
    showEdige = false,
    shadow,
}) => {
    const { nodes } = useGLTF(
        `${process.env.PUBLIC_URL || ''}/glb/body/hand_anatomy.glb`
    ) as any;

    return (
        <Center
            top
            scale={0.1}
            position={[0, -1, 0]}
            rotation={[0, angleToRotation(0), 0]}
        >
            {nodes.handobjcleanermaterialmergergles.children.map(
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

export default HandAnatomy;
