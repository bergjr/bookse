import Banner from "components/Banner";
import Header from "components/Header";
import News from "components/News";
import Releases from "components/Releases";
import Topics from "components/Topics";
import React from "react";

export default function StandardPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Releases title='Últimos Lançamentos'/>
        <Releases title='Mais Vendidos'/>
        <Topics />
        <News />
      </main>
    </>
  );
}
