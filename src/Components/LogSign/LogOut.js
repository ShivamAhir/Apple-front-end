import { useNavigate } from 'react-router-dom';
import './login.css';
function LogOut()
{
  const navigate=useNavigate();
  function LogOut(event)
  {
    const response =  fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      navigate('login');
  }
    return (
        <button className="Button" onClick={LogOut}>LogOut</button>
    )
}
export default LogOut;