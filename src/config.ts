import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Dawson McThay",
    job: "Tech Founder, Nonprofit President, Business Consultant, Product Designer, and Software Developer",
    started: "2022-12-01",
    stack: "TypeScript, Svelte, and Go",
    hobby: "gamble my life savings on meme stocks",
    projectLink: "https://github.com/mcthaydt",
  },
  socials: {
    website: "https://www.mcthaydt.com",
    twitter: "https://twitter.com/mcthaydt",
    github: "https://github.com/mcthaydt",
    linkedin: "https://www.linkedin.com/in/dawsonmcthay/",

  },
  projects: {
    "Abyss of The Self": {
      url: "https://tropicalsos.itch.io/abyss-of-the-self",
      tags: ["Game Design", "Narrative Design", "Project Management", "Sales", "Marketing"],
    },
  },
  og: {
    image: icon.src,
  },
};
