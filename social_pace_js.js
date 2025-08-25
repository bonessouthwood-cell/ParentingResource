function filterCourses() {
    const ageFilter = document.getElementById('age-filter').value;
    const presentationFilter = document.getElementById('presentation-filter').value;
    const courseList = document.getElementById('course-list');
    const courses = courseList.getElementsByClassName('course-item');

    for (let course of courses) {
        const ageMatch = ageFilter === 'all' || course.textContent.includes(`Ages ${ageFilter.split('-')[0]}-${ageFilter.split('-')[1]}`);
        const presMatch = presentationFilter === 'all' || course.textContent.includes(presentationFilter);
        course.style.display = ageMatch && presMatch ? 'block' : 'none';
    }
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

// Placeholder login/signup/logout functions (update with API later)
function login() {
    showAlert('Login functionality will be added with backend integration.', 'info');
}

function signup() {
    showAlert('Signup functionality will be added with backend integration.', 'info');
}

function logout() {
    showAlert('Logout functionality will be added with backend integration.', 'info');
}