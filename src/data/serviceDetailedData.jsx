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
    icons: <FcSettings className="text-4xl" />,
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
    data: {
      title: "AI Consulting",
      desc: "Our AI consulting services help businesses navigate the complex landscape of artificial intelligence, ensuring successful implementation and maximum ROI.",
      benefitList: [
        "Customized AI strategy development",
        "Risk mitigation in AI adoption",
        "Competitive advantage through AI",
        "Optimized resource allocation",
        "Clear implementation roadmap",
      ],

      processList: [
        {
          title: "Assessment",
          desc: "Evaluating current capabilities and opportunities",
        },
        {
          title: "Strategy Development",
          desc: "Creating a tailored AI implementation plan",
        },
        {
          title: "Solution Design",
          desc: "Designing optimal AI solutions architecture",
        },
        {
          title: "Implementation Support",
          desc: "Guidance through the implementation process",
        },
        {
          title: "Optimization",
          desc: "Continuous improvement and adaptation",
        },
      ],
      skillList: [
        "AI Frameworks",
        "cloud platforms",
        "MLOps tools",
        "analytics platforms",
        "visualization",
        "enterprise AI",
      ],
    },
  },
  {
    id: "deep-learning",
    title: "Deep learning",
    desc: "Neural network solutions for complex problem-solving.",
    icons: <FcSerialTasks className="text-4xl " />,
    data: {
      title: "Deep Learning",
      desc: "Our deep learning solutions tackle complex problems through sophisticated neural networks, enabling advanced pattern recognition and decision-making capabilities.",
      benefitList: [
        "Complex pattern recognition",
        "Automated feature extraction",
        "Scalable learning capabilities",
        "High accuracy in predictions",
        "Adaptability to new data",
      ],

      processList: [
        {
          title: "Architecture Design",
          desc: "Designing optimal neural network architectures",
        },
        {
          title: "Data Preparation",
          desc: "Processing and organizing training data",
        },
        {
          title: "Model Training",
          desc: "Training and fine-tuning neural networks",
        },
        {
          title: "Validation",
          desc: "Comprehensive testing and validation",
        },
        {
          title: "Deployment",
          desc: "Production deployment and monitoring",
        },
      ],
      skillList: ["TensorFlow", "PyTorch", "Keras", "CUDA", "TPUs", "AutoML"],
    },
  },
  {
    id: "custome-software-development",
    title: "custome software development",
    desc: "Tailored software solutions designed to meet your unique business needs.",
    icons: <FcSearch className="text-4xl " />,
    data: {
      title: "Custom Software Development",
      desc: "We develop custom software solutions that integrate seamlessly with AI technologies, ensuring scalable, efficient, and future-proof applications.",
      benefitList: [
        "Tailored to specific business needs",
        "Seamless AI integration",
        "Scalable architecture",
        "Enhanced security",
        "Future-proof solutions",
      ],

      processList: [
        {
          title: "Requirements Analysis",
          desc: "Detailed analysis of business requirements",
        },
        {
          title: "Architecture Design",
          desc: "Designing scalable system architecture",
        },
        {
          title: "Development",
          desc: "Agile development with regular updates",
        },
        {
          title: "Testing",
          desc: "Comprehensive testing and QA",
        },
        {
          title: "Deployment & Support",
          desc: "Production deployment and ongoing support",
        },
      ],
      skillList: [
        "React",
        "Node.js",
        "Python",
        "Docker",
        "Kubernetes",
        "Cloud Platforms",
      ],
    },
  },
];

export default services;
