import { Line } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React from 'react';

interface Props extends GroupProps {
    width:number,
    height:number,
    extend?:number,
    step?:number,
    cross?:('diagonal' | 'cross')[],
    crossExtend?:boolean,
    diagonalExtend?:boolean,
    color?: string,
    lineWidth?: number,
}

const SquareCross:React.FC<Props> = ({
    width,
    height,
    extend=0,
    step=1,
    cross=['diagonal', 'cross'],
    crossExtend = true,
    diagonalExtend = true,
    color="#555",
    lineWidth=2,
    ...other
}) => {
    const renderSquare = () => {
        const extendNode: React.ReactNode[] = [];
        const eachOne = extend/step;
        let square = [
            [0, 0, 0],
            [width, 0, 0],
            [width, 0, height],
            [0, 0, height],
            [0, 0, 0]
        ];
        if (cross.includes('diagonal')) square = square.concat([
            [width, 0, height],
            [0, 0, height],
            [width, 0, 0],
        ]);
        if (cross.includes('cross')) square = square.concat([
            [width, 0, height/2],
            [0, 0, height/2],
            [0, 0, height],
            [width/2, 0, height],
            [width/2, 0, 0],
            [0, 0, 0]
        ]);
        
        for (let index = 0; index <= step; index++) {
            const size = eachOne*index;
            extendNode.push(<Line 
                key={index}
                position={[0, size, 0]}
                color={color}
                lineWidth={lineWidth}
                points={square as any}
            />)
        }
        return extendNode;
    }

    const renderY = () => {
        return <group position={[0, 0, 0]}>
            <Line lineWidth={lineWidth} color={color} points={[[width/2,0,height/2],[width/2,extend,height/2]]} />

            {
                crossExtend &&
                <>
                    <Line lineWidth={lineWidth} color={color} points={[[0,0,0],[0,extend,0]]} />
                    <Line lineWidth={lineWidth} color={color} points={[[width,0,0],[width,extend,0]]} />
                    <Line lineWidth={lineWidth} color={color} points={[[width,0,height],[width,extend,height]]} />
                    <Line lineWidth={lineWidth} color={color} points={[[0,0,height],[0,extend,height]]} />
                    <Line lineWidth={lineWidth} color={color} points={[[width/2,0,height/2],[width/2,extend,height/2]]} />
                </>
            }
            {
                diagonalExtend &&
                <>
                    <Line lineWidth={lineWidth} color={color} points={[[width/2,0,height],[width/2,extend,height]]} />
                    <Line lineWidth={lineWidth} color={color} points={[[width/2,0,0],[width/2,extend,0]]} />
                    <Line lineWidth={lineWidth} color={color} points={[[0,0,height/2],[0,extend,height/2]]} />
                    <Line lineWidth={lineWidth} color={color} points={[[width,0,height/2],[width,extend,height/2]]} />
                </>
            }
            
        </group>
    }

    return (
        <group {...other}>
            <group position={[width/-2,0, height/-2]}>
                {renderSquare()}
                {renderY()}
            </group>
        </group>
    )
}

export default SquareCross;