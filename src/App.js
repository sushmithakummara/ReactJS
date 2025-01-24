
import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Landing from './stores/pages/Landing';
import KitchenPage from './stores/pages/KitchenPage';
import WomenPage from './stores/pages/WomenPage';
import ComputerPage from './stores/pages/ComputerPage';
import PhonePage from './stores/pages/PhonePage';
import MenPage from './stores/pages/MenPage';
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import KitchenSingle from './singles/KitchenSingle';
import MenSingle from './singles/MenSingle';
import WomenSingle from './singles/WomenSingle';
import UserCart from './stores/UserCart';
const App = () => {
  return (
    <div>
      <Routes>
           <Route path='/' element= {<Landing/>}/>
           <Route path='/kitchen' element={<KitchenPage/>} />
           <Route path='/woman' element={<WomenPage/>}/>
           <Route path='/computer' element={<ComputerPage/>}/>
           <Route path='/mobile' element={<PhonePage/>}/>
           <Route path='/men' element={<MenPage/>}/>

           <Route path='/mobile/:id' element={<MobileSingle/>} />
           <Route path='/computer/:id' element={<ComputerSingle/>}/>
           <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
           <Route path='/men/:id/' element={<MenSingle/>} />
           <Route path='/woman/:id/' element={<WomenSingle/>} />
            
           <Route path='cart' element={<UserCart/>}/>
      </Routes>
     

    </div>
  )
}

export default App
