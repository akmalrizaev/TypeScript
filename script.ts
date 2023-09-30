const firstName: string = 'Akmal';

const x: number = 5;

const isMarried: boolean = false;

const colors: string[] = ['red', 'green', 'blue'];

const numbers: number[] = [1, 2, 3, 4, 5];

let smth: any = 1;
console.log(smth);

smth = ['blac', 'white'];
console.log(smth);

smth = {
  name: 'bmw',
  color: 'black',
};
console.log(smth);

function logger(a: number): number {
  return a * 2;
}

console.log(name);

//Type

type CarType = {
  name: string;
  year?: string;
};

type BmwType = CarType & {
  color: string;
  extraBallon: boolean;
};

// Interface

interface ICar {
  name: string;
  year?: string;
}

interface IBmw extends ICar {
  color: string;
  extraBallon: boolean;
}

//Literal type

let car: 'bmw' = 'bmw';
