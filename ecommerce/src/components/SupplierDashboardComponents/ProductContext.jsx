// ProductContext.js
import React, { createContext, useState, useEffect, useMemo } from 'react';
import { axiosInstance_2 } from "../../store/APi/axiosInstance";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // pagination support 
  const [TotalProduct, setTotalProduct] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
          // const res = await axiosInstance_2.get(`/seller/all-product?page=${page}&limit=5`,
         const res = await axiosInstance_2.get(`/seller/all-product`,
                { withCredentials: true }
              );
              console.log("product fetch sucessfull",res.data);
              console.log(res.data.TotalProduct);
              
              setProducts(res.data.data || []);
              setTotalProduct(res.data.TotalProduct);
            
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page]); // 'page' बदलने पर फिर से fetch होगा
  

  // Context value जिसे सभी components access कर सकते हैं
  const contextValue = useMemo(() => ({
    products,
    loading,
    setPage, // अगर आप Dashboard से pagination control करना चाहें
    productCount: products.length,
    TotalProduct,
  }), [products, loading, TotalProduct]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};