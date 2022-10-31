import { Edges } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
    shadow?: boolean;
}

const Box: React.FC<Props> = ({ position, opacity, showEdige, shadow }) => {
    return (
        <mesh
            castShadow={shadow}
            receiveShadow={shadow}
            position={position as any}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
                transparent
                opacity={opacity}
                roughness={0.7}
                metalness={0.25}
                emissive={new THREE.Color(0x000000)}
                envMapIntensity={0.5}
            />
            {!!showEdige && (
                <Edges
                    threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                    color="red"
                />
            )}
        </mesh>
    );
};

export default Box;
