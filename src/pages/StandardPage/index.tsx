import Banner from "components/Banner";
import Header from "components/Header";
import Releases from "components/Releases";
import React from "react";

export default function StandardPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Releases />
      </main>
    </>
  );
}
