// import React, { useState, useEffect, useRef } from "react";
// import "./MoreProducts.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiX } from "react-icons/fi";
// import heroImage from "./img/vinyl-2.jpg";

// import grass1 from "./img/more/grass1.jpg";
// import grass2 from "./img/more/grass2.jpg";
// import grass3 from "./img/more/grass3.jpg";
// import grass4 from "./img/more/grass4.jpg";

// const MoreProducts = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const categoryRefs = {
//     all: useRef(null),
//     vinyl: useRef(null),
//     artificial: useRef(null),
//   };

//   const myFormik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       email: "",
//       price: "",
//       height: "",
//       material: "",
//       finish: "",
//     },
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       try {
//         await axios.post(
//           `https://aidf-backend-vite.onrender.com/submit-quote`,
//           values
//         );
//         toast.success("Request Submitted Successfully");
//         myFormik.resetForm();
//         closeModal();
//       } catch (err) {
//         toast.error("Error While Submitting Request");
//         console.error(err);
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//   });

//   const scrollToCategory = (category) => {
//     setActiveCategory(category);
//     if (categoryRefs[category]) {
//       categoryRefs[category].current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in", once: true });
//   }, []);

//   useEffect(() => {
//     if (isModalOpen && currentProduct) {
//       myFormik.setFieldValue("name", currentProduct.name);
//       myFormik.setFieldValue("price", currentProduct.price);
//     }
//   }, [isModalOpen, currentProduct]);

//   const categories = [
//     { id: "vinyl", name: "Vinyl Flooring", image: heroImage },
//     {
//       id: "artificial",
//       name: "Artificial Grass & Vertical Garden",
//       image: grass1,
//     },
//   ];

//   const products = {
//     p1: {
//       id: "p1",
//       name: "Vinyl Flooring",
//       price: "₹N/A",
//       image: heroImage,
//       category: "vinyl",
//     },
//     p2: {
//       id: "p2",
//       name: "Indoor Artificial Grass",
//       price: "₹N/A",
//       image: grass1,
//       category: "artificial",
//     },
//     p3: {
//       id: "p3",
//       name: "Balcony Grass",
//       price: "₹N/A",
//       image: grass2,
//       category: "artificial",
//     },
//     p4: {
//       id: "p4",
//       name: "Artificial Grass For Stairs",
//       price: "₹N/A",
//       image: grass3,
//       category: "artificial",
//     },
//     p5: {
//       id: "p5",
//       name: "Artificial Grass",
//       price: "₹N/A",
//       image: grass4,
//       category: "artificial",
//     },
//   };

//   const openModal = (key) => {
//     setCurrentProduct(products[key]);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const renderProductCard = (key) => {
//     const product = products[key];
//     return (
//       <div className="more-products-card" key={key} data-aos="fade-up">
//         <div className="more-products-image-container">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="more-products-image"
//           />
//         </div>
//         <div className="more-products-content">
//           <h3 className="more-products-title">{product.name}</h3>
//           <div className="more-products-price">{product.price}</div>
//           <button
//             onClick={() => openModal(key)}
//             className="more-products-quote-btn"
//           >
//             Get Quote
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="more-products-component">
//       <section className="more-products-hero">
//         <img
//           src={heroImage}
//           alt="More Products"
//           className="more-products-hero-img"
//         />
//         <div className="more-products-hero-overlay">
//           <div className="more-products-hero-content">
//             <h1 data-aos="fade-up">More Products</h1>
//             <p data-aos="fade-up" data-aos-delay="200">
//               Explore our additional premium product offerings
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="more-products-container">
//         <h2 className="more-products-main-title" data-aos="fade-up">
//           Our Product Categories
//         </h2>
//         <p
//           className="more-products-subtitle"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           Select a category to view available products
//         </p>
//         <div className="more-products-category-grid">
//           {categories.map((cat, idx) => (
//             <div
//               key={cat.id}
//               onClick={() => scrollToCategory(cat.id)}
//               className={`more-products-category-item ${
//                 activeCategory === cat.id ? "active" : ""
//               }`}
//               data-aos="fade-up"
//               data-aos-delay={idx * 100}
//             >
//               <div className="more-products-category-img-wrapper">
//                 <img
//                   src={cat.image}
//                   alt={cat.name}
//                   className="more-products-category-img"
//                 />
//               </div>
//               <div className="more-products-category-content">
//                 <h3>{cat.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {categories.map((cat) => (
//         <section
//           key={cat.id}
//           className="more-products-section"
//           ref={categoryRefs[cat.id]}
//         >
//           <div className="more-products-container">
//             <h2 className="more-products-section-title" data-aos="fade-up">
//               {cat.name}
//             </h2>
//             <div className="more-products-grid">
//               {Object.keys(products)
//                 .filter((k) => products[k].category === cat.id)
//                 .map(renderProductCard)}
//             </div>
//           </div>
//         </section>
//       ))}

//       {isModalOpen && currentProduct && (
//         <div className="more-products-modal-overlay">
//           <div className="more-products-modal-content">
//             <button className="more-products-modal-close" onClick={closeModal}>
//               <FiX />
//             </button>
//             <div className="more-products-modal-left">
//               <div className="more-products-modal-image-container">
//                 <img
//                   src={currentProduct.image}
//                   alt={currentProduct.name}
//                   className="more-products-modal-img"
//                 />
//               </div>
//               <h3 className="more-products-modal-title">
//                 {currentProduct.name}
//               </h3>
//               <div className="more-products-modal-price">
//                 {currentProduct.price}
//               </div>
//             </div>
//             <div className="more-products-modal-right">
//               <div className="more-products-contact-form">
//                 <h3 className="more-products-contact-title">Request a Quote</h3>
//                 <p className="more-products-contact-msg">
//                   We'll contact you shortly with the quote details
//                 </p>
//                 <form onSubmit={myFormik.handleSubmit}>
//                   <input
//                     type="hidden"
//                     name="name"
//                     value={currentProduct.name}
//                   />
//                   <input
//                     type="hidden"
//                     name="price"
//                     value={currentProduct.price}
//                   />
//                   <div className="more-products-form-group">
//                     <label htmlFor="phone">Phone Number*</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={myFormik.values.phone}
//                       onChange={myFormik.handleChange}
//                       required
//                       placeholder="Enter your phone number"
//                       className="more-products-form-input"
//                     />
//                   </div>
//                   <div className="more-products-form-group">
//                     <label htmlFor="email">Email*</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={myFormik.values.email}
//                       onChange={myFormik.handleChange}
//                       required
//                       placeholder="Enter your email address"
//                       className="more-products-form-input"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="more-products-submit-btn"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit Request"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default MoreProducts;















import React, { useState, useEffect, useRef } from "react";
import "./MoreProducts.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX } from "react-icons/fi";
import heroImage from "./img/vinyl-2.jpg";

import grass1 from "./img/more/grass1.jpg";
import grass2 from "./img/more/grass2.jpg";
import grass3 from "./img/more/grass3.jpg";
import grass4 from "./img/more/grass4.jpg";

const MoreProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryRefs = {
    all: useRef(null),
    vinyl: useRef(null),
    artificial: useRef(null),
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
        toast.success("Request Submitted Successfully");
        myFormik.resetForm();
        closeModal();
      } catch (err) {
        toast.error("Error While Submitting Request");
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    if (categoryRefs[category]) {
      categoryRefs[category].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in", once: true });
  }, []);

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setFieldValue("name", currentProduct.name);
      myFormik.setFieldValue("price", currentProduct.price);
    }
  }, [isModalOpen, currentProduct]);

  const categories = [
    { id: "vinyl", name: "Vinyl Flooring", image: heroImage },
    {
      id: "artificial",
      name: "Artificial Grass & Vertical Garden",
      image: grass1,
    },
  ];

  const products = {
    p1: {
      id: "p1",
      name: "Vinyl Flooring",
      price: "₹N/A",
      image: heroImage,
      category: "vinyl",
    },
    p2: {
      id: "p2",
      name: "Indoor Artificial Grass",
      price: "₹N/A",
      image: grass1,
      category: "artificial",
    },
    p3: {
      id: "p3",
      name: "Balcony Grass",
      price: "₹N/A",
      image: grass2,
      category: "artificial",
    },
    p4: {
      id: "p4",
      name: "Artificial Grass For Stairs",
      price: "₹N/A",
      image: grass3,
      category: "artificial",
    },
    p5: {
      id: "p5",
      name: "Artificial Grass",
      price: "₹N/A",
      image: grass4,
      category: "artificial",
    },
  };

  const openModal = (key) => {
    setCurrentProduct(products[key]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const renderProductCard = (key) => {
    const product = products[key];
    return (
      <div className="more-products-card" key={key} data-aos="fade-up">
        <div className="more-products-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="more-products-image"
          />
        </div>
        <div className="more-products-content">
          <h3 className="more-products-title">{product.name}</h3>
          <div className="more-products-price">{product.price}</div>
          <button
            onClick={() => openModal(key)}
            className="more-products-quote-btn"
          >
            Get Quote
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="more-products-component">
      <section className="more-products-hero">
        <img
          src={heroImage}
          alt="More Products"
          className="more-products-hero-img"
        />
        <div className="more-products-hero-overlay">
          <div className="more-products-hero-content">
            <h1 data-aos="fade-up">More Products</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Explore our additional premium product offerings
            </p>
          </div>
        </div>
      </section>

      <div className="more-products-container">
        <h2 className="more-products-main-title" data-aos="fade-up">
          Our Product Categories
        </h2>
        <p
          className="more-products-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Select a category to view available products
        </p>
        <div className="more-products-category-grid">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`more-products-category-item ${
                activeCategory === cat.id ? "active" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="more-products-category-img-wrapper">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="more-products-category-img"
                />
              </div>
              <div className="more-products-category-content">
                <h3>{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {categories.map((cat) => (
        <section
          key={cat.id}
          className="more-products-section"
          ref={categoryRefs[cat.id]}
        >
          <div className="more-products-container">
            <h2 className="more-products-section-title" data-aos="fade-up">
              {cat.name}
            </h2>
            <div className="more-products-grid">
              {Object.keys(products)
                .filter((k) => products[k].category === cat.id)
                .map(renderProductCard)}
            </div>
          </div>
        </section>
      ))}

      {isModalOpen && currentProduct && (
        <div className="more-products-modal-overlay">
          <div className="more-products-modal-content">
            <button className="more-products-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="more-products-modal-left">
              <div className="more-products-modal-image-container">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="more-products-modal-img"
                />
              </div>
              <h3 className="more-products-modal-title">
                {currentProduct.name}
              </h3>
              <div className="more-products-modal-price">
                {currentProduct.price}
              </div>
            </div>
            <div className="more-products-modal-right">
              <div className="more-products-contact-form">
                <h3 className="more-products-contact-title">Request a Quote</h3>
                <p className="more-products-contact-msg">
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
                  <div className="more-products-form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={myFormik.values.phone}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="more-products-form-input"
                    />
                  </div>
                  <div className="more-products-form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={myFormik.values.email}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your email address"
                      className="more-products-form-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="more-products-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default MoreProducts;