const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


const bonusInfo = [];

function makeInfo(){
  const finishedBonus = {
    name:'',
    percent:'',
    totalCompensation:'',
    totalBonus:'',
  }
  return finishedBonus;
}

function calculateBonus(info){
  for(let i = 0; i < info.length; i++){
    let employee = info[i];
    if(info.reviewRating == 5){
      return true;
    } else {
      return false;
    }



    const processedBonus = makeInfo();
    bonusInfo.push(processedBonus);
  }
}

calculateBonus(employees);
console.log(bonusInfo);

// for (let i = 0; i < employees.length; i++) {
//   let employee = employees[i];
//   bonusPercent(employee);
//   console.log(employee);
// }


// function bonusPercent(contents){






  // const name = contents.name;
  // const employeeNumber = contents.employeeNumber;
  // const annualSalary = contents.annualSalary;
  // const reviewRating = contents.reviewRating;
  
//   if(reviewRating = 5){
//     console.log('10%');
//   }else if(reviewRating = 4){
//   console.log('6%');       
//   }else if(reviewRating = 3){
//   console.log('4%');return '4%';
//   }else if(reviewRating <= 2){
//   console.log('0%');
//   }
// }
// // const = newObject [

//     name: employees.name
//     employeeNumber: 
//     annualSalary: 
//     reviewRating:
  // ,

// function employeeBonus(employee){
//   const twoBonus = employeeBonus.annualSalary * 0;
//   const threeBonus = employees.annualSalary * .04;
//   const fourBonus = employees.annualSalary * .06;
//   const fiveBonus = employees.annualSalary * .10;

//   if(employee.reviewRating = 5){
//     employee.annualSalary = employee.annualSalary * .1;
//   } else{
//     console.log('naaaaaah brah');
//   }

//   console.log(employeeBonus(employees));

// }





// SCOTT WROTE BELOW
// //
// for (let i = 0; i < employees.length; i++) {
//   let employee = employees[i];
//   employeeBonus(employee);
// }