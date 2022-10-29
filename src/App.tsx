import { Canvas } from '@react-three/fiber';
import {
    softShadows,
} from '@react-three/drei';
import './App.css';
import City from './components/City';
import StilLife from './components/StilLife';

softShadows();

export default function App() {
    // const [autoRotate, setAutoRotate] = useState(false);

    return (
        <div className='App'>
            <StilLife />
        </div>
    );
}
