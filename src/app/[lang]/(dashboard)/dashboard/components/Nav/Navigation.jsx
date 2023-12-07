'use client'

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'

const Navigation = ({ lang, user, companies }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userObj = JSON.parse(user);
  const companiesObj = JSON.parse(companies);

  return (
    <React.Fragment>
        <Sidebar 
          lang={lang} 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen} 
          user={userObj}
          companies={companiesObj}
        />
        <TopNavbar 
          lang={lang}
          setSidebarOpen={setSidebarOpen} 
          user={userObj}
        />
    </React.Fragment>
  );
};

export default Navigation
