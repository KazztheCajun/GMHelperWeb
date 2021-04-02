function drawList()
{
    list = encounter.getCreatures();
    if (list.length > 0)
    {
        for (let i = 0; i < list.length; i++)
        {
            let t = list[i]
            if (encounter.getCurrent() === t)
            {
                initList.innerHTML += "<li>" + `${t.toString()}` + " <-- </li>";
            }
            else
            {
                initList.innerHTML += "<li>" + `${t.toString()}` + "</li>";
            }
        }
    }
}

function drawRound(r)
{
    roundBox.innerHTML = `Round: ${r}`;
}

function clearList()
{
    roundBox.innerHTML = ``;
    initList.innerHTML = "";
}