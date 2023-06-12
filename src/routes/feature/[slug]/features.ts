type Feature = {
  title: string;
  description: string;
  slug: string;
  video?: string;
  image: string;
  premium?: boolean;
  premium_benefits?: string[];
};

export const features: Feature[] = [{
    title: "Asking questions",
    slug: "ask",
    description: "You can asking questions to Bottly and he will answer you in a few seconds and with or without web search and sources",
    image: "/placeholders/ask.png"
  }, {
    title: "Renew your answers",
    slug: "regen",
    description: "If you are not satisfied with the answer, you can regenerate it as many times as you can",
    image: "/placeholders/regen.png"
  }, {
    title: "More actions",
    slug: "buttons",
    description: "Add to favorite and retrieve them later or just regenerate them if not satisfied of the result",
    image: "/placeholders/buttons.png",
    premium: false,
    premium_benefits: [
      "Regenerate 10 times instead of 5 free times"
    ]
  }, {
    title: "Have a chat with him",
    slug: "chat",
    description: "Start a conversation with Bottly and he will answer you",
    image: "/placeholders/chat.png",
    premium: false,
    premium_benefits: [
      "Download the chat when the conversation is over or when you want"
    ]
  }
];