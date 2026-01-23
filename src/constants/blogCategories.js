export const BLOG_CATEGORIES = Object.freeze({
  AI: "AI",
  TECH: "tech",
  FINANCE: "finance",
  STOCK: "stock",
  MARKET: "market",
  LIC: "LIC",
  TRAVEL: "travel",
  BUSINESS: "business",
  EDUCATION: "education",
  HEALTH: "health",
  PROPERTY: "property",
  POLITICS: "politics",
  MANIPULATION: "manipulation",
  PSYCHOLOGICAL: "psychological",
  STARTUPS: "startups",
  CRYPTO: "crypto",
  WEB3: "web3",
  AI_TOOLS: "AI tools",
  PRODUCTIVITY: "productivity",
  PERSONAL_FINANCE: "personal finance",
});

export const BLOG_CATEGORY_LIST = Object.values(BLOG_CATEGORIES);

export const TRENDING_CATEGORIES = [
  BLOG_CATEGORIES.AI,
  BLOG_CATEGORIES.FINANCE,
  BLOG_CATEGORIES.STOCK,
  BLOG_CATEGORIES.CRYPTO,
  BLOG_CATEGORIES.STARTUPS,
  BLOG_CATEGORIES.WEB3,
];
