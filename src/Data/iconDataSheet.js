import { mailOutline } from "ionicons/icons";
import { IoPhonePortraitOutline } from "react-icons/io5";

// Constant Values
const emailId = "diagoarden@gmail.com";
const phoneNo = "+91-7208715575";

export const iconDS = [
  {
    icon: mailOutline, // Ionicon name
    iconName: "Email",
    iconData: `<a href="mailto:${emailId}">${emailId}</a>`,
  },
  {
    icon: mailOutline, // React icon component
    iconName: "Phone",
    iconData: `<a href="tel:${phoneNo}">${phoneNo}</a>`,
  },
  {
    icon: mailOutline, // React icon component
    iconName: "Location",
    iconData: `<address>Banglore, India</address>`,
  },
];

import { logoFacebook } from "ionicons/icons";
import { logoTwitter } from "ionicons/icons";
import { logoInstagram } from "ionicons/icons";

export const socialLinks = [
  { iconLink: "#", iconName: { logoFacebook } },
  { iconLink: "#", iconName: { logoTwitter } },
  { iconLink: "#", iconName: { logoInstagram } },
];

export const AboutMeText = [
  "Hello, I’m Arden Diago from Mumbai, currently residing in Bangalore. I’m in my third year of pursuing a BCA and am passionate about programming and continuous learning. Over the years, I’ve developed and worked on numerous projects, gaining significant experience in my field.",
  "During my second year, I served as the department secretary, where I honed my leadership and organizational skills. In addition to programming, I enjoy playing music and have a strong affinity for coding in Python, though I’m always eager to explore and learn new programming languages. I’m proficient in Python and have experience with languages and technologies such as React, JavaScript, Java, and C.",
  "I’m excited about the future and look forward to expanding my skills and contributing to innovative projects.",
];

// Importing Images
import design from "../assets/svgFiles/AboutMe/icon-design.svg";
import app from "../assets/svgFiles/AboutMe/icon-app.svg";
import dev from "../assets/svgFiles/AboutMe/icon-dev.svg";
import photo from "../assets/svgFiles/AboutMe/icon-photo.svg";

export const servicesDone = [
  {
    imgPath: design,  // Directly assigning the image path
    imgText: "Design",
    serviceTitle: "Web Development",
    serviceDescription: "The most modern and high-quality websites, crafted at a professional level.",
  },
  {
    imgPath: dev,  // Directly assigning the image path
    imgText: "Development",
    serviceTitle: "Code Artisan",
    serviceDescription: "Crafting elegant, efficient code with an artisan’s touch—blending creativity and precision to deliver exceptional software solutions.",
  },
];



// Experience -> Addd when I join one company
import { bookOutline } from 'ionicons/icons';


export const timeLine = [{iconSymbol: {bookOutline}, iconName: "Education"}];
export const timeLineDetails = {
  "Education": [
    {
      collegeName: "Don Bosco Lonavala (SSC)",
      year: "2018 - 2020",
      description: "I completed my SSC at this institution, which was also a boarding school. There, I developed a range of valuable skills, including music, problem-solving, and leadership. The comprehensive education and diverse learning opportunities provided by the school have significantly contributed to my personal and professional growth.",
    },
    {
      collegeName: "Don Bosco Lonavala (HSC)",
      year: "2020 - 2022",
      description: "I continued my education at the same institution, where I honed skills in effective communication and presentation. I focused on improving my verbal expression and ensuring I could deliver precisely what was required. My time there also emphasized my attention to detail.",
    },
    {
      collegeName: "ST Pauls College (UG)",
      year: "2022 - 2025",
      description: "I enhanced my verbal communication skills and developed strong leadership abilities. In my second year, I served as the department secretary, where I also designed and built several websites for the department's fest. Additionally, I participated in many college events and was always ready to assist when needed. As a very studious student, I have made significant improvements in various aspects of my education.",
    }
  ],
  "Experience": [null]
};
