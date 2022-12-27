// import './App.css';
import Header from './component/featurs/header/Header.component';
import Footer from './component/featurs/footer/Footer.component';
import Routing from './Router.component';
import { useSelector } from 'react-redux';
import React from 'react';


export default function App() {
  const isLoggedIn =useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn);
  return (
   <React.Fragment>
  
      <Header/>
      <main style={{minHeight:"93vh"}} >
      <Routing/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

