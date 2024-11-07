import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import SideBar from './SideBar';
import Navbar from '../pages/shared/Navbar';

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);  // Always show sidebar on larger screens
      } else {
        setIsSidebarOpen(false);  // Hide sidebar on smaller screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={isSmallScreen ? { x: "-100%" } : { x: 0 }}
              animate={{ x: 0 }}
              exit={isSmallScreen ? { x: "-100%" } : { x: 0 }}
              transition={{ duration: 0.3 }}
              className={`${
                isSmallScreen ? "fixed inset-y-0 left-0 z-30 mt-8" : "relative"
              }  bg-white shadow-lg mt-8`}
            >
              <SideBar 
                closeSidebar={() => isSmallScreen && setIsSidebarOpen(false)} 
                isSmallScreen={isSmallScreen}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1 flex flex-col overflow-hidden mx-4 sm:mx-6 lg:mx-12">
          <header className="bg-white shadow-sm z-20 lg:hidden">
            <div className="flex-shrink-0 px-4 py-2 flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
              <h1 className="text-xl font-semibold text-gray-800">Total Dashboard</h1>
            </div>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Outlet />
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
