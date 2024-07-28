import { useContext, useEffect, useState } from "react";
import { FaDove, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sun from "./light.png";
import moon from "./dark.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isSticky, setIsSticky] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleLogout = () => {
        logOut().then();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Shop", path: "/shop" },
        { link: "Donation", path: "/donation-campign" },
        { link: "Pets", path: "/petlisting" },
        { link: "Login", path: "/login" },
        { link: "Dashboard", path: "/admin/dashboard" },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-transparent bg-sky-700 fixed top-0 left-0 right-0 transition-all ease-in duration-300"
        >
            <nav className={`py-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-white shadow-lg" : ""}`}>
                <div className="flex justify-between items-center text-black gap-2">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/" className="text-3xl font-bold text-pink-700 flex items-center">
                            <FaDove className="inline-block mr-2" />Pet Corner
                        </Link>
                    </motion.div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-square btn-ghost md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </motion.button>

                    <ul className={`md:flex space-x-2 hidden navitems ${isOpen ? 'block' : 'hidden'}`}>
                        {navItems.map(({ link, path }) => (
                            <motion.li key={link} whileHover={{ scale: 1.1 }}>
                                <Link to={path} className="block font-bold text-base cursor-pointer  uppercase text-black hover:text-blue-700">
                                    {link}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {user && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLogout}
                            className="btn btn-info rounded-full hidden md:block"
                        >
                            Logout
                        </motion.button>
                    )}

                    {user && (
                        <motion.div whileHover={{ scale: 1.1 }} className="hidden md:block">
                            <Link to="/admin/dashboard">
                                <img className="rounded-full h-8" src={user?.photoURL} alt="" />
                            </Link>
                        </motion.div>
                    )}

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-square btn-ghost hidden md:block"
                    >
                        <label className="swap swap-rotate w-12 h-12">
                            <input
                                type="checkbox"
                                onChange={handleToggle}
                                checked={theme === "light" ? false : true}
                            />
                            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
                            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
                        </label>
                    </motion.button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-4 bg-sky-800">
                        <ul className="space-y-4">
                            {navItems.map(({ link, path }) => (
                                <motion.li key={link} whileHover={{ scale: 1.1 }}>
                                    <Link to={path} className="block font-bold text-base cursor-pointer uppercase  mx-8 text-white hover:text-sky-400">
                                        {link}
                                    </Link>
                                </motion.li>
                            ))}
                            {user && (
                                <motion.li whileHover={{ scale: 1.1 }}>
                                    <button onClick={handleLogout} className="block font-bold text-base cursor-pointer uppercase  mx-8 text-white hover:text-sky-400">
                                        Logout
                                    </button>
                                </motion.li>
                            )}
                        </ul>
                    </div>
                )}
            </nav>
        </motion.header>
    );
};

export default Navbar;
