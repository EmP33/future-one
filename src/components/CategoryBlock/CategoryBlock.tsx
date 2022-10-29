import React from "react";
import { ICategory } from "../../data";
// Icons
import { Zoom } from "../../assets";
import { HiLifebuoy } from "react-icons/hi2";
import { AiFillAndroid } from "react-icons/ai";
import { FiScissors } from "react-icons/fi";
import { Wrapper } from "./CategoryBlock.styles";
import { BiChevronRight } from "react-icons/bi";

const CategoryBlock: React.FC<{ category: ICategory }> = ({ category }) => {
  let icon: any;
  if (category.iconName === "Lifebuoy") icon = <HiLifebuoy />;
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
