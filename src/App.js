import './App.css';
import Login from './components/login';
import Data from './components/data';
import { LoginProvider } from './loginContext';
import { DataProvider } from './dataContext';
import { combineComponents } from './combineComponents';

const Provider = [LoginProvider, DataProvider];

const AppContextProvider = combineComponents(...Provider)

function App() {
  return (
    <div className="App">
      { /*<LoginProvider>
        <DataProvider>
          <Login />
          <Data />
        </DataProvider>
      </LoginProvider> */}
      <AppContextProvider>
          <Login />
          <Data />
      </AppContextProvider>
    </div>
  );
}

export default App;