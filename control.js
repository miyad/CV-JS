var task_list = ['thesis', 'skill', 'edu', 'project1', 'project2', 'project3', 'project4', 'extra'];

task_list.forEach(element => {
    do_task(element);
});

function do_task(name) {

    var task = document.getElementById(name);
    var task_button_hide = document.getElementById(name + 'btnhide');
    var task_button = document.getElementById(name + 'btn');
    task_button.addEventListener('click', () => {
        task.classList.remove('hidden');
        task_button_hide.classList.remove('hidden');
        task_button.classList.add('hidden');
    });
    task_button_hide.addEventListener('click', () => {
        task.classList.add('hidden');
        task_button.classList.remove('hidden');
        task_button_hide.classList.add('hidden');
    });
}
console.log("hello world");