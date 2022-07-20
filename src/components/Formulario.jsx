import styled from "@emotion/styled"
import Error from "./Error";

import useSelectMonedas from "../hooks/useSelectMonedas";

import { useEffect, useState } from "react";

import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas);
    const [criptomoneda,SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda',criptos);

    useEffect(() => { 
        const consultarAPI = async () => {  
            const url  = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await fetch(url);
            const result = await response.json();

            const arrayCriptos = result.Data.map((cripto) => { 

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto;

            });

            setCriptos(arrayCriptos);
        }

        consultarAPI();

    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([moneda,criptomoneda].includes('')){
            console.log('Falta select')
            setError(true);
            return
        }

        setError(false);
        setMonedas({moneda,criptomoneda});
    }

  return (
    <form onSubmit={handleSubmit}> 

        {error && <Error>Todos los campos son obligatorios</Error>}
        <SelectMonedas/>
        <SelectCriptomoneda/>
        <InputSubmit
            type='submit'
            value='Cotizar'
        />
    </form>
  )
}

export default Formulario