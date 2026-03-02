// ===== Skills =====
export type SkillGroup = {
  title: string;
  items: string[];
};

export type Skills = {
  groups: SkillGroup[];
};

// ===== React Native Upgrade =====
export type RNUpgrade = {
  title: string;
  intro: string;
  challenges: string[];
  solution: string;
};

// ===== Projects =====
export type ProjectItem = {
  title: string;
  type: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export type Projects = {
  title: string;
  items: ProjectItem[];
};

// ===== Resume =====
export type Resume = {
  experience: {
    company: string;
    role: string;
    duration: string;
    points: string[]; 
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
  }[];
};

// ===== Contact =====
export type Contact = {
  title: string;
  description: string;
};

// ===== About =====
export type About = {
  title: string;
  description: string[];
};


export type Content = {
  profile: {
    name: string;
    role: string;
    resumeFile: string;
    email: string;
    location: string;
    phone: string;
    social: {
      platform: string;
      url: string;
    }[];
  };
  about: About;
  skills: Skills;
  rnUpgrade: RNUpgrade;
  projects: Projects;
  resume: Resume;
  contact: Contact;
};