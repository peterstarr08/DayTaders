const successfulTrade = "You did a successful trade";
const unsucessfulTrade = "You did a unsuccessful trade";

export function TradingCalculator(amountUsed, riskTaken, riskRatio, daysTraded, successProbability){
    let result = [];
    let breakdown = [];

    let profitMade = 0;
    for(let i = 1;i<=daysTraded;i++){
        let riskAmount = amountUsed*riskTaken;
        if(Math.random()<=successProbability){ // suucessful trading
            profitMade+=(riskAmount*riskRatio);
            breakdown.push(
                {
                    id: i,
                    status: successfulTrade,
                    profitLoss: `+${(riskAmount*riskRatio)}`,
                }
            );
        }
        else{                               //unsuccessful trading
            profitMade-=riskAmount;
            breakdown.push(
                {
                    id: i,
                    status: unsucessfulTrade,
                    profitLoss: `-${riskAmount}`,
                }
            );
        }
    }

    const ROI = (profitMade)/amountUsed*100.0;

    result.push(profitMade);
    result.push(ROI);
    result.push(breakdown); //appending breadkdown days wise

    return result;
}