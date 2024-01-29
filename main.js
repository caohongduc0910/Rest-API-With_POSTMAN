
var courseAPI = "http://localhost:3000/courses"

function getCourses(callback){
    fetch(courseAPI)
        .then(function(data){
            return data.json()
        })
        .then(callback)
}

function createCourses(data, callback){
    var apiMethod = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        body: JSON.stringify(data)
    }
    fetch(courseAPI, apiMethod)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}


function renderCourses(courses) {
    // console.log(courses)
    var list = document.querySelector(".courses-list")
    console.log(list)
    var htmls = courses.map(function(course) {
        return `<li>
            <h2>${course.name}</h2>
            <p>${course.description}</p>
        </li>`;
    });
    list.innerHTML = htmls.join('')
}   

function handleCreateCourse() {
    var choice = document.querySelector('.btn')
    var name = document.querySelector('input[name="name"]').value
    var description = document.querySelector('input[name="description"]').value
    var data = {
        name: name,
        description: description,
    }
    choice.onclick = function(){
        createCourses(data, function(){
            getCourses(renderCourses)
        })
        alert('Them thanh cong')
    }
}

function start() {
    getCourses(renderCourses)
    handleCreateCourse()
}

start()
