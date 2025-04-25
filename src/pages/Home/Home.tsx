import { BenefitsHome } from '../../components/Features/BenefitsHome/BenefitsHome';
import { BusinessSection } from '../../components/Features/BusinessSection/BusinessSection';
import { Faqs } from '../../components/Features/Faqs/Faqs';
import { Footer } from '../../components/Layout/Footer/Footer';
import { ProductsCard } from '../../components/UI/ProductsCard/ProductsCard';


export const Home: React.FC = () => {
  return (
    <div>
      <ProductsCard/>
      <BusinessSection />
      <BenefitsHome />
      <Faqs />
      <Footer />
    </div>
  );  
};

