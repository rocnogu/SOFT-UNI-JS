function Repainting(input) {
  const protectiveNylon = 1.5;
  const paintPerLitter = 14.5;
  const thinnerPerLitter = 5;

  const extraPaintPercent = 0.1;
  const extraNylonPerMetter = 2;
  const bagPrice = 0.4;

  const nylon = Number(input[0]);
  const paint = Number(input[1]);
  const thinner = Number(input[2]);
  const hours = Number(input[3]);

  const nylonCost = (nylon + extraNylonPerMetter) * protectiveNylon;
  const painCost = (paint + paint * extraPaintPercent) * paintPerLitter;
  const thinnerCost = thinner * thinnerPerLitter;
  const materialCost = nylonCost + painCost + thinnerCost + bagPrice;

  const WorkCostPerHour = materialCost * 0.3;
  const totalWorkCost = hours * WorkCostPerHour;
  const totalCost = totalWorkCost + materialCost;

  console.log(totalCost);
}
