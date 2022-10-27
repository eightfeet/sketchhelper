import React, { useCallback, useState } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, Line } from '@react-three/drei'

function MyRotatingBox({x}: any) {
    const myMesh = React.useRef<any>();
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = myMesh.current.rotation.x + x;
    });

    return (
      <mesh ref={myMesh}>
          <boxBufferGeometry width={1000} args={[1,2,3]} />
          <Line points={[[0, -1000, 0], [0, 1000, 0]]} color="royalblue" onClick={() => {console.log(555)}} />
          <Line points={[[0.5, -1000, 0], [0.5, 1000, 0]]} color="royalblue" />
          <meshPhongMaterial color="royalblue" />
      </mesh>
    );
}

function App() {
    const [position, setPosition] = useState(1);
    const [controlsRotate, setControlsRotate] = useState(true);
    const handleDoubleClick = useCallback(
      () => {
        console.log(1111);
        setControlsRotate(!controlsRotate)
      },
      [controlsRotate],
    )
    
    return (
        <>
            <button onClick={() => setPosition(position + 0.1)}>增加</button>
            <button onClick={() => setPosition(position - 0.1)}>减少</button>
            <div className="App" >
                <Canvas onClick={handleDoubleClick}>
                    <MyRotatingBox x={0} />
                    <ambientLight intensity={0.1} />
                    <directionalLight />
                    <OrbitControls autoRotate={controlsRotate} />
                </Canvas>
            </div>
        </>
    );
}

export default App;
