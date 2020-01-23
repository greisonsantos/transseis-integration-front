import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../../assets/login.png";

import "./styles.css";


export default class Login extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <div className="form__group field">
              <label for="user" className="form__label">
                Usuário
                    </label>
              <input
                type="input"
                className="form__field"
                placeholder="Usuário"
                name="user"
                id="user"
                required
              />

            </div>
          </FormGroup>
          <FormGroup controlId="formGroupPassword">
            <div className="form__group field">
              <label for="user" className="form__label">
                Senha
                    </label>
              <input
                type="password"
                className="form__field"
                placeholder="Senha"
                name="password"
                id="password"
                required
              />

            </div>
          </FormGroup>
          <Link to="/home">
            <Button variant="dark" className="buttons">
              Login
                  </Button>
          </Link>

        </Form>

      </div>
    );
  }
}
