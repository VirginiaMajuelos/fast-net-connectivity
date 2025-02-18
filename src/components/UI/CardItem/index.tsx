import React from 'react';
import { FaDigitalTachograph, FaExchangeAlt, FaMobile, FaMobileAlt, FaPhone, FaWifi } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Tariff } from '../../../services/data/types';
import styles from './CardItem.module.css';


const iconMap: Record<string, JSX.Element> = {
  FaWifi: <FaWifi />,
  FaPhone: <FaPhone />,
  FaMobile: <FaMobile />,
  FaMobileAlt: <FaMobileAlt />,
  FaDigitalTachograph: <FaDigitalTachograph />,
  FaExchangeAlt: <FaExchangeAlt />,
};

export const CardItem: React.FC<{ plan: Tariff }> = ({ plan }) => {
  return (
    <div className={styles.card}>
      <h2>{plan.name}</h2>
      <ul>
        {plan.features.fiber.options.map((feature) => (
          <li key={feature.id}>
            {iconMap[feature.icon]} {feature.name}
          </li>
        ))}
        {plan.features.landline.included && (
          <li>
            {iconMap[plan.features.landline.icon]} {plan.features.landline.description}
          </li>
        )}
        {plan.features.switchboard.options.map((option) => (
          <li key={option.id}>
            {iconMap[option.icon]} {option.name}
          </li>
        ))}
        {plan.features.mobileLines.options.map((option) => (
          <li key={option.id}>
            {iconMap[option.icon]} {option.name} - {option.price}€
          </li>
        ))}
      </ul>
      <p className={styles.price__container}>Desde <span className={styles.price}>{plan.basePrice}€/mes</span></p>

      <Link to={`/tarifa-${plan.id}`} className={styles.button}>Ver detalles</Link>
    </div>
  );
};

