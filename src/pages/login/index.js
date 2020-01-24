import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import './style.css';
import { Link } from "react-router-dom";


const Login = () => {
  return (

    <div className='container'>
      {/* <img src={logo} alt="Logo" height="150px" width="250px" id='imageLogo' /> */}
      <MDBContainer>
        <MDBRow style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <MDBCol md="6" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: 30, padding: 20, paddingRight: 30
          }}>
            <form >
              <p style={{ color: '#fff' }} className="h5 text-center mb-4 title">Login</p>
              <div className="grey-text">
                <MDBInput
                  labelClass='inputs'
                  iconClass='inputs'
                  background='inputs'
                  label="Digite seu email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  iconClass='inputs'
                  background='inputs'
                  label="Digite sua senha"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
                <div className='selectSector'>

                </div>

              </div>
              <div style={{ marginLeft: 150, borderRadius: 20, backgroundColor: '#000fff', width: 200 }} className="text-center">
                <Link to="/home">
                  <h2 style={{ color: '#fff' }} >Login</h2>
                </Link>
              </div>

            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div >
  );
};

export default Login;