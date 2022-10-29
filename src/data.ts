export interface IQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface IQuote {
  id: string;
  title: string;
  content: string;
  quoteAuthor: string;
}

export interface ICategory {
  id: number;
  iconName: string;
}

export const questions: IQuestion[] = [
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

export const quote: IQuote = {
  id: "q1",
  title: "Bibendum at varius vel pharetra vel turpis nunc eget lorem.",
  content:
    "Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla.",
  quoteAuthor: "Faucibus Vitae, Office Assistant",
};

export const categories: ICategory[] = [
  { id: 0, iconName: "Lifebuoy" },
  { id: 1, iconName: "Scissors" },
  { id: 2, iconName: "Android" },
  { id: 3, iconName: "Zoom" },
];
