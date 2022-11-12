import * as THREE from 'three';
import CircleCross from '~/components/GuideGroup/CircleCross';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const BoxCross: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <group position={position as any}>
            <group position={[0, -0.24, 0]}>
                <group position={[0, 0.5, 0]} rotation={[0, 0.79, 0]}>
                    <mesh
                        castShadow={shadow}
                        receiveShadow={shadow}
                        rotation={[0, 0.785, 0.785]}
                    >
                        <boxGeometry args={[1.2, 1.2, 2.5]} />
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            emissive={new THREE.Color(0x000000)}
                            envMapIntensity={0.5}
                        />

                    </mesh>
                    <mesh
                        castShadow={shadow}
                        receiveShadow={shadow}
                        position={position as any}
                        rotation={[0, 0, 0]}
                    >
                        <boxGeometry args={[1.2, 2.5, 1.2]} />
                        <meshStandardMaterial
                            transparent
                            opacity={opacity}
                            roughness={0.7}
                            metalness={0.25}
                            emissive={new THREE.Color(0x000000)}
                            envMapIntensity={0.5}
                        />

                    </mesh>
                </group>

                {!!showEdige && (
                    <>
                        <CircleCross radius={0.85}
                            rotation={[0, 0, 0]}
                            segments={4}
                            position={[0, -0.75, 0]}
                            color="red"
                            cross
                            extend={2.5}
                            lineWidth={2} />
                        <CircleCross radius={0.85}
                            rotation={[0, 0, 1.57]}
                            segments={4}
                            position={[1.25, 0.5, 0]}
                            color="red"
                            cross
                            extend={2.5}
                            lineWidth={2} />
                    </>
                )}
            </group>
        </group>
    );
};

export default BoxCross;
