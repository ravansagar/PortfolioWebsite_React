
// import { useEffect, useRef, useState } from 'react';
// import '@/components/HorizontalScroll.css';
// import Header from './NavBar';

// const HorizontalScroll = () => {
//   const scrollContainerRef = useRef<HTMLDivElement | null>(null);
//   const [visibleSection, setVisibleSection] = useState<number | null>(0);

//   useEffect(() => {
//     const container = scrollContainerRef.current;

//     if (!container) return;

//     const handleScroll = (event: WheelEvent) => {
//       event.preventDefault();
//       container.scrollBy({
//         left: event.deltaY,
//         behavior: 'smooth',
//       });
//     };

//     container.addEventListener('wheel', handleScroll);

//     return () => {
//       container.removeEventListener('wheel', handleScroll);
//     };
//   }, []);

//   const handleMouseMove = (event: MouseEvent) => {
//     if (!scrollContainerRef.current) return;

//     const containerRect = scrollContainerRef.current.getBoundingClientRect();
//     const mouseX = event.clientY;
// if (hoveredSection !== 0) {if (hoveredSection !== 0) {
  //         setVisibleSection(hoveredSection);
  //       }
  //     } else {
  //       setVisibleSection(null);
  //     }
  //         setVisibleSection(hoveredSection);
  //       }
  //     } else {
  //       setVisibleSection(null);
  //     }
//     const isInLeftArea = mouseX < containerRect.left + containerRect.width * 0.1;

//     if (isInLeftArea) {
//       const sectionWidth = containerRect.width / sections.length;
//       const hoveredSection = Math.floor((mouseX - containerRect.left) / sectionWidth);

//       if (hoveredSection !== 0) {
//         setVisibleSection(hoveredSection);
//       }
//     } else {
//      
//  setVisibleSection(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const sections = [1, 2, 3, 4];

//   return (
//     <div ref={scrollContainerRef} className="container">
//       {sections.map((e, index) => (
//         <section key={index} className="panel">
//           <Header isVisible={index === 0 || visibleSection === index} />
//           Panel {index + 1}
//         </section>
//       ))}
//     </div>
//   );
// };

// export default HorizontalScroll;




// import React, { useEffect, useRef } from 'react';
// import '@/components/HorizontalScroll.css'
// import Header from './NavBar';

// const HorizontalScroll = () => {
//   const scrollContainerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = scrollContainerRef.current;

//     if (!container) return; // Early return if container is not found

//     const handleScroll = (event: WheelEvent) => {
//       event.preventDefault();
//       container.scrollBy({
//         left: event.deltaY, // Scroll horizontally based on vertical scroll
//         behavior: 'smooth',
//       });
//     };

//     container.addEventListener('wheel', handleScroll);

//     return () => {
//       container.removeEventListener('wheel', handleScroll);
//     };
//   }, []);
//   const secctions = [1,2,3,4]
//   return (
//     <div ref={scrollContainerRef} className="container">
//   {
//     secctions.map((element, index) => (
//       <section key={index} className="panel">
//         <Header visibel={index == 1 ? 'hidden' : 'visible'} />
//         Panel {index + 1}
//       </section>
//     ))
//   }
// </div>

//   );
// };

// export default HorizontalScroll;
