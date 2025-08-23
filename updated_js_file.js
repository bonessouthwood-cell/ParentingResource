// Sample Course Data
const courses = [
    {
        id: 1,
        title: "Managing Screen Time for Teens",
        description: "Evidence-based strategies to help teenagers develop healthy digital habits and reduce problematic internet use.",
        instructor: "Dr. Sarah Mitchell",
        instructorTitle: "Clinical Child Psychologist",
        price: 149,
        rating: 4.9,
        ratingCount: 324,
        duration: "6 hours",
        lessons: 15,
        level: "Professional",
        category: "screen-time",
        image: "https://via.placeholder.com/400x200/4a7c8a/FFFFFF?text=Screen+Time+Management",
        lessonList: [
            {title: "Understanding Digital Addiction in Adolescence", duration: "22 min", completed: true},
            {title: "Neurobiological Impact of Screen Time", duration: "18 min", completed: true},
            {title: "Assessment Tools and Techniques", duration: "25 min", completed: false},
            {title: "Cognitive Behavioral Interventions", duration: "30 min", completed: false},
            {title: "Family Systems Approach", duration: "28 min", completed: false}
        ]
    },
    {
        id: 2,
        title: "Developmental Psychology Fundamentals",
        description: "Comprehensive overview of child development from infancy through adolescence, grounded in current research.",
        instructor: "Prof. James Robertson",
        instructorTitle: "Developmental Psychologist",
        price: 199,
        rating: 4.8,
        ratingCount: 256,
        duration: "8 hours",
        lessons: 20,
        level: "Advanced",
        category: "psychology",
        image: "https://via.placeholder.com/400x200/6b9aa8/FFFFFF?text=Child+Development",
        lessonList: [
            {title: "Erikson's Stages of Development", duration: "25 min", completed: false},
            {title: "Attachment Theory in Practice", duration: "30 min", completed: false},
            {title: "Cognitive Development Milestones", duration: "22 min", completed: false},
            {title: "Social and Emotional Development", duration: "28 min", completed: false}
        ]
    },
    {
        id: 3,
        title: "Therapeutic Parenting Techniques",
        description: "Learn trauma-informed parenting strategies and therapeutic techniques for children with behavioral challenges.",
        instructor: "Dr. Emma Thompson",
        instructorTitle: "Family Therapist & Trauma Specialist",
        price: 129,
        rating: 4.9,
        ratingCount: 412,
        duration: "5 hours",
        lessons: 12,
        level: "Intermediate",
        category: "therapy",
        image: "https://via.placeholder.com/400x200/2d5762/FFFFFF?text=Therapeutic+Parenting",
        lessonList: [
            {title: "Trauma-Informed Care Principles", duration: "20 min", completed: true},
            {title: "Attachment-Based Interventions", duration: "25 min", completed: false},
            {title: "Regulation and Co-Regulation", duration: "30 min", completed: false},
            {title: "Building Therapeutic Relationships", duration: "22 min", completed: false}
        ]
    }
];

// Resource database organized by age groups and presentations
const resourceDatabase = {
    '0-2': {
        presentations: ['Sleep Issues', 'Feeding Difficulties', 'Attachment Concerns', 'Developmental Delays', 'Sensory Issues'],
        resources: {
            'Sleep Issues': [
                {
                    title: "Establishing Healthy Sleep Routines in Infancy",
                    description: "Evidence-based approaches to infant sleep training that support secure attachment.",
                    type: "Strategy Guide",
                    duration: "15 min read"
                },
                {
                    title: "Understanding Infant Sleep Patterns",
                    description: "Developmental sleep patterns and when to seek professional support.",
                    type: "Educational Resource",
                    duration: "10 min read"
                }
            ],
            'Attachment Concerns': [
                {
                    title: "Building Secure Attachment in Early Years",
                    description: "Practical strategies for fostering secure attachment relationships.",
                    type: "Intervention Guide",
                    duration: "20 min read"
                }
            ]
        }
    },
    '3-5': {
        presentations: ['Separation Anxiety', 'Tantrums', 'Aggression', 'Social Skills', 'School Readiness', 'ADHD Symptoms'],
        resources: {
            'Separation Anxiety': [
                {
                    title: "Managing Preschool Separation Anxiety",
                    description: "Age-appropriate strategies to help children cope with separation from caregivers.",
                    type: "Parent Guide",
                    duration: "12 min read"
                },
                {
                    title: "Gradual Exposure Techniques for Separation",
                    description: "Step-by-step approach to reducing separation anxiety through exposure therapy principles.",
                    type: "Clinical Guide",
                    duration: "18 min read"
                }
            ],
            'Tantrums': [
                {
                    title: "Understanding and Managing Toddler Tantrums",
                    description: "Evidence-based strategies for preventing and responding to emotional outbursts.",
                    type: "Behavior Guide",
                    duration: "15 min read"
                }
            ],
            'ADHD Symptoms': [
                {
                    title: "Early ADHD Identification and Support",
                    description: "Recognizing early signs and implementing supportive strategies in preschool years.",
                    type: "Assessment Tool",
                    duration: "25 min read"
                }
            ]
        }
    },
    '6-11': {
        presentations: ['Academic Anxiety', 'Peer Relationships', 'ADHD', 'Learning Difficulties', 'Bullying', 'Screen Time Issues', 'Depression', 'OCD'],
        resources: {
            'Academic Anxiety': [
                {
                    title: "School-Based Anxiety Interventions",
                    description: "Collaborative approaches between parents, teachers, and therapists to support anxious students.",
                    type: "Intervention Protocol",
                    duration: "22 min read"
                },
                {
                    title: "Cognitive Strategies for Test Anxiety",
                    description: "Teaching children cognitive coping skills for academic performance anxiety.",
                    type: "Therapeutic Technique",
                    duration: "18 min read"
                }
            ],
            'Screen Time Issues': [
                {
                    title: "Healthy Screen Habits for School-Age Children",
                    description: "Age-appropriate screen time limits and quality content guidelines.",
                    type: "Family Guide",
                    duration: "16 min read"
                }
            ],
            'Depression': [
                {
                    title: "Recognizing Depression in School-Age Children",
                    description: "Warning signs and professional assessment considerations for childhood depression.",
                    type: "Clinical Assessment",
                    duration: "20 min read"
                }
            ],
            'OCD': [
                {
                    title: "Early OCD Interventions for Children",
                    description: "Family-based exposure and response prevention techniques adapted for children.",
                    type: "Treatment Guide",
                    duration: "30 min read"
                }
            ]
        }
    },
    '12-18': {
        presentations: ['Social Media Anxiety', 'Gaming Addiction', 'Identity Issues', 'Depression', 'Anxiety Disorders', 'Eating Concerns', 'Risk-Taking Behavior', 'Academic Pressure', 'OCD'],
        resources: {
            'Social Media Anxiety': [
                {
                    title: "Managing Social Media-Related Anxiety in Teens",
                    description: "Therapeutic approaches to address comparison, cyberbullying, and FOMO in adolescents.",
                    type: "Clinical Protocol",
                    duration: "25 min read"
                },
                {
                    title: "Digital Wellness for Adolescents",
                    description: "Comprehensive approach to healthy social media use and digital boundaries.",
                    type: "Wellness Guide",
                    duration: "20 min read"
                }
            ],
            'Gaming Addiction': [
                {
                    title: "Treating Problematic Gaming in Adolescents",
                    description: "Evidence-based interventions for gaming disorder and excessive gaming behavior.",
                    type: "Treatment Manual",
                    duration: "35 min read"
                },
                {
                    title: "Family-Based Gaming Interventions",
                    description: "Involving families in treating problematic gaming behavior in teenagers.",
                    type: "Family Therapy Guide",
                    duration: "28 min read"
                }
            ],
            'Depression': [
                {
                    title: "Adolescent Depression: Assessment and Treatment",
                    description: "Comprehensive guide to identifying and treating depression in teenagers.",
                    type: "Clinical Manual",
                    duration: "40 min read"
                }
            ],
            'Anxiety Disorders': [
                {
                    title: "CBT Techniques for Teen Anxiety",
                    description: "Cognitive-behavioral interventions specifically adapted for adolescent anxiety disorders.",
                    type: "Therapeutic Guide",
                    duration: "32 min read"
                }
            ],
            'OCD': [
                {
                    title: "Adolescent OCD: ERP and Family Involvement",
                    description: "Advanced exposure and response prevention techniques for teenage OCD with family support strategies.",
                    type: "Treatment Protocol",
                    duration: "45 min read"
                }
            ]
        }
    }
};

// User data and state management - using in-memory storage instead of localStorage
let currentUser = null;
let userCourses = [];
let currentCourse = null;
let selectedAge = null;
let selectedPresentations = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedCourses();
    loadAllCourses();
    loadDashboard();
});

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('[id$="Page"]').forEach(page => {
        page.className = 'hidden-page';
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.className = 'current-page';
    }

    // Load page-specific content
    if (pageId === 'courses') {
        loadAllCourses();
    } else if (pageId === 'dashboard') {
        if (!currentUser) {
            showLoginModal();
            return;
        }
        loadDashboard();
    } else if (pageId === 'resources') {
        resetResourceSearch();
    }
}

// Authentication Functions
function showLoginModal() {
    new bootstrap.Modal(document.getElementById('loginModal')).show();
}

function showSignupModal() {
    new bootstrap.Modal(document.getElementById('signupModal')).show();
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        // Demo login
        currentUser = {
            name: email.split('@')[0],
            email: email,
            role: 'parent',
            joinDate: new Date().toISOString()
        };
        
        showLoggedInState();
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        showAlert('Welcome back! Login successful.', 'success');
    } else {
        showAlert('Please fill in all required fields.', 'danger');
    }
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('signupRole').value;
    const agreedToTerms = document.getElementById('agreeTerms').checked;
    
    if (name && email && password && role && agreedToTerms) {
        currentUser = {
            name: name,
            email: email,
            role: role,
            joinDate: new Date().toISOString()
        };
        
        showLoggedInState();
        bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
        showAlert('Account created successfully! Welcome to Social Pace Support.', 'success');
    } else {
        showAlert('Please fill in all required fields and agree to the terms.', 'danger');
    }
}

function logout() {
    currentUser = null;
    userCourses = [];
    showLoggedOutState();
    showPage('home');
    showAlert('You have been logged out successfully.', 'info');
}

function showLoggedInState() {
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('signupBtn').style.display = 'none';
    document.getElementById('userMenu').style.display = 'block';
    document.getElementById('dashboardLink').style.display = 'block';
    document.getElementById('userName').textContent = currentUser.name;
}

function showLoggedOutState() {
    document.getElementById('loginBtn').style.display = 'inline-block';
    document.getElementById('signupBtn').style.display = 'inline-block';
    document.getElementById('userMenu').style.display = 'none';
    document.getElementById('dashboardLink').style.display = 'none';
}

// Course Functions
function loadFeaturedCourses() {
    const container = document.getElementById('featuredCourses');
    if (container) {
        container.innerHTML = courses.slice(0, 3).map(course => createCourseCard(course)).join('');
    }
}

function loadAllCourses() {
    const container = document.getElementById('allCourses');
    if (container) {
        container.innerHTML = courses.map(course => createCourseCard(course)).join('');
    }
}

function createCourseCard(course) {
    const isEnrolled = userCourses.some(uc => uc.courseId === course.id);
    const enrollButton = isEnrolled ? 
        `<button class="btn btn-success" onclick="showCourseDetail(${course.id})">Continue Learning</button>` :
        `<button class="btn btn-primary" onclick="showCourseDetail(${course.id})">Learn More</button>`;
    
    return `
        <div class="col-lg-4 mb-4">
            <div class="course-card">
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                    <div class="play-overlay" onclick="showCourseDetail(${course.id})">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="card-body p-4">
                    <h5 class="card-title mb-3">${course.title}</h5>
                    <p class="card-text text-muted mb-3">${course.description}</p>
                    <div class="instructor-info mb-3">
                        <div class="instructor-avatar">${course.instructor.split(' ')[1]?.charAt(0) || 'I'}</div>
                        <div>
                            <small class="fw-bold">${course.instructor}</small><br>
                            <small class="text-muted">${course.instructorTitle}</small>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="course-rating">
                            ${'★'.repeat(Math.floor(course.rating))}${'☆'.repeat(5-Math.floor(course.rating))}
                            <small class="text-muted ms-1">(${course.ratingCount})</small>
                        </div>
                        <span class