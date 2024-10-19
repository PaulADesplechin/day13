document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('addTask');

    async function getTasks() {
        try {
            const response = await fetch('https://api.example.com/tasks');
            const tasks = await response.json();
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.name;
                taskList.appendChild(li);
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des tâches:', error);
        }
    }

    addTaskButton.addEventListener('click', async () => {
        const newTask = newTaskInput.value;

        if (newTask.trim() === '') {
            alert('Le nom de la tâche ne peut pas être vide.');
            return;
        }

        try {
            const response = await fetch('https://api.example.com/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newTask })
            });

            if (response.ok) {
                getTasks();
            } else {
                console.error('Erreur lors de l\'ajout de la tâche.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la tâche:', error);
        }
    });

    getTasks();
});
