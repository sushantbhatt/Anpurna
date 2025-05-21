// import React from 'react';
// import { motion } from 'framer-motion';
// import './TrustSection.css';

// const TrustSection = () => {
//   return (
//     <div className="trust-section-container">
//       <motion.section 
//         className="trust_section"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <motion.h3
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           TRUST THE EXPERTS FOR ALL
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <h4 style={{ marginTop: '1rem' }}>
//               "YOUR BUILDING NEED"
//             </h4>
//           </motion.div>
//         </motion.h3>
//       </motion.section>
//     </div>
//   );
// };

// export default TrustSection;














import React from 'react';  // Import React to build UI components
import { motion } from 'framer-motion';  // Import Framer Motion for animations
import './TrustSection.css';  // Import CSS for styling this section

// TrustSection component: highlights trust message with animations
const TrustSection = () => {
  return (
    // Outer container for the trust section to control layout and spacing
    <div className="trust-section-container">

      {/* Animated section wrapper: fades in and scales up when in view */}
      <motion.section 
        className="trust_section"                         // CSS class for styling the section
        initial={{ opacity: 0, scale: 0.9 }}                // Start invisible and slightly smaller
        whileInView={{ opacity: 1, scale: 1 }}             // Animate to fully visible and normal size when scrolled into view
        transition={{ duration: 0.5 }}                      // Animation lasts half a second
        viewport={{ once: true }}                          // Run animation only once per page load
      >

        {/* Animated heading: slides up and fades in */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}                   // Hidden and 20px lower initially
          whileInView={{ opacity: 1, y: 0 }}               // Animate to visible and original position
          transition={{ duration: 0.5, delay: 0.2 }}       // Start after 0.2s delay, lasting 0.5s
          viewport={{ once: true }}                        // Only animate once
        >
          {/* Main trust message text */}
          TRUST THE EXPERTS FOR ALL

          {/* Sub-container for the quote line with its own animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}                   // Hidden and lower at start
            whileInView={{ opacity: 1, y: 0 }}               // Animate up into view
            transition={{ duration: 0.5, delay: 0.4 }}       // Delay start until 0.4s
            viewport={{ once: true }}                        // Animate only once
          >
            {/* Subtitle text styled with top margin */}
            <h4 style={{ marginTop: '1rem' }}>
              "YOUR BUILDING NEED"
            </h4>
          </motion.div>
        </motion.h3>
      </motion.section>
    </div>
  );
};

export default TrustSection;  // Export component for use in Home page or other parents
