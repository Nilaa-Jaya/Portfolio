export type ExperienceItem = {
  role: string;
  org: string;
  start: string;
  end: string;
  location?: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Applied AI Intern",
    org: "Limex Trading",
    start: "September 2025",
    end: "December 2025",
    description:
      "Built an agentic financial research copilot using Hybrid RAG, GraphRAG, knowledge graphs, and LLMs to accelerate equity research and improve information discovery across financial data sources.",
  },
  {
    role: "Data Science Intern",
    org: "Magna International",
    start: "June 2025",
    end: "August 2025",
    description:
      "Developed machine learning solutions for inventory forecasting and supply chain optimization, leveraging NLP, statistical experimentation, and analytics dashboards to support operational decision-making.",
  },
  {
    role: "Research Engineering Intern",
    org: "Vellore Institute of Technology",
    start: "April 2022",
    end: "July 2023",
    description:
      "Conducted NLP research that resulted in a first-author IEEE Access publication (80+ citations) and built cloud-native data pipelines using AWS, Kafka, Airflow, and Spark for large-scale machine learning experimentation.",
  },
];
