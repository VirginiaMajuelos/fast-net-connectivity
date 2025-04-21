import React, { useState } from 'react';

import { Button } from '../../UI/Button/Button';
import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [privacyError, setPrivacyError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (name.trim().length < 3) {
      setNameError('El nombre debe tener al menos 3 caracteres.');
      isValid = false;
    } else {
      setNameError('');
    }

    const phonePattern = /^[6-9]\d{8}$/; 
    if (!phonePattern.test(phone)) {
      setPhoneError('Introduce un número de teléfono válido.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!privacyAccepted) {
      setPrivacyError('Debes aceptar la política de privacidad.');
      isValid = false;
    } else {
      setPrivacyError('');
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true); 

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000); 
  };

  return (
    <div className={styles.container}>
      {submitted ? (
        <div className={styles.thankYouPage}>
          <p className={styles.title}>¡Gracias por tu confianza!</p>
          <p className={styles.text}>Hemos recibido tu solicitud y pronto te contactaremos.</p>
          <p className={styles.text}>Si lo prefieres, también puedes llamarnos al <strong>900 745 443</strong>.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h2>¿Hablamos?</h2>
          <p>Déjanos tu número y te llamamos.</p>

          <div className={styles.inputGroup}>
            <label htmlFor='name'>Nombre</label>
            <input
              type='text'
              id='name'
              placeholder='Tu nombre'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className={styles.error}>{nameError}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor='phone'>Teléfono</label>
            <input
              type='tel'
              id='phone'
              placeholder='Ej: 675 44 35 12'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <p className={styles.error}>{phoneError}</p>}
          </div>

          <div className={styles.checkboxContainer}>
            <input
              type='checkbox'
              id='privacy'
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
            />
            <label htmlFor='privacy'>
              Acepto la <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>política de privacidad</a>
            </label>
          </div>
          {privacyError && <p className={styles.error}>{privacyError}</p>}

          <Button type='submit' variant='primary'>            {loading ? <span className={styles.loader}></span> : 'Enviar'}
          </Button>

          <p className={styles.privacyNotice}>
            Horario de atención: 09:30h - 20:00h (Lunes a Viernes).
          </p>
        </form>
      )}
    </div>
  );
};
