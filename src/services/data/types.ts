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
        name: string;
        price: number;
        quantity: number;
        icon: string;
      }>;
    };
  };
}
