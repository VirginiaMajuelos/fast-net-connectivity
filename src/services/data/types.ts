export interface Tariff {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  previousPrice: number;
  features: {
    fiber: {
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
    switchboard: {
      options: Array<{
        id: string;
        name: string;
        price: number;
        selected?: boolean;
        icon: string;
      }>;
    };
    mobileLines: {
      options: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        icon: string;
      }>;
    };
    digitalSolutions?: {  
      options: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        icon: string;
      }>;
    };
    mobileDevices?: { 
      options: Array<{
        id: string;
        brand: string;
        model: string, 
        name: string;
        img: string;
        previousPrice: number;
        installment24: string;
        price: number;
        quantity: number;
        icon: string;
      }>;
    };
  };
}


export type CartItem = { 
  id: string; 
  name: string; 
  price: number; 
  quantity: number 
};

export type CartState = { 
  items: CartItem[]; 
  totalPrice: number 
};

export type CartContextType = {
  cart: CartState;
  //fiberPrice?: number;
  updateFiberPrice: (price: number) => void;
  addProduct: (product: CartItem) => void;
  removeProduct: (id: string) => void;
  getTotalPrice: () => number;
};


