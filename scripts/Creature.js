class Creature
{
    #name;
    #init;
    #isPlayer;
    #isDead;

    constructor(n, i, p, d)
    {
        this.#name = n;
        this.#init = parseInt(i);
        this.#isPlayer = p;
        this.#isDead = d;
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