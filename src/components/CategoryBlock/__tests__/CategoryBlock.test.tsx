import CategoryBlock from "../CategoryBlock";
import ShallowRenderer from "react-test-renderer/shallow";
import { categories } from "../../../data";

describe("<CategoryBlock />", () => {
  it("should render properly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CategoryBlock category={categories[0]} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
