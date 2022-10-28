import Header from "../Header";
import ShallowRenderer from "react-test-renderer/shallow";

beforeEach(() => {
  // setup a DOM element as a render target
  let container = document.createElement("div");
  container.setAttribute("id", "modal-root");
  document.body.appendChild(container);
});

describe("<Header />", () => {
  it("should render properly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
