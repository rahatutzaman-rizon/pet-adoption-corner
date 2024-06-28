import { useContext, useEffect, useState } from "react";
import { FaDove } from "react-icons/fa6";
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

    const handlelogout = () => {
        logOut().then()
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
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
            className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300"
        >
            <nav className={`py-4 lg:px-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-white shadow-lg" : ""}`}>
                <div className="flex justify-between items-center text-black gap-2">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/" className="text-3xl font-bold text-pink-700 flex items-center">
                            <FaDove className="inline-block mr-2" />Pet Corner
                        </Link>
                    </motion.div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-square btn-ghost"
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

                    <ul className="md:flex space-x-2 hidden navitems">
                        {navItems.map(({ link, path }) => (
                            <motion.li key={link} whileHover={{ scale: 1.1 }}>
                                <Link to={path} className="link block font-bold text-base cursor-pointer uppercase text-black hover:text-blue-700">
                                    {link}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {user && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlelogout}
                            className="btn btn-info rounded-full"
                        >
                            logout
                        </motion.button>
                    )}

                    {/* <motion.div whileHover={{ scale: 1.05 }}>
                        <Link className="btn btn-info rounded-full h-2">{user?.email}</Link>
                    </motion.div> */}

                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link to="/admin/dashboard">
                            <img className="rounded-full h-8" src={user?.photoURL} alt="" />
                        </Link>
                    </motion.div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;