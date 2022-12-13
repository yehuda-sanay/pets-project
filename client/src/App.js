import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './component/featurs/header/Header.component';
import Footer from './component/featurs/footer/Footer.component';
import Routing from './Router.component';
import UsersProvaider from './contexts/UsersProvaider'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UsersProvaider>
      <Header/>
      <Routing/>
      <Footer/>
      </UsersProvaider>
      </BrowserRouter>

    </div>
  );
}

export default App;
