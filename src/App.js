
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Movie from './components/movie';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;


// import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Layout from './components/Header';
// import Popular from './components/Home';
// import TopRated from './components/TopRated';
// import UpComing from './components/UpComing';



// function App() {

  


//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path='/'element={<Layout/>}> 
//           <Route path='/Popular' element={<Popular/>}/>
//           <Route path='/TopRated' element={<TopRated/>}/>
//           <Route path='/UpComing' element={<UpComing/>}/>
          
//           </Route>
          
//         </Routes>
//       </Router>
      
         
//     </div>
//   );
// }

// export default App;
