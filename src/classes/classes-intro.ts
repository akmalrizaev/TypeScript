// const date = new Date();

// console.log(date.getTime());

class Course {
  // private title: string;
  // private subtitle: string;
  // private creationDt: Date;

  static TOTAL_COURSE = 0;

  static readonly TYPESCRIPT_TITLE = 'Typescript Bootcamp';

  constructor(
    private _title: string,
    private price: number,
    private subtitle: string,
    private creationDt: Date
  ) {
    // this.title = title;
    // this.subtitle = subtitle;
    // this.creationDt = creationDt;

    this.validate();
    Course.TOTAL_COURSE++;
  }

  validate() {
    console.log('Called Course validation()');

    if (this.price <= 0) {
      throw 'Price must be larger than zero';
    }
  }

  changeTitle() {
    this.title = '';
  }

  static printTitle(course: Course) {
    console.log(`The title of the course ${course.title}`);
  }

  get age() {
    const ageInMs = new Date().getTime() - this.creationDt.getTime();
    return Math.round(ageInMs / 1000 / 60 / 24); // age in days
  }

  get title() {
    return this._title;
  }

  set title(newTitle: string) {
    if (!newTitle) {
      throw 'Title cannot be empty';
    }
    this._title = newTitle;
  }
}

class FreeCourse extends Course {
  constructor(
    title: string,
    subtitle: string,
    creationDt = new Date(2023, 1, 1)
  ) {
    super(title, 0, subtitle, creationDt);
  }

  validate() {
    console.log('Called FreeCourse validation()');
  }
}

const typescript = new Course(
  'Typesript Bootcamp',
  100,
  'Learn the language fundamentals',
  new Date(2020, 1, 1)
);

console.log(typescript.title);

console.log(Course.TYPESCRIPT_TITLE);

console.log(Course.TOTAL_COURSE);

const angular = new Course(
  'Angular Bootcamp',
  200,
  'Learn Angular Fundamentals',
  new Date(2022, 1, 1)
);

console.log(angular.title);

Course.printTitle(typescript);

const javascript = new FreeCourse(
  'Javascript Bootcamp',
  'Learn Javascript Fundamentals',
  new Date(2024, 1, 1)
);
