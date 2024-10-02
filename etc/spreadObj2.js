// 1번 문제

const person = {
    name2: "Alice",
    age: 30,
    address: {
        city: "Seoul",
        zipCode: "12345"
    },
    hobbies: ["reading, traveling"],
};

const { name2, age, address } = person;

console.log(name2);
console.log(age);
console.log(address.city);

// 2번 문제

const personInfo = {
    name: "태현",
    age: 30,
    hobbies: ["프로그래밍", "유튜브 시청"],
};

const update = {
    age: 31,
    hobbies: ["책 읽기", "운동하기"],
};

let updatedContent = { ...personInfo, ...update };

console.log(updatedContent);

// 3번 문제

const employee = {
    firstName: "John",
    lastName: "Doe",
    contact: {
        phone: "123-456-7890",
        email: "john.doe@gmail.com",
    },
    position: "Developer",
}

const { firstName, lastName, contact: { phone } } = employee;

const extractPhoneNum = phone.split("-"); // phone.slice(-4)도 가능

console.log(firstName);
console.log(lastName);
console.log(extractPhoneNum[extractPhoneNum.length - 1])

