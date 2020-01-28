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


const Home = () => {

  useEffect(() => {

  }, [])


  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "ID do veículo",
        field: "IdVeiculo",
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
        label: "Latitude ",
        field: "latitude",
        sort: "asc",
        width: 100
      },
      {
        label: "Longitude",
        field: "longitude",
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
              hover
              striped
              bordered
              small
              searchingLabel="Pesquisa"
              data={dataTable}
              exportToCSV
              displayEntries

            />
          </MDBCardBody>
        </MDBCard>
      </div>
    </page>
  )
};

export default Home;
