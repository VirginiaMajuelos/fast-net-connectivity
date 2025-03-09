import React, { useState } from 'react';

import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario, por ejemplo:
    console.log('Formulario enviado:', { name, phone });

    // Resetear el formulario tras el envío
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor='name'>Nombre:</label>
      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor='phone'>Correo electrónico:</label>
      <input
        type='phone'
        id='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <button type='submit' className={styles.submitButton}>
        Enviar
      </button>
    </form>
  );
};
