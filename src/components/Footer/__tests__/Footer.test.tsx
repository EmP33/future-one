import Footer from "../Footer";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<Footer />", () => {
  it("should render properly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Footer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
