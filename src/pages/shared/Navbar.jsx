import  { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { 
  FaDove, 
  FaUserCircle, 
  FaShoppingCart, 
  FaPaw, 
  FaHome,
  FaStore,
  FaHandHoldingHeart,
  FaSignInAlt,
  FaChartLine
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const location = useLocation();

  const navItems = [
    { link: "Home", path: "/", icon: <FaHome className="w-4 h-4" /> },
    { link: "Shop", path: "/shop", icon: <FaStore className="w-4 h-4" /> },
    { link: "Donation", path: "/donation-list", icon: <FaHandHoldingHeart className="w-4 h-4" /> },
    { link: "Pets", path: "/petlisting", icon: <FaPaw className="w-4 h-4" /> },
    { link: "Login", path: "/login", icon: <FaSignInAlt className="w-4 h-4" /> },
    { link: "Dashboard", path: "/admin/dashboard", icon: <FaChartLine className="w-4 h-4" /> },
  ];

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logOut().then();
    setIsOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 right-0 transition-all duration-300 z-50 
      ${isSticky ? "bg-white shadow-lg" : " backdrop-blur-sm bg-white/80"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaDove className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold bg-primary-600 bg-clip-text text-transparent">
              Pet Corner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map(({ link, path, icon }) => (
                (!user && link === "Dashboard") ? null : (
                  <li key={link}>
                    <Link
                      to={path}
                      className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-colors duration-200
                        ${location.pathname === path 
                          ? "text-blue-600 font-medium" 
                          : "text-gray-600 hover:text-blue-600"}`}
                    >
                      {icon}
                      <span>{link}</span>
                    </Link>
                  </li>
                )
              ))}
            </ul>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={handleToggle}
                  checked={theme === "dark"}
                  id="theme-toggle"
                />
                <label
                  htmlFor="theme-toggle"
                  className={`absolute cursor-pointer w-12 h-6 rounded-full transition-colors duration-300
                    ${theme === "dark" ? "bg-gray-700" : "bg-blue-100"}`}
                >
                  <div className={`absolute w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center
                    ${theme === "dark" 
                      ? "transform translate-x-6 bg-gray-900" 
                      : "bg-blue-500"}`}
                  >
                    {theme === "dark" 
                      ? <BsMoonFill className="w-3 h-3 text-white" />
                      : <BsSunFill className="w-3 h-3 text-white" />
                    }
                  </div>
                </label>
              </div>
            </div>

            {/* User Menu */}
            {user && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Logout
                </button>
                <Link to="/admin/dashboard">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full ring-2 ring-blue-600 ring-offset-2"
                    />
                  ) : (
                    <FaUserCircle className="w-8 h-8 text-gray-600" />
                  )}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? (
              <HiX className="w-6 h-6 text-gray-600" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <ul className="space-y-2 px-4">
              {navItems.map(({ link, path, icon }) => (
                (!user && link === "Dashboard") ? null : (
                  <li key={link}>
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200
                        ${location.pathname === path
                          ? "text-blue-600 bg-blue-50 font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"}`}
                    >
                      {icon}
                      <span>{link}</span>
                    </Link>
                  </li>
                )
              ))}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    <FaSignInAlt className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;