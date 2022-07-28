export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string' && name === '') {
      throw new TypeError('The name must be a string and cannot be empty');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number' && length === '') {
      throw new TypeError('The name must be a number and cannot be empty');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students) && students.every((s) => typeof s === 'string' && students !== '')) {
      this._students = students;
    }
    throw new TypeError('The name must be a string and  cannot be empty');
  }
}
