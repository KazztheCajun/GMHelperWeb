let monsterList = [];
let playerList = [];
const initList = document.getElementById("initList");;

class Encounter
{
    #creatureList;
    #round;
    #current;

    constructor()
    {
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
        this.getFeildValues();
        monsterList.forEach(this.addCreature, this);
        playerList.forEach(this.addCreature, this);
        console.log(this.#creatureList);
    }

    addCreature = function(element)
    {
        console.log(element);
        this.#creatureList.push(element);
    }

    drawList()
    {
        for (let i = 0; i < this.#creatureList.length; i++)
        {
            let t = this.#creatureList[i]
            if (this.#current === t)
            {
                initList.innerHTML += "<li>" + `${t.toString()}` + "    <-- </li>";
            }
            else
            {
                initList.innerHTML += "<li>" + `${t.toString()}` + "</li>";
            }
            
        }
    }

    clearList()
    {
        initList.innerHTML = "";
    }

    getFeildValues()
    {
        for (let x = 0; x < 8; x++)
        {
            let m = this.buildCreature(document.getElementById("m" + `${x+1}`).value, document.getElementById("mi" + `${x+1}`).value, false);
            if (typeof m !== 'undefined')
            {
                monsterList[x] = m;
            }
            let p = this.buildCreature(document.getElementById("p" + `${x+1}`).value, document.getElementById("pi" + `${x+1}`).value, true);
            if (typeof p !== 'undefined')
            {
                playerList[x] = p; 
            }
        }
        console.log(monsterList);
        console.log(playerList);
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

    buildCreature(name, init, isPlayer)
    {
        if(this.validateInit(init) && this.validateName(name))
        {
            return new Creature(name, init, isPlayer);
        }
    }

}