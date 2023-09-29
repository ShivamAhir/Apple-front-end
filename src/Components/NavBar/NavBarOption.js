import './NavBarOption.css'
function NavBarOption(props)
{
    return (
        <button id="NavButton">{props.type}{props.children}</button>
    );
}
export default NavBarOption;