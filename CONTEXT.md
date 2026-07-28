# Vidhyadhari Bandaru — Full Context File

## Personal Info
- **Name:** Vidhyadhari Bandaru
- **Email:** vidhyadhari060501@gmail.com
- **Phone:** +1 (716) 495-9052
- **Location:** Buffalo, NY
- **LinkedIn:** linkedin.com/in/vidhyadharibandaru
- **GitHub:** github.com/Vidhya060501

---

## Education

### University at Buffalo, SUNY
- MS in Computer Science, AI and ML Specialization
- GPA: 4.0 / 4.0
- Expected: Dec 2026
- Relevant Coursework: Advanced Machine Learning, Natural Language Processing, Distributed Systems, Database Systems, Operating Systems, Computer Networks

### NIT Rourkela, India
- B.Tech in Engineering
- GPA: 3.8 / 4.0
- Graduated: Jun 2022
- Relevant Coursework: Data Structures, Artificial Intelligence, Database Systems, C Programming

---

## Work Experience

### Software Engineer — Capgemini Technology Services (Client: AXA Insurance)
**Jan 2024 – Aug 2025 | India**
- Stack: Java, Spring Boot, Hibernate/JPA, PostgreSQL, Kafka, Redis, Jenkins, AWS EKS, Kubernetes, Terraform
- Context: Owned the backend service between a distributed microservice fleet and millions of policyholder records. System had latency and reliability problems in production. Responsible for diagnosing, redesigning, and getting it to hold reliably under load. Worked directly with architects and product stakeholders to align technical decisions with business reliability requirements. This role changed how I think about system design — stopped treating reliability as something you add later and started building for it from the first design decision.
- Key bullets:
  - Latency reduced from 3s to 20ms via Java Flight Recorder profiling, Hibernate/JPA refactoring, composite PostgreSQL indexes
  - Multi-threaded Kafka consumers with retry topics, consumer-level backoff, failure-isolation for burst traffic
  - Redis-backed distributed rate limiting with Token Bucket pattern and Bucket4j
  - 99.95% service availability via containerized deployments on AWS EKS, Kubernetes, Terraform
  - Test coverage increased from 31% to 74%, caught 20+ pre-release defects
  - CI/CD pipelines (Jenkins) cut manual deployment effort by 40%
- Financial services context: regulated environment, every decision carried compliance and audit weight
- DO NOT mention Capgemini by name in the portfolio About Me section

### Associate Software Engineer — Capgemini Technology Services (Client: Mars Inc.)
**Sep 2022 – Dec 2023 | India**
- Stack: Python, FastAPI, PySpark, Redis, AWS S3/SQS/SNS/CloudWatch, PostgreSQL, SQLAlchemy, Databricks
- Context: Built data infrastructure for supply chain operations and trade transaction processing (inventory movement, vendor dues, settlements) across global business units. Not purely financial like AXA — supply chain + trade transactions. Fed procurement and supply chain teams making time-sensitive decisions. Worked with operations and business stakeholders globally. That role built intuition for catching what breaks at volume before it reaches production.
- Key bullets:
  - Ingestion services across 180 countries, sub-60 second end-to-end SLA, zero duplicate processing via Redis idempotency
  - REST APIs maintaining sub-200ms p99 response times and 99.9% uptime SLA, adopted org-wide by business, analytics, finance teams
  - Full SDLC: requirements refinement, design, development, unit/integration/regression testing, UAT, deployment, production support
  - Resolved N+1 query patterns via SQLAlchemy eager loading, 25% response time reduction
  - Validated 5M+ historical supply chain and transaction records via Databricks PySpark pipelines
  - 30% reduction in incident investigation time via structured JSON logging and AWS CloudWatch monitoring

---

## Projects

### PR Blast Radius Analyzer
**Jun 2026 | Python, FastAPI, tree-sitter, DynamoDB, LangGraph, OpenAI APIs, Azure**
- Cut cross-repository PR impact analysis from 2+ hours to 15 seconds
- Built agentic tool with tree-sitter AST parsing, symbol indexing, dependency traversal, LangGraph, OpenAI APIs
- Deployed on Azure Container Apps with containerized builds and secure secret management
- Responsible AI pipeline: prompt injection detection, AST-grounded output validation to prevent hallucinated impact claims, structured audit logging of model inputs/outputs/reasoning chains for compliance and explainability

### FLOE — Client-Sponsored Field Data Platform
**Spring 2026 | React, TypeScript, Node.js, Express, PostgreSQL, Prisma, AWS S3, OAuth2, RBAC**
- Led 4-person team delivering full-stack field data platform for a real client
- Cut field report access time from 2 hours to 5 minutes by consolidating fragmented Drive-based workflows into a unified platform
- Built 25+ REST API contracts across account, media, notes, reporting, and alert workflows
- Sensor-driven: queried snow-level and deicing-liquid readings from AWS S3, mapped to customer accounts
- Two-layer RBAC with OAuth2, API middleware, route-level permission checks (Admin, Contributor, Viewer)
- Now live in customer acceptance testing with real tenant accounts

### Commerce Transaction Microservices Platform
**May 2026 | Java, Spring Boot, Kafka, PostgreSQL, Redis, Docker, Kubernetes**
- 4-service backend: Order, Payment, Restaurant, Customer domains
- Saga pattern, Transactional Outbox pattern, Kafka event workflows, idempotent consumers
- Preserved consistency across 10K stress-test transactions

### Event-Driven Ride-Sharing Backend
**May 2026 | Python, FastAPI, Kafka, PostgreSQL, Redis, Docker**
- Ride assignment and state workflows with independently testable service separation
- Idempotency keys, partition-aware Kafka consumers, at-least-once delivery handling
- NOTE: This project is NOT in the Microsoft CEAI resume (replaced by FLOE). Still in Goldman resume.

### Socratic-OT: AI Anatomy Tutor
**Spring 2025 | Python, LangGraph, ChromaDB, Llama 3.1 8B, Groq, RAGAS, Gradio**
- Built with Richie Ilavarapu (team of 2) as MSOT coursework
- Socratic AI tutor for OT students: never gives direct answers, guides through questions
- RAG on OpenStax A&P 2e: 28 chapters, 997 chunks, sentence-transformers/all-MiniLM-L6-v2, ChromaDB
- Multimodal: upload anatomy diagrams, tutor asks Socratic questions before naming any structure (LLaVA-NeXT / GPT-4o fallback)
- LangGraph state machine: RAPPORT → HINT → CLUE → REVEAL → ASSESS → TRANSITION → QUIZ → DONE
- Session memory tracks weak topics and revisits them
- RAGAS evaluation: Faithfulness ≥0.90, Relevance ≥0.85
- GitHub: https://github.com/Vidhya060501/Socratic-OT
- Portfolio: AI/ML category
- NOT in any resume yet (portfolio only)

### Covid Dashboard (Origin Story)
- Built during Covid to help businesses and local governments track recovery data
- First project that showed software changes real outcomes for real people
- Referenced in About Me as the origin of engineering philosophy
- No specific technology named (Power BI removed intentionally)

---

## Awards & Recognition
- **Capgemini Best Employee of the Quarter — Mar 2025**
- Recognized for customer satisfaction, delivery ownership, cross-team communication, production backend reliability

---

## Technical Skills
- **Languages:** Java, Python, TypeScript, JavaScript, SQL, C
- **AI & ML:** LangGraph, OpenAI APIs, LLMs, Agentic AI, RAG, AST Parsing, Embeddings
- **Backend & APIs:** Spring Boot, FastAPI, Node.js, REST APIs, GraphQL, Microservices, Hibernate/JPA, OAuth2, RBAC, API Design
- **Cloud & DevOps:** Azure (Container Apps), AWS (EKS, S3, SQS, SNS, CloudWatch), Docker, Kubernetes, Terraform, Jenkins, Git, CI/CD, Linux/Unix
- **Data & Messaging:** Kafka, Redis, PostgreSQL, MySQL, DynamoDB, Prisma, SQLAlchemy, Query Optimization, Index Design
- **Testing & SDLC:** Unit Testing, Integration Testing, Regression Testing, UAT, Production Support, Agile, Code Reviews

---

## Portfolio

### Location
`/Users/vidhyadharibandaru/Documents/my-portfolio-mainMaansi/`
Main file: `src/App.js` (~900+ lines)

### Stack
- React (single file, App.js), Tailwind CSS, dark/light theme toggle
- Based on Mansi Singh's portfolio design — only personal content changed, NEVER touch visual/design/CSS

### About Illustration
- File: `/public/about-vidhyadhari.png`
- Uses `mix-blend-mode: screen` in dark mode, `multiply` in light mode
- Container background: `#161b27` in dark mode to match section background
- Speech bubbles content: Production Systems, Scalability, Reliability, Optimization, AI Tooling

### Typewriter Titles (Hero)
```js
["Backend Platform Engineer", "Building Systems Engineers Rely On", "Distributed Systems · Cloud Native · AI Tooling", "Reliability by Design. Owned in Production."]
```

### Hero Bio (current)
"I am a backend engineer drawn to problems that only reveal themselves under real load. The kind where the architecture either holds or it doesn't, and there is no middle ground. Three years in production across financial services and manufacturing, now at UB (MS CS, 4.0 GPA) and building at the intersection of distributed systems and AI tooling."

### About Me (4 paragraphs — current)
1. Origin story: Covid dashboard showed software changes real outcomes for real people
2. Led to deeper projects and production-grade work at large enterprises — 3s to 20ms latency, Kafka event pipelines, 5M+ financial records validation
3. Currently at UB (4.0 GPA, AI/ML specialization). PR Blast Radius Analyzer: 2 hours to 15 seconds. Building at intersection of agentic AI, developer tooling, distributed systems
4. Outside engineering: pickleball and cooking — both teach that fundamentals before execution matters. "The architecture decision you make on day one becomes the constraint you work around for the next two years."

### Experience Section (in portfolio — has context paragraphs + bullets)

**AXA Insurance context paragraph:**
"At AXA Insurance, I owned the backend service sitting between a distributed microservice mesh and millions of policyholder records. The system had latency and reliability problems in production. I was responsible for diagnosing, redesigning, and getting it to hold reliably under load, working directly with architects and product stakeholders to align technical decisions with business reliability requirements. This role changed how I think about system design. I stopped treating reliability as something you add later and started building for it from the first design decision."

**Mars Inc. context paragraph:**
"At Mars Inc., I built data infrastructure supporting supply chain operations and trade transaction processing across global business units. The data covered inventory movement, vendor dues, and settlements feeding procurement and supply chain teams making time-sensitive decisions. I worked closely with operations and business stakeholders to ensure the pipelines we shipped matched what teams on the ground actually depended on. That role built my intuition for catching what breaks at volume before it reaches production."

### Projects in Portfolio (current — 3 projects)
1. PR Blast Radius Analyzer
2. Commerce Transaction Microservices Platform
3. Event-Driven Ride-Sharing Backend
- FLOE not yet added to portfolio (pending)

---

## Portfolio Writing Rules (STRICT)
- NO double dashes / em dashes anywhere
- NO "actually" in awkward positions
- NO resume bullet rewrites in experience section — use narrative context paragraphs
- NO mentioning Capgemini in the About Me section
- DO NOT touch visual/design/CSS code — content only
- Remove weak numbers: 50K records removed, "8 microservices" removed, "3 major releases" removed
- Keep strong numbers: 3s to 20ms, 31% to 74%, 40%, 25%, 5M+, 30%, 99.95%, 180 countries, sub-60s SLA, sub-200ms p99, 99.9% SLA

---

## Portfolio Sections — Status

| Section | Status |
|---|---|
| Hero | Done |
| About Me | Done |
| Experience | Done |
| Projects | Partial (FLOE missing, more AI projects planned) |
| Skills | Not started |
| Journey/Story Strip | Not started |
| Open Source | Not started |
| Education | Exists (not customized) |

---

## Pending Portfolio Work
1. Add FLOE project to portfolio projects section
2. Add 3 AI projects when built: MCP/Agentic AI, NLP (semantic code search), Model tuning
3. Add full-stack project (FLOE already covers this)
4. Journey/Story strip — visual timeline between About and Education: Covid dashboard → web apps → distributed systems at scale → AI tooling
5. Open source contributions section

---

## Projects To Build (Priority Order)
1. **Distributed rate limiter as a service** — Go, Token Bucket from scratch, gRPC + REST, Redis atomic Lua scripts, MongoDB for configs/audit logs, Kubernetes deployment, k6 load test
   - Core story: correctness, not just performance. Atomic Redis Lua scripts = zero over-limit leakage without distributed locks. This is defensible because Redis is single-threaded.
   - DO NOT claim specific latency/throughput numbers until k6 is actually run. Fill in real measured numbers after the build.
   - Closes gaps: Go language, gRPC, MongoDB (NoSQL), open-source publishable as library
2. **React UI for PR Blast Radius Analyzer** — dependency graph dashboard, highest ROI for SDE signal (2-3 days)
3. **Model fine-tuning project** — Mistral 7B or Llama 3.1 8B, domain-specific, BLEU/ROUGE eval, deployed (keeps ML door open)

---

## Target Roles & Companies
- **Primary:** SDE and Backend Platform Engineer at top tech companies
- **Secondary:** ML Engineer
- **Target companies:** Google, Meta, Amazon, Microsoft, Goldman Sachs and similar
- **Current applications:**
  - Goldman Sachs — Associate Software Engineer (New York, NY) — resume + cover letter done
  - Microsoft CEAI — Software Engineer IC2 — resume done

---

## Resumes & Cover Letters Created
| File | Role |
|---|---|
| `goldman_sachs_resume.tex` | Goldman Sachs Associate SWE |
| `microsoft_ceai_resume.tex` | Microsoft CEAI SWE IC2 |
| `goldman_sachs_cover_letter.tex` | Goldman Sachs cover letter (LaTeX) |

---

## Portfolio Narrative Strategy
- **Hero** = engineering philosophy and identity (NOT a summary of About Me)
- **About Me** = origin story + journey + current chapter + personal
- These two sections must NOT repeat each other
- The hero bio hooks on: "problems that only reveal themselves under real load"
- The about me hooks on: Covid dashboard origin → production systems → AI tooling

## Personal Philosophy (for writing tone)
- Pickleball and cooking connect to engineering: fundamentals before execution
- "The architecture decision you make on day one becomes the constraint you work around for the next two years"
- Reliability is not a feature — it is a design decision made from the very first line
- Software, when built with real care, changes real outcomes for real people
