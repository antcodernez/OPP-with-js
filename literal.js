// Trabajar con objetos literales no lo hace de manera escalable
class learningPath {
    constructor ({
        courses = [],
        name,
        school = null,
        teachers = [],
        added = false,
    }) {
        this.courses = courses;
        this.name = name;
        this.school = school;
        this.teachers = teachers;
        this.added = added;
        this.numberOfCourses = courses.length;
    }

    addCourse (course) {
        this.courses.push(course);
    }

    removeCourse(courseToRemove) {
        let indice = this.courses.indexOf(courseToRemove);
        if (indice > -1) 
            {
                this.courses.splice(indice, 1);
            }
    }
    addTeacher (teacher) {
        this.teachers.push(teacher);
    }   
    removeTeacher(teachers) {
        const newArrayTeachers = this.teachers.filter(teacher => teacher !== teachers);
        this.teachers = newArrayTeachers;
    }
    addRoute () {
        this.added = true
    }
    removeRoute () {
        this.added = false
    }
}


const People = {
    name: "Jesús",
    username: "pussysDestroyer2001",
    points: 1200,
    socialMedia: {
        twitter: "scriptor",
        youtube: "scriptor",
        tiktok: "scriptor"
    },
    approvedCourses: [
        "Curso de hacking extremo",
        "Curso de html y css",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses : [
                "Curso de html y css",
                "Curso de html y css práctico",
            ]
        },
        {
            name: "Escuela de marketing",
            courses : [
                "Curso de introduccion al marketing",
                "Curso de psicología del consumidor",
            ]
        },
    ]
}

const People2 = {
    name: "Ana",
    username: "animon",
    points: 12000,
    socialMedia: {
        twitter: "animmon",
        youtube: "animmon",
        tiktok: "animmon"
    },
    approvedCourses: [
        "Curso de introduccion a la ai",
        "Curso de python",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses : [
                "Curso de html y css",
                "Curso de html y css práctico",
            ]
        },
        {
            name: "Escuela de AI y data science",
            courses : [
                "Curso de introduccion a la AI",
                "Curso de BI",
            ]
        },
    ]
}


//Trabajando con clases

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined, 
        tiktok = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = []
    })
        {
            this.name = name;
            this.email = email;
            this.username = username;
            this.socialMedia = {
                twitter,
                tiktok,
                instagram
            };
            this.approvedCourses = approvedCourses;
            this.learningPaths = learningPaths;
        }
    addLearningPath(path) {
        this.learningPaths.push(path);
    }
}

const Jesus = new Student({
    name: "Jesús Antonio",
    username: "el_scriptor",
    email: "todasmias@gmail.com",
    tiktok: "scriptor",
})

Jesus.addLearningPath(new learningPath({
    name: "Writer Yisus",
    school: null,
}));

console.table(Jesus);