import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Realiza la solicitud GET al servidor
        axios.get('https://api.example.com/data')
      .then(response => {
          // Actualiza el estado con los datos recibidos
          setData(response.data);
      })
      .catch(error => {
          console.error('Error al obtener los datos:', error);
      });
        }, []);

    return (
        <div>
            {/* Renderiza los datos */}
            {data.map(item => (
                <p key={item.id}>{item.title}</p>
                ))}
        </div>
        );
};

export default MyComponent;
