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


export {
    learningPath
}