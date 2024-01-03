//spread operatör; dizileirn ve oble kalıplarının dağıtılması ,yayılması...
//array örneği

let numbers = [1, 2, 3, 4];
let newNumbers= [...numbers]

//numbers.push(5);    //modern teknik


console.log(newNumbers);


let newNumbers2= [...numbers,5]  //sonuna ekler
console.log(newNumbers2);

let newNumbers3= [5,...numbers]   //başına ekler
console.log(newNumbers3);

//Object örneği

const user = {
    name: "Yunus",
    surname: "Karaca"
};

const newUser = {
    ...user,   //user kısmının özelliklerini de aldı
    age: 25
};

console.log("newUser", newUser)
