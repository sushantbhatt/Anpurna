import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogStyles.css';

const Detail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data based on the ID
//   const blogData = {
//     1: {
//       title: "The Future of Interior Design in 2023",
//       content: [
//         "The interior design landscape is evolving rapidly, with 2023 bringing fresh perspectives on how we inhabit and experience our spaces. This year, we're seeing a strong emphasis on biophilic design elements that connect occupants more closely to nature. Large windows, indoor plants, and natural materials are becoming standard rather than exceptional features.",
//         "Another significant trend is the rise of 'multi-functional minimalism' - spaces that appear clean and uncluttered while actually containing clever, hidden storage solutions and convertible furniture. This approach answers the growing need for homes to serve as offices, gyms, and relaxation spaces all in one.",
//         "Color palettes are shifting toward earthy neutrals with occasional bold accents. Think warm taupes, soft clays, and deep forest greens paired with vibrant terracotta or electric blue highlights. This creates spaces that feel both grounded and dynamic.",
//         "Technology integration has become more subtle yet more sophisticated. From voice-controlled lighting to hidden charging stations, tech is being designed to disappear when not in use while remaining instantly accessible when needed.",
//         "Perhaps most importantly, 2023 marks a turning point in sustainable design. Clients are increasingly requesting materials with low environmental impact, and designers are responding with innovative solutions like recycled glass countertops, rapidly renewable bamboo flooring, and non-toxic paints."
//       ],
//       date: "May 15, 2023",
//       readTime: "5 min read",
//       category: "Design Trends",
//       image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       author: "Sarah Johnson",
//       authorTitle: "Lead Designer",
//       authorImage: "https://randomuser.me/api/portraits/women/44.jpg"
//     },
//     // Add similar objects for other blog IDs (2-6)
//   };



const blogData = {
    1: {
      title: "The Future of Interior Design in 2023",
      content: [
        "The interior design landscape is evolving rapidly, with 2023 bringing fresh perspectives on how we inhabit and experience our spaces. This year, we're seeing a strong emphasis on biophilic design elements that connect occupants more closely to nature. Large windows, indoor plants, and natural materials are becoming standard rather than exceptional features.",
        "Another significant trend is the rise of 'multi-functional minimalism' - spaces that appear clean and uncluttered while actually containing clever, hidden storage solutions and convertible furniture. This approach answers the growing need for homes to serve as offices, gyms, and relaxation spaces all in one.",
        "Color palettes are shifting toward earthy neutrals with occasional bold accents. Think warm taupes, soft clays, and deep forest greens paired with vibrant terracotta or electric blue highlights. This creates spaces that feel both grounded and dynamic.",
        "Technology integration has become more subtle yet more sophisticated. From voice-controlled lighting to hidden charging stations, tech is being designed to disappear when not in use while remaining instantly accessible when needed.",
        "Perhaps most importantly, 2023 marks a turning point in sustainable design. Clients are increasingly requesting materials with low environmental impact, and designers are responding with innovative solutions like recycled glass countertops, rapidly renewable bamboo flooring, and non-toxic paints."
      ],
      date: "May 15, 2023",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      author: "Sarah Johnson",
      authorTitle: "Lead Designer",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    2: {
      title: "Sustainable Materials for Modern Homes",
      content: [
        "Sustainability is no longer a niche consideration—it’s a cornerstone of modern home design. Homeowners are seeking materials that reduce environmental impact without sacrificing aesthetics or performance.",
        "Bamboo has emerged as a favorite flooring option thanks to its renewability and strength. Likewise, reclaimed wood adds character and history while minimizing deforestation.",
        "Recycled glass and concrete countertops are also gaining traction, offering durability with a reduced carbon footprint. These materials often feature unique colorations and textures that set them apart.",
        "Low-VOC and non-toxic paints contribute to healthier indoor air quality, making them a standard choice for eco-conscious interiors.",
        "As the market grows, more manufacturers are offering sustainable alternatives that blend beauty, functionality, and environmental responsibility seamlessly."
      ],
      date: "June 10, 2023",
      category: "Sustainable Living",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "David Kim",
      authorTitle: "Green Architect",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    3: {
      title: "Maximizing Small Spaces: Design Principles",
      content: [
        "Designing for small spaces is an art that requires smart planning and a minimalist mindset. Every square foot counts, and the right strategies can make even the tiniest room feel open and functional.",
        "Start with multi-purpose furniture—sofas that convert to beds, ottomans with hidden storage, and fold-down desks. These pieces increase flexibility without clutter.",
        "Use light, neutral color schemes to reflect natural light and make the space feel larger. Mirrors placed strategically can amplify this effect.",
        "Vertical storage is key. Think tall shelving, wall-mounted racks, and hanging planters to free up floor space.",
        "Keep décor minimal but meaningful. A few well-chosen pieces can create personality without overwhelming the room."
      ],
      date: "July 3, 2023",
      category: "Small Space Living",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Emily Clark",
      authorTitle: "Interior Stylist",
      authorImage: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    4: {
      title: "Color Psychology in Residential Design",
      content: [
        "Colors influence mood and behavior more than most realize, and incorporating color psychology into home design can lead to spaces that not only look beautiful but also feel just right.",
        "Blues and greens promote calm and are ideal for bedrooms and bathrooms. These colors mimic nature and bring a sense of serenity.",
        "Warm hues like reds, oranges, and yellows can energize a space, making them suitable for kitchens, dining rooms, and social areas.",
        "Neutral tones provide a balanced foundation and can be paired with accent colors to personalize a space without overwhelming it.",
        "Understanding your emotional needs and lifestyle goals can help you choose colors that support your well-being and creativity."
      ],
      date: "August 12, 2023",
      category: "Color Theory",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Lauren White",
      authorTitle: "Color Consultant",
      authorImage: "https://randomuser.me/api/portraits/women/51.jpg"
    },
    5: {
      title: "Lighting Strategies for Different Room Types",
      content: [
        "Lighting is one of the most important yet overlooked aspects of interior design. The right lighting can transform a room’s atmosphere, functionality, and even its perceived size.",
        "In living rooms, layered lighting is key—combine ambient lighting with task lights and accent lighting to allow flexibility.",
        "Kitchens benefit from bright, shadow-free lighting, especially around work surfaces. Under-cabinet lights and pendant fixtures over islands are both practical and stylish.",
        "Bedrooms should have dimmable options to transition from day to night. Consider sconces or bedside lamps for reading.",
        "Bathrooms require focused vanity lighting and ambient illumination. LED strips and wall-mounted fixtures work well here.",
        "Every room has unique needs, and a thoughtful lighting plan ensures comfort and usability in every space."
      ],
      date: "September 1, 2023",
      category: "Lighting Design",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Mark Silva",
      authorTitle: "Lighting Designer",
      authorImage: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    6: {
      title: "The Art of Mixing Textures and Patterns",
      content: [
        "Combining textures and patterns can breathe life into a space, adding depth and visual interest. But doing it well takes a keen eye and a bit of strategy.",
        "Start with a consistent color palette to unify the various elements. This ensures harmony even when the textures and patterns vary.",
        "Layer materials like velvet, linen, leather, and wood to create tactile richness. Contrasting rough and smooth surfaces keeps the room dynamic.",
        "Use patterns in moderation. Pair a bold geometric rug with subtle striped cushions or floral wallpaper with solid-colored furniture.",
        "Balance is everything. A few statement pieces go a long way when grounded by simpler surroundings. It’s about curated contrast, not chaos."
      ],
      date: "October 10, 2023",
      category: "Styling Tips",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Nina Patel",
      authorTitle: "Home Stylist",
      authorImage: "https://randomuser.me/api/portraits/women/60.jpg"
    }
  };
  







  const blog = blogData[id] ; 

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-header">
        <Link to="/static-blog" className="blog-back-link">← Back to Articles</Link>
        <div className="blog-detail-meta">
          <span className="blog-detail-category">{blog.category}</span>
          <span className="blog-detail-date">{blog.date}</span>
        
        </div>
        <h1 className="blog-detail-title">{blog.title}</h1>
      </div>
      
      <div className="blog-detail-image-container">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      </div>
      
      <div className="blog-detail-content">
        {blog.content.map((paragraph, index) => (
          <p key={index} className="blog-detail-paragraph">{paragraph}</p>
        ))}
      </div>
      
      <div className="blog-author-card">
        <img src={blog.authorImage} alt={blog.author} className="blog-author-image" />
        <div className="blog-author-info">
          <h3 className="blog-author-name">{blog.author}</h3>
          <p className="blog-author-title">{blog.authorTitle}</p>
        </div>
      </div>
      
     
    </div>
  );
};

export default Detail;