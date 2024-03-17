// objeto literal 
const jesus = {
    name: "Antonio",
    age: 24,
    cursosAprobados: [
        "curso de html y css",
        "curso práctico de html y css",
    ],
    // passCourse: function () {
    //     Una forma de asignar un metodo a un objeto literal
    // }

    passCourse (newCourse)
        {
            this.cursosAprobados.push(newCourse);
        }
};
console.groupCollapsed("Objetos literales");
console.log(jesus);
jesus.cursosAprobados.push("Curso de responsive desing");
console.log(jesus); 
jesus.age = 34;
console.log(jesus.age);
jesus.passCourse("Introduccion a la IA");
console.log(jesus);
console.groupEnd();

// Prototipos

function Student(name, age, cursosAprobados) {
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados

    // this.aprobarCurso = function (newCourse) {
    //     Una manera de crear metodos en un prototipo   
    // }
}

console.groupCollapsed("Prototipos");

//Usando la herramienta prototype puedo asignar un metodo fuera del prototipo student 
Student.prototype.aprobarCurso = function (newCourse)
    {
        this.cursosAprobados.push(newCourse);
    }

const Juanita = new Student("Juanita", 19, ["hmtl y css", "ciberseguridad"]);

console.log(Juanita);

//Los metodos definidos en el prototipo se pueden observar dentro de la propiedad proto