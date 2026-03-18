  function displayTasks(tasks) {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            const statusLabel = task.completed ? '✅ Terminée' : '🕐 À faire';
            li.innerHTML = `
                <span>${task.text}</span>
                <span>${statusLabel}</span>
                <a href="tasks-détails.html?id=${task.id}">Voir détail →</a>
            `;
            taskList.appendChild(li);
        });
    }n