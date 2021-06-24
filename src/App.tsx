import './App.css';
import { Rout } from './Components/Rout';
import store from './Redux/store';
import './Functions/i18n'
import { Suspense } from 'react';

import { Provider } from 'react-redux'
function App() {
  return (
    <Suspense fallback={null}>

      <Provider store={store}>
        <div className="App">
          <Rout />
        </div>
      </Provider>
    </Suspense>

  );
}

export default App;
