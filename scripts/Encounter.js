
class Encounter
{
    #creatureList;
    #initList;
    #round;
    #current;

    constructor()
    {
        this.#initList = document.getElementById("initList");
        this.#round = 0;
        this.populateList();
        this.#creatureList.sort(Creature.compare);
        console.log(this.#creatureList);
        this.#current = this.#creatureList[0];
        this.drawList();   
    }

    populateList()
    {
        this.#creatureList = [];
        this.clearList();
        for (let x = 1; x <= 8; x++)
        {
            let mName = document.getElementById("m" + `${x}`).value;
            let mInit = document.getElementById("mi" + `${x}`).value;
            let pName = document.getElementById("p" + `${x}`).value;
            let pInit = document.getElementById("pi" + `${x}`).value;

            if (this.validateInit(mInit) && this.validateName(mName))
            {
                this.#creatureList.push(new Creature(mName, mInit, false));
            }

            if (this.validateInit(pInit) && this.validateName(pName))
            {
                this.#creatureList.push(new Creature(pName, pInit, true));
            }
        }
        console.log(this.#creatureList);
    }

    drawList()
    {
        for (let i = 0; i < this.#creatureList.length; i++)
        {
            let t = this.#creatureList[i]
            if (this.#current === t)
            {
                this.#initList.innerHTML += "<li>" + `${t.toString()}` + "    <-- </li>";
            }
            else
            {
                this.#initList.innerHTML += "<li>" + `${t.toString()}` + "</li>";
            }
            
        }
    }

    clearList()
    {
        this.#initList.innerHTML = "";
    }

    validateName(name)
    {
        // returns true if string is neither blank nor a default value
        return name != "" || name != "Monster" || name != "Player";
    }

    validateInit(init)
    {
        // returns true if the provided value is a number and is neither blank nor the default value
        return !isNaN(init) && (init != "" || init != "Initiative");
    }

}