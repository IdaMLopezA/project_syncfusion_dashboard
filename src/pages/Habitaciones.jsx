import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Header } from '../components';
import "./Habitaciones.css";


const url="https://hoteliakuepa.herokuapp.com/habitaciones";

class Habitaciones extends Component {
  state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    _id: '',
    nombrehab: '',
    capacidad: '',
    camas: '',
    descripcion:'',
    wifi:'',
    tv:'',
    banio:'',
    cajafuerte:'',
    nevera:'',
    valornoche:'',
    img:'',
    estado:'',
    reservas: [
      {
        _idr:'',
        fentrada:'',
        fsalida:'',
        cantidaddNoches:'',
        freserva:'',
        totalreserva:'',

      },
    ],
    tipoModal: ''
  }
}

peticionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
  delete this.state.form.id;
  await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+this.state.form.id, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarhabitaciones=(habitaciones)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      _id: Habitaciones._id,
      nombrehab: Habitaciones.nombrehab,
      capacidad: Habitaciones.capacidad,
      camas: Habitaciones.camas,
      descripcion:Habitaciones.descripcion,
      wifi:Habitaciones.wifi,
      tv:Habitaciones.tv,
      banio:Habitaciones.banio,
      cajafuerte:Habitaciones.cajafuerte,
      nevera:Habitaciones.nevera,
      valornoche:Habitaciones.valornoche,
      img:Habitaciones.img,
      estado:Habitaciones.estado,
      reservas: [
        {
          _idr:Habitaciones._idr,
          fentrada:Habitaciones.fentrada,
          fsalida:Habitaciones.fsalida,
          cantidaddNoches:Habitaciones.cantidaddNoches,
          freserva:Habitaciones.freserva,
          totalreserva:Habitaciones.totalreserva,
        }]
      }
    })
  }


handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <span>Administrador/Formulario de Registro de habitaciones y edición de estados cards</span>
    <Header category="CRUD" title="Habitaciones" />
    <br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Habitaciones</button>
  <br /><br />

  <div class="card">
        <figure>
          <div class="img-carti">
            <Link to="#">
              <img
                className="imgCard"
                src={
                  "https://static.abc.es/Media/201504/27/hotel12--644x362.jpg"
                }
                alt="ciencias"
              />
              <div class="btn-cartas">
                <div>
            <Link to="#Formulariohabitaciones">
                    <div class="circle">
                      <input
                        type="radio"
                        id="one"
                        name="rate"
                        value="1"
                        class="myCheckbox"
                      ></input>
                      <label for="one"></label>
                    </div>
                  </Link>
                </div>
                <div>
                  <button class="btn-orange">
                    <h5>Precio 50.000$/Noche</h5>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </figure>
        <div class="contenido-card">
          
        <div class="center">
      <div class="stars">
        <input type="radio" id="five" name="rate" value="5"></input>
        <label for="five"></label>
        <input type="radio" id="four" name="rate" value="4"></input>
        <label for="four"></label>
        <input type="radio" id="three" name="rate" value="3"></input>
        <label for="three"></label>
        <input type="radio" id="two" name="rate" value="2"></input>
        <label for="two"></label>
        <input type="radio" id="one" name="rate" value="1"></input>
        <label for="one"></label>
      </div>
      </div>

      <section class="iconFather">

      <div class=" iconItem">
        <div class=" iconItem1">
            <div class="iconcard">
            <i class="fa-solid fa-bed"></i>
            </div>
            <div>
            <p class="numCard">3</p>
            </div>
        </div>
        <div class=" iconItem2">
        <p class="wordCard">Cama</p>
        </div>
      </div>

      <div class=" iconItem">
        <div class=" iconItem1">
            <div class="iconcard">
            <i class="fa-solid fa-wifi"></i>
            </div>
            <div>
            <p class="numCard">1</p>
            </div>
        </div>
        <div class=" iconItem2">
        <p class="wordCard">Wi-fi</p>
        </div>
      </div>

      <div class=" iconItem">
        <div class=" iconItem1">
            <div class="iconcard">
            <i class="fa-solid fa-bath"></i>
            </div>
            <div>
            <p class="numCard">2</p>
            </div>
        </div>
        <div class=" iconItem2">
        <p class="wordCard">Baño</p>
        </div>
      </div>

      <div class=" iconItem">
        <div class=" iconItem1">
            <div class="iconcard">
            <i class="fa-solid fa-person"></i>
            </div>
            <div>
            <p class="numCard">4</p>
            </div>
        </div>
        <div class=" iconItem2">
        <p class="wordCard">Personas</p>
        </div>
      </div>
      </section>  
      <section class="iconMacro">
        
        <div class=" iconEdit">
          <div class=" iconEdit1">
          
            <div class="valNum">
              <span class='size39'>39</span>
              </div>
              <div class="Edit">
              <Link to="/#">
              <i class="fa-solid fa-pen-to-square"></i>
              </Link>
              </div>
              
          </div>
          <div class=" iconEdit2">
          <Link to="/#">
              <div className='Reserva'>
                <div><h3 >Reservar</h3></div>
              </div>
          </Link>
          </div>
        </div>

      </section>  

        </div>
      </div>

    <table className="table ">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tipo</th>
          <th>Capacidad</th>
          <th>Camas</th>
          <th>Descripción</th>
          <th>Servicios</th>
          <th>Valor noche (Peso Cob)</th>
          <th>estado</th>
          <th>Reservas</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(empresa=>{
          return(
            <tr>
          <td>{_Id}</td>
          <td>{nombrehab}</td>
          <td>{capacidad}</td>
          <td>{camas}</td>
          <td>{descripcion}</td>
          <td>{wifi / tv / banio / cajafuerte / nevera  }</td>
          <td>{valornoche}</td>
          <td>{estado}</td>
          <td>{reservas}</td>
          <td>{new Intl.NumberFormat("en-EN").format(empresa.capital_bursatil)}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(empresa); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(empresa); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
          </td>
          </tr>
          )
        })}
      </tbody>
    </table>
    



    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                <div className="form-group">
                    <label htmlFor="_id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombrehab">tipo de habitación</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <label htmlFor="capacidad">Capacidad</label>
                    <input className="form-control" type="text" name="capacidad" id="pais" onChange={this.handleChange} value={form?form.pais: ''}/>
                    <br />
                    <label htmlFor="capital_bursatil">Capital Bursatil</label>
                    <input className="form-control" type="text" name="capital_bursatil" id="capital_bursatil" onChange={this.handleChange} value={form?form.capital_bursatil:''}/>

                    <input type="radio" id="" name="rate" value="1"></input>
                    <label><i class="fa-solid fa-eye"> Vista </i></label>
                    <input type="radio" id="" name="rate" value="1"></input>
                    <label><i class="fa-solid fa-wifi"> Wi-fi </i></label>
                    

                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
                Estás seguro que deseas eliminar a la habitación {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default Habitaciones;
