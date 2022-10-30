import { Edges } from '@react-three/drei';
import React from 'react';

interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
}

const Cylinder:React.FC<Props> = ({position, opacity, showEdige}) => {
    return (
        <mesh castShadow receiveShadow position={position as any}>
            <cylinderGeometry args={[1,1,2,100]}/>
            <meshStandardMaterial transparent opacity={opacity} metalness={0.1}/>
            {showEdige && <Edges
                threshold={5} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="red"
            />}
        </mesh>
    )
}

export default Cylinder;