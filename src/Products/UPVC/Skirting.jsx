import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiArrowRight, FiDownload } from "react-icons/fi";
import "./Skirting.css";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import product1 from "./img/skirting/new_img.webp";
// import product1 from "./img/skirting/aluminum-screw-on-skirting-1000x1000.webp";
import product2 from "./img/skirting/easy-fix-modular-skirting-500x500.webp";
import product3 from "./img/skirting/aluminium door.jpg";
import product4 from "./img/skirting/aluminum-stuck-on-skirting-500x500.webp";
import product5 from "./img/skirting/profiles-for-floor-pvc-edge-profile-1000x1000.webp";
import product6 from "./img/skirting/aluminum-stair-edging-500x500.webp";
import product7 from "./img/skirting/anodized-aluminum-profile-500x500.webp";

// PDF brochures
import p9 from "./img/skirting/modular-skirting-illusion-recessed.pdf";
import p10 from "./img/skirting/AIDF Company Profile_new.pdf";

const Skirting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const myFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      price: "",
      height: "",
      material: "",
      finish: "",
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await axios.post(
          `https://aidf-backend-vite.onrender.com/submit-quote`,
          values
        );
        myFormik.resetForm();
        toast.success("Request Submitted Successfully");
        closeModal();
      } catch (err) {
        toast.error("Error While Submitting Request");
        console.error("Submission error:", err);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const downloadBrochure = (productName) => {
    const productKey = Object.keys(products).find(
      (key) => products[key].name === productName
    );

    if (productKey && products[productKey].brochure) {
      window.open(products[productKey].brochure, "_blank");
    } else {
      toast.error("Brochure not available for this product");
    }
  };

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setFieldValue("name", currentProduct.name);
      myFormik.setFieldValue("price", currentProduct.price);

      const heightDetail = currentProduct.details.find(
        (d) => d.label === "Height"
      );
      const materialDetail = currentProduct.details.find(
        (d) => d.label === "Material"
      );
      const finishDetail = currentProduct.details.find(
        (d) => d.label === "Finish"
      );

      myFormik.setFieldValue("height", heightDetail ? heightDetail.value : "");
      myFormik.setFieldValue(
        "material",
        materialDetail ? materialDetail.value : ""
      );
      myFormik.setFieldValue("finish", finishDetail ? finishDetail.value : "");
    }
  }, [isModalOpen, currentProduct]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      once: true,
    });
  }, []);

  const products = {
    product1: {
      id: 1,
      name: "Aluminum Screw On Skirting",
      price: "₹120 / sq ft",
      image: product1,
      brochure: p9,
      description:
        "Flat-shaped aluminum skirting with anodised finish, ideal for interior construction use.",
      details: [
        { label: "Shape", value: "Flat" },
        { label: "Dimensions", value: "50mm, 75mm & 100mm" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Material", value: "Aluminum" },
        { label: "Finish", value: "Anodised" },
        { label: "Anodised", value: "Yes" },
        { label: "Position", value: "Interior" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Weight", value: "900 Gram" },
        { label: "Minimum Order Quantity", value: "20 sq ft" },
      ],
    },
    product2: {
      id: 2,
      name: "Easy Fix Modular Skirting",
      price: "₹1200 / Piece",
      image: product2,
      brochure: p9,
      description:
        "Designed to be installed on wall, gypsum and plywood partitions and on top of all kinds of flooring.",
      details: [
        { label: "Thickness", value: "12 mm" },
        { label: "Surface Finish", value: "Polish" },
        { label: "Finish", value: "Glossy" },
        { label: "Height", value: "50–150 mm" },
        { label: "Material", value: "PVC" },
        { label: "Length", value: "3048 mm" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product3: {
      id: 3,
      name: "Aluminium Door Profiles",
      price: "₹200 / sq ft",
      image: product3,
      brochure: p10,
      description:
        "Durable aluminium door profiles with smooth surface treatment, suitable for both interior and exterior industrial applications.",
      details: [
        { label: "Usage/Application", value: "Industrial" },
        { label: "Shape", value: "Angle" },
        { label: "Position", value: "Interior, Exterior" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Color", value: "Multi Color" },
        { label: "Surface Treatment", value: "Smooth" },
      ],
    },
    product4: {
      id: 4,
      name: "Aluminum Stuck On Skirting",
      price: "₹350 / Piece",
      image: product4,
      description:
        "AIDF Matt Silver Finish 80 mm Aluminum Skirting SK-80 is ideal to cover any types of wall base to protect from foot scratches and is also designed with a sit on toe to conceal any gaps between the joint of a wall and any type of floor covering thereby providing a neat finish on the joint. It is installed using a special adhesive for permanent and neat fixing.",
      details: [
        { label: "Shape", value: "T Slot Profile" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Material", value: "Aluminum" },
        { label: "Finish", value: "Matt Silver Finish" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Color", value: "Silver" },
        { label: "Length", value: "80 mm" },
        {
          label: "Application",
          value: "Furniture, Windows & Doors, Decorations",
        },
      ],
    },
    product5: {
      id: 5,
      name: "Profiles For Floor PVC Edge Profile",
      price: "₹150 / Kg",
      image: product5,
      description:
        "PVC Edge Profile to be used with floorings up to 5mm thick.",
      details: [
        { label: "Design", value: "Customized" },
        { label: "Material", value: "PVC" },
        { label: "Usage/Application", value: "Home, Office" },
        { label: "Thickness", value: "10 mm" },
        { label: "Length", value: "2800 mm" },
        { label: "Usage", value: "Household, Commercial" },
      ],
    },
    product6: {
      id: 6,
      name: "Aluminum Stair Nose",
      price: "₹120 / Piece",
      image: product6,
      description:
        "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
      details: [
        { label: "Brand", value: "Annupurana" },
        { label: "Length", value: "2.44-3.0 m" },
        { label: "Material", value: "Aluminum" },
        { label: "Color", value: "Silver" },
        { label: "Finish", value: "Mill Finish Mat Silver" },
        { label: "Tensile Strength", value: "160 MPa" },
      ],
    },
    product7: {
      id: 7,
      name: "Anodized Aluminum Profile",
      price: "₹170 / Kg",
      brochure: p10,
      image: product7,
      description:
        "This one-piece carpet profile is to make a smooth and safe transition between carpet and different types of hard floorings. The design of the profile secures and conceals the flooring thus providing a smooth finish and also protecting the edge of the floorings. The carpet is fitted into the profile and then the top is flattened to provide a secure fit. These trims are commonly used at door interfaces to provide a smooth and safe transition.",
      details: [
        { label: "Usage/Application", value: "Interiors" },
        { label: "Shape", value: "Flat" },
        { label: "Dimensions", value: "28mm" },
        { label: "Width", value: "28mm" },
        { label: "Surface Finishing", value: "Plain" },
        { label: "Position", value: "Interior" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Brand", value: "AIDF" },
        { label: "Material", value: "Aluminum" },
        { label: "Is It Anodised", value: "Anodised" },
        { label: "Minimum Order Quantity", value: "50 Kg" },
      ],
    },
  };

  const openModal = (productKey) => {
    setCurrentProduct(products[productKey]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const renderProductCard = (productKey) => {
    const product = products[productKey];
    return (
      <div className="skirting-product-card" data-aos="fade-up">
        <div className="skirting-product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="skirting-product-image"
          />
        </div>
        <div className="skirting-product-content">
          <h3 className="skirting-product-title">{product.name}</h3>
          <div className="skirting-product-price">{product.price}</div>
          <div className="skirting-product-description-container">
            <p className="skirting-product-description">
              {product.description}
            </p>
          </div>
          <div className="skirting-product-details-container">
            <ul className="skirting-product-details">
              {product.details.map((detail, index) => (
                <li key={index}>
                  <span className="skirting-detail-label">{detail.label}:</span>{" "}
                  <span className="skirting-detail-value">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="skirting-product-actions">
            <button
              className="skirting-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote <FiArrowRight className="skirting-button-icon" />
            </button>
            {product.brochure && (
              <button
                className="skirting-brochure-button"
                onClick={() => downloadBrochure(product.name)}
              >
                <FiDownload className="skirting-button-icon" /> Brochure
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="skirting-component">
      {/* Hero Banner Section */}
      <section className="skirting-hero-section">
        <img
          src={heroImage}
          alt="Premium Skirting Solutions"
          className="skirting-hero-image"
        />
        <div className="skirting-hero-overlay">
          <div className="skirting-hero-content">
            <h1 data-aos="fade-up">Aluminum Profile and Skirtings</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Premium quality aluminum profiles for all your construction needs
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="skirting-product-section">
        <div className="skirting-container">
          <h2 className="skirting-section-title" data-aos="fade-up">
            Our Skirting Products
          </h2>
          <p
            className="skirting-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            High-quality aluminum profiles for various applications
          </p>
          <div className="skirting-product-grid">
            {Object.keys(products).map((productKey) =>
              renderProductCard(productKey)
            )}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="skirting-modal-overlay">
          <div className="skirting-modal-content">
            <button className="skirting-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="skirting-modal-left">
              <div className="skirting-product-info">
                <div className="skirting-modal-image-container">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="skirting-modal-product-image"
                  />
                </div>
                <h3 className="skirting-modal-product-title">
                  {currentProduct.name}
                </h3>
                <div className="skirting-modal-price">
                  {currentProduct.price}
                </div>
                <div className="skirting-modal-description-container">
                  <p className="skirting-modal-description">
                    {currentProduct.description}
                  </p>
                </div>
                <div className="skirting-modal-specs-container">
                  <ul className="skirting-modal-specs">
                    {currentProduct.details.map((detail, index) => (
                      <li key={index}>
                        <span className="skirting-modal-spec-label">
                          {detail.label}:
                        </span>{" "}
                        <span className="skirting-modal-spec-value">
                          {detail.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="skirting-modal-right">
              <div className="skirting-contact-form">
                <h3 className="skirting-contact-title">Request a Quote</h3>
                <p className="skirting-contact-message">
                  We'll contact you shortly with the quote details
                </p>
                <form onSubmit={myFormik.handleSubmit}>
                  <input
                    type="hidden"
                    name="name"
                    value={currentProduct.name}
                  />
                  <input
                    type="hidden"
                    name="price"
                    value={currentProduct.price}
                  />
                  <div className="skirting-form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={myFormik.values.phone}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="skirting-form-input"
                    />
                  </div>
                  <div className="skirting-form-group">
                    <label htmlFor="user-email">Email*</label>
                    <input
                      type="email"
                      id="user-email"
                      name="email"
                      value={myFormik.values.email}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your email address"
                      className="skirting-form-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="skirting-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </form>
                {currentProduct.brochure && (
                  <button
                    className="skirting-modal-brochure-button"
                    onClick={() => downloadBrochure(currentProduct.name)}
                  >
                    <FiDownload /> Download Brochure
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Skirting;
