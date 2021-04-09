let monsterList = [];
let playerList = [];
const initList = document.getElementById("initList");
const roundBox = document.getElementById("rounds");
const effectTargetList = document.getElementById("effectTargetDropdown");
const effectTargetBox = document.getElementById("effectTarget");
const effectTextBox = document.getElementById("effectText");
const effectDurationBox = document.getElementById("effectDuration");
const currentEffectList = document.getElementById("effectList");
const currentCreatureBox = document.getElementById("currentCreature");

class Encounter
{
    #creatureList;
    #round;
    #turn;
    #current;
    #inCombat;

    constructor()
    {
        this.#round = 0;
        this.#creatureList = [];
        this.getFeilds();
        this.#inCombat = false;
    }

    startCombat()
    {
        this.#round = 1;
        this.#turn = 0;
        this.populateList();
        this.#creatureList.sort(Creature.compareInit);
        this.#current = this.#creatureList[this.#turn];
        this.#inCombat = true;
        this.draw();
    }

    updateCombat()
    {
        if (this.#inCombat)
        {
            this.#turn++;
            // if the result is larger than the list, start new round
            if (this.#turn >= this.#creatureList.length)
            {
                this.updateEffects();
                this.#turn = 0;
                this.#round++;
            }
            this.#current = this.#creatureList[this.#turn];
            this.draw();
        }
    }

    updateEffects()
    {
        this.#creatureList.forEach((c) =>
        {
            c.updateEffects();
        });
    }

    addNewEffect()
    {
        this.#creatureList.forEach(c =>
            {
                if (c.toString() == effectTargetBox.value)
                {
                    c.newEffect(effectTextBox.value, effectDurationBox.value);
                }
            });
    }

    endCombat()
    {
            this.#creatureList = [];
            this.#round = 0;
            this.#inCombat = false;
            clearList();
    }

    setEffectTarget(text)
    {
        effectTargetBox.value = text;
    }

    removeMonster()
    {
        if (this.#inCombat)
        {
            this.#creatureList = this.#creatureList.filter(x => !x.isDead());
            if (this.#creatureList.indexOf(this.#current) == -1)
            {
                this.#current = this.#creatureList[this.#turn];
            }
            else
            {
                this.#turn = this.#creatureList.indexOf(this.#current);
            }
            this.draw();
        }
    }

    populateList()
    {
        this.#creatureList = [];
        monsterList.forEach(this.addCreature, this);
        playerList.forEach(this.addCreature, this);
    }

    addCreature = function(element)
    {
        let test = this.buildCreature(element[0].value, element[1].value, element[2], element[3]);
        if (typeof test !== "undefined")
        {
        //    console.log(test);
            // if player just add to list
            if (element[2])
            {
                this.#creatureList.push(test);
            }
            else
            {
                // if monster, check if alive before adding to list
                if (!element[3].checked)
                {
                    this.#creatureList.push(test);
                }
                else
                {
                    console.log(`${test} is dead.`);
                }
            }
            
        }
    }

    getFeilds()
    {
        for (let x = 1; x <= 8; x++)
        {
            let m = [document.getElementById("m" + `${x}`), document.getElementById("mi" + `${x}`), false, document.getElementById("d" + `${x}`), document.getElementById("hp" + `${x}`)];
            if (typeof m !== 'undefined')
            {
                monsterList[x-1] = m;
            }
            else
            {
                console.error(`Unexpected Error getting Monster Input Field #${x}.`);
            }
            let p = [document.getElementById("p" + `${x}`), document.getElementById("pi" + `${x}`), true, false];
            if (typeof p !== 'undefined')
            {
                playerList[x-1] = p; 
            }
            else
            {
                console.error(`Unexpected Error getting Player Input Field #${x}.`);
            }
        }
        
    }

    buildCreature(title, init, isPlayer, isDead)
    {
        if(this.validateInit(init) && this.validateName(title))
        {
            return new Creature(title, init, isPlayer, isDead);
        }
    }

    validateName(title)
    {
        // returns true if string is neither blank nor a default value
        return title != "" && title != "Monster" && title != "Player";
    }

    validateInit(init)
    {
        // returns true if the provided value is a number and is neither blank nor the default value
        return !isNaN(init) && (init != "" && init != "Initiative");
    }

    getCreatures()
    {
        return this.#creatureList;
    }

    getCurrent()
    {
        return this.#current;
    }

    draw()
    {
        clearList();
        drawEffectTargetList();
        drawRound(this.#round);
        drawList();
        drawCurrentEffects();
    }
}

// variable to hold the encounter
var encounter = new Encounter();