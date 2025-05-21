import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiArrowRight, FiDownload } from "react-icons/fi";
import "./Flooring.css";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import laminateImage from "./img/flooring/Red-laminate-floor-color-example-apr19.jpg";
import spcImage from "./img/flooring/Remarkable-Features-of-SPC-Flooring.webp";
import engineeredImage from "./img/flooring/Best-Engineered-Hardwood-Flooring-Brand-Reviews-Comparison-UK.jpg";

// Product images
import product1 from "./img/flooring/american-red-oak-flooring-500x500.webp";
import product2 from "./img/flooring/plain-wooden-flooring-500x500.webp";
import product3 from "./img/flooring/nordic-oak-wood-500x500.webp";
import product4 from "./img/flooring/oak-silver-pearl-wooden-flooring-1000x1000.webp";
import product5 from "./img/flooring/african-mahogany-solid-wooden-flooring-1000x1000.webp";
import product6 from "./img/flooring/russian-oak-wood-flooring-1000x1000.webp";
import product7 from "./img/flooring/oak-golden-pearl-interiors-decorative-flooring-1000x1000.webp";
import product8 from "./img/flooring/oak-wood-flooring-1000x1000.webp";
import product9 from "./img/flooring/sucupira-engineered-flooring-500x500.webp";
import product10 from "./img/flooring/mahagony-engineered-wood-flooring-1000x1000.webp";
import product11 from "./img/flooring/african-mahogany-engineered-wood-flooring-1000x1000.webp";
import product12 from "./img/flooring/american-walnut-engineered-flooring-1000x1000.webp";
import product13 from "./img/flooring/wooden-flooring-500x500.webp";
import product14 from "./img/flooring/cumaru-engineered-flooring-1000x1000.webp";
import product15 from "./img/flooring/canadian-maple-engineered-flooring-1000x1000.webp";
import product16 from "./img/flooring/ipe-wooden-decking-500x500.webp";
import product17 from "./img/flooring/ipe-wooden-flooring-500x500.webp";
import product18 from "./img/flooring/ipe-solid-exotic-wood-flooring-500x500.webp";

// PDF brochures
import p1 from "./img/flooring/american-red-oak-flooring.pdf";
import p2 from "./img/flooring/wooden-flooring.pdf";
import p9 from "./img/flooring/sucupira-engineered-flooring.pdf";
import p10 from "./img/flooring/santos-mahagony-engineered-wood-flooring.pdf";

const Flooring = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("oak");

  // Refs for category sections
  const categoryRefs = {
    oak: useRef(null),
    glossyEngineered: useRef(null),
    spcIpe: useRef(null),
  };

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

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    categoryRefs[category].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

  // Categories for navigation
  const categories = [
    {
      id: "oak",
      name: "Oak Flooring",
      image: laminateImage,
      description:
        "Premium oak flooring options for residential and commercial spaces",
    },
    {
      id: "glossyEngineered",
      name: "Glossy Engineered Flooring",
      image: engineeredImage,
      description: "High-quality engineered flooring with glossy finishes",
    },
    {
      id: "spcIpe",
      name: "SPC/IPE Flooring",
      image: spcImage,
      description: "Durable and waterproof flooring solutions",
    },
  ];

  // Products organized by category
  const products = {
    // Oak Flooring products
    product1: {
      id: "p1",
      name: "American Red Oak Flooring",
      price: "₹430 / sq ft",
      brochure: p1,
      image: product1,
      category: "oak",
      description:
        "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of American Red Oak Flooring. These products are tested as per the international standards of quality before it is delivered to our clients",
      details: [
        { label: "Wood Flooring Type", value: "Red Oak" },
        { label: "Usage/Application", value: "Indoor" },
        { label: "Color", value: "Red" },
        { label: "Layer Thickness", value: "0.6/2mm" },
        { label: "Usage", value: "Household, Commercial" },
        { label: "Tile Size", value: "500X500 mm" },
        { label: "Country of Origin", value: "USA" },
      ],
    },
    product2: {
      id: "p2",
      name: "Polished Plain Wooden Flooring",
      price: "₹100 / sq ft",
      brochure: p2,
      image: product2,
      category: "oak",
      description:
        "In our wide range of products, we are offering our customers best and elite quality assured array of Wooden Flooring. These products are designed with the use of modern machines and skills. These machines are tartan along side with many quality norms to keep it as per set quality norms. They are designed for flooring purpose. They are cost effective to buy too.",
      details: [
        { label: "Usage", value: "Household" },
        { label: "Thickness", value: "7 mm (±5%)" },
        { label: "Surface Finish", value: "Polished" },
        { label: "Material", value: "Wooden" },
        { label: "Total Weight", value: "5000g/m² (±5%)" },
        { label: "Tile Size", value: "50x50 cm" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product3: {
      id: "p3",
      name: "Brown Nordic Oak Wood",
      price: "₹650 / sq ft",
      image: product3,
      category: "oak",
      description:
        "Backed by a team of our professionals, we are trading, wholesaling and supplying an extensive array of Nordic Oak Wood.",
      details: [
        { label: "Length", value: "2 to 5 feet" },
        { label: "Color", value: "Brown" },
        { label: "Shape", value: "Rectangular, Square" },
        { label: "Grade", value: "Industrial" },
        { label: "Material", value: "Nordic Oak Wood" },
        { label: "Surface Treatment", value: "Color Plated" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product4: {
      id: "p4",
      name: "Oak Silver Pearl Wooden Flooring",
      price: "₹150 / sq ft",
      image: product4,
      category: "oak",
      description:
        "We are instrumental in offering the finest quality range of Oak Silver Pearl Wooden Flooring to our valuable clientele. These products are made at high-tech manufacturing unit that is settled with superior machinery and tools. To maintain the quality, our quality analysts check these products on diverse quality parameters. Moreover, these products are available in diverse specifications that meet on clients demand.",
      details: [
        { label: "Color", value: "Silver" },
        { label: "Usage/Application", value: "Residential" },
        { label: "Thickness", value: "12mm" },
        { label: "Finishing", value: "Polished" },
        {
          label: "Wood Flooring Type",
          value: "Oak Flooring, Balsamo Flooring",
        },
        { label: "Usage", value: "Household, Commercial" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product5: {
      id: "p5",
      name: "African Mahogany Solid Wooden Flooring",
      price: "₹455 / sq ft",
      image: product5,
      category: "oak",
      description:
        "Used widely in various luxury homes, resorts and hotels, the offered African Mahogany Solid Wooden Flooring is one of the most attractive flooring available in the market. Manufactured using the best quality wood and modernized equipment, the flooring offered is highly preferred in the market. Further, its long life, resistance to water and easy maintenance is highly praised in the market.",
      details: [
        { label: "Finish Type", value: "Glossy" },
        { label: "Color", value: "Wooden" },
        { label: "Usage/Application", value: "Indoor" },
        { label: "Usage", value: "Household, Commercial" },
        { label: "Thickness", value: "7–10 mm" },
        { label: "Material", value: "Solid Wood" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product6: {
      id: "p6",
      name: "Russian Oak Wood Flooring",
      price: "₹430 / sq ft",
      image: product6,
      category: "oak",
      description:
        "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Russian Oak Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price",
      details: [
        { label: "Usage/Application", value: "Residential" },
        { label: "Surface Finish", value: "Matte" },
        { label: "Color", value: "Black" },
        { label: "Function", value: "Anti-Static, Soundproof" },
        { label: "Thickness", value: "10 mm" },
        { label: "Material", value: "Wood" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product7: {
      id: "p7",
      name: "Oak Golden Pearl Interiors Decorative Flooring",
      price: "₹110 / sq ft",
      image: product7,
      category: "oak",
      description:
        "We are one of the leading organizations of Oak Golden Pearl Interiors Decorative Flooring that is developed using the highly developed technology and industry approved raw material that is sourced from reliable vendors of market. These products are highly admired in the market for their fine finish. Due to high demand, we offer",
      details: [
        { label: "Color", value: "Brown" },
        {
          label: "Wood Flooring Type",
          value: "Oak Golden Pearl Interiors Decorative Flooring",
        },
        { label: "Usage/Application", value: "Residential" },
        { label: "Surface Finish", value: "Glossy" },
        { label: "Finish", value: "Glossy" },
        { label: "Moisture Content", value: "8–12%" },
        { label: "Thickness", value: "8–15 mm" },
        { label: "Usage", value: "Household, Commercial" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product8: {
      id: "p8",
      name: "Oak Wood Flooring",
      price: "₹130 / sq ft",
      image: product8,
      category: "oak",
      description:
        "We are engaged in offering a wide range of Oak Wood Flooring to our clients. Our range of all products is widely appreciated by our clients Russian Oak Wood Flooring",
      details: [
        { label: "Wood Flooring Type", value: "Teak Wood" },
        { label: "Usage/Application", value: "Indoor" },
        { label: "Color", value: "Brown" },
        { label: "Finish", value: "Matte" },
        { label: "Wear Resistance", value: "Yes" },
        { label: "Stain Resistance", value: "Yes" },
        { label: "Thickness", value: "12–15 mm" },
        { label: "Material", value: "Wood" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },

    // Glossy Engineered Flooring products
    product9: {
      id: "p18",
      name: "Sucupira Glossy Engineered Flooring",
      price: "₹450 / sq ft",
      image: product9,
      brochure: p9,
      category: "glossyEngineered",
      description:
        "We are enlisted amongst the trusted names in the industry engaged in offering superb quality array of Jatoba Solid Wood. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
      details: [
        { label: "Thickness", value: "25 mm" },
        { label: "Usage/Application", value: "Residential" },
        { label: "Surface Finish", value: "Glossy" },
        { label: "Color", value: "Red" },
        { label: "Moisture Content", value: "7~9%" },
        { label: "Usage", value: "Household, Outdoor, Commercial, Sports" },
        {
          label: "Function",
          value: "Waterproof, Thermal Insulation, Anti-Static, Soundproof",
        },
      ],
    },
    product10: {
      id: "p10",
      name: "Mahogany Glossy Engineered Flooring",
      price: "₹385 / sq ft",
      brochure: p10,
      image: product10,
      category: "glossyEngineered",
      description:
        "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Santos Mahagony Engineered Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
      details: [
        { label: "Building Style", value: "Ground Floor" },
        { label: "Finishing", value: "Polished" },
        { label: "Color", value: "Brown" },
        { label: "Thickness", value: "12 mm" },
        { label: "Material", value: "Wood" },
        { label: "Deck Flooring Area", value: "Home" },
        { label: "Surface Finish", value: "Glossy" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product11: {
      id: "p11",
      name: "African Mahogany Glossy Engineered Flooring",
      price: "₹530 / sq ft",
      image: product11,
      category: "glossyEngineered",
      brochure: p9,
      description:
        "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of African Mahogany Engineered Wood Flooring. These products are tested as per the international standards of quality before it is delivered to our clients.",
      details: [
        { label: "Type of Wood Plank", value: "African Mahogany" },
        { label: "Wear Resistance", value: "Yes" },
        { label: "Thickness", value: "5-15 mm" },
        { label: "Material", value: "Solid Wood" },
        { label: "Function", value: "Waterproof, Thermal Insulation" },
        { label: "Moisture Content", value: "9-12%" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product12: {
      id: "p12",
      name: "Polished Glossy Engineered Flooring",
      price: "₹385 / sq ft",
      brochure: p10,
      image: product12,
      category: "glossyEngineered",
      description:
        "We are enlisted amongst the trusted names in the industry engaged in offering a superb quality array of American Walnut Engineered Flooring. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
      details: [
        { label: "Thickness", value: "7 mm" },
        { label: "Tile Size", value: "50cm x 50cm" },
        { label: "Pile Height", value: "3.2/4.0mm ± 5%" },
        { label: "Usage", value: "Indoor, Outdoor" },
        { label: "Finishing", value: "Glossy, Polished" },
        { label: "Wood Flooring Type", value: "Walnut Flooring" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product13: {
      id: "p13",
      name: "Jatoba Glossy Engineered Flooring",
      price: "₹550 / sq ft",
      image: product13,
      category: "glossyEngineered",
      brochure: p9,
      description:
        "Our company is highly rated in providing Jatoba Engineered Flooring to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
      details: [
        { label: "Pile Height", value: "2.5mm-5mm" },
        { label: "Thickness", value: "14 mm" },
        { label: "Pile Weight", value: "21oz/yd²" },
        { label: "Tile Size", value: "25 x 100 cm" },
        { label: "Usage", value: "Outdoor, Household" },
        { label: "Features", value: "Eco-friendly" },
        { label: "Material", value: "Wood" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product14: {
      id: "p14",
      name: "Cumaru Glossy Engineered Flooring",
      price: "₹450 / sq ft",
      image: product14,
      category: "glossyEngineered",
      brochure: p10,
      description:
        "Our company is highly rated in providing Cumaru Engineered Flooirng to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
      details: [
        { label: "Brand", value: "Annapurna" },
        { label: "Color", value: "Brown" },
        { label: "Wood Flooring Type", value: "Teak Wood" },
        { label: "Usage/Application", value: "Indoor" },
        { label: "Stain Resistance", value: "Yes" },
        { label: "Coverage Area", value: "Customize" },
        { label: "Minimum Order Quantity", value: "500 sq ft" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product15: {
      id: "p15",
      name: "Canadian Maple Glossy Engineered Flooring",
      price: "₹450 / sq ft",
      brochure: p10,
      image: product15,
      category: "glossyEngineered",
      description:
        "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Canadian Maple Engineered Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
      details: [
        { label: "Thickness", value: "7 mm" },
        { label: "Total Weight", value: "5000 g/m²" },
        { label: "Tile Size", value: "50cm x 50cm" },
        {
          label: "Size Available",
          value: "199x1218 mm, 170x1218 mm, 148x808 mm",
        },
        { label: "Core Board", value: "MDF, HDF optional" },
        { label: "Surface Finish", value: "Glossy" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },

    // SPC/IPE Flooring products
    product16: {
      id: "p16",
      name: "IPE Wooden Decking",
      price: "₹315 / sq ft",
      image: product16,
      category: "spcIpe",
      description:
        "Used widely in various luxury homes, resorts and hotels, the offered IPE Decking is one of the most attractive flooring available in the market. Manufactured using the best quality wood and modernized equipment, the flooring offered is highly preferred in the market. Further, its long life, resistance to water and easy maintenance is highly praised in the market.",
      details: [
        { label: "Color", value: "Brown" },
        { label: "Usage/Application", value: "Outdoor" },
        { label: "Finish", value: "Matte, Glossy" },
        { label: "Deck Material", value: "IPE" },
        { label: "Grade", value: "Industrial" },
        { label: "Length", value: "2 to 5 feet" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product17: {
      id: "p17",
      name: "IPE Wooden Flooring",
      price: "₹455 / sq ft",
      image: product17,
      category: "spcIpe",
      description:
        "We specialize in processing a stylish range of IPE. Extremely rugged in design and has a very graceful look which adds to the beauty, this flooring is designed at vendors' end using optimum quality basic material and advanced technology. Our quality experts test this flooring on various parameters. Apart from this, offered flooring is available in variegated designs, in order to meet varied demands of clients.",
      details: [
        { label: "Wear Resistance", value: "Yes" },
        { label: "Finishing", value: "Polished" },
        { label: "Thickness", value: "12-20 mm" },
        { label: "Moisture", value: "7-9%" },
        { label: "Pattern", value: "Wood Grain" },
        { label: "Usage", value: "Household" },
        { label: "Country of Origin", value: "Not Specified" },
      ],
    },
    product18: {
      id: "p18",
      name: "IPE Solid Exotic Wood Flooring",
      price: "₹390 / sq ft",
      image: product18,
      category: "spcIpe",
      description:
        "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of IPE Solid Exotic Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
      details: [
        { label: "Wear Resistance", value: "Yes" },
        { label: "Color", value: "Brown" },
        { label: "Material", value: "Solid Wood" },
        { label: "Finish", value: "Finishing" },
        { label: "Thickness", value: "4-18 mm" },
        { label: "Usage", value: "Household, Commercial" },
        { label: "Country of Origin", value: "Not Specified" },
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
      <div className="flooring-product-card" data-aos="fade-up">
        <div className="flooring-product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="flooring-product-image"
          />
        </div>
        <div className="flooring-product-content">
          <h3 className="flooring-product-title">{product.name}</h3>
          <div className="flooring-product-price">{product.price}</div>
          <div className="flooring-product-description-container">
            <p className="flooring-product-description">
              {product.description}
            </p>
          </div>
          <div className="flooring-product-details-container">
            <ul className="flooring-product-details">
              {product.details.map((detail, index) => (
                <li key={index}>
                  <span className="flooring-detail-label">{detail.label}:</span>{" "}
                  <span className="flooring-detail-value">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flooring-product-actions">
            <button
              className="flooring-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote <FiArrowRight className="flooring-button-icon" />
            </button>
            {product.brochure && (
              <button
                className="flooring-brochure-button"
                onClick={() => downloadBrochure(product.name)}
              >
                <FiDownload className="flooring-button-icon" /> Brochure
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Filter products by category
  const getProductsByCategory = (category) => {
    return Object.keys(products).filter(
      (key) => products[key].category === category
    );
  };

  return (
    <div className="flooring-component">
      {/* Hero Banner Section */}
      <section className="flooring-hero-section">
        <img
          src={heroImage}
          alt="Premium Flooring Solutions"
          className="flooring-hero-image"
        />
        <div className="flooring-hero-overlay">
          <div className="flooring-hero-content">
            <h1 data-aos="fade-up">Premium Flooring Collections</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              High-quality flooring options for every space
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="flooring-container">
        <h2 className="flooring-section-title" data-aos="fade-up">
          Explore Our Flooring Range
        </h2>
        <div className="flooring-category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`flooring-category-item ${
                activeCategory === category.id ? "active" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => scrollToCategory(category.id)}
            >
              <div className="flooring-category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="flooring-category-image"
                />
              </div>
              <div className="flooring-category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((category) => (
        <section
          key={category.id}
          className="flooring-product-section"
          ref={categoryRefs[category.id]}
        >
          <div className="flooring-container">
            <h2 className="flooring-section-title" data-aos="fade-up">
              {category.name}
            </h2>
            <div className="flooring-product-grid">
              {getProductsByCategory(category.id).map((productKey) =>
                renderProductCard(productKey)
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="flooring-modal-overlay">
          <div className="flooring-modal-content">
            <button className="flooring-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="flooring-modal-left">
              <div className="flooring-product-info">
                <div className="flooring-modal-image-container">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="flooring-modal-product-image"
                  />
                </div>
                <h3 className="flooring-modal-product-title">
                  {currentProduct.name}
                </h3>
                <div className="flooring-modal-price">
                  {currentProduct.price}
                </div>
                <div className="flooring-modal-description-container">
                  <p className="flooring-modal-description">
                    {currentProduct.description}
                  </p>
                </div>
                <div className="flooring-modal-specs-container">
                  <ul className="flooring-modal-specs">
                    {currentProduct.details.map((detail, index) => (
                      <li key={index}>
                        <span className="flooring-modal-spec-label">
                          {detail.label}:
                        </span>{" "}
                        <span className="flooring-modal-spec-value">
                          {detail.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flooring-modal-right">
              <div className="flooring-contact-form">
                <h3 className="flooring-contact-title">Request a Quote</h3>
                <p className="flooring-contact-message">
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
                  <div className="flooring-form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={myFormik.values.phone}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="flooring-form-input"
                    />
                  </div>
                  <div className="flooring-form-group">
                    <label htmlFor="user-email">Email*</label>
                    <input
                      type="email"
                      id="user-email"
                      name="email"
                      value={myFormik.values.email}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your email address"
                      className="flooring-form-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flooring-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </form>
                {currentProduct.brochure && (
                  <button
                    className="flooring-modal-brochure-button"
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

export default Flooring;
