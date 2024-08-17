import '@/assets/NavBar.css';

interface HeaderProps {
  isVisible : boolean
  className? : string
}
const Header = ({ isVisible, className } : HeaderProps) => {
  const navElements = ['Home', 'Project', 'About', 'Contact'];

  return (
    <div
      className={`cont ${className}`}
      style={{ visibility: isVisible ? 'visible' : 'collapse' }}
    >
      <ul>
        {navElements.map((value, key) => (
          <li className='liElements' key={key}><a href={`#${key}`}>{value}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Header;



// import '@/assets/NavBar.css'

// const Header = ({visibel}) => {
//   const navElements = ['Home','Project','About','Contact']
//   return (
//     <div className='cont' style={{ visibility: visibel }}>
//       <ul>
//       {navElements.map((value, key) => (
//         <li className='liElements' key={key}>{value}</li>
//       ))} 
//       </ul>
//     </div>
//   )
// }

// export default Header;