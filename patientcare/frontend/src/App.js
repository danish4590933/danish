
import {Routes, Route} from 'react-router-dom';
import Cardss from './Components/Cardss';
import Layout from './Components/Layout';
import Layoutforfooter from './Components/Layoutforfooter';
import Layoutfornavbar from './Components/Layoutfornavbar';
import Oxygendetail from './Components/Oxygendetail';
import Loginform from './Components/Loginform';
import Newcomponent from './Components/Newcomponent';
import "bootstrap/dist/css/bootstrap.css";

import Viewinfo from './Viewinfo';

function App() {
  return (
    <div>
      
      <Layoutfornavbar/>
      <Routes>
      <Route path="home" element={<Layout/>}/>
      <Route path="products" element={<Cardss/>}/>
      <Route path="login" element={<Loginform/>}/>
      <Route path="bed" element={<Newcomponent/>}/>
     
      <Route path="viewinfo" element={<Viewinfo/>}/>
      
      </Routes>
      <Layoutforfooter/>
   
      
    </div>
  );
}

export default App;


