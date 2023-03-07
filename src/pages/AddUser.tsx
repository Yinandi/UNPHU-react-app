import React, {useState, useContext} from 'react';
import '../styles/adduser.scss'
import {TableDataContext} from '../context/TableDataContext';

interface FormData{
  id: string;
  name: string;
  lastname: string;
  lastname2: string;
  email: string;
  gender: string;
}

const AddUser: React.FC = () => {

  const {tableData,setTableData} = useContext(TableDataContext);

  const [formData, setFormData] = useState<FormData>({
    id: '',
    name: '',
    lastname: '',
    lastname2: '',
    email: '',
    gender: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormData({
      id: '',
      name: '',
      lastname: '',
      lastname2: '',
      email: '',
      gender: '',
    });

    const newTableData= {
      id: formData.id,
      fullName: `${formData.name} ${formData.lastname} ${formData.lastname2}`,
      email: formData.email,
      gender: formData.gender,
    };

    setTableData([...tableData, newTableData]);
    
    event.currentTarget.reset();
  };
  
  return (
    <div className='form-container'>
      <h2 className='form-title'>Agregar Usuario</h2>

      <form action='' className='form' onSubmit={handleSubmit}>

        <div className='div-field'> 
          <label htmlFor='name'>Nombre(s)</label>
          <input type='text' name='name' id='name' placeholder='Jane' 
            required value={formData.name} onChange={handleInputChange}
          />
        </div>
        
        <div className='div-field'>
          <label htmlFor='lastName'>Primer apellido</label>
          <input type='text' name='lastName' id='lastName' placeholder='Doe' 
            required /*value={formData.lastname}*/ onChange={handleInputChange}
          />
        </div>
        
        <div className='div-field'>
          <label htmlFor='lastName2'>Segundo apellido</label>
          <input type='text' name='lastName2' id='lastName2' placeholder='Sánchez'  
            required /*value={formData.lastname2}*/ onChange={handleInputChange}
          />
        </div>

        <div className='div-field'>
          <label htmlFor='id'>Cédula</label>
          <input type='number' name='id' id='id' placeholder='123-4567890-1'
              required value={formData.id} onChange={handleInputChange} />
        </div>

        <div className='div-field'>
        <label htmlFor='gender'>Género</label>
        <select name='gender' id='gender' required /*value={formData.gender} {onChange={handleInputChange}}*/>
          <option value=''>Selecciona</option>
          <option value='female'>Mujer</option>
          <option value='male'>Hombre</option>
          <option value='other'>Otro</option>
        </select>
        </div>
        
        <div className='div-field'>
          <label htmlFor='email'>Correo electrónico</label>
          <input type='email' name='email' id='email' 
            required value={formData.email} onChange={handleInputChange}
          />
        </div>

        <div className='div-field'>
          <label htmlFor='phone'>Teléfono</label>
          <input type='tel' name='phone' id='phone' required/>
        </div>

        <div className='div-field'>
          <label htmlFor='address'>Dirección</label>
          <input type='text' name='address' id='address' placeholder='' required/>
        </div>

        <div className='div-field'>
          <label htmlFor='address2'>Dirección 2</label>
          <input type='text' name='address2' id='address2' />
        </div>

        <div className='div-field'>
          <label htmlFor='maritalStatus'>Estado civil</label>
          <select name='maritalStatus' id='maritalStatus'>
            <option value=''>Selecciona</option>
            <option value='soltero'>Soltero</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
            <option value='viudo'>Viudo</option>
          </select>
        </div>

        <div className='div-field'>
          <label htmlFor='hasChildren'>¿Tienes hijos?</label>
          <input type='radio' name='hasChildren' id='yes' required/>
          <label htmlFor='yes'>Sí</label>
          <input type='radio' name='hasChildren' id='no' />
          <label htmlFor='no'>No</label>
        </div>

        <div className='div-field'>
          <label htmlFor='birthdate'>Fecha de nacimiento</label>
          <input type='date' name='birthdate' id='birthdate' min='' max='' required/>
        </div>

        <div className='div-field'>
          <label htmlFor='age'>Edad</label>
          <input type='number' name='age' id='age'  style={{width:'40px'}} disabled/>
        </div>

        <div className='div-field submit'>
          <input type='submit' value='Guardar' className='submit-input'/>
        </div>
      </form>
    </div>
  );
}
export default AddUser;