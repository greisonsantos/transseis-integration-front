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


const Home = () => {

  const UpdateTruck = async (truckId, status) => {


    const response = await api.put(`/trucks/${truckId}`, {
      status: !status
    });

    // console.log(response)
    if (response.data.msg = 'created') {
      swal("Sucesso!", "Status de Rastrio alterado com sucesso", "success")
        .then((value) => {
          document.location.reload(true);
        });
    } else {
      swal("Atenção", "Erro ao atualizar o status! Tente novamente.", "error");

    }

  }


  useEffect(async () => {
    const response = await api.get('/trucks')
    if (response.status == 200) {

      const trucks = response.data.map(truck => {

        return {
          ...truck,
          status: truck.status === true ? <div style={{ color: '#3CB310' }}>Rastreado</div> : <div style={{ color: '#8B0000' }}>Não Rastreado</div>,
          action: (
            <button onClick={() => {
              UpdateTruck(truck.id_veiculo, truck.status);
            }}
              style={{ backgroundColor: "#000080", color: '#FFF', padding: 7, borderRadius: 8 }}
              type="button" className="details">
              Alterar Status
          </button>
          ),
        }
      });
      console.log(trucks)

      setDataTable({ ...dataTable, rows: trucks })
    } else {
    }
  }, [])


  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "ID do veículo",
        field: "id_veiculo",
        sort: "asc",
        width: 150
      },
      {
        label: "Placa",
        field: "placa",
        sort: "asc",
        width: 270
      },
      {
        label: "Rua ",
        field: "Street",
        sort: "asc",
        width: 100
      },
      {
        label: "Cidade",
        field: "city",
        sort: "asc",
        width: 100
      },
      {
        label: "Ingnição",
        field: "ignition",
        sort: "asc",
        width: 150
      },
      {
        label: "STATUS",
        field: "status",
        sort: "asc",
        width: 100
      },
      {
        label: "Acão",
        field: "action",
        sort: "asc",
        width: 100
      },

    ],
    rows: []
  })

  return (
    <page id="main-page">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            Dashboard
        </IconButton>

        </Toolbar>
      </AppBar>

      <div className="closing-table-list" style={{ marginTop: 50 }}>
        <MDBCard>
          <MDBCardBody>
            <h6 className="card-title">Lista de caminhões</h6>
            <MDBDataTable
              striped
              bordered
              small
              data={dataTable}
              searchingLabel="Pesquisar"

            />
          </MDBCardBody>
        </MDBCard>
      </div>
    </page>
  )
};

export default Home;
