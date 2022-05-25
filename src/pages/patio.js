import * as React from "react";
import Room from '../components/RoomPatio';
import Footer from '../components/Footer';
import Header from '../components/Header';

const IndexPage = () => {
  const page = "Kaldevi - Patio";
  return (
    <div>
      <Header page={page}/>
      <Room />
      <Footer />
    </div>
  )
}

export default IndexPage
