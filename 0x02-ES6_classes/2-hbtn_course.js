export default class HolbertonCourse {
 constructor (name, length, students) {
   this.name = name;
   this.length = length;
   this.students = students;
 } 

   get name() {
        return this._name;
    }
   get length() {
        return this._length;
    }
    get students() {
        return this._students;
    } 
    set name(name) {
        name = name.trim();
        if (typeof name != 'string' && name === '') {
            throw 'The name must be a string and cannot be empty';
        }
        this._name = name;
    }
}
    set length(length) {
        if (typeof length != 'number' && length === '') {
            throw 'The name must be a number and cannot be empty';
        }
        this._length = length;
    }
}
    set students(students) {
        students = students.trim();
        if (Array.isArray(students) && students.every((s) => typeof s === 'string' && students != '') {
           this._students = students;
        }
        throw 'The name cannot be empty';  
    }
}
