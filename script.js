const data = {
    experience: [
        {
            title: "Data Engineer (AI & ML)",
            company: "American Express",
            duration: "May 2025 - Present",
            description: "<ul><li>Leveraged <strong>LangChain agents</strong> and <strong>BigQuery</strong> to optimize feature engineering (50% faster cycle, 12% accuracy boost).</li><li>Optimized financial ETL with PySpark, reducing costs by 25% and runtime by 40%.</li><li>Architected scalable GCP data platform (BigQuery, Dataproc) for AI/ML.</li><li>Automated MLOps with Cloud Build & Terraform (35% efficiency gain).</li><li>Built real-time ML monitoring dashboards with Dataflow & Looker.</li></ul>",
            tags: ["LangChain", "GCP", "PySpark", "MLOps", "BigQuery"],
            match: "Current",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
            isLogo: true
        },
        {
            title: "Data Engineer",
            company: "Capital One",
            duration: "Mar 2024 - Apr 2025",
            description: "<ul><li>Integrated RAG system (Llama 3.1) for compliance docs (40% accuracy, 60% time saved).</li><li>Built real-time fraud detection with Kafka & SageMaker.</li><li>Modernized analytics with dbt Core & Snowflake (50% faster self-service).</li><li>Deployed 20+ serverless pipelines on AWS (Step Functions, Glue).</li></ul>",
            tags: ["AWS", "RAG", "Kafka", "SageMaker", "Snowflake"],
            match: "1 Year",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/1200px-Capital_One_logo.svg.png",
            isLogo: true
        },
        {
            title: "Data Engineer",
            company: "Mercury Insurance",
            duration: "Aug 2022 - Feb 2024",
            description: "<ul><li>Implemented secure MPC framework with Python/Sharemind.</li><li>Architected centralized ML feature store on Databricks/Delta Lake.</li><li>Built event-driven services with DynamoDB for real-time portals.</li><li>Automated data validation with Great Expectations (25% reliability boost).</li></ul>",
            tags: ["Databricks", "Python", "AWS Glue", "Privacy Preserving"],
            match: "1.5 Years",
            image: "assets/mercury.jpg",
            isLogo: true
        },
        {
            title: "Data Engineer",
            company: "Honeywell",
            duration: "Dec 2018 - Dec 2020",
            description: "<ul><li>Engineered real-time IoT analytics with Azure Stream Analytics.</li><li>Optimized Hive/Spark workflows for large-scale transformation.</li><li>Built microservices architecture for distributed systems.</li><li>Managed data ingestion to Hadoop via Sqoop.</li></ul>",
            tags: ["Azure", "IoT", "Spark", "NoSQL"],
            match: "2 Years",
            image: "assets/honeywell.png",
            isLogo: true
        }
    ],
    projects: [
        {
            title: "Intelligent Pipeline Agent",
            description: "A production-ready multi-agent AI platform that autonomously monitors, diagnoses, and optimizes data pipelines using LangGraph and RAG.",
            tags: ["LangGraph", "FastAPI", "RAG", "Docker", "MLOps"],
            match: "Trending",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "https://github.com/Saidatapro/intelligent-pipeline-agent"
        },
        {
            title: "AWS Analytics Pipeline",
            description: "End-to-end data analytics pipeline using Redshift, Athena & SQL. Ingested e-commerce data to S3, transformed via Python/SQL.",
            tags: ["AWS Redshift", "Athena", "S3", "SQL"],
            match: "Popular",
            image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "https://github.com/Saidatapro/AWS_Analytics_Pipeline"
        },
        {
            title: "GCP Analytics Project",
            description: "Data Engineering on Google Cloud Platform.",
            tags: ["GCP", "BigQuery", "Dataflow"],
            match: "New",
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "https://github.com/Saidatapro/GCP_Analytics"
        },
        {
            title: "Data Engineering GCP",
            description: "Comprehensive Data Engineering project on Google Cloud Platform.",
            tags: ["GCP", "Data Engineering", "Cloud"],
            match: "Latest",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "https://github.com/Saidatapro/data_engineering_gcp_project"
        },
        {
            title: "Enterprise Data Pipeline",
            description: "Simulated e-commerce transactions using Azure Data Factory, Kafka, and Snowflake. Automated via Airflow.",
            tags: ["Azure ADF", "Kafka", "Snowflake", "Airflow"],
            match: "98% Match",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "https://github.com/Saidatapro/saidataproject"
        }
    ],
    skills: [
        // Programming Languages
        { title: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", isLogo: true },
        { title: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", isLogo: true },
        { title: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", isLogo: true },
        { title: "Scala", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg", isLogo: true },
        { title: "Bash", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", isLogo: true },

        // Big Data
        { title: "Spark", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", isLogo: true },
        { title: "Hadoop", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg", isLogo: true },
        { title: "Databricks", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/databricks/databricks-original.svg", isLogo: true },
        { title: "Hive", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg", isLogo: true },

        // Streaming
        { title: "Kafka", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", isLogo: true },
        { title: "Pub/Sub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", isLogo: true },

        // ETL & Orchestration
        { title: "Airflow", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png", isLogo: true },
        { title: "dbt", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Dbt-logo.svg/1024px-Dbt-logo.svg.png", isLogo: true },
        { title: "Azure Data Factory", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Data_Factory_Icon.svg/1200px-Microsoft_Azure_Data_Factory_Icon.svg.png", isLogo: true },
        { title: "AWS Glue", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", isLogo: true },

        // Machine Learning
        { title: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", isLogo: true },
        { title: "PyTorch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", isLogo: true },
        { title: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", isLogo: true },
        { title: "Pandas", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", isLogo: true },
        { title: "NumPy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", isLogo: true },

        // MLOps
        { title: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", isLogo: true },
        { title: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", isLogo: true },
        { title: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", isLogo: true },
        { title: "Terraform", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", isLogo: true },
        { title: "MLflow", image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg", isLogo: true }, // Placeholder for MLflow if unavailable

        // Cloud
        { title: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", isLogo: true },
        { title: "Azure", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", isLogo: true },
        { title: "GCP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", isLogo: true },

        // Databases
        { title: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", isLogo: true },
        { title: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", isLogo: true },
        { title: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", isLogo: true },
        { title: "Snowflake", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg", isLogo: true },
        { title: "Oracle", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", isLogo: true },

        // BI
        { title: "Power BI", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", isLogo: true },
        { title: "Tableau", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png", isLogo: true }
    ],
    education: [
        {
            title: "Master's degree, Computer Science",
            company: "University of Central Missouri",
            duration: "Aug 2021 - Jul 2022",
            description: "Activities and societies: participated in academic enhancement programs to better understand how modern world problems can be solved using IT technologies. <br>Actively participated in academic enhancement programs focused on leveraging modern IT technologies to solve real-world challenges. Gained hands-on exposure to innovative technologies.",
            tags: ["Artificial Intelligence", "Python", "+5 skills"],
            match: "Graduated",
            image: "assets/ucm_new.jpg",
            isLogo: true
        },
        {
            title: "Bachelor of Technology - BTech, CSE",
            company: "Keshav Memorial Institute of Technology",
            duration: "Aug 2015 - Apr 2019",
            description: "Activities and societies: Organised events and participated in social activities. Organized campus events and actively participated in community-driven social initiatives, demonstrating leadership, teamwork, and strong organizational skills.",
            tags: ["Java", "DBMS", "+3 skills"],
            match: "Graduated",
            image: "assets/kmit_new.png",
            isLogo: true
        },
        {
            title: "Master's degree, Comp & Info Sciences",
            company: "The State University of New York",
            duration: "Jan 2021 - Jul 2021",
            description: "Skills: Cloud Computing, Algorithms, +7 skills.",
            tags: ["Cloud Computing", "Algorithms"],
            match: "Attended",
            image: "assets/suny_new.png",
            isLogo: true
        }
    ],
    certifications: [
        {
            title: "Azure AI Engineer Associate",
            company: "Microsoft",
            duration: "Expires Nov 2026",
            description: "Credential ID: 5D3E00-CM6494. Skills: Azure Cognitive Services, AI model lifecycle management.",
            tags: ["Azure", "AI"],
            match: "Certified",
            image: "assets/azure_ai.png",
            isLogo: true
        },
        {
            title: "Azure Data Engineer",
            company: "Microsoft",
            duration: "Expires Jan 2026",
            description: "Credential ID: F2A9BB-E10EB3. Skills: Microsoft Azure, Azure Data Lake.",
            tags: ["Azure", "Data"],
            match: "Certified",
            image: "assets/azure_data.png",
            isLogo: true
        },
        {
            title: "AWS Certified",
            company: "Amazon Web Services",
            duration: "Expires Feb 2023",
            description: "Credential ID: 0RLZR121EEV1Q7GV.",
            tags: ["AWS", "Cloud"],
            match: "Certified",
            image: "assets/aws_cert.png",
            isLogo: true
        },
        {
            title: "Strategic Management",
            company: "IBMI",
            duration: "Credential ID 197597...",
            description: "Basics of Strategic Management.",
            tags: ["Management", "Strategy"],
            match: "Certified",
            image: "assets/ibmi.jpg",
            isLogo: true
        }
    ],
    volunteering: [
        {
            title: "Coordinator",
            company: "Street Cause",
            duration: "Aug 2015 - Apr 2017",
            description: "Volunteered in child labour eradication campaigns. Engaged with local communities to spread awareness.",
            tags: ["Social Cause", "Leadership"],
            match: "Volunteer",
            image: "https://ui-avatars.com/api/?name=Street+Cause&background=random"
        },
        {
            title: "Event Organizer",
            company: "KMIT",
            duration: "Sep 2018 - Oct 2018",
            description: "Organized Dandiya Night cultural event for 2000+ students. Coordinated logistics and communications.",
            tags: ["Event Mgmt", "Culture"],
            match: "Organizer",
            image: "https://logo.clearbit.com/kmit.in",
            isLogo: true
        }
    ],
    honors: [
        {
            title: "Certificate in Innovision",
            company: "CBIT",
            duration: "Mar 2016",
            description: "Awarded 2nd place in INNOVISION tech symposium. Presented solution to real-world computing challenge.",
            tags: ["Innovation", "Tech"],
            match: "Award",
            image: "https://logo.clearbit.com/cbit.ac.in",
            isLogo: true
        },
        {
            title: "Merit Certificate",
            company: "NTSE",
            duration: "2011",
            description: "Outstanding performance in National Talent Search Examination and National Mathematics Olympiad.",
            tags: ["Math", "Talent"],
            match: "Merit",
            image: "https://ui-avatars.com/api/?name=NTSE&background=gold&color=fff"
        }
    ],
    courses: [
        { title: "Big Data Analytics", image: "https://ui-avatars.com/api/?name=Big+Data&background=333&color=fff" },
        { title: "Computer Networks", image: "https://ui-avatars.com/api/?name=Networks&background=333&color=fff" },
        { title: "Data Warehousing", image: "https://ui-avatars.com/api/?name=DW&background=333&color=fff" },
        { title: "DBMS", image: "https://ui-avatars.com/api/?name=DBMS&background=333&color=fff" },
        { title: "Info Security", image: "https://ui-avatars.com/api/?name=Security&background=333&color=fff" }
    ]
};

// DOM Elements
const navbar = document.getElementById('navbar');
const modalContainer = document.getElementById('modal-container');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');
const modalMatch = document.getElementById('modal-match');
const modalBanner = document.querySelector('.modal-banner');
const modalYear = document.getElementById('modal-year');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Card Creation
function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');

    let bgStyle = '';
    // Check if image is valid, if not use a gradient
    if (item.image && (item.image.startsWith('http') || item.image.startsWith('assets/'))) {
        bgStyle = `background-image: url('${item.image}');`;
        if (item.isLogo) {
            // FIXED: Use contain to ensure the whole image fits without cutting off
            bgStyle += 'background-size: contain; background-repeat: no-repeat; background-position: center; background-color: #ffffff;';
        } else {
            bgStyle += 'background-size: cover;';
        }
    } else {
        bgStyle = 'background: linear-gradient(45deg, #141414, #333);';
    }

    card.setAttribute('style', bgStyle);

    // Fallback for missing content
    const match = item.match || "";
    const title = item.title || "";

    card.innerHTML = `
        <div class="card-content">
            <div class="card-title">${title}</div>
            <div class="card-meta">${match}</div>
            ${item.link ? '<div class="card-action"><i class="fas fa-external-link-alt"></i> View Code</div>' : ''}
        </div>
    `;

    // Click behavior
    card.addEventListener('click', () => {
        if (item.link) {
            window.open(item.link, '_blank');
        } else {
            openModal(item);
        }
    });

    return card;
}

// Populate Rows
function populateRow(rowId, items) {
    const slider = document.getElementById(`${rowId}-slider`);
    if (!slider) return;

    // Use exact items, do not duplicate
    const itemsToShow = items;

    itemsToShow.forEach(item => {
        const card = createCard(item);
        slider.appendChild(card);
    });
}

// Initialize
populateRow('experience', data.experience);
populateRow('projects', data.projects);
populateRow('skills', data.skills);
populateRow('education', data.education);
populateRow('certifications', data.certifications);
populateRow('volunteering', data.volunteering);
populateRow('courses', data.courses);
populateRow('honors', data.honors);


// Sliders Logic
document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const leftBtn = container.querySelector('.left-handle');
    const rightBtn = container.querySelector('.right-handle');

    rightBtn.addEventListener('click', () => {
        slider.scrollBy({ left: window.innerWidth * 0.5, behavior: 'smooth' });
    });

    leftBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -window.innerWidth * 0.5, behavior: 'smooth' });
    });
});

// Modal Logic
function openModal(item) {
    modalTitle.innerText = item.title;
    // Use innerHTML to allow lists in description
    modalDesc.innerHTML = item.description || "Detailed description unavailable.";

    // Construct subtitle tags
    let subtitle = "";
    if (item.company) subtitle += item.company;
    if (item.duration) subtitle += " • " + item.duration;

    const tagsText = item.tags ? item.tags.join(' • ') : "";
    modalTags.innerHTML = `<span>${subtitle}</span><br><br><span class="tag-label">Tags:</span> ${tagsText}`;

    // Update match score if element exists
    if (modalMatch) modalMatch.innerText = item.match || "";

    // Set banner image
    modalBanner.style.backgroundImage = `url('${item.image}')`;
    // For modal banner, if it's a logo, we might want contain too, but generally cover looks better for banner.
    // However, if it's a small logo it gets pixelated.
    // Let's check isLogo
    if (item.isLogo) {
        modalBanner.style.backgroundSize = 'contain';
        modalBanner.style.backgroundRepeat = 'no-repeat';
        modalBanner.style.backgroundPosition = 'center';
        modalBanner.style.backgroundColor = '#141414';
    } else {
        modalBanner.style.backgroundSize = 'cover';
    }

    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Helper to close modal logic
function closeModal() {
    modalContainer.classList.remove('active');
    document.body.style.overflow = '';
}

const customModalClose = document.querySelector('.modal-close');
if (customModalClose) {
    customModalClose.addEventListener('click', closeModal);
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
        closeModal();
    }
});

modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer || e.target.classList.contains('modal-backdrop')) {
        closeModal();
    }
});

// Profile Gate Logic
function enterApp() {
    const gate = document.getElementById('profile-gate');
    const app = document.getElementById('app');

    // Fade out gate
    gate.style.transition = 'opacity 0.4s ease-out';
    gate.style.opacity = '0';

    setTimeout(() => {
        gate.style.display = 'none';
        app.classList.remove('hidden');

        // Trigger reflow
        void app.offsetWidth;

        // Ensure app fades in if we add opacity transition to it, 
        // currently it just appears. Let's add an animation class or style.
        app.style.animation = 'fadeInApp 0.8s ease-out forwards';
    }, 400);
}

// Add animation keyframe via JS or rely on CSS. 
// Let's inject a style for the app fade-in to be self-contained
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeInApp {
    from { opacity: 0; transform: scale(1.02); }
    to { opacity: 1; transform: scale(1); }
}
.card-action {
    margin-top: 5px;
    font-size: 0.8rem;
    color: #e50914; /* Netflix red */
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
}
`;
document.head.appendChild(styleSheet);
