export interface Tariff {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  basePrice: number;
  previousPrice: number;
  basicFeatures: Array<{
    id:string;
    name: string;
    icon: string;
  }>;
  features: {
    fiber: {
      description: string; 
      features: Array<{
        id: string;
        detail: string;
      }>;
      options: Array<{
        id: string;
        name: string;
        price: number;
        selected?: boolean;
        icon: string;
      }>;
    };
    landline: {
      included: boolean;
      description: string;
      previousPrice: number;
      icon: string;
    };
    centralita: {
        id: string;
        name: string;
        price: number;
        selected?: boolean;
        icon: string;
        features: Array<{
          id: string;
          detail: string;
        }>;
    };
    mobileLines: {
      id: string;
      name: string; 
      description: string;
      options: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        icon: string;
        features: Array<{
          id: string;
          detail: string;
        }>;
      }>;
    };
    mobileDevices?: { 
      id: string;
      name: string; 
      description: string;
      options: Array<{
        id: string;
        brand: string;
        model: string;
        name: string;
        img: string;
        previousPrice: number;
        price: number;
        quantity: number;
        installment24: string;
        installment36: string;
        icon: string;
      }>;
    };
    solutions?: {  
      id: string;
      name: string; 
      description: string;
      options: Array<{
        id: string;
        name: string;
        description: string;
        price: number;
        previousPrice: number;
        quantity: number;
        pricePerLic: string;
        icon: string;
      }>;
    };
  };
}

export type CartItem = { 
  id: string; 
  name: string; 
  price: number; 
  quantity: number;
};

export type CartState = { 
  items: CartItem[]; 
  totalPrice: number;
};

export type CartContextType = {
  cart: CartState;
  updateFiberPrice: (price: number) => void;
  addProduct: (product: CartItem) => void;
  removeProduct: (id: string) => void;
  getTotalPrice: () => number;
  getSelectedProducts: () => CartItem[];
  fiberPrice: number;
};

export interface ProgressWizardProps {
  currentStep: number;
  totalSteps: number;
}