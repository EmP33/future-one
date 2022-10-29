import React from "react";
import Layout from "../../components/Layout/Layout";
import { OutlineButton, PrimaryButton } from "../../Global.styles";
import { Wrapper, Newsletter } from "./Home.styles";
import { hero } from "../../assets";
import QuestionBlock from "../../components/QuestionBlock/QuestionBlock";
import Quote from "../../components/Quote/Quote";
import { categories, questions, quote } from "../../data";
import CategoryBlock from "../../components/CategoryBlock/CategoryBlock";

const Home = () => {
  return (
    <Layout>
      <>
        <Wrapper>
          <section className="hero">
            <div className="hero-action">
              <h1>
                <span>Duis aute irure</span> dolor in reprehenderit
              </h1>
              <p>
                Nam at lectus urna duis convallis. Id semper risus in hendrerit
                gravida rutrum quisque non tellus. Elit eget gravida cum sociis
                natoque. Ultrices neque ornare aenean euismod elementum nisi
                quis eleifend. Arcu felis bibendum ut tristique et egestas.
              </p>
              <PrimaryButton size="big" to="/">
                Discover now
              </PrimaryButton>
            </div>
            <div className="hero__image-wrapper">
              <img src={hero} alt="smiling woman" width="100%" height="100%" />
            </div>
          </section>
          <section className="faq">
            <h2 className="faq__title">Lacinia quis vel eros tempor orci.</h2>
            <div className="faq-content">
              {questions.map((question) => (
                <QuestionBlock key={question.id} question={question} />
              ))}
            </div>
          </section>
          <Quote quote={quote} />
          <section className="categories">
            <h2 className="categories__title">
              Massa tempor nec feugiat nisl pretium fusce
            </h2>
            <p>
              Pellentesque <strong>habitant</strong> morbi tristique senectus et
              netus et malesuada. <strong>Ipsum faucibus vitae</strong> aliquet
              nec ullamcorper sit amet risus nullam. Dictum varius duis at
              consectetur <strong>lorem donec</strong> massa sapien. Massa
              tempor nec feugiat nisl pretium fusce.
            </p>
            <p>Elit scelerisque mauris pellentesque?</p>
            <div className="categories-blocks">
              {categories.map((category) => (
                <CategoryBlock key={category.id} category={category} />
              ))}
            </div>
          </section>
        </Wrapper>
        <Newsletter>
          <div className="newsletter">
            <h2>Subscribe to our newsletter</h2>
            <div className="newsletter-action">
              <input type="text" placeholder="Company e-mail address" />
              <OutlineButton>Subscribe</OutlineButton>
            </div>
            <p>Chupa chups gummi bears shortbread candy</p>
          </div>
        </Newsletter>
      </>
    </Layout>
  );
};

export default Home;
