const taskList = {
  1: {
    id: 1,
    description: 'Go grocery shopping',
    completed: false,
  },
  2: {
    id: 2,
    description: 'Study for the exam',
    completed: true,
  },
  3: {
    id: 3,
    description: 'Prepare presentation for work',
    completed: false,
  },
};

// dado el obj anterior crear una función para poder crear una nueva tarea.
// Esta tarea tendrá que tener por defecto la propiedad "completed" false y es obligatorio
// que siempre se le pase una descripción válida (consideramos valido un string de más de un caracter)

function newTask(description) {
  if (description) {
    taskList['4'] = {
      id: 4,
      description: description,
      completed: false,
    };
  } else {
    console.log('Pon una descripción :(')
  }
}

newTask('Algo')
// console.log(taskList)

// dado el obj anteriro crear una función para poder obtener una tarea pasando su número (1, 2 ,3)

function getTask(id) {
  return taskList[id];
}

// console.log(getTask(3))
// console.log(getTask(2))

// crea una función para poder actualizar la descripción de una tarea.
// teniendo en cuenta que si la tarea está completada o no existe no debería de dejarnos editarla.

/**
 const taskList = {
  1: {
    id: 1,
    description: 'Go grocery shopping',
    completed: false,
  },
  2: {
    id: 2,
    description: 'Study for the exam',
    completed: true,
  },
  3: {
    id: 3,
    description: 'Prepare presentation for work',
    completed: false,
  },
};
 */
function updateTask(id, description) {
  // const task = getTask(id);
  const task = taskList[id];
  if (task !== undefined) {
    if (task.completed === false) {
      task.description = description
    }
  }
  // if (task !== undefined && task.completed === true) {
  //   task.description = description
  // }
}

updateTask(5, 'Lo que ponga aquí.');
console.log(taskList);