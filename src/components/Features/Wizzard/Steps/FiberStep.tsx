import { useCart } from '../../../../context/CartContext';
import litePlan from '../../../../services/data/estandar.json';
import { CardCentralita } from '../../CardProducts/CardCentralita';
import { CardProductsLines } from '../../CardProducts/CardProductsLines';
import { CardProductsMobiles } from '../../CardProducts/CardProductsMobiles';
import { CardProductsSolutions } from '../../CardProducts/CardProductSolutions';
import { CartList } from '../../CartList/CartList';
import { Fiber } from '../../Fiber/Fiber';

const FiberStep: React.FC = () => {
  const { updateFiberPrice } = useCart();
  
  return <Fiber litePlan={litePlan} onFiberSelect={(price) => updateFiberPrice(price)} />;
};

export const stepsConfig = [
  { component: FiberStep, props: {} },
  { component: CardProductsLines, props: { litePlan } },
  { component: CardCentralita, props: { litePlan } },
  { component: CardProductsMobiles, props: { litePlan } },
  { component: CardProductsSolutions, props: { litePlan } },
  { component: CartList, props: {} },
];
