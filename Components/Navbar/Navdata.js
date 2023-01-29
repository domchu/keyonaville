import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "HOME",
  },
  {
    id: 2,
    url: "/about",
    text: "ABOUT",
  },
  {
    id: 3,
    url: "/blog",
    text: "BLOG",
  },
  {
    id: 4,
    url: "/facilities",
    text: "FACILITIES",
  },
  {
    id: 5,
    url: "/gallery",
    text: "GALLERY",
  },
  {
    id: 6,
    url: "/contact",
    text: "CONTACT",
  },
  {
    id: 7,
    url: "/faq",
    text: "FAQ",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: <FaFacebook />,
    iconName: "FACEBOOK",
  },
  {
    id: 2,
    url: "https://www.twitter.com/",
    icon: <FaTwitter />,
    iconName: "TWITTER",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
    iconName: "LINKEDIN",
  },
  {
    id: 4,
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
    iconName: "INSTAGRAM",
  },
  {
    id: 5,
    url: "https://www.whatsapp.com/",
    icon: <FaWhatsapp />,
    iconName: "WHATSHAPP",
  },
];
