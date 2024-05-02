{
  // Type Alias in Objec
  type Student = {
    name: string;
    roll: number;
    age: number;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "Mezba",
    roll: 1,
    age: 40,
    contactNo: "017929343232",
    address: "CTG",
  };

  const student2: Student = {
    name: "Mir",
    roll: 2,
    age: 33,
    address: "DHA",
  };

  // Type Alias in Function

  type Add = (num1: number, num2: number) => number;

  const addNumber: Add = (num1, num2) => num1 + num2;

  type Name = string;
  type Email = string;
  const name: Name = "Azad Hossain";
  const email: Email = "azadhossain@gmail.com";
}
