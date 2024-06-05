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
    job: "Gen-Z Entrepreneur and Account Manager at Coast Incorporated",
    started: "2024-06-01",
    stack: "Verizon Wireless and The Game Collective",
    hobby: "gamble my life savings on meme stocks",
    projectLink: "https://mcthaydt.netlify.app",
  },
  socials: {
    linktree: "https://linktr.ee/mcthaydt",
    twitter: "https://twitter.com/mcthaydt",
    linkedin: "https://www.linkedin.com/in/dawsonmcthay/",

  },
  projects: {
    "Abyss of The Self": {
      url: "https://tropicalsos.itch.io/abyss-of-the-self",
      tags: ["< 10 Copies Sold", "< $100 Profit"],
    },
  },
  og: {
    image: icon.src,
  },
};
