import React, { useState } from 'react'
// SUBIR IMAGEN DEL PERFIL DEL CLIENTE
const TextFile = (props) => {

    return (
        <div>
              <label>Seleccionar Archivo</label>
              <input 
                type="file"  
                onChange={(e) => {
                  // console.log(e.target.files[0]);
                  props.cambiarImage(e)
                }}  
                />
            {/* <button  onClick={subirImagen}  >Subir a Firebase</button> */}
        </div>
    )
}

export default TextFile
