function World(input) {
  const length = Number(input[0]);
  const width = Number(input[1]);
  const height = Number(input[2]);
  const percentage = Number(input[3] / 100);

  const volume = length * width * height;
  const percentageMinus = volume * percentage;
  const litersOfWater = (volume - percentageMinus) / 1000;
  console.log(litersOfWater);
}
