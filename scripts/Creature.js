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
        if (this.#isPlayer)
        {
            return this.#isDead;
        }
        else
        {
            return this.#isDead.checked;
        }
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
            }
        )

        this.#effects = this.#effects.filter(e => !e.isDone());
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