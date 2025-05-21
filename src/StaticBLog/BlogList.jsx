import React from 'react';
// import { Link } from 'react-router-dom';
import './BlogStyles.css';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {

    const navigate=useNavigate()



  const blogs = [
    {
      id: 1,
      title: "The Future of Interior Design in 2023",
      excerpt: "Discover the emerging trends that will dominate interior spaces this year and how to incorporate them.",
      date: "May 15, 2023",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Sustainable Materials for Modern Homes",
      excerpt: "Explore eco-friendly materials that don't compromise on style or durability for your next renovation.",
      date: "April 28, 2023",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Maximizing Small Spaces: Design Principles",
      excerpt: "Learn professional techniques to make the most of limited square footage without sacrificing functionality.",
      date: "April 10, 2023",
      category: "Space Planning",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Color Psychology in Residential Design",
      excerpt: "How different hues affect mood and perception in living spaces, with practical application tips.",
      date: "March 22, 2023",
      category: "Color Theory",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Lighting Strategies for Different Room Types",
      excerpt: "Professional guidance on selecting and placing lighting fixtures for optimal ambiance and function.",
      date: "March 15, 2023",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "The Art of Mixing Textures and Patterns",
      excerpt: "Master the balance of different materials and prints to create visually rich, cohesive interiors.",
      date: "February 28, 2023",
      category: "Design Techniques",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-main-title">Design Insights</h1>
        <p className="blog-subtitle">Expert perspectives on interior design trends and techniques</p>
      </div>
      
      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-card-link">
              <div className="blog-card-image-container">
                <img src={blog.image} alt={blog.title} className="blog-card-image" />
                <div className="blog-card-category">{blog.category}</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-date">{blog.date}</span>
                </div>
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-excerpt">{blog.excerpt}</p>
                <div onClick={()=>navigate(`/blogs/${blog.id}`)} className="blog-card-readmore">Read Article →</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;