import '../styles/navbutton.scss'
import {Link} from 'react-router-dom';

interface Props{
    isOpen: boolean;
    link: string
    icon: React.ReactElement;
    text: string;
}
const NavButton: React.FC<Props> = ({isOpen, link, icon,  text}) => {
  return ( 
    <div>
      {isOpen ? 
        <button className='menu-button'>
            <Link to={link} className='link'>
              {icon}
              {text}
            </Link>
        </button>
      : 
        <button  className='menu-button'>
            <Link to={link} className='link'>
              {icon}
            </Link>
        </button>}
    </div>
  );  
}
export default NavButton;