import Faqs from '../../../services/data/faqs.json';
import { Faq } from '../../../services/data/types';
import { Accordion } from '../../UI/Accordion/Accordion';

export const PreguntasFrecuentes: React.FC = () => {
  return (
    <div>
      <h3>Preguntas frecuentes</h3>
      {
        Faqs.map((faq: Faq) => <Accordion key={faq.id}title={faq.title}>{faq.content}</Accordion>)
      }
    </div>
  );
};

