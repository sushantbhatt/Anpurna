// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams} from "react-router-dom";
// import { marked } from "marked";
// import "./BlogDetail.css";

// const BlogDetail = () => {
//   const { blogId } = useParams();
 
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           `http://localhost:5588/getUniqueBlog/${blogId}`
//         );

//         if (res.data && res.data[0]) {
//           setBlog(res.data[0]);
//           // Convert markdown to HTML when data is received
//           setHtmlContent(marked(res.data[0].content));
//         } else {
//           throw new Error("Blog not found");
//         }

//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching blog:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [blogId]);

//   // Configure marked.js options
//   marked.setOptions({
//     breaks: true,
//     gfm: true,
//     headerIds: true,
//     headerPrefix: "",
//     langPrefix: "language-",
//     mangle: true,
//     pedantic: false,
//     sanitize: false,
//     silent: false,
//     smartLists: true,
//     smartypants: false,
//     xhtml: false,
//   });

//   if (loading)
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Loading blog post...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="error-container">
//         <div className="error-icon">⚠️</div>
//         <h3>Error Loading Blog</h3>
//         <p>{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="retry-button"
//         >
//           Try Again
//         </button>
//       </div>
//     );

//   if (!blog)
//     return (
//       <div className="not-found">
//         <h3>Blog Not Found</h3>
//         <p>The requested blog post doesn't exist or may have been removed.</p>
//       </div>
//     );

//   return (
//     <div className="blog-detail-container">
      
      

//       <div className="floating-actions">
//         <button
//           className="action-button"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           ↑
//         </button>
     
//       </div>

//       <div className="blog-content-container">

//       <article className="blog-article">
//         <header>
//           <h1>{blog.title.replace(/^##\s*/, "")}</h1>
//           <div className="meta">
//             <span>
//               Published:{" "}
//               {new Date(blog.created_at).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>
//             {blog.updated_at && blog.updated_at !== blog.created_at && (
//               <span>
//                 {" "}
//                 • Updated:{" "}
//                 {new Date(blog.updated_at).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </span>
//             )}
//           </div>
//         </header>

//         <div
//           className="blog-content"
//           dangerouslySetInnerHTML={{ __html: htmlContent }}
//         />
//       </article>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;







import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import "./BlogDetail.css";

const BlogDetail = () => {
  // Get blogId from URL params
  const { blogId } = useParams();

  // State to store blog data
  const [blog, setBlog] = useState(null);
  // State for loading status
  const [loading, setLoading] = useState(true);
  // State for error handling
  const [error, setError] = useState(null);
  // State to store converted HTML from Markdown
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Function to fetch single blog details
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5588/getUniqueBlog/${blogId}`);

        if (res.data && res.data[0]) {
          setBlog(res.data[0]);
          // Convert the Markdown content into HTML
          setHtmlContent(marked(res.data[0].content));
        } else {
          throw new Error("Blog not found");
        }

        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  // Configure marked.js options for parsing markdown
  marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    sanitize: false,
    silent: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

  // If loading, show a spinner and loading message
  if (loading)
    return (
      <div className="loading-container">
        {/* Spinner for loading */}
        <div className="spinner"></div>
        {/* Loading text */}
        <p>Loading blog post...</p>
      </div>
    );

  // If there's an error, show an error message and retry button
  if (error)
    return (
      <div className="error-container">
        {/* Error warning icon */}
        <div className="error-icon">⚠️</div>
        {/* Error heading */}
        <h3>Error Loading Blog</h3>
        {/* Error details */}
        <p>{error}</p>
        {/* Retry button to reload page */}
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Try Again
        </button>
      </div>
    );

  // If blog not found, show a not found message
  if (!blog)
    return (
      <div className="not-found">
        {/* Blog not found heading */}
        <h3>Blog Not Found</h3>
        {/* Description */}
        <p>The requested blog post doesn't exist or may have been removed.</p>
      </div>
    );

  // Main return block
  return (
    <div className="blog-detail-container">
      {/* Main container for the entire blog detail page */}

      {/* Floating actions container */}
      <div className="floating-actions">
        {/* Button to scroll back to top */}
        <button
          className="action-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>

      {/* Container for blog content */}
      <div className="blog-content-container">
        {/* Blog article section */}
        <article className="blog-article">
          {/* Blog header */}
          <header>
            {/* Blog title (if it has '##' heading mark, remove it) */}
            <h1>{blog.title.replace(/^##\s*/, "")}</h1>

            {/* Metadata container */}
            <div className="meta">
              {/* Publish date */}
              <span>
                Published:{" "}
                {new Date(blog.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>

              {/* Update date if different from created date */}
              {blog.updated_at && blog.updated_at !== blog.created_at && (
                <span>
                  {" "}
                  • Updated:{" "}
                  {new Date(blog.updated_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>
          </header>

          {/* Render parsed HTML blog content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
