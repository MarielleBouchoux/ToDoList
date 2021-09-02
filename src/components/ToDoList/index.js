// == Import npm
import React from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';

import tasksData from 'src/data/tasks';

// == Import
import './style.scss';

// on doit faire varier les données des tâches dans le temps ajout/suppression
// => il faut donc un state

class toDoList extends React.PureComponent {
  state = {
    tasks: tasksData,
    taskLabel: '',
  };

  // fonction qui sera en charge d'ajouter une tâche => modifier le state
  addTask = () => {
    const { tasks, taskLabel } = this.state;

    // récupère tous les id de nos tâches
    // indice: on veut transformer notre tableau de tâche en tableau d'id
    const ids = tasks.map((task) => task.id);
    // retourne le plus grand des ids
    const maxId = Math.max(...ids);

    // on commence par crééer une tâche en dure
    const newTask = {
      id: maxId + 1,
      label: taskLabel,
      done: false,
    };
  

    // regroupé en haut
    // const { tasks } = this.state;
    // const newTasks = [...tasks];
    // newTasks.push(newTask);
    // ou en plus simple
    // const newTasks = [...tasks, newTask];
    this.setState({
      // tasks: newTasks,
      // ou en 1 manip:
      tasks: [...tasks, newTask],
      taskLabel: '',
    });
  }

  // fonction en charge de modifier taskLabel du state
  setTaskLabel = (value) => {
    // console.log('je veux modifier taskLabel', value);
    this.setState({
      taskLabel: value,
    });
  }

  // pouvoir passer la checkbox de undone à done
  changeTaskDone = (taskId) => {
    // console.log('je veux changer la valeur de done de la tâche', taskId);
    const { tasks } = this.state;
    // l'astuce ici c'est de transformer le tableau et de changer uniquement
    // la tâche qui aura le même id que taskId
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // attention, on doit toujours travailler avec de nouvelles références
        // quand on change les valeurs : immutabilité
        // task.done = !task.done; => pas bon

        // on crée une nouvelle référence d'objet pour la tâche qu'on va modifier
        const newTask = {
          // on déverse les propriétés de la tâche courante
          ...task,
          // on précise la propriété de l'objet qu'on souhaite changer
          done: !task.done,
        };

        return newTask;
      }
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { tasks, taskLabel } = this.state;
    // eslint-disable-next-line arrow-body-style
    // const undoneTasks = tasks.filter((task) => {
    // on retourne une condition
    // si cette condition est true, l'élément courant sera inséré dans le nouveau tableau
    // return task.done === false;
    // });
    const undoneTasks = tasks.filter((task) => !task.done);

    return (
      <div className="todolist">
        <Form
          onFormSubmit={this.addTask}
          inputValue={taskLabel}
          onChangeInputValue={this.setTaskLabel}
        />
        <Counter taskQty={undoneTasks.length} />
        {/* React.createElement(List, {tasks: tasksData}) */}
        <List
          tasks={tasks}
          onChangeTaskDone={this.changeTaskDone}
        />
      </div>
    );
  }
}

// == Export
export default toDoList;
