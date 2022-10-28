import ResponsiveMenu from "../ResponsiveMenu";
import ReactShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";
import styled from "styled-components";
import "jest-styled-components";

const StyledResponsiveMenu = styled.nav<{ showMenu: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: var(--color-green);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.2s linear;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0)" : "translateX(100%)"};

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

describe("<ResponsiveMenu />", () => {
  it("should render properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <ResponsiveMenu showMenu={true} toggleShowMenu={jest.fn()} />
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should have transform translateX set on 0 when showMenu is true", () => {
    const menu = renderer
      .create(<StyledResponsiveMenu showMenu={true} />)
      .toJSON();
    expect(menu).toHaveStyleRule("transform", "translateX(0)");
  });

  it("should have transform translateX set on 100% when showMenu is false", () => {
    const menu = renderer
      .create(<StyledResponsiveMenu showMenu={false} />)
      .toJSON();
    expect(menu).toHaveStyleRule("transform", "translateX(100%)");
  });
});
