import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Plane } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { LayerMaterial, Depth, Noise } from 'lamina'
import Wrap from '../Wrap'
import Box from '../Box'
import Sphere from '../Sphere'
import Cone from '../Cone';
import { useCallback, useState } from 'react'
import { store } from './proxyStilLife'

export default function StilLife() {
  const data = useSnapshot(store)
  const [current, setCurrent] = useState<number>()
  const onClick = useCallback(
    (index: number, other: {
      opacity: number,
      showEdige: boolean,
      visible: boolean
    }) => {
      setCurrent(index)
      store.list = store.list.map((item, ind) => ({...item, visible: item.visible ? false : index === ind }))
    },
    [],
  )

  const onDoubleClick = useCallback(
    (index: number, other: {
      opacity: number,
      showEdige: boolean,
      visible: boolean
    }) => {
      setCurrent(index)
      store.list = store.list.filter((item, ind) => ind !== index)
    },
    [],
  )

  return (
    <>
    <div onClick={() => store.list.push({
      name: 'box',
      opacity: 1,
      showEdige: true,
      visible: false
    })}>
      创建
    </div>
    {JSON.stringify(data.list)}
      <Canvas
        linear
        shadows
        raycaster={{ params: { Line: { threshold: 2 } } }}
        camera={{ position: [-10, 10, 10], fov: 20 }}
      >
        <fog attach="fog" args={["#bbb", 0, 160]} />
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
        <directionalLight
          position={[-2.5, -8, -5]}
          intensity={0.5}
        />
        {
          data.list.map(({ name, ...other }, index) => <Wrap key={index} onClick={() => onClick(index, other)} onDoubleClick={() => onDoubleClick(index, other)} {...other}>
            {name === 'box' && <Box opacity={1} />}
            {name === 'cone' && <Cone opacity={1} />}
            {name === 'sphere' && <Sphere opacity={1} />}
          </Wrap>)
        }
        <Plane
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          args={[1000, 1000]}
        >
          <meshStandardMaterial attach="material" color="#ccc" />
        </Plane>
        <OrbitControls makeDefault />

        <Environment background resolution={5}>
          {/* <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} /> */}
          {/* <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} /> */}
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <LayerMaterial side={THREE.BackSide}>
              {/* <Base color="blue" alpha={1} mode="normal" /> */}
              <Depth colorA="#00ffff" colorB="#ff8f00" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
              <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
            </LayerMaterial>
          </mesh>
        </Environment>
      </Canvas>
    </>
  )
}
