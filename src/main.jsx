







// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Home/Home";
import AboutUs from "./About/AboutUs";
import UPVCDoorsWindows from "./Products/UPVC/UPVCDoorsWindows";
import Skirting from "./Products/UPVC/Skirting";
import LocateUs from "./LocateUs/LocateUs";
import Carpet from "./Products/UPVC/Carpet";
import Aluminium_glass from "./Products/UPVC/Aluminium_glass";
import Flooring from "./Products/UPVC/Flooring";
import  Moreproducts from "./Products/UPVC/Moreproducts";
import Blogs from "./Blog/Blogs";
import BlogDetail from "./Blog/BlogDetail";
import BlogSlider from "./Home/BlogSlider";
import BlogDetails from "./Home/BlogDetails";
import ContactFormPopup from "./POPUP/ContactFormPopup";
import BlogList from "./StaticBLog/BlogList";
import Detail from "./StaticBLog/Detail";
import Conditions from "./Term&condition/Conditions";
import Policy from "./Policy/Policy";
import { SearchProvider } from "./Header/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="locate-us" element={<LocateUs />} />
            <Route path="terms&conditions" element={<Conditions />} />
            <Route path="privacy&policy" element={<Policy />} />
            <Route path="products" element={<UPVCDoorsWindows />} />
            <Route path="/aluminum-profile-skirtings" element={<Skirting />} />
            <Route path="/carpets" element={<Carpet />} />
            <Route path="/Aluminium_Glass_Partitions" element={<Aluminium_glass />} />
            <Route path="Moreproducts" element={<Moreproducts/>}/>
            <Route path="flooring" element={<Flooring />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="blogDetails/:blogId" element={<BlogDetail />} /> */}
            <Route path="blogs" element={<BlogList />} />
            <Route path="blogSlider" element={<BlogSlider />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            {/* <Route path="/static-blog/:id" element={<Detail />} /> */}
            <Route path="contact" element={<ContactFormPopup />} />
          </Route>
        </Routes>
      </Router>
    </SearchProvider>
  </React.StrictMode>
);