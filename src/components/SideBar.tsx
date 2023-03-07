import '../styles/sidebar.scss'
import {useState} from 'react';
import { 
          AiOutlineHome, AiOutlineUserAdd, 
          AiOutlineUnorderedList,AiOutlineArrowLeft, 
          AiOutlineArrowRight 
      } from 'react-icons/Ai';
import NavButton from './NavButton';

const SideBar: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>){
      setIsOpen(!isOpen)
    }
  return ( 
    <aside>
      <nav>
        <button className='toggle-menu' onClick={handleClick}>
            {isOpen ?<AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
        </button>       
        <NavButton isOpen={isOpen} link='/dashboard' icon={<AiOutlineHome/>} text=' Inicio'/>
        <NavButton isOpen={isOpen} link='/dashboard/adduser' icon={<AiOutlineUserAdd/>} text=' Agregar usuario'/>
        <NavButton isOpen={isOpen} link='/dashboard/userlist' icon={<AiOutlineUnorderedList/>} text=' Lista de usuarios'/>
        
      </nav>
    </aside>
  );
}
export default SideBar;

