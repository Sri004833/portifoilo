// Skills data
const skillsData = {
    Frontend: [
         { name: "React", level: 50 },
         { name: "Java Script", level: 70 },
         // { name: "TypeScript", level: 92 },    
         { name: "Tailwind CSS", level: 25 },
         { name: "CSS3", level: 95 },
         { name: "HTML5", level: 97 },
        ],
    "Tools & Systems": [
        { name: "Git & GitHub", level: 90 },
        { name: "VS code", level: 88 },
        { name: "Jupyter NoteBook", level: 70 },
        { name: "AI Tools", level: 92 },
    ],
    Specializations: [
        { name: "Machine Learning", level: 91 },
        { name: "Performance", level: 89 },
        { name: "Accessibility", level: 90 },
        { name: "Deep Learning", level: 94 },
        { name: "Artificial Intelligent", level: 75},
        { name: "Data Structure and Algorithms", level: 50}
    ],
    Database: [
        { name : "MYSQL", level:80 },
        { name : "mongoDB", level: 75}
    ],
    Backend: [
        { name: "PHP", level: 96 },
        { name: "Python", level: 96 },
        { name: "C Language", level: 50 },
    ],
    Backend: [
        { name: "Teamwork & Leadership", level: 96 },
        { name: "Problem Solving", level: 79 },
        { name: "Communication Skills", level: 60 },
        { name: "Time & Project Management", level: 95}
    ],
}
// Projects data
const projectsData = [
    {   category: " Web page", 
        title: "Sales Monitoring Dashbroad",
        description: "A Sales Monitoring Dashboard is a real-time visual tool that tracks, analyzes, and displays sales performance metrics to support informed business decisions.",
        image: "1p.jpg",
    },
    { category: " AI & Deep Learning",
        title: "Vision-Based-Gait-Recognition-in-Forensics-project",
        description: "An AI-powered system that identifies individuals based on walking patterns using computer vision and deep learning techniques.",
        image: "2p.jpg",
    },
    {   category: "Web site",
        title: "Excel Analytics Platform (MERN Stack) ",
        description: "A web-based platform that allows users to upload Excel files and perform data analysis with dynamic visualizations and filtering features.",
        image: "3p.jpg",
    },
    {   category: "Mobile Application ",
        title: "Food Restarant",
        description: "A Food Restaurant Mobile Application enables users to browse menus, place orders, make payments, and track deliveries conveniently from their smartphones.",
        image: "4p.png",
    },
    {   category: "Web site",
        title: "Login Page ",
        description: "A Login Page is a secure interface that allows users to authenticate themselves by entering valid credentials to access an application or system.",
        image: "5p.png",
    },]
// Articles data
const articlesData = [
    {   date: "Oct 10, 2023",
        title: "Deeo Learning Based Lung Cancer Detection, classification and Itz Localization",
        excerpt: "It is a system that uses neural networks to automatically identify lung cancer from medical images, classify tumor types, and pinpoint their exact location for accurate diagnosis.",
    },
]
// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    renderSkills("Frontend")
    renderProjects()
    renderArticles()
    setupNavigation()
    setupMouseTracking()
    setupFormHandler()
})
// Render skills based on category
function renderSkills(category) {
    const skillsGrid = document.getElementById("skillsGrid")
    const skills = skillsData[category] || []
    skillsGrid.innerHTML = skills
    .map(
        (skill, index) => `
        <div class="skill-card" style="animation-delay: ${index * 0.1}s">
            <div class="skill-card-bg"></div>
            <div class="skill-card-top"></div>
            <div class="skill-card-content">
                <div class="skill-card-header">
                    <div>
                        <div class="skill-card-title">${skill.name}</div>
                        <div class="skill-card-level">${skill.level}% Proficiency</div>
                    </div>
                    <div class="skill-card-icon">★</div>
                </div>
                <div class="skill-card-footer">
                    <div class="skill-label">
                        <span>Expertise</span>
                        <span style="color: #c4b5fd;">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-bar-fill" style="--level: ${skill.level}%"></div>
                    </div>
                </div>
            </div>
        </div> 
        `,
    )
    .join("")
// Add hover event listeners  
    document.querySelectorAll(".skill-card").forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.classList.add("hovered")
        })
        card.addEventListener("mouseleave", function () {
            this.classList.remove("hovered")
        })
    })
}
// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid")
    projectsGrid.innerHTML = projectsData
    .map(
        (project) => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="https://github.com/Sri004833" class="project-link">
                    Demo <span>→</span>
                </a>
            </div>
        </div>
        `,
    )
    .join("")
}
// Render articles
function renderArticles() {
    const articlesGrid = document.getElementById("articlesGrid")
    articlesGrid.innerHTML = articlesData
    .map(
        (article) => `
    <div class="article-card">
        <p class="article-date">${article.date}</p>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <a href="#" class="article-link">
            Read Article <span>→</span>
        </a>
    </div>
    `,
)
.join("")
}
// Setup category tabs
function setupNavigation() {
    const categoryTabs = document.querySelectorAll(".tab-btn")
    categoryTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            categoryTabs.forEach((t) => t.classList.remove("active"))
            tab.classList.add("active")
            renderSkills(tab.dataset.category)
        })
    })
  // Navbar scroll detection  
    const navbar = document.getElementById("navbar")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled")
        } else {
            navbar.classList.remove("scrolled")
        }
    })
// Navigation active section  
    const navItems = document.querySelectorAll(".nav-item")
    window.addEventListener("scroll", () => {
        let current = ""
        const sections = document.querySelectorAll("section")
        sections.forEach((section) => {
            const sectionTop = section.offsetTop
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id")
            }
        })
        navItems.forEach((item) => {
            item.classList.remove("active")
            if (item.dataset.section === current) {
                item.classList.add("active")
            }
        })
    })
}
// Mouse tracking for hero glow effect
function setupMouseTracking() {
    const glowEffect = document.getElementById("glowEffect")
    const heroSection = document.querySelector(".hero-section")
    document.addEventListener("mousemove", (e) => {
        const rect = heroSection.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        if (y > 0 && y < rect.height && x > 0 && x < rect.width) {
            glowEffect.style.left = x + "px"
            glowEffect.style.top = y + "px"
        }
    })
}
// Form handler
function setupFormHandler() {
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const name = document.getElementById("name").value
            const email = document.getElementById("email").value
            const message = document.getElementById("message").value
            console.log("Form submitted:", { name, email, message })
            alert("Thank you for reaching out! I will get back to you soon.")
            contactForm.reset()
        })
    }}
// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,  
    rootMargin: "0px 0px -50px 0px",
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.8s ease-out forwards"
            observer.unobserve(entry.target)
        }
    })
}, observerOptions)
document.querySelectorAll(".project-card, .article-card").forEach((el) => {
    observer.observe(el)
}
)