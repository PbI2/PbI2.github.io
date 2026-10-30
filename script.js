const articles = [
  {
    slug: "why-solar-cells-age",
    category: "Materials / 08 min read",
    date: "October 12, 2024",
    title: "Why do solar cells age? A tiny crystal tells the story.",
    dek: "A field guide to the defects, vacancies, and quiet molecular negotiations that shape a perovskite's lifetime.",
    color: "peach",
    mark: "PbI₂",
    body: `<p>There is a particular kind of drama that only happens at the scale of a crystal. At first glance, a perovskite solar cell is calm and orderly: a repeating lattice, a clean interface, a promise to turn sunlight into electricity. Look closer, and the lattice is always negotiating with itself.</p><p>When I talk about degradation, I try not to picture a device failing all at once. I picture a city losing a few streetlights every night. A vacancy appears here. An ion migrates there. A grain boundary becomes just a little more welcoming to water.</p><p class="pullquote">The most important parts of a solar cell are often the spaces where an atom should have been.</p><h2>The useful imperfection</h2><p>Defects are not automatically bad. Some create pathways for charge to move; others act like tiny traps, capturing an electron and turning useful energy into heat. The challenge is not to make a crystal perfect, but to teach its imperfections where to stand.</p><p>That is why our lab spends so much time looking at the interface between layers. The surface is where the material meets its environment, and where a small chemical change can become a very large electrical one.</p>`
  },
  {
    slug: "light-between-layers",
    category: "Explainers / 05 min read",
    date: "September 04, 2024",
    title: "The light between layers",
    dek: "What happens when a photon enters a solar cell—and why the journey is more interesting than the destination.",
    color: "green",
    mark: "hν",
    body: `<p>A photon arrives with no luggage and no intention of staying. It crosses the transparent front contact, enters the active layer, and asks a simple question: is there an electron here that would like to be free?</p><p>This is the beginning of a solar cell's work. The rest is an exercise in getting the newly separated charges to their respective contacts before they find each other again. The thinner the distance, the better—but thin layers bring their own compromises.</p><h2>A relay race for charge</h2><p>It helps to think of the device as a relay team. Each layer has one job: absorb light, separate charges, carry them, or collect them. The best cells are not made from one heroic material. They are made from a group of materials that know how to hand off the baton.</p>`
  },
  {
    slug: "a-map-of-invisible-things",
    category: "Field notes / 04 min read",
    date: "July 21, 2024",
    title: "A map of invisible things",
    dek: "Notes from a week spent looking at materials we cannot see, and learning to trust indirect evidence.",
    color: "yellow",
    mark: "∿",
    body: `<p>Most of the things I study are invisible. I cannot see an exciton moving through a film or watch an ion find a new home in a lattice. What I can see are their traces: a peak shifted by two degrees, a current that arrives a fraction of a second late, a film that glows just a little less.</p><p>Science is full of these indirect conversations. We build instruments that translate the small into a language our senses can understand, then learn to be careful with the translation.</p><h2>Staying curious at the edge</h2><p>The map is never the territory. But a good map can still tell you where to look next. That, more than certainty, is what keeps a lab moving.</p>`
  }
];

const app = document.querySelector("#app");
const nav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");

function card(article) {
  return `<article class="article-card"><a class="card-image ${article.color}" href="#/article/${article.slug}" aria-label="Read ${article.title}"><span>${article.mark}</span></a><div class="card-meta">${article.category}</div><h3><a href="#/article/${article.slug}">${article.title}</a></h3><p>${article.dek}</p><a class="card-read" href="#/article/${article.slug}">Read article&nbsp; →</a></article>`;
}

function home() {
  const featured = articles.slice(0, 3);
  return `<div class="page"><section class="hero"><div><p class="eyebrow">Materials scientist · science writer</p><h1>Making sense of the <em>small</em> things.</h1><p class="hero-copy">I'm 施柏安—a researcher, writer, and professional question-asker. I study the materials that might help us build a cleaner, brighter future.</p><div class="hero-actions"><a class="button" href="#/articles">Explore the writing</a><a class="text-link" href="#/about">More about me&nbsp; ↗</a></div></div><div class="hero-visual"><div class="portrait-card"><span class="molecule">PbI₂</span></div><span class="visual-caption">Fig. 01 — a material in motion</span></div></section><section><div class="section-heading"><h2>Latest field notes</h2><a href="#/articles">View all writing&nbsp; →</a></div><div class="article-grid">${featured.map(card).join("")}</div></section><section class="about-band"><div><p class="eyebrow">A little context</p><h2>The world is made of tiny, fascinating decisions.</h2></div><div><p>My work lives at the intersection of chemistry, energy, and communication. In the lab, I look at how materials behave. Here, I try to explain why it matters—without sanding off the interesting edges.</p><a class="text-link" href="#/about">Read my story&nbsp; ↗</a></div></section><section class="newsletter"><div><h2>Notes, occasionally.</h2><p>A thoughtful email when I have something worth sharing.</p></div><form class="subscribe-form"><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button type="submit">Subscribe&nbsp; →</button></form></section></div>`;
}

function archive() {
  return `<div class="page"><header class="archive-header"><p class="eyebrow">The archive</p><h1>Thoughts from the lab<br />and beyond.</h1><p>Essays, explainers, and field notes about materials, energy, and the joy of looking closer.</p></header><div class="archive-grid">${articles.map(card).join("")}</div></div>`;
}

function articlePage(article) {
  return `<div class="page article-page"><a class="back-link" href="#/articles">← Back to all writing</a><div class="article-meta">${article.category} · ${article.date}</div><h1>${article.title}</h1><p class="dek">${article.dek}</p><div class="article-hero-art ${article.color}"><strong>${article.mark}</strong></div><div class="article-body">${article.body}</div><a class="back-link" href="#/articles">← Read another field note</a></div>`;
}

function about() {
  return `<div class="page about-page"><p class="eyebrow">Hello, I'm 施柏安</p><h1>Curious about the things we can't see.</h1><div class="about-columns"><div><p class="card-meta">01 — The short version</p></div><div><p>I’m a materials scientist and science writer interested in the small structures and big questions behind energy technology.</p><p>This site is where I write about the science I love: the beautiful, messy middle between a promising idea and something that works in the real world.</p><p>When I’m not reading papers or writing, you’ll find me sketching, walking, or explaining band gaps to anyone who will listen.</p></div></div></div>`;
}

function labNotes() {
  return `<div class="page about-page"><p class="eyebrow">The working notebook</p><h1>Small observations, still in progress.</h1><div class="about-columns"><div><p class="card-meta">02 — Current questions</p></div><div><p>Not everything belongs in a finished essay. This is a window into the questions currently pinned above my desk: how do we make a crystal more tolerant of heat, how should we measure stability, and what can a material teach us about its own limits?</p><p>These notes are intentionally unfinished. They are reminders that research is not a straight line—it is a collection of careful next steps.</p><a class="text-link" href="#/articles">Read the finished field notes&nbsp; →</a></div></div></div>`;
}

function render() {
  const path = location.hash.slice(1) || "/";
  const match = path.match(/^\/article\/(.+)$/);
  if (match) {
    const article = articles.find(item => item.slug === match[1]);
    app.innerHTML = article ? articlePage(article) : archive();
  } else if (path === "/articles") app.innerHTML = archive();
  else if (path === "/about") app.innerHTML = about();
  else if (path === "/lab-notes") app.innerHTML = labNotes();
  else app.innerHTML = home();
  window.scrollTo(0, 0);
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
document.addEventListener("submit", event => {
  if (event.target.matches(".subscribe-form")) {
    event.preventDefault();
    event.target.innerHTML = "<span style='padding:13px 0;color:#ef6c43;font:11px var(--mono)'>You’re on the list. Thank you!</span>";
  }
});
window.addEventListener("hashchange", render);
render();
