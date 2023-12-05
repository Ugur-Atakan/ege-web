'use client'

import React from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'

const Navigation = ({ lang }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <React.Fragment>
        <Sidebar lang={lang} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <TopNavbar lang={lang} />
    </React.Fragment>
  );
};

export default Navigation
