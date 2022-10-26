import React, { useState } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';

function MyRotatingBox({x}: any) {
    const myMesh = React.useRef<any>();
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = myMesh.current.rotation.x + x;
    });

    return (
      <mesh ref={myMesh}>
          <boxBufferGeometry />
          <meshPhongMaterial color="royalblue" />
      </mesh>
    );
}

function App() {
    const [position, setPosition] = useState(1);
    return (
        <>
            <button onClick={() => setPosition(position + 0.1)}>增加</button>
            <button onClick={() => setPosition(position - 0.1)}>减少</button>
            <div className="App">
                <Canvas>
                    <MyRotatingBox x={0.01} />
                    <ambientLight intensity={0.1} />
                    <directionalLight />
                </Canvas>
            </div>
        </>
    );
}

export default App;
