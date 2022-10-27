import { Canvas } from '@react-three/fiber';
import {
    useGLTF,
    OrbitControls,
    Center,
    softShadows,
    PivotControls,
    PresentationControls,
} from '@react-three/drei';
import './App.css';

softShadows();

export default function App() {
    return (
        <div className="App">
            <Canvas
                linear
                shadows
                raycaster={{ params: { Line: { threshold: 0.15 } } }}
                camera={{ position: [-10, 10, 10], fov: 20 }}
            >
                <color attach="background" args={['#bbb']} />
                <ambientLight intensity={0.5} />
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
{/* 
                <PivotControls
                    rotation={[0, -Math.PI / 2, 0]}
                    anchor={[1, -1, -1]}
                    scale={75}
                    depthTest={false}
                    fixed
                    lineWidth={2}
                    disableAxes
                    disableRotations={false}
                    disableSliders
                    visible={true}
                >
                    <mesh receiveShadow position={[-1, 0.5, 1]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial wireframe />
                    </mesh>
                </PivotControls>

                <PivotControls
                    rotation={[0, -Math.PI / 2, 0]}
                    anchor={[0, 0, 0]}
                    scale={75}
                    depthTest={false}
                    fixed
                    lineWidth={2}
                    visible={false}
                >
                    <Center top position={[1.5, 0, 0]}>
                        <mesh castShadow receiveShadow>
                            <dodecahedronGeometry args={[0.5]} />

                            <meshStandardMaterial color="white" wireframe />
                        </mesh>
                    </Center>
                </PivotControls>

                <PivotControls
                    anchor={[1, 1, 1]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={0.75}
                    visible={false}
                >
                    <Center top scale={1.5} position={[-0.5, 0, -1]}>
                        <Cup>
                            <meshStandardMaterial
                                color="white"
                                opacity={0}
                                wireframe
                                wireframeLinewidth={10}
                            />
                        </Cup>
                    </Center>
                </PivotControls>
                <lineSegments>
                    
                    <lineBasicMaterial color={"#fff"}>
                    <edgesGeometry>
                        <boxGeometry args={[1, 1, 1]} />
                    </edgesGeometry>
                    </lineBasicMaterial>
                </lineSegments>
 */}



                <PivotControls
                    rotation={[0, -Math.PI / 2, 0]}
                    anchor={[0, 0, 0]}
                    scale={75}
                    depthTest={false}
                    fixed
                    lineWidth={2}
                    visible={false}
                >
                    <Center top position={[1.5, 0, 0]}>
                        <mesh castShadow receiveShadow>
                            <lineSegments>
                                <edgesGeometry>
                                    <boxGeometry args={[1, 1, 1]} />
                                </edgesGeometry>
                                <lineBasicMaterial color={0x7b40f9} linewidth={1} />;
                            </lineSegments>
                        </mesh>
                    </Center>
                </PivotControls>


                <lineSegments position={[1, 1, 1]} >
                <mesh castShadow receiveShadow>
                <edgesGeometry>
                                    <boxGeometry args={[1, 1, 1]} />
                                </edgesGeometry>
                                </mesh>
                <lineBasicMaterial color={0x7b40f9} linewidth={1} />;
            </lineSegments>




                <OrbitControls makeDefault />
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
