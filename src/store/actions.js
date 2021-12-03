import axios from 'axios';

export const getProducts = ({commit}) => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
        commit('SET_PRODUCTS', response.data);
    })
   
}

export const getProduct = ( { commit} , productid ) => {
    axios.get(`https://fakestoreapi.com/products/${productid}`)
    .then(response => {
        commit('SET_PRODUCT', response.data);
    })
}



export const getJewelerys = ({commit}) => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then(response => {
        commit('SET_JEWELERY', response.data);
        console.log(response.data)
       
    })
  
}



export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity });
  
    axios.post("https://fakestoreapi.com/carts", {
      product_id: product.id,
      quantity,
    });
  };
  
  
  export const getCartItems = ({ commit }) => {
    axios.get(`https://fakestoreapi.com/carts`)
    .then(response => {
      commit('SET_CART', response.data);
    })
  };
  
  export const removeProductFromCart = ({ commit }, product) => {
    commit("REMOVE_PRODUCT_FROM_CART", product);
    axios.delete("https://fakestoreapi.com/carts/${product.id}");
  };
  export const clearCartItems = ({ commit }) => {
    commit("CLEAR_CART_ITEMS");
    axios.delete("https://fakestoreapi.com/carts");
    
  };
  export const getUsers = ({ commit }) => {
    axios.get(`https://fakestoreapi.com/users`)
    .then(response => {
      commit('SET_USERS', response.data);
      console.log(response.data)
    })
  };
  