import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: () => void;
}

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'PROJECTS', path: '/projects' },
];

const rightNavItems = [
  { label: 'SERVICES', path: '/services' },
  { label: 'INSIGHTS', path: '#' },
  { label: 'CONTACT', path: '/contact' },
];

const allNavItems = [...navItems, ...rightNavItems];

export function Navbar({ onNavigate }: NavbarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 lg:px-10 py-5">
          {/* Logo */}
          <Link to="/" onClick={handleClick} className="flex items-center gap-8">
            <div className="w-15 h-10 rounded-full overflow-hidden">
              <img
                src="/images/homepage/hs.png"
                alt="Kundia"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleClick}
                className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-70 ${
                  isScrolled
                    ? currentPath === item.path
                      ? 'text-white'
                      : 'text-whitew/70'
                    : currentPath === item.path
                      ? 'text-white'
                      : 'text-white/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={item.path !== '#' ? handleClick : undefined}
                className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-70 ${
                  item.path === '#' ? 'opacity-50 cursor-not-allowed' : ''
                } ${
                  isScrolled
                    ? currentPath === item.path
                      ? 'text-black'
                      : 'text-white/70'
                    : currentPath === item.path
                      ? 'text-white'
                      : 'text-white/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {allNavItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={handleClick}
                    className={`text-2xl font-medium uppercase tracking-wider ${
                      item.path === '#' ? 'opacity-50 cursor-not-allowed' : ''
                    } ${
                      currentPath === item.path ? 'text-black' : 'text-black/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
