class StatusEffect
{
    #description;
    #duration;

    constructor(des, dur)
    {
        this.#description = des;
        this.#duration = dur;
    }

    update()
    {
        this.#duration--;
    }

    isDone()
    {
        return this.#duration <= 0;
    }

    toString()
    {
        return this.#description + ` for ${this.#duration} turns`;
    }
}