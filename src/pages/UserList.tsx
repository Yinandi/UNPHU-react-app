import React, {useContext} from 'react';
import '../styles/userlist.scss';
import {TableDataContext} from '../context/TableDataContext';


const UserList: React.FC = () => {

  const {tableData} = useContext(TableDataContext);

  return ( 
    <div className='userlist-container'>
      <h2>Lista de Usuarios</h2>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre completo</th>
              <th>Correo electrónico</th>
              <th>Género</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.fullName}</td>
                <td>{row.email}</td>
                <td>{row.gender}</td>
              </tr>
            ))}
            </tbody>
        </table> 
      </div>
      <div className='pag-buttons'>
        <button>Página anterior</button>
        <button>Página siguiente</button>
      </div>

    </div>
  );
}
 
export default UserList;

/*
            <tr>
              <td>123-4567890-1</td>
              <td>Prueba Prueba</td>
              <td>ahaha@hjd.com</td>
              <td>Mujer</td>
            </tr>
            <tr>
              <td>123-4567890-1</td>
              <td>Prueba  ddddddrrrj</td>
              <td>dfioiytrertyuiopoiu@hauod</td>
              <td>Hombre</td>
            </tr>
            
*/