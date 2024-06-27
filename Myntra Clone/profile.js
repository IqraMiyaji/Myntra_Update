document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const profileButton = document.getElementById('profileButton');
    const closeButtons = document.querySelectorAll('.close');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    // Show login modal on profile button click
    profileButton.onclick = function () {
        loginModal.style.display = 'block';
    };

    closeButtons.forEach(button => {
        button.onclick = function () {
            button.closest('.modal').style.display = 'none';
        };
    });
    // Show signup modal when clicking on sign up link
    showSignupLink.onclick = function (e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    };

    // Show signup modal when clicking on sign up link
    showSignupLink.onclick = function (e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    };

    // Show login modal when clicking on login link
    showLoginLink.onclick = function (e) {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    };

    // Close modal if user clicks outside of it
    window.onclick = function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    };
});
// document.getElementById('signupForm').addEventListener('submit', async (event) => {
    // event.preventDefault();
    // 
    // const username = document.getElementById('signupUsername').value;
    // const email = document.getElementById('signupEmail').value;
    // const phone = document.getElementById('signupPhone').value;
    // const password = document.getElementById('signupPassword').value;
    // const dob = document.getElementById('dob').value;
    // 
    // const response = await fetch('/signin', {
    //   method: 'POST',
    //   headers: {
        // 'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, email, phone, password, dob }),
    // });
    // 
    // const result = await response.json();
    // if (response.ok) {
    //   alert('User signed in successfully');
    // } else {
    //   alert('Error signing in user: ' + result.error);
    // }
//   });
 export const actions={
    default:async ({requst})=>{
        const data=Object.fromEntries(await requst.formdata());
          console.log(data);
    }
    }
