// learning Function
// default Funciton
// Arrow Function

function add(num: number = 0, num2: number = 0): number {
  return num + num2;
}
const sum = add(3, 5);

const addArrow = (num: number = 0, num2: number = 0): number => num + num2;

// Object => Funciton => Method
const poorUser: {
  name: string;
  balance: number;
  addBalance: (balance: number) => string;
} = {
  name: "Mesbaul Abedin Persian",
  balance: 0,
  addBalance(balance: number): string {
    return `My New Balance is ${this.balance + balance}`;
  },
};

const sqNumber: number[] = [1, 3, 4, 5];
const squareNumber: number[] = sqNumber.map(
  (element: number): number => element * element
);
