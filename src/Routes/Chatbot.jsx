import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./ChatBot.css";

/* ============================================================================
 * ChatBot.jsx
 * A self-contained, production-ready chatbot widget.
 * - Single file, plain CSS (ChatBot.css), React Hooks only.
 * - Answers strictly from the local `knowledgeBase` using a fuzzy,
 *   synonym-aware search engine (no backend, no external services).
 * ========================================================================== */

/* ----------------------------------------------------------------------------
 * 1. KNOWLEDGE BASE
 * Edit this object to change everything the bot knows / says.
 * -------------------------------------------------------------------------- */
const knowledgeBase = {
  // NOTE: Update phone/email/address/website below with Best Electric's real contact details.
  company: {
    name: "Best Electric",
    phone: "+91-XXXXXXXXXX",
    email: "info@bestelectric.com",
    address: "Update with Best Electric's registered office / factory address",
    website: "www.bestelectric.com",
    hours: "Monday to Saturday, 9:00 AM – 6:00 PM",
  },

  products: [
    {
      id: "p1",
      name: "Single Phase Servo Voltage Stabilizer",
      description:
        "Specially designed for continuous indoor use, this Single Phase Servo Voltage Stabilizer automatically maintains constant output voltage even when input voltage fluctuates. Suitable for residential, commercial and industrial applications requiring stable power supply.",
      features: [
        "Automatic voltage correction",
        "Indoor installation",
        "High & Low voltage cut-off",
        "Bypass switch",
        "Low maintenance",
        "Precision voltage regulation",
        "Reliable performance",
        "Suitable for continuous operation",
      ],
      specs: {
        Capacity: "1 KVA – 150 KVA",
        "Input Voltage": "140V – 270V AC",
        "Output Voltage": "230V ±1%",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Output Waveform": "Quasi Sine Wave",
        "Cut-Off": "High & Low Output Side with Bypass",
      },
      keywords: [
        "single phase servo stabilizer",
        "single phase stabilizer",
        "servo stabilizer",
        "voltage stabilizer",
        "1 kva",
        "150 kva",
        "indoor stabilizer",
        "bypass switch",
      ],
    },
    {
      id: "p2",
      name: "Three Phase Servo Voltage Stabilizer",
      description:
        "Designed for industrial applications, the Three Phase Servo Voltage Stabilizer automatically regulates fluctuating voltage and delivers balanced output for heavy electrical equipment.",
      features: [
        "Three phase voltage correction",
        "Heavy duty industrial design",
        "High & Low voltage protection",
        "Indoor installation",
        "Continuous operation",
        "Low maintenance",
      ],
      specs: {
        Capacity: "3 KVA – 2000 KVA",
        "Input Voltage": "300V – 470V AC",
        "Output Voltage": "415V ±5%",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Output Waveform": "Quasi Sine Wave",
        "DC Voltage": "12V / 24V / 48V",
        "Cut-Off": "High & Low Output Side with Bypass",
      },
      keywords: [
        "three phase servo stabilizer",
        "3 phase stabilizer",
        "industrial stabilizer",
        "heavy duty stabilizer",
        "3 kva",
        "2000 kva",
      ],
    },
    {
      id: "p3",
      name: "Automatic Voltage Stabilizer",
      description:
        "Maintains proper voltage for domestic and commercial appliances like refrigerators, televisions, air conditioners, pumps and lighting systems.",
      features: [
        "Automatic voltage correction",
        "Fast response",
        "Compact design",
        "Energy efficient",
        "Low maintenance",
        "Suitable for home & commercial use",
      ],
      specs: {
        Capacity: "1 KVA, 2 KVA, 3 KVA, 5 KVA, 7 KVA",
        "Input Voltage": "90V – 280V AC",
        "Output Voltage": "200V – 240V ±10%",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Output Waveform": "Sine Wave",
      },
      keywords: [
        "automatic voltage stabilizer",
        "home stabilizer",
        "domestic stabilizer",
        "ac stabilizer",
        "refrigerator stabilizer",
        "compact stabilizer",
      ],
    },
    {
      id: "p4",
      name: "Online UPS System",
      description:
        "Best Electric Online UPS provides uninterrupted power with zero transfer time. It continuously supplies power through the inverter while charging batteries simultaneously.",
      features: [
        "True Online Technology",
        "Zero transfer time",
        "Pure sine wave output",
        "Battery charging system",
        "Reliable backup",
        "High efficiency",
      ],
      specs: {
        Capacity: "1 KVA – 50 KVA",
        "Input Voltage": "180V – 270V AC",
        "Output Voltage": "230V AC",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Output Waveform": "Sine Wave",
        "Backup Time": "10–30 Minutes",
        "DC Voltage": "96V / 120V / 180V / 360V DC",
        Indicators: "Mains, Charging, UPS ON, Battery Low",
        Alarms: "Mains Fail, Battery Low",
      },
      keywords: [
        "online ups",
        "ups system",
        "true online ups",
        "zero transfer time",
        "pure sine wave ups",
      ],
    },
    {
      id: "p5",
      name: "Offline UPS System",
      description:
        "Offline UPS automatically switches to battery during power failure and protects equipment against voltage fluctuations.",
      features: [
        "Automatic battery switching",
        "Fast transfer time",
        "PWM & MOSFET Technology",
        "Quasi sine wave output",
        "Battery protection",
        "Reliable backup",
      ],
      specs: {
        Capacity: "500VA, 800VA, 1250VA, 1600VA, 2000VA",
        "Input Voltage": "180V – 270V AC",
        "Output Voltage": "220V – 240V AC",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Transfer Time": "4 ms",
        "Backup Time": "10–30 Minutes",
        "Output Waveform": "Quasi Sine Wave",
        "DC Voltage": "12V / 24V / 48V",
      },
      keywords: [
        "offline ups",
        "ups system",
        "battery backup",
        "pwm mosfet ups",
        "power failure backup",
      ],
    },
    {
      id: "p6",
      name: "Isolation Transformer",
      description:
        "Isolation Transformers electrically isolate the power input from the output to protect sensitive equipment from electrical noise and shocks.",
      features: [
        "Complete electrical isolation",
        "Shock protection",
        "Heavy-duty construction",
        "Automatic operation",
        "Low maintenance",
        "Long service life",
      ],
      specs: {
        Capacity: "1 KVA – 2000 KVA",
        "Input Voltage": "230V AC",
        "Output Voltage": "230V AC",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Output Waveform": "Quasi Sine Wave",
      },
      keywords: [
        "isolation transformer",
        "shock protection transformer",
        "electrical isolation",
        "sensitive equipment protection",
      ],
    },
    {
      id: "p7",
      name: "Automatic Phase Sequence Corrector",
      description:
        "This device automatically corrects wrong phase sequence in three-phase supply, preventing equipment damage and reducing production downtime.",
      features: [
        "Automatic phase correction",
        "Prevents motor damage",
        "Suitable for lifts & motors",
        "Industrial use",
        "Reliable operation",
        "Low maintenance",
      ],
      specs: {
        Capacity: "10 Amp – 1000 Amp",
        "Input Voltage": "340V – 480V AC",
        "Output Voltage": "340V – 480V AC",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Output Waveform": "Quasi Sine Wave",
      },
      keywords: [
        "phase sequence corrector",
        "phase correction",
        "wrong phase sequence",
        "motor protection",
        "lift protection",
      ],
    },
    {
      id: "p8",
      name: "Automatic Phase & Neutral Balancing System",
      description:
        "The Automatic Phase & Neutral Balancing System improves power quality by balancing phase voltages, reducing neutral current and protecting sensitive electrical equipment.",
      features: [
        "Equalizes phase voltage",
        "Reduces neutral current",
        "Generates third phase if one phase fails",
        "Prevents neutral failure hazards",
        "Energy saving",
        "Digital monitoring",
        "Overload protection",
        "Short circuit protection",
      ],
      specs: {
        "Input Supply": "415V, 3 Phase + Neutral, 4 Wire",
        Frequency: "50Hz ±5%",
        "Working Principle": "Magnetic Symmetry",
        "Phase Angle": "Maintains 120°",
        "Neutral Protection": "Yes",
        "Phase Equalization": "Reduces imbalance by 40–60%",
        "Third Phase Generation": "Yes",
        "Energy Saving": "Yes",
        "Overload Protection": "MCCB/MCB",
        "Neutral Current Protection": "Yes",
        Display: "Digital 7-Segment Auto Scanning (Voltage, Current & Frequency)",
        "Cooling Type": "Oil Cooled (ONAN)",
        "Oil Moisture Protection": "Silica Gel Breather",
      },
      keywords: [
        "phase neutral balancing",
        "phase balancing system",
        "neutral current reduction",
        "power quality system",
        "third phase generation",
      ],
    },
    {
      id: "p9",
      name: "Sine Wave Inverter",
      description:
        "Best Electric Sine Wave Inverter provides uninterrupted backup power for homes, hospitals and commercial establishments. It converts DC power into AC power with automatic charging and overload protection.",
      features: [
        "PWM Technology",
        "Constant Voltage & Current Charging",
        "Fully Automatic",
        "Low Maintenance",
        "Silent Operation",
        "Pollution Free",
        "Indoor Installation",
        "Auto Reset",
        "Battery Protection",
        "Overload Protection",
        "Short Circuit Protection",
      ],
      specs: {
        Capacity:
          "300VA – 1000 KVA (Brochure overview lists 300VA–10KVA while the technical table lists 1KVA–1000KVA; please verify the correct range before publishing.)",
        "Input Voltage": "230V AC",
        "Output Voltage": "230V AC",
        "Input Frequency": "50Hz ±10%",
        "Output Frequency": "50Hz ±1%",
        "Output Waveform": "Quasi Sine Wave",
        Protection:
          "Battery Short Circuit, Overload, Low Battery, Over Charging Protection",
        Indicators: "Low Battery, Charging, Overload, Charged, Inverter ON, Mains ON",
      },
      keywords: [
        "sine wave inverter",
        "home inverter",
        "hospital inverter",
        "backup power inverter",
        "pwm inverter",
      ],
    },
  ],

  // Battery accessories — sold alongside the inverters/UPS, not separately manufactured.
  accessories: [
    {
      id: "a1",
      name: "Batteries (SMF & Tubular)",
      description:
        "Best Electric offers SMF and Tubular batteries ranging from 12V 7Ah to 12V 200Ah, and is an authorized dealer for Exide and Amaron batteries.",
      keywords: [
        "battery",
        "batteries",
        "smf battery",
        "tubular battery",
        "exide",
        "amaron",
        "battery dealer",
      ],
    },
  ],

  services: [],

  pricing: [],

  faqs: [],
};

/* ----------------------------------------------------------------------------
 * 2. SYNONYM MAP
 * Maps common alternate phrasings to a canonical "topic" token, so search
 * works on meaning rather than exact words.
 * -------------------------------------------------------------------------- */
const SYNONYM_MAP = {
  // address / location related
  address: "address",
  location: "address",
  located: "address",
  office: "address",
  where: "address",
  place: "address",
  map: "address",

  // contact related
  contact: "contact",
  reach: "contact",
  call: "contact",
  phone: "contact",
  number: "contact",
  mail: "contact",
  email: "contact",

  // pricing related
  price: "pricing",
  pricing: "pricing",
  cost: "pricing",
  fee: "pricing",
  plan: "pricing",
  plans: "pricing",
  subscription: "pricing",

  // products
  product: "products",
  products: "products",
  offer: "products",
  offerings: "products",
  features: "products",

  // services
  service: "services",
  services: "services",
  solutions: "services",

  // company / about
  company: "company",
  about: "company",
  business: "company",
  website: "company",
  site: "company",

  // hours
  hours: "hours",
  open: "hours",
  schedule: "hours",
  time: "hours",

  // greetings
  hi: "greeting",
  hello: "greeting",
  hey: "greeting",
  yo: "greeting",

  // gratitude
  thanks: "gratitude",
  thank: "gratitude",
  appreciated: "gratitude",
};

/* ----------------------------------------------------------------------------
 * 3. TEXT NORMALIZATION + FUZZY MATCHING HELPERS
 * -------------------------------------------------------------------------- */

/** Lowercases, strips punctuation, and collapses whitespace. */
function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Splits normalized text into tokens (words). */
function tokenize(text) {
  return normalizeText(text).split(" ").filter(Boolean);
}

/** Maps a token to its canonical synonym topic, or returns the token itself. */
function canonicalize(token) {
  return SYNONYM_MAP[token] || token;
}

/**
 * Levenshtein distance between two strings — used to allow small typos
 * when comparing user tokens to knowledge-base keywords.
 */
function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        );
      }
    }
  }
  return matrix[a.length][b.length];
}

/**
 * Returns a similarity score between 0 and 1 between two strings,
 * based on normalized Levenshtein distance.
 */
function similarityScore(a, b) {
  if (!a.length && !b.length) return 1;
  const distance = levenshteinDistance(a, b);
  const maxLen = Math.max(a.length, b.length);
  return 1 - distance / maxLen;
}

/**
 * Scores how well a single user token matches a single keyword/word,
 * combining exact match, partial (substring) match, synonym match,
 * and fuzzy (typo-tolerant) match.
 */
function tokenMatchScore(userToken, targetToken) {
  const a = canonicalize(userToken);
  const b = canonicalize(targetToken);

  if (a === b) return 1; // exact or synonym-canonical match
  if (targetToken.includes(userToken) || userToken.includes(targetToken)) {
    return 0.8; // partial / substring match
  }

  const fuzzy = similarityScore(userToken, targetToken);
  if (fuzzy >= 0.75) return fuzzy * 0.9; // typo-tolerant fuzzy match

  return 0;
}

/**
 * Scores how relevant a knowledge-base entry is to the user's query.
 * `searchableText` is built from all relevant fields + keywords of the entry.
 */
function scoreEntry(userTokens, searchableTokens) {
  let totalScore = 0;
  userTokens.forEach((uToken) => {
    let bestForToken = 0;
    searchableTokens.forEach((sToken) => {
      const score = tokenMatchScore(uToken, sToken);
      if (score > bestForToken) bestForToken = score;
    });
    totalScore += bestForToken;
  });
  // Normalize by number of user tokens so longer queries don't unfairly win.
  return userTokens.length ? totalScore / userTokens.length : 0;
}

/* ----------------------------------------------------------------------------
 * 4. KNOWLEDGE BASE SEARCH ENGINE
 * Builds a flat searchable index once, then scores the user's query
 * against every entry to find the best match.
 * -------------------------------------------------------------------------- */
function buildSearchIndex(kb) {
  const index = [];

  // Company info as a single combined entry, plus individual sub-entries
  // for direct topic hits (address, contact, hours, company/about).
  index.push({
    topic: "address",
    tokens: tokenize("address location office where place map " + kb.company.address),
    response: `Our office is located at: **${kb.company.address}**.`,
  });

  index.push({
    topic: "contact",
    tokens: tokenize(
      "contact reach call phone number mail email " + kb.company.phone + " " + kb.company.email
    ),
    response: `You can reach us at:\n📞 **Phone:** ${kb.company.phone}\n✉️ **Email:** ${kb.company.email}\n🌐 **Website:** ${kb.company.website}`,
  });

  index.push({
    topic: "hours",
    tokens: tokenize("hours open schedule time business hours " + kb.company.hours),
    response: `Our business hours are: **${kb.company.hours}**.`,
  });

  index.push({
    topic: "company",
    tokens: tokenize(
      "company about business website site " + kb.company.name + " " + kb.company.website
    ),
    response: `**${kb.company.name}** is here to help! You can learn more at **${kb.company.website}**, or ask me about our products, services, or pricing.`,
  });

  index.push({
    topic: "greeting",
    tokens: tokenize("hi hello hey yo good morning good afternoon"),
    response: `Hello there! 👋 How can I help you today? Feel free to ask about our **products**, **services**, **pricing**, or **contact** details.`,
  });

  index.push({
    topic: "gratitude",
    tokens: tokenize("thanks thank you appreciated cool great awesome"),
    response: `You're welcome! 😊 Is there anything else I can help you with?`,
  });

  // Products
  if (kb.products?.length) {
    const allNames = kb.products.map((p) => p.name).join(", ");
    index.push({
      topic: "products",
      tokens: tokenize("products offerings features " + allNames),
      response: `Here are our products:\n${kb.products
        .map((p) => `• **${p.name}** — ${p.description}`)
        .join("\n")}`,
    });
    kb.products.forEach((p) => {
      const specsText = p.specs
        ? Object.entries(p.specs)
            .map(([key, value]) => `• **${key}:** ${value}`)
            .join("\n")
        : "";
      const featuresText = p.features?.length ? `\n\n**Key Features:**\n${p.features.map((f) => `• ${f}`).join("\n")}` : "";
      const specsBlock = specsText ? `\n\n**Technical Specifications:**\n${specsText}` : "";

      index.push({
        topic: `product-${p.id}`,
        tokens: tokenize(
          p.name +
            " " +
            (p.keywords?.join(" ") || "") +
            " " +
            p.description +
            " " +
            (p.features?.join(" ") || "") +
            " " +
            (p.specs ? Object.values(p.specs).join(" ") : "")
        ),
        response: `**${p.name}**\n${p.description}${featuresText}${specsBlock}`,
      });
    });
  }

  // Accessories (e.g. batteries) — sold alongside products but not separately manufactured.
  if (kb.accessories?.length) {
    kb.accessories.forEach((a) => {
      index.push({
        topic: `accessory-${a.id}`,
        tokens: tokenize(a.name + " " + (a.keywords?.join(" ") || "") + " " + a.description),
        response: `**${a.name}**: ${a.description}`,
      });
    });
  }

  // Services
  if (kb.services?.length) {
    const allNames = kb.services.map((s) => s.name).join(", ");
    index.push({
      topic: "services",
      tokens: tokenize("services solutions offer " + allNames),
      response: `Here are our services:\n${kb.services
        .map((s) => `• **${s.name}** — ${s.description}`)
        .join("\n")}`,
    });
    kb.services.forEach((s) => {
      index.push({
        topic: `service-${s.id}`,
        tokens: tokenize(s.name + " " + s.keywords.join(" ") + " " + s.description),
        response: `**${s.name}**: ${s.description}`,
      });
    });
  }

  // Pricing
  if (kb.pricing?.length) {
    const allPlans = kb.pricing.map((p) => p.plan).join(", ");
    index.push({
      topic: "pricing",
      tokens: tokenize("pricing price cost fee plan plans subscription " + allPlans),
      response: `Here is our pricing:\n${kb.pricing
        .map((p) => `• **${p.plan}** (${p.price}) — ${p.description}`)
        .join("\n")}`,
    });
    kb.pricing.forEach((p) => {
      index.push({
        topic: `pricing-${p.id}`,
        tokens: tokenize(p.plan + " " + p.keywords.join(" ") + " " + p.description + " " + p.price),
        response: `**${p.plan}** plan: ${p.price}. ${p.description}`,
      });
    });
  }

  // FAQs
  if (kb.faqs?.length) {
    kb.faqs.forEach((f) => {
      index.push({
        topic: `faq-${f.id}`,
        tokens: tokenize(f.question + " " + f.keywords.join(" ")),
        response: f.answer,
      });
    });
  }

  return index;
}

/**
 * Searches the knowledge index for the best matching entry to a query.
 * Returns the response string, or null if nothing scores high enough.
 */
function searchKnowledgeBase(query, index) {
  const userTokens = tokenize(query);
  if (!userTokens.length) return null;

  let best = null;
  let bestScore = 0;

  index.forEach((entry) => {
    const score = scoreEntry(userTokens, entry.tokens);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  });

  const CONFIDENCE_THRESHOLD = 0.35;
  if (best && bestScore >= CONFIDENCE_THRESHOLD) {
    return best.response;
  }
  return null;
}

const DEFAULT_REPLY =
  "Sorry, I couldn't find information about that. Please contact our support team.";

/* ----------------------------------------------------------------------------
 * 5. MARKDOWN-LITE RENDERER (bold text + line breaks only)
 * -------------------------------------------------------------------------- */
function renderMarkdownLite(text) {
  // Split on **bold** segments while keeping the delimiters, then map.
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== "");
    return (
      <span key={lineIdx} className="chatbot-md-line">
        {parts.map((part, idx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={idx} className="chatbot-md-bold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <React.Fragment key={idx}>{part}</React.Fragment>;
        })}
      </span>
    );
  });
}

/* ----------------------------------------------------------------------------
 * 6. SMALL UI HELPER COMPONENTS
 * -------------------------------------------------------------------------- */

/** Formats a Date object into a short HH:MM time label. */
function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/** Chat bubble icon used in the floating button + header avatar. */
function ChatIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 3C7.03 3 3 6.58 3 11c0 2.13 1 4.06 2.62 5.5-.1.96-.45 2.22-1.43 3.65a.5.5 0 0 0 .58.76c1.86-.62 3.25-1.5 4.1-2.16.95.27 1.98.41 3.13.41 4.97 0 9-3.58 9-8s-4.03-8-9-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Close ("X") icon used for the close button. */
function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Paper-plane send icon used inside the send button. */
function SendIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M3.4 20.6 21 12 3.4 3.4 3 9.8l12 2.2-12 2.2.4 6.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Three animated dots used inside the "Typing..." indicator. */
function TypingDots() {
  return (
    <span className="chatbot-typing-dots" aria-hidden="true">
      <span className="chatbot-dot chatbot-dot-1" />
      <span className="chatbot-dot chatbot-dot-2" />
      <span className="chatbot-dot chatbot-dot-3" />
    </span>
  );
}

/** Single chat message bubble — user (right) or bot (left). */
function MessageBubble({ message }) {
  const isUser = message.sender === "user";
  return (
    <div className={`chatbot-message-in chatbot-message-row ${isUser ? "is-user" : "is-bot"}`}>
      <div className={`chatbot-message-col ${isUser ? "is-user" : "is-bot"}`}>
        <div className={`chatbot-bubble ${isUser ? "chatbot-bubble-user" : "chatbot-bubble-bot"}`}>
          {renderMarkdownLite(message.text)}
        </div>
        <span className="chatbot-message-time">{formatTime(message.timestamp)}</span>
      </div>
    </div>
  );
}

/** Typing indicator bubble shown while the bot is "thinking". */
function TypingIndicator() {
  return (
    <div className="chatbot-message-in chatbot-message-row is-bot">
      <div className="chatbot-message-col is-bot">
        <div className="chatbot-bubble chatbot-bubble-bot chatbot-typing-bubble">
          Typing
          <TypingDots />
        </div>
      </div>
    </div>
  );
}

/** Suggestion chip shown on the welcome screen. */
function SuggestionChip({ label, onClick }) {
  return (
    <button type="button" onClick={() => onClick(label)} className="chatbot-chip">
      {label}
    </button>
  );
}

/* ----------------------------------------------------------------------------
 * 7. MAIN CHATBOT COMPONENT
 * -------------------------------------------------------------------------- */
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const chatWindowRef = useRef(null);

  // Build the search index once — it never changes during the component's life.
  const searchIndex = useMemo(() => buildSearchIndex(knowledgeBase), []);

  const suggestionChips = ["Products", "Batteries", "Contact", "Address"];

  /* ------------------------------ Scrolling ------------------------------ */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  /* --------------------------- Open / Close logic ------------------------- */
  const openChat = useCallback(() => {
    setIsOpen(true);
    setHasUnread(false);
  }, []);

  const closeChat = useCallback(() => {
    // Trigger closing animation, then unmount after it finishes.
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, []);

  // ESC key closes the chatbot.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeChat();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeChat]);

  // Click outside the chat window (on the overlay) closes the chatbot.
  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) closeChat();
    },
    [closeChat]
  );

  /* ------------------------------ Messaging ------------------------------- */

  /** Generates the bot's reply text for a given user query using the KB search engine. */
  const generateBotReply = useCallback(
    (query) => {
      const answer = searchKnowledgeBase(query, searchIndex);
      return answer || DEFAULT_REPLY;
    },
    [searchIndex]
  );

  /** Appends a new message object to the message list. */
  const addMessage = useCallback((sender, text) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, sender, text, timestamp: new Date() },
    ]);
  }, []);

  /** Handles sending a user message (from input or suggestion chip). */
  const sendMessage = useCallback(
    (rawText) => {
      const text = rawText.trim();
      if (!text) return;

      addMessage("user", text);
      setInputValue("");
      setIsTyping(true);

      // Simulate a natural "thinking" delay before the bot replies.
      const delay = 600 + Math.random() * 700;
      setTimeout(() => {
        const reply = generateBotReply(text);
        setIsTyping(false);
        addMessage("bot", reply);
      }, delay);
    },
    [addMessage, generateBotReply]
  );

  const handleSuggestionClick = useCallback(
    (label) => {
      sendMessage(label);
    },
    [sendMessage]
  );

  const handleSend = useCallback(() => {
    sendMessage(inputValue);
  }, [inputValue, sendMessage]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  /* --------------------------- Auto-resize textarea ------------------------ */
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const maxHeight = 120; // px cap so the textarea doesn't grow forever
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
  }, [inputValue]);

  // Focus the textarea whenever the chat opens.
  useEffect(() => {
    if (isOpen && !isClosing) {
      const t = setTimeout(() => textareaRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [isOpen, isClosing]);

  const showWelcomeScreen = messages.length === 0;

  /* ------------------------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------------------- */
  return (
    <>
      {/* FLOATING ACTION BUTTON                                          */}
      {!isOpen && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open chat assistant"
          className="chatbot-fab chatbot-pulse"
        >
          <ChatIcon className="chatbot-fab-icon" />
          {hasUnread && <span className="chatbot-fab-badge">1</span>}
        </button>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* OVERLAY + CHAT WINDOW                                           */}
      {/* ---------------------------------------------------------------- */}
      {isOpen && (
        <div
          onMouseDown={handleOverlayClick}
          className={`chatbot-overlay ${isClosing ? "chatbot-overlay-out" : "chatbot-overlay-in"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Chat assistant window"
        >
          <div
            ref={chatWindowRef}
            onMouseDown={(e) => e.stopPropagation()}
            className={`chatbot-window ${isClosing ? "chatbot-window-out" : "chatbot-window-in"}`}
          >
            {/* ------------------------- HEADER ------------------------- */}
            <header className="chatbot-header">
              <div className="chatbot-header-left">
                <div className="chatbot-avatar">
                  <ChatIcon className="chatbot-avatar-icon" />
                  <span className="chatbot-avatar-status" aria-hidden="true" />
                </div>
                <div className="chatbot-header-text">
                  <p className="chatbot-company-name">{knowledgeBase.company.name}</p>
                  <p className="chatbot-online-label">
                    <span className="chatbot-online-dot" />
                    Online
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeChat}
                aria-label="Close chat"
                className="chatbot-close-btn"
              >
                <CloseIcon className="chatbot-close-icon" />
              </button>
            </header>

            {/* --------------------- MESSAGES AREA ---------------------- */}
            <div className="chatbot-messages chatbot-scrollbar">
              {showWelcomeScreen ? (
                <div className="chatbot-welcome">
                  <div className="chatbot-welcome-icon-wrap">
                    <ChatIcon className="chatbot-welcome-icon" />
                  </div>
                  <div className="chatbot-welcome-text">
                    <h2 className="chatbot-welcome-title">Hi 👋</h2>
                    <p className="chatbot-welcome-subtitle">How can I help you today?</p>
                  </div>
                  <div className="chatbot-chip-group">
                    {suggestionChips.map((chip) => (
                      <SuggestionChip key={chip} label={chip} onClick={handleSuggestionClick} />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                  ))}
                  {isTyping && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* ----------------- QUICK SUGGESTIONS BAR ------------------- */}
            {!showWelcomeScreen && (
              <div className="chatbot-quick-bar chatbot-scrollbar">
                {suggestionChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleSuggestionClick(chip)}
                    className="chatbot-quick-chip"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* ------------------------ INPUT AREA ----------------------- */}
            <div className="chatbot-input-area">
              <div className="chatbot-input-row">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  aria-label="Type your message"
                  className="chatbot-textarea chatbot-scrollbar"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                  className="chatbot-send-btn"
                >
                  <SendIcon className="chatbot-send-icon" />
                </button>
              </div>
              <p className="chatbot-input-hint">Press Enter to send • Shift+Enter for new line</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}