import React from "react";
import Layout from "../../components/Layout/Layout";
import { PrimaryButton } from "../../Global.styles";
import { Wrapper } from "./Home.styles";
import hero from "../../assets/hero.webp";
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
      </Wrapper>
    </Layout>
  );
};

export default Home;
