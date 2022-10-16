import { Routing } from './navigation/routing/routing';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
