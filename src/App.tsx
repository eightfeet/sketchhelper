import { Canvas } from '@react-three/fiber';
import {
    useGLTF,
    OrbitControls,
    Center,
    softShadows,
    PivotControls,
    PresentationControls,
    Line,
    Edges,
} from '@react-three/drei';
import './App.css';
import Wrap from './components/Wrap';
import { useCallback, useRef, useState } from 'react';
import { BoxGeometry, Mesh } from 'three';
import Box from './components/Box';
import Guide from './components/Guide';

softShadows();

// const Edges = (props: { geometry: any}) => {
//     if (props.geometry.current !== undefined) {

//       return (
//         <lineSegments>
//           <edgesGeometry attach="geometry" args={props.geometry.current} />
//           <lineBasicMaterial attach="material" />
//         </lineSegments>
//       );
//     }
//     return null;
//   };

export default function App() {
    const box = useRef<any>(null);
    const [autoRotate, setAutoRotate] = useState(false);

    const [number, setNumber] = useState(1);
    const [opacity, setOpacity] = useState(1);

    const renderMain = useCallback(
        (position: number[]) => {
            return <Box position={position} opacity={opacity} showEdige />;
        },
        [opacity]
    );

    const renderObject = useCallback(() => {
        const res = [];
        for (let index = 0; index < number; index++) {
            res.push(
                <Wrap key={`x${index}`}>{renderMain([0, 0.5, index * 2])}</Wrap>
            );
            res.push(
                <Wrap key={`y${index}`}>{renderMain([index * 2, 0.5, 0])}</Wrap>
            );
        }
        return res;
    }, [number, renderMain]);

    return (
        <div className="App">
            <button onClick={() => setNumber(number + 1)}>增加</button>
            <button onClick={() => setOpacity(0.2)}>透明</button>
            <Canvas
                linear
                shadows
                raycaster={{ params: { Line: { threshold: 0.15 } } }}
                camera={{ position: [-10, 10, 10], fov: 20 }}
            >
                <color attach="background" args={['#bbb']} />
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[2.5, 8, 5]}
                    intensity={1}
                    shadow-mapSize={[1024, 1024]}
                >
                    <orthographicCamera
                        attach="shadow-camera"
                        args={[-5, 5, 5, -5, 1, 50]}
                    />
                </directionalLight>

                <mesh scale={20} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry />
                    <shadowMaterial transparent opacity={0.5} />
                </mesh>

                {renderObject()}
                <Guide />
                <OrbitControls makeDefault autoRotate={autoRotate} />
            </Canvas>
        </div>
    );
}

function Cup(props: any) {
    const { nodes, materials } = useGLTF('/coffee-transformed.glb') as any;
    return (
        <mesh
            receiveShadow
            castShadow
            geometry={nodes.coffee_cup_top_16oz.geometry}
            material={materials['13 - Default']}
            {...props}
            dispose={null}
        />
    );
}
