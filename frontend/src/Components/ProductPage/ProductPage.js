import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import axios from "axios";

const initialProducts = [];


const ProductPage = ({ addToCart }) => {
    const [products, setProducts] = useState(initialProducts);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const viewProductDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div>
            <div className="product-container">
                <h2>Our Products</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product._id} className="product-card">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                onClick={() => viewProductDetails(product._id)}
                                style={{ cursor: 'pointer' }}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Rs.{product.price.toFixed(2)}</p>
                            <p className={product.stock === 0 ? "out-of-stock" : "in-stock"}>
                                {product.stock > 0 ? `Stock: ${product.stock}` : "Out of Stock"}
                            </p>
                            <button onClick={() => addToCart(product)} className="add-cart" disabled={product.stock === 0}>
                                {product.stock > 0 ? "Add to Cart" : "Sold Out"}
                            </button>
                            <button className="buy-now" disabled={product.stock === 0}>
                                {product.stock > 0 ? "Buy Now" : "Sold Out"}
                            </button>
                            <a 
                                href={`/feedback?product=${encodeURIComponent(product.name)}`} 
                                className="feedback-link"
                            >
                                Feedback
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;