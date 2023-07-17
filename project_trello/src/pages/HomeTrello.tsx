import React from 'react';
import NavbarTrello from '../components/homeTrello/NavbarTrello';
import ContentTrello from '../components/homeTrello/ContentTrello';
import Footer from '../components/homeTrello/Footer';

export default function HomeTrello() {
  return (
    <div>
      <NavbarTrello />
      <ContentTrello />
      <Footer />
    </div>
  );
}
