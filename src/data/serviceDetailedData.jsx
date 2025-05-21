import {
  FcIdea,
  FcSerialTasks,
  FcSearch,
  FcCustomerSupport,
  FcSettings,
} from "react-icons/fc";

const services = [
  {
    id: "machine-learning",
    title: "Machine Learning Solutions",
    desc: "Custom ML models to automate decisions and predict outcomes",
    icons: <FcSettings className="text-4xl " />,
    data: {
      title: "Machine Learning Solutions",
      desc: "Our machine learning solutions help businesses leverage data to make better decisions, automate processes, and gain competitive advantages through predictive analytics.",
      benefitList: [
        "Reduced operational costs through automation",
        "Improved decision making with predictive analytics",
        "Enhanced customer experience through personalization",
        "Increased efficiency in business processes",
        "Data-driven insights for strategic planning",
      ],

      processList: [
        {
          title: "Data Assessment",
          desc: "We analyze your existing data infrastructure and requirements",
        },
        {
          title: "Model Development",
          desc: "Custom ML model development and training",
        },
        {
          title: "Integration",
          desc: "Seamless integration with your existing systems",
        },
        {
          title: "Testing & Validation",
          desc: "Rigorous testing to ensure accuracy and reliability",
        },
        {
          title: "Deployment & Monitoring",
          desc: "Production deployment with continuous monitoring",
        },
      ],
      skillList: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Python",
        "AWS SageMaker",
        "Azure ML",
      ],
    },
  },
  {
    id: "natural-language-processing",
    title: "Natural language processing",
    desc: "Transform how your business interacts with text and speech.",
    icons: <FcCustomerSupport className="text-4xl " />,
    data: {
      title: "Natural Language Processing",
      desc: "Our NLP solutions enable businesses to understand, process, and generate human language, opening new possibilities for customer interaction and data analysis.",
      benefitList: [
        "Automated customer support with chatbots",
        "Efficient document processing and analysis",
        "Multilingual communication capabilities",
        "Sentiment analysis for customer feedback",
        "Automated content generation and summarization",
      ],

      processList: [
        {
          title: "Requirements Analysis",
          desc: "Understanding your language processing needs",
        },
        {
          title: "Model Selection",
          desc: "Choosing the right NLP models and approaches",
        },
        {
          title: "Custom Training",
          desc: "Training models on your specific domain",
        },
        {
          title: "Integration",
          desc: "Seamless integration with existing platforms",
        },
        {
          title: "Optimization",
          desc: "Continuous improvement and refinement",
        },
      ],
      skillList: [
        "GPT-4",
        "BERT",
        "Transformers",
        "spaCy",
        "NLTK",
        "LangChain",
      ],
    },
  },
  {
    id: "computer-vision",
    title: "computer vision",
    desc: "Advanced image and video analysis solutions.",
    icons: <FcSearch className="text-4xl " />,
    data: {
      title: "Computer Vision",
      desc: "Our computer vision solutions enable machines to understand and process visual information, automating visual inspection tasks and enhancing decision-making capabilities.",
      benefitList: [
        "Automated visual inspection and quality control",
        "Real-time object detection and tracking",
        "Enhanced security through facial recognition",
        "Improved inventory management",
        "Reduced human error in visual tasks",
      ],

      processList: [
        {
          title: "Visual Data Assessment",
          desc: "Analysis of your visual data requirements and existing infrastructure",
        },
        {
          title: "Model Architecture",
          desc: "Designing custom CV models for your specific use case",
        },
        {
          title: "Training & Optimization",
          desc: "Training models on your data with performance optimization",
        },
        {
          title: "Integration",
          desc: "Seamless integration with visual systems",
        },
        {
          title: "Deployment & Scaling",
          desc: "Production deployment with performance monitoring",
        },
      ],
      skillList: [
        "OpenCV",
        "TensorFlow",
        "PyTorch",
        "YOLO",
        "MediaPipe",
        "Custom CNN Models",
      ],
    },
  },
  {
    id: "ai-consulting",
    title: "AI consulting ",
    desc: "Strategic guidance for AI implementation and optimization",
    icons: <FcIdea className="text-4xl " />,
  },
  {
    id: "deep-learning",
    title: "Deep learning",
    desc: "Neural network solutions for complex problem-solving.",
    icons: <FcSerialTasks className="text-4xl " />,
  },
  {
    id: "custome-software-development",
    title: "custome software development",
    desc: "Tailored software solutions designed to meet your unique business needs.",
    icons: <FcSearch className="text-4xl " />,
  },
];

export default services;
