const projects = [
  { title: "Datom | Brand Identity Design & Logo Design", category: "brand", categoryLabel: "Brand identity", image: "assets/images/projects/datom.png", url: "https://www.behance.net/gallery/258086381/Datom-Brand-Identity-Design-Logo-Design", alt: "Datom brand identity project cover" },
  { title: "Enzo | Logo & Visual Identity Design", category: "brand", categoryLabel: "Brand identity", image: "assets/images/projects/enzo.jpg", url: "https://www.behance.net/gallery/257724461/Enzo-Logo-Visual-Identity-Design", alt: "Enzo visual identity project cover" },
  { title: "OCADO", category: "brand", categoryLabel: "Brand identity", image: "assets/images/projects/ocado.jpg", url: "https://www.behance.net/gallery/257722393/OCADO", alt: "OCADO project cover" },
  { title: "Billington | Logo Design", category: "brand", categoryLabel: "Brand identity", image: "", url: "https://www.behance.net/gallery/175432787/Billingtong-Logo-Design", alt: "Typographic cover for Billington logo design" },
  { title: "VEXVO | Innovative Logo Design", category: "brand", categoryLabel: "Brand identity", image: "", url: "https://www.behance.net/gallery/174998001/VEXVO-Innovative-Logo-Design", alt: "Typographic cover for VEXVO logo design" },
  { title: "Tea Packaging Design | Herbal & Loose Leaf Tea", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/tea-packaging-design.png", url: "https://www.behance.net/gallery/257932197/Tea-Packaging-Design-Herbal-Loose-Leaf-Tea", alt: "Herbal tea packaging project cover" },
  { title: "Be So Happy | Beauty Branding & Packaging Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/be-so-happy.png", alt: "Beauty branding and packaging project cover", url: "https://www.behance.net/gallery/257931337/Be-So-Happy-Beauty-Branding-Packaging-Design" },
  { title: "Sweet & Baked | Packaging Design Collection", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/sweet-baked.jpg", url: "https://www.behance.net/gallery/257929109/Sweet-Baked-Packaging-Design-Collection", alt: "Sweet and Baked packaging project cover" },
  { title: "Bakewell Bakery | Choco Cookies Packaging Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/bakewell-bakery.png", url: "https://www.behance.net/gallery/257910573/Bakewell-Bakery-Choco-Cookies-Packaging-Design", alt: "Bakewell Bakery packaging project cover" },
  { title: "Vitalio | Brand Identity & Packaging Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/vitalio.png", url: "https://www.behance.net/gallery/257770593/Vitalio-Brand-Identity-Packaging-Design", alt: "Vitalio branding and packaging project cover" },
  { title: "The Earl Grey Tea", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/the-earl-grey-tea.jpg", url: "https://www.behance.net/gallery/193914381/The-Earl-Grey-Tea", alt: "Earl Grey tea project cover" },
  { title: "KOYA Energy Drink Label & Branding Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/koya-energy-drink-label-branding-design.jpg", url: "https://www.behance.net/gallery/176411745/KOYA-Energy-Drink-Label-Branding-Design", alt: "KOYA energy drink label project cover" },
  { title: "Muse | Label and Branding Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/muse.jpg", url: "https://www.behance.net/gallery/176207139/Muse-Label-and-Branding-Design", alt: "Muse label and branding project cover" },
  { title: "BEGYII | Can Energy Drink Label Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/begyii.jpg", url: "https://www.behance.net/gallery/176042973/BEGYII-Can-Energy-Drink-Label-Design", alt: "BEGYII energy drink can label project cover" },
  { title: "Pahazzo | Dry Fruit Packaging Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/pahazzo.jpg", url: "https://www.behance.net/gallery/176042541/Pahazzo-Dry-fruit-packaging-Design", alt: "Pahazzo dry fruit packaging project cover" },
  { title: "SUPFLY | Drink Can Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/supfly.jpg", url: "https://www.behance.net/gallery/175972561/SUPFLY-Drink-Can-Design", alt: "SUPFLY drink can design project cover" },
  { title: "Kansai Sakura | Energy Drink Label & Branding Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/kansai-sakura.jpg", url: "https://www.behance.net/gallery/176453561/Kansai-Sakura-Energy-Drink-Label-Branding-Design", alt: "Kansai Sakura energy drink project cover" },
  { title: "Sour Pals Can Label Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/sour-pals-can-label-design.jpg", url: "https://www.behance.net/gallery/175972317/Sour-Pals-Can-Label-Design", alt: "Sour Pals can label project cover" },
  { title: "Jardin Secret Package Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/jardin-secret-package-design.jpg", url: "https://www.behance.net/gallery/175971981/Jardin-Secret-Package-Design", alt: "Jardin Secret packaging project cover" },
  { title: "Please! Bottle Label Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/please-bottle-label-design.jpg", url: "https://www.behance.net/gallery/175972133/Please-Bottle-label-Design", alt: "Please bottle label project cover" },
  { title: "Natural Yogurt Package Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/natural-yogurt-package-design.jpg", url: "https://www.behance.net/gallery/175971817/Natural-Yogurt-Package-Design", alt: "Natural Yogurt packaging project cover" },
  { title: "Juicy Can Label Design and Branding Design", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/juicy-can-label-design-and-branding-design.jpg", url: "https://www.behance.net/gallery/176226943/Juicy-Can-Label-Design-and-Branding-Design", alt: "Juicy can label project cover" },
  { title: "Win Win Beverage Label", category: "packaging", categoryLabel: "Packaging", image: "assets/images/projects/win-win-beverage-label.jpg", url: "https://www.behance.net/gallery/183617719/Win-Win-Beverage-Label", alt: "Win Win beverage label project cover" },
  { title: "Jane Smith | Business Card Design", category: "other", categoryLabel: "Other design", image: "assets/images/projects/jane-smith.jpg", url: "https://www.behance.net/gallery/175911307/Jane-Smith-Business-Card-Design", alt: "Jane Smith business card project cover" },
  { title: "Brunch Email Template Design", category: "other", categoryLabel: "Other design", image: "assets/images/projects/brunch-email-template-design.jpg", url: "https://www.behance.net/gallery/175431465/Brunch-Email-Template-Design", alt: "Brunch email template project cover" },
  { title: "KumalaNisa | Business Card Design", category: "other", categoryLabel: "Other design", image: "assets/images/projects/kumalanisa.jpg", url: "https://www.behance.net/gallery/175910087/KumalaNisa-Fimenine-Buity-Business-Card-Design", alt: "KumalaNisa business card project cover" },
  { title: "Business Card Design", category: "other", categoryLabel: "Other design", image: "", url: "https://www.behance.net/gallery/175388919/Business-Card", alt: "Typographic cover for business card design" },
  { title: "Female T-Shirt Design", category: "other", categoryLabel: "Other design", image: "", url: "https://www.behance.net/gallery/175138921/Female-T-Shirt-Design", alt: "Typographic cover for female T-shirt design" }
];

const projectGrid = document.querySelector("#project-grid");
const visibleCount = document.querySelector("#visible-count");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const backToTop = document.querySelector(".back-to-top");

function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = `project-card project-card-${(index % 6) + 1}`;
  card.dataset.category = project.category;

  const link = document.createElement("a");
  link.className = "project-link";
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${project.title} — open on Behance`);

  const visual = document.createElement("div");
  visual.className = `project-visual project-visual-${project.category}`;
  visual.style.setProperty("--project-index", index % 8);

  if (project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      image.remove();
      visual.classList.add("is-typographic");
    }, { once: true });
    visual.append(image);
  } else {
    visual.classList.add("is-typographic");
  }

  const fallback = document.createElement("span");
  fallback.className = "project-fallback-title";
  fallback.textContent = project.title.split("|")[0].trim();
  fallback.setAttribute("aria-hidden", "true");
  visual.append(fallback);

  const info = document.createElement("div");
  info.className = "project-info";
  const category = document.createElement("span");
  category.className = "project-category";
  category.textContent = project.categoryLabel;
  const title = document.createElement("h3");
  title.textContent = project.title;
  const arrow = document.createElement("span");
  arrow.className = "project-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  info.append(category, title, arrow);
  link.append(visual, info);
  card.append(link);
  return card;
}

function renderProjects(category = "all") {
  const visibleProjects = projects.filter((project) => category === "all" || project.category === category);
  projectGrid.replaceChildren(...visibleProjects.map(createProjectCard));
  visibleCount.textContent = String(visibleProjects.length);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const active = filterButton === button;
      filterButton.classList.toggle("is-active", active);
      filterButton.setAttribute("aria-pressed", String(active));
    });
    renderProjects(selected);
  });
});

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const portrait = document.querySelector(".portrait-image");
portrait.addEventListener("error", () => {
  portrait.closest(".portrait-frame").classList.add("portrait-unavailable");
  portrait.remove();
}, { once: true });

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll(".section-kicker, .about-heading, .about-copy, .section-heading-row, .service-item, .project-card, .tools-layout, .connect-panel");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
}

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    document.querySelectorAll('.primary-navigation a[href^="#"]').forEach((link) => {
      if (link.hash === `#${entry.target.id}`) {
        link.classList.toggle("is-current", entry.isIntersecting);
      }
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((section) => scrollObserver.observe(section));

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 700);
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderProjects();
