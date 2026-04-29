import { SquareActivity } from "lucide-react";
import { AppWindow } from "lucide-react";
import { ServerCog } from "lucide-react";
import { Workflow } from "lucide-react";
import { CloudCog } from "lucide-react";

export const personalInfo = {
  name: "Rakib Khan",
  title: "Cloud & DevOps Engineer",
  subtitle: "Site Reliability Engineer | Full Stack Developer",
  email: "rakib4kbd@gmail.com",
  phone: "+880 1748 771534",
  location: "Rajbari, Bangladesh",
  github: "https://github.com/rakib4kbd",
  linkedin: "https://linkedin.com/in/rakib4kbd",
  upwork: "https://www.upwork.com/freelancers/rakib4kbd",
  twitter: "https://twitter.com/rakib4kbd",
  summary:
    "DevOps/SRE engineer focused on scaling systems, reducing failure, and cutting cloud cost. 7+ years Linux, 5+ years cloud (AWS-heavy). Designed systems handling 50,000+ emails/day across 21+ nodes. Built high-availability infra with ~5s failover. Migrated 20+ apps to AWS and managed 500+ domains. Strong in Kubernetes, Terraform, CI/CD, and observability.",
  aboutJourney:
    "I started my tech journey with a deep curiosity for how systems work under the hood. What began as tinkering with Linux servers quickly evolved into a passion for building resilient, scalable infrastructure. Over 7+ years, I've gone from managing a single server to architecting distributed systems that process millions of requests. I believe great infrastructure is invisible — it just works, reliably, every time.",
  aboutWork:
    "I specialize in transforming fragile, manual-heavy infrastructure into automated, observable, and highly available systems. Whether it's cutting your AWS bill in half, achieving 5-second failover, or shipping code 80% faster with CI/CD — I bring production-grade reliability to every project.",
  aboutHobbies:
    "Outside of work, I enjoy exploring new open-source tools, contributing to developer communities, and staying current with cloud-native trends. I also enjoy volleyball and spending time outdoors in the beautiful countryside of Rajbari.",
};

export const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: <CloudCog />,
    color: "cyan",
    items: [
      { name: "AWS (EC2, RDS, S3, EKS)", level: 92 },
      { name: "Kubernetes", level: 88 },
      { name: "Docker", level: 95 },
      { name: "Cloudflare", level: 80 },
      { name: "Elastic Beanstalk", level: 78 },
    ],
  },
  {
    category: "DevOps & CI/CD",
    icon: <Workflow />,
    color: "purple",
    items: [
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 82 },
      { name: "GitHub Actions", level: 90 },
      { name: "GitLab CI", level: 85 },
      { name: "Jenkins", level: 78 },
    ],
  },
  {
    category: "Observability",
    icon: <SquareActivity />,
    color: "amber",
    items: [
      { name: "Prometheus", level: 88 },
      { name: "Grafana", level: 87 },
      { name: "ELK Stack", level: 85 },
      { name: "Graylog", level: 83 },
      { name: "HAProxy", level: 80 },
    ],
  },
  {
    category: "Full Stack Development",
    icon: <AppWindow />,
    color: "green",
    items: [
      { name: "React / Next.js", level: 78 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 82 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Systems & Networking",
    icon: <ServerCog />,
    color: "rose",
    items: [
      { name: "Linux (Ubuntu/CentOS)", level: 95 },
      { name: "Bash Scripting", level: 90 },
      { name: "SMTP / TLS / SASL", level: 85 },
      { name: "DNS Management", level: 88 },
      { name: "TCP/IP Networking", level: 82 },
    ],
  },
];

export const experiences = [
  {
    company: "PetPortraitAI",
    location: "US | Remote",
    role: "DevOps Engineer",
    period: "March 2024 – Present",
    bullets: [
      "Built autoscaling system for AI workloads across external GPU vendors",
      "Deployed high-availability Ray clusters for distributed computing",
      "Implemented full observability stack (Prometheus + Grafana + ELK + Graylog)",
      "Managed Cloudflare Zero Trust for secure org-wide access",
    ],
    impact: [
      "Increased workload scalability without fixed GPU cost",
      "Improved system visibility → faster incident response",
    ],
  },
  {
    company: "Mojo Creator Marketing Agency",
    location: "US | Remote",
    role: "DevOps Engineer",
    period: "August 2022 – Present",
    bullets: [
      "Re-architected legacy email infrastructure into a scalable, automated system",
      "Migrated CentOS 7 → Ubuntu 22.04, eliminating EOL risk",
      "Implemented SASL + TLS hardening across the full SMTP stack",
      "Built centralized logging (Graylog + ELK) and monitoring (Prometheus)",
    ],
    impact: [
      "System scaled to 50,000+ emails/day across 21 nodes",
      "Achieved ~5s failover with HAProxy",
      "Reduced node recovery time to ~2 hours (fully automated)",
    ],
  },
  {
    company: "Upwork Freelance",
    location: "Remote | Top Rated Plus",
    role: "DevOps Engineer & Full Stack Developer",
    period: "2019 – Present",
    bullets: [
      "Migrated 20+ applications from VPS → AWS (improved reliability + scaling)",
      "Managed infrastructure across 500+ domains (DNS, email, uptime)",
      "Built CI/CD pipelines that reduced deployment time by ~60–80%",
      "Deployed production Kubernetes clusters (EKS + self-managed)",
      "Built full-stack web applications using React, Next.js, and Node.js",
    ],
    impact: [
      "Fixed critical DNS + infra issues → restored production systems fast",
      "Deployed trading bot infra → delivered under budget",
    ],
  },
  {
    company: "YafiTech",
    location: "Bangladesh | On-site",
    role: "DevOps Engineer",
    period: "January 2020 – December 2023",
    bullets: [
      "Managed Docker-based production environments for client projects",
      "Deployed Laravel applications on AWS (Elastic Beanstalk + RDS)",
      "Maintained scalable client infrastructure with high availability",
    ],
    impact: [],
  },
  {
    company: "Freelance Projects",
    location: "Remote",
    role: "Full Stack Developer",
    period: "2019 – Present",
    bullets: [
      "Built and deployed full-stack web apps using React, Next.js, and Node.js",
      "Developed RESTful APIs and integrated third-party services",
      "Implemented responsive UIs with Tailwind CSS and modern frameworks",
      "Delivered end-to-end solutions — from design to deployment on AWS",
    ],
    impact: [],
  },
];

export const projects = [
  {
    id: "distributed-email-infrastructure",
    title: "Distributed Email Infrastructure",
    category: "Cloud & DevOps",
    shortDescription:
      "A horizontally scalable email system handling 50,000+ emails/day across 21 nodes with 5-second failover.",
    stack: [
      "HAProxy",
      "Postfix",
      "Ubuntu 22.04",
      "Graylog",
      "ELK Stack",
      "Prometheus",
      "Grafana",
    ],
    fullDescription:
      "Designed and built a production-grade distributed email infrastructure from the ground up. The system replaced a fragile, single-point-of-failure legacy setup with a stateless, horizontally scalable architecture across 21+ nodes. Every node can be fully rebuilt in ~2 hours, deployments use canary rollouts (25% → 100%), and the entire stack is observable via centralized logging and metrics.",
    challenges: [
      "Migrating from CentOS 7 to Ubuntu 22.04 with zero-downtime email delivery across all nodes",
      "Implementing SASL + TLS hardening across all 21 SMTP nodes simultaneously",
      "Achieving sub-5-second failover using HAProxy with fine-tuned health checks",
      "Building centralized log aggregation across a geographically distributed cluster",
    ],
    improvements: [
      "Add ML-based anomaly detection for proactive spam/delivery issue alerts",
      "Implement geo-distributed nodes for globally low-latency delivery",
      "Add automated DKIM/SPF/DMARC rotation and management tooling",
    ],
    liveLink: null,
    githubLink: null,
  },
  {
    id: "ai-workload-autoscaling-platform",
    title: "AI Workload Autoscaling Platform",
    category: "Cloud & DevOps",
    shortDescription:
      "Intelligent autoscaling platform for AI/ML workloads using Ray clusters across external GPU vendors.",
    stack: [
      "Kubernetes",
      "Ray",
      "AWS EKS",
      "Prometheus",
      "Grafana",
      "Cloudflare Zero Trust",
      "Docker",
    ],
    fullDescription:
      "Built a production autoscaling platform for PetPortraitAI that dynamically provisions GPU resources from external vendors on demand. The system eliminates fixed GPU costs by scaling to zero when idle and bursting capacity during peak workloads. Full observability with Prometheus and Grafana gives real-time insight into every workload, and Cloudflare Zero Trust secures cross-vendor access without a VPN.",
    challenges: [
      "Integrating with multiple external GPU vendors through disparate APIs and auth schemes",
      "Implementing cost-aware autoscaling logic without sacrificing inference latency",
      "Setting up Cloudflare Zero Trust to replace VPN for secure multi-vendor networking",
      "Ensuring reliable inter-node communication in Ray clusters across vendor boundaries",
    ],
    improvements: [
      "Add predictive scaling based on historical workload patterns using time-series forecasting",
      "Implement spot-instance optimization across GPU vendors for further cost reduction",
      "Add automated benchmarking pipeline to continuously evaluate GPU vendor performance",
    ],
    liveLink: null,
    githubLink: null,
  },
  {
    id: "cicd-pipeline-automation-suite",
    title: "CI/CD Pipeline Automation Suite",
    category: "DevOps",
    shortDescription:
      "Standardized CI/CD pipelines that cut deployment time by 60–80% across 20+ client applications.",
    stack: [
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Docker",
      "AWS",
      "Terraform",
      "Ansible",
    ],
    fullDescription:
      "Designed and implemented a standardized CI/CD framework for 20+ applications migrated from VPS to AWS. The suite covers automated testing, Docker image builds, infrastructure-as-code provisioning via Terraform, and zero-downtime blue-green or canary deployments. The framework is reusable across PHP, Python, and Node.js stacks.",
    challenges: [
      "Standardizing pipeline patterns across diverse tech stacks (PHP/Laravel, Python, Node.js)",
      "Implementing zero-downtime deployments for high-traffic production systems",
      "Managing secrets and environment-specific configs securely across 20+ projects",
      "Integrating Terraform state management across teams without conflicts",
    ],
    improvements: [
      "Integrate automated security scanning (SAST/DAST) directly into the pipeline gate",
      "Implement progressive delivery with LaunchDarkly-style feature flags",
      "Build a self-service developer portal for pipeline creation and monitoring",
    ],
    liveLink: null,
    githubLink: "https://github.com/rakib4kbd",
  },
];

export const education = [
  // {
  //   degree: "Higher Secondary Certificate (HSC)",
  //   institution: "Rajbari Government College",
  //   location: "Rajbari, Bangladesh",
  //   year: "2016",
  //   field: "Science",
  // },
];

export const stats = [
  { value: "7+", label: "Years Linux Experience" },
  { value: "20+", label: "Apps Migrated to AWS" },
  { value: "500+", label: "Domains Managed" },
  { value: "50K+", label: "Emails/Day Handled" },
];
