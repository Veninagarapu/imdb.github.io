import React from "react"

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt='movies' /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header




// import React from 'react'
// import{useState} from 'react'
// import { Outlet } from 'react-router-dom';

// export default function Layout() {

//     const[search, setSearch]= useState('')

//   return (
//     <>
//        <div className='header'>
//         <div className='logo'>
//             <p>Movies</p>

//         </div>
//         <nav>
//             <ul>
//                 <li><a href='/Popular'>Popular</a></li>
//                 <li><a href='/TopRated'>TopRated</a></li>
//                 <li><a href='/UpComing'>UpComing</a></li>
                
//             </ul>
//         </nav>
//         <div className='search'>
//             <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
//             <button>Search</button>
//         </div>

//     </div>
//     <div className='outlet'>
//         <Outlet/>
//     </div>
    
//     </>
 
//   )
// }
