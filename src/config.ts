import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
    businessLink: string;
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
  companies: {
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
    job: "Gen-Z Entrepreneur",
    started: "2022-12-11",
    stack: "Erikson Institute",
    hobby: "gamble my life savings on meme stocks",
    projectLink: "https://tropicalsos.itch.io/abyss-of-the-self",
    businessLink: "https://linktr.ee/tropicalsos",
  },
  socials: {
    website: "https://mcthaydt.netlify.app",
    linkedin: "https://www.linkedin.com/in/dawsonmcthay/",
    twitter: "https://twitter.com/mcthaydt",
  },
  projects: {
    "Abyss of The Self": {
      url: "https://tropicalsos.itch.io/abyss-of-the-self",
      tags: ["< 10 Copies Sold", "< $100 Profit"],
    },
  },
  companies: {
    "TropicalSOS Accelerator": {
      url: "https://linktr.ee/tropicalsos",
      tags: ["President", "Founder"],
    },
    "717 Interactive": {
      url: "https://717interactive.netlify.app",
      tags: ["Project Manager", "Founder"],
    },
  },
  og: {
    image: icon.src,
  },
};
