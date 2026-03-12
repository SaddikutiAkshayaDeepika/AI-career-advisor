// Career Paths Database
const careerPaths = {
    "Full Stack Developer": {
        requiredSkills: [
            "HTML", "CSS", "JavaScript", 
            "React", "Node.js", "MongoDB", 
            "Git", "REST API"
        ],
        internships: [
            {
                title: "Frontend Developer Intern",
                description: "Work on React-based web applications"
            },
            {
                title: "Backend Developer Intern",
                description: "Build Node.js APIs and databases"
            },
            {
                title: "Full Stack Intern",
                description: "End-to-end web development projects"
            }
        ],
        roadmap: [
            "Master HTML, CSS, and JavaScript fundamentals",
            "Learn React.js for frontend development",
            "Study Node.js and Express.js for backend",
            "Understand MongoDB and database design",
            "Learn Git and version control",
            "Build 3 full-stack projects for portfolio",
            "Practice REST API development",
            "Deploy projects on platforms like Heroku/Vercel"
        ]
    },

    "Data Scientist": {
        requiredSkills: [
            "Python", "Statistics", "Machine Learning",
            "Pandas", "NumPy", "SQL",
            "Data Visualization", "Scikit-learn"
        ],
        internships: [
            {
                title: "Data Analyst Intern",
                description: "Analyze datasets and create visualizations"
            },
            {
                title: "ML Engineering Intern",
                description: "Build machine learning models"
            },
            {
                title: "Business Intelligence Intern",
                description: "Create data-driven insights for business"
            }
        ],
        roadmap: [
            "Learn Python programming basics",
            "Master statistics and probability",
            "Study Pandas and NumPy for data manipulation",
            "Learn data visualization (Matplotlib, Seaborn)",
            "Understand SQL and database queries",
            "Study machine learning algorithms",
            "Work on 5 data analysis projects",
            "Participate in Kaggle competitions"
        ]
    },

    "Mobile App Developer": {
        requiredSkills: [
            "Java", "Kotlin", "Swift",
            "React Native", "Flutter", "Firebase",
            "REST API", "UI/UX Design"
        ],
        internships: [
            {
                title: "Android Developer Intern",
                description: "Build native Android applications"
            },
            {
                title: "iOS Developer Intern",
                description: "Create iOS apps using Swift"
            },
            {
                title: "React Native Developer Intern",
                description: "Cross-platform mobile development"
            }
        ],
        roadmap: [
            "Choose platform: Android (Java/Kotlin) or iOS (Swift)",
            "Learn mobile UI/UX principles",
            "Master chosen programming language",
            "Study mobile app architecture patterns",
            "Learn to integrate REST APIs",
            "Understand Firebase for backend services",
            "Build 4 mobile apps with different features",
            "Publish apps on Play Store/App Store"
        ]
    },

    "DevOps Engineer": {
        requiredSkills: [
            "Linux", "Docker", "Kubernetes",
            "CI/CD", "AWS", "Jenkins",
            "Python", "Bash Scripting"
        ],
        internships: [
            {
                title: "DevOps Intern",
                description: "Automate deployment pipelines"
            },
            {
                title: "Cloud Engineering Intern",
                description: "Work with AWS/Azure cloud services"
            },
            {
                title: "Site Reliability Intern",
                description: "Monitor and maintain system reliability"
            }
        ],
        roadmap: [
            "Learn Linux system administration",
            "Master Docker containerization",
            "Study Kubernetes orchestration",
            "Understand CI/CD concepts and tools",
            "Learn AWS/Azure cloud platforms",
            "Practice infrastructure as code (Terraform)",
            "Automate 3 deployment pipelines",
            "Get AWS/Azure certification"
        ]
    },

    "AI/ML Engineer": {
        requiredSkills: [
            "Python", "TensorFlow", "PyTorch",
            "Deep Learning", "NLP", "Computer Vision",
            "Mathematics", "Neural Networks"
        ],
        internships: [
            {
                title: "AI Research Intern",
                description: "Work on cutting-edge AI research projects"
            },
            {
                title: "Computer Vision Intern",
                description: "Develop image recognition systems"
            },
            {
                title: "NLP Engineer Intern",
                description: "Build natural language processing models"
            }
        ],
        roadmap: [
            "Strengthen mathematics (Linear Algebra, Calculus)",
            "Master Python and scientific libraries",
            "Learn machine learning fundamentals",
            "Study deep learning and neural networks",
            "Practice with TensorFlow and PyTorch",
            "Specialize in NLP or Computer Vision",
            "Build 5 AI projects with real datasets",
            "Contribute to open-source AI projects"
        ]
    }
};