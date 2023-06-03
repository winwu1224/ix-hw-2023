class Task {
    constructor(name, done = false) {
      this.name = name;
      this.done = done;
    }
  
    static fromJSON(json) {
      return new Task(json.name, json.done);
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
      this.taskName = document.getElementById('task-input');
      this.tableBody = document.getElementById('table-body');
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (this.taskName.value == '') {
        return;
      }
  
      const task = new Task(this.taskName.value);
  
      this.tasks.push(task);
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
  
      this.taskName.value = '';
    }
  
    renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTaskTableRow(task) {
      const tr = document.createElement('tr');
  
      const tdTask = document.createElement('td');
      const tdStatus = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdTask.innerHTML = task.name;
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => this.onStatusChange(task));
  
      tdStatus.appendChild(checkbox);
  
      const deleteButton = document.createElement('button');
  
      deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () => this.onRemoveTaskClicked(task));
  
      tdActions.appendChild(deleteButton);
  
      tr.appendChild(tdTask);
      tr.appendChild(tdStatus);
      tr.appendChild(tdActions);
  
      return tr;
    }
  
    onStatusChange(task) {
      task.done = !task.done;
      this.saveTasksToLocalStorage();
    }
  
    onRemoveTaskClicked(task) {
      this.tasks = this.tasks.filter((x) => {
        return task.name !== x.name;
      });
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
    }
  
    saveTasksToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }
  
    loadTasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map((x) => Task.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();
  