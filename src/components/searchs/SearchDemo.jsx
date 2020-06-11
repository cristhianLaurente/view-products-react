import React from 'react';
import TextField from '@material-ui/core/TextField';



const BasicTextFields = () => {


  return (
      <section className='Search__container' >
          <TextField className='Search__item' id="standard-basic" label="Buscar" type='text' />
      </section>

  );
}
export default  BasicTextFields;