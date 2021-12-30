import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from 'react';
import { reducer } from '../reducer/reducer';
import { data } from '../data/data';
import { thumbnailsData } from '../data/data';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { products } = data;
  const { thumbnails } = thumbnailsData;
  const [productsData, setProductData] = useState(products);
  const [value, setValue] = useState(0);
  const [lightBox, showLightBox] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [summary, setSummary] = useState(false);

  const setLimit = (num) => {
    if (num > productsData.length - 1) {
      num = 0;
    }
    if (num < 0) {
      num = productsData.length - 1;
    }
    return num;
  };
  //   open lightbox
  const openLightBox = () => {
    showLightBox(true);
  };
  //   close lightbox
  const closeLightBox = () => {
    showLightBox(false);
  };
  //   open cart
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  //   close cart
  const handleCloseCart = () => {
    setShowCart(false);
  };
  //   open sidebar
  const handleOpenSidebar = () => {
    setSidebar(true);
  };
  //   close sidebar
  const handleCloseSidebar = () => {
    setSidebar(false);
  };

  // get cartItems from localStorage
  const getCartFromStorage = () => {
    let list = localStorage.getItem('cart');
    if (list) {
      return JSON.parse(localStorage.getItem('cart'));
    } else {
      return [];
    }
  };

  const initialState = {
    show: false,
    cart: getCartFromStorage(),
    amount: 0,
    total: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id) => {
    dispatch({ type: 'ADD_TO_CART', payload: id });
  };
  //   increase
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  //   decrease
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  //   delete
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  // handle name
  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  // handle email
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  //   handle error
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !name) {
      setError(true);
      setNameErr(true);
      setEmailErr(true);
    } else {
      setError(false);
      setNameErr(false);
      setEmailErr(false);
    }
  };
  //   show summary
  const handleSummary = () => {
    setSummary(true);
  };

  //   reset to initial state when the ok button has been pressed
  const reset = () => {
    state.cart = [];
    setName('');
    setEmail('');
    setSummary(false);
    setShowCart(false);
  };

  // get theme from local storage
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || 'light';
  };
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    if (state.cart.length === 0) {
      setName('');
      setEmail('');
    }
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    setNameErr(false);
    setEmailErr(false);
    setError(false);
  }, [name, email]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        productsData,
        thumbnails,
        setLimit,
        value,
        setValue,
        lightBox,
        openLightBox,
        closeLightBox,
        showCart,
        handleShowCart,
        handleCloseCart,
        AddToCart,
        increase,
        decrease,
        remove,
        sidebar,
        handleOpenSidebar,
        handleCloseSidebar,
        email,
        name,
        handleEmail,
        handleName,
        handleSubmit,
        error,
        nameErr,
        emailErr,
        summary,
        handleSummary,
        reset,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
