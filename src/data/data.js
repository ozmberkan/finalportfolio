import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";

export const socialMedia = [
  {
    id: 1,
    icon: FaLinkedin,
    to: "https://www.linkedin.com/in/berkanozm/",
  },
  {
    id: 2,
    icon: FaGithub,
    to: "https://github.com/ozmberkan",
  },
  {
    id: 3,
    icon: FaInstagram,
    to: "https://www.instagram.com/berkanozm/",
  },
  {
    id: 4,
    icon: FaXTwitter,
    to: "https://twitter.com/berkannozm",
  },
  { id: 5, icon: SiReaddotcv, to: "/resume", label: "Özgeçmiş" },
];

export const navTabs = [
  { id: 1, label: "Anasayfa", to: "/" },
  { id: 2, label: "Hakkımda", to: "/about" },
  { id: 3, label: "Projelerim", to: "/projects" },
];

export const adminTable = [
  { id: 1, label: "Başlık", key: "title" },
  { id: 2, label: "Açıklama", key: "description" },
  { id: 3, label: "Canlı Link", key: "link" },
  { id: 4, label: "Resim", key: "image" },
  { id: 5, label: "Github Link", key: "githubLink" },
  { id: 6, label: "Versiyon", key: "version" },
  { id: 7, label: "Duyarlılık", key: "responsive" },
  { id: 8, label: "Teknoloji", key: "technology" },
  { id: 9, label: "Stil Teknolojisi", key: "styleTech" },
  { id: 10, label: "Aksiyon", key: "action" },
];
