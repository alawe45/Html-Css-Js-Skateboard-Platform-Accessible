// Select (open menu) button
const openMenuButton = document.querySelector('#openMenuBtn');

// Select (sidebar area)
const sidebarArea = document.querySelector('#sidebarArea');

// Select Main Area
const mainArea = document.querySelector('#main');

// Select all (visually-hidden--extra) classes
const allVHExtraElements = Array.from(sidebarArea.querySelectorAll('.visually-hidden--extra'));

// Array with all the focusable elements names
const focusableList = [
  'a[href]',
  'button',
  'details',
  'input',
  'iframe',
  'select',
  'textarea'
];

// Select all the focusable mainArea elements
const focusableElements = Array.from(mainArea.querySelectorAll(focusableList));

const sidebarOverlay = document.querySelector('.sidebar__overlay');

// Whne (openMenuButton) button has (click) event
openMenuButton.addEventListener('click', () => {
  // Check if (openMenuButton) (aria-expanded) attribute is (false)
  if(openMenuButton.getAttribute('aria-expanded') == 'false') {
    // Call function
    openMenu();
  }else { // Else
    // Call function
    closeMenu();
  }
});

// Whne (sidebarOverlay) has (click) event
sidebarOverlay.addEventListener('click', () => {
  // Call function
  closeMenu();
});

// Open Menu Function
function openMenu() {
  // Set (aria-expanded) attribute to (true)
  openMenuButton.setAttribute('aria-expanded', 'true');
  // Call function
  preventFocus('-1');
  
  // Toggle class (toggle-menu--active) on (openMenuButton)
  openMenuButton.classList.toggle('toggle-menu--active');
  // Toggle class (sidebar--open) on sidebarArea
  sidebarArea.classList.toggle('sidebar--open');
  // Toggle class (no-scroll) on body
  document.body.classList.toggle('no-scroll');
  // Call function
  removeVHExtraClass();
}

// Close Menu Function
function closeMenu() {
  // Set (aria-expanded) attribute to (false)
  openMenuButton.setAttribute('aria-expanded', 'false');
  // Call function
  preventFocus('1');

  // Remove class (toggle-menu--active) from (openMenuButton)
  openMenuButton.classList.remove('toggle-menu--active');
  // Remove class (sidebar--open) from sidebarArea
  sidebarArea.classList.remove('sidebar--open');
  // Reomve class (no-scroll) from body
  document.body.classList.remove('no-scroll');
  // Call function
  removeVHExtraClass();
};

// Remove all (visually-hidden--extra) classes Function
function removeVHExtraClass() {
  // Loop On all the allVHExtraElements
  for(let i = 0; i < allVHExtraElements.length; i++) {
    // If (sidebarArea) contains class (sidebar--open)
    if(sidebarArea.classList.contains('sidebar--open')) {
      // Remove (visually-hidden--extra) class
      allVHExtraElements[i].classList.remove('visually-hidden--extra');
    }else { // Else
      // Add (visually-hidden--extra) class
      allVHExtraElements[i].classList.add('visually-hidden--extra');
    };
  };
};

// Prevent focusable mainArea elements from focus Function
function preventFocus(status) {
  // Loop on all the focusableElements
  focusableElements.forEach(ele => {
    // If The (status) value is (-1)
    if(status == '-1') {
      // Set (tabindex) attribute
      ele.setAttribute('tabindex', '-1');
    }else { // Else
      // Set (tabindex) attribute
      ele.setAttribute('tabindex', '1');
    };
  });
};