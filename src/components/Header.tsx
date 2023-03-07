import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.scss'
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/Fi';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/Go';

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }
    
    return ( 
        <header>
            <div className='dropdown'>
                <button className='dropdown-button' onClick={handleClick}>
                  <FaUserCircle className='user-icon'/>
                  <p className='username'>UserName</p>
                  {isOpen ? <GoTriangleUp className='up'/> :<GoTriangleDown className='down'/> }
                </button>
                {isOpen ? (
                    <Link to='/' className='logout-button'> Cerrar Sesión 
                        <FiLogOut className='logout-icon' />
                    </Link>
                  )
                  : null
                }
            </div>
        </header> 
    );
}
export default Header;