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
                        <span class="price-badge">${course.price}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">
                            <i class="fas fa-clock me-1"></i>${course.duration} • ${course.lessons} lessons
                        </small>
                        ${enrollButton}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Resource Search Functions
function resetResourceSearch() {
    selectedAge = null;
    selectedPresentations = [];
    const presentationCard = document.getElementById('presentationCard');
    const resourceResults = document.getElementById('resourceResults');
    if (presentationCard) presentationCard.style.display = 'none';
    if (resourceResults) resourceResults.style.display = 'none';
    
    // Reset age group buttons
    document.querySelectorAll('.age-group-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

function selectAgeGroup(ageRange) {
    selectedAge = ageRange;
    selectedPresentations = [];
    
    // Update active state
    document.querySelectorAll('.age-group-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-age="${ageRange}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Show presentation selection
    loadPresentations(ageRange);
    const presentationCard = document.getElementById('presentationCard');
    const resourceResults = document.getElementById('resourceResults');
    if (presentationCard) presentationCard.style.display = 'block';
    if (resourceResults) resourceResults.style.display = 'none';
}

function loadPresentations(ageRange) {
    const container = document.getElementById('presentationTags');
    if (!container || !resourceDatabase[ageRange]) return;
    
    const presentations = resourceDatabase[ageRange].presentations;
    container.innerHTML = presentations.map(presentation => 
        `<span class="presentation-tag" onclick="togglePresentation('${presentation}')">${presentation}</span>`
    ).join('');
}

function togglePresentation(presentation) {
    const index = selectedPresentations.indexOf(presentation);
    const tag = Array.from(document.querySelectorAll('.presentation-tag'))
        .find(tag => tag.textContent === presentation);
    
    if (!tag) return;
    
    if (index > -1) {
        selectedPresentations.splice(index, 1);
        tag.classList.remove('active');
    } else {
        selectedPresentations.push(presentation);
        tag.classList.add('active');
    }
    
    const resourceResults = document.getElementById('resourceResults');
    if (selectedPresentations.length > 0) {
        loadResourceResults();
        if (resourceResults) resourceResults.style.display = 'block';
    } else {
        if (resourceResults) resourceResults.style.display = 'none';
    }
}

function loadResourceResults() {
    const container = document.getElementById('resourcesList');
    if (!container || !selectedAge || !resourceDatabase[selectedAge]) return;
    
    const ageData = resourceDatabase[selectedAge];
    let allResources = [];
    
    selectedPresentations.forEach(presentation => {
        if (ageData.resources[presentation]) {
            const resources = ageData.resources[presentation].map(resource => ({
                ...resource,
                presentation: presentation
            }));
            allResources = [...allResources, ...resources];
        }
    });
    
    if (allResources.length === 0) {
        container.innerHTML = '<div class="resource-item"><h6>No specific resources found</h6><p class="text-muted">Consider browsing our courses for comprehensive training on this topic.</p></div>';
        return;
    }
    
    container.innerHTML = allResources.map(resource => `
        <div class="resource-item">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h6 class="fw-bold mb-1">${resource.title}</h6>
                <span class="badge bg-primary">${resource.type}</span>
            </div>
            <p class="text-muted mb-2">${resource.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-primary fw-bold">For: ${resource.presentation}</small>
                <small class="text-muted">
                    <i class="fas fa-clock me-1"></i>${resource.duration}
                </small>
            </div>
        </div>
    `).join('');
}

// Course Detail Functions
function showCourseDetail(courseId) {
    currentCourse = courses.find(c => c.id === courseId);
    if (!currentCourse) return;

    // Populate course details
    document.getElementById('courseTitle').textContent = currentCourse.title;
    document.getElementById('courseDescription').textContent = currentCourse.description;
    document.getElementById('instructorName').textContent = currentCourse.instructor;
    document.getElementById('instructorTitle').textContent = currentCourse.instructorTitle;
    document.getElementById('instructorAvatar').textContent = currentCourse.instructor.split(' ')[1]?.charAt(0) || 'I';
    document.getElementById('courseDuration').textContent = currentCourse.duration;
    document.getElementById('courseLessons').textContent = `${currentCourse.lessons} lessons`;
    document.getElementById('courseLevel').textContent = currentCourse.level;
    document.getElementById('coursePrice').textContent = `${currentCourse.price}`;
    document.getElementById('courseRating').textContent = '★'.repeat(Math.floor(currentCourse.rating)) + '☆'.repeat(5-Math.floor(currentCourse.rating));
    document.getElementById('ratingCount').textContent = `(${currentCourse.ratingCount} reviews)`;

    // Load lessons
    loadLessons();
    
    showPage('courseDetail');
}

function loadLessons() {
    const container = document.getElementById('lessonList');
    if (!container || !currentCourse || !currentCourse.lessonList) return;

    container.innerHTML = currentCourse.lessonList.map((lesson, index) => `
        <div class="lesson-item ${lesson.completed ? 'completed' : ''}" onclick="playLesson(${index})">
            <div class="d-flex justify-content-between align-items-center p-3">
                <div>
                    <h6 class="mb-1">${lesson.title}</h6>
                    <small class="text-muted">
                        <i class="fas fa-play-circle me-1"></i>${lesson.duration}
                        ${lesson.completed ? '<i class="fas fa-check-circle text-success ms-2"></i>Completed' : ''}
                    </small>
                </div>
                <i class="fas fa-${lesson.completed ? 'check' : 'play'} ${lesson.completed ? 'text-success' : 'text-primary'}"></i>
            </div>
        </div>
    `).join('');
}

function playLesson(lessonIndex) {
    if (!currentUser) {
        showAlert('Please log in to access course content.', 'warning');
        showLoginModal();
        return;
    }

    const isEnrolled = userCourses.some(uc => uc.courseId === currentCourse.id);
    if (!isEnrolled) {
        showAlert('Please enroll in this course to access lessons.', 'warning');
        return;
    }

    // Mark lesson as completed
    if (currentCourse.lessonList[lessonIndex]) {
        currentCourse.lessonList[lessonIndex].completed = true;
    }
    
    // Update user progress
    const userCourse = userCourses.find(uc => uc.courseId === currentCourse.id);
    if (userCourse) {
        const completedLessons = currentCourse.lessonList.filter(l => l.completed).length;
        userCourse.progress = Math.round((completedLessons / currentCourse.lessonList.length) * 100);
    }

    loadLessons();
    showAlert(`Now playing: ${currentCourse.lessonList[lessonIndex].title}`, 'success');
}

function playPreview() {
    showAlert('Course preview would play here. Sign up to access full content!', 'info');
}

// Purchase Functions
function purchaseCourse() {
    if (!currentUser) {
        showAlert('Please log in to purchase courses.', 'warning');
        showLoginModal();
        return;
    }

    const isEnrolled = userCourses.some(uc => uc.courseId === currentCourse.id);
    if (isEnrolled) {
        showAlert('You are already enrolled in this course!', 'info');
        return;
    }

    // Calculate totals
    const price = currentCourse.price;
    const gst = Math.round(price * 0.1);
    const total = price + gst;

    document.getElementById('paymentCourseTitle').textContent = currentCourse.title;
    document.getElementById('paymentCoursePrice').textContent = `${price}`;
    document.getElementById('paymentGst').textContent = `${gst}`;
    document.getElementById('paymentTotal').textContent = `${total}`;
    
    new bootstrap.Modal(document.getElementById('paymentModal')).show();
}

function processPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const cardName = document.getElementById('cardName').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    
    if (!cardNumber || !cardName || !expiry || !cvv) {
        showAlert('Please fill in all payment fields.', 'danger');
        return;
    }

    // Add course to user's enrolled courses
    userCourses.push({
        courseId: currentCourse.id,
        enrolledDate: new Date().toISOString(),
        progress: 0
    });
    
    // Close payment modal
    bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
    
    showAlert('Course purchased successfully! Welcome to your learning journey.', 'success');
    
    // Refresh page to show enrolled state
    showCourseDetail(currentCourse.id);
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
        container.innerHTML = '<div class="col-12"><div class="text-center py-4"><i class="fas fa-graduation-cap fa-3x text-muted mb-3"></i><p class="text-muted">No courses in progress. <a href="#" onclick="showPage(\'courses\')" class="text-primary">Start learning today!</a></p></div></div>';
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
        container.innerHTML = '<div class="col-12"><div class="text-center py-4"><i class="fas fa-book-open fa-3x text-muted mb-3"></i><p class="text-muted">No courses enrolled yet. <a href="#" onclick="showPage(\'courses\')" class="text-primary">Browse our professional courses</a> to get started!</p></div></div>';
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
    // Remove existing alerts
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
    
    // Auto-dismiss after 5 seconds
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

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
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

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Initialize tooltips and popovers
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});