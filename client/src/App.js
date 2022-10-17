import { Routing } from './navigation/routing/routing';
import { NavBar } from './components/nav-bar/nav-bar';
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
