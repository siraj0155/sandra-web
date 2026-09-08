export const profile = {
  name: "Sandra",
  role: "System Engineer",
  location: "On-site",
  email: "sandranv0033@gmail.com",
  phone: "+1 (555) 010-2048",
  availability: "Hello",
  greeting: "Hi, I’m Sandra.",
  headline: "This is my personal site.",
  photo: "/sandu.jpeg",
  photoAlt: "Portrait of Sandra",
  resumeUrl: "/resume.pdf",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary:
    "I’m a Systems Engineer focused on servers, networks, cloud infrastructure, and reliable systems. This portfolio showcases who I am, what I do, and the technologies I work with.",
};

export const facts = [
  { value: "Engineer", label: "What I do" },
  { value: "Linux", label: "Daily work" },
  { value: "Cloud", label: "Also this" },
  { value: "On-site", label: "Based" },
] as const;

export const about = {
  heading: "A bit about me",
  body: [
    "I’m Sandra, a Systems Engineer focused on servers, cloud infrastructure, and reliable systems. I like keeping infrastructure simple, stable, and easy to manage.",
    "Beyond tickets and dashboards, I enjoy exploring new tools, solving infrastructure problems, and creating practical documentation that makes life easier for the next person.",
  ],
  focus: ["Linux servers", "Networking", "Cloud (AWS)", "Monitoring", "Automation"],
};

export const skillGroups = [
  {
    title: "Servers",
    items: ["Linux", "Windows Server", "Ubuntu"],
  },
  {
    title: "Networking",
    items: ["DNS", "VPN", "Load balancers"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Azure", "VMware", "MS Office 365"],
  },
  {
    title: "Containers",
    items: ["Docker", "Kubernetes"],
  },
  {
    title: "Automation",
    items: ["Ansible", "Terraform", "Python"],
  },
  {
    title: "Monitoring",
    items: ["Prometheus", "Grafana", "Zabbix"],
  },
] as const;

export const experience = [
  {
    role: "System Engineer",
    company: "Zoftcares Solution",
    period: "2025 — Present",
    location: "On-site",
    points: [
      "I look after servers, networks, and day-to-day IT so the office stays online.",
      "I work with Windows, Linux, cloud, and Microsoft 365.",
      "I help with setup, monitoring, and fixes when something breaks.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Server setup",
    year: "2024",
    summary: "A simple Linux setup I reuse so new servers start the same way.",
    tags: ["Linux", "Ansible"],
  },
  {
    title: "Monitoring",
    year: "2023",
    summary: "Dashboards I built so I can see issues before they grow.",
    tags: ["Grafana", "Prometheus"],
  },
  {
    title: "Backups",
    year: "2022",
    summary: "A backup plan I tested for real, so restore actually works.",
    tags: ["VMware", "Backup"],
  },
] as const;

export const certifications = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { name: "RHCSA", issuer: "Red Hat", year: "2023" },
  { name: "Network+", issuer: "CompTIA", year: "2021" },
  { name: "Security+", issuer: "CompTIA", year: "2022" },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Hello" },
] as const;
