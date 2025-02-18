import React from 'react';
import { useParams } from 'react-router-dom';

export const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtiene el parámetro de la URL

  return (
    <div>
      <h1>Detalles del Plan: {id}</h1>
      {/* Aquí puedes buscar el plan en un estado global o hacer una petición */}
    </div>
  );
};
