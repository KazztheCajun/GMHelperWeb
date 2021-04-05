class Creature
{
    #name;
    #init;
    #isPlayer;
    #isDead;
    #effects;

    constructor(n, i, p, d)
    {
        this.#name = n;
        this.#init = parseInt(i);
        this.#isPlayer = p;
        this.#isDead = d;
        this.#effects = [];
    }

    newEffect(text, duration)
    {
        let temp = new StatusEffect(text, duration);
        console.log(this.#effects.push(temp));
        console.log(temp);
    }

    isDead()
    {
        return this.#isDead;
    }

    isPlayer()
    {
        return this.#isPlayer;
    }

    getInit()
    {
        return this.#init;
    }

    getEffects()
    {
        return this.#effects;
    }

    updateEffects()
    {
        this.#effects.forEach( e =>
            {
                e.update();
                if (e.isDone())
                {
                    // remove effect from list if it is done
                    this.#effects = this.#effects.filter(x => x !== e);
                    console.log(`${e.toString()} is done.`)
                }
            }
        )
    }

    toString()
    {
        return this.#name;
    }

    static compareInit(a, b)
    {
        return b.getInit() - a.getInit();   
    }

    static compareName(a, b)
    {
        // Should sort a list alphabetically
        return (a < b ? -1 : (a > b ? 1 : 0))
    }

}