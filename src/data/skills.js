/*
  SKILLS DATA
  Each skill has a "level" that says how Saiful has really used it.
  There are no percentages or ratings on purpose: they cannot be verified.

  Allowed levels:
    "used"      -> Used in projects
    "learning"  -> Learning
    "exploring" -> Exploring
    null        -> not confirmed yet, the site shows a "To confirm" label
*/

// Text and meaning of each level. Shown in the legend above the skill lists.
export const levels = {
  used: {
    label: "Used in projects",
    description: "Built something with it",
  },
  learning: {
    label: "Learning",
    description: "Studying and practicing now",
  },
  exploring: {
    label: "Exploring",
    description: "Reading and early experiments",
  },
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: "used" },
      { name: "CSS", level: "used" },
      { name: "JavaScript", level: "used" },
      { name: "React", level: "used" },
      { name: "Tailwind CSS", level: "used" },
    ],
  },
  {
    title: "Backend and deployment",
    skills: [
      { name: "Node.js", level: "used" },
      { name: "Express", level: "used" },
      { name: "MongoDB", level: "used" },
      { name: "Firebase", level: "used" },
      { name: "Vercel", level: "used" },
    ],
  },
  {
    title: "Programming and data",
    skills: [
      { name: "Python", level: "learning" },
      { name: "NumPy", level: "learning" },
      { name: "Pandas", level: "learning" },
      { name: "Matplotlib", level: "learning" },
      { name: "Statistics", level: "learning" },
    ],
  },
  {
    title: "AI and machine learning",
    skills: [
      { name: "Introductory machine learning", level: "learning" },
      { name: "Retrieval-augmented generation (RAG)", level: "exploring" },
      { name: "Latent memory", level: "exploring" },
      { name: "Long-context reasoning", level: "exploring" },
    ],
  },
];
