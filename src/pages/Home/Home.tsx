import { BusinessSection } from '../../components/Features/BusinessSection/BusinessSection';
import Footer from '../../components/Layout/Footer/Footer';
import { Accordion } from '../../components/UI/Accordion/Accordion';
import { Benefits } from '../../components/UI/Benefits/Benefits';
import { ProductsCard } from '../../components/UI/ProductsCard';
import Faqs from '../../services/data/faqs.json';
import { Faq } from '../../services/data/types';
import styles from '../../styles/general.module.css';

export const Home: React.FC = () => {
  return (
    <div>
      <ProductsCard/>
      <BusinessSection />
      <Benefits />
      
      
      <div>
        <h3 className={styles.title__accordion}>Preguntas frecuentes</h3>
        {
          Faqs.map((faq: Faq) => <Accordion key={faq.id}title={faq.title}>{faq.content}</Accordion>)
        }
      </div>
      <Footer />
    </div>
  );  
};

