import Quote from "../Quote";
import ShallowRenderer from "react-test-renderer/shallow";
import { quote } from "../../../data";

describe("<Quote />", () => {
  it("should render properly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Quote quote={quote} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
