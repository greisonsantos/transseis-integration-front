import React, { useState, useEffect } from "react";

import { MDBDataTable, MDBCard, MDBCardBody } from "mdbreact";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import api from '../../services/api'
import swal from 'sweetalert';
import { Modal, Button } from 'react-bootstrap'
import { format, addHours } from 'date-fns'
const Home = (props) => {

  const UpdateTruck = async (truckId, status) => {


    const response = await api.put(`/trucks/${truckId}`, {
      status: !status
    });

    // console.log(response)
    if (response.data.msg === 'created') {
      swal("Sucesso!", "Status de Rastreio alterado com sucesso", "success")
        .then((value) => {
          document.location.reload(true);
        });
    } else {
      swal("Atenção", "Erro ao atualizar o status! Tente novamente.", "error");

    }

  }

  const SiginOut = () => {
    localStorage.removeItem('@TOKEN');
    props.history.push('/')
  }


  const [show, setShow] = useState(false);
  const [IdShipment, setIdShipment] = useState('')
  const [truckId, settruckId] = useState(' ')
  const handleClose = () => setShow(false);

  const ModalIdShipment = async (truck_id, value) => {

    setShow(true)
    settruckId(truck_id)
    setIdShipment(value)
  }

  const saveIdShipment = async () => {


    const response = await api.put(`/trucks/${truckId}`, {
      id_shipment: IdShipment
    });

    if (response.data.msg === 'created') {
      swal("Sucesso!", "IdShipment inserido com sucesso", "success")
        .then((value) => {
          document.location.reload(true);
        });
    } else {
      swal("Atenção", "Erro ao inserir o IdShipment! Tente novamente.", "error");

    }


  }

  useEffect(() => {

    async function loadTrucks() {
      const response = await api.get('/trucks')
      if (response.status === 200) {

        const trucks = response.data.map(truck => {
          return {
            ...truck,
            data_posicao: format(
              addHours(new Date(truck.data_posicao), 3),
              "dd/MM/yyyy HH:mm"),
            status: truck.status === true ? <div style={{ fontSize: 18, color: '#3CB310' }}>Enviando dados</div> : <div style={{ color: '#8B0000' }}>Não está enviando dados</div>,
            ignicao: truck.ignicao === true ? <div style={{ fontSize: 15, color: '#3CB310' }}>Ligada</div> : <div style={{ color: '#8B0000' }}>Desligada</div>,
            action: (
              <button onClick={() => {
                UpdateTruck(truck.id_veiculo, truck.status);
              }}
                style={{ backgroundColor: "#000080", color: '#FFF', padding: 7, borderRadius: 8 }}
                type="button" className="details">
                Alterar Status
          </button>
            ),
            IdShipment: (
              <button onClick={() => ModalIdShipment(truck.id_veiculo, truck.id_shipment, truck.status)}
                style={{ width: 90, backgroundColor: "#000080", color: '#FFF', padding: 7, borderRadius: 8 }}
                className="details">

                {truck.id_shipment}
              </button>

            )

          }
        });

        setDataTable(dataTable => ({ ...dataTable, rows: trucks }))
      }
    }
    loadTrucks();
  }, [])


  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "ID do veículo",
        field: "id_veiculo",
        sort: 'asc',
        width: 150
      },
      {
        label: "Placa",
        field: "placa",
        sort: 'asc',
        width: 270
      },
      {
        label: "Rua ",
        field: "rua",
        sort: 'asc',
        width: 100
      },
      {
        label: "Cidade",
        field: "cidade",
        sort: 'asc',
        width: 100
      },
      {
        label: "Data posição",
        field: "data_posicao",
        sort: 'asc',
        width: 100
      },
      {
        label: "Ingnição",
        field: "ignicao",
        sort: 'asc',
        width: 150
      },
      {
        label: "STATUS",
        field: "status",
        sort: 'asc',
        width: 100
      },
      {
        label: "Id de Envio",
        field: "IdShipment",
        sort: 'asc',
        width: 100
      },
      {
        label: "Acão",
        field: "action",
        sort: 'asc',
        width: 100
      },

    ],
    rows: []
  })

  return (
    <div id="main-page">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            Dashboard
        </IconButton >
          <div style={{ display: 'flex', flex: '1', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20 }}>
            <IconButton edge="center" color="inherit" aria-label="menu" onClick={SiginOut}>
              Sair
        </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div className="closing-table-list" style={{ marginTop: 50 }}>
        <MDBCard>
          <MDBCardBody>
            <h6 className="card-title">Lista de caminhões</h6>
            <MDBDataTable
              displayEntries={true}
              entriesLabel={'Escolha o numero de linhas'}
              searchLabel={'Pesquisar'}
              paginationLabel={['Anterior', 'Proximo']}
              infoLabel={['Mostrando', 'à', 'de', 'registros']}
              striped
              bordered
              small
              data={dataTable}
            />
          </MDBCardBody>
        </MDBCard>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Id de Envio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{ display: 'flex', flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center', height: 44, borderRadius: 10, borderWidth: 1 }}
            value={IdShipment}
            onChange={(e) => setIdShipment(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancelar
          </Button>
          <Button variant="primary" onClick={saveIdShipment}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
};

export default Home;