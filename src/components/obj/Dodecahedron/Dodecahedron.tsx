import { Edges } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Dodecahedron: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <group position={position as any}>
            <group position={[0, -0, 0]} rotation={[2.15,1.55,0]}>
                <mesh
                    castShadow={shadow}
                    receiveShadow={shadow}
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                >
                    <dodecahedronGeometry args={[1, 0]} />
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
                            <dodecahedronGeometry args={[1, 0]} />
                            <meshStandardMaterial
                                transparent
                                opacity={0}
                            />
                            <Edges />
                        </mesh>
                        {/* <StandardCross color="blue" squareColor="#777"  />
                        <group rotation={[0, 1.57, 1.57]}>
                            <StandardCross color="blue" squareColor="#777"  />
                        </group> */}
                        {/* <group rotation={[0, 1.57, 1.57]}>
                            <SquareCross cross={['diagonal']} 
                            width={1.88} 
                            height={0.7} 
                            rotation={[1.57, 0, 1.57]} 
                            position={[0, 0, 0]} 
                            extend={0} 
                            color="red" />
                        </group> */}
                    </>
                }
            </group>

        </group>
    );
};

export default Dodecahedron;
