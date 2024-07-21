import Navbar from "../../components/navbar/navbar";
import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import Provinsi from "../../components/provinsi/provinsi";
import Global from "../../components/global/global";
import Hero from "../../components/hero/hero";
// import Button from "../../components/Button/Button";
import data from "../../utils/constants/provinsi";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);
  return (
    <main>
      <Hero />
      <Global />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function HomePage() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
      {/* <Button title="Button Component" /> */}
    </div>
  );
}

export default HomePage;
