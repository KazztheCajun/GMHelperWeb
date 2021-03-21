class Creature
{
    #name;
    #init;
    #isPlayer;

    constructor(n, i, p)
    {
        this.#name = n;
        this.#init = parseInt(i);
        this.#isPlayer = p;
    }

    getInit()
    {
        return this.#init;
    }

    toString()
    {
        return this.#name;
    }

    static compare(a, b)
    {
        return b.getInit() - a.getInit();   
    }

}