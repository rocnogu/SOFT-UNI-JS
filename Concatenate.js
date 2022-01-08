function Concatenate2(input) {
  let name = input[0];
  let gender = input[1];
  let age = input[2];
  let town = input[3];

  console.log(`You are ${name} , a ${age}-years old ${gender} from ${town}.`);
}

Concatenate2(["rocnogu", "man", 39, "varna"]);

function Concatenate(input) {
  let firstName = input[0];
  let lastName = input[1];
  let age = input[2];
  let town = input[3];

  console.log(
    `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
  );
}
