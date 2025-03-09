import { BusinessSection } from '../../components/Features/BusinessSection/BusinessSection';
import Footer from '../../components/Layout/Footer/Footer';
import { Accordion } from '../../components/UI/Accordion/Accordion';
import { Benefits } from '../../components/UI/Benefits/Benefits';
import { Bullets } from '../../components/UI/Bullets/Bullets';
import { ProductsCard } from '../../components/UI/ProductsCard';

export const Home: React.FC = () => {
  return (
    <div>
      <ProductsCard/>
      <Bullets />
      <BusinessSection />
      <Benefits />
      
      
      <div>
        <Accordion title='¿Cómo puedo contratar Conectividad Avanzada?'>Contratar Conectividad Avanzada es sencillo. Configura tu tarifa a medida en el sitio web oficial de Vodafone Empresas, eligiendo la opción que mejor combine fibra y móvil para empresas. También puedes contactar a un asesor para recibir orientación personalizada.</Accordion>
        <Accordion title='¿Que es Conectividad Avanzada?'>Conectividad Avanzada es una solución integral de conectividad que combina fibra y móvil para empresas, ideal para pequeñas y medianas empresas. Ofrece servicios como fibra óptica de alta velocidad, líneas móviles con datos y minutos ilimitados, y herramientas digitales personalizables.</Accordion>
      </div>
      <Footer />
    </div>
  );  
};

