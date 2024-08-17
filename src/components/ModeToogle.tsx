import { useTheme } from "@/components/Contexts/ThemeProvider";
import { Sun, Moon, LaptopMinimal } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import '@/assets/NeuMorphicDesign.css';

function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelect = (newTheme: 'light' | 'dark' | 'system', event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setTheme(newTheme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const getIconClass = (iconType: 'light' | 'dark' | 'system') => {
    if (theme === iconType) {
      return 'active-icon';
    }
    if (iconType === 'system') {
      // Apply system mode-specific class if needed
      return theme === 'dark' ? 'active-icon-dark' : 'active-icon-light';
    }
    return '';
  };

  return (
    <div className="neumorph-dropdown" ref={dropdownRef}>
      <div className="neumorph-dropdown-toggle" onClick={handleToggle}>
        {theme === 'light' ? (
          <Sun size={20} className={getIconClass('light')} />
        ) : theme === 'dark' ? (
          <Moon size={20} className={getIconClass('dark')} />
        ) : (
          <LaptopMinimal size={20} className={getIconClass('system')} />
        )}
      </div>
      {isOpen && (
        <div className="neumorph-dropdown-content">
          <div
            className="neumorph-dropdown-item"
            onClick={(event) => handleSelect('light', event)}
          >
            <Sun size={20} className={getIconClass('light')} /> Light
          </div>
          <div
            className="neumorph-dropdown-item"
            onClick={(event) => handleSelect('dark', event)}
          >
            <Moon size={20} className={getIconClass('dark')} /> Dark
          </div>
          <div
            className="neumorph-dropdown-item"
            onClick={(event) => handleSelect('system', event)}
          >
            <LaptopMinimal size={20} className={getIconClass('system')} /> System
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeDropdown;
