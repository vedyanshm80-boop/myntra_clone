const searchInput = document.querySelector('.search_input');
const searchContainer = document.querySelector('.search_bar');

searchInput.addEventListener('focus', () => {
    searchContainer.style.backgroundColor = '#fff';
    searchContainer.style.border = '1px solid #f5f5f6';
});

searchInput.addEventListener('blur', () => {
    searchContainer.style.backgroundColor = '#f5f5f6';
    searchContainer.style.border = 'none';
});

// 2. Responsive Navigation Logic
// If the screen is small, we can add a 'sticky' class to the header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 12px 0 rgba(0,0,0,.05)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 3. Dynamic Greeting (Nice touch for the 'Profile' section)
const profileName = document.querySelector('.action_name');
const hours = new Date().getHours();
if (hours < 12) {
    console.log("Good Morning! Ready to shop?");
}
