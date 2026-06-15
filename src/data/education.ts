export type EducationItem = {
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    school: "Columbia University",
    degree: "Master of Science in Data Science",
    start: "September 2024",
    end: "December 2025",
    location: "New York, NY",
    description:
      "Focused on generative AI, machine learning, deep learning, and scalable data systems. Served as a Teaching Assistant for graduate-level deep learning courses.",
  },
  {
    school: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering (Data Science)",
    start: "September 2020",
    end: "May 2024",
    location: "Vellore, India",
    description:
      "Built a strong foundation in AI, machine learning, software engineering, and data analytics.",
  },
];
