

class Greeter {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showGreeting() {
        console.log('From showGreeting funtion this.firstName:', this.firstName, 'this.lastName: ', this.lastName);
            const row2 = document.getElementById('r1c2');
 //           console.log('row2', row2, 'document', document);
            row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName
    }
    resetGreeting() {
        const row2 = document.getElementById('r1c2');
  //    console.log('row2', row2, 'document', document);
        row2.innerHTML = 'R1C2';
    }
}
//window.onload = () => {
    const greeter = new Greeter('James', 'Clark');
//}
