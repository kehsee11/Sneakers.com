import { data } from '../data/data';

export const reducer = (state, action) => {
  const { products } = data;
  switch (action.type) {
    case 'ADD_TO_CART':
      const cartExist = products.find((cartItem) => {
        if (cartItem.id === action.payload) {
          return cartItem;
        }
        return cartItem;
      });
      return {
        ...state,
        show: true,
        cart: [{ ...cartExist, amount: cartExist.amount + 1 }],
      };
      break;

    case 'INCREASE':
      const cartItems = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: cartItems };
      break;

    case 'DECREASE':
      const minusCartItems = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((aaa) => aaa.amount !== 0);
      return { ...state, cart: minusCartItems };
      break;

    case 'REMOVE':
      const removeItems = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      return { ...state, cart: removeItems };
      break;

    case 'GET_TOTAL':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total, amount };
      break;

    default:
      break;
  }
  return state;
};
