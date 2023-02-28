

const form = document.querySelector('.new-task-form');
const input = document.querySelector('.new-task-input');
const listElement = document.querySelector('.tasks');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = input.value;
  if (!task) {
    alert('Add some ToDo item.');
    return;
  }

  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  taskElement.classList.add('task__active');

  const taskElementContent = document.createElement('div');
  taskElementContent.classList.add('task__content');

  const taskElementInput = document.createElement('input');
  taskElementInput.classList.add('text');
  taskElementInput.type = 'text';
  taskElementInput.value = task;
  taskElementInput.setAttribute('readonly', 'readonly');

  const taskElementActions = document.createElement('div');
  taskElementActions.classList.add('actions');

  const taskElementEdit = document.createElement('button');
  taskElementEdit.addEventListener('click', () => {
    if (taskElementEdit.innerHTML == '<i class="uil uil-pen"></i>') {
      taskElementInput.removeAttribute('readonly');
      taskElementInput.focus();
      taskElementEdit.innerHTML = '<i class="uil uil-check"></i>';
    } else {
      taskElementInput.setAttribute('readonly', 'readonly');
      taskElementEdit.innerHTML = '<i class="uil uil-pen"></i>';
    }
  });

  const taskElementDelete = document.createElement('button');
  taskElementDelete.addEventListener('click', () => {
    
  });

  taskElementEdit.classList.add('edit');
  taskElementEdit.innerHTML = '<i class="uil uil-pen"></i>';
  taskElementDelete.classList.add('delete');
  taskElementDelete.innerHTML = '<i class="uil uil-trash-alt"></i>';

  taskElementDelete.addEventListener('click', (e) => {
    listElement.removeChild(taskElement);
  });

  taskElement.appendChild(taskElementActions);
  taskElementActions.appendChild(taskElementEdit);
  taskElementActions.appendChild(taskElementDelete);
  listElement.appendChild(taskElement);
  taskElement.appendChild(taskElementContent);
  taskElementContent.appendChild(taskElementInput);

  input.value = '';
});

const burgerMenu = document.querySelector('.burger-menu');
const burgerNavigation = document.querySelector('.burger-nav');
const burgerNavigationButton = document.querySelector('.burger-nav__button');


burgerMenu.addEventListener('click', (e) => {
  burgerNavigation.classList.toggle('burger-nav__active');
  burgerMenu.classList.toggle('burger-menu__active');
  burgerNavigationButton.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu__active');
    burgerNavigation.classList.remove('burger-nav__active');
    const taskElements = document.querySelectorAll('.task');
    taskElements.forEach((el) => {
      el.remove();
    });
  });
});
