import { Text3D } from '@react-three/drei';
import React from 'react';
import s from './Hello.module.scss';
/**
 * 文字注意引入文字字体，/text.json
 * 如何制作查看@react-three/drei文档
 */

interface Props {
    
}

const Hello:React.FC<Props> = ({}) => {
    return (
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={1.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/text.json" >
          {`忘\n回收`}
          <meshNormalMaterial />
        </Text3D>
    )
}

export default Hello;