import { useEffect, useRef, useState } from 'react';
import '@/App.css';
import Header from '@/components/NavBar';
import IndexPage from '@/components/IndexPage';
import Projects from '@/components/ProjectPage2';

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isMouseInLeftArea, setIsMouseInLeftArea] = useState(false);
  const [visibleSection, setVisibleSection] = useState<number | null>(0)
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      container.scrollBy({
        left: event.deltaY,
        behavior: 'smooth',
      });
    };

    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX;

    if (mouseX < 100) {
      setIsMouseInLeftArea(true);
    } else {
      setIsMouseInLeftArea(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sections = [
    { id: 0, content: <IndexPage/>},
    { id: 1, content: <Projects /> },
    { id: 2, content: <p>This is the content for Panel 3</p> },
    { id: 3, content: <p>This is the content for Panel 4</p> },
  ];


  return (
    <div ref={scrollContainerRef} className="container">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id.toString()} className="panel">
          <div className="contents">
          {section.content}
          <Header isVisible={index === 0 || visibleSection === index }/>
          </div>
        </section>
      ))}
    </div>
  );
};

export default App;