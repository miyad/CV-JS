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

/*! function(d, s, id) {
    var forcast = document.getElementById('forcast');
    forcast.addEventListener('click', () => {
        console.log("i am pressed");
        var js, fjs = d.getElementsByTagName(s)[0];
        setTimeout('', 4000);
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            var child = fjs.parentNode.insertBefore(js, fjs);

            // setTimeout(fjs.parentNode.insertBefore(js, fjs), 50);
        } else {
            let child = fjs.parentNode.insertBefore(js, fjs);
            fjs.parentNode.removeChild(child);
        }
    });

}(document, 'script', 'weatherwidget-io-js');*/
fetch('http://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=Jhenaidah&appid=c1eae7b765f5d42bb32f09ec0ab4f232')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        var one, two = data.weather[0];

        console.log(two.main);
        console.log(data.main.temp - 273);
        console.log(data.main.feels_like - 273);
        var w = document.getElementById('w');
        w.textContent = two.main;
        var tmp = document.getElementById('tmp');
        tmp.textContent = Math.round(data.main.temp - 273);
        var fl = document.getElementById('fl');
        fl.textContent = Math.round(data.main.feels_like - 273);
    })
var loc = document.getElementById('loc');
var locIcon = document.getElementById('locIcon');
var fcast = document.getElementById('forecast');
loc.addEventListener('click', () => {
    if (fcast.classList.contains("hidden")) {
        fcast.classList.remove("hidden");
        setTimeout(fade_out, 5000);
        //fcast.classList.add("hidden");

        function fade_out() {
            fcast.classList.add("hidden");
        }

    }
});
locIcon.addEventListener('click', () => {
    if (fcast.classList.contains("hidden")) {
        fcast.classList.remove("hidden");
        setTimeout(fade_out, 5000);
        //fcast.classList.add("hidden");

        function fade_out() {
            fcast.classList.add("hidden");
        }

    }
});