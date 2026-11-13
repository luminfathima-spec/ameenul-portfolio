# Ameenul Lumin Fathima M. — Developer Portfolio

A modern, high-performance, responsive personal developer portfolio website designed for **Ameenul Lumin Fathima M.**, an MCA Student and Software Developer passionate about Java, full-stack engineering, cybersecurity, and emerging AI technologies.

Built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**, following modern UI/UX design standards in an elegant **Light Lavender + White** palette.

---

## 🌟 Key Features

- **🎨 Tailored Visual Identity**: Built strictly according to the Light Lavender and White design theme (`#FFFFFF`, `#F7F4FF`, `#EDE5FF`, `#7952C7`, `#56358E`, `#202033`, `#68677A`).
- **📱 Fully Responsive**: Pixel-perfect layout across desktop (1440px), laptop (1024px), tablet (768px), and mobile devices (360px & 390px).
- **🧭 Sticky Navigation**: Header with smooth-scroll section links, active section spy, mobile drawer menu, and immediate resume access.
- **🚀 Dynamic Project Showcase**:
  - Displays featured highlights prominently with an option to explore all technical projects.
  - Interactive **Project Details Modal** with problem statements, architectural solutions, and tech breakdowns.
  - Safe link handling (only displays GitHub or Demo buttons when real URLs exist).
- **🎓 Education Timeline**: Elegant vertical timeline with milestone markers for MCA (Presidency University) and BCA (VSKU).
- **⚡ Categorized Technical Skills**: 6 structured categories (Programming, Frontend, Backend, Databases, AI/Security, Tools) with recognizable brand icons and zero misleading percentage meters.
- **📜 Certifications & Image Preview**: Certificate cards with high-resolution preview modal, keyboard ESC support, and graceful SVG fallback placeholders.
- **📬 One-Click Connect**: Contact cards for GitHub, LinkedIn, Email (with instant clipboard copy & notification toast), and PDF resume download.
- **📂 Centralized Configuration**: All editable portfolio content is maintained centrally in `src/data/portfolio.js`.
- **☁️ Zero-Backend Architecture**: Production-ready static website configured for instant, free deployment on Vercel Hobby Plan.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React.js (v18) + Vite (v5) |
| **Styling & Theme** | Tailwind CSS (v3) + PostCSS + Autoprefixer |
| **Typography** | Plus Jakarta Sans & Inter (Google Fonts) |
| **Animations & Transitions** | Framer Motion & Tailwind Transitions |
| **Iconography** | Lucide React & React Icons (`react-icons/si`, `react-icons/fa6`, `react-icons/vsc`) |
| **Deployment** | GitHub + Vercel (Static Hosting, Free Hobby Tier) |

---

## 📁 Project Folder Structure

```text
ameenul-portfolio/
├── public/
│   ├── certificates/                     # Certificate image assets
│   │   ├── cert-placeholder-blockchain.svg
│   │   ├── cert-placeholder-gemini.svg
│   │   └── cert-placeholder-java.svg
│   ├── images/                           # Profile photographs & avatars
│   │   └── profile-placeholder.svg
│   └── resume/                           # Official CV/Resume document
│       └── resume.pdf
├── src/
│   ├── components/                       # Reusable modular UI components
│   │   ├── About.jsx                     # Background narrative & core interests
│   │   ├── BackToTop.jsx                 # Floating scroll-to-top button
│   │   ├── CertificateModal.jsx          # Accessible certificate preview dialog
│   │   ├── Certifications.jsx            # Certifications grid & viewer
│   │   ├── Contact.jsx                   # Contact cards & copy email utility
│   │   ├── Education.jsx                 # Vertical academic qualifications timeline
│   │   ├── Footer.jsx                    # Minimal footer with dynamic year
│   │   ├── Hero.jsx                      # Hero banner with avatar frame & CTAs
│   │   ├── Navbar.jsx                    # Sticky navigation with mobile menu
│   │   ├── ProjectModal.jsx              # Detailed project modal dialog
│   │   ├── Projects.jsx                  # Featured project showcase & tabs
│   │   └── Skills.jsx                    # 6-category technical competencies
│   ├── data/
│   │   └── portfolio.js                  # Central configuration for ALL content
│   ├── App.jsx                           # Main layout composition
│   ├── index.css                         # Tailwind directives & custom scrollbars
│   └── main.jsx                          # React application entrypoint
├── .gitignore                            # Excludes node_modules, dist, etc.
├── index.html                            # Semantic HTML document with SEO tags
├── package.json                          # Project scripts & dependencies
├── postcss.config.js                     # PostCSS configuration
├── tailwind.config.js                    # Custom color tokens & fonts
├── vercel.json                           # Static hosting & SPA configuration
├── vite.config.js                        # Vite bundler configuration
└── README.md                             # Documentation & user guide
```

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your computer. You can check by opening your terminal / PowerShell and typing:
```bash
node -v
npm -v
```

### 2. Installation
Open the project directory in PowerShell or VS Code terminal:
```bash
cd ameenul-portfolio
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

### 4. Create Production Build
```bash
npm run build
```
This command compiles and minifies the code into the `dist/` directory, confirming that there are zero build or syntax errors.

---

## 🎨 How to Customize Your Portfolio

All website text, links, projects, and skills are managed in **one single file**: `src/data/portfolio.js`. You do not need to hunt through component code to make updates.

### 1. Upload Your Profile Photograph
1. Save your photograph file in JPEG or PNG format.
2. Rename it to `profile.jpg`.
3. Place it inside the folder:
   ```text
   public/images/profile.jpg
   ```
4. The website will automatically detect your photo and render it in the hero frame. Until you upload your photo, an elegant developer avatar placeholder is displayed automatically with no broken images.

### 2. Replace Your Resume (PDF)
1. Export your latest resume as a PDF file.
2. Rename it to `resume.pdf`.
3. Replace the existing file at:
   ```text
   public/resume/resume.pdf
   ```
4. All resume buttons across the navbar, hero section, and contact section will automatically serve your new PDF.

### 3. Add Your Official Certificates
When you receive your official certificates, place their images in `public/certificates/`:
- **Java Programming Fundamentals**: save as `public/certificates/java-certificate.png`
- **Inspect Rich Documents with Gemini**: save as `public/certificates/gemini-certificate.png`
- **The Blockchain Trilemma**: save as `public/certificates/blockchain-certificate.png`

If any certificate image is not yet uploaded, the website automatically displays an SVG certificate placeholder.

### 4. Add or Edit Projects
Open `src/data/portfolio.js` and locate the `projectList` array. You can edit existing projects or add a new one:
```javascript
{
  id: "my-new-project",
  title: "Project Title",
  category: "Full-Stack Web Development",
  status: "Completed", // "In Progress" | "Academic Project" | "Completed"
  description: "One-sentence summary of what this project does.",
  technologies: ["React.js", "Node.js", "MongoDB"],
  keyFeatures: [
    "Feature one description",
    "Feature two description"
  ],
  repository: "https://github.com/luminfathima-spec/your-repo", // or null if private
  liveDemo: null, // or "https://your-demo-url.com"
  featured: true, // true to show in the 3 featured highlights
  overview: "Detailed overview of the project.",
  problemStatement: "The real-world issue this project solves.",
  solution: "How your code engineered the solution."
}
```

### 5. Update Technical Skills
Open `src/data/portfolio.js` and locate `skillCategories`. You can easily add new skills or modify categories under any of the 6 sections.

### 6. Update Contact Links & Email
In `src/data/portfolio.js`, update the `contact` object:
```javascript
contact: {
  email: "luminfathima@gmail.com",
  github: "https://github.com/luminfathima-spec",
  linkedin: "https://linkedin.com/in/lumin-fathima",
}
```

---

## 🚀 Publishing to GitHub & Deploying to Vercel

### Step 1: Push Code to GitHub
1. Open PowerShell in your project folder (`c:\Users\lumin\Desktop\ameenul-portfolio`).
2. If not already initialized, run:
   ```bash
   git add .
   git commit -m "Initial professional portfolio"
   git branch -M main
   ```
3. Create a **New Repository** on [GitHub.com](https://github.com/new):
   - Repository Name: `ameenul-portfolio` (or your preferred name)
   - Visibility: **Public**
   - Leave "Initialize with README" **unchecked** (since you already have one).
4. Copy your repository URL from GitHub and link it:
   ```bash
   git remote add origin https://github.com/luminfathima-spec/ameenul-portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy Free on Vercel
1. Go to [vercel.com](https://vercel.com) and click **Sign In** (or Sign Up) using your **GitHub account**.
2. From the Vercel Dashboard, click **Add New...** → **Project**.
3. Locate `ameenul-portfolio` from your GitHub repository list and click **Import**.
4. Configure Project settings (Vercel auto-detects Vite):
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. Within 30 seconds, your site will be live with a free SSL certificate (e.g., `https://ameenul-portfolio.vercel.app`).

### Automatic Future Updates
Whenever you push changes or update your portfolio in the future:
```bash
git add .
git commit -m "Update projects and certificates"
git push
```
Vercel will automatically detect the push and redeploy your live website within seconds!

---

## 📋 Missing Assets Checklist

Before sharing your portfolio with recruiters, replace these placeholder files with your official assets:

- [ ] **Profile Photograph**: Place your real portrait at `public/images/profile.jpg`
- [ ] **Official Resume**: Place your updated PDF at `public/resume/resume.pdf`
- [ ] **Java Certificate**: Place the official image at `public/certificates/java-certificate.png`
- [ ] **Gemini RAG Certificate / Badge**: Place at `public/certificates/gemini-certificate.png`
- [ ] **Blockchain Certificate**: Place at `public/certificates/blockchain-certificate.png`

---

## 📄 License & Attribution

Designed and engineered for **Ameenul Lumin Fathima M.**  
All personal projects, concepts, and trademarks belong to their respective creators.

