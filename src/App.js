import './App.css';
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/reftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {createBrowserRouter,Navigate,Outlet,RouterProvider} from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './style.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {

  //const currentUser = true;   {/* we are not logged in yet*/}
  const currentUser = useContext(AuthContext);  //paste to login.jsx

  const {darkMode} = useContext(DarkModeContext);
  //console.log(darkMode)

  const Layout = ()=>{
    /*React context API used to get dark mod and save it */
    return(
    <div className={`theme-${darkMode ? "dark" :"light"}`}> {/*this should effect all navbar,left,right all components */}
        <NavBar/> 
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}> {/*length of middle part*/}
            <Outlet/>
            </div>
          <RightBar/>
        </div>
      </div>
    );
  }

  const ProtectedRoute =({children}) => {
    if(!currentUser){
      return<Navigate to="/login" />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path:"/", element:<ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:"/" ,element:<Home/>
        },
        {
          path:"/profile/:id" ,element:<Profile/>
        },
      ]
    },
    
    {
      path: "/login", element: <Login/>
    },
    {
      path: "/register", element: <Register/>
    },
  ]);
  

  return (
    <div>
      {/*<Login/> <Register/>*/}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
