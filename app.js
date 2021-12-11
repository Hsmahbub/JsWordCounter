// // // concept of js class

// class Car {
//         constructor(name, year){
//                 this.name = name;
//                 this.year   = year;
//         }
// // class method 

//         play( mahbub){
//                 let date = new Date();
//                 return `My ${this.name} car is ${date.getFullYear() - this.year} years old ${mahbub}`;
//         }
// }

// const Car1 = new Car("Toyota", 2017);

// const Car2 = new Car("BMW", 2019);

// const Car3 = new Car ("Suzuki", 2008);

// console.log(Car1.play(50));

// console.log(Car2.play());

// console.log(Car3.play());



// // JavaScritp Problem solving

// function matchesAndIndex(index) {
//         let sentence = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sint quibusdam ea enim modi reiciendis labore explicabo, architecto quis blanditiis suscipit, illum voluptatibus doloremque dolor similique est, quae nostrum amet sit. Reiciendis, magni dolorum temporibus necessitatibus pariatur quae aliquam voluptatem harum praesentium Dolor culpa? Laborum possimus perspiciatis nostrum obcaecati quos quod, totam pariatur impedit at recusandae voluptatem magnam eligendi mollitia quidem nesciunt nemo dolor officiis vel, excepturi deleniti reiciendis. Doloremque impedit itaque tenetur sit cumque, quam esse? Saepe dolorem eligendi deleniti molestiae commodi quibusdam quaerat veniam, magnam repellendus, obcaecati iure voluptates rerum quod facere quidem modi cupiditate voluptas quo dolor.";

//          let reg = new RegExp(index,"gi",);
//                 let  matches = sentence.match(reg);
//                 matches = matches ? matches : "text was not found";
//                 console.log(matches)
//                 const  occurence = matches ? matches.length : "Match was Not found";
//                 console.log(occurence);
                
//                let Position = sentence.search(reg);
//                Position = Position >= 0 ? Position : "Position was not found";
//                   console.log(Position);
        
      
// }
// let input = "d"
// matchesAndIndex(input);


// //Problem Number 2
// const arrays = ["a", 'b', 'b', 'd', 'c'];
// function linearSearch(a, val) {
//         const arLength = a.length;
//         for (let i = 0; i < arLength; i++) {
//                 if (a[i] === val) {
//                      return i + 1;   
//                 }
                
//         }
//         return "not found";
// }
//  console.log(linearSearch(arrays,'a'));

// //Problem Number 3
// const persName = ['Mahbub', 'Habib', 'Jahan', 'Alim'];
// console.log(persName);
// document.write(persName)
// console.log(persName.toString());

// const myArray = [];
// let i = 0;
// while(5 < i){
//   myArray.push(i);
//   i++;

// }
//myArray.sort(function(a, b){return (a - b)}).reverse();
// console.log(myArray);

let text = document.getElementById('text');
const submit = document.getElementById('submit');
const result = document.getElementById('result')
const result2 = document.getElementById('result2')
const inputedText = document.getElementById('inputedText')




submit.addEventListener('click', (d) =>{
  d.preventDefault;
  
  let textL = '';
  let newText = text.value += textL
  let textCheck = newText.replace(/\s+/g, '')
  let count = 0;
  if (textCheck === '') {
    alert('Hey man! I am not a stupid.Please enter some text');
  }else{
    

     
     for(let i = 0; i < newText.length; i++){
       let newTextF = newText.replace(/\s+/g, ' ').trim();
      if(newTextF[i] == ' '){
      count ++;
        
      }
      inputedText.innerHTML = newText;
      result2.innerHTML = newText.length;
      result.innerHTML = count + 1;
      text.value = ''
     }
  }
})
