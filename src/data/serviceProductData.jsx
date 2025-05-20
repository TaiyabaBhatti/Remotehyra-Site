import {
  FcIdea,
  FcSerialTasks,
  FcSearch,
  FcCustomerSupport,
  FcSettings,
} from "react-icons/fc";

const services = [
  {
    title: "Machine Learning Solutions",
    desc: "Custom ML models to automate decisions and predict outcomes",
    icons: <FcSettings className="text-4xl " />,
    path: "/singlePage",
  },
  {
    title: "Natural language processing",
    desc: "Transform how your business interacts with text and speech.",
    icons: <FcCustomerSupport className="text-4xl " />,
    path: "",
  },
  {
    title: "computer vision",
    desc: "Advanced image and video analysis solutions.",
    icons: <FcSearch className="text-4xl " />,
    path: "",
  },
  {
    title: "AI consulting ",
    desc: "Strategic guidance for AI implementation and optimization",
    icons: <FcIdea className="text-4xl " />,
    path: "",
  },
  {
    title: "Deep learning",
    desc: "Neural network solutions for complex problem-solving.",
    icons: <FcSerialTasks className="text-4xl " />,
    path: "",
  },
  {
    title: "custome software development",
    desc: "Tailored software solutions designed to meet your unique business needs.",
    icons: <FcSearch className="text-4xl " />,
    path: "",
  },
];

export default services;
