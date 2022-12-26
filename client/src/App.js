// import './App.css';
import Header from './component/featurs/header/Header.component';
import Footer from './component/featurs/footer/Footer.component';
import Routing from './Router.component';
import UsersProvaider from './contexts/UsersProvaider'

export default function App() {
  return (
    <div className="App">
      
      <UsersProvaider>
      <Header/>
      <main style={{minHeight:"93vh"}} >
      <Routing/>
      </main>
      <Footer/>
      </UsersProvaider>

    </div>
  );
}

