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

}