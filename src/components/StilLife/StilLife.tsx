import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment, Line, OrbitControls, Plane } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { LayerMaterial, Depth, Noise } from 'lamina'
import Wrap from '../Wrap'
import Box from '../Box'
import Sphere from '../Sphere'
import Cone from '../Cone';
import { useCallback, useState } from 'react'
import { store } from './proxyStilLife'
import { Button, Form, Popup, Radio, Slider, Space, Switch } from 'antd-mobile'
import { AddOutline, DeleteOutline, SetOutline } from 'antd-mobile-icons'
import Cylinder from '../Cylinder'
import Guide from '../Guide'

export default function StilLife() {
  const data = useSnapshot(store)
  const [current, setCurrent] = useState<number>();
  const [currentGuid, setCurrentGuid] = useState<number>();
  const [visibleSetting, setVisibleSetting] = useState(false);
  const [form] = Form.useForm();

  const onClick = useCallback(
    (index: number, other: {
      opacity: number,
      showEdige: boolean,
      visible: boolean
    }) => {
      store.list = store.list.map((item, ind) => ({ ...item, visible: item.visible ? false : index === ind }));
      store.list.some((el, ind) => {
        setCurrent(el.visible ? ind : undefined)
        return el.visible
      });
    },
    [],
  )

  const onClickGrid = useCallback(
    (index: number, other: {
      tag: number,
      visible: boolean
    }) => {
      store.guide = store.guide.map((item, ind) => ({ ...item, visible: item.visible ? false : index === ind }));
      store.guide.some((el, ind) => {
        setCurrentGuid(el.visible ? ind : undefined)
        return el.visible
      });
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

  const createObj = useCallback(
    () => {
      store.list.push({
        name: 'box',
        opacity: 1,
        showEdige: false,
        visible: true
      })
    },
    [],
  )

  const setObj = useCallback(
    () => {
      if (current === undefined) return;
      setVisibleSetting(true);
      form.setFieldsValue((store.list[current]))
    },
    [current, form],
  )

  const deleteObj = useCallback(
    () => {
      setCurrent(undefined)
      store.list = store.list.filter((item, ind) => ind !== current)
    },
    [current],
  )

  const deleteGuid = useCallback(
    () => {
      store.guide = store.guide.filter((item, ind) => ind !== currentGuid);
      setCurrentGuid(undefined)
    },
    [currentGuid],
  )


  const onFieldsChange = useCallback(
    () => {
      const data = form.getFieldsValue();
      console.log(data);
      if (current !== undefined) {
        store.list = store.list.map((item, ind) => ({ ...item, ...ind === current ? data : {} }));
      }
    },
    [current, form],
  )

  const createGrid = useCallback(
    () => {
      store.guide.push({
        tag: (store.guide.slice(-1)[0]?.tag || 0) + 1,
        visible: true
      })
    },
    [],
  )
  

  return (
    <>
      <div className='navbar' >
        <Space align="center" block>
          <span className="menulabel">物体</span>
          <Button size="mini" fill='outline' onClick={createObj} ><AddOutline /></Button>
          {current !== undefined && <Button size="mini" fill='outline' onClick={setObj} ><SetOutline /></Button>}
          {current !== undefined && <Button size="mini" fill='outline' onClick={deleteObj} ><DeleteOutline /></Button>}
        </Space>
        <br />
        <Space align="center"block>
          <span className="menulabel">透视线</span>
          <Button size="mini" fill='outline' onClick={createGrid} ><AddOutline /></Button>
          {currentGuid !== undefined && <Button size="mini" fill='outline' onClick={deleteGuid} ><DeleteOutline /></Button>}
        </Space>
        <Popup
          visible={visibleSetting}
          onMaskClick={() => {
            setVisibleSetting(false)
          }}
          position='top'
        >
          <Form
            layout='horizontal'
            form={form}
            onFieldsChange={onFieldsChange}
          >
            <Form.Item
              name='name'
              label='模块类型'
              rules={[{ required: true, message: '请选择模块类型' }]}
            >

              <Radio.Group>
                <Space direction='vertical'>
                  <Radio value='box'>
                    正方体
                  </Radio>
                  <Radio value='sphere'>球</Radio>
                  <Radio value='cone'>园锥体</Radio>
                  <Radio value='cylinder'>园柱体</Radio>

                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item name='opacity' label='透明度' >
              <Slider ticks step={0.1} min={0} max={1} />
            </Form.Item>
            <Form.Item
              name='showEdige'
              label='显示边框'
            >
              <Switch uncheckedText='关' checkedText='开' />
            </Form.Item>
          </Form>
        </Popup>
      </div>
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
          position={[2.50, 8, 5]}
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
            {name === 'box' && <Box {...other} />}
            {name === 'cone' && <Cone {...other} />}
            {name === 'sphere' && <Sphere {...other} />}
            {name === 'cylinder' && <Cylinder {...other} />}
          </Wrap>)
        }
        {
          data.guide.map(
            (item, index) => <Guide key={item.tag} {...item} onClick={() => onClickGrid(index, item)} />
          )
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
          <mesh scale={1000}>
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
