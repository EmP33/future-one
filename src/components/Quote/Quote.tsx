import React from "react";
import { Wrapper } from "./Quote.styles";
import { logo, quote as quoteIcon } from "../../assets";
import { IQuote } from "../../data";

const Quote: React.FC<{ quote: IQuote }> = ({ quote }) => {
  return (
    <Wrapper>
      <div className="quote__heading">
        <h2>{quote.title}</h2>
      </div>
      <div className="quote-content">
        <div className="quoteIcon quoteIcon--1">
          <img src={quoteIcon} alt="quote" />
        </div>
        <blockquote>{quote.content}</blockquote>
        <div className="quote-content__footer">
          <p>{quote.quoteAuthor}</p>
          <div className="quoteIcon quoteIcon--2">
            <img src={quoteIcon} alt="quote" />
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="invision" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Quote;
