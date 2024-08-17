// // import React from 'react';
// // import Typewriter from 'typewriter-effect';
// // import '@/assets/IndexPage.css';

// // const App = () => {
// //   return (
// //     <div className="app-container">
// //       <Typewriter
// //         options={{
// //           strings: [
// //             'Hello,<br />I am <span> Sagar </span> <span> Thakur </span> <br /> <span className="sp3"> crafting solutions <br /> that drive the <br /> future of IT</span>'
// //           ],
// //           // autoStart: true,
// //           loop: false,
// //           delay: 150,
// //         }}
// //         onInit={(typewriter) => {
// //           typewriter
// //             .typeString('Hello,<br />I am <span> Sagar </span> <span> Thakur </span> <br /> <span className="sp3"> crafting solutions </span><br /> that drive the <br /> future of IT')
// //             .start();
// //         }}
// //       />
// //       <img src='image.png' alt='image' />
// //     </div>
// //   );
// // };

// // export default App;
// import Typewriter from 'typewriter-effect';
// import '@/assets/IndexPage.css';
// import { Button } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const NeumorphicButton = styled(Button)(({ theme }) => ({
//   borderRadius: '12px', // Rounded corners
//   padding: '10px 20px', // Adjust padding as needed
//   backgroundColor: '#3a8fb7', // Blueish background color
//   color: '#ffffff', // White text color for contrast
//   boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.5)', // Neumorphic shadow
//   transition: 'all 0.3s ease', // Smooth transition
//   '&:hover': {
//     backgroundColor: '#1e5a7c', // Darker blue on hover
//     color: '#ffffff', // White text on hover
//     boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.6)', // Inset shadow for pressed effect
//   },
// }));
// const App = () => {
//   return (
//     <div className="app-container">
//       <Typewriter
//         options={{
//           strings: [
//               'Hello,<br />I am <span>Sagar</span> <span>Thakur</span>'],
//           loop: false,
//           delay: 150,
//         }}
//         onInit={(typewriter) => {
//           typewriter
//             .typeString('<h1>Hello,<br />I am <span>Sagar</span> <span>Thakur</span><br /> crafting solutions that<br />drive the future of <br /> Informaion Technology</span></h1>')
//             .start();
//         }}
//       /> 
//       <NeumorphicButton className='download' size='medium' variant='outlined' color='primary' >
//         Download Resume
//       </NeumorphicButton>
//       <img src='image.png' alt='image' className="static-image" />
//     </div>
//   );
// };

// export default App;
// import {useState, useEffect} from 'react';
// import Typewriter from 'typewriter-effect';
// import '@/assets/IndexPage.css';
// import { Button } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const NeumorphicButton = styled(Button)(({ theme }) => ({
//   borderRadius: '12px',
//   padding: '10px 20px',
//   backgroundColor: '#3a8fb7',
//   color: '#ffffff',
//   boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.5)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: '#1e5a7c',
//     color: '#ffffff',
//     boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
//   },
// }));

// const App = () => {
//   const [finished, setFinished] = useState(false);
//   return (
//     <div className="app-container">
//       <Typewriter
//           options={{
//             strings: ['<h1>Hello,<br />I am <span>Sagar</span> <span>Thakur</span></h1>'],
//             loop: false,
//             delay: 150,
//           }}
//           onInit={(typewriter) => {
//             typewriter
//               .typeString('<h1>Hello,<br />I am <span>Sagar</span> <span>Thakur</span></h1>')
//               .start().callFunction(()=>{
//                   setFinished(true);
//               });
//           }}

//         />
//          {finished && (
//           <div className='finished'>
//           <Typewriter
//             options={{
//               strings: [
//                 'Crafting solutions that <br /> drive the future of <br /> Information Technology</span>',
//                 'Passionate about <br /> coding and innovation.<br /></span>',
//                 'Exploring new technologies <br /> and methodologies.<br /></span>',
//                 'Committed to continuous <br /> learning and growth.<br /></span>',
//               ],
//               autoStart: true,
//               loop: true,
//               delay: 150,
//               deleteSpeed: 50,
//               pauseFor: 2000,
//             }}
//           />
//           </div> )}
//       <NeumorphicButton className='download' size='medium' variant='outlined' color='primary'>
//         Download Resume
//       </NeumorphicButton>
//       <img src='image.png' alt='image' className="static-image" />
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import '@/assets/IndexPage.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Download } from '@mui/icons-material';

const NeumorphicButton = styled(Button)(() => ({
  borderRadius: '12px',
  padding: '10px 20px',
  backgroundColor: '#3a8fb7',
  color: '#ffffff',
  boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#1e5a7c',
    color: '#ffffff',
    boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.6)',
  },
}));

const App = () => {
  const [finished, setFinished] = useState(false);
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'SagarResume.pdf';
    link.download = 'Resume_Sagar_Thakur.pdf';
    link.click();
  }

  return (
    <div className="app-container">
      <div className="text">
        <Typewriter
          options={{
            strings: ['<span >Hello,<br />I am <span>Sagar</span> <span>Thakur</span></span>'],
            loop: false,
            delay: 150,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span>Hello,<br />I am <span>Sagar</span> <span>Thakur</span></span>')
              .start()
              .callFunction(() => {
                setFinished(true);
              });
          }}
        />
        {finished && (
          <div className="finished">
            <Typewriter
              options={{
                strings: [
                  'Crafting solutions that <br /> drive the future of <br /> Information Technolog',
                  'Passionate about <br /> coding and innovation.<br />',
                  'Exploring new technologies <br /> and methodologies.<br />',
                  'Committed to continuous <br /> learning and growth.<br />',
                ],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
            />
          </div>
        )}
      </div>
      <NeumorphicButton className="download" size="medium" variant="outlined" color="primary" onClick={()=>downloadResume()}>
        Download Resume &nbsp; <Download sx={{color :'#00f2ff' }} />
      </NeumorphicButton>
      <div className="imgContainer">
        <img src="image.png" alt="image" className="static-image" />
      </div>
    </div>
  );
};

export default App;