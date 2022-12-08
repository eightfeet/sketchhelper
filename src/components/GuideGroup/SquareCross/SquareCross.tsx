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
    diagonalColor?: string,
    crossColor?: string,
    color?: string,
    lineWidth?: number,
    axis?: boolean,
}

const SquareCross:React.FC<Props> = ({
    width,
    height,
    extend=0,
    step=1,
    cross=['diagonal', 'cross'],
    crossExtend = true,
    diagonalExtend = true,
    diagonalColor,
    crossColor,
    color="#555",
    lineWidth=2,
    axis=true,
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
            {axis && <Line lineWidth={lineWidth} color={color} points={[[width/2,0,height/2],[width/2,extend,height/2]]} />}

            {
                crossExtend &&
                <>
                    <Line lineWidth={lineWidth} color={crossColor || color} points={[[0,0,0],[0,extend,0]]} />
                    <Line lineWidth={lineWidth} color={crossColor || color} points={[[width,0,0],[width,extend,0]]} />
                    <Line lineWidth={lineWidth} color={crossColor || color} points={[[width,0,height],[width,extend,height]]} />
                    <Line lineWidth={lineWidth} color={crossColor || color} points={[[0,0,height],[0,extend,height]]} />
                </>
            }
            {
                diagonalExtend &&
                <>
                    <Line lineWidth={lineWidth} color={diagonalColor || color} points={[[width/2,0,height],[width/2,extend,height]]} />
                    <Line lineWidth={lineWidth} color={diagonalColor || color} points={[[width/2,0,0],[width/2,extend,0]]} />
                    <Line lineWidth={lineWidth} color={diagonalColor || color} points={[[0,0,height/2],[0,extend,height/2]]} />
                    <Line lineWidth={lineWidth} color={diagonalColor || color} points={[[width,0,height/2],[width,extend,height/2]]} />
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