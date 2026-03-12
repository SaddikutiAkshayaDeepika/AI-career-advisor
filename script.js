// Get DOM elements
const careerGoalSelect = document.getElementById('careerGoal');
const currentSkillsInput = document.getElementById('currentSkills');
const analyzeBtn = document.getElementById('analyzeBtn');
const resetBtn = document.getElementById('resetBtn');
const resultsSection = document.getElementById('results');

// Result display elements
const displayGoal = document.getElementById('displayGoal');
const foundSkillsDiv = document.getElementById('foundSkills');
const missingSkillsDiv = document.getElementById('missingSkills');
const internshipListDiv = document.getElementById('internshipList');
const roadmapListOl = document.getElementById('roadmapList');

// Event Listeners
analyzeBtn.addEventListener('click', analyzeProfile);
resetBtn.addEventListener('click', resetForm);

// Main Analysis Function
function analyzeProfile() {
    // Get user inputs
    const selectedCareer = careerGoalSelect.value;
    const userSkillsText = currentSkillsInput.value.trim();

    // Validation
    if (!selectedCareer) {
        alert('⚠️ Please select a career goal!');
        return;
    }

    if (!userSkillsText) {
        alert('⚠️ Please enter your current skills!');
        return;
    }

    // Process skills (convert to array and clean)
    const userSkills = userSkillsText
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);

    // Get career data
    const careerData = careerPaths[selectedCareer];
    const requiredSkills = careerData.requiredSkills;

    // Skill Gap Analysis
    const foundSkills = [];
    const missingSkills = [];

    requiredSkills.forEach(skill => {
        // Case-insensitive comparison
        const hasSkill = userSkills.some(
            userSkill => userSkill.toLowerCase() === skill.toLowerCase()
        );

        if (hasSkill) {
            foundSkills.push(skill);
        } else {
            missingSkills.push(skill);
        }
    });

    // Display Results
    displayResults(selectedCareer, foundSkills, missingSkills, careerData);
}

// Display Results Function
function displayResults(career, found, missing, data) {
    // Show results section
    resultsSection.classList.remove('hidden');

    // Display career goal
    displayGoal.textContent = career;

    // Display found skills
    foundSkillsDiv.innerHTML = '';
    if (found.length > 0) {
        found.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            foundSkillsDiv.appendChild(skillTag);
        });
    } else {
        foundSkillsDiv.innerHTML = '<p style="color: #999;">No matching skills found. Time to start learning!</p>';
    }

    // Display missing skills
    missingSkillsDiv.innerHTML = '';
    if (missing.length > 0) {
        missing.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag missing';
            skillTag.textContent = skill;
            missingSkillsDiv.appendChild(skillTag);
        });
    } else {
        missingSkillsDiv.innerHTML = '<p style="color: #2e7d32; font-weight: 600;">🎉 Congratulations! You have all required skills!</p>';
    }

    // Display internships
    internshipListDiv.innerHTML = '';
    data.internships.forEach(internship => {
        const internshipItem = document.createElement('div');
        internshipItem.className = 'internship-item';
        internshipItem.innerHTML = `
            <h3>${internship.title}</h3>
            <p>${internship.description}</p>
        `;
        internshipListDiv.appendChild(internshipItem);
    });

    // Display roadmap
    roadmapListOl.innerHTML = '';
    data.roadmap.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        roadmapListOl.appendChild(li);
    });

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Reset Form Function
function resetForm() {
    careerGoalSelect.value = '';
    currentSkillsInput.value = '';
    resultsSection.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optional: Add enter key support for textarea
currentSkillsInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        analyzeProfile();
    }
});