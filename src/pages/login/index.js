import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import { Button } from 'react-bootstrap'
import './style.css';
import { Link } from "react-router-dom";
import api from '../../services/api';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');


  const handleSignIn = async () => {

    const response = await api.post('/autenticate', {
      email: email,
      password: password
    })

    console.log(response.data)
    if (response.status == 200) {
      props.history.push('/home')
      localStorage.setItem('@TOKEN', response.data.token)
    } else {
      setError(true)
    }
  }


  return (

    <div className='container'>
      {/* <img src={logo} alt="Logo" height="150px" width="250px" id='imageLogo' /> */}
      <MDBContainer>
        <MDBRow style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <MDBCol md="6" style={{
            backgroundColor: '#5222B9', borderRadius: 30, padding: 20, paddingRight: 30
          }}>
            <form >
              <p style={{ color: '#fff' }} className="h5 text-center mb-4 title">Login</p>
              {error &&
                <p style={{ color: '#FF0000' }} className="h5 text-center ">E-mail ou senha Inválido!</p>
              }
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  iconClass='inputs'
                  background='inputs'
                  label="Digite sua senha"
                  icon="lock"
                  group
                  type="password"
                  validate
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className='selectSector'>

                </div>

              </div>
              <div style={{ marginLeft: 60, borderRadius: 20, width: 250 }} className="text-center">
                <Button variant="outline-light" size="lg" block onClick={handleSignIn}>Login</Button>
              </div>

            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div >
  );
};

export default Login;