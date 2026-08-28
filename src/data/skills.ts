import type { IconType } from "react-icons";
import { Database } from "lucide-react";
import {
  SiPython,
  SiR,
  SiOpenjdk,
  SiScala,
  SiCplusplus,
  SiC,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiHuggingface,
  SiLangchain,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiScipy,
  SiOpencv,
  SiSpacy,
  SiStreamlit,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiSnowflake,
  SiGooglebigquery,
  SiApachespark,
  SiApachekafka,
  SiApacheairflow,
  SiDatabricks,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiMlflow,
  SiGit,
  SiGithub,
  SiLinux,
  SiJirasoftware,
  SiPostman,
  SiGooglecolab,
  SiFastapi,
  SiFlask,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { Sparkles, Cpu, MessageSquare, Workflow, Server } from "lucide-react";

export type SkillIcon = {
  name: string;
  icon: IconType;
  color?: string;
};

export type SkillIconGroup = {
  category: string;
  items: SkillIcon[];
};

const DARK = "#18181b";

export const toolSkills: SkillIconGroup[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: Database, color: "#7AA2E8" },
      { name: "R", icon: SiR, color: "#276DC3" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "Scala", icon: SiScala, color: "#DC322F" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
  {
    category: "AI / ML Frameworks & Libraries",
    items: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Plotly", icon: SiPlotly, color: "#3F4F75" },
      { name: "SciPy", icon: SiScipy, color: "#8CAAE6" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "spaCy", icon: SiSpacy, color: "#09A3D5" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    ],
  },
  {
    category: "Databases & Data Engineering",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "BigQuery", icon: SiGooglebigquery, color: "#4285F4" },
      { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
      { name: "Apache Kafka", icon: SiApachekafka, color: DARK },
      { name: "Apache Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
    ],
  },
  {
    category: "Cloud & Developer Tools",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Azure", icon: VscAzure, color: "#0078D4" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE6" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: DARK },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: DARK },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Linux", icon: SiLinux, color: DARK },
      { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
      { name: "Jira", icon: SiJirasoftware, color: "#0052CC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

export type SkillGroup = {
  category: string;
  icon: IconType;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Artificial Intelligence & Generative AI",
    icon: Sparkles,
    items: [
      "Large Language Models (LLMs)",
      "Agentic AI",
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "Hybrid RAG",
      "GraphRAG",
      "AI Agents",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "Function Calling",
      "Tool Calling",
      "AI Evaluation Frameworks",
      "LLM Fine-Tuning",
      "Instruction Tuning",
      "QLoRA",
      "LoRA",
      "Synthetic Data Generation",
      "Reinforcement Learning from Human Feedback (RLHF)",
      "Knowledge Graphs",
      "LangGraph",
      "LlamaIndex",
      "Sentence Transformers",
      "Azure AI Foundry",
    ],
  },
  {
    category: "Machine Learning",
    icon: Cpu,
    items: [
      "Machine Learning",
      "Deep Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Selection",
      "Hyperparameter Tuning",
      "Ensemble Learning",
      "XGBoost",
      "LightGBM",
      "Anomaly Detection",
      "Recommendation Systems",
      "Time Series Forecasting",
      "A/B Testing",
      "Causal Inference",
      "Statistical Modeling",
      "Experiment Design",
      "Explainable AI (XAI)",
      "SHAP",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Natural Language Processing",
    icon: MessageSquare,
    items: [
      "Natural Language Processing (NLP)",
      "Sentiment Analysis",
      "Text Classification",
      "Named Entity Recognition",
      "Topic Modeling",
      "Information Retrieval",
      "Semantic Search",
      "Embedding Models",
      "Vector Search",
      "Question Answering Systems",
      "NLTK",
    ],
  },
  {
    category: "Data Engineering & MLOps",
    icon: Workflow,
    items: [
      "ETL Pipelines",
      "Data Warehousing",
      "Data Lakes",
      "Distributed Computing",
      "Batch Processing",
      "Stream Processing",
      "Data Modeling",
      "Data Quality Monitoring",
      "CI/CD",
      "DevOps",
      "Model Deployment",
      "Model Monitoring",
      "Infrastructure as Code",
      "Serverless Computing",
      "Azure Functions",
      "Azure Data Explorer (Kusto)",
      "Kusto Query Language (KQL)",
    ],
  },
  {
    category: "Backend & Systems Design",
    icon: Server,
    items: ["REST APIs", "API Design", "Microservices", "Backend Development", "Webhooks"],
  },
];
