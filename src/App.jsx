
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  GraduationCap,
  ShieldCheck,
  Cloud,
  Code2,
  Terminal,
  Workflow,
  Server,
  Database,
  LockKeyhole,
  Network,
  ExternalLink,
  Phone,
  Sun,
  Moon,
} from "lucide-react";

const profile = {
  name: "Danish John G S",
  shortName: "Danish John",
  role: "Aspiring Cloud Security Engineer",
  email: "danish.sec.dev@gmail.com",
  phone: "917907401614",
  location: "Trivandrum, India",
  photo: "/profile.jpg",
  resume: "/Danish-John-Resume.pdf",
  github: "https://github.com/danishjohngs",
  linkedin: "https://www.linkedin.com/in/danishjohngs",
};

const navItems = [
  "About",
  "Expertise",
  "Technology",
  "Journey",
  "Projects",
  "Contact",
];

const expertise = [
  {
    name: "Linux Administration",
    description: "Linux fundamentals, terminal operations and system troubleshooting.",
    level: "Building foundations",
    value: 65,
  },
  {
    name: "Networking",
    description: "TCP/IP, DNS, ports, protocols and network fundamentals.",
    level: "Learning",
    value: 55,
  },
  {
    name: "Cybersecurity",
    description: "Ethical hacking, reconnaissance and security fundamentals.",
    level: "Practising",
    value: 65,
  },
  {
    name: "Python & Automation",
    description: "Python scripting, problem-solving and automation projects.",
    level: "Practising",
    value: 55,
  },
  {
    name: "Cloud Computing",
    description: "AWS services, cloud infrastructure and deployment concepts.",
    level: "Learning",
    value: 35,
  },
  {
    name: "DevSecOps",
    description: "Infrastructure automation and security in development workflows.",
    level: "Exploring",
    value: 25,
  },
];

const technologies = [
  {
    name: "Linux",
    category: "Operating System",
    icon: "linux",
    color: "FCC624",
  },
  {
    name: "Ubuntu",
    category: "Operating System",
    icon: "ubuntu",
    color: "E95420",
  },
  {
    name: "AWS",
    category: "Cloud Platform",
    icon: "amazonwebservices",
    color: "FF9900",
  },
  {
    name: "Python",
    category: "Programming",
    icon: "python",
    color: "3776AB",
  },
  {
    name: "Bash",
    category: "Scripting",
    icon: "gnubash",
    color: "4EAA25",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "git",
    color: "F05032",
  },
  {
    name: "GitHub",
    category: "Development",
    icon: "github",
    color: "FFFFFF",
  },
  {
    name: "Docker",
    category: "Containers",
    icon: "docker",
    color: "2496ED",
  },
  {
    name: "Kubernetes",
    category: "Orchestration",
    icon: "kubernetes",
    color: "326CE5",
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    icon: "terraform",
    color: "844FBA",
  },
  {
    name: "Nmap",
    category: "Security",
    icon: "nmap",
    color: "4EAA25",
  },
  {
    name: "Wireshark",
    category: "Network Analysis",
    icon: "wireshark",
    color: "1679A7",
  },
];

const journey = [
  {
    date: "2023 — PRESENT",
    title: "Bachelor of Computer Applications",
    organization: "St. Benedict Academy, Bengaluru",
    description:
      "Studying computer applications, programming fundamentals, databases and software development while building practical technical skills.",
    tags: ["BCA", "Programming", "Computer Science"],
  },
  {
    date: "2024 — PRESENT",
    title: "Cybersecurity & Technical Practice",
    organization: "Independent learning and practical labs",
    description:
      "Practising reconnaissance, enumeration, vulnerability identification, Linux security tools and controlled ethical hacking labs.",
    tags: ["Cybersecurity", "Linux", "Nmap", "OWASP"],
  },
  {
    date: "2025",
    title: "Certified Ethical Hacker",
    organization: "EC-Council — CEH v13",
    description:
      "Completed Certified Ethical Hacker training and developed practical understanding of ethical hacking methodologies.",
    tags: ["CEH v13", "Ethical Hacking", "Security"],
  },
  {
    date: "2026 — PRESENT",
    title: "Cloud Security & DevSecOps",
    organization: "Current learning direction",
    description:
      "Developing strong foundations in Linux, networking, Bash and Python while progressing toward AWS cloud engineering and DevSecOps.",
    tags: ["AWS", "Linux", "DevOps", "Automation"],
  },
];

const projects = [
  {
    number: "01",
    name: "Linux Server Administration Lab",
    category: "LINUX / SYSTEM ADMINISTRATION",
    status: "Lab project",
    description:
      "An Ubuntu and WSL2 administration lab covering users, groups, permissions, POSIX ACLs and documented troubleshooting scenarios.",
    tech: ["Linux", "Ubuntu", "POSIX ACLs", "WSL2"],
    url: "https://github.com/danishjohngs/linux-server-administration-lab",
    icon: "linux",
    color: "FCC624",
  },
  {
    number: "02",
    name: "DevOps Journey",
    category: "LEARNING / DOCUMENTATION",
    status: "Ongoing",
    description:
      "A public learning journal documenting practical progress in Linux, Bash, networking, Git and DevOps engineering foundations.",
    tech: ["Linux", "Bash", "Git", "Networking"],
    url: "https://github.com/danishjohngs/DevOps-Journey",
    icon: "github",
    color: "FFFFFF",
  },
  {
    number: "03",
    name: "Curavita",
    category: "PERSONAL PROJECT",
    status: "Details to be updated",
    description:
      "A personal project. More verified project details and implementation information will be added.",
    tech: ["Personal project"],
    url: null,
    icon: "code",
    color: "20C9F3",
  },
];

const architecture = [
  { name: "Users", detail: "Access", icon: Network },
  { name: "Network", detail: "VPC / Subnets", icon: Cloud },
  { name: "Compute", detail: "EC2 / Servers", icon: Server },
  { name: "Security", detail: "IAM / Policies", icon: LockKeyhole },
  { name: "Storage", detail: "S3 / Data", icon: Database },
  { name: "Monitoring", detail: "Logs / Alerts", icon: Workflow },
];

const workflow = [
  { name: "Plan", icon: Code2 },
  { name: "Code", icon: Terminal },
  { name: "Build", icon: Server },
  { name: "Test", icon: ShieldCheck },
  { name: "Secure", icon: LockKeyhole },
  { name: "Deploy", icon: Cloud },
];

function TechLogo({ icon, color = "FFFFFF", name }) {
  const slug = icon === "code" ? null : icon;

  if (!slug) {
    return (
      <div className="tech-logo-fallback">
        <Code2 size={27} />
      </div>
    );
  }

  return (
    <img
      className="tech-logo-image"
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt={`${name} logo`}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

function SectionTitle({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <Eyebrow>{number} / {label}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">
            DJ<span>.</span>
          </span>
          <span>MY PORTFOLIO.</span>
        </a>

        <nav
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
          id="main-navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          aria-pressed={theme === "light"}
          type="button"
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <a className="header-cta" href="#contact">
          LET'S CONNECT <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}


function Hero() {
  const floatingTechs = [
    technologies.find((tech) => tech.name === "AWS"),
    technologies.find((tech) => tech.name === "Linux"),
    technologies.find((tech) => tech.name === "Python"),
    technologies.find((tech) => tech.name === "Docker"),
    technologies.find((tech) => tech.name === "Kubernetes"),
    technologies.find((tech) => tech.name === "Terraform"),
  ].filter(Boolean);

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <Eyebrow>WELCOME TO MY DIGITAL SPACE</Eyebrow>

        <span className="hero-intro">HELLO, I'M DANISH JOHN</span>

        
<h1>
  Danish John
  <span> G S.</span>
  <br />
  Building
  <span> Secure </span>
  Digital
  <span> Futures.</span>
</h1>


        <h2 className="hero-role">
          Aspiring Cloud Security Engineer
        </h2>

        
<p className="hero-description">
  I'm Danish John G S, a CEH v13 certified cybersecurity
  professional focused on Cloud Security, AWS, Linux,
  Python automation and DevSecOps. I learn by building,
  experimenting, troubleshooting and creating practical solutions.
</p>


        <div className="hero-buttons">
          <a className="button-primary" href="#projects">
            EXPLORE MY WORK <ArrowRight size={17} />
          </a>

          <a className="button-secondary" href={profile.resume} download>
            DOWNLOAD RESUME <ArrowDown size={17} />
          </a>
        </div>

        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail />
          </a>
        </div>

        <div className="hero-specialties">
          <span>CYBERSECURITY</span>
          <span>CLOUD</span>
          <span>DEVOPS</span>
          <span>AUTOMATION</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src={profile.photo}
            alt="Portrait of Danish John"
            className="hero-profile-image"
          />
          <div className="image-overlay" />
          <div className="image-caption">
            <span>DJ / 001</span>
            <span>BUILDING WITH PURPOSE</span>
          </div>
        </div>

        {floatingTechs.map((tech, index) => (
          <div
            className={`floating-tech-icon floating-tech-${index + 1}`}
            key={tech.name}
            title={tech.name}
            aria-label={tech.name}
          >
            <TechLogo {...tech} />
            <span>{tech.name}</span>
          </div>
        ))}

        <div className="hero-floating-card hero-card-top">
          <Cloud size={22} />
          <div>
            <strong>CLOUD SECURITY</strong>
            <small>Learning & building</small>
          </div>
        </div>

        <div className="hero-floating-card hero-card-bottom">
          <Terminal size={22} />
          <div>
            <strong>LINUX & DEVOPS</strong>
            <small>Hands-on practice</small>
          </div>
        </div>

        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="section-wrap section-block" id="about">
      <SectionTitle
        number="01"
        label="ABOUT ME"
        title="Curiosity. Creativity. Continuous growth."
        description="A little introduction to who I am and what I am working towards."
      />

      <div className="about-layout">
        <div className="about-photo-card">
          <img src={profile.photo} alt="Danish John" loading="lazy" />
          <div className="about-photo-caption">
            <span>DJ.</span>
            <small>TECH ENTHUSIAST</small>
          </div>
        </div>

        <div className="about-content">
          <h3>
            Passionate about <span>Cybersecurity & Cloud Technology.</span>
          </h3>

          <p>
            I'm Danish John G S, a BCA student with a strong interest in
            cybersecurity, cloud infrastructure and secure software
            development.
          </p>

          <p>
            My journey started with ethical hacking and understanding how
            systems work. I'm now strengthening my engineering foundations
            through Linux, networking, Python and practical projects.
          </p>

          <p>
            My long-term direction is to build secure, reliable and
            automated cloud environments as a Cloud Security and DevSecOps
            Engineer.
          </p>

          <div className="about-facts">
            <div>
              <GraduationCap />
              <span>
                <small>EDUCATION</small>
                BCA — St. Benedict Academy
              </span>
            </div>
            <div>
              <MapPin />
              <span>
                <small>LOCATION</small>
                Trivandrum, India
              </span>
            </div>
            <div>
              <ShieldCheck />
              <span>
                <small>CERTIFICATION</small>
                CEH v13 — EC-Council
              </span>
            </div>
            <div>
              <Cloud />
              <span>
                <small>CAREER FOCUS</small>
                Cloud Security & DevSecOps
              </span>
            </div>
          </div>

          <a className="text-link" href={profile.resume} download>
            VIEW MY RESUME <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section-wrap section-block" id="expertise">
      <SectionTitle
        number="02"
        label="TECHNICAL EXPERTISE"
        title="Skills under development."
        description="A transparent look at the technical areas I'm actively learning and practising."
      />

      <div className="expertise-grid">
        {expertise.map((skill, index) => (
          <article className="expertise-card" key={skill.name}>
            <div className="expertise-card-top">
              <span>0{index + 1}</span>
              <span className="expertise-status">{skill.level}</span>
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <div
              className="skill-progress"
              role="progressbar"
              aria-label={`${skill.name} learning progress`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={skill.value}
            >
              <span style={{ width: `${skill.value}%` }} />
            </div>
          </article>
        ))}
      </div>

      <p className="expertise-note">
        Progress indicators represent my self-assessed learning focus, not
        formal proficiency scores.
      </p>
    </section>
  );
}

function Technology() {
  return (
    <section className="section-wrap section-block" id="technology">
      <SectionTitle
        number="03"
        label="TECHNOLOGY STACK"
        title="Tools in my learning environment."
        description="Technologies I use, practise or am currently exploring."
      />

      <div className="technology-grid">
        {technologies.map((tech) => (
          <article className="technology-card" key={tech.name}>
            <div className="technology-card-top">
              <span>TECH / STACK</span>
              <ArrowUpRight size={14} />
            </div>
            <div className="technology-logo">
              <TechLogo {...tech} />
            </div>
            <h3>{tech.name}</h3>
            <p>{tech.category}</p>
          </article>
        ))}
      </div>

      <div className="technology-footer">
        <div>
          <Network />
          <span>
            <strong>Networking & Infrastructure</strong>
            <small>Core engineering foundations</small>
          </span>
        </div>
        <div className="technology-tags">
          <span>TCP/IP</span>
          <span>DNS</span>
          <span>HTTP/HTTPS</span>
          <span>SSH</span>
          <span>Firewalls</span>
          <span>Subnetting</span>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="section-wrap section-block architecture-section">
      <SectionTitle
        number="04"
        label="INFRASTRUCTURE ARCHITECTURE"
        title="Understanding how systems connect."
        description="A conceptual view of the infrastructure layers I'm learning to build and secure."
      />

      <div className="architecture-panel">
        <div className="architecture-label">
          <span>CONCEPTUAL INFRASTRUCTURE FLOW</span>
          <span>01 — 06</span>
        </div>

        <div className="architecture-flow">
          {architecture.map(({ name, detail, icon: Icon }, index) => (
            <div className="architecture-step" key={name}>
              <div className="architecture-node">
                <Icon />
              </div>
              <strong>{name}</strong>
              <small>{detail}</small>
              {index !== architecture.length - 1 && (
                <ArrowRight className="architecture-arrow" />
              )}
            </div>
          ))}
        </div>

        <div className="architecture-footer">
          <span>IDENTITY</span>
          <span>CONNECTIVITY</span>
          <span>COMPUTE</span>
          <span>PROTECTION</span>
          <span>DATA</span>
          <span>OBSERVABILITY</span>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section-wrap section-block" id="journey">
      <SectionTitle
        number="05"
        label="PROFESSIONAL JOURNEY"
        title="The path so far."
        description="My education, certifications and hands-on learning journey."
      />

      <div className="journey-list">
        {journey.map((item, index) => (
          <article className="journey-card" key={item.title}>
            <div className="journey-marker">{index + 1}</div>
            <div className="journey-card-content">
              <span className="journey-date">{item.date}</span>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
              <div className="journey-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <ArrowUpRight className="journey-external" />
          </article>
        ))}
      </div>
    </section>
  );
}

function DevOpsWorkflow() {
  return (
    <section className="section-wrap section-block workflow-section">
      <SectionTitle
        number="06"
        label="DEVOPS WORKFLOW"
        title="From code to deployment."
        description="A simplified CI/CD workflow representing the engineering practices I'm exploring."
      />

      <div className="workflow-panel">
        <div className="workflow-topline">
          <span>CONTINUOUS INTEGRATION / CONTINUOUS DELIVERY</span>
          <span className="workflow-indicator">LEARNING MODEL</span>
        </div>

        <div className="workflow-steps">
          {workflow.map(({ name, icon: Icon }, index) => (
            <div className="workflow-step" key={name}>
              <div className="workflow-icon">
                <Icon />
              </div>
              <strong>{name}</strong>
              {index !== workflow.length - 1 && (
                <ArrowRight className="workflow-arrow" />
              )}
            </div>
          ))}
        </div>

        <div className="workflow-track">
          <span />
        </div>

        <p>
          PLAN → DEVELOP → AUTOMATE → TEST → SECURE → DEPLOY
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionTitle
        number="07"
        label="FEATURED PROJECTS"
        title="Learning through building."
        description="Practical work, experiments and documentation from my engineering journey."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-preview">
              <div className="project-preview-top">
                <span>PROJECT / {project.number}</span>
                <span>{project.status}</span>
              </div>
              <div className="project-preview-logo">
                {project.icon === "code" ? (
                  <Code2 />
                ) : (
                  <TechLogo
                    icon={project.icon}
                    color={project.color}
                    name={project.name}
                  />
                )}
              </div>
              <span className="project-preview-category">{project.category}</span>
            </div>

            <div className="project-content">
              <div className="project-title-row">
                <span>{project.number}</span>
                <h3>{project.name}</h3>
              </div>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.url ? (
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW PROJECT <ExternalLink size={15} />
                </a>
              ) : (
                <span className="project-unavailable">
                  PROJECT DETAILS TO BE UPDATED
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <a
        className="github-banner"
        href={profile.github}
        target="_blank"
        rel="noreferrer"
      >
        <Github />
        <span>
          <strong>Explore more on GitHub</strong>
          <small>Follow my projects and engineering progress.</small>
        </span>
        <ArrowUpRight />
      </a>
    </section>
  );
}

function Certification() {
  return (
    <section className="section-wrap section-block certification-section">
      <SectionTitle
        number="08"
        label="CERTIFICATION"
        title="Knowledge backed by practice."
        description="A milestone in my cybersecurity learning journey."
      />

      <article className="certification-card">
        <div className="certification-icon">
          <Award />
        </div>
        <div className="certification-content">
          <span>EC-COUNCIL</span>
          <h3>Certified Ethical Hacker</h3>
          <p>CEH v13</p>
        </div>
        <ShieldCheck className="certification-shield" />
      </article>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <Eyebrow>LET'S CONNECT</Eyebrow>

        <h2>
          Let's build something
          <span> meaningful together.</span>
        </h2>

        <p>
          Have an opportunity, a technical discussion or a project idea?
          I'd be happy to connect.
        </p>

        <a className="button-primary" href={`mailto:${profile.email}`}>
          GET IN TOUCH <ArrowUpRight size={17} />
        </a>

        <div className="contact-grid">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <Mail />
            <span>
              <small>EMAIL</small>
              {profile.email}
            </span>
            <ArrowUpRight />
          </a>

          <a
            href={`https://wa.me/${profile.phone}`}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Phone />
            <span>
              <small>WHATSAPP</small>
              +91 79074 01614
            </span>
            <ArrowUpRight />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Linkedin />
            <span>
              <small>LINKEDIN</small>
              Connect professionally
            </span>
            <ArrowUpRight />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Github />
            <span>
              <small>GITHUB</small>
              Explore my repositories
            </span>
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <a href="#home" className="footer-brand">
          DJ<span>.</span>
        </a>

        <p>
          Designed & built by Danish John.
          <br />
          <span>Learning. Building. Improving.</span>
        </p>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail />
          </a>
        </div>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <small className="copyright">
          © {new Date().getFullYear()} DANISH JOHN. ALL RIGHTS RESERVED.
        </small>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-block, .contact-inner, .hero-copy, .hero-visual"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Technology />
        <Architecture />
        <Journey />
        <DevOpsWorkflow />
        <Projects />
        <Certification />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}