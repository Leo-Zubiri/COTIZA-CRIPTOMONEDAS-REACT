import React from 'react'
import styled from '@emotion/styled'

const ResultadoContainer = styled.div`
    color: #FFF;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Texto = styled.p`
    font-size: 18px;

    span{
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 24px;

    span{
        font-weight: 700;
    }
`;

const Imagen = styled.img`
    display: block;
    width: 150px;
`;

const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado;

  return (
    <ResultadoContainer>
       <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
       <div>
       <Precio> El precio es de: <span>{PRICE}</span> </Precio>
       <Texto> Precio mas alto del día: <span>{HIGHDAY}</span> </Texto>
       <Texto> Precio mas bajo del día: <span>{LOWDAY}</span> </Texto>
       <Texto> Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span> </Texto>
       <Texto> última actualización: <span>{LASTUPDATE}</span> </Texto>
       </div>
       
    </ResultadoContainer>
  )
}

export default Resultado