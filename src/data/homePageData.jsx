import natural_language_processing from "../assets/images/featured-img-1.webp";
import computer_vision from "../assets/images/featured-img-2.webp";
import artificial_intelligence from "../assets/images/featured-img-3.webp";

const projects = [
  {
    id: "natural-language-procssing",
    thumbnail: natural_language_processing,
    title: "ChatGPT Enterprise Suite",
    desc: "Custom ChatGPT integration with advanced security and domain-specific knowledge",
    tag: "Natural Language Processing",
    data: {
      desc: "Implemented a sophisticated Retrieval-Augmented Generation system for processing and retrieving information from millions of financial documents.",
      featureList: [
        "Multi-vector hybrid search",
        "Dynamic context handling",
        "Semantic chunking",
        "Real-time index updates",
        "Compliance filtering",
      ],

      targetPair: {
        challenge:
          "The client needed to efficiently process, index, and retrieve information from vast amounts of financial documents while ensuring accuracy and compliance.",
        solution:
          "We developed a multi-stage RAG system with advanced vector search, dynamic context window management, and intelligent query reformulation.",
      },
    },
  },
  {
    id: "computer-vision",
    thumbnail: computer_vision,
    title: "AI Image Generator",
    desc: "DALL-E and Stable Diffusion powered image creation platform",
    tag: "Computer Vision",
    data: {
      desc: "Implemented a sophisticated Retrieval-Augmented Generation system for processing and retrieving information from millions of financial documents.",
      featureList: [
        "Multi-vector hybrid search",
        "Dynamic context handling",
        "Semantic chunking",
        "Real-time index updates",
        "Compliance filtering",
      ],

      targetPair: {
        challenge:
          "The client needed to efficiently process, index, and retrieve information from vast amounts of financial documents while ensuring accuracy and compliance.",
        solution:
          "We developed a multi-stage RAG system with advanced vector search, dynamic context window management, and intelligent query reformulation.",
      },
    },
  },
  {
    id: "artificial-intelligence",
    thumbnail: artificial_intelligence,
    title: "Smart Learning Platform",
    desc: "AI-powered educational platform with personalized learning paths",
    tag: "Artificial Intelligence",
    data: {
      desc: "Implemented a sophisticated Retrieval-Augmented Generation system for processing and retrieving information from millions of financial documents.",
      featureList: [
        "Multi-vector hybrid search",
        "Dynamic context handling",
        "Semantic chunking",
        "Real-time index updates",
        "Compliance filtering",
      ],

      targetPair: {
        challenge:
          "The client needed to efficiently process, index, and retrieve information from vast amounts of financial documents while ensuring accuracy and compliance.",
        solution:
          "We developed a multi-stage RAG system with advanced vector search, dynamic context window management, and intelligent query reformulation.",
      },
    },
  },
];

export { projects };
