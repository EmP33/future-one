import React from "react";
import Layout from "../../components/Layout/Layout";
import { PrimaryButton } from "../../Global.styles";
import { Wrapper } from "./Home.styles";
import { hero, logo, quote } from "../../assets";
import QuestionBlock from "../../components/QuestionBlock/QuestionBlock";

export interface IQuestion {
  id: string;
  question: string;
  answer: string;
}

const questions: IQuestion[] = [
  {
    id: "01",
    question: "Arcu non odio",
    answer:
      "Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.",
  },
  {
    id: "02",
    question: "Eget gravida cum sociis",
    answer:
      "Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.",
  },
  {
    id: "03",
    question: "Massa massa ultricies ",
    answer:
      "Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.",
  },
];

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
        <section className="faq">
          <h2 className="faq__title">Lacinia quis vel eros tempor orci.</h2>
          <div className="faq-content">
            {questions.map((question) => (
              <QuestionBlock key={question.id} question={question} />
            ))}
          </div>
        </section>
        <section className="quote">
          <div className="quote__heading">
            <h2>Bibendum at varius vel pharetra vel turpis nunc eget lorem.</h2>
          </div>
          <div className="quote-content">
            <div className="quoteIcon quoteIcon--1">
              <img src={quote} alt="quote" />
            </div>
            <blockquote>
              Aliquam purus sit amet luctus venenatis lectus magna. Faucibus
              purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae
              purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc
              mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit
              duis tristique sollicitudin nibh sit amet commodo nulla.
            </blockquote>
            <div className="quote-content__footer">
              <p>Faucibus Vitae, Office Assistant </p>
              <div className="quoteIcon quoteIcon--2">
                <img src={quote} alt="quote" />
              </div>
            </div>
            <div className="logo">
              <img src={logo} alt="invision" />
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
};

export default Home;
