export type QA = { q: string; a: string };

export const chatGreeting =
  "Hi, I'm Nilaa! 👋 Great to have you here. Pick a question below and I'll tell you all about my work.";

export const chatClosing =
  "That's everything I've got loaded up here! For anything else, I'd genuinely love to hear from you — just email me at nr3005@columbia.edu. 😊";

export const chatQA: QA[] = [
  {
    q: "Tell me about yourself",
    a: "I'm an AI Engineer and Data Scientist, and I just wrapped up my MS in Data Science at Columbia. I love building intelligent systems — LLM-powered agents, RAG applications, recommendation engines, large-scale data pipelines — that solve real, messy problems. Ask me anything about my work!",
  },
  {
    q: "What's your work experience?",
    a: "I've worked across both research and industry. Most recently I was an Applied AI Intern at Limex Trading, before that a Data Science Intern at Magna International, and earlier a Research Engineering Intern at VIT. Want me to go deeper on any of them?",
  },
  {
    q: "What did you do at Limex Trading?",
    a: "At Limex I built an agentic financial research copilot — using Hybrid RAG, GraphRAG, knowledge graphs, and LLMs — to speed up equity research and make it way easier to dig through financial data. It was a really fun mix of AI agents and real-world finance.",
  },
  {
    q: "What did you do at Magna International?",
    a: "At Magna I worked on the data science side of supply chain — building ML models for inventory forecasting and supply chain optimization, plus NLP and analytics dashboards to help the team make sharper operational decisions.",
  },
  {
    q: "Tell me about your research experience",
    a: "Before grad school I was a Research Engineering Intern at VIT. That's where I published my first-author IEEE Access paper (it's picked up 80+ citations now!) and built cloud-native data pipelines with AWS, Kafka, Airflow, and Spark for large-scale ML experiments.",
  },
  {
    q: "What's your educational background?",
    a: "I have an MS in Data Science from Columbia (2024–2025), focused on generative AI, ML, deep learning, and scalable data systems — I also TA'd graduate deep learning courses. Before that, my B.Tech in Computer Science & Engineering (Data Science) from VIT in India.",
  },
  {
    q: "What are your best projects?",
    a: "A few I'm proud of: a Generative Recommender System (RAG + LLMs over 230M+ reviews), a Multi-Agent HR Intelligence Platform (LangGraph agents automating HR support), and a Financial Fraud Detection pipeline. There's a lot more in my Projects section — take a look!",
  },
  {
    q: "What technologies do you work with?",
    a: "My core stack is Python, PyTorch, and the LLM ecosystem — LangChain, LangGraph, Hugging Face, RAG, vector search. On the data/ML side: scikit-learn, XGBoost, Spark, Kafka, and Airflow, with clouds like AWS. In short: AI/ML, NLP, data engineering, and a bit of backend.",
  },
  {
    q: "Are you open to new opportunities?",
    a: "Yes, absolutely! I'm actively looking for roles in AI engineering, ML, and data science. If you think there might be a fit, I'd love to chat — the best way to reach me is by email or LinkedIn. 🚀",
  },
  {
    q: "How can I contact you?",
    a: "I'd love to hear from you! 📫 Email me at nr3005@columbia.edu, connect on LinkedIn (linkedin.com/in/nilaaraghunathan), or check out my code on GitHub (github.com/Nilaa-Jaya).",
  },
  {
    q: "What do you do for fun?",
    a: "When I'm not building models or tinkering with new AI tools, you'll usually find me on a side project, mentoring students, or tending to my growing collection of bonsai trees. 🌳",
  },
];
