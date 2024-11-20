/** @format */

// Experience -> Addd when I join one company
import { title } from "framer-motion/client";
import { bookOutline, code } from "ionicons/icons";

export const timeLine = [
  { iconSymbol: bookOutline, iconName: "Education" },
  { iconSymbol: code, iconName: "Projects" },
];

export const timeLineDetails = {
  Education: [
    {
      title: "Institution Name (UG)",
      year: "2022 - 2025",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sit veritatis. At aperiam suscipit eveniet omnis aliquid quasi! Quam impedit fugiat beatae voluptatem delectus debitis explicabo provident quisquam nihil quis?",
    },
    {
      title: "Institution Name (HSC)",
      year: "2020 - 2022",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sit veritatis. At aperiam suscipit eveniet omnis aliquid quasi! Quam impedit fugiat beatae voluptatem delectus debitis explicabo provident quisquam nihil quis?",
    },
    {
      title: "Institution Name (SSC)",
      year: "2018 - 2020",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sit veritatis. At aperiam suscipit eveniet omnis aliquid quasi! Quam impedit fugiat beatae voluptatem delectus debitis explicabo provident quisquam nihil quis?",
    },
  ],
  Projects: [
    {
      title: "Project Name",
      year: "Creation Year",
      description: "Git Hub Link",
    },
    {
      title: "Project Name",
      year: "Creation Year",
      description: "Git Hub Link",
    },
  ],
  Experience: [null],
};

export const mySkills = [
  {
    SkillName: "Python",
    SkillPercentage: "90",
  },
  {
    SkillName: "React",
    SkillPercentage: "70",
  }
];
