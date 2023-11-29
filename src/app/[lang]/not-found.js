import React from 'react';
import Footer from '@/components/common/Footer'
import Navbar from '@/app/[lang]/onboarding/components/common/Navbar'
import NotFound from '@/components/common/NotFound'

const Notfound = () => {
  return (
    <main>
      <Navbar />
      <NotFound />
      <Footer />
    </main>
  );
};

export default NotFound
