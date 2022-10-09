import {useContext, useEffect, useState} from "react";
import Product from "./Product";
import Cart from "./Cart";
import {Col, Pagination} from 'react-bootstrap';
import {Navigate, Outlet} from "react-router-dom";
import axios from "axios";
import ThemeContext from "../context/ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import { fillProducts, addProductToCart, removeProductFromCart, changeProductCount } from '../features/productsSlice';

  function Products() {
    const [registrationFlag, setRegistrationFlag] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesArray, setPagesArray] = useState([]);
    const {alerts, setAlerts} = useContext(ThemeContext);

    const products = useSelector((state) => state.products.value);
    const dispatch = useDispatch();

    useEffect(() => {
      if(!localStorage.getItem('shop_user')) {
        setRegistrationFlag(true);
      }
    }, []);

    useEffect(() => {
      const skip = (currentPage - 1) * 10;
      axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`).then(res => {
        const data = res.data;
        console.log(data);
        dispatch(fillProducts(data.products.map(product => ({...product, addedToCart: false, count: 1}))));
        let pages = data.total / data.limit;
        if(data.total % data.limit) { pages += 1; }
        let temp = [];
      for(let item = 1; item <= pages; item++) {
        temp.push(item);
      }
      setPagesArray(temp);
    });
  }, [currentPage]);

  const changeCount = (id, newCount) => {
    dispatch(changeProductCount({id, newCount}));
  }

  const addToCart = id => {
    const addedProduct = products.filter(el => id === el.id)[0];
    setAlerts([...alerts, {
      type: 'success',
      text: `Product ${addedProduct.brand} ${addedProduct.title} is added to cart`,
      created: new Date().getTime()
    }]);
    dispatch(addProductToCart(id));
  }

  const removeFromCart = id => {
    const removedProduct = products.filter(el => id === el.id)[0];
    setAlerts([...alerts, {
      type: 'danger',
      text: `Product ${removedProduct.brand} ${removedProduct.title} removed from cart`,
      created: new Date().getTime()
    }]);
    dispatch(removeProductFromCart(id));
  }

  return <>
    <Outlet context={products}/>
    <Col xs={12}><h2 className={'mb-4'}>Products</h2></Col>
    {products.map(product => <Product
        product={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        key={product.id}/>)}

    { products.filter(el => el.addedToCart).length ? <Cart
      products={products.filter(el => el.addedToCart)}
      changeCount={changeCount}
      removeFromCart={removeFromCart}/> : ''}
    {registrationFlag ? <Navigate to="/registration" replace/> : ''}

    <Col xs={12} className={'mt-4'}>
      <Pagination>
        {pagesArray.map(item => <Pagination.Item
            key={item} active={item === currentPage} activeLabel={''} onClick={() => setCurrentPage(item)}>
          {item}
        </Pagination.Item>)}
      </Pagination>
    </Col>
  </>
}

export default Products;