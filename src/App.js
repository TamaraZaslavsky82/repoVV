import { IntlProvider } from 'react-intl';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './componets/Home/Home.jsx'
import NavBar from './componets/Navbar/NavBar.jsx'
import { createBrowserHistory } from 'history';
import LearnMore from '../src/componets/Learmore/Learmore.jsx';
import Registro from '../src/componets/Registro/Resgistro.jsx';
import Vistidingreso from './componets/Vistidingreso/Vistidingreso.jsx';
import Footer from './componets/Footer/Footer.jsx';
import Assicurazione from './componets/Assicurazione/Assicurazione.jsx'
import Dichiarazione from './componets/Dichiarazione/Dichiarazione.jsx';
import VistoTuristico from './componets/VistiTuristico/VistoTuristico.jsx';
import Voil1 from '../src/componets/Voil1/Voil1.jsx'
import Iscriva from './componets/Iscriva/Iscriva.jsx';
import Hotel from './componets/Hotel/Hotel.jsx';
import Traduzione from './componets/Traduzione/Traduzione.jsx';
import style from './App.module.css'

const history = createBrowserHistory();

function App() {
  const location = useLocation();
  const isRegistroRoute = location.pathname === '/registro';

  return (
    <IntlProvider locale="en" className={style.app}>
      {!isRegistroRoute && <NavBar />}
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learmore" element={<LearnMore />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/Ottomento" element={<Vistidingreso/>} />
          <Route path="/assicurazione" element={<Assicurazione />} />	
          <Route path="/dichiarazione" element={<Dichiarazione/>} />
          <Route path='/vistoturistico' element={<VistoTuristico/>} />
          <Route path='/voil' element={<Voil1/>} />
          <Route path='/iscriva' element={<Iscriva/>} />
          <Route path='/hotel' element={<Hotel/>}/>
          <Route path='/traduzione' element={<Traduzione/>} />
        </Routes>
      </div>
      <Footer/>
    </IntlProvider>
  );
}

export default App;
