import { mailOutline, phonePortraitOutline, locationOutline} from "ionicons/icons";

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
    icon: phonePortraitOutline, // React icon component
    iconName: "Phone",
    iconData: `<a href="tel:${phoneNo}">${phoneNo}</a>`,
  },
  {
    icon: locationOutline, // React icon component
    iconName: "Location",
    iconData: `<address>Banglore, India</address>`,
  },
];

import { logoFacebook, logoInstagram, logoTwitter, logoLinkedin } from "ionicons/icons";

export const socialLinks = [
  { iconLink: "#", iconLogo: logoFacebook },
  { iconLink: "#", iconLogo: logoTwitter },
  { iconLink: "#", iconLogo: logoInstagram },
  { iconLink: "#", iconLogo: logoLinkedin },
];
