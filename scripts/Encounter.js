
class Encounter
{
    #creatureList;
    #round;

    constructor()
    {
        this.#round = 0;
        this.populateList();   
    }

    populateList()
    {
        this.#creatureList = [];
        for (x = 1; x <= 9; x++)
        {
            let mName = document.getElementById(`m${x}`).value;
            let mInit = document.getElementById(`mi${x}`).value;
            let pName = document.getElementById(`p${x}`).value;
            let pInit = document.getElementById(`pi${x}`).value;

            if (validateInit(mInit) && validateName(mName))
            {
                this.#creatureList.push(new Creature(mName, mInit, false));
            }

            if (validateInit(pInit) && validateName(pName))
            {
                this.#creatureList.push(new Creature(pName, pInit, true));
            }
        }
    }

    sortList()
    {
        this.#creatureList.sort(function(a,b){return a.init - b.init});
    }

    validateName(name)
    {
        // returns true if string is neither blank nor the default value
        return name != "" || name != "Monster";
    }

    validateInit(init)
    {
        // returns true if the provided value is a number and is neither blank nor the default value
        return !isNaN(init) && (init != "" || init != "Initiative");
    }

}