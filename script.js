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
  const taskName = document.getElementById('task-name');
  const addTodoButton = document.getElementById('add-todo');
  const todoListUl = document.getElementById('todo-list');

  /** YOUR CODE HERE */
  const input = taskName.value;
  addTodoButton.addEventListener('click', function() {
    if (input.trim !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = input;
      todoListUl.appendChild(newTask);
      taskName.value = '';
    } else {
      alert('Please enter a task!');
    }
  })

};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const message = document.getElementById('message');

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
