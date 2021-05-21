import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { fetchRecipes } from './redux/actionCreators';
import { store } from './redux/configurestore';

function App() {
  store.dispatch(fetchRecipes);
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
