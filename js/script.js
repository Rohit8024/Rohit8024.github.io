/* ===================================
   SCRIPT.JS - LOGIC & RENDERING
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Content from Data File
    renderContent();

    // 2. Initialize Theme
    initTheme();
    
    // 3. Initialize Sliders
    initSliders();

    // 4. Set Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 5. Initialize Know More buttons
    initKnowMoreButtons();
});

/* ===================================
   RENDER FUNCTION (Builds HTML)
   =================================== */
function renderContent() {
    // 1. ABOUT (with Know More button)
    const aboutHTML = portfolioData.about.map((item, index) => `
        <div class="slider-item">
            <div class="premium-card">
                <div class="card-icon"><i class="${item.icon}"></i></div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="card-extra-content" id="about-extra-${index}">
                    <p>${item.extraContent || 'Additional details about this topic will be added soon.'}</p>
                </div>
                <button class="know-more-btn" onclick="toggleKnowMore('about-extra-${index}', this)">
                    Know More <i class="fas fa-chevron-down"></i>
                </button>
            </div>
        </div>
    `).join('');
    document.getElementById('track-about').innerHTML = aboutHTML;

    // 2. SKILLS
    const skillsHTML = portfolioData.skills.map(item => `
        <div class="slider-item">
            <div class="premium-card">
                <div class="card-icon"><i class="${item.icon}"></i></div>
                <h3>${item.title}</h3>
                <div class="skill-tags">
                    ${item.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('track-skills').innerHTML = skillsHTML;

    // 3. PROJECTS
    const projectsHTML = portfolioData.projects.map(item => `
        <div class="slider-item">
            <div class="project-card">
                <div class="project-image">
                    <img src="${item.image}" onerror="this.src='https://via.placeholder.com/400x200?text=Project+Image'" alt="${item.title}">
                </div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="${item.link}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View Code
                </a>
            </div>
        </div>
    `).join('');
    document.getElementById('track-projects').innerHTML = projectsHTML;

    // 4. RESEARCH (with Download button)
    const researchHTML = portfolioData.research.map(item => `
        <div class="slider-item">
            <div class="premium-card">
                <div class="card-icon"><i class="fas fa-file-alt"></i></div>
                <h3>${item.title}</h3>
                <p><strong>${item.author}</strong></p>
                <p>${item.desc}</p>
                <div class="research-actions">
                    <a href="${item.pdfLink || '#'}" class="download-btn" ${item.pdfLink ? 'download' : ''}>
                        <i class="fas fa-download"></i> Download PDF
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('track-research').innerHTML = researchHTML;

    // 5. EDUCATION
    const eduHTML = portfolioData.education.map(item => `
        <div class="slider-item">
            <div class="premium-card">
                <div class="card-icon"><i class="fas fa-graduation-cap"></i></div>
                <h3>${item.degree}</h3>
                <p class="text-secondary">${item.field}</p>
                <p><strong>${item.school}</strong></p>
                <p class="edu-meta">${item.location} | ${item.duration}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('track-education').innerHTML = eduHTML;

    // 6. EXPERIENCES (NEW SECTION)
    const experiencesHTML = portfolioData.experiences.map(item => `
        <div class="slider-item">
            <div class="experience-card">
                <div class="experience-header">
                    <div class="experience-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="experience-info">
                        <h3>${item.position}</h3>
                        <div class="experience-company">${item.company}</div>
                        <div class="experience-duration">${item.duration}</div>
                    </div>
                </div>
                <p class="experience-description">${item.description}</p>
                <div class="experience-skills">
                    ${item.skills.map(skill => `<span class="experience-skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('track-experiences').innerHTML = experiencesHTML;

    // 7. CONTACT (Beautified Cards)
    const c = portfolioData.contact;
    const contactHTML = `
        <a href="mailto:${c.email}" class="contact-card">
            <div class="contact-card-icon"><i class="fas fa-envelope"></i></div>
            <h3>Email</h3>
            <p>Get in touch</p>
        </a>
        <a href="${c.linkedin}" target="_blank" class="contact-card">
            <div class="contact-card-icon"><i class="fab fa-linkedin-in"></i></div>
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
        </a>
        <a href="${c.github}" target="_blank" class="contact-card">
            <div class="contact-card-icon"><i class="fab fa-github"></i></div>
            <h3>GitHub</h3>
            <p>View my code</p>
        </a>
    `;
    document.getElementById('contact-container').innerHTML = contactHTML;

    // 8. FOOTER ICONS
    const footerHTML = `
        <a href="${c.linkedin}" class="social-circle" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="${c.github}" class="social-circle" target="_blank"><i class="fab fa-github"></i></a>
        <a href="mailto:${c.email}" class="social-circle"><i class="fas fa-envelope"></i></a>
    `;
    document.getElementById('footer-socials').innerHTML = footerHTML;
}

/* ===================================
   KNOW MORE TOGGLE FUNCTION
   =================================== */
function toggleKnowMore(contentId, button) {
    const content = document.getElementById(contentId);
    const icon = button.querySelector('i');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.classList.remove('expanded');
        button.innerHTML = 'Know More <i class="fas fa-chevron-down"></i>';
    } else {
        content.classList.add('expanded');
        button.classList.add('expanded');
        button.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    }
}

/* ===================================
   INITIALIZE KNOW MORE BUTTONS
   =================================== */
function initKnowMoreButtons() {
    // Make toggleKnowMore available globally
    window.toggleKnowMore = toggleKnowMore;
}

/* ===================================
   SLIDER LOGIC
   =================================== */
const sliderData = {
    about: { idx: 0, count: 0 },
    skills: { idx: 0, count: 0 },
    projects: { idx: 0, count: 0 },
    research: { idx: 0, count: 0 },
    education: { idx: 0, count: 0 },
    experiences: { idx: 0, count: 0 }
};

function initSliders() {
    document.querySelectorAll('.slider-container').forEach(container => {
        const wrapper = container.querySelector('.slider-wrapper');
        if (!wrapper) return;
        
        const id = wrapper.id.replace('-slider', '');
        
        // Buttons
        const prevBtn = container.querySelector('.slider-btn-prev');
        const nextBtn = container.querySelector('.slider-btn-next');
        if(prevBtn) prevBtn.onclick = () => moveSlider(id, -1);
        if(nextBtn) nextBtn.onclick = () => moveSlider(id, 1);
        
        // Swipe
        let touchStartX = 0;
        wrapper.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
        wrapper.addEventListener('touchend', e => {
            if (e.changedTouches[0].screenX < touchStartX - 50) moveSlider(id, 1);
            if (e.changedTouches[0].screenX > touchStartX + 50) moveSlider(id, -1);
        });
    });

    // Update layouts after content is rendered
    setTimeout(() => {
        updateAllLayouts();
    }, 100);
    
    window.addEventListener('resize', debounce(() => updateAllLayouts(), 200));
}

function getItemsPerView(sectionId) {
    const width = window.innerWidth;
    if (sectionId === 'research') return 1;
    if (width < 768) return 1;
    if (width < 992) return 2;
    if (sectionId === 'about' || sectionId === 'education' || sectionId === 'experiences') return 2;
    return 3; 
}

function updateAllLayouts() {
    Object.keys(sliderData).forEach(id => {
        const wrapper = document.getElementById(`${id}-slider`);
        if (!wrapper) return;

        const track = wrapper.querySelector('.slider-track');
        const items = track.querySelectorAll('.slider-item');
        sliderData[id].count = items.length;

        const perView = getItemsPerView(id);
        const widthPercentage = 100 / perView;

        items.forEach(item => {
            item.style.flexBasis = `${widthPercentage}%`;
            item.style.maxWidth = `${widthPercentage}%`;
        });

        const maxIdx = Math.max(0, sliderData[id].count - perView);
        if (sliderData[id].idx > maxIdx) sliderData[id].idx = maxIdx;

        updateSliderUI(id);
    });
}

function moveSlider(id, direction) {
    const data = sliderData[id];
    const perView = getItemsPerView(id);
    const maxIdx = Math.max(0, data.count - perView);

    data.idx += direction;

    if (data.idx < 0) data.idx = 0;
    if (data.idx > maxIdx) data.idx = maxIdx;

    updateSliderUI(id);
}

function updateSliderUI(id) {
    const data = sliderData[id];
    const wrapper = document.getElementById(`${id}-slider`);
    if (!wrapper) return;
    
    const track = wrapper.querySelector('.slider-track');
    const perView = getItemsPerView(id);
    
    const movePercentage = 100 / perView; 
    track.style.transform = `translateX(-${data.idx * movePercentage}%)`;

    // Update Buttons
    const prevBtn = wrapper.parentElement.querySelector('.slider-btn-prev');
    const nextBtn = wrapper.parentElement.querySelector('.slider-btn-next');
    const maxIdx = Math.max(0, data.count - perView);

    if (prevBtn) prevBtn.disabled = data.idx === 0;
    if (nextBtn) nextBtn.disabled = data.idx >= maxIdx;

    // Update Dots
    const dotsContainer = document.getElementById(`${id}-dots`);
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        const totalPages = Math.ceil(data.count / perView);
        const currentPage = Math.ceil(data.idx / perView);

        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.className = `slider-dot ${i === currentPage ? 'active' : ''}`;
            dot.onclick = () => {
                data.idx = i * perView;
                if (data.idx > maxIdx) data.idx = maxIdx;
                updateSliderUI(id);
            };
            dotsContainer.appendChild(dot);
        }
    }
}

/* ===================================
   UTILITIES
   =================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
    }
}

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/* =============================================================
   DATA FILE - EDIT THIS TO UPDATE YOUR PORTFOLIO CONTENT
   ============================================================= */

const portfolioData = {
    // SECTION: ABOUT
    about: [
        {
            icon: "fas fa-user-graduate",
            title: "Academic Background",
            desc: "Computer Science Engineering postgraduate (M.Tech) at Thapar Institute. Focused on AI, Deep Learning, and healthcare applications.",
            extraContent: "I am pursuing an M.E. in Computer Science Engineering at Thapar Institute of Engineering & Technology, building strong expertise in core computing areas including algorithms, databases, operating systems, and machine learning.<br> I completed my B.Tech in Information Technology from Rustamji Institute of Technology, Gwalior, where I developed a solid foundation in programming and software development."
        },
        {
            icon: "fas fa-microscope",
            title: "Research Interests",
            desc: "Intersection of AI and Medical Imaging. Specializing in structural MRI analysis, disease classification, and automated diagnostic tools.",
            extraContent: "My research focuses on developing novel deep learning architectures for medical image analysis, particularly in neuroimaging. I work with large-scale datasets to build robust models for disease detection and classification. I'm passionate about translating research into practical healthcare solutions that can improve patient outcomes."
        }
    ],

    // SECTION: SKILLS
    skills: [
        {
            icon: "fas fa-code",
            title: "Languages",
            tags: ["Python", "C++", "JavaScript", "SQL", "Bash"]
        },
        {
            icon: "fas fa-brain",
            title: "AI & ML",
            tags: ["PyTorch", "Pandas", "Deep Learning", "CNN", "SVM"]
        },
        {
            icon: "fas fa-x-ray",
            title: "Medical Imaging",
            tags: ["MRI Analysis", "NIfTI", "FSL", "FreeSurfer", "DICOM"]
        },
        {
            icon: "fas fa-tools",
            title: "Dev Tools",
            tags: ["Anaconda", "Git/GitHub", "Linux", "VS Code", "Jupyter"]
        },
        {
            icon: "fas fa-globe",
            title: "Web Dev",
            tags: ["HTML5", "CSS3", "MongoDB", "Bootstrap", "Express.js"]
        }
    ],

    // SECTION: PROJECTS
    projects: [
        {
            title: "Cataract Classification",
            image: "images/eye.jpeg",
            desc: "Deep learning model for automated cataract detection and grading using retinal fundus images.",
            link: "https://github.com/Rohit8024/Cataract-Detection-System"
        },
        {
            title: "Cocaine Use Detection",
            image: "images/brain.jpeg", 
            desc: "Novel approach using structural MRI data to detect substance use disorders via 2.5D CNNs.",
            link: "https://github.com/rohitkumar"
        },
        {
            title: "Hotel Management System",
            image: "images/hotel.jpeg",
            desc: "Full-stack web application for managing hotel bookings, rooms, and staff operations.",
            link: "hhttps://github.com/Rohit8024/hotel-management-system"
        },
        {
            title: "College Management System",
            image: "images/college.jpg",
            desc: "Full-stack web application for managing students, faculty, courses, attendance, and academic records with an integrated admin dashboard.",
            link: "https://github.com/Rohit8024/college-management-system"
        }
    ],

    // SECTION: RESEARCH
    research: [
        {
            title: "Entropy-Guided Classification of Cocaine Use Disorder from Structural MRI",
            author: "Rohit Kumar",
            desc: "Accepted at CML 2026 and to be published in Springer LNNS (Scopus Indexed). Proposed an entropy-guided, leakage-free CNN framework for structural MRI classification, achieving 72% subject-level accuracy (AUC 0.69) with SHAP-based interpretability.",
            pdfLink: "files/Rsh.pdf" // Add actual PDF link here
        }
    ],

    // SECTION: EXPERIENCES (NEW)
    experiences: [
        {
            icon: "fas fa-laptop-code",
            position: "Research Assistant",
            company: "Thapar Institute of Engineering & Technology",
            duration: "Jun 2025 - Present",
            description: "Conducting research in medical image analysis using deep learning. Developed novel algorithms for MRI preprocessing and disease classification with 95% accuracy.",
            skills: ["Python", "PyTorch", "Medical Imaging", "Deep Learning", "Research"]
        },
        {
            icon: "fas fa-code",
            position: "Frontend Development Intern",
            company: "PN Infosys",
            duration: "Jan 2022 - May 2022",
            description: "Developed responsive and user-friendly web interfaces using modern frontend technologies. Improved cross-browser compatibility, optimized performance, and collaborated with teams to deliver scalable web applications.",
            skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap","MYSQL", "Responsive Design", "Express.js","MongoDB","Git"]
        }  
    ],

    // SECTION: EDUCATION
    education: [
        {
            degree: "M.E",
            field: "Computer Science Engineering",
            school: "Thapar Institute of Engineering & Technology",
            location: "Patiala, Punjab",
            duration: "2024 – Present"
        },
        {
            degree: "B.Tech",
            field: "Information Technology",
            school: "Rustamji Institute of Technology",
            location: "Gwalior, Madhya Pardesh",
            duration: "2019 – 2023"
        }
    ],

    // SECTION: CONTACT INFO
    contact: {
        email: "rohitkrkumar1009@gmail.com",
        linkedin: "https://www.linkedin.com/in/rohit-kumar-231500238/",
        github: "https://github.com/Rohit8024"
    }
};
