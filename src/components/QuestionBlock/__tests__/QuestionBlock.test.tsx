import QuestionBlock from "../QuestionBlock";
import ShallowRenderer from "react-test-renderer/shallow";
import { IQuestion } from "../../../pages/Home";

const question: IQuestion = {
  question: "Example question",
  answer: "Example Answer",
  id: "01",
};

beforeEach(() => {
  // setup a DOM element as a render target
  let container = document.createElement("div");
  container.setAttribute("id", "modal-root");
  document.body.appendChild(container);
});

describe("<QuestionBlock />", () => {
  it("should render properly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<QuestionBlock question={question} key={question.id} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
