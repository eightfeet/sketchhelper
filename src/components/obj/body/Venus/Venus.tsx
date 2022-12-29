import { Edges, useGLTF } from '@react-three/drei';
import React from 'react';
import { angleToRotation } from '~/core/helper';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Venus: React.FC<Props> = ({ position, opacity, showEdige = false, shadow }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/body/venus.glb`) as any;
    

    return (
        <group rotation={[0, angleToRotation(0), 0]} position={[0,-1,0]}>
            <mesh
                scale={0.004}
                receiveShadow={shadow}
                position={position as any}
                castShadow={shadow}
                geometry={nodes.Venus.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={1} roughness={0} metalness={0} envMapIntensity={0.5} />

                {!!showEdige && (
                    <Edges
                        threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    />
                )}
            </mesh>
        </group>
    );
};

export default Venus;
