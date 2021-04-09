const rollDice = (size, number) => 
{
    // returns an array of numbers representing dice rolls
    rolls = []
    for (let x = 0; x < number; x++)
    {
        rolls.push(Math.floor((Math.random() * size) + 1));
    }
    return rolls;
}