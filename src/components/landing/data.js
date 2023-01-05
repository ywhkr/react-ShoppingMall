import HeroImage from "./assets/img/hero-img.png";
import AboutImg from "./assets/img/about.png";
import Feature1BgImg from "./assets/img/features/feature1_bg.png";
import Feature2BgImg from "./assets/img/features/feature2_bg.png";
import Feature3BgImg from "./assets/img/features/feature3_bg.png";
import Feature4BgImg from "./assets/img/features/feature4_bg.png";
import Feature1Img from "./assets/img/features/feature1.png";
import Feature2Img from "./assets/img/features/feature2.png";
import Feature3Img from "./assets/img/features/feature3.png";
import Feature4Img from "./assets/img/features/feature4.png";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export const heroData = {
  title: ` Shopping Products Faster Easier`,
  subtitle: "Shopping your favorite clothes at any time and anywhere",
  btnText: "Go To Shopping",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Shopping at AnyWhere",
  subtitle:
    "test test test test test test test testtest test test test test test test test test test test test test test",
};

export const featuresData = {
  title: "Some Services We Offer",
  subtitle:
    "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Payment Done",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Find Your Product",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Product Received",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const footerData = {
  address: "234 Bokki Avenue Street BMW 99388",
  email: "info@producttexas.project",
  phone: "1-232-7788 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "©  2022. All rights reserved. Company Registration Number: 09833888.",
  icon: <BsChatDotsFill />,
};
