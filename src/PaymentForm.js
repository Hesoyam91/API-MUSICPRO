import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import axios from 'axios';

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    name: '',
    cvc: '',
    expiry: '',
    focus: ''
  });

  const [apiData, setApiData] = useState(null);

  const handleFocus = (e) => {
    setState((prevState) => ({
      ...prevState,
      focus: e.target.name
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const fetchApiData = () => {
    axios.get('https://musicpro.bemtorres.win/api/v1/test/saludo')
      .then(function (response) {
        setApiData(response.data.message);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const submitPayment = () => {
    console.log("name => ", state.name)
    console.log("number => ", state.number)
    console.log("expiry => ", state.expiry)
    console.log("cvc => ", state.cvc)
    alert(JSON.stringify(state))
  }

  return (
    <div className="card">
      <div className="card-body">
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        />
        <button onClick={fetchApiData}>Mostrar</button>
        {apiData && (
          <div>
            <h3>Información de la API:</h3>
            <p>{apiData}</p>
          </div>
        )}
        <form>
          {/* Resto del formulario */}
          <button
            type="button"
            className="btn btn-success btn-block btn-lg"
            onClick={submitPayment}
          >
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
