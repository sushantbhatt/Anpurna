import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiArrowRight, FiDownload } from "react-icons/fi";
import "./Carpet.css";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import wallToWallImage from "./img/carpet/wall-to-wall-gold-patterned-carpet-blue-wall.jpg";
import carpetTileImage from "./img/carpet/welspun-carpet-tiles-500x500.webp";

// Product images
import product1 from "./img/carpet/app1-500x500.webp";
import product2 from "./img/carpet/trump.webp";
import product3 from "./img/carpet/auditorium-carpet-500x500.webp";
import product4 from "./img/carpet/cut-pile-carpet-1000x1000.webp";
import product5 from "./img/carpet/banquet-carpets-500x500.webp";
import product6 from "./img/carpet/home-theater-carpet-500x500.webp";
import product7 from "./img/carpet/carpets-for-media-room-500x500.webp";
import product8 from "./img/carpet/carpet-rolls-foam-for-theater-auditorium-500x500.webp";
import product9 from "./img/carpet/epoxy-flooring-services-500x500.webp";
import product10 from "./img/carpet/harmony-carpet-500x500.webp";
import product11 from "./img/carpet/luxury-carpets-500x500.webp";
import product13 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
import product14 from "./img/carpet/carpet-tile.webp";
import product15 from "./img/carpet/loop-pile-carpet-500x500.webp";
import product16 from "./img/carpet/loop-pile-carpets.webp";
import product17 from "./img/carpet/nylon-carpet-500x500.webp";
import product18 from "./img/carpet/runway-loop-pile-carpet-500x500.webp";

// PDF brochures
import p13 from "./img/carpet/welspun-carpet-tiles.pdf";
import p14 from "./img/carpet/carpet-tile.pdf";
import p15 from "./img/carpet/loop-pile-carpet.pdf";

const Carpet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Refs for category sections
  const categoryRefs = {
    wallToWall: useRef(null),
    carpetTile: useRef(null),
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

      const height = currentProduct.details.find(
        (d) => d.label === "Thickness"
      );
      const material = currentProduct.details.find(
        (d) => d.label === "Material"
      );
      const finish = currentProduct.details.find((d) => d.label === "finsih");

      myFormik.setFieldValue("height", height ? height.value : "");
      myFormik.setFieldValue("material", material ? material.value : "");
      myFormik.setFieldValue("finish", finish ? finish.value : "");
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
      id: "wallToWall",
      name: "Wall to Wall Carpet",
      image: wallToWallImage,
      description:
        "Premium quality wall-to-wall carpets for residential and commercial spaces",
    },
    {
      id: "carpetTile",
      name: "Carpet Tile",
      image: carpetTileImage,
      description:
        "Modular carpet tiles for flexible and durable flooring solutions",
    },
  ];

  // Products organized by category
  const products = {
    // Wall to Wall Carpet products
    product1: {
      id: "p1",
      name: "Wall to Wall Carpet Product",
      price: "₹105 / Square feet",
      image: product1,
      category: "wallToWall",
      description:
        "Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.",
      details: [
        {
          label: "Product Details",
          value: "N/A",
        },
      ],
    },
    product2: {
      id: "p2",
      name: "Trump Carpet flooring",
      price: "₹130 / Square feet",
      image: product2,
      category: "wallToWall",
      description:
        "Backed with a group of highly talented experts, we are providing wide range of Trump Carpet. These products are developed by vendors using top quality raw material and new techniques. All our products meet with industry standards. Strong in nature our products are highly applauded in market for their features.",
      details: [
        { label: "Pile Height", value: "12mm" },
        { label: "Material", value: "Polyester" },
        { label: "Size", value: "6x7 Feet" },
        { label: "Material Type", value: "Polyester" },
        { label: "Wash Type", value: "Hand Wash" },
        { label: "Thickness", value: "5-8 mm" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product3: {
      id: "p3",
      name: "Polyester Multicolor Auditorium Carpet Flooring",
      price: "₹82 / Square feet",
      image: product3,
      category: "wallToWall",
      description:
        "We are engaged in offering a wide range of Auditorium Carpet Flooring to our clients. Our range of all products is widely appreciated by our clients.",
      details: [
        { label: "Usage/Application", value: "Auditorium" },
        { label: "Material", value: "Polypropylene" },
        { label: "Packaging Type", value: "Roll" },
        {
          label: "Usage",
          value:
            "Beach Tent, Party, Traditional, Advertising Tent, Wedding, Military, Event, Sports",
        },
        { label: "Length", value: "10-20 Mtr" },
        { label: "Thickness", value: "9 mm" },
      ],
    },
    product4: {
      id: "p4",
      name: "Cut Pile Carpet",
      price: "₹120 / sq ft",
      image: product4,
      category: "wallToWall",
      description:
        "We are one of the reputed firms of Cut Pile Carpet. Our products are completed using the top quality raw material that is sourced from trustworthy vendors of market. The most modern machines are used to give soft finishing in the product. These products are checked by industry experts. Owing beautiful designs, these products are widely praised in industry. Our products are highly strong and sturdy in nature.",
      details: [
        { label: "Usage/Application", value: "Floor" },
        { label: "Color", value: "Red" },
        { label: "Usage", value: "Commercial" },
        { label: "Dimension", value: "4 Meter X 30 Meter" },
        { label: "Thickness", value: "10 mm" },
      ],
    },
    product5: {
      id: "p5",
      name: "Banquet Carpets",
      price: "₹110 / sq ft",
      image: product5,
      category: "wallToWall",
      description:
        "We are engaged in offering a wide range of Banquet Carpets to our clients. Our range of all products is widely appreciated by our clients.",
      details: [
        { label: "Color", value: "Brown" },
        { label: "Technique", value: "Handloom" },
        { label: "Material", value: "Polyester" },
        { label: "Thickness", value: "4-6 mm" },
        { label: "Length", value: "30 m" },
        {
          label: "Usage",
          value:
            "Home, Decoration, Commercial, Hotel, Outdoor, Bath, Prayer, Tapestry, Exercise",
        },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product7: {
      id: "p7",
      name: "Home Theater Carpet",
      price: "₹83 / sq ft",
      image: product6,
      category: "wallToWall",
      description:
        "We are engaged in offering a wide range of Home Theater Carpet to our clients. Our range of all products is widely appreciated by our clients",
      details: [
        { label: "Color", value: "Red" },
        { label: "Thickness", value: "12 mm" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Usage/Application", value: "Home" },
        { label: "Size", value: "2000 sq ft" },
        { label: "Shape", value: "Rectangular" },
        { label: "Material", value: "Nylon" },
      ],
    },
    product8: {
      id: "p8",
      name: "Carpets For Media Room",
      price: "₹82 / sq ft",
      image: product7,
      category: "wallToWall",
      description:
        "We are engaged in offering a wide range of Carpets For Media Room to our clients. Our range of all products is widely appreciated by our clients.",
      details: [
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Red" },
        { label: "Shape", value: "Custom" },
        { label: "Thickness", value: "10 - 12 mm" },
        { label: "Pattern", value: "Printed" },
        { label: "Wash Type", value: "Machine Wash" },
        { label: "Material", value: "Polyester" },
      ],
    },
    product9: {
      id: "p9",
      name: "Wall To Wall Floor Carpets",
      price: "₹108 / sq ft",
      image: product8,
      category: "wallToWall",
      description:
        "We offer premium quality Wall To Wall Floor Carpets designed specifically for hotel applications. These carpets provide both aesthetics and durability, ideal for large-scale installations.",
      details: [
        { label: "Usage/Application", value: "Hotel" },
        { label: "Color", value: "Red" },
        { label: "Brand", value: "Indian" },
        { label: "Minimum Order Quantity", value: "1000 sq ft" },
        { label: "Weight", value: "800 gram" },
      ],
    },
    product10: {
      id: "p10",
      name: "Printed Carpet",
      price: "₹101 / sq ft",
      image: product9,
      category: "wallToWall",
      description:
        "Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.",
      details: [],
    },
    product11: {
      id: "p11",
      name: "Polyester Harmony Carpet",
      price: "₹100 / sq ft",
      image: product10,
      category: "wallToWall",
      description:
        "Our company is a renowned supplier of Harmony Carpet. These products are highly applauded in the market due to their long life, superior finish, and attractive look. Sourced from reliable vendors, we offer these carpets at affordable prices.",
      details: [
        { label: "Usage/Application", value: "Home" },
        { label: "Color", value: "Green" },
        { label: "Pattern", value: "Plain" },
        { label: "Material", value: "Polyester" },
        { label: "Thickness", value: "2-5 mm" },
        { label: "Stain Resistent", value: "Yes" },
      ],
    },
    product12: {
      id: "p12",
      name: "Rectangular Polyester Printed Luxury Carpets",
      price: "₹100 / sq ft",
      image: product11,
      category: "wallToWall",
      description:
        "We are engaged in offering a wide range of Luxury Carpets to our clients. Our range of all products is widely appreciated by our clients",
      details: [
        { label: "Design", value: "Printed" },
        { label: "Color", value: "Red" },
        { label: "Usage/Application", value: "Home" },
        { label: "Shape", value: "Rectangular" },
        { label: "Material", value: "Polyester" },
        { label: "Pattern", value: "Printed" },
        { label: "Usage", value: "Decoration, Commercial, Hotel" },
        { label: "Thickness", value: "7-11 mm" },
        { label: "Minimum Order Quantity", value: "100 sq ft" },
      ],
    },
    // Carpet Tile products
    product13: {
      id: "p13",
      name: "Nylon Matte Carpet Tiles",
      price: "₹120 / sq ft",
      image: product13,
      category: "carpetTile",
      brochure: p13,
      description:
        "Design- BroadcastColorMidnightile Size50 x 50 cmMaterialNylonFinishMatteTile Thickness5-6 mmBox Contains(No of Pieces):11Usage/ApplicationOffice FlooringBrand NameWelspunColorMidnightPatternFloralIs It Water ResistanceWater ResistanceNumber Of Piece In A Box11Carpet TypefloralSpecific Usage AreaHallPackaging TypeboxDesignstandardBox Contain11ShapeSquareChemical ResistanceNoCountry of OriginMade in India.",
      details: [
        { label: "Tile Size", value: "50 x 50 cm" },
        { label: "Material", value: "Nylon" },
        { label: "Tile Thickness", value: "5-6 mm" },
        { label: "Finish", value: "Matte" },
        { label: "Box Contains", value: "11 pieces" },
        { label: "Usage/Application", value: "Office Flooring" },
        { label: "Color", value: "Midnight" },
        { label: "Brand Name", value: "Welspun" },
        { label: "Pattern", value: "Floral" },
        { label: "Is It Water Resistance", value: "Yes" },
      ],
    },
    product14: {
      id: "p14",
      name: "Nylon or Polypropylene Multicolour Floor Carpet Tiles",
      price: "₹110 / sq ft",
      image: product14,
      brochure: p14,
      category: "carpetTile",
      description:
        "We are engaged in offering a wide range of Floor Carpet Tiles to our clients. These multicolour tiles, made from Nylon or Polypropylene, are known for their durability, elegant polish, and suitability for various commercial and home environments.",
      details: [
        { label: "Size", value: "1x2 Feet" },
        { label: "Surface Finish", value: "Polished" },
        { label: "Material", value: "Nylon or Polypropylene" },
        { label: "Usage/Application", value: "Home" },
        { label: "Usage", value: "Office, Conference Room, Meeting Room" },
        { label: "Pile Height", value: "3-8 mm" },
        { label: "Pile Weight", value: "450-1200g/sqm" },
        { label: "Total Height", value: "5-15 mm" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product15: {
      id: "p15",
      name: "Loop Pile Carpet",
      price: "₹35 / sq ft",
      brochure: p15,
      image: product15,
      category: "carpetTile",
      description:
        "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
      details: [
        { label: "Usage/Application", value: "Floor" },
        { label: "Thickness", value: "3-8 mm" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel" },
        {
          label: "Feature",
          value:
            "Anti-Slip, Adhesive Protective, Corrosion-Resistant, Anti-Bacteria",
        },
        { label: "Pile Height", value: "3.2/4.0 mm" },
        { label: "Total Weight", value: "5000 g/m²" },
      ],
    },
    product16: {
      id: "p16",
      name: "Nylon Loop Pile Carpets",
      price: "₹160 / sq ft",
      image: product16,
      category: "carpetTile",
      description:
        "We are a quality conscious organization, offering a broad assortment of Loop Pile Carpet. The offered carpet is highly demanded its fine finish, superb quality and mesmerizing design. Our offered carpet is designed using premium quality basic material and advanced technology at vendors' end in line with industry standards. We offer this carpet to our clients in different designs, patterns, sizes, colours and styles.",
      details: [
        { label: "Color", value: "Brown" },
        { label: "Usage/Application", value: "Floor" },
        { label: "Pattern", value: "Printed" },
        { label: "Material", value: "Nylon" },
        { label: "Thickness", value: "8 mm" },
        {
          label: "Usage",
          value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath",
        },
      ],
    },
    product17: {
      id: "p17",
      name: "Brown Nylon Carpet Tile",
      price: "₹98 / sq ft",
      image: product17,
      category: "carpetTile",
      description:
        "Owing to our vast experience in this domain, we are engaged in offering a wide range of Nylon Carpet to our clients. The offered carpet is perfectly designed in line with the latest trends using high-grade nylon and innovative machines at vendors' end. In addition to this, we provide this carpet in various colors and designs as per the varied demands of our esteemed clients.",
      details: [
        { label: "Color", value: "Brown" },
        { label: "Pattern", value: "Plain" },
        { label: "Packaging Type", value: "Roll" },
        { label: "Material", value: "Nylon" },
        {
          label: "Usage",
          value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath, Prayer",
        },
        { label: "Thickness", value: "5 mm" },
      ],
    },
    product18: {
      id: "p18",
      name: "Runway Loop Pile Carpet",
      price: "₹110 / sq ft",
      image: product18,
      category: "carpetTile",
      description:
        "Owing to our expertise of this industry, our company is occupied in offering an extensive range of Runway Loop pile Carpet. These offered products are made by industry vendors, who have rich acquaintance of this field. After manufacturing, they also check the quality on diverse industry parameters to make sure the reliable performance and long working life. Due to robust nature, reliable performance and small prices, these are high demand.",
      details: [
        { label: "Usage/Application", value: "Floor" },
        { label: "Color", value: "Brown" },
        { label: "Wash Care", value: "Dry clean" },
        { label: "Technics", value: "Loop" },
        {
          label: "Usage",
          value: "Home, Decoration, Commercial, Hotel, Outdoor",
        },
        {
          label: "Features",
          value:
            "Anti-Slip, Adhesive Protective, Corrosion-Resistant, Anti-Bacteria",
        },
        { label: "Thickness", value: "12 mm" },
        { label: "Country of Origin", value: "Made in India" },
        {
          label: "Features",
          value: "Durable nature, Reliable performance, Sturdy design",
        },
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
      <div className="carpet-product-card" data-aos="fade-up">
        <div className="carpet-product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="carpet-product-image"
          />
        </div>
        <div className="carpet-product-content">
          <h3 className="carpet-product-title">{product.name}</h3>
          <div className="carpet-product-price">{product.price}</div>
          <div className="carpet-product-description-container">
            <p className="carpet-product-description">{product.description}</p>
          </div>
          <div className="carpet-product-details-container">
            <ul className="carpet-product-details">
              {product.details.map((detail, index) => (
                <li key={index}>
                  <span className="carpet-detail-label">{detail.label}:</span>{" "}
                  <span className="carpet-detail-value">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="carpet-product-actions">
            <button
              className="carpet-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote <FiArrowRight className="carpet-button-icon" />
            </button>
            {product.brochure && (
              <button
                className="carpet-brochure-button"
                onClick={() => downloadBrochure(product.name)}
              >
                <FiDownload className="carpet-button-icon" /> Brochure
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
    <div className="carpet-component">
      {/* Hero Banner Section */}
      <section className="carpet-hero-section">
        <img
          src={heroImage}
          alt="Premium Carpet Solutions"
          className="carpet-hero-image"
        />
        <div className="carpet-hero-overlay">
          <div className="carpet-hero-content">
            <h1 data-aos="fade-up">Premium Carpet Collections</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              High-quality carpet solutions for every space
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="carpet-container">
        <h2 className="carpet-section-title" data-aos="fade-up">
          Explore Our Carpet Range
        </h2>
        <div className="carpet-category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`carpet-category-item ${
                activeCategory === category.id ? "active" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => scrollToCategory(category.id)}
            >
              <div className="carpet-category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="carpet-category-image"
                />
              </div>
              <div className="carpet-category-content">
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
          className="carpet-product-section"
          ref={categoryRefs[category.id]}
        >
          <div className="carpet-container">
            <h2 className="carpet-section-title" data-aos="fade-up">
              {category.name}
            </h2>
            <div className="carpet-product-grid">
              {getProductsByCategory(category.id).map((productKey) =>
                renderProductCard(productKey)
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="carpet-modal-overlay">
          <div className="carpet-modal-content">
            <button className="carpet-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="carpet-modal-left">
              <div className="carpet-product-info">
                <div className="carpet-modal-image-container">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="carpet-modal-product-image"
                  />
                </div>
                <h3 className="carpet-modal-product-title">
                  {currentProduct.name}
                </h3>
                <div className="carpet-modal-price">{currentProduct.price}</div>
                <div className="carpet-modal-description-container">
                  <p className="carpet-modal-description">
                    {currentProduct.description}
                  </p>
                </div>
                <div className="carpet-modal-specs-container">
                  <ul className="carpet-modal-specs">
                    {currentProduct.details.map((detail, index) => (
                      <li key={index}>
                        <span className="carpet-modal-spec-label">
                          {detail.label}:
                        </span>{" "}
                        <span className="carpet-modal-spec-value">
                          {detail.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="carpet-modal-right">
              <div className="carpet-contact-form">
                <h3 className="carpet-contact-title">Request a Quote</h3>
                <p className="carpet-contact-message">
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
                  <div className="carpet-form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={myFormik.values.phone}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="carpet-form-input"
                    />
                  </div>
                  <div className="carpet-form-group">
                    <label htmlFor="user-email">Email*</label>
                    <input
                      type="email"
                      id="user-email"
                      name="email"
                      value={myFormik.values.email}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your email address"
                      className="carpet-form-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="carpet-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </form>
                {currentProduct.brochure && (
                  <button
                    className="carpet-modal-brochure-button"
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

export default Carpet;
