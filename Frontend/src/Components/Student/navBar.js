import React,{useEffect,useState} from "react";
import { Link,useHistory } from "react-router-dom";
import "../../css/Student/navBar.css"
 
import Chat from "../../Images/Student/chat.png"
import axios from "axios";

function NavBar() {
    const history = useHistory();
    const id=sessionStorage.getItem('mySessionData')
    const [details,setDetails]=useState("")

    const onConfirm = () => {
        sessionStorage.clear()
        history.push("/");
    }
    const onCancel = () => {
      // logout canceled
    }
    const logOut = () => {
        window.confirm('Are you sure you wish to logout?') ? onConfirm("confirm") : onCancel("cancel")
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/details/group/${id}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(() => {
                alert('Login faild!!!');
            });
    }, [details])

    
    return (
        <div>
            <div className="navigation clearfix">
                <div className="navLinks">
                    <ul>
                        <Link to="/home"><li>HOME</li></Link>
                        <li>NOTICES</li>
                        <li>SUBMISSIONS</li>
                        <li>DOWNLOADS</li>
                        <Link to="/myRequest"><li>MY REQUEST</li></Link> 
                        <Link to="/studentProfile"><li>{id}</li> </Link>
                         
                    </ul>
                </div>
                <div className="AvatarLogin">
                    <Link to="/chat"> <img src={Chat} className="notification" width="30px" /> </Link>
                    <div className="dropdown">
                        <img src={details.Img} className=" avatar dropdown" width="30px" />
                        <div class="dropdown-content">
                            <Link to="/studentProfile"> Edit Profile<br /> </Link>
                            <button className="logout" onClick={logOut}>LogOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;