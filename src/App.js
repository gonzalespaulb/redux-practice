import { Provider } from 'react-redux';
import store from './store-old';
import MainContainer from './MainContainer';



function App() {
  
  return (
    <Provider store={store}>
      <MainContainer></MainContainer>
    </Provider>
  );
}

export default App;
