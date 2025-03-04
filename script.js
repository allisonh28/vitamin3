/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = getElementById('sidebar-button');
  const sidebar = getElementById('sidebar');

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener('click', function() {
    sidebar.classList.toggle('aside.opened');
    const sidebarIsOpen = sidebar.classList.contains('aside.opened');

    if (sidebarIsOpen) {
      // Close the sidebar
      /** YOUR CODE HERE */
    sidebarButton.textContent = '‹';
    } else {
      // Open the sidebar
      /** YOUR CODE HERE */
      sidebarButton.textContent = '›';
      }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = __YOUR_CODE_HERE__;
  const addTodoButton = __YOUR_CODE_HERE__;
  const todoListUl = __YOUR_CODE_HERE__;

  /** YOUR CODE HERE */

};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = __YOUR_CODE_HERE__;
  const lastNameInput = __YOUR_CODE_HERE__;
  const message = __YOUR_CODE_HERE__;

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    /** YOUR CODE HERE */

  };

  /** YOUR CODE HERE */

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
