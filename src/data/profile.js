/*
  PROFILE DATA
  All personal text and links for the Header and Hero live in this file.
  Edit values here. You do not need to touch the components.

  A value of null means "not supplied yet".
  The site hides that link or shows a labeled placeholder instead.
*/

export const profile = {
  firstName: "Saiful",
  lastName: "Islam",
  role: "CSE Student | Aspiring Software Developer & AI/ML Engineer",
  intro:
    "Computer Science and Engineering student at World University of Bangladesh. I build web applications with React and Node.js, and I am studying machine learning. My current research explores how large language models handle long context.",

  email: "saifulmaim2020@gmail.com",
  github: {
    username: "saiful-74",
    url: "https://github.com/saiful-74",
  },

  // TODO (Saiful): add your LinkedIn URL when the profile is ready, e.g. "https://www.linkedin.com/in/..."
  linkedin: null,

  // TODO (Saiful): put resume.pdf in the public/ folder, then set this to "/resume.pdf"
  resumeUrl: null,

  // TODO (Saiful): put your photo in public/images/, then set this to "/images/your-photo.jpg"
  photo: null,

  // Three short facts shown in the strip under the hero
  facts: [
    {
      label: "Studying",
      value: "Computer Science and Engineering, World University of Bangladesh",
    },
    {
      label: "Building",
      value: "Web applications with React, Node.js, Express and MongoDB",
    },
    {
      label: "Researching",
      value: "Long-context memory in large language models (in progress)",
    },
  ],
};

// Links in the top navigation. "href" must match a section id on the page.
export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];
