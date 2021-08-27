import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {actualizarUsuarioAccion, editarFotoAccion} from '../redux/usuarioDucks'

const Perfil = () => {

    const usuario = useSelector(store =>store.usuario.user)
    // console.log(usuario)
    const loading = useSelector(store => store.usuario.loading)

    const [nombreUsuario, setNombreUsuario] = React.useState(usuario.displayName)
    const [activarFormulario, setActivarFormulario] = React.useState(false)

    const dispatch = useDispatch()

    const actualizarUsuario = () => {        
        if(!nombreUsuario.trim()){
            console.log('nombre Vacio')
            return
        }        
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarFormulario(false)
    }
    const [error, setError] = React.useState(false)

    const selecionarArchivo = imagen => {
      console.log(imagen.target.files[0])
      const imagenCliente = imagen.target.files[0]

    if(imagenCliente === undefined){
        console.log('no se selecionó imagen')
        return
    }

    if(imagen.target.files[0].type === "image/png" || imagen.target.files[0].type === "image/jpg" ){
        dispatch(editarFotoAccion(imagenCliente))
        
        setError(false)
    }else{
        setError(true)    
    }
    }

    return (
        <div className="mt-5 text-center">
            <div className="card">
                <div className="card-body">
                    <img src={usuario.photoURL} alt="foto de perfil" width="100px" className="img-fluid"/>
                    <h5 className="card-title">Nombre de usuario: {usuario.displayName} </h5>
                    <p className="card-text">Email:{usuario.email}</p>
                    <button className="btn btn-dark" onClick={() => setActivarFormulario(true)}>
                        Editar Nombre
                    </button>
                    {
                        error &&
                        <div className="alert alert-warning mt-3">Solo se admiten archivos jpg o png</div>
                    }
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" style={{display: 'none'}}
                        onChange={e => selecionarArchivo(e)} disabled={loading}/>
                        <label className={ loading ? 'btn btn-dark mt-2 disabled' :'btn btn-dark mt-2'} htmlFor="inputGroupFile01"
                        >Actualizar imagen</label>
                    </div>
                    

                </div>
                {
                    loading &&
                    <div className="card-body">
                        <div className="d-flex justify-content-center my-3">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    activarFormulario &&
                    <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" value={nombreUsuario} 
                                onChange={e =>setNombreUsuario(e.target.value)}/>
                                <div className="input-group-append">
                                    <button className="btn btn-dark" type="button" onClick={() => actualizarUsuario()} >
                                    Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                
            </div>
        </div>
    )
}

export default Perfil
