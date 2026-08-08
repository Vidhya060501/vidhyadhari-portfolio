import React, { useState, useEffect } from 'react';
import {
  Mail, ArrowRight, Briefcase,
  X, Laptop, Globe, Wrench, BookOpen, Monitor,
  LayoutGrid, Layers, MessageCircle,
  Sun, Moon
} from 'lucide-react';

const GithubSVG = ({ size = 18, color }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinSVG = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GmailSVG = ({ size = 18 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size}>
    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"/>
  </svg>
);

const LeetCodeSVG = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#FFA116">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const AboutPanel = ({ isDark }) => (
  <div style={{width:'100%', height:'100%', minHeight:480, overflow:'hidden', background: isDark ? '#161b27' : '#ffffff'}}>
    <img src="/about-vidhyadhari.png" alt="about"
      style={{width:'100%', height:'100%', objectFit:'contain', objectPosition:'center', display:'block', mixBlendMode: isDark ? 'screen' : 'multiply'}}/>
  </div>
);

const AvatarSVG = () => (
  <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect x="20" y="188" width="220" height="10" rx="5" fill="#1a2440"/>
    <rect x="55" y="168" width="150" height="24" rx="5" fill="#2a3550"/>
    <rect x="59" y="116" width="142" height="58" rx="5" fill="#0d1120"/>
    <rect x="64" y="121" width="132" height="48" rx="4" fill="#080b14"/>
    <rect x="74" y="132" width="50" height="3" rx="1.5" fill="#ADB2D4" opacity="0.8"/>
    <rect x="74" y="140" width="76" height="3" rx="1.5" fill="#6366f1" opacity="0.7"/>
    <rect x="74" y="148" width="38" height="3" rx="1.5" fill="#ADB2D4" opacity="0.6"/>
    <rect x="82" y="156" width="62" height="3" rx="1.5" fill="#3b82f6" opacity="0.7"/>
    <ellipse cx="130" cy="100" rx="28" ry="32" fill="#2a3550"/>
    <circle cx="130" cy="68" r="26" fill="#c8865a"/>
    <ellipse cx="130" cy="52" rx="26" ry="15" fill="#1a0a00"/>
    <rect x="104" y="48" width="10" height="22" rx="5" fill="#1a0a00"/>
    <rect x="146" y="48" width="10" height="22" rx="5" fill="#1a0a00"/>
    <circle cx="120" cy="68" r="3" fill="#1a0a00"/>
    <circle cx="140" cy="68" r="3" fill="#1a0a00"/>
    <path d="M121 78 Q130 86 139 78" stroke="#1a0a00" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M102 108 Q72 130 86 168" stroke="#2a3550" strokeWidth="16" strokeLinecap="round" fill="none"/>
    <path d="M158 108 Q188 130 174 168" stroke="#2a3550" strokeWidth="16" strokeLinecap="round" fill="none"/>
    <ellipse cx="88" cy="175" rx="13" ry="8" fill="#c8865a"/>
    <ellipse cx="172" cy="175" rx="13" ry="8" fill="#c8865a"/>
    <rect x="208" y="172" width="22" height="17" rx="4" fill="#ADB2D4" opacity="0.85"/>
    <path d="M230 176 Q238 176 238 184 Q238 188 230 188" stroke="#ADB2D4" strokeWidth="2" fill="none" opacity="0.85"/>
    <rect x="28" y="174" width="10" height="16" rx="3" fill="#5c3317"/>
    <ellipse cx="33" cy="163" rx="15" ry="13" fill="#16a34a" opacity="0.85"/>
    <ellipse cx="24" cy="170" rx="9" ry="7" fill="#16a34a" opacity="0.7"/>
    <ellipse cx="42" cy="170" rx="9" ry="7" fill="#16a34a" opacity="0.7"/>
  </svg>
);

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [expandedExp, setExpandedExp] = useState({});

  const titles = ["Software Engineer", "Backend Platform Engineer", "Distributed Systems · Cloud Native · AI Tooling", "Reliability by Design. Owned in Production."];
  const [titleIndex, setTitleIndex] = useState(0);

  const t = (dark, light) => isDark ? dark : light;

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentTitle = titles[titleIndex];
    const typeInterval = setInterval(() => {
      if (currentIndex < currentTitle.length) {
        currentText += currentTitle[currentIndex];
        setTypewriterText(currentText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypewriterText('');
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50);
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filterCategory, isDark]);

  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([{role:'bot', text:"Hi there! 👋 Ask me anything about Vidhyadhari's background, skills, or projects."}]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  const skillCategories = [
    {
      title: "Languages", icon: <Laptop size={20} />,
      darkBg: "bg-[#ADB2D4]/15 text-[#ADB2D4]", lightBg: "bg-[#ADB2D4]/25 text-[#6B72A8]",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      ]
    },
    {
      title: "Backend & Distributed", icon: <Globe size={20} />,
      darkBg: "bg-[#C7D9DD]/15 text-[#C7D9DD]", lightBg: "bg-[#C7D9DD]/40 text-[#4a7a8a]",
      skills: [
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "gRPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      ]
    },
    {
      title: "DevOps & Cloud", icon: <Wrench size={20} />,
      darkBg: "bg-[#2a3347]/60 text-[#9098c0]", lightBg: "bg-[#D5E5D5]/60 text-[#4a7a5a]",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      ]
    },
    {
      title: "Databases", icon: <BookOpen size={20} />,
      darkBg: "bg-[#ADB2D4]/15 text-[#c0c4e8]", lightBg: "bg-[#ADB2D4]/25 text-[#6B72A8]",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "PySpark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
        { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" },
      ]
    },
    {
      title: "AI & Dev Tools", icon: <Monitor size={20} />,
      darkBg: "bg-[#D5E5D5]/15 text-[#a0c8a0]", lightBg: "bg-[#D5E5D5]/50 text-[#3a7a4a]",
      skills: [
        { name: "LangGraph", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenAI APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "tree-sitter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "ChromaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Observability", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      ]
    }
  ];

  const moreAboutMe = [
    { title: "DISTRIBUTED SYSTEMS", icon: <LayoutGrid size={40} style={{color: "#ADB2D4"}} />, description: "Fascinated by how large-scale systems stay consistent under failure. Kafka, saga patterns, idempotency. These aren't just tools, they're design philosophies I live by." },
    { title: "COMPETITIVE CODING", icon: <Layers size={40} style={{color: "#ADB2D4"}} />, description: `I practice DSA regularly and love algorithmic challenges. Find me on <a href="https://leetcode.com/u/Vidhyadhari_09/" target="_blank" rel="noopener noreferrer" class="text-blue-500 font-bold hover:text-orange-500 transition-colors">LeetCode</a>.` },
    { title: "AI TOOLING", icon: <Briefcase size={40} style={{color: "#ADB2D4"}} />, description: "I'm drawn to building tools that make engineers faster and safer. PR impact analysis, Socratic tutors, RAG pipelines: the intersection of AI and developer productivity is where I want to keep building." },
    { title: "HOBBIES", icon: <MessageCircle size={40} style={{color: "#ADB2D4"}} />, description: "Outside engineering I play pickleball and cook. Both teach the same lesson: fundamentals before execution. Get the basics wrong and no amount of flair saves you." }
  ];

  const allProjects = [
    { title: "PR Blast Radius Analyzer", description: "Cut cross-repository PR impact analysis from 2+ hours to 15 seconds using tree-sitter AST parsing, symbol indexing, LangGraph, and OpenAI APIs. Deployed on Azure Container Apps with a Responsible AI pipeline including prompt injection detection, AST-grounded output validation to prevent hallucinated impact claims, and structured audit logging for compliance and explainability.", github: "https://github.com/Vidhya060501", illustration: "/proj-blast-radius.svg", category: "AI/ML", tech: ["Python", "FastAPI", "LangGraph", "OpenAI APIs", "Azure", "DynamoDB", "tree-sitter"] },
    { title: "Socratic-OT: AI Anatomy Tutor", description: "Multimodal Socratic AI tutor for Occupational Therapy students, grounded in the full OpenStax Anatomy and Physiology 2e textbook (28 chapters, 997 RAG chunks). Guides students through questions rather than giving direct answers. Upload an anatomy diagram and the tutor asks Socratic questions before naming any structure. LangGraph state machine manages dialogue phases from rapport through hint, clue, reveal, and mastery quiz. Session memory tracks weak topics and revisits them. Evaluated with RAGAS: Faithfulness 0.90, Relevance 0.85.", github: "https://github.com/Vidhya060501/Socratic-OT", illustration: "/proj-socratic-ot.svg", category: "AI/ML", tech: ["Python", "LangGraph", "ChromaDB", "Llama 3.1 8B", "Groq", "RAGAS", "Gradio"] },
    { title: "FLOE: Field Data Platform", description: "Led a 4-person team building a client-sponsored full-stack field data platform. Consolidated fragmented Drive-based workflows into a unified product, cutting field report access time from 2 hours to 5 minutes. Built 25+ REST APIs across account, media, reporting, and alert workflows, sensor-driven AWS S3 data pipelines, and two-layer RBAC with OAuth2. Now live in customer acceptance testing.", github: "https://github.com/Vidhya060501", illustration: "/proj-floe.svg", category: "Full Stack", tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "AWS S3", "OAuth2"] },
    { title: "Distributed Rate Limiter as a Service", description: "Built a distributed rate limiter as a standalone Go microservice with Token Bucket implemented from scratch, no library dependencies. Exposes gRPC and REST APIs for rate limit decisions. Atomic Redis Lua scripts ensure zero over-limit leakage across horizontally scaled replicas without distributed locks: Redis single-threaded execution makes each check-and-decrement operation atomic by design. Per-tenant rule configurations and request audit logs stored in MongoDB. Deployed on Kubernetes with Docker. Validated correctness under concurrent load with k6.", github: "https://github.com/Vidhya060501", illustration: "/proj-rate-limiter.svg", category: "Backend", tech: ["Go", "gRPC", "Redis", "MongoDB", "Docker", "Kubernetes", "k6"] },
    { title: "Food Delivery Microservices Platform", description: "Four-service Spring Boot platform implementing Saga pattern for distributed order fulfillment across Order, Payment, Restaurant, and Customer domains, each with a service-owned PostgreSQL database. Transactional Outbox pattern eliminates the dual-write problem between each service's database and Kafka, guaranteeing events are published without data loss. Idempotent consumers with deduplication keys preserved consistency across 10K stress-test transactions.", github: "https://github.com/Vidhya060501", illustration: "/proj-food-delivery.svg", category: "Backend", tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes"] },
    { title: "Event-Driven Ride-Sharing Backend", description: "9-service event-driven platform with database-per-service isolation across rider, driver, matching engine, trip management, payment, dynamic pricing, fraud detection, analytics, and notifications. All inter-service communication goes through Kafka topics with partition keys on ride ID to preserve event ordering across state transitions. Fraud detection and analytics run as independent async consumers on the event stream, fully decoupled from the write path. Idempotency keys on consumers prevent duplicate state transitions under at-least-once delivery.", github: "https://github.com/Vidhya060501/kafka-ride-sharing", illustration: "/proj-ride-sharing.svg", category: "Backend", tech: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Redis", "Docker"] },
  ];

  const filteredProjects = filterCategory === 'All' ? allProjects : allProjects.filter(p => p.category === filterCategory);

  const experiences = [
    {
      company: "Capgemini Technology Services",
      logoDotBg: "#0070AD",
      logoDotContent: (
        <div className="flex items-center justify-center w-full h-full">
          <span style={{fontSize:'17px', fontWeight:'900', color:'white', letterSpacing:'-1px'}}>CG</span>
        </div>
      ),
      role: "Software Engineer",
      team: "Client: AXA Insurance",
      period: "Jan 2024 – Aug 2025",
      location: "India",
      tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Jenkins"],
      summary: "Reduced production API latency 140x (3,500ms to 25ms) on a Java/Spring Boot service handling millions of insurance policyholders, while sustaining 99.95% platform availability on AWS EKS with Kubernetes and Terraform.",
      achievements: [
        "[API Performance] Owned reliability of a production Java/Spring Boot service, refactoring Hibernate/JPA access paths and implementing composite PostgreSQL indexes to reduce query latency from 3.5s to 25ms.",
        "[Reliability & Messaging] Improved service resilience across a horizontally scaled microservice fleet by replacing synchronous third-party calls with Kafka retry topics, consumer-level backoff, and failure-isolation workflows for burst traffic.",
        "[System Protection] Prevented service overload by implementing Redis-backed distributed rate limiting with the Token Bucket pattern, Bucket4j, and atomic validation across service instances.",
        "[Availability] Sustained 99.95% platform availability by containerizing Java microservices and managing deployment workflows using AWS EKS, Kubernetes, and Terraform.",
        "[Quality Engineering] Increased unit and integration test coverage from 31% to 74% and caught 20+ pre-release defects by expanding automated regression and release-validation suites.",
        "[CI/CD] Reduced manual deployment effort by 40% by building Jenkins CI/CD pipelines with build validation, health checks, rollback configuration, and Git-based change tracking."
      ]
    },
    {
      company: "Capgemini Technology Services",
      logoDotBg: "#0070AD",
      logoDotContent: (
        <div className="flex items-center justify-center w-full h-full">
          <span style={{fontSize:'17px', fontWeight:'900', color:'white', letterSpacing:'-1px'}}>CG</span>
        </div>
      ),
      role: "Associate Software Engineer",
      team: "Client: Mars Inc.",
      period: "Sep 2022 – Dec 2023",
      location: "India",
      tags: ["Python", "FastAPI", "PySpark", "Redis", "AWS S3", "SQS", "SNS", "CloudWatch"],
      summary: "Built Python/FastAPI ingestion pipelines processing supply chain data across 180 countries with sub-60s SLA, and REST APIs maintaining sub-200ms p99 with 99.9% uptime adopted across global analytics and business teams.",
      achievements: [
        "[Global Ingestion] Designed and owned Python ingestion services processing supply chain and trade transaction data across 180 countries, delivering sub-60 second end-to-end ingestion SLA with zero duplicate processing guaranteed through Redis-backed idempotency controls.",
        "[API Reliability] Built and deployed production REST APIs for inventory, transaction, and reporting workflows maintaining sub-200ms p99 response times and 99.9% uptime SLA, adopted by business, analytics, and finance teams across the global organization.",
        "[SDLC] Executed full SDLC workflows across Agile sprints, leading API design, integration testing, release coordination, UAT support, and production incident debugging.",
        "[Query Optimization] Reduced response times by 25% across 20+ endpoints by diagnosing and resolving N+1 query patterns through SQLAlchemy eager loading and query consolidation.",
        "[Data Validation] Validated 5M+ historical transaction records before release by building Databricks PySpark pipelines that surfaced data discrepancies before they reached downstream teams.",
        "[Observability] Reduced production incident investigation time by 30% by implementing structured JSON logging, service telemetry, and real-time monitoring alerts in AWS CloudWatch."
      ]
    }
  ];

  const education = [
    { school: "University at Buffalo, SUNY", degree: "Master of Science in Computer Science", location: "Buffalo, NY", period: "Jan 2025 – Dec 2026 (Expected)", gpa: "4.0/4.0", courses: ["Distributed Systems", "Operating Systems", "Algorithm Design", "Machine Learning", "Natural Language Processing", "Deep Learning", "Database Systems"], current: true },
    { school: "NIT Rourkela, India", degree: "Bachelor of Technology in Engineering", location: "India", period: "Jun 2018 – Jun 2022", gpa: "3.8/4.0", courses: ["Data Structures", "Operating Systems", "Computer Networks", "Algorithm Design"], current: false }
  ];

  // ── theme tokens ──
  const P  = '#ADB2D4';
  const PL = '#6B72A8';
  const bg         = t('bg-[#0d1117]', 'bg-[#EEF1DA]');
  const card       = t('bg-[#1e2535] border-[#2a3347] hover:border-[#ADB2D4]/60', 'bg-white border-[#D4D8EE] hover:border-[#ADB2D4] shadow-sm');
  const txt        = t('text-white', 'text-slate-900');
  const txtMuted   = t('text-[#ADB2D4]', 'text-slate-600');
  const txtFaint   = t('text-[#7a82aa]', 'text-slate-500');
  const divider    = t('border-[#2a3347]', 'border-[#C7D9DD]');
  const navBg      = scrolled ? t('bg-[#0d1117]/95 backdrop-blur-md border-b border-[#2a3347]', 'bg-white/95 backdrop-blur-md border-b border-[#e2e5f0] shadow-sm') : 'bg-transparent';
  const expCardCls = t('bg-[#1e2535] border-[#2a3347]', 'bg-white border-[#D4D8EE] shadow-sm');
  const projCardCls= t('bg-[#1e2535] border-[#2a3347]', 'bg-white border-[#D4D8EE] shadow-sm');
  const moreCls    = t('bg-[#1e2535] border-[#2a3347] hover:border-[#ADB2D4]/60', 'bg-white border-[#D4D8EE] hover:border-[#ADB2D4] shadow-sm');
  const footerCls  = t('bg-[#0d1117] border-t border-[#1e2535]', 'bg-[#D5E5D5] border-t border-[#C7D9DD]');
  const socialCls  = t('border-[#2a3347] text-[#7a82aa] hover:border-[#ADB2D4] hover:text-[#ADB2D4]', 'border-[#e2e5f0] text-slate-500 hover:border-[#ADB2D4] hover:text-[#ADB2D4]');
  const filterInactive = t('bg-[#1e2535] text-[#7a82aa] hover:bg-[#2a3347] hover:text-[#ADB2D4] border border-[#2a3347]', 'bg-white text-slate-600 hover:bg-[#f1f3f9] border border-[#e2e5f0]');
  const menuCls    = t('bg-[#161b27] border-[#2a3347]', 'bg-[#EEF1DA] border-[#D4D8EE] shadow-lg');
  const accent     = isDark ? P : PL;

  const getBotReply = (msg) => {
    const m = msg.toLowerCase();
    if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('hola'))
      return "Hi there! 👋 I'm Vidhyadhari's portfolio assistant. Ask me about his skills, projects, experience, education, or how to contact him!";
    if (m.includes('skill') || m.includes('tech') || m.includes('stack') || m.includes('language') || m.includes('framework'))
      return "Vidhyadhari's core stack: Java, Python, Go, Spring Boot, FastAPI, gRPC, Kafka, Redis, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, and Azure. On the AI side: LangGraph, OpenAI APIs, ChromaDB, tree-sitter, and PySpark for data pipelines. 💻";
    if (m.includes('blast radius') || m.includes('pr analyzer') || m.includes('ast') || m.includes('tree-sitter'))
      return "PR Blast Radius Analyzer cuts cross-repository PR impact analysis from 2+ hours to 15 seconds using tree-sitter AST parsing, LangGraph, and OpenAI APIs. Deployed on Azure Container Apps with a Responsible AI pipeline: prompt injection detection, AST-grounded output validation, and audit logging. 🔍";
    if (m.includes('socratic') || m.includes('anatomy') || m.includes('tutor') || m.includes('ot') || m.includes('chromadb') || m.includes('ragas'))
      return "Socratic-OT is an AI anatomy tutor for Occupational Therapy students. It guides them through questions rather than giving answers, built on 997 RAG chunks from OpenStax A&P 2e (ChromaDB), a LangGraph state machine, and Llama 3.1 8B via Groq. Evaluated with RAGAS: Faithfulness 0.90, Relevance 0.85. 🧠";
    if (m.includes('floe') || m.includes('field data') || m.includes('sensor'))
      return "FLOE is a client-sponsored full-stack field data platform Vidhyadhari led with a 4-person team. It consolidated fragmented Drive-based workflows, cutting field report access from 2 hours to 5 minutes. Built with 25+ REST APIs, sensor-driven AWS S3 pipelines, and two-layer RBAC with OAuth2. Now live in customer acceptance testing. 🌐";
    if (m.includes('rate limit') || m.includes('token bucket') || m.includes('grpc') || (m.includes('go') && m.includes('redis')))
      return "Distributed Rate Limiter is a standalone Go microservice with Token Bucket implemented from scratch. Exposes gRPC and REST APIs. Atomic Redis Lua scripts ensure zero over-limit leakage across horizontally scaled replicas without distributed locks. MongoDB stores per-tenant configs and audit logs, deployed on Kubernetes. ⚡";
    if (m.includes('food') || m.includes('delivery') || m.includes('saga') || m.includes('outbox'))
      return "Food Delivery Microservices Platform: 4 Spring Boot services (Order, Payment, Restaurant, Customer) each with their own PostgreSQL database. Uses the Saga pattern for distributed transactions and the Transactional Outbox pattern to eliminate the dual-write problem with Kafka. Validated consistency across 10K stress-test transactions. 🍕";
    if (m.includes('ride') || m.includes('ride-sharing') || m.includes('ridesharing') || m.includes('kafka') && m.includes('service'))
      return "Event-Driven Ride-Sharing Backend: 9 services (rider, driver, matching engine, trip management, payment, dynamic pricing, fraud detection, analytics, notifications) with database-per-service isolation. All inter-service communication goes through Kafka with partition keys on ride ID. Fraud detection and analytics run as fully decoupled async consumers. 🚗";
    if (m.includes('project') || m.includes('built') || m.includes('portfolio'))
      return "Vidhyadhari has 6 projects: PR Blast Radius Analyzer (AI/ML), Socratic-OT anatomy tutor (AI/ML), FLOE field data platform (Full Stack), Distributed Rate Limiter in Go (Backend), Food Delivery Microservices with Saga pattern (Backend), and Event-Driven Ride-Sharing (Backend). Check them out above! 🚀";
    if (m.includes('experience') || m.includes('job') || m.includes('company') || m.includes('work history'))
      return "Vidhyadhari has 3+ years of professional experience: Software Engineer at AXA Insurance (Jan 2024-Aug 2025, cut latency from 3.5s to 25ms) and Associate Software Engineer at Mars Inc. (Sep 2022-Dec 2023, 5M+ supply chain records through PySpark pipelines). 🏢";
    if (m.includes('education') || m.includes('degree') || m.includes('university') || m.includes('gpa') || m.includes('school') || m.includes('buffalo'))
      return "Vidhyadhari is pursuing his MS in Computer Science at University at Buffalo, SUNY with a perfect 4.0 GPA, expected Dec 2026. He completed his BTech in Engineering from NIT Rourkela, India with a 3.8 GPA. 🎓";
    if (m.includes('contact') || m.includes('email') || m.includes('reach') || m.includes('hire') || m.includes('connect'))
      return "Reach Vidhyadhari at vidhyadhari060501@gmail.com, connect on LinkedIn at linkedin.com/in/vidhyadharibandaru, or check his GitHub at github.com/Vidhya060501. Open to new opportunities! 📬";
    if (m.includes('location') || m.includes('where') || m.includes('city'))
      return "Vidhyadhari is currently based in Buffalo, NY, pursuing his MS at University at Buffalo. 📍";
    if (m.includes('leetcode') || m.includes('dsa') || m.includes('algorithm') || m.includes('competitive'))
      return "Vidhyadhari practices DSA regularly. Find him on LeetCode at leetcode.com/u/Vidhyadhari_09 📊";
    if (m.includes('award') || m.includes('recognition') || m.includes('achievement'))
      return "Vidhyadhari won the Best Employee of the Quarter Award in March 2025, recognized for delivery ownership, cross-team communication, and production backend reliability improvements. 🏆";
    return "I can tell you about Vidhyadhari's skills, projects (PR Blast Radius, Socratic-OT, FLOE, Rate Limiter, Food Delivery, Ride-Sharing), experience, education, or contact info. What would you like to know? 😊";
  };

  const sendMessage = async (text) => {
    const userMsg = text || chatInput.trim();
    if (!userMsg) return;
    setChatMessages(prev => [...prev, {role:'user', text: userMsg}]);
    setChatInput('');
    setChatLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const reply = getBotReply(userMsg);
    setChatMessages(prev => [...prev, {role:'bot', text: reply}]);
    setChatLoading(false);
  };

  const heroTags = [
    {
      cls: "tag-float-1 absolute -top-4 left-0",
      label: "Full Stack", emoji: "⚡",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#ADB2D4]/50", lightBorder: "border-[#ADB2D4]/60",
      darkText: "text-[#ADB2D4]", lightText: "text-[#6B72A8]",
      icon: null
    },
    {
      cls: "tag-float-2 absolute top-1/4 -left-10",
      label: "Backend Dev", emoji: "🔧",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#D5E5D5]/50", lightBorder: "border-[#D5E5D5]",
      darkText: "text-[#a0c8a0]", lightText: "text-[#3a7a4a]",
      icon: null
    },
    {
      cls: "tag-float-3 absolute bottom-1/4 -left-8",
      label: "ML & AI", emoji: "🤖",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#ADB2D4]/50", lightBorder: "border-[#ADB2D4]/60",
      darkText: "text-[#ADB2D4]", lightText: "text-[#6B72A8]",
      icon: null
    },
    {
      cls: "tag-float-4 absolute -top-4 right-0",
      label: "Cloud & DevOps", emoji: "☁️",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#C7D9DD]/50", lightBorder: "border-[#C7D9DD]",
      darkText: "text-[#C7D9DD]", lightText: "text-[#4a7a8a]",
      icon: null
    },
    {
      cls: "tag-float-5 absolute top-1/4 -right-10",
      label: "Open Source", emoji: "🔓",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#D5E5D5]/50", lightBorder: "border-[#D5E5D5]",
      darkText: "text-[#a0c8a0]", lightText: "text-[#3a7a4a]",
      icon: null
    },
    {
      cls: "tag-float-6 absolute bottom-1/4 -right-8",
      label: "Distributed Systems", emoji: "🏗️",
      darkBg: "bg-[#1e2535]/95", lightBg: "bg-white",
      darkBorder: "border-[#ADB2D4]/50", lightBorder: "border-[#ADB2D4]/60",
      darkText: "text-[#ADB2D4]", lightText: "text-[#6B72A8]",
      icon: null
    },
  ];

  return (
    <div className={`min-h-screen ${bg} ${txt} transition-colors duration-300`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Caveat:wght@400;500;600&display=swap');
        * { font-family: 'Inter', sans-serif; }
        @keyframes float  { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-8px)}  }
        .scroll-animate { opacity:0; transform:translateY(28px); transition:opacity .6s ease,transform .6s ease; }
        .animate-in { opacity:1; transform:translateY(0); }
        .tag-float-1{animation:float  4.0s ease-in-out infinite 0.0s}
        .tag-float-2{animation:floatB 5.0s ease-in-out infinite 0.5s}
        .tag-float-3{animation:float  4.5s ease-in-out infinite 1.0s}
        .tag-float-4{animation:floatB 3.8s ease-in-out infinite 0.2s}
        .tag-float-5{animation:float  5.2s ease-in-out infinite 0.8s}
        .tag-float-6{animation:floatB 4.2s ease-in-out infinite 1.5s}
        .timeline-line{position:absolute;left:21px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#ADB2D4,#C7D9DD,#D5E5D5);}
        .modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:999;display:flex;align-items:center;justify-content:center;padding:1rem;}
        .exp-card{border-radius:.75rem;padding:1.5rem;border-width:1px;border-style:solid;transition:all .3s ease;}
        .exp-card{border:2px solid rgba(173,178,212,0.4);}.exp-card:hover{box-shadow:0 12px 36px rgba(213,229,213,0.4);transform:translateY(-6px);border-color:#ADB2D4 !important;}
        .scroll-down-indicator{display:flex;flex-direction:column;align-items:center;gap:.25rem;font-size:.75rem;}
        .scroll-mouse{width:24px;height:38px;border-radius:12px;display:flex;justify-content:center;padding-top:6px;border-width:2px;border-style:solid;}
        .scroll-wheel{width:4px;height:8px;border-radius:2px;animation:scrollWheel 1.5s ease-in-out infinite;}
        @keyframes scrollWheel{0%{transform:translateY(0);opacity:1}100%{transform:translateY(10px);opacity:0}}
        .nav-link{position:relative;padding-bottom:2px;}
        .nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#ADB2D4;transition:width .25s ease;}
        .nav-link:hover::after{width:100%;}
      `}</style>

      {/* Scroll progress */}
      <div className={`fixed top-0 left-0 w-full h-0.5 z-50 ${t('bg-gray-800','bg-slate-200')}`}>
        <div className="h-full transition-all duration-300" style={{ width: `${scrollProgress}%`, background: accent }} />
      </div>

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${navBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <span className='text-xl font-extrabold font-mono tracking-tight' style={{color: accent}}>&lt;VB/&gt;</span>

            <div className="hidden md:flex items-center space-x-7">
              {['About','Skills','Experience','Projects','Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className={`nav-link text-sm font-semibold transition-colors ${txtMuted} hover:text-[#ADB2D4]`}>{item}</a>
              ))}

<button onClick={() => setIsDark(d => !d)}
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 ${t('border-[#2a3347] bg-[#161b27]','border-[#ADB2D4] bg-[#EEF1DA]')}`}
                aria-label="Toggle theme"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                {isDark
                  ? <Sun size={16} style={{color:'#fbbf24'}} />
                  : <Moon size={16} style={{color: PL}} />
                }
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button onClick={() => setIsDark(d => !d)}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${t('border-[#2a3347] bg-[#161b27]','border-[#ADB2D4] bg-[#EEF1DA]')}`}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                {isDark ? <Sun size={15} className="text-yellow-400"/> : <Moon size={15} className="text-slate-600"/>}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={txtMuted}>
                {isMenuOpen ? <X size={20}/> : '☰'}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`md:hidden pb-4 space-y-2 rounded-lg mt-2 p-4 border ${menuCls}`}>
              {['About','Skills','Experience','Projects','Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-sm font-medium ${txtMuted} hover:text-[#ADB2D4]`}>{item}</a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className={`relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(${t('rgba(255,255,255,.15)','rgba(0,0,0,.07)')} 1px,transparent 1px),linear-gradient(90deg,${t('rgba(255,255,255,.15)','rgba(0,0,0,.07)')} 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left: text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className={`text-base mb-2 ${txtMuted}`}>Hi, I'm</p>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-3 leading-tight ${txt}`}>Vidhyadhari Bandaru</h1>
            <p className="text-xl font-medium mb-6 h-8" style={{color: accent}}>
              <span className={txt}>{typewriterText}</span><span className="animate-pulse" style={{color: accent}}>|</span>
            </p>
            <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0 ${t('text-gray-400','text-slate-900')}`}>
              I am a backend engineer drawn to problems that only reveal themselves under real load. The kind where the architecture either holds or it doesn't, and there is no middle ground. Three years in production across financial services and manufacturing, now at UB (MS CS, 4.0 GPA) and building at the intersection of distributed systems and AI tooling.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <a href="#projects"
                className={`flex items-center gap-2 border px-5 py-2.5 rounded-lg transition-all text-sm font-medium ${t('border-[#2a3347] text-[#ADB2D4] hover:border-[#ADB2D4] hover:text-white','border-[#ADB2D4] text-slate-700 hover:border-[#6B72A8] hover:text-slate-900')}`}>
                View Projects
              </a>
              <a href="#experience"
                className={`flex items-center gap-2 border px-5 py-2.5 rounded-lg transition-all text-sm font-medium ${t('border-[#2a3347] text-[#ADB2D4] hover:border-[#ADB2D4] hover:text-white','border-[#ADB2D4] text-slate-700 hover:border-[#6B72A8] hover:text-slate-900')}`}>
                Work Experience
              </a>
              <a href="/Vidhyadhari_Bandaru_Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all text-sm font-semibold shadow-lg" style={{background: accent, color: isDark?'#0d1117':'white'}}>
                Download Resume
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { href:"https://github.com/Vidhya060501", icon:<GithubSVG size={18} color={isDark ? "white" : "#1a1a1a"} /> },
                { href:"https://www.linkedin.com/in/vidhyadharibandaru", icon:<LinkedinSVG size={18} /> },
                { href:"mailto:vidhyadhari060501@gmail.com", icon:<GmailSVG size={18} /> },
                { href:"https://leetcode.com/u/Vidhyadhari_09/", icon:<LeetCodeSVG size={18} /> }
              ].map((s,i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${socialCls}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: avatar + floating tags */}
          <div className="order-1 md:order-2 flex justify-center relative py-14">
            {heroTags.map((tag, i) => (
              <div key={i} className={`${tag.cls} ${isDark ? tag.darkBg : tag.lightBg} border ${isDark ? tag.darkBorder : tag.lightBorder} text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 z-20 shadow-lg`}>
                {tag.icon
                  ? tag.icon
                  : <span className="text-sm">{tag.emoji}</span>
                }
                <span className={isDark ? tag.darkText : tag.lightText}>{tag.label}</span>
              </div>
            ))}

            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] p-1"
              style={{ borderColor: isDark?'#ADB2D4':'#ADB2D4', background: isDark?'#1e2535':'#e8eaf6' }}>
              <AvatarSVG />
            </div>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 scroll-down-indicator ${txtFaint}`}>
          <div className='scroll-mouse' style={{borderColor: isDark?'#2a3347':'#ADB2D4'}}>
            <div className='scroll-wheel' style={{background: isDark?'#2a3347':'#ADB2D4'}}/>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>


      {/* IMPACT STRIP */}
      <section className={`relative z-10 py-12 px-4 sm:px-6 lg:px-8`} style={{background: isDark?'#0d1117':'#f8f9fc'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { metric: "3,500ms → 25ms", label: "p95 latency on a Java/Spring Boot insurance portal", icon: "⚡" },
            { metric: "99.95%", label: "Platform uptime on AWS EKS, Kubernetes, and Terraform", icon: "🛡️" },
            { metric: "10K+", label: "Concurrent users on a Kafka-backed disaster-resilient ingestion layer", icon: "📈" },
            { metric: "2 hrs → 15 sec", label: "Cross-repository PR impact analysis with LangGraph and tree-sitter AST", icon: "🤖" },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-5 border flex flex-col gap-2 transition-all duration-300`}
              style={{
                background: isDark ? 'rgba(173,178,212,0.06)' : 'white',
                borderColor: isDark ? 'rgba(173,178,212,0.2)' : 'rgba(173,178,212,0.4)'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ADB2D4'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? 'rgba(173,178,212,0.2)' : 'rgba(173,178,212,0.4)'; e.currentTarget.style.transform = ''; }}>
              <span className="text-2xl">{item.icon}</span>
              <p className="text-xl font-bold" style={{color: accent}}>{item.metric}</p>
              <p className={`text-xs leading-relaxed ${t('text-gray-400', 'text-slate-600')}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={`relative z-10 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="flex flex-col md:grid md:grid-cols-2 min-h-[60vh]">
          <div className="w-full h-64 md:h-full">
            <AboutPanel isDark={isDark} />
          </div>
          <div className="flex flex-col justify-center px-8 lg:px-14 py-16 space-y-5">
            <h2 className="text-3xl font-bold" style={{color: isDark?"white":"#1e293b"}}>👨‍💻 About Me</h2>
            <div className={`space-y-4 text-sm leading-relaxed ${t('text-[#ADB2D4]','text-slate-700')}`}>
              <p>
                My engineering story didn't start in a classroom. It started with a <strong>dashboard I built during Covid</strong> to help businesses and local governments track recovery data and make faster decisions under pressure. That project showed me something I haven't forgotten since: software, when built with real care, changes real outcomes for real people. I've been chasing that feeling ever since.
              </p>
              <p>
                That curiosity led to deeper projects, more deliberate learning, and eventually to production-grade systems work at significant scale. I shipped backend infrastructure handling critical financial and operational data for large enterprises, cutting query latency from <strong>3.5s to 25ms</strong>, architecting <strong>Kafka event pipelines</strong> that held reliably under burst traffic, and validating <strong>5M+ supply chain and transaction records</strong> through PySpark pipelines before they ever reached production. The lesson that stayed with me is that scalability and reliability are not features you add later. They are decisions you make from the very first line of design.
              </p>
              <p>
                I am currently at <strong>University at Buffalo</strong> pursuing my MS in Computer Science with a <strong>4.0 GPA</strong>, specializing in AI and ML. What draws me most right now is where reliable infrastructure meets intelligent systems. My recent work includes a <strong>PR Blast Radius Analyzer</strong> built with LangGraph and OpenAI APIs that reduced cross-repository impact analysis from 2 hours to <strong>under 15 seconds</strong>. I am actively building at the intersection of <strong>agentic AI, developer tooling, and distributed systems</strong>, which is the space I believe will define the next generation of engineering productivity.
              </p>
              <p>
                Outside of engineering, I play pickleball and cook, and both have taught me that getting the fundamentals right before you start matters more than how hard you execute in the moment. In software, the architecture decision you make on day one becomes the constraint you work around for the next two years. I also contribute to open source, stay close to system design, and believe that clean, well-tested code is a form of respect for everyone who inherits it after you.
              </p>
            </div>
            <a href="mailto:vidhyadhari060501@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all text-sm font-medium w-fit" style={{background: accent, color: isDark?'#0d1117':'white'}}>
              <Mail size={15}/> Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>🎓 Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className={`group rounded-2xl transition-all duration-300 ${card}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <div className="p-7">
                <div className={`flex justify-between items-start mb-5 pb-4 border-b ${divider}`}>
                  <div className="flex-1">
                    <h3 className={`text-base font-bold mb-1 transition-colors duration-300 ${t("group-hover:text-white","group-hover:text-slate-900")} ${txt}`}>{edu.degree}</h3>
                    <p className="font-semibold text-sm mb-2 transition-all duration-300 group-hover:opacity-100 opacity-75 group-hover:tracking-wide" style={{color: accent}}>{edu.school}</p>
                    <p className={`text-xs font-medium ${t('text-gray-400','text-slate-900')}`}>📍 {edu.location}</p>
                    <p className={`text-xs font-medium ${t('text-gray-400','text-slate-900')}`}>📅 {edu.period}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end ml-3">
                    {edu.current && <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all duration-300 group-hover:scale-105 inline-block" style={{background: accent, color: isDark?'#0d1117':'white'}}>Current</span>}
                    <span className={`border px-2.5 py-0.5 rounded-full text-xs font-bold ${t('bg-[#D5E5D5]/20 border-[#D5E5D5]/40 text-[#a0c8a0]','bg-[#D5E5D5] border-[#C7D9DD] text-[#3a7a4a]')}`}>GPA: {edu.gpa}</span>
                  </div>
                </div>
                <p className={`text-xs font-bold uppercase tracking-wide mb-3 transition-all duration-300 ${t("text-gray-400 group-hover:text-[#ADB2D4]","text-slate-500 group-hover:text-[#6B72A8]")}`}>Coursework</p>
                {edu.courses.map((c,j) => <p key={j} className={`text-sm font-medium transition-colors duration-300 ${t("text-gray-400 group-hover:text-gray-200","text-slate-700 group-hover:text-slate-900")}`}>• {c}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>🛠️ Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={i} className={`group rounded-2xl transition-all duration-300 ${card}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg transition-all duration-300 group-hover:scale-110 ${isDark ? cat.darkBg : cat.lightBg}`}>{cat.icon}</div>
                  <h3 className={`text-sm font-bold transition-colors duration-300 ${t("group-hover:text-[#ADB2D4]","group-hover:text-[#6B72A8]")} ${txt}`}>{cat.title}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="flex flex-col items-center gap-1.5 group cursor-default">
                      <div className="w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain"/>
                      </div>
                      <span className={`text-xs font-semibold text-center leading-tight transition-colors duration-300 ${t("text-gray-400 group-hover:text-[#ADB2D4]","text-slate-500 group-hover:text-[#6B72A8]")}`}>{skill.name}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className={`text-xs uppercase tracking-widest mb-2 ${txtFaint}`}>Where I've worked</p>
            <h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>💼 Experience</h2>
          </div>

          <div className="relative pl-16">
            <div className="timeline-line"/>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">

                  <div className={`absolute -left-16 w-14 h-14 rounded-full border-2 flex items-center justify-center shadow-lg overflow-hidden ${t('border-[#2a3347]','border-[#C7D9DD]')}`}
                    style={{ background: exp.logoDotBg }}>
                    {exp.logoDotContent}
                  </div>

                  <div className={`exp-card group ${expCardCls}`}>

                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className={`text-base font-bold ${txt}`}>{exp.role}</h3>
                        </div>
                        <p className='text-sm font-semibold' style={{color: accent}}>{exp.company}</p>
                        {exp.team && <p className={`text-xs mt-0.5 ${txtFaint}`}>{exp.team}</p>}
                      </div>
                      <div className={`flex flex-col sm:items-end gap-1 text-xs shrink-0 ${txtFaint}`}>
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-medium ${t('border-gray-700 bg-gray-800/50 text-gray-400','border-slate-300 bg-slate-100 text-slate-900')}`}>
                          📅 {exp.period}
                        </span>
                        <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-medium ${t('border-gray-700 bg-gray-800/50 text-gray-400','border-slate-300 bg-slate-100 text-slate-900')}`}>
                          📍 {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className={`border-t mb-3 ${t('border-gray-800','border-slate-100')}`}/>

                    {exp.summary && (
                      <p className={`text-sm leading-relaxed mb-4 ${t('text-gray-300','text-slate-700')}`}>{exp.summary}</p>
                    )}

                    <button
                      onClick={() => setExpandedExp(prev => ({...prev, [i]: !prev[i]}))}
                      className="flex items-center gap-2 text-xs font-semibold mb-4 px-4 py-2 rounded-lg border transition-all duration-200"
                      style={{
                        color: accent,
                        borderColor: accent,
                        background: expandedExp[i] ? `${accent}18` : 'transparent'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = `${accent}25`}
                      onMouseLeave={e => e.currentTarget.style.background = expandedExp[i] ? `${accent}18` : 'transparent'}>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedExp[i] ? 'rotate-90' : ''}`}/>
                      {expandedExp[i] ? 'Hide Details' : 'Show All Details'}
                    </button>

                    {expandedExp[i] && (
                      <div className="space-y-2.5 mb-4">
                        {exp.achievements.map((a, j) => (
                          <div key={j} className={`flex items-start gap-2.5 text-sm leading-relaxed ${txtMuted}`}>
                            <ArrowRight className='w-3.5 h-3.5 flex-shrink-0 mt-1' style={{color: accent}}/>
                            <span className={`${t('text-gray-400','text-slate-700')}`}>
                              {a.startsWith('[') ? (
                                <><strong style={{color: accent}}>{a.slice(0, a.indexOf(']') + 1)}</strong>{a.slice(a.indexOf(']') + 1)}</>
                              ) : a}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.tags && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, j) => (
                          <span key={j}
                            className="text-xs px-3 py-1 rounded-full font-medium transition-all duration-300"
                            style={{
                              border: '1.5px solid #D5E5D5',
                              color: isDark ? '#ADB2D4' : '#6B72A8',
                              background: isDark ? 'rgba(213,229,213,0.15)' : 'rgba(213,229,213,0.3)'
                            }}
                            onMouseEnter={e=>{e.currentTarget.style.background='rgba(213,229,213,0.3)'; e.currentTarget.style.borderColor='#ADB2D4'; e.currentTarget.style.transform='scale(1.05)';}}
                            onMouseLeave={e=>{e.currentTarget.style.background=isDark?'rgba(213,229,213,0.15)':'rgba(213,229,213,0.3)'; e.currentTarget.style.borderColor='#D5E5D5'; e.currentTarget.style.transform='';}}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>🚀 Featured Projects</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['All','AI/ML','Full Stack','Backend'].map(cat => (
              <button key={cat} onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filterCategory === cat ? '' : filterInactive}`}
                style={filterCategory===cat?{background:accent,color:isDark?'#0d1117':'white'}:{}}>
                {cat}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {filteredProjects.map((p, i) => (
              <div key={i} className={`group flex flex-col sm:flex-row gap-6 rounded-xl p-5 transition-all duration-300 ${projCardCls}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="sm:w-48 flex-shrink-0">
                  <div className="w-full h-40 sm:h-full rounded-lg overflow-hidden">
                    <img src={p.illustration} alt={p.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"/>
                  </div>
                </a>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <h3 className={`text-base font-bold mb-2 leading-tight ${txt}`}>{p.title}</h3>
                    <p className={`text-sm leading-relaxed mb-4 ${t("text-gray-400","text-slate-700")}`}>{p.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {p.tech && p.tech.map((tag, j) => (
                        <span key={j} className="text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300"
                          style={{border:'1.5px solid #D5E5D5', color: isDark?'#ADB2D4':'#6B72A8', background: isDark?'rgba(213,229,213,0.15)':'rgba(213,229,213,0.3)'}}
                          onMouseEnter={e=>{e.currentTarget.style.background='rgba(213,229,213,0.3)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                          onMouseLeave={e=>{e.currentTarget.style.background=isDark?'rgba(213,229,213,0.15)':'rgba(213,229,213,0.3)'; e.currentTarget.style.borderColor='#D5E5D5';}}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors flex-shrink-0" style={{color: accent}}>
                      <GithubSVG size={13} color={accent}/> View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIT MORE */}
      <section className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#0d1117':'white'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold" style={{color: isDark ? "white" : "#8B92C4"}}>A bit more about me 👨‍💻</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreAboutMe.map((item, i) => (
              <div key={i} className={`group rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${moreCls}`}
                style={{boxShadow:'none', border:'2px solid', borderColor: isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=isDark?'0 12px 36px rgba(213,229,213,0.25)':'0 12px 36px rgba(213,229,213,0.5)'; e.currentTarget.style.borderColor='#ADB2D4';}}
                onMouseLeave={e=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor=isDark?'rgba(173,178,212,0.4)':'rgba(173,178,212,0.6)';}}>
                <div className="p-8 flex flex-col items-center w-full">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${t('bg-[#2a3347] group-hover:bg-[#ADB2D4]/20','bg-[#EEF1DA] group-hover:bg-[#ADB2D4]/20')}`}>
                  {item.icon}
                </div>
                <div className='w-8 h-0.5 mb-4 rounded-full transition-all duration-300' style={{background: isDark?'#2a3347':'#C7D9DD'}} onMouseEnter={e=>e.target.style.background=accent} onMouseLeave={e=>e.target.style.background=isDark?'#2a3347':'#C7D9DD'}/>
                <h3 className={`text-sm font-bold mb-3 uppercase tracking-widest transition-colors duration-300 ${t('text-[#ADB2D4]','text-slate-700')}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${t("text-gray-500","text-slate-800")}`} dangerouslySetInnerHTML={{ __html: item.description }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`relative z-10 py-16 px-4 sm:px-6 lg:px-8 scroll-animate`} style={{background: isDark?'#161b27':'white'}}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: isDark ? "white" : "#8B92C4"}}>📬 Let's Connect</h2>
          <p className={`text-sm mb-8 ${txtMuted}`}>Open to collaborations, new opportunities, or just saying hi.</p>
          <div className="flex justify-center gap-4 mb-8">
            {[
              { href:"mailto:vidhyadhari060501@gmail.com", icon:<GmailSVG size={20} /> },
              { href:"https://github.com/Vidhya060501", icon:<GithubSVG size={20} color={isDark ? "white" : "#1a1a1a"} /> },
              { href:"https://www.linkedin.com/in/vidhyadharibandaru", icon:<LinkedinSVG size={20} /> },
              { href:"https://leetcode.com/u/Vidhyadhari_09/", icon:<LeetCodeSVG size={20} /> }
            ].map((s,i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${socialCls}`}>
                {s.icon}
              </a>
            ))}
          </div>
          <p className={`text-xs ${txtFaint}`}>📍 Buffalo, NY &nbsp;•&nbsp; 📞 +1 (716) 495-9052</p>
        </div>
      </section>

      <footer className={`relative z-10 py-5 px-4 ${footerCls}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-xs ${txtFaint}`}>&copy; 2026 Vidhyadhari Bandaru</p>
        </div>
      </footer>

      {/* CHATBOT */}
      <div className="fixed bottom-8 right-8 z-50">
        {!showChat && (
          <div className="absolute -top-20 -right-2 pointer-events-none" style={{width:'160px'}}>
            <p style={{fontFamily:"'Caveat', cursive", fontSize:'18px', lineHeight:'1.3', color: isDark ? '#9ca3af' : '#64748b', fontWeight:'500'}}>Ask me something about me!</p>
            <svg style={{marginTop:'4px', marginLeft:'60px'}} width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M5 5 Q20 5 20 15 Q20 24 14 26" stroke={isDark?"#9ca3af":"#64748b"} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M10 23 L14 27 L18 23" stroke={isDark?"#9ca3af":"#64748b"} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}

        {showChat && (
          <div className={`w-80 rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col ${t('bg-[#1a1a2e]','bg-gray-900')}`} style={{height:'480px'}}>
            <div className="flex items-center justify-between px-4 py-3" style={{background: accent}}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{background:`${accent}cc`, color: isDark?'#0d1117':'white'}}>🤖</div>
                <div>
                  <p className="text-white text-sm font-bold">Portfolio Assistant</p>
                  <p className="text-xs flex items-center gap-1" style={{color: isDark?'#c8cbee':'white'}}><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"/>Ready to help</p>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-blue-200 hover:text-white transition-colors"><X size={18}/></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role==='user' ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                  {msg.role==='bot' && <div className="w-7 h-7 rounded-lg bg-gray-700 flex items-center justify-center text-xs flex-shrink-0">🤖</div>}
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                    msg.role==='user'
                      ? 'rounded-br-sm'
                      : t('bg-gray-700 text-gray-100','bg-gray-800 text-gray-100') + ' rounded-bl-sm'
                  }`} style={msg.role==='user'?{background:accent,color:isDark?'#0d1117':'white'}:{}}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gray-700 flex items-center justify-center text-xs">🤖</div>
                  <div className="bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}}/>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}}/>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}}/>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {['Skills','Projects','Experience','Contact'].map(chip => (
                <button key={chip} onClick={() => sendMessage(chip)}
                  className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-300 transition-all"
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=accent;e.currentTarget.style.color=accent;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='';e.currentTarget.style.color='';}}>
                  {chip}
                </button>
              ))}
            </div>

            <div className="px-4 pb-4 flex gap-2">
              <input
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key==='Enter' && sendMessage()}
                placeholder="Type your question..."
                className="flex-1 bg-gray-800 text-white text-xs rounded-full px-4 py-2.5 outline-none border border-gray-700 placeholder-gray-500"
              />
              <button onClick={() => sendMessage()}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0" style={{background: accent, color: isDark?'#0d1117':'white'}}>
                <ArrowRight size={16}/>
              </button>
            </div>

            <div className="text-center pb-2">
              <p className="text-gray-600 text-[9px] uppercase tracking-widest">Powered by Claude AI</p>
            </div>
          </div>
        )}

        <button onClick={() => setShowChat(c => !c)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 text-2xl" style={{background: accent, color: isDark?'#0d1117':'white', boxShadow:`0 8px 24px ${accent}66`}}>
          {showChat ? <X size={22}/> : '🤖'}
        </button>
      </div>

    </div>
  );
}
