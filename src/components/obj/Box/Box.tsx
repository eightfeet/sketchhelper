import { Edges, Line } from '@react-three/drei';
import * as THREE from 'three';
import CircleCross from '~/components/GuideGroup/CircleCross';
import CircleStepCross from '~/components/GuideGroup/CircleStepCross';
import SquareCross from '~/components/GuideGroup/SquareCross';
import { angleToRotation } from '~/core/helper';

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
                <group>
                    {/* <CircleStepCross
                        position={[0, -1, 0]}
                        rotation={[0, angleToRotation(45), 0]}
                        segments={4}
                        lineWidth={2}
                        extendArray={[
                            {
                                extend: 0,
                                radius: 1.42
                            },
                            {
                                extend: 2,
                                radius: 1.42
                            }
                        ]}
                    /> */}
                    <SquareCross position={[0, -1, 0]} width={2} height={2} extend={2} color="#000" />
                    <SquareCross rotation={[0,0,angleToRotation(90)]} lineWidth={0.3} position={[1, 0, 0]} width={2} height={2} extend={2} color="#000" />
                </group>
            )}
        </mesh>
    );
};

export default Box;
