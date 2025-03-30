import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                navigate("/products");
            }
        };
        fetchProduct();
    }, [id, navigate]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <Nav />
            <div className="product-detail-container">
                <div className="product-detail-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-detail-info">
                    <h1>{product.name}</h1>
                    <p className="price">Rs.{product.price.toFixed(2)}</p>
                    <p className="description">{product.description}</p>
                    <p className={product.stock === 0 ? "out-of-stock" : "in-stock"}>
                        {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                    </p>
                    <div className="product-actions">
                        <button className="add-cart" disabled={product.stock === 0}>
                            {product.stock > 0 ? "Add to Cart" : "Sold Out"}
                        </button>
                        <button className="buy-now" disabled={product.stock === 0}>
                            {product.stock > 0 ? "Buy Now" : "Sold Out"}
                        </button>
                    </div>
                    <a 
                        href={`/feedback?product=${encodeURIComponent(product.name)}`} 
                        className="feedback-link"
                    >
                        Leave Feedback
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;