import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

 function SelectDemo(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
        <Select
            
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
        >

            {
                props.categories.map(res => {
                   return (
                       <MenuItem  value={res.id_cat} key={res.id_cat} >
                           <Link  onClick={() => {
                                props.getProductByCategory(res.id_cat)
                           }}  className='Categories__select-link' to={`/products/categories/${res.cat_nom}`} >
                                {res.cat_nom}
                            </Link>
                        </MenuItem>
                   ) 
                })
            }
            <MenuItem value="" >
                <Link className='Categories__select-link' to='/products' >Todos los Productos</Link>
            </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectDemo;