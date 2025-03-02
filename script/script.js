// alert()
// task page a jawar jonno

document.getElementById('another_page').addEventListener('click', function(){
    window.location.href="taskmeeter.html"
})


// current-date  part

const currentDate = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayName = days[currentDate.getDay()];
const monthName = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
document.getElementById('current-date').innerText= `${dayName}, ${monthName} ${date}, ${year}
`;


// theme part change dynamically


const changeButton = document.getElementById('change-bg');
changeButton.addEventListener('click',function(){
    const body = document.body;
    const colors = ['#f0f8ff', '#ffebcd', '#8a2be2', '#a52a2a', '#5f9ea0', '#d2691e', '#ff7f50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor
})



// disable button and complete task



    const completedButtons = document.querySelectorAll('.btn-completed'); 
    const taskCountElement = document.getElementById('taskA'); 
    const navbarCountElement = document.querySelector('#count'); 
    const activityLogContainer = document.getElementById('activityLogContainer'); 
    const clearHistoryButton = document.querySelector('.bg-white.rounded .btn-primary'); 
    let completedTaskCount = 0;
    const totalTasks = completedButtons.length;
    completedButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const taskName = button.parentElement.parentElement.querySelector('h2').textContent;
            const confirmCompletion = confirm(`Are you sure you want to mark "${taskName}" as completed?`);

            
            if (confirmCompletion) {
                
                button.disabled = true;

                
                let taskCount = parseInt(taskCountElement.textContent);
                taskCountElement.textContent = taskCount - 1;

                
                let navbarCount = parseInt(navbarCountElement.textContent.trim());
                navbarCountElement.textContent = ` ${navbarCount + 1} `;

                
                const now = new Date();
                const timeString = now.toLocaleTimeString();
                const logEntry = document.createElement('p');
                logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}`;
                 
                logEntry.classList.add('p-4', 'rounded-lg', 'border-green-500', 'shadow-lg', 'bg-gray-100', 'mb-2', 'text-lg', 'font-semibold')
                
                activityLogContainer.appendChild(logEntry);

                completedTaskCount++;
                if (completedTaskCount === totalTasks) {
                    alert('Congrats! You have completed all tasks! ');
                }
            }
        });
    });

    
    clearHistoryButton.addEventListener('click', function() {
        
        activityLogContainer.innerHTML = '';
    });
