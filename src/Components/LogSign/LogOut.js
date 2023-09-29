import './login.css';
function LogOut()
{
  function LogOut(event)
  {
    const response =  fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  }
    return (
        <button className="Button" onClick={LogOut}>LogOut</button>
    )
}
export default LogOut;