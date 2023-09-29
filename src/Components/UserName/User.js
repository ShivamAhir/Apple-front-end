import LogOut from '../LogSign/LogOut';
import './User.css';
function User(props)
{
    var name=props.userName;
    name=name.substring(0, name.indexOf(' '));
    
    return (
        <div class="dropdown">
            <button class="dropbtn">{name}</button>
            <div class="dropdown-content">
                <a><LogOut></LogOut></a>
            </div>
       </div>
    )
}
export default User;