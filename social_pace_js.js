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
        image: "https://images.unsplash.com/photo-1623458070626-9c6e8e7e5c3f",
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
        image: "https://images.unsplash.com/photo-1503676260728-90ecd5389c09",
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
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
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
                    description: "Strategies to mitigate anxiety from social media use and promote healthy online habits.",
                    type: "Parent Guide",
                    duration: "15 min read"
                },
                {
                    title: "Digital Detox Techniques for Adolescents",
                    description: "Structured approaches to reduce screen time and improve mental wellbeing.",
                    type: "Therapeutic Guide",
                    duration: "20 min read"
                }
            ],
            'Gaming Addiction': [
                {
                    title: "Addressing Gaming Addiction in Teens",
                    description: "Evidence-based interventions to manage excessive gaming behaviors.",
                    type: "Intervention Protocol",
                    duration: "25 min read"
                }
            ],
            'Identity Issues': [
                {
                    title: "Supporting Identity Exploration in Adolescence",
                    description: "Guidance for parents on fostering healthy identity development.",
                    type: "Educational Resource",
                    duration: "18 min read"
                }
            ]
        }
    }
};

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Populate courses on courses.html
    const allCoursesContainer = document.getElementById('allCourses');
    if (allCoursesContainer) {
        allCoursesContainer.innerHTML = courses.map(course => createCourseCard(course)).join('');
    }

    // Populate resources on resources.html
    const resourceResults = document.getElementById('resourceResults');
    if (resourceResults) {
        resourceResults.innerHTML = '<p class="text-muted text-center">[Select an age group to see resources]</p>';
    }

    // Load dashboard if user is logged in
    loadDashboard();

    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterCourses);
    }

    // Sort functionality
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', sortCourses);
    }

    // Age group and presentation filters
    const ageButtons = document.querySelectorAll('.age-group-btn');
    const presentationTags = document.querySelectorAll('.presentation-tag');
    let selectedAge = null;
    let selectedPresentation = null;

    ageButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedAge = this.getAttribute('data-age');
            ageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterResources();
        });
    });

    presentationTags.forEach(tag => {
        tag.addEventListener('click', function() {
            selectedPresentation = this.getAttribute('data-presentation');
            presentationTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterResources();
        });
    });

    function filterResources() {
        const resourceResults = document.getElementById('resourceResults');
        if (!resourceResults) return;

        if (!selectedAge) {
            resourceResults.innerHTML = '<p class="text-muted text-center">[Select an age group to see resources]</p>';
            return;
        }

        const resources = resourceDatabase[selectedAge]?.resources[selectedPresentation] || [];
        if (resources.length === 0) {
            resourceResults.innerHTML = '<p class="text-muted text-center">[No resources available for this selection]</p>';
        } else {
            resourceResults.innerHTML = resources.map(resource => `
                <div class="resource-item">
                    <h5>${resource.title}</h5>
                    <p class="text-muted">${resource.description}</p>
                    <small class="text-muted">${resource.type} | ${resource.duration}</small>
                </div>
            `).join('');
        }
    }

    // Initialize interactive background particles
    createParticles();
});

// Course Card Creation
function createCourseCard(course) {
    return `
        <div class="col-md-4 mb-4">
            <div class="course-card">
                <div class="course-image"><img src="${course.image}" alt="${course.title}"></div>
                <div class="card-body">
                    <h6 class="card-title">${course.title}</h6>
                    <div class="instructor-info">
                        <span class="instructor-avatar">${course.instructor.charAt(0)}</span>
                        <span>${course.instructor}</span>
                    </div>
                    <div class="course-rating">★★★★☆ (${course.ratingCount})</div>
                    <div class="price-badge">$${course.price}</div>
                    <button class="btn btn-primary w-100 mt-2" data-bs-toggle="modal" data-bs-target="#courseModal" onclick="showCourseDetail(${course.id})">Enroll Now</button>
                </div>
            </div>
        </div>
    `;
}

// Course Detail Modal
let currentCourse = null;

function showCourseDetail(courseId) {
    currentCourse = courses.find(c => c.id === courseId);
    if (!currentCourse) return;

    const modal = document.getElementById('courseModal');
    if (modal) {
        modal.querySelector('.modal-title').textContent = currentCourse.title;
        modal.querySelector('.modal-body').innerHTML = `
            <div class="course-image mb-3"><img src="${currentCourse.image}" alt="${currentCourse.title}"></div>
            <p>${currentCourse.description}</p>
            <div class="instructor-info mb-3">
                <span class="instructor-avatar">${currentCourse.instructor.charAt(0)}</span>
                <span>${currentCourse.instructor} - ${currentCourse.instructorTitle}</span>
            </div>
            <div class="mb-2">
                <span>Duration: ${currentCourse.duration}</span><br>
                <span>Lessons: ${currentCourse.lessons}</span><br>
                <span>Level: ${currentCourse.level}</span><br>
                <span class="course-rating">★★★★☆ (${currentCourse.ratingCount})</span>
            </div>
            <button class="btn btn-primary w-100" onclick="purchaseCourse()">Enroll Now</button>
            <button class="btn btn-outline-primary w-100 mt-2" onclick="addToWishlist()">Save for Later</button>
            <div class="mt-3">
                <strong>This course includes:</strong><br>
                Lifetime access<br>
                Mobile and desktop access<br>
                Downloadable resources<br>
                Certificate of completion<br>
                30-day money-back guarantee
            </div>
            <div class="mt-3">
                <strong>Course Content</strong>
                ${currentCourse.lessonList.map(lesson => `
                    <div class="lesson-item ${lesson.completed ? 'completed' : ''}">
                        ${lesson.title} (${lesson.duration})
                    </div>
                `).join('')}
            </div>
        `;
        new bootstrap.Modal(modal).show();
    }
}

// Payment and User Management (Simplified)
let currentUser = null;
let userCourses = [];

function login() {
    // Placeholder login logic
    currentUser = { id: 1, name: "Test User" };
    loadDashboard();
    showAlert('Login successful!', 'success');
}

function signup() {
    // Placeholder signup logic
    currentUser = { id: 1, name: "New User" };
    showAlert('Account created successfully! Please log in.', 'success');
}

function logout() {
    currentUser = null;
    userCourses = [];
    showAlert('Logged out successfully.', 'success');
}

function purchaseCourse() {
    if (!currentUser || !currentCourse) return;

    userCourses.push({
        courseId: currentCourse.id,
        enrolledDate: new Date().toISOString(),
        progress: 0
    });
    
    bootstrap.Modal.getInstance(document.getElementById('courseModal')).hide();
    showAlert('Course purchased successfully! Welcome to your learning journey.', 'success');
    loadDashboard();
}

function addToWishlist() {
    showAlert('Added to your learning wishlist!', 'info');
}

// Dashboard Functions
function loadDashboard() {
    if (!currentUser) return;

    // Update stats
    const completedCourses = userCourses.filter(uc => {
        const course = courses.find(c => c.id === uc.courseId);
        return course && uc.progress >= 100;
    }).length;

    document.getElementById('enrolledCoursesCount').textContent = userCourses.length;
    document.getElementById('completedCoursesCount').textContent = completedCourses;
    document.getElementById('hoursLearned').textContent = userCourses.length * 4; // Estimate
    document.getElementById('certificatesEarned').textContent = completedCourses;

    loadContinueLearning();
    loadMyCourses();
}

function loadContinueLearning() {
    const container = document.getElementById('continuelearning');
    if (!container) return;
    
    const inProgressCourses = userCourses.filter(uc => uc.progress > 0 && uc.progress < 100);
    
    if (inProgressCourses.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="text-center py-4"><i class="fas fa-graduation-cap fa-3x text-muted mb-3"></i><p class="text-muted">No courses in progress. <a href="courses.html" class="text-primary">Start learning today!</a></p></div></div>';
        return;
    }

    container.innerHTML = inProgressCourses.map(userCourse => {
        const course = courses.find(c => c.id === userCourse.courseId);
        if (!course) return '';
        
        return `
            <div class="col-md-6 mb-3">
                <div class="course-card">
                    <div class="card-body">
                        <h6 class="card-title">${course.title}</h6>
                        <p class="card-text text-muted">${course.instructor}</p>
                        <div class="progress mb-3">
                            <div class="progress-bar bg-primary" style="width: ${userCourse.progress}%"></div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${userCourse.progress}% complete</small>
                            <button class="btn btn-primary btn-sm" onclick="showCourseDetail(${course.id})">
                                Continue <i class="fas fa-arrow-right ms-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function loadMyCourses() {
    const container = document.getElementById('myCourses');
    if (!container) return;
    
    if (userCourses.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="text-center py-4"><i class="fas fa-book-open fa-3x text-muted mb-3"></i><p class="text-muted">No courses enrolled yet. <a href="courses.html" class="text-primary">Browse our professional courses</a> to get started!</p></div></div>';
        return;
    }

    container.innerHTML = userCourses.map(userCourse => {
        const course = courses.find(c => c.id === userCourse.courseId);
        if (!course) return '';
        
        const statusBadge = userCourse.progress >= 100 ? 
            '<span class="badge bg-success"><i class="fas fa-check me-1"></i>Completed</span>' : 
            '<span class="badge bg-primary"><i class="fas fa-clock me-1"></i>In Progress</span>';
        
        return `
            <div class="col-lg-4 mb-4">
                <div class="course-card">
                    <div class="course-image">
                        <img src="${course.image}" alt="${course.title}">
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">${course.title}</h6>
                        <p class="card-text text-muted">${course.instructor}</p>
                        <div class="mb-3">${statusBadge}</div>
                        <div class="progress mb-3">
                            <div class="progress-bar bg-primary" style="width: ${userCourse.progress}%"></div>
                        </div>
                        <button class="btn btn-primary w-100" onclick="showCourseDetail(${course.id})">
                            ${userCourse.progress >= 100 ? 'Review Course' : 'Continue Learning'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Utility Functions
function showAlert(message, type) {
    document.querySelectorAll('.alert-notification').forEach(alert => alert.remove());

    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed alert-notification`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px; box-shadow: 0 4px 25px rgba(0,0,0,0.15);';
    alertDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'danger' ? 'exclamation-triangle' : type === 'warning' ? 'exclamation-circle' : 'info-circle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Filter and sort functions
function filterCourses() {
    const category = document.getElementById('categoryFilter')?.value;
    let filteredCourses = courses;
    
    if (category) {
        filteredCourses = courses.filter(course => course.category === category);
    }
    
    const container = document.getElementById('allCourses');
    if (container) {
        container.innerHTML = filteredCourses.map(course => createCourseCard(course)).join('');
    }
}

function sortCourses() {
    const sortBy = document.getElementById('sortBy')?.value;
    let sortedCourses = [...courses];
    
    switch (sortBy) {
        case 'price-low':
            sortedCourses.sort((a, b) => a.price - b.price);
            break;
        case 'rating':
            sortedCourses.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // Keep original order for demo
            break;
        default:
            // Most popular - keep original order for demo
            break;
    }
    
    const container = document.getElementById('allCourses');
    if (container) {
        container.innerHTML = sortedCourses.map(course => createCourseCard(course)).join('');
    }
}

// Interactive Background Particles
function createParticles() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 3; // 3-8px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`; // 10-20s
        particle.style.animationDelay = `${Math.random() * 5}s`; // Staggered start
        hero.appendChild(particle);
    }
}