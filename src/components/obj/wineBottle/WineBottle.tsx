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

const WineBottle: React.FC<Props> = ({ visible, opacity, showEdige, shadow, ...groups }) => {
    const { nodes } = useGLTF(`${process.env.PUBLIC_URL || ''}/glb/winebottle.glb`) as any;

    return (
        <group {...groups}>
            <mesh
                scale={2}
                receiveShadow={shadow}
                rotation={[0, 0, 0]}
                position={[0, -1, 0]}
                castShadow={shadow}
                geometry={nodes.winebottle.geometry}
                dispose={null}
            >
                <meshStandardMaterial transparent opacity={opacity} roughness={0.7} metalness={0.25} envMapIntensity={0.5} />
            </mesh>

            {!!showEdige && (
                <>
                    <group scale={1} position={[0, 0, 0]}>

                        <StandardCross
                            raduis={0.86}
                            position={[0, -0.95, 0]}
                            squareColor="#666"
                        />

                        <StandardCross
                            raduis={0.28}
                            position={[0, -0.85, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            raduis={0.12}
                            position={[0, -0.75, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            raduis={0.12}
                            position={[0, 0, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            raduis={0.25}
                            position={[0, 0.2, 0]}
                            squareColor="#666"
                        />
                        <StandardCross
                            raduis={1.15}
                            position={[0, 1.1, 0]}
                            squareColor="#666"
                        />

                        <StandardCross
                            raduis={0.95}
                            position={[0, 1.95, 0]}
                            squareColor="#666"
                        />
                        <SquareCross  
                        crossExtend={false} 
                        diagonalExtend={false}
                        position={[0,-0.95,0]}
                        cross={[]} width={0} height={0} extend={2.90} />
                    </group>
                </>
            )}
        </group>
    );
};

export default WineBottle;
