import QuestionBlock from "../QuestionBlock";
import ShallowRenderer from "react-test-renderer/shallow";
import { IQuestion } from "../../../data";

const question: IQuestion = {
  question: "Example question",
  answer: "Example Answer",
  id: "01",
};

describe("<QuestionBlock />", () => {
  it("should render properly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<QuestionBlock question={question} key={question.id} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
