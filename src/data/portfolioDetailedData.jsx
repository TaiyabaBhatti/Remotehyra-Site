import rag_system_img from "../assets/images/projects/rag-system.webp";
import ai_agent_img from "../assets/images/projects/agent-system.webp";
import ai_automation_img from "../assets/images/projects/ai-automation.webp";
import custom_llm_img from "../assets/images/projects/custom-llm.webp";

const projects = [
  {
    id: "rag-solution",
    thumbnail: rag_system_img,
    tag: "AI RAG Solutions",
    title: "Enterprise RAG System",
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
    id: "ai-agent",
    thumbnail: ai_agent_img,
    tag: "AI Agents",
    title: "Autonomous AI Agent Platform",
    data: {
      desc: "Developed a sophisticated multi-agent system capable of complex task orchestration, autonomous decision-making, and problem-solving across various business domains.",
      featureList: [
        "Multi-agent orchestration",
        "Autonomous decision making",
        "Complex task planning",
        "Self-healing capabilities",
        "Memory management system",
      ],

      targetPair: {
        challenge:
          "The client needed an intelligent system that could autonomously handle complex business processes, make decisions, and coordinate multiple tasks without constant human intervention.",
        solution:
          "We implemented a hierarchical multi-agent architecture with specialized agents for different domains, coordinated by a central orchestrator using advanced planning and reasoning capabilities.",
      },
    },
  },
  {
    id: "ai-automation",
    thumbnail: ai_automation_img,
    tag: "AI Automation",
    title: "Intelligent Process Automation",
    data: {
      desc: "Implemented an end-to-end business process automation system using AI for document processing, workflow optimization, and intelligent decision-making",
      featureList: [
        "Intelligent document processing",
        "Workflow optimization",
        "Quality control automation",
        "Predictive maintenanc",
        "Real-time monitoring",
      ],

      targetPair: {
        challenge:
          "The client needed to automate complex manufacturing processes while maintaining quality control and reducing human error in critical operations",

        solution:
          "We created an integrated automation platform combining computer vision, natural language processing, and robotic process automation with intelligent decision-making capabilities.",
      },
    },
  },
  {
    id: "ai-chatbot",
    thumbnail: ai_agent_img,
    tag: "AI Chatbots",
    title: "Advanced Customer Service AI",
    data: {
      desc: "Developed an enterprise-grade AI chatbot system with advanced natural language understanding, context awareness, and seamless human handoff capabilities.",
      featureList: [
        "Context-aware conversations",
        "Multi-language support",
        "Semantic chunking",
        "Sentiment analysis",
        "Smart human handoff",
        "Analytics dashboard",
      ],

      targetPair: {
        challenge:
          "The client required a sophisticated customer service solution that could handle complex queries, maintain context, and seamlessly integrate with existing systems.",

        solution:
          "We built a context-aware chatbot platform using advanced LLMs with custom knowledge integration and intelligent routing capabilities.",
      },
    },
  },
  {
    id: "custom-llm",
    thumbnail: custom_llm_img,
    tag: "Custom llm Solutions",
    title: "Custom LLM Solution",
    data: {
      desc: "Developed and deployed a custom large language model specifically trained for healthcare applications with enhanced security and compliance features.",
      featureList: [
        "Domain-specific training",
        "HIPAA compliance",
        "Secure inference",
        "Medical terminology understanding",
        "Audit logging",
      ],

      targetPair: {
        challenge:
          "The client needed a specialized AI model that could understand medical terminology, comply with healthcare regulations, and maintain patient privacy.",

        solution:
          "We implemented a custom LLM architecture with domain-specific training, enhanced security features, and HIPAA-compliant infrastructure.",
      },
    },
  },
  {
    id: "rag-solution",
    thumbnail: rag_system_img,
    tag: "AI Mining Solutions",
    title: "AI Knowledge Mining System",
    data: {
      desc: "Created an intelligent system for extracting, organizing, and retrieving knowledge from vast legal document repositories with advanced search capabilities.",
      featureList: [
        "Intelligent document processing",
        "Knowledge graph creation",
        "Semantic search",
        "Relationship mapping",
        "Automated summarization",
      ],

      targetPair: {
        challenge:
          "The client needed to efficiently process millions of legal documents, extract relevant information, and provide accurate search results while maintaining document relationships.",

        solution:
          "We developed a comprehensive knowledge mining system combining advanced NLP, graph databases, and semantic search capabilities.",
      },
    },
  },
];

export default projects;
