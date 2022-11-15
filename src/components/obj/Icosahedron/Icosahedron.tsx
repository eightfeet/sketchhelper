import { Edges, Line } from '@react-three/drei';
import * as THREE from 'three';
import CircleCross from '~/components/GuideGroup/CircleCross';
import SquareCross from '~/components/GuideGroup/SquareCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Icosahedron: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <group position={position as any}>
            <group position={[0, -0.14, 0]}>
                <mesh
                    castShadow={shadow}
                    receiveShadow={shadow}
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                >
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        transparent
                        opacity={opacity}
                        roughness={0.7}
                        metalness={0.25}
                        emissive={new THREE.Color(0x000000)}
                    />
                </mesh>
                {
                    showEdige && <>
                        <mesh
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                        >
                            <icosahedronGeometry args={[1, 0]} />
                            <meshStandardMaterial
                                transparent
                                opacity={0}
                            />
                            <Edges />
                        </mesh>
                        <group rotation={[0, 0, 0]}>
                            <SquareCross cross={['diagonal']} width={1.05} height={1.7} rotation={[1.57, 0, 0]} position={[0, 0, 0]} extend={0} color="red" />
                            <SquareCross cross={['diagonal']} width={1.7} height={1.05} rotation={[1.57, 0, 1.57]} position={[0, 0, 0]} extend={0} color="red" />
                        </group>
                        <group rotation={[0, 1.57, 1.57]}>
                            <SquareCross cross={['diagonal']} width={1.7} height={1.05} rotation={[1.57, 0, 1.57]} position={[0, 0, 0]} extend={0} color="red" />
                        </group>
                    </>
                }
            </group>

        </group>
    );
};

export default Icosahedron;
