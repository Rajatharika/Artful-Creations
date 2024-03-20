import React from 'react';
import Demo from "./Demo";
import navbar from "./navbar";
import Paint from "./paintt";
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Craft from './Craft';
import Mehndi from './Mehndi';
import Pencil from './pencil';
import Oil from './oil';
import Modern from './modern';
import Water from './water';
import Acrylic from './acrylic';
import Nature from './nature';
import Bridal from './bridal';
import Stylish from './stylish';
import Back from './back';
import Half from './half';
import Arabic from './arabic';
import Full from './full';
import Paper from './paper';
import Frame from './frame';
import Pen from './pen';
import Sewing from './sewing';
import Pot from './pot';
import Cali from './cali';
import Product from './product';
import SignIn from './signIn';
import Signup from './signup';
const App = () => {
     return (
          <>
          <BrowserRouter>
          <Routes>
               <Route index element={<Home/>} />
               <Route path='/' element={<Home/>}/>
               <Route path='/paintt' element={<Paint/>}/>
               <Route path='/Craft' element={<Craft/>}/>
               <Route path='/Mehndi' element={<Mehndi/>}/>
               <Route path='/pencil' element={<Pencil/>}/>
               <Route path='/oil' element={<Oil/>}/>
               <Route path='/modern' element={<Modern/>}/>
               <Route path='/water' element={<Water/>}/>
               <Route path='/acrylic' element={<Acrylic/>}/>
               <Route path='/nature' element={<Nature/>}/>
               <Route path='/bridal' element={<Bridal/>}/>
               <Route path='/stylish' element={<Stylish/>}/>
               <Route path='/back' element={<Back/>}/>
               <Route path='/half' element={<Half/>}/>
               <Route path='/arabic' element={<Arabic/>}/>
               <Route path='/full' element={<Full/>}/>
               <Route path='/paper' element={<Paper/>}/>
               <Route path='/frame' element={<Frame/>}/>
               <Route path='/pen' element={<Pen/>}/>
               <Route path='/sewing' element={<Sewing/>}/>
               <Route path='/pot' element={<Pot/>}/>
               <Route path='/cali' element={<Cali/>}/>
               <Route path='/product' element={<Product/>}/>
               <Route path='/signIn' element={<SignIn/>}/>
               <Route path='/signup' element={<Signup/>}/>
          </Routes>
          </BrowserRouter>
          </>

     );
}
export default App;