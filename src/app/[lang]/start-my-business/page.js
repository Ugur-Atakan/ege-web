'use client';

import React from 'react';
import Content from './components/Content'

export default function Page({ params: { lang } }) {
    return (
      <Content lang={lang} />
    );
}