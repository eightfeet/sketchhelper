interface Props {
    position?: number[];
    opacity: number;
    showEdige?: boolean;
}

const Box: React.FC<Props> = ({position, opacity, showEdige= false}) => {
    return (
        <mesh castShadow receiveShadow position={position as any}>
            {/* <boxGeometry args={[1, 1, 1]} /> */}
            <sphereGeometry args={[0.5]} />
            <meshStandardMaterial transparent opacity={opacity} />
            {showEdige ? null : null}
        </mesh>
    );
};

export default Box;
