export const twoDecimalPlacesWithoutRound = (num: number): number => {
  if (num % 1 === 0) {
    return num;
  }
  const stringNum: string = num.toString();
  let finalNum: string = stringNum.slice(0, stringNum.indexOf('.') + 3);

  return Number(finalNum);
};

export const millisToSeconds = (millis: number): string => {
  const seconds = millis / 1000;
  return seconds.toFixed(3);
}

export function calculateRMSE(actual: any, forecast: any) {
  let sumSquaredError = 0;
  for (let i = 0; i < actual.length; i++) {
      sumSquaredError += Math.pow(actual[i] - forecast[i], 2);
  }
  const meanSquaredError = sumSquaredError / actual.length;
  const rmse = Math.sqrt(meanSquaredError);
  return rmse;
}

export function calculateMAPE(actual: any, forecast: any) {
  let sumPercentageError = 0;
  for (let i = 0; i < actual.length; i++) {
      sumPercentageError += Math.abs((actual[i] - forecast[i]) / actual[i]);
  }
  const mape = (sumPercentageError / actual.length) * 100;
  return mape;
}