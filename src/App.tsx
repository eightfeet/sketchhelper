
import { useSnapshot } from 'valtio';
import './App.css';
import ShadowStudy from './components/ShadowStudy';
import StilLife from './components/StilLife';
import { store } from './components/StilLife/proxyStilLife';


export default function App() {
    const data = useSnapshot(store);
    return (
        <div className='App'>
            {data.light === 'directional' && <StilLife />}
            {data.light === 'point' && <ShadowStudy />}
        </div>
    );
}
