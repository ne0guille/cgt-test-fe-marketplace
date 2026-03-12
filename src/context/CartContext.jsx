import { createContext, useContext, useReducer, useMemo } from 'react';

const CartDataContext = createContext();
const CartActionsContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const id = action.payload;
      return { ...state, [id]: (state[id] || 0) + 1 };
    }
    case 'REMOVE_FROM_CART': {
      const { [action.payload]: _, ...rest } = state;
      return rest;
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {});

  const actions = useMemo(() => ({
    addToCart: (id) => dispatch({ type: 'ADD_TO_CART', payload: id }),
    removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id }),
  }), []);

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <CartActionsContext.Provider value={actions}>
      <CartDataContext.Provider value={{ cart, cartCount }}>
        {children}
      </CartDataContext.Provider>
    </CartActionsContext.Provider>
  );
}

export function useCartData() {
  const context = useContext(CartDataContext);
  if (!context) throw new Error('useCartData must be used within a CartProvider');
  return context;
}

export function useCartActions() {
  const context = useContext(CartActionsContext);
  if (!context) throw new Error('useCartActions must be used within a CartProvider');
  return context;
}

export function useCart() {
  return { ...useCartData(), ...useCartActions() };
}
