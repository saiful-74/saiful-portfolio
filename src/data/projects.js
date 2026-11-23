/*
  PROJECT DATA
  One object per project. Edit values here. You do not need to touch the components.
  The order in this list is the order on the site.

  Any field set to null (or an empty list []) shows a "To be added" label on the site.
  Fill a field and the label disappears.

  How to add a screenshot:
    1. Put the image in public/images/   (example: public/images/my-project.webp)
    2. Set screenshot to "/images/my-project.webp"
    3. Set screenshotWidth and screenshotHeight to the image's real size in pixels.
       The whole image is shown in its own shape (nothing is cropped), and these
       two numbers let the browser reserve the right space before it loads.
    4. Set screenshotAlt to one sentence that describes what the image shows

  Links:
    live          -> the deployed site
    liveNote      -> warning shown next to the live link. Set to null when the issue is fixed.
    source        -> frontend repository (or the only repository)
    sourceBackend -> backend repository. Set to null if the project has one repository.

  Hide a project without deleting it:
    add  hidden: true,  to the project. Remove the line (or set it to false) to show it again.
*/

export const projects = [
  {
    id: "localcb",
    number: "01",
    title: "LocalChefBazaar (LOCALCB)",
    type: "Solo project",
    status: "Completed",

    problem:
      "LocalChefBazaar is a marketplace for home-cooked meals. Customers browse and order meals from local chefs, chefs manage their menus and orders, and admins manage the platform.",
    contribution:
      "I built this project on my own: the React frontend, the Express and MongoDB API, and the deployment of both to Vercel.",
    features: [
      "Three roles (customer, chef, admin) with JWT-protected API routes",
      "Meal browsing with search, category and price filters, sorting and pagination",
      "Ordering with Stripe Checkout payment",
      "Chef dashboard to add, edit and delete meals and handle order requests",
      "Admin dashboard to manage users, approve role requests and view statistics",
      "Favorites and reviews for customers",
    ],
    stack: [
      "React 19",
      "React Router",
      "Tailwind CSS 4",
      "Firebase Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Vercel",
    ],

    screenshot: "/images/localchefbazaar.webp",
    screenshotWidth: 1900,
    screenshotHeight: 824,
    screenshotAlt:
      "LocalChefBazaar home page, showing the navigation bar and the banner Fresh Ingredients, Fast Delivery with Order Now and Watch Video buttons",

    links: {
      live: "https://ui-local-cb.vercel.app",
      // TODO (Saiful): set to null after the backend deployment is fixed
      liveNote:
        "The frontend is online, but the backend deployment currently has an issue. Features that need server data, such as meals, orders and payments, do not load right now.",
      source: "https://github.com/saiful-74/UI-LocalCB",
      sourceBackend: "https://github.com/saiful-74/Backend-LocalCB",
    },
  },
  {
    id: "plateshare",
    number: "02",
    title: "PlateShare",
    type: "Solo project",
    status: "Completed",

    problem:
      "PlateShare is a food-sharing platform that aims to reduce food waste. People with surplus food post it, and others can request it.",
    contribution:
      "I built this project on my own: the React frontend, the Express and MongoDB API, and the deployment of both to Vercel.",
    features: [
      "Email and Google sign-in with Firebase",
      "Post surplus food with photo upload",
      "Browse available food and send a request",
      "Donors accept or reject requests; accepting marks the food as donated",
      "Manage my posted food and track my own requests",
    ],
    stack: [
      "React 19",
      "React Router",
      "Tailwind CSS 4",
      "daisyUI",
      "Firebase Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel",
    ],

    screenshot: "/images/plateshare.webp",
    screenshotWidth: 1902,
    screenshotHeight: 715,
    screenshotAlt:
      "PlateShare home page, showing the navigation bar and the banner Reduce Waste, Help Communities with View All Foods and Search Food buttons",

    links: {
      live: "https://ui-plate-share.vercel.app",
      // TODO (Saiful): set to null after the backend deployment is fixed
      liveNote:
        "The frontend is online, but the backend deployment currently has an issue. Food listings and requests do not load right now.",
      source: "https://github.com/saiful-74/UI-PlateShare",
      sourceBackend: "https://github.com/saiful-74/Backend-PlateShare",
    },
  },
  {
    id: "warmpaws",
    // Hidden for now because its details are not filled in yet.
    // TODO (Saiful): fill the fields below, then set hidden to false to show this card again.
    hidden: true,
    number: "03",
    title: "WarmPaws",
    type: "Web development project",

    // TODO (Saiful): "In progress" or "Completed"
    status: null,
    // TODO (Saiful): 1-2 sentences. What is WarmPaws and who is it for?
    problem: null,
    // TODO (Saiful): what you built. If you built all of it alone, say so.
    contribution: null,
    // TODO (Saiful): 3-4 short features
    features: [],
    // TODO (Saiful): technologies really used in this project
    stack: [],

    screenshot: null,
    screenshotAlt: "",

    links: {
      // TODO (Saiful): full URLs
      live: null,
      liveNote: null,
      source: null,
      sourceBackend: null,
    },
  },
];
