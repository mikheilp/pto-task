import React, { useEffect, useState } from 'react';
import MainService from '../services/MainService';
import Filter from '../components/filter/Filter';
import ProductList from '../components/product-list/ProductList';

function MainPage() {
  const [mans, setMans] = useState([]);
  const [cats, setCats] = useState([]);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    ForRent: 0,
    Mans: 1,
    Cats: 1,
    Period: '1w',
    SortOrder: 1,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'Period' || name === 'SortOrder') {
      getProducts({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    getMans();
    getCategories();
    getProducts(formData);
  }, []);

  const getMans = async () => {
    try {
      const res = await MainService.getMans(null);
      setMans(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await MainService.getCats();
      setCats(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async (data) => {
    try {
      const res = await MainService.getProducts(data);
      setProducts(res.data.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='main-page'>
      <Filter
        mans={mans}
        cats={cats}
        filterData={() => getProducts(formData)}
        onChange={onChange}
      />
      <ProductList products={products} onChange={onChange} />
    </div>
  );
}

export default MainPage;
