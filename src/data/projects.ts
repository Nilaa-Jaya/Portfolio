export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Generative Recommender System",
    description:
      "Built a personalized recommendation platform leveraging RAG, vector search, and LLMs to generate tailored product recommendations from 230M+ reviews. The system combines semantic retrieval, persona-based ranking, and generative AI to improve recommendation quality and diversity.",
    tech: ["Python", "LLaMA 2", "Sentence-BERT", "FAISS", "DeepMF", "QLoRA", "RAG"],
    github: "https://github.com/Nilaa-Jaya/Generative-Recommender-System",
  },
  {
    title: "Multi-Agent HR Intelligence Platform",
    description:
      "Developed an enterprise HR assistant powered by multiple specialized AI agents that automate employee support, answer HR queries, and orchestrate workflows. The platform achieved high-resolution accuracy through agent collaboration, RAG, and production-ready APIs.",
    tech: ["LangGraph", "LangChain", "FastAPI", "FAISS", "PostgreSQL", "Docker", "GitHub Actions"],
    github: "https://github.com/Nilaa-Jaya/Multi-Agent-HR-Intelligence-Platform-",
  },
  {
    title: "Financial Fraud Detection",
    description:
      "Designed a machine learning pipeline for detecting fraudulent financial transactions using anomaly detection, oversampling techniques, and deep learning models. The system improves fraud identification while reducing false negatives in highly imbalanced datasets.",
    tech: ["Python", "XGBoost", "Random Forest", "Logistic Regression", "Isolation Forest", "LSTM", "BiLSTM"],
    github: "https://github.com/Nilaa-Jaya/Financial-Fraud-Detection",
  },
  {
    title: "Canva Template Demand Forecasting & Prioritization",
    description:
      "Developed a demand forecasting and prioritization framework to identify high-impact Canva templates and predict future demand trends. The project combines time-series forecasting, business analytics, and prioritization strategies to support data-driven content investment decisions.",
    tech: ["Python", "Time Series Forecasting", "Machine Learning", "Pandas", "Scikit-learn", "Data Visualization"],
    github: "https://github.com/Nilaa-Jaya/Canva-Template-Demand-Forecasting-and-Prioritization",
  },
  {
    title: "Neighborhood Health Predictions",
    description:
      "Built a machine learning platform to analyze neighborhood-level health outcomes and identify key socioeconomic and environmental drivers of community well-being. The project leverages predictive modeling and interpretable analytics to uncover patterns that can support public health planning and decision-making.",
    tech: ["Python", "Machine Learning", "XGBoost", "Random Forest", "SHAP", "Data Analysis", "Geospatial Analytics"],
    github: "https://github.com/Nilaa-Jaya/Neighborhood-Health-Predictions",
  },
  {
    title: "Intelligent Customer Support AI",
    description:
      "Built an AI-powered customer support system that automates query handling using natural language understanding, sentiment analysis, and intelligent response generation. The platform categorizes customer requests, routes complex cases for escalation, and delivers consistent, context-aware support experiences.",
    tech: ["Python", "LangGraph", "LangChain", "LLMs", "NLP", "Sentiment Analysis"],
    github: "https://github.com/Nilaa-Jaya/Intelligent-Customer-Support-AI",
  },
];
