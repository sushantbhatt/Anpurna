// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { marked } from "marked";

// import "./Blogs.css";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const getAllBlogs = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`http://localhost:5588/blogs`);

//       setBlogs(res?.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       console.error("Error fetching blogs:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllBlogs();
//   }, []);

//   // ---------------------------------------------------------

//   marked.setOptions({
//     breaks: true,
//     gfm: true,
//     headerIds: false,
//     mangle: false,
//   });

//   const renderPlainText = (markdown) => {
//     const html = marked(markdown);

//     const temp = document.createElement("div");
//     temp.innerHTML = html;
//     return temp.textContent || temp.innerText || "";
//   };

//   const renderTitle = (title) => {
//     const plainTitle = renderPlainText(title);
//     return <h2 className="blog-title">{plainTitle}</h2>;
//   };

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const truncateContent = (content, maxLength = 150) => {
//     if (!content) return "";
//     const plainText = renderPlainText(content);
//     if (plainText.length <= maxLength) return plainText;
//     return plainText.substring(0, maxLength) + "...";
//   };

//   const handleBlogClick = (blogId) => {
//     navigate(`/blogDetails/${blogId}`);
//   };

//   if (loading)
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Loading blogs...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="error-container">
//         <div className="error-icon">⚠️</div>
//         <h3>Error Loading Blogs</h3>
//         <p>{error}</p>
//         <button onClick={getAllBlogs} className="retry-button">
//           Retry
//         </button>
//       </div>
//     );

//   return (
//     <div className="blogs-container">
//       <header className="page-header">
//        <div className="button-container">
//        <h1>Latest Articles</h1>

//        </div>
//       </header>

//       <div className="blog-list">
//         {blogs.map((blog) => {
//           const isAI =
//             blog.content.includes("AI-generated") ||
//             blog.title.startsWith("##") ||
//             blog.content.startsWith("##");

//           return (
//             <article
//               key={blog.id}
//               className={`blog-card ${isAI ? "ai-generated" : ""}`}
//               onClick={() => handleBlogClick(blog.id)}
//             >
//               {isAI && <span className="ai-generated-marker"></span>}

//               <div className="blog-meta">
//                 <span className="publish-date">
//                   {formatDate(blog.created_at)}
//                 </span>
//                 {blog.updated_at && blog.updated_at !== blog.created_at && (
//                   <span className="update-date">
//                     Updated: {formatDate(blog.updated_at)}
//                   </span>
//                 )}
//               </div>

//               {renderTitle(blog.title)}

//               <div className="blog-content-preview">
//                 {truncateContent(blog.content)}
//                 {isAI && <span className="ai-content-marker"></span>}
//               </div>

//               <div className="read-more">Read full article →</div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Blogs;










import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { marked } from "marked";

import "./Blogs.css";

const Blogs = () => {
  // State for storing fetched blogs
  const [blogs, setBlogs] = useState([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle any errors during fetching
  const [error, setError] = useState(null);

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to fetch all blogs from the server
  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5588/blogs`);
      setBlogs(res?.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    getAllBlogs();
  }, []);

  // Configure marked options for Markdown parsing
  marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: false,
    mangle: false,
  });

  // Function to render plain text from markdown
  const renderPlainText = (markdown) => {
    const html = marked(markdown);
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

  // Function to render blog title as plain text inside an <h2>
  const renderTitle = (title) => {
    const plainTitle = renderPlainText(title);
    return <h2 className="blog-title">{plainTitle}</h2>;
  };

  // Function to format date strings into readable dates
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to truncate blog content for preview
  const truncateContent = (content, maxLength = 150) => {
    if (!content) return "";
    const plainText = renderPlainText(content);
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + "...";
  };

  // Function to navigate to blog details page
  const handleBlogClick = (blogId) => {
    navigate(`/blogDetails/${blogId}`);
  };

  // ----------------------------------------
  // Conditional render: if blogs are loading
  if (loading)
    return (
      <div className="loading-container">
        {/* Spinner for loading */}
        <div className="spinner"></div>
        {/* Loading text */}
        <p>Loading blogs...</p>
      </div>
    );

  // Conditional render: if error occurred
  if (error)
    return (
      <div className="error-container">
        {/* Error icon */}
        <div className="error-icon">⚠️</div>
        {/* Error header */}
        <h3>Error Loading Blogs</h3>
        {/* Display error message */}
        <p>{error}</p>
        {/* Retry fetching blogs */}
        <button onClick={getAllBlogs} className="retry-button">
          Retry
        </button>
      </div>
    );

  // ----------------------------------------
  // Render blogs if data fetched successfully
  return (
    <div className="blogs-container">
      {/* Page header */}
      <header className="page-header">
        <div className="button-container">
          {/* Main heading */}
          <h1>Latest Articles</h1>
        </div>
      </header>

      {/* Container for list of blogs */}
      <div className="blog-list">
        {blogs.map((blog) => {
          // Determine if the blog is AI-generated
          const isAI =
            blog.content.includes("AI-generated") ||
            blog.title.startsWith("##") ||
            blog.content.startsWith("##");

          return (
            <article
              key={blog.id}
              className={`blog-card ${isAI ? "ai-generated" : ""}`}
              onClick={() => handleBlogClick(blog.id)}
            >
              {/* Marker if blog is AI-generated */}
              {isAI && <span className="ai-generated-marker"></span>}

              {/* Blog meta info: published and updated dates */}
              <div className="blog-meta">
                <span className="publish-date">
                  {formatDate(blog.created_at)}
                </span>
                {blog.updated_at && blog.updated_at !== blog.created_at && (
                  <span className="update-date">
                    Updated: {formatDate(blog.updated_at)}
                  </span>
                )}
              </div>

              {/* Render blog title */}
              {renderTitle(blog.title)}

              {/* Preview of blog content */}
              <div className="blog-content-preview">
                {truncateContent(blog.content)}
                {/* Additional marker if content is AI-generated */}
                {isAI && <span className="ai-content-marker"></span>}
              </div>

              {/* Read more text */}
              <div className="read-more">Read full article →</div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
