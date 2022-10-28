import React from "react";
import Layout from "../../components/Layout/Layout";
import { PrimaryButton } from "../../Global.styles";
import { Wrapper } from "./Home.styles";
import hero from "../../assets/hero.webp";

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <section className="hero">
          <div className="hero-action">
            <h1>
              <span>Duis aute irure</span> dolor in reprehenderit
            </h1>
            <p>
              Nam at lectus urna duis convallis. Id semper risus in hendrerit
              gravida rutrum quisque non tellus. Elit eget gravida cum sociis
              natoque. Ultrices neque ornare aenean euismod elementum nisi quis
              eleifend. Arcu felis bibendum ut tristique et egestas.
            </p>
            <PrimaryButton size="big" to="/">
              Discover now
            </PrimaryButton>
          </div>
          <div className="hero__image-wrapper">
            <img src={hero} alt="smiling woman" width="100%" height="100%" />
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
};

export default Home;
