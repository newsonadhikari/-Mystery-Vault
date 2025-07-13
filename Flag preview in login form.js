// Flag preview in login form
const countrySelect = document.getElementById('country');
const flagPreview = document.getElementById('flag-preview');

countrySelect.addEventListener('change', () => {
  const selectedOption = countrySelect.options[countrySelect.selectedIndex];
  const flagUrl = selectedOption.getAttribute('data-flag');
  if (flagUrl) {
    flagPreview.src = flagUrl;
    flagPreview.style.display = 'inline-block';
  } else {
    flagPreview.style.display = 'none';
  }
});

// Login form handling
const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login-section');
const contentSection = document.getElementById('content-section');

const displayName = document.getElementById('display-name');
const displayCountry = document.getElementById('display-country');
const displayFlag = document.getElementById('display-flag');

const logoutBtn = document.getElementById('logout-btn');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const country = countrySelect.value;
  const gender = document.getElementById('gender').value;

  if (!username || !country || !gender) {
    alert('Please fill all fields!');
    return;
  }

  displayName.textContent = username;
  displayCountry.textContent = country.toUpperCase();
  const selectedOption = countrySelect.options[countrySelect.selectedIndex];
  displayFlag.src = selectedOption.getAttribute('data-flag');
  displayFlag.alt = country + " flag";

  loginSection.hidden = true;
  contentSection.hidden = false;
});

// Logout button
logoutBtn.addEventListener('click', () => {
  loginSection.hidden = false;
  contentSection.hidden = true;
  loginForm.reset();
  flagPreview.style.display = 'none';
  displayFlag.src = '';
});

// Content buttons and content display logic
const contentButtons = document.querySelectorAll('.content-btn');
const contentBoxes = document.querySelectorAll('.content-box');

contentButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons
    contentButtons.forEach(btn => btn.classList.remove('active'));
    // Hide all content boxes
    contentBoxes.forEach(box => box.hidden = true);

    // Show selected content
    const targetId = button.getAttribute('data-content');
    const targetBox = document.getElementById(targetId);
    if (targetBox) {
      targetBox.hidden = false;
      button.classList.add('active');
    }
  });
});
