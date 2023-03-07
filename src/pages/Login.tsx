import { AiOutlineUser } from 'react-icons/Ai';
import { RiLockPasswordLine } from 'react-icons/Ri';
import { FiLogIn } from 'react-icons/Fi';
import '../styles/login.scss'

const Login: React.FC = () => {
    return ( 
      <main>
        <div className='left'></div>
        <div className='right'>
            
          <form className='form'>
              <h2>Iniciar Sesión</h2>
              <div className='form-group user'>
                <label htmlFor='name' className='form-label'> Usuario </label>
                <div className='icon-wrapper'>
                  <AiOutlineUser className='icon'/>
                  <input type='text' id='name' placeholder='JaneDoe' className='form-input' ></input>
                </div>
              </div>

              <div className='form-group password'>
                <label htmlFor='password' className='form-label'>Contraseña</label>
                <div className='icon-wrapper'>
                <RiLockPasswordLine className='icon' />
                <input type='password' name='password' id='password' placeholder='*********' className='form-input'/>
                </div>
              </div>

              <a href='#' className='password-link'>¿Has olvidado la contraseña?</a>

              <div className='submit-wrapper'>
                <input type='submit' value='INGRESAR' className='submit-button'/>
                <FiLogIn className='submit-icon'/>
              </div>

          </form>
        </div>
      </main>
    );
}
export default Login;