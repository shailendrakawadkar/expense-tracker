import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import App from './App.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)
