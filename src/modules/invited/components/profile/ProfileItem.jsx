import React from 'react';
import TextFile from '../../../../components/inputs/TextFile';



const ProfileItem = (props) => {


    let profileClasses = ['inputProfile'];
    const {user} = props
    return (
        <div className='ProfileItem' >
          <form  onSubmit={props.handleSubmit} >
          <div className='ProfileItem__header' >
              <h3>Bienvenido, {user.first_name} </h3>
              {
                props.handleVerifyUpdate ? (
                  <button type='submit' >Guardar Cambios</button>
                ) : null
              }
            </div>
            <div className="ProfileItem__perfil">
              <div className="ProfileItem__perfil-title">
                Perfil
              </div>
              <div className="ProfileItem__perfil-datos">
                <table>
                  <tbody>
                    <tr>
                      <td className='columna1'>Fotografía</td>
                      <td className='columna2'>Puedes personalizar tu cuenta con una foto</td>
                      <td>
                        {/* <ModalContent */}
                        <div onClick={() => {
                          props.openModal()
                        }} >
                          <a>
                          abrir modal
                          </a>
                        </div>
                        {/* <TextFile 
                          cambiarImage={props.cambiarImage}
                          handleUpdate={props.handleUpdate}
                          name='foto'                          
                          id='foto'                          
                        /> */}
                        {/* <input type="file"/> */}
                      </td>
                    </tr>
                    <tr>
                      <td className='columna1'>Nombre</td>
                      <td className='columna2'>
                        <input  
                          id='first_name' 
                          name='first_name' 
                          className={profileClasses} 
                          disabled={props.disabled.first_name} 
                          onChange={props.handleUpdate} 
                          type="text" 
                          value={`${user.first_name}`}  
                          />
                      </td>
                      <td className='columna3'>
                        <label onClick={() => {
                          props.toggleInput('first_name')
                        }} htmlFor="first_name">
                          {
                            props.disabled.first_name ? (
                              <span>Editar</span>
                            ) : (
                              <span>Aceptar</span>
                            )
                          }
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className='columna1'>Fecha de nacimiento</td>
                      <td className='columna2'>
                        <input 
                          id='fech_nacimiento' 
                          name='fech_nacimiento' 
                          className={profileClasses} 
                          disabled={props.disabled.fech_nacimiento}
                          onChange={props.handleUpdate} 
                          type="date" 
                          value={`${user.fech_nacimiento}`} 
                          />
                      </td>
                      <td className='columna3'>
                        <label onClick={() => {
                          props.toggleInput('fech_nacimiento')
                        }} htmlFor='fech_nacimiento' >
                          {
                            props.disabled.fech_nacimiento ? (
                              <span>Editar</span>
                            ) : (
                              <span>Guardar</span>
                            )
                          }
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className='columna1'>Sexo</td>
                      <td className='columna2'>
                        <select                               
                            id='sexo' 
                            name='sexo' 
                            className={profileClasses} 
                            disabled={props.disabled.sexo}
                            onChange={props.handleUpdate} 
                            type="text" 
                            value={`${user.sexo}`} >
                          <option value={true}>Masculino</option>
                          <option value={false}>Femenino</option>
                          <option value={'null'}>Otro</option>
                        </select>                                                                                                                          
                      </td>
                      <td className='columna3'>
                        <label onClick={() => {
                          props.toggleInput('sexo')
                        }} htmlFor='sexo' >
                          {
                            props.disabled.sexo ? (
                              <span>Editar</span>
                            ) : (
                              <span>Guardar</span>
                            )
                          }
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="ProfileItem__information">
              <div className="ProfileItem__perfil-title">
                Información de Contacto
              </div>
                <div className="ProfileItem__perfil-datos">
                  <table>
                  <tbody>
                    <tr>
                      <td className='columna1'>Celular</td>
                      <td className='columna2'>
                        {
                          user.celular ? (
                            <input 
                              id='celular' 
                              name='celular'  
                              className={profileClasses}
                              disabled={props.disabled.celular} 
                              onChange={props.handleUpdate} 
                              type="text" 
                              value={`${user.celular}`} />
                          ) : (
                            <input 
                              id='celular' 
                              name='celular' 
                              className={profileClasses}
                              disabled={props.disabled.celular} 
                              onChange={props.handleUpdate} 
                              type='text' 
                              value='no definido' />
                          )
                        }
                      </td>
                      <td className='columna3'>
                        <label onClick={() => {
                          props.toggleInput('celular')
                        }} htmlFor='celular' >
                          {
                            props.disabled.celular ? (
                              <span>Editar</span>
                            ) : (
                              <span>Guardar</span>
                            )
                          }                         
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className='columna1'>Correo Electrónico</td>
                      <td className='columna2'>
                        <input 
                          id='email' 
                          name='email' 
                          className={profileClasses} 
                          disabled={props.disabled.email}
                          onChange={props.handleUpdate} 
                          type="email" 
                          value={`${user.email}`} 
                          />
                      </td>
                      <td className='columna3'>
                        <label onClick={() => {
                          props.toggleInput('email')
                        }} htmlFor='email' >
                          {
                            props.disabled.email ? (
                              <span>Editar</span>
                            ) : (
                              <span>Guardar</span>
                            )
                          }                           
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className='columna1'>Dirección</td>
                      <td className='columna2'>
                        {
                          user.direccion ? (
                            <input 
                              id='direccion' 
                              name='direccion' 
                              className={profileClasses}
                              disabled={props.disabled.direccion} 
                              onChange={props.handleUpdate} 
                              type="text" 
                              value={`${user.direccion}`} />
                            ) : (
                            <input 
                              id='direccion' 
                              name='direccion' 
                              className={profileClasses}
                              disabled={props.disabled.direccion} 
                              onChange={props.handleUpdate} 
                              type='text' 
                              value='no definido' />
                          )
                        }
                      </td>
                      <td className='columna3'>
                        <label onClick={() => {
                          props.toggleInput('direccion')
                        }} htmlFor='direccion' >
                          {
                            props.disabled.direccion ? (
                              <span>Editar</span>
                            ) : (
                              <span>Guardar</span>
                            )
                          } 
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div className="ProfileItem__perfil-negocios">
                  Negocio
                </div>
                <div className="ProfileItem__perfil-datos">
                  <table>
                  <tbody>
                    <tr>
                      <td className='columna1'>Restaurante</td>
                      <td className='columna2'>Las parrillitas de arequipa</td>
                      <td className='columna3'>
                        <span>Editar</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='columna1'>Teléfono</td>
                      <td className='columna2'>
                        {
                          user.numero_telefono ? (
                            <input 
                              id='numero_telefono' 
                              name='numero_telefono' 
                              className={profileClasses} 
                              disabled={props.disabled.numero_telefono}
                              onChange={props.handleUpdate} 
                              type="text" 
                              value={`${user.numero_telefono}`} 
                              />
                            ) : (
                            <input 
                              id='numero_telefono' 
                              name='numero_telefono' 
                              className={profileClasses} 
                              disabled={props.disabled.numero_telefono}
                              onChange={props.handleUpdate} 
                              type='text' 
                              value='no definido' 
                              />
                          )
                        }
                      </td>
                      <td className='columna3'>
                        <label onClick={() => {
                          props.toggleInput('numero_telefono')
                        }} htmlFor='numero_telefono' >
                          {
                            props.disabled.numero_telefono ? (
                              <span>Editar</span>
                            ) : (
                              <span>Guardar</span>
                            )
                          }                           
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className='columna1'>Dirección</td>
                      <td className='columna2'>Av Jesus 5000</td>
                      <td className='columna3'>
                        <span>Editar</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>            
          </form>
        </div>
    )
}

export default ProfileItem
