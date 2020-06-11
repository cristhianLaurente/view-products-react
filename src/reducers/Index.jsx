// import servicio para consumir la api from 'ruta'
import { combineReducers } from 'redux-immutable';
// import { isLogged } from './LoggedReducer';
// se importa los demas reducers aqui
import  LoggedReducer  from './admin/LoggedReducer';
import  LoggedClientReducer  from './invited/LoggedClientReducer';
import CheckInClientReducer from './invited/CheckInClientReducer';
import PresentationsReducer from './invited/PresentationsReducer';
import ProductsReducer from './invited/ProductsReducer';
import ClientReducer from './invited/ClientReducer';
import CategoriesReducer from './invited/CategoriesReducer';
// import { combineReducers } from'redux'
const rooReducer = combineReducers({
    LoggedReducer,
    LoggedClientReducer,
    CheckInClientReducer,
    ProductsReducer,
    PresentationsReducer,
    ClientReducer,
    CategoriesReducer
})

export default rooReducer;