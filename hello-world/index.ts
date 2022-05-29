// // ANY
// let sales = 123_456_789;
// let course: string = 'TypeScript';
// let is_published = true;
// let level;
// // any - any type of value -> should be avoided

// function render (document: any) {
// // can change to function render (document: any) so it doesn't get confused lol
//     console.log(document);
// }

// // ARRAYS
// let numbers = [1, 2, 3];
// let numbers: number[] = []
// numbers[0] = 1;
// numbers[1] = '1';

// CODE COMPLETION:
// let numbers: number[] = []
// numbers.forEach(n => n.)

// TUPLES:
//1, 'Damian'
// let user: [number, string] = [1, 'Damian', 0]
// When there are 3 elements while two are specified, an error shows up
// Tak samo, jeśli pierwszy element jest stringiem, etc, wyskoczy error - są już specified więc tego się trzymamy
// let user: [number, string] = [1, 'Damian'];
// user[0]. -> Code completion dla number
// user[1]. -> Code completion dla string
// let user: [number, string, boolean, number] = [1, 'Damian', true, 0];
// Just try to keep it simple as in this case, there's too much values

// ENUMS: represents list of related constants
// const small = 1
// const medium = 2
// const large = 3
// Jeśli zdefiniuję Enum, nie muszę definiować tych trzech constants wyżej
// enum Size { Small, Medium, Large }
// Small = 0, Medium = 1, Large = 2
// Jeśli chcę zdefiniować value w jakiś konkretny sposób robię: Może być to string, liczba, itp
// enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium
// console.log(mySize);
// Po odpaleniu tsc; node dist/index.js; wartość wyświetlona to 2, czyli enum prawidłowo zadziałał, po zdefiniowaniu samej wartości Small
// Kod jednak był bardzo złożony. W tym wypadku można zdefiniować enum za pomocą const w celu zoptymalizowania go
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium
// console.log(mySize);

// FUNCTIONS:
// function calculateTax(income: number) {

// }
// Po najechaniu na kod, outcome value wskazuje void, więc nie ma outcome value
// function calculateTax(income: number) {
//     return 0
// }
// Kod w wyniku tego jako return podaje value jako number
// function calculateTax(income: number): number {
//     if (income < 50_000)
//         return income * 1.2;
//     return income * 1.3;
// }

// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
// calculateTax(10_000, 2023)
// Gdyby wpisać dodatkową wartość (więcej niż podane 2) javascript puściłby ten kod. Typescript jest bardzo strict, dlatego trzymamy się liczbie podanych argumentów
// Jeżeli nie zostanie podana wartość druga (w tym wypadku 2023 przy calculateTax), aby uniknąć problemu, nadajemy wartość defaultową dla taxYear = 2022

// OBJECTS
// let employee: {
//     readonly id: number,
//     name: string
// // po dodaniu ? przy name, ten value jest opcjonalny. Ale to bez sensu bo wychodzi nam pracownik bez imienia
// // aby pozbyć się linijki z employee.name = 'Damian'; zdefiniuję wartość name
//     retire: (date: Date) => void
//     } = {
//         id: 1, 
//         name: 'Damian',
//         retire: (date: Date) => {
//             console.log(date);
//         }
// }
// type Employee = {
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void
// }

// let employee: Employee = {
        
//             id: 1, 
//             name: 'Damian',
//             retire: (date: Date) => {
//                 console.log(date);
//             }

// UNION TYPES
// function kgToLbs(weight: number | string): number {
//     // Narrowing
//     if (typeof weight === 'number') 
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
//     }


// kgToLbs(10);
// kgToLbs('10kg');

// INTERSECTION TYPES
// let weight: number & string; //lets weight be number and string at the same time?
// type Draggable = { //Object that can be dragged on the screen
//     drag: () => void
// }

// type Resizable = {
//     resie: () => void
// }

// // We can add those to a new TYPE that combines these two
// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize () => {}
// }


// LITERAL TYPES - to limit values
// Literal (exact, specific)
// let quantity: 50 | 100 //so the quantity can be 50 or 100

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
// // literals don't have to be numbers
// type Metric = 'cm' | 'inch';

// NULLABLE TYPES:
// function greet(name: string | null | undefined) {
//     if (name)
//     console.log(name.toUpperCase());
//     else
//     console.log('Hola!')
// }

// greet(undefined);

// OPTIONAL CHAINING
// type Customer = {
//     birthday: Date
// }

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer (1);
// // if (customer !== null && customer !== undefined) zamiast tego tzw. Optional property access operator

//     console.log(customer?.birthday);