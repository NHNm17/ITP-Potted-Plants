import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import axios from "axios";

const initialProducts = [
    { id: 1, name: "FingerPlam", price: 800.00, stock: 110, image: "fingerplam.jpg" },
    { id: 2, name: "Hoya Plant", price: 700.00, stock: 80, image: "hoyaplant.jpg" },
    { id: 3, name: "Cactus Birthday Pot", price: 1500.00, stock: 55, image: "cactus.jpg" },
    { id: 4, name: "Elastica Plant", price: 500.00, stock: 95, image: "elasticaplant.jpg" },
    { id: 1, name: "Spider Plant", price: 600.00, stock: 200, image: "spider plant.jpg" },
    { id: 2, name: "Bonsai Nuga Plant", price: 1800.00, stock: 154, image: "Nuga plant.jpg" },
    { id: 3, name: "Z-Z Plant", price: 1000.00, stock: 75, image: "zzplant.jpg" },
    { id: 4, name: "Money Plant(Pothas)", price: 500.00, stock: 40, image: "moneyplant.jpg" },
];

const ProductPage = () => {
    const [products, setProducts] = useState([initialProducts]);
    const [noteContent, setNoteContent] = useState("");
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
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

    const handleAddNote = (product) => {
        setSelectedProduct(product);
        setShowNoteModal(true);
    };

    const submitNote = async () => {
        // Validation: No special characters or lowercase letters
        const forbiddenChars = /[@#$%^&*()a-z]/;
        if (forbiddenChars.test(noteContent)) {
            alert("Notes cannot contain special characters (@,#,$,%,^,&,*,(,)) or lowercase letters.");
            return;
        }

        try {
            await axios.post(`http://localhost:5000/api/products/${selectedProduct._id}/notes`, {
                content: noteContent
            });
            setShowNoteModal(false);
            setNoteContent("");
            
            // Refresh products to show the new note
            const response = await axios.get("http://localhost:5000/api/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    const viewProductDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div>
            <Nav />
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
                            <button 
                                className="add-note" 
                                onClick={() => handleAddNote(product)}
                            >
                                Add a Note
                            </button>
                            <button className="add-cart" disabled={product.stock === 0}>
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

            {/* Note Modal */}
            {showNoteModal && (
                <div className="modal-overlay">
                    <div className="note-modal">
                        <h3>Add Note for {selectedProduct.name}</h3>
                        <textarea
                            value={noteContent}
                            onChange={(e) => setNoteContent(e.target.value)}
                            placeholder="Enter your note (no special characters or lowercase letters)"
                        />
                        <div className="modal-buttons">
                            <button onClick={submitNote}>Submit</button>
                            <button onClick={() => setShowNoteModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ProductPage;