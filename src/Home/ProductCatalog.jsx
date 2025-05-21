// import React from "react";
// import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";
// import "./ProductCatalog.css"

// // // Import product images
// // import product1 from "./img/carpet/app1-500x500.webp";
// // import product2 from "./img/carpet/trump.webp";
// // import product3 from "./img/carpet/auditorium-carpet-500x500.webp";
// // import product4 from "./img/carpet/cut-pile-carpet-1000x1000.webp";

// // Import product images
// import product1 from "../Products/UPVC/img/carpet/carpet-tile.webp";
// import product2 from "../Products/UPVC/img/carpet/carpet-tile.webp";
// import product3 from "../Products/UPVC/img/carpet/carpet-tile.webp";
// import product4 from "../Products/UPVC/img/carpet/carpet-tile.webp";


// const ProductCatalog = () => {
//   // Product data
//   const products = [
//     {
//       id: 1,
//       name: "Premium Wall Carpet",
//       price: "₹105 / sq ft",
//       originalPrice: "₹130 / sq ft",
//       image: product1,
//       rating: 4.5,
//       reviews: 24,
//       features: ["Eco-friendly", "Stain-resistant", "5-year warranty"]
//     },
//     {
//       id: 2,
//       name: "Trump Carpet Flooring",
//       price: "₹130 / sq ft",
//       originalPrice: "₹150 / sq ft",
//       image: product2,
//       rating: 4.8,
//       reviews: 36,
//       features: ["High durability", "Sound absorbing", "Fire-retardant"]
//     },
//     {
//       id: 3,
//       name: "Auditorium Carpet",
//       price: "₹82 / sq ft",
//       originalPrice: "₹100 / sq ft",
//       image: product3,
//       rating: 4.2,
//       reviews: 18,
//       features: ["Heavy traffic use", "Easy maintenance", "Commercial grade"]
//     },
//     {
//       id: 4,
//       name: "Cut Pile Carpet",
//       price: "₹120 / sq ft",
//       originalPrice: "₹140 / sq ft",
//       image: product4,
//       rating: 4.7,
//       reviews: 42,
//       features: ["Soft texture", "UV resistant", "10mm pile height"]
//     }
//   ];

//   return (
//     <div className="catalog-container">
//       <div className="catalog-header">
//         <h2 className="catalog-title">Featured Products</h2>
//         <p className="catalog-subtitle">Premium quality carpets for every space</p>
//       </div>
      
//       <div className="product-grid">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <div className="product-badge">Bestseller</div>
            
//             <div className="product-image-container">
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className="product-image"
//               />
//               <div className="product-actions">
//                 <button className="action-btn wishlist-btn">
//                   <FiHeart />
//                 </button>
//                 <button className="action-btn quickview-btn">
//                   <FiEye />
//                 </button>
//               </div>
//             </div>
            
//             <div className="product-info">
//               <h3 className="product-name">{product.name}</h3>
              
//               <div className="product-rating">
//                 {[...Array(5)].map((_, i) => (
//                   <span 
//                     key={i} 
//                     className={`star ${i < Math.floor(product.rating) ? 'filled' : ''} ${i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? 'half-filled' : ''}`}
//                   >
//                     ★
//                   </span>
//                 ))}
//                 <span className="review-count">({product.reviews})</span>
//               </div>
              
//               <div className="product-pricing">
//                 <span className="current-price">{product.price}</span>
//                 <span className="original-price">{product.originalPrice}</span>
//               </div>
              
//               <ul className="product-features">
//                 {product.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
              
//               <button className="add-to-cart-btn">
//                 <FiShoppingCart /> Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCatalog;

import "./ProductCatalog.css"
import React, { useState, useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiDownload } from "react-icons/fi";


// Product images
import product1 from "./ProductCatalogimg/app1-500x500.7927c0261c9573132090.webp";
import product2 from "./ProductCatalogimg/trump.ee92b9ed961ace3bb401.webp";
import product3 from"./ProductCatalogimg/auditorium-carpet-500x500.f01bf951d5557e0b70ec.webp";
import product4 from "./ProductCatalogimg/cut-pile-carpet-1000x1000.4fca38309d787f7b23de.webp";
import product6 from "./ProductCatalogimg/welspun-carpet-tiles-500x500.89d3881c56e8de0e388a.webp";
import product7 from "./ProductCatalogimg/carpet-tile.0190499ae4cf0d38cf60.webp";
import product8 from "./ProductCatalogimg/loop-pile-carpet-500x500.5416c602fba383c0e6ae.webp";
import product9 from "./ProductCatalogimg/loop-pile-carpets.0872bbbea353719abdbc.webp";
import product10 from "./ProductCatalogimg/aluminum-screw-on-skirting-1000x1000.611ca97bbd27ce8dffb3.webp";
import product11 from "./ProductCatalogimg/easy-fix-modular-skirting-500x500.e7114197f3a664214516.webp";
import product12 from "./ProductCatalogimg/aluminium door.34ecf2c4b3b76d5f0bc4.jpg";
import product13 from "./ProductCatalogimg/aluminum-stuck-on-skirting-500x500.f872164f43ba2d1bfba3.webp";
import product14 from "./ProductCatalogimg/american-red-oak-flooring-500x500.9bf8be7a870ffecb1532.webp";
import product15 from "./ProductCatalogimg/plain-wooden-flooring-500x500.8bed41eb9216eea3a5fe.webp";
import product16 from "./ProductCatalogimg/nordic-oak-wood-500x500.48b0d182bf2f38e38ca7.webp";
import product17 from "./ProductCatalogimg/oak-silver-pearl-wooden-flooring-1000x1000.3859414811a3fa84ceaf.webp";
import product18 from "./ProductCatalogimg/sucupira-engineered-flooring-500x500.437887cda5095e62af54.webp";
import product19 from "./ProductCatalogimg/mahagony-engineered-wood-flooring-1000x1000.9c58ec170ead1a30ff68.webp";
import product20 from "./ProductCatalogimg/african-mahogany-engineered-wood-flooring-1000x1000.b5057b83cc98d030f6af.webp";
import product21 from "./ProductCatalogimg/american-walnut-engineered-flooring-1000x1000.00c761b9cf1c48c03e23.webp";
import product22 from "./ProductCatalogimg/ipe-wooden-decking-500x500.7b08e5906a455dd13b1d.webp";
import product23 from "./ProductCatalogimg/ipe-wooden-flooring-500x500.fb589ac35e673e43be83.webp";
import product24 from "./ProductCatalogimg/ipe-solid-exotic-wood-flooring-500x500.99117ac5e90ac507221e.webp";
import product25 from "./ProductCatalogimg/curved-glass-partition-1000x1000.30452fec2bd0bb67b42d.webp";
import product26 from "./ProductCatalogimg/aluminum-slim-glass-partition-1000x1000.4b1b68be9a1cf21a6423.webp";
import product27 from "./ProductCatalogimg/aluminium-acoustic-slim-glass-partition-for-office-1000x1000.f3267ef09b36ab28fe95.webp";
import product28 from "./ProductCatalogimg/transparent-laminated-glass-partition-for-office-1000x1000.f6683383209b12ed30ee.webp";


// PDF brochures
import p12  from "./ProductCatalogimg/aluminum-screw-on-skirting.1f4e03167425769c24a3.pdf"
import p11  from "./ProductCatalogimg/modular-skirting-illusion-recessed.a4be9904aa1083b71654.pdf"
import p6  from "./ProductCatalogimg/welspun-carpet-tiles.21805a41007d1507da1f.pdf"

import p14  from "./ProductCatalogimg/american-red-oak-flooring.fc50bc809ae5f421e383.pdf"
import p15  from "./ProductCatalogimg/wooden-flooring.f19a060ea4dd6aa1360f.pdf"






const ProductCatalog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Refs for category sections
  const categoryRefs = {
    wallToWall: useRef(null),
    carpetTile: useRef(null),
    Skirting : useRef(null),
    oak: useRef(null),
 Glossy : useRef(null),
  IPE : useRef(null),
  Glass : useRef(null),



  };

  const myFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      price: "",
      pileHeight: "",
      material: "",
      style: "",
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await axios.post(`http://localhost:5588/submit-quote`, values);
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

      const pileHeightDetail = currentProduct.details.find(
        (d) => d.label === "Pile Height"
      );
      const materialDetail = currentProduct.details.find(
        (d) => d.label === "Material"
      );
      const styleDetail = currentProduct.details.find(
        (d) => d.label === "Style"
      );

      myFormik.setFieldValue("pileHeight", pileHeightDetail ? pileHeightDetail.value : "");
      myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
      myFormik.setFieldValue("style", styleDetail ? styleDetail.value : "");
    }
  }, [isModalOpen, currentProduct]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      once: true,
    });
  }, []);

 

  // Products organized by category
  const products = {
    // Wall to Wall Carpet products
    product1: {
      id: 'p1',
      name: "Wall to Wall Carpet Product",
      price: "₹105 / Sq feet",
      image: product1,
      category: "wallToWall",
      description: "Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.",
      details: []
    },
    product2: {
      id: 'p2',
      name: "Trump Carpet flooring",
      price: "₹130 / Sq feet",
      image: product2,
      category: "wallToWall",
      description: "Backed with a group of highly talented experts, we are providing wide range of Trump Carpet. These products are developed by vendors using top quality raw material and new techniques. All our products meet with industry standards. Strong in nature our products are highly applauded in market for their features.",
      details:[
        { label: "Pile Height", value: "12mm" },
        { label: "Material", value: "Polyester" },
        { label: "Size", value: "6x7 Feet" },
        { label: "Material Type", value: "Polyester" },
        { label: "Wash Type", value: "Hand Wash" },
        { label: "Thickness", value: "5-8 mm" },
        { label: "Country of Origin", value: "Made in India" }
      ]
    },
    product3: {
      id: 'p3',
      name: "Polyester Multicolor Auditorium Carpet Flooring",
      price: "₹82 / Sq feet",
      image: product3,
      category: "wallToWall",
      description: "We are engaged in offering a wide range of Auditorium Carpet Flooring to our clients. Our range of all products is widely appreciated by our clients.",
      details: [
        { label: "Usage/Application", value: "Auditorium" },
        { label: "Material", value: "Polypropylene" },
        { label: "Packaging Type", value: "Roll" },
        { label: "Usage", value: "Beach Tent, Party, Traditional, Advertising Tent, Wedding, Military, Event, Soprts" },
        { label: "Length", value: "10-20 Mtr" },
        { label: "Thickness", value: "9 mm" },
      ]
    },
    product4: {
      id: 'p4',
      name: "Cut Pile Carpet",
      price: "₹ 120 / sq ft",
      image: product4,
      category: "wallToWall",
      description: "We are one of the reputed firms ofCut Pile Carpet. Our products are completed using the top quality raw material that is sourced from trustworthy vendors of market. The most modern machines are used to give soft finishing in the product. These products are checked by industry experts. Owing beautiful designs, these products are widely praised in industry. Our products are highly strong and sturdy in nature.",
      details: [
        { label: "Usage/Application", value: "Floor" },
        { label: "Color", value: "Red" },
        { label: "Usage", value: "Commercial" },
        { label: "Dimension", value: "4 Meter X 30 Meter" },
        { label: "Thickness", value: "10 mm" },
      ]
    },

    // Carpet Tile products
    product6: {
      id: 'p6',
      name: "Nylon Matte Carpet Tiles",
      price: "₹ 120 / sq ft",
         brochure: p6, 
      image: product6,
      category: "carpetTile",

      description: "Design- BroadcastColorMidnightile Size50 x 50 cmMaterialNylonFinishMatteTile Thickness5-6 mmBox Contains(No of Pieces):11Usage/ApplicationOffice FlooringBrand NameWelspunColorMidnightPatternFloralIs It Water ResistanceWater ResistanceNumber Of Piece In A Box11Carpet TypefloralSpecific Usage AreaHallPackaging TypeboxDesignstandardBox Contain11ShapeSquareChemical ResistanceNoCountry of OriginMade in India.",
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
        { label: "Is It Water Resistance", value: "Yes" }
      ]
    },
    product7: {
      id: 'p7',
      name: "Nylon or Polypropylene Multicolour Floor Carpet Tiles",
      price: "₹ 110 / sq ft",
      image: product7,
         brochure: p6, 
     
      category: "carpetTile",
      description: "We are engaged in offering a wide range of Floor Carpet Tiles to our clients. These multicolour tiles, made from Nylon or Polypropylene, are known for their durability, elegant polish, and suitability for various commercial and home environments.",
      details: [
        { label: "Size", value: "1x2 Feet" },
        { label: "Surface Finish", value: "Polished" },
        { label: "Material", value: "Nylon or Polypropylene" },
        { label: "Usage/Application", value: "Home" },
        { label: "Usage", value: "Office, Conference Room, Meeting Room" },
        { label: "Pile Height", value: "3-8 mm" },
        { label: "Pile Weight", value: "450-1200g/sqm" },
        { label: "Total Height", value: "5-15 mm" },
        { label: "Country of Origin", value: "Made in India" }
      ]
    },
    product8: {
      id: 'p8',
      name: "Loop Pile Carpet",
      price: "₹ 35 / sq ft",
         brochure: p6, 
         image: product8,
      category: "carpetTile",
      description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
      details: [
        { label: "Usage/Application", value: "Floor" },
        { label: "Thickness", value: "3-8 mm" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel" },
        { label: "Feature", value: "Anti-Slip, Adhesive Protective, Corrosion-Resistant, Anti-Bacteria" },
        { label: "Pile Height", value: "3.2/4.0 mm" },
        { label: "Total Weight", value: "5000 g/m²" },
      ]
    },
    product9: {
      id: 'p9',
      name: "Nylon Loop Pile Carpets",
      price: "₹ 160 / sq ft",
      image: product9,
      category: "carpetTile",
      description: "We are a quality conscious organization, offering a broad assortment of Loop Pile Carpet. The offered carpet is highly demanded its fine finish, superb quality and mesmerizing design. Our offered carpet is designed using premium quality basic material and advanced technology at vendors' end in line with industry standards. We offer this carpet to our clients in different designs, patterns, sizes, colours and styles.",
      details: [
        { label: "Color", value: "Brown" },
        { label: "Usage/Application", value: "Floor" },
        { label: "Pattern", value: "Printed" },
        { label: "Material", value: "Nylon" },
        { label: "Thickness", value: "8 mm" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath" }
      ]
    },
    product10: {
      id: 'p10',
      name: "Aluminum Screw On Skirting",
      price: "₹120 / sq ft",
      image: product10,
           brochure: p11, 
  category: "Skirting",
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
product11: {
      id: 'p11',
      name: "Easy Fix Modular Skirting",
      price: "₹1200 / Piece",
      image: product11,
      brochure: p11, 
  category: "Skirting",
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
    product12: {
      id: 'p12',
      name: "Aluminium Door Profiles",
      price: "₹200 / sq ft",
      image: product12,
        brochure: p12, 
  category: "Skirting",
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
    product13: {
      id: 'p13',
      name: "Aluminum Stuck On Skirting",
      price: "₹350 / Piece",
      image: product13,
        category: "Skirting",

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
        { label: "Application", value: "Furniture, Windows & Doors, Decorations" },
      ],
    },
     product14: {
  id: 'p14',
  name: "American Red Oak Flooring",
  price: "₹430 / sq ft",
  brochure: p14, 
  image: product14, // Replace this with the actual image import or file path
  category: "oak",
  description: "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of American Red Oak Flooring. These products are tested as per the international standards of quality before it is delivered to our clients",
  details: [
    { label: "Wood Flooring Type", value: "Red Oak" },
    { label: "Usage/Application", value: "Indoor" },
    { label: "Color", value: "Red" },
    { label: "Layer Thickness", value: "0.6/2mm" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Tile Size", value: "500X500 mm" },
    { label: "Country of Origin", value: "USA" }
  ]
},

product15 : {
  id: 'p15',
  name: "Polished Plain Wooden Flooring",
  price: "₹100 / sq ft",
  brochure: p15, 
  image: product15, // Replace with actual image import or file path
  category: "oak",
  description: "In our wide range of products, we are offering our customers best and elite quality assured array of Wooden Flooring. These products are designed with the use of modern machines and skills. These machines are tartan along side with many quality norms to keep it as per set quality norms. They are designed for flooring purpose. They are cost effective to buy too.",
  details: [
    { label: "Usage", value: "Household" },
    { label: "Thickness", value: "7 mm (±5%)" },
    { label: "Surface Finish", value: "Polished" },
    { label: "Material", value: "Wooden" },
    { label: "Total Weight", value: "5000g/m² (±5%)" },
    { label: "Tile Size", value: "50x50 cm" },
    { label: "Country of Origin", value: "Made in India" }
  ]
},
 product16 : {
  id: 'p16',
  name: "Brown Nordic Oak Wood",
  price: "₹650 / sq ft",
  image: product16, // Replace this with the actual image file or import
  category: "oak",
  description: "Backed by a team of our professionals, we are trading, wholesaling and supplying an extensive array of Nordic Oak Wood.",
  details: [
    { label: "Length", value: "2 to 5 feet" },
    { label: "Color", value: "Brown" },
    { label: "Shape", value: "Rectangular, Square" },
    { label: "Grade", value: "Industrial" },
    { label: "Material", value: "Nordic Oak Wood" },
    { label: "Surface Treatment", value: "Color Plated" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product17: {
  id: 'p17',
  name: "Oak Silver Pearl Wooden Flooring",
  price: "₹150 / sq ft",
  image: product17, // Replace this with the actual image file or import
  category: "oak",
  description: "We are instrumental in offering the finest quality range of Oak Silver Pearl Wooden Flooring to our valuable clientele. These products are made at high-tech manufacturing unit that is settled with superior machinery and tools. To maintain the quality, our quality analysts check these products on diverse quality parameters. Moreover, these products are available in diverse specifications that meet on clients demand.",
  details: [
    { label: "Color", value: "Silver" },
    { label: "Usage/Application", value: "Residential" },
    { label: "Thickness", value: "12mm" },
    { label: "Finishing", value: "Polished" },
    { label: "Wood Flooring Type", value: "Oak Flooring, Balsamo Flooring" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product18: {
 id: 'p18',
  name: "Sucupira Glossy Engineered Flooring",
  price: "₹450 / sq ft",
  image: product18, // Replace with actual image import or path
  
  category: "Glossy",
  description: "We are enlisted amongst the trusted names in the industry engaged in offering superb quality array of Jatoba Solid Wood. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
  details: [
    { label: "Thickness", value: "25 mm" },
    { label: "Usage/Application", value: "Residential" },
    { label: "Surface Finish", value: "Glossy" },
    { label: "Color", value: "Red" },
    { label: "Moisture Content", value: "7~9%" },
    { label: "Usage", value: "Household, Outdoor, Commercial, Sports" },
    { label: "Function", value: "Waterproof, Thermal Insulation, Anti-Static, Soundproof" }
  ]
},
product19: {
  id: 'p19',
  name: "Mahogany Glossy Engineered Flooring",
  price: "₹385 / sq ft",
  image: product19, // Replace this with the actual image file or import
  category: "Glossy",
  description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Santos Mahagony Engineered Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
  details: [
    { label: "Building Style", value: "Ground Floor" },
    { label: "Finishing", value: "Polished" },
    { label: "Color", value: "Brown" },
    { label: "Thickness", value: "12 mm" },
    { label: "Material", value: "Wood" },
    { label: "Deck Flooring Area", value: "Home" },
    { label: "Surface Finish", value: "Glossy" },
    { label: "Country of Origin", value: "Made in India" }
  ]
},

product20: {
  id: 'p20',
  name: "African Mahogany Glossy Engineered Flooring",
  price: "₹530 / sq ft",
  image: product20, // Replace this with the actual image file or import
  category: "Glossy",
  description: "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of African Mahogany Engineered Wood Flooring. These products are tested as per the international standards of quality before it is delivered to our clients.",
  details: [
    { label: "Type of Wood Plank", value: "African Mahogany" },
    { label: "Wear Resistance", value: "Yes" },
    { label: "Thickness", value: "5-15 mm" },
    { label: "Material", value: "Solid Wood" },
    { label: "Function", value: "Waterproof, Thermal Insulation" },
    { label: "Moisture Content", value: "9-12%" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product21: {
  id: 'p21',
  name: "Polished Glossy Engineered Flooring",
  price: "₹385 / sq ft",
  image: product21, // Replace this with the actual image file or import
  category: "Glossy",
  description: "We are enlisted amongst the trusted names in the industry engaged in offering a superb quality array of American Walnut Engineered Flooring. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
  details: [
    { label: "Thickness", value: "7 mm" },
    { label: "Tile Size", value: "50cm x 50cm" },
    { label: "Pile Height", value: "3.2/4.0mm ± 5%" },
    { label: "Usage", value: "Indoor, Outdoor" },
    { label: "Finishing", value: "Glossy, Polished" },
    { label: "Wood Flooring Type", value: "Walnut Flooring" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product22: {
  id: 'p22',
  name: "IPE Wooden Decking",
  price: "₹315 / sq ft",
  image: product22, // Replace this with the actual image file or import
      category: "IPE",
  description: "Used widely in various luxury homes, resorts and hotels, the offered IPE Decking is one of the most attractive flooring available in the market. Manufactured using the best quality wood and modernized equipment, the flooring offered is highly preferred in the market. Further, its long life, resistance to water and easy maintenance is highly praised in the market.",
  details: [
    { label: "Color", value: "Brown" },
    { label: "Usage/Application", value: "Outdoor" },
    { label: "Finish", value: "Matte, Glossy" },
    { label: "Deck Material", value: "IPE" },
    { label: "Grade", value: "Industrial" },
    { label: "Length", value: "2 to 5 feet" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product23: {
  id: 'p23',
  name: "IPE Wooden Flooring",
  price: "₹455 / sq ft",
  image: product23, // Replace this with the actual image file or import
      category: "IPE",
  description: "We specialize in processing a stylish range of IPE. Extremely rugged in design and has a very graceful look which adds to the beauty, this flooring is designed at vendors’ end using optimum quality basic material and advanced technology. Our quality experts test this flooring on various parameters. Apart from this, offered flooring is available in variegated designs, in order to meet varied demands of clients.",
  details: [
    { label: "Wear Resistance", value: "Yes" },
    { label: "Finishing", value: "Polished" },
    { label: "Thickness", value: "12-20 mm" },
    { label: "Moisture", value: "7-9%" },
    { label: "Pattern", value: "Wood Grain" },
    { label: "Usage", value: "Household" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},

product24: {
  id: 'p24',
  name: "IPE Solid Exotic Wood Flooring",
  price: "₹390 / sq ft",
  image: product24, // Replace this with the actual image file or import
      category: "IPE",
  description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of IPE Solid Exotic Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
  details: [
    { label: "Wear Resistance", value: "Yes" },
    { label: "Color", value: "Brown" },
    { label: "Material", value: "Solid Wood" },
    { label: "Finish", value: "Finishing" },
    { label: "Thickness", value: "4-18 mm" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},

//       id: 'p2',
//       name: "Aluminum Slim Glass Partition",
//       price: "₹315 / Square feet",
//        category: "Glass",
//       image: product2,
//       description: <ul>
//         <li>Unique durable design where profiles click into each other.</li>
//         <li>StepUp is made from inserting textile in to aluminium retainer.</li>
//         <li>Installed on the floor with ramps on all four sides.</li>
//         <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//         <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
//       </ul>,
//       category: "office-partitions",
//       details: [
//         { label: "Material", value: "Aluminium Acoustic" },
//         { label: "Usage/Application", value: "All" },
//         { label: "Thickness", value: "3mm" },
//         { label: "Insulation", value: "Thermal" },
//         { label: "Surface Treatment", value: "PVDF Coated" },
//         { label: "Open Style", value: "All" },
//         { label: "Color", value: "Multicolor" },
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Minimum Order Quantity", value: "50 Square feet" }
//       ],
//     },
    product25: {
      id: 'p25',
      name: "Curved Glass Partition",
      price: "₹1000 / Sq feet",
       category: "Glass",
      image: product25,
     description: <ul>
         <li>Unique durable design where profiles click into each other.</li>
        <li>StepUp is made from inserting textile in to aluminium retainer.</li>  
       </ul>,
      details: [
        { label: "Material", value: "Glass" },
        { label: "Usage/Application", value: "Home" },
        { label: "Surface Treatment", value: "PE Coated" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 Square feet" }
      ],
    },
    product26: {
      id: 'p26',
      name: "Aluminum Slim Glass Partition",
      price: "₹315 / Sq feet",
       category: "Glass",
      image: product26,
      description: <ul>
        <li>Unique durable design where profiles click into each other.</li>
        <li>StepUp is made from inserting textile in to aluminium retainer.</li>
        <li>Installed on the floor with ramps on all four sides.</li>
         <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
         <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
       </ul>,
      details: [
       { label: "Material", value: "Aluminium Acoustic" },
        { label: "Usage/Application", value: "All" },
        { label: "Thickness", value: "3mm" },
        { label: "Insulation", value: "Thermal" },
        { label: "Surface Treatment", value: "PVDF Coated" },
        { label: "Open Style", value: "All" },
        { label: "Color", value: "Multicolor" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 Sq feet" }
      ],
    },
     product27: {
      id: 'p27',
      name: "Aluminium Acoustic Slim Glass Partition",
      price: "₹395 / Sq feet",
       category: "Glass",
      image: product27,
      description: <ul> 
        <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> 
      </ul>,
      details: [
        { label: "Thickness", value: "6mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
  product28: {
      id: 'p28',
      name: "Transparent Laminated Glass Partition, For Office",
      price: "₹350 / Sq feet",
       category: "Glass",
      image: product28,
      description: <ul> 
        <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> 
      </ul>,
      details: [
        { label: "Thickness", value: "6mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Shape", value: "Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
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
    <div className="product-catalog-product-card" data-aos="fade-up">
      <img
        src={product.image}
        alt={product.name}
        className="product-catalog-product-image"
      />
      <div className="product-catalog-product-content">
        <h3>{product.name}</h3>
        <p className="product-catalog-product-description">{product.description}</p>
        <div className="product-catalog-product-price">{product.price}</div>
        <ul className="product-catalog-product-details">
          {product.details.map((detail, index) => (
            <li key={index}>
              <span>{detail.label}:</span> {detail.value}
            </li>
          ))}
        </ul>
        <div className="product-catalog-product-actions">
          <button
            className="product-catalog-quote-button"
            onClick={() => openModal(productKey)}
          >
            Get Quote
          </button>
          {product.brochure && (
            <button
              className="product-catalog-brochure-button"
              onClick={() => downloadBrochure(product.name)}
            >
              <FiDownload /> Brochure
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Product filtering
const wallToWallProducts = Object.keys(products).filter(
  (key) => products[key].category === "wallToWall"
).slice(0, 4);

const carpetTileProducts = Object.keys(products).filter(
  (key) => products[key].category === "carpetTile"
).slice(0, 4);

const SkirtingProducts = Object.keys(products).filter(
  (key) => products[key].category === "Skirting"
).slice(0, 4);

const oakProducts = Object.keys(products).filter(
  (key) => products[key].category === "oak"
).slice(0, 4);

const GlossyProducts = Object.keys(products).filter(
  (key) => products[key].category === "Glossy"
).slice(0, 4);

const IPEProducts = Object.keys(products).filter(
  (key) => products[key].category === "IPE"
).slice(0, 4);

const GlassProducts = Object.keys(products).filter(
  (key) => products[key].category === "Glass"
).slice(0, 4);

return (
  <div className="product-catalog-component">
    <div className="product-catalog-container product-catalog-product-header" data-aos="fade-up">
      <div className="product-catalog-product-header-content">
        <h2 className="product-catalog-main-title">Our Product Range</h2>
        <a href="/products" className="product-catalog-view-all-link">
          View All Categories
        </a>
      </div>
    </div>

    {/* Aluminum Profile and Skirtings */}
    <section className="product-catalog-product-section" ref={categoryRefs.Skirting}>
      <div className="product-catalog-container">
        <h2 className="product-catalog-section-title" data-aos="fade-up">
          Aluminum Profile and Skirtings <br />
          <a href="/aluminum-profile-skirtings" className="product-catalog-view-all-link">
            View All Categories
          </a>
        </h2>
        <div className="product-catalog-product-grid">
          {SkirtingProducts.map((productKey) => renderProductCard(productKey))}
        </div>
      </div>
    </section>

    {/* Wall to Wall */}
    <section className="product-catalog-product-section" ref={categoryRefs.wallToWall}>
      <div className="product-catalog-container">
        <h2 className="product-catalog-section-title" data-aos="fade-up">
          Wall to Wall Carpet <br />
          <a href="/carpets" className="product-catalog-view-all-link">
            View All Categories
          </a>
        </h2>
        <div className="product-catalog-product-grid">
          {wallToWallProducts.map((productKey) => renderProductCard(productKey))}
        </div>
      </div>
    </section>

    {/* Carpet Tile */}
    <section className="product-catalog-product-section" ref={categoryRefs.carpetTile}>
      <div className="product-catalog-container">
        <h2 className="product-catalog-section-title" data-aos="fade-up">
          Carpet Tile <br />
          <a href="/carpets" className="product-catalog-view-all-link">
            View All Categories
          </a>
        </h2>
        <div className="product-catalog-product-grid">
          {carpetTileProducts.map((productKey) => renderProductCard(productKey))}
        </div>
      </div>
    </section>

    {/* Oak Flooring */}
    <section className="product-catalog-product-section" ref={categoryRefs.oak}>
      <div className="product-catalog-container">
        <h2 className="product-catalog-section-title" data-aos="fade-up">
          Oak Flooring <br />
          <a href="/flooring" className="product-catalog-view-all-link">
            View All Categories
          </a>
        </h2>
        <div className="product-catalog-product-grid">
          {oakProducts.map((productKey) => renderProductCard(productKey))}
        </div>
      </div>
    </section>

    {/* Glossy Engineered Flooring */}
    <section className="product-catalog-product-section" ref={categoryRefs.Glossy}>
      <div className="product-catalog-container">
        <h2 className="product-catalog-section-title" data-aos="fade-up">
          Glossy Engineered Flooring <br />
          <a href="/flooring" className="product-catalog-view-all-link">
            View All Categories
          </a>
        </h2>
        <div className="product-catalog-product-grid">
          {GlossyProducts.map((productKey) => renderProductCard(productKey))}
        </div>
      </div>
    </section>

    {/* SPC/IPE Flooring */}
    <section className="product-catalog-product-section" ref={categoryRefs.IPE}>
      <div className="product-catalog-container">
        <h2 className="product-catalog-section-title" data-aos="fade-up">
          SPC/IPE Flooring <br />
          <a href="/flooring" className="product-catalog-view-all-link">
            View All Categories
          </a>
        </h2>
        <div className="product-catalog-product-grid">
          {IPEProducts.map((productKey) => renderProductCard(productKey))}
        </div>
      </div>
    </section>

    {/* Aluminium Glass Partitions */}
    <section className="product-catalog-product-section" ref={categoryRefs.Glass}>
      <div className="product-catalog-container">
        <h2 className="product-catalog-section-title" data-aos="fade-up">
          Aluminium Glass Partitions <br />
          <a href="/Aluminium_Glass_Partitions" className="product-catalog-view-all-link">
            View All Categories
          </a>
        </h2>
        <div className="product-catalog-product-grid">
          {GlassProducts.map((productKey) => renderProductCard(productKey))}
        </div>
      </div>
    </section>
  <div className="product-catalog-more-button-wrapper">
  <a href="/Moreproducts" className="product-catalog-more-button">
    More
  </a>
</div>



    {/* Quote Modal */}
    {isModalOpen && currentProduct && (
      <div className="product-catalog-modal-overlay">
        <div className="product-catalog-modal-content">
          <button className="product-catalog-modal-close" onClick={closeModal}>
            <FiX />
          </button>
          <div className="product-catalog-product-info">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="product-catalog-modal-product-image"
            />
            <h3>{currentProduct.name}</h3>
            <p className="product-catalog-modal-description">
              {currentProduct.description}
            </p>
            <div className="product-catalog-modal-price">{currentProduct.price}</div>
            <ul className="product-catalog-modal-specs">
              {currentProduct.details.map((detail, index) => (
                <li key={index}>
                  <span>{detail.label}:</span> {detail.value}
                </li>
              ))}
            </ul>
            {currentProduct.brochure && (
              <button
                className="product-catalog-brochure-button"
                onClick={() => downloadBrochure(currentProduct.name)}
              >
                <FiDownload /> Download Brochure
              </button>
            )}
          </div>
          <div className="product-catalog-contact-form">
            <p className="product-catalog-contact-message">
              We'll contact you shortly with the quote details
            </p>
            <form onSubmit={myFormik.handleSubmit}>
              <div className="product-catalog-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={myFormik.values.phone}
                  onChange={myFormik.handleChange}
                  required
                  placeholder="Phone no."
                  className="product-catalog-form-input"
                />
              </div>
              <div className="product-catalog-form-group">
                <label htmlFor="user-email">Email</label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  value={myFormik.values.email}
                  onChange={myFormik.handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="product-catalog-form-input"
                />
              </div>
              <button
                type="submit"
                className="product-catalog-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    )}

    <ToastContainer position="top-center" autoClose={3000} />
  </div>
);
}
export default ProductCatalog;
