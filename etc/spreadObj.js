const person = {
    id: 1,
    name: "김태현",
    age: 25,
    address: {
        city: "서울",
        postalCode: "12345",
        street: '영운동 1-2'
    },
    contact: {
        email: "kk@1234@gmail.com",
        phone: "010-1234-5678"
    }
};

const additionInfo = {
    hobbies: ['독서', '운동'],
    age: 26,
    contact: {
        email: 'bb@0812@naver.com'
    }
};

person.address.country = '대한민국';

const updatedContact = { ...person.contact, ...additionInfo.contact };

// 최종 객체 생성
const updatedPerson = { ...person, age: additionInfo.age, hobbies: additionInfo.hobbies, contact: updatedContact };

console.log(updatedPerson);