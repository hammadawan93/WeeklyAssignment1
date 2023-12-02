let countryName: string = "Pakistan";
let personAge: number = 14;

if (countryName == "Pakistan") {
  if (personAge >= 18) {
    console.log(`You are eligible to vote!`);
  } else {
    console.log(`Not eligible.Age must be 18+ to vote!`);
  }
} else {
  console.log(`Not eligible.You are not from Pakistan, you cannot vote!`);
}
