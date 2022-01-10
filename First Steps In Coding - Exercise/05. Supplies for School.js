function Supplies(input) {
  let penPackPrice = 5.8;
  let markerPackPrice = 7.2;
  let chemsLitterPrice = 1.2;

  let penPackNumber = Number(input[0]);
  let markerPackNumber = Number(input[1]);
  let chemsLitter = Number(input[2]);
  let reduction = Number(input[3]);

  let pensPrice = penPackNumber * penPackPrice;
  let markersPrice = markerPackNumber * markerPackPrice;
  let chemsPrice = chemsLitter * chemsLitterPrice;

  let priceBeforeReduction = pensPrice + markersPrice + chemsPrice;
  let reductionPercent = reduction / 100;

  let reductedPrice =
    priceBeforeReduction - priceBeforeReduction * reductionPercent;
  console.log(reductedPrice);
}
