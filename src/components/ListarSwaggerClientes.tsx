import React, { useEffect, useState, FC } from 'react'
import axios from 'axios';
import 'swagger-ui-react/swagger-ui.css';
import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(import('swagger-ui-react'), {ssr: false})

const ListarSwaggerClientes: React.FC = () => {
    const [swaggerJson, setSwaggerJson] = useState<any>(null);

    useEffect(()=>{
        const fetchSwaggerJson = async () => {
            try {
              const response = await fetch('https://swaggertools.s3.amazonaws.com/swagger.json');
              const swaggerJsonData = await response.json();
      
              // Filtra solo el método GET del endpoint de clientes
              const filteredSpec = {
                ...swaggerJsonData,
                paths: {
                  '/clientes': {
                    get: swaggerJsonData.paths['/clientes']?.get
                  }
                }
              };
      
              setSwaggerJson(filteredSpec);
            } catch (error) {
              console.error('Error al obtener el archivo swagger.json:', error);
            }
          };
      
          fetchSwaggerJson();
    },[]);

  return (
    <SwaggerUI key={'swagger'} spec={"https://petstore.swagger.io/v2/swagger.json"} />
  )
}

export default ListarSwaggerClientes