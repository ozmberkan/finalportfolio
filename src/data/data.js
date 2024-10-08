import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";

export const socialMedia = [
  { id: 1, icon: FaLinkedin, to: "https://www.linkedin.com/in/berkanozm/" },
  { id: 2, icon: FaGithub, to: "https://github.com/ozmberkan" },
  { id: 3, icon: FaInstagram, to: "https://www.instagram.com/berkanozm/" },
  { id: 4, icon: FaXTwitter, to: "https://twitter.com/berkannozm" },
  { id: 5, icon: SiReaddotcv, to: "/resume" },
];

export const navTabs = [
  { id: 1, label: "Anasayfa", to: "/" },
  { id: 2, label: "Hakkımda", to: "/about" },
  { id: 3, label: "Projelerim", to: "/projects" },
];
