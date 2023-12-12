'use client'

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'

const Navigation = ({ lang }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <React.Fragment>
        <Sidebar 
          lang={lang} 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen} 
        />
        <TopNavbar 
          lang={lang}
          setSidebarOpen={setSidebarOpen}
        />
    </React.Fragment>
  );
};

export default Navigation
