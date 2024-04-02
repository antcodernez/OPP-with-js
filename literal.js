// Trabajar con objetos literales no lo hace de manera escalable

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
}

const Jesus = new Student({
    name: "Jesús Antonio",
    username: "el_scriptor",
    email: "todasmias@gmail.com",
    tiktok: "scriptor",
})


console.table(Jesus);