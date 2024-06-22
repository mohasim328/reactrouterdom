import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client'

// we can import manualy or also with the help of index.js file
// import Home from './Pages/Home/Home'; we can import manualy or with the index.js file
// import About from './Pages/About/About';
// import Skills from './Pages/Skills/Skills';
// import Project from './Pages/Project/Project';
// import Contact from './Pages/Contact/Contact'; 

import {Home, About , Project, Skill , Contact, Notfound , User}  from  './Pages';
import Github,{ githubInfo } from './Pages/Github/Github';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';




// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "skill",
//         element: <Skill />
//       },
//       {
//         path: "project",
//         element: <Project />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//       ,
//       {
//         path: "*",
//         element: <Notfound />
//       },
//       {
//         path: "user/:",
//         element: <User />
//       }
//     ]
//   }

// ])

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='skill' element={<Skill/>}/>
       <Route path='project' element={<Project/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route 
       
       loader={githubInfo}
       path='github' element={<Github/>}/>
       <Route path='user/:userid' element={<User/>}/>
       <Route path='*' element={<Notfound/>}/>
    
    </Route>
  ) 

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
