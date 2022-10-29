import React from "react";
import { ICategory } from "../../data";
// Icons
import { Zoom, Lifebuoy } from "../../assets";
import { AiFillAndroid } from "react-icons/ai";
import { FiScissors } from "react-icons/fi";
import { Wrapper } from "./CategoryBlock.styles";
import { BiChevronRight } from "react-icons/bi";

const CategoryBlock: React.FC<{ category: ICategory }> = ({ category }) => {
  let icon: any;
  if (category.iconName === "Lifebuoy") icon = <Lifebuoy />;
  if (category.iconName === "Scissors") icon = <FiScissors />;
  if (category.iconName === "Android") icon = <AiFillAndroid />;
  if (category.iconName === "Zoom") icon = <Zoom />;

  return (
    <Wrapper>
      {icon}
      <span>
        View details <BiChevronRight />
      </span>
    </Wrapper>
  );
};

export default CategoryBlock;
