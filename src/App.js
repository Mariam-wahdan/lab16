// import logo from './logo.svg';
// import './App.css';
// import Mariam from './labbb16';
// import Tog from './lab16q2';
// import No from './lab16q3';
// import Home from './Home';
// function App() {
//   return (<> 
//   {/* <Mariam />
//   <Tog/> 
//   <No/> */}
//   {/* <Home/> */}
  
//   </>
 
    
//   );
// }

// export default App;






//lab18
// import logo from './logo.svg';
// import './App.css';


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductCard from './card';
// import ProductDetails from './details';
// import HelpCenter from './helpcenter';
// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<ProductCard id={1} name="Sample Product" image="https://via.placeholder.com/150" price={99.99} />} />
//                     <Route path="/product/:id" element={<ProductDetails />} />
//                     <Route path="/help-center" element={<HelpCenter />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
//   }
// export default App;


// lab 19

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './homev1';
import Products from './products';
import ProductDetails from './product details'
import NotFound from './notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
