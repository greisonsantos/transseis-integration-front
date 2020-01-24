import React from "react";
import { Link } from "react-router-dom";

import { MDBDataTable, MDBCard, MDBCardBody } from "mdbreact";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const Home = () => (
  <page id="main-page">
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          Dashboard
        </IconButton>

        <IconButton style={{}} edge="start" color="inherit" aria-label="menu">
          <Link to="/">
            Sair
         </Link>
        </IconButton>
      </Toolbar>
    </AppBar>

    <div class="closing-table-list" style={{ marginTop: 50 }}>
      <MDBCard>
        <MDBCardBody>
          <h6 class="card-title">Lista de caminhões</h6>
          <MDBDataTable
            hover
            striped
            bordered
            small
            searchingLabel="Pesquisa"
            data={{
              columns: [
                {
                  label: "NOME",
                  field: "name",
                  sort: "asc",
                  width: 150
                },
                {
                  label: "SETOR",
                  field: "sector",
                  sort: "asc",
                  width: 270
                },
                {
                  label: "VENDAS",
                  field: "sales",
                  sort: "asc",
                  width: 200
                },
                {
                  label: "PERCENTUAL",
                  field: "percentage",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "DÉBITO",
                  field: "debit",
                  sort: "asc",
                  width: 150
                },
                {
                  label: "CRÉDITO",
                  field: "credit",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "DINHEIRO",
                  field: "money",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "STATUS",
                  field: "status",
                  sort: "asc",
                  width: 100
                },
                {
                  label: "DETALHES",
                  field: "details",
                  sort: "asc",
                  width: 100
                }
              ],
              rows: [
                {
                  name: "Tiger Nixon",
                  sector: "Setor A",
                  sales: "132",
                  percentage: "11%",
                  debit: "R$ 120,00",
                  credit: "R$ 320,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Garrett Winters",
                  sector: "Setor A",
                  sales: "123",
                  percentage: "13%",
                  debit: "R$ 220,00",
                  credit: "R$ 170,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
                {
                  name: "Ashton Cox",
                  sector: "Setor C",
                  sales: "111",
                  percentage: "34%",
                  debit: "R$ 320,00",
                  credit: "R$ 86,00",
                  money: "R$ 100,00",
                  status: "Fechado",
                  details: "Ver mais"
                },
              ]
            }}
            exportToCSV
            displayEntries
            entrieslabel
          //data={data}
          />
        </MDBCardBody>
      </MDBCard>
    </div>
  </page>
);

export default Home;
