import React from 'react'
import { Link , NavLink , useNavigate} from 'react-router-dom'

function NavBar() {
    const isUserLogin = true
    const navigation = useNavigate();
    function User() {
        if(isUserLogin){
           console.table(navigation);
            navigation("/about");
        }
        
    }
    return (
        <div>
            <div>
                <nav className='grid-cols-4 bg-red-500 rounded-2xl  grid items-center justify-items-center'>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about" className={({isActive})=>isActive ? "bg-black" :"" }>about</NavLink>
                    <NavLink to ="/Nakul">Nakul</NavLink>
                    <button onClick={()=>User()}>User Login</button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
