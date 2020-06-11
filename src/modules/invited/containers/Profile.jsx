import React, { Component } from 'react';
import ProfileLayout from '../components/ProfileLayout';
import ProfileItem from '../components/profile/ProfileItem';
import { Switch, Route } from 'react-router-dom';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../../../actions/invited/ClientAction';
import { AuthService } from '../../../services/Auth';
import swal from '@sweetalert/with-react';
import * as firebase from 'firebase';
import ModalContent from '../../../components/modals/ModalContent';
import ModalContainer from '../../../components/modals/ModalContainer';
import FileImage from '../components/profile/FileImage';
let firebaseConfig = {
    apiKey: "YOU_API_KEY",
    authDomain: "DOMINIO",
    databaseURL: "URL_DATABASE",
    projectId: "NAME_PROJECT",
    storageBucket: "STORAGE_PROJECT",
    messagingSenderId: "MESSAGE_ID",
    appId: "ID_APP",
    measurementId: "MEASUREMENT_ID"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let storage = firebase.storage().ref();


class Profile extends Component {

    _sAuth = new AuthService()

    state = {
        user: {
            first_name: '',
            last_name: '',
            fech_nacimiento: '',
            sexo: null,
            celular: '',
            email: '',
            direccion: '',
            numero_telefono: '',
            foto: ''
        },
        disabled: {
            first_name: true,
            last_name: true,
            fech_nacimiento: true,
            sexo: true,
            celular: true,
            email: true,
            direccion: true,
            numero_telefono: true
        },
        fileModal: false,
        file: undefined,

    }

    handleUpdate = (e) => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value,
            },
            disabled: {
                ...this.state.disabled
            },
        })
        this.handleVerifyUpdate(null, this.state.user)
    }

    updateInput = (name) => {
        this.setState({
            disabled: {
                ...this.state.disabled,
                [name]: !this.state.disabled[name]
            }
        })
        return this.state.disabled[name]
    }


    // file = undefined;
    cambiarImage = (e) => {
        this.setState({
            user: {...this.state.user},
            disabled: {...this.state.disabled},
            file: e.target.files[0]
        })
    } 

   

    handleSubmit = event => {
        event.preventDefault();
        let nombreArchivo = this.state.file.name;
        let nombreFinal = +(new Date()) + '-' +nombreArchivo;

        let metaData = { contentType: this.state.file.type}

        storage.child('papaya-react/' + nombreFinal)
        .put(this.state.file, metaData)
        .then((response)=>{
           console.log('Exito') 
           // exito swal

           return response.ref.getDownloadURL()
        }).then(url => {
          console.log('actualizar state para enviar a la API')   
            this.setState({
                user: {
                    ...this.state.user,
                    foto: url
                },
                disabled:{
                    first_name: true,
                    last_name: true,
                    fech_nacimiento: true,
                    sexo: true,
                    celular: true,
                    email: true,
                    direccion: true,
                    numero_telefono: true
                },
                // fileModal
                file: undefined
            })                                          
        })  
        this.props.client.updateUserAsync(this.state.user, this._sAuth.token)
            .then(res => {
                if(res.status === 200) {
                    swal(
                        <div>
                            <h1>tus datos han sido actualizados exitosamente!</h1>                                
                            <hr/>                            
                        </div>
                    )
                }
            })

        this.verify = false;
    }

    verify = false;
    handleVerifyUpdate = (data,state) => {       
        if(state !== data) {
            this.verify = true
        } else {
            this.verify = false
        }
    }


    componentDidMount() {
        this.props.client.getUserAsync(this._sAuth.token)
        .then((data) => {
            this.setState({
                user: data,
                disabled: {
                    ...this.state.disabled
                }
            })
            this.handleVerifyUpdate(data, this.state.user)
        }).catch(err => {
            throw err
        })
    }
    
    closeModal = (e) => {
        this.setState({ 
            user: {...this.state.user},
            disabled:{...this.state.disabled},
            fileModal: false,
            file: this.state.file
        })
    } 
    openFileModal = () => {
        this.setState({
            user: {...this.state.user},
            disabled:{...this.state.disabled},
            fileModal: true,
            file: this.state.file
        })
    }   
    render() {
        return (
            <ProfileLayout>
                <ProfileSidebar  profile={this.props.userLogged.foto}  />
                <Switch>
                    <Route path='/profile' render={() => 
                        <ProfileItem  
                            cambiarImage={this.cambiarImage}
                            handleUpdate={this.handleUpdate} 
                            toggleInput={this.updateInput} 
                            user={this.state.user} 
                            disabled={this.state.disabled}  
                            handleSubmit={this.handleSubmit}
                            handleVerifyUpdate={this.verify}
                            openModal={this.openFileModal}
                            />} 
                            />
                                {
                                    this.state.fileModal && 
                                        <ModalContainer>
                                            <ModalContent closeModal={this.state.closeModal} size={500} >
                                                <FileImage />
                                            </ModalContent>
                                        </ModalContainer>
                                }                                                        
                </Switch>
            </ProfileLayout>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        userLogged: state.get('ClientReducer').get('user')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        client: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);
