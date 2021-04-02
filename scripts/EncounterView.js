function drawList()
{
    let list = encounter.getCreatures();
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

function drawEffectTargetList()
{
    let list = encounter.getCreatures();
    if (list.length > 0)
    {
        list.forEach((t) =>
            {
                effectTargetList.innerHTML += `<li class='dropdown-item' onclick="setTarget(this.innerHTML)">${t.toString()}</li>`;
            }
        )
    }
}

function drawRound(r)
{
    roundBox.innerHTML = `Round: ${r}`;
}

function clearPlayerList()
{
    playerList.forEach((x) => 
    {
        x[0].value = "";
        x[1].value = "";
    });
}

function clearMonsterList()
{
    monsterList.forEach((x) =>
    {
        x.forEach((f) =>
        {
            x[0].value = "";
            x[1].value = "";
            x[3].checked = false;
            x[4].value = "";
        });
    })
}

function clearList()
{
    effectTargetList.innerHTML = "";
    roundBox.innerHTML = ``;
    initList.innerHTML = "";
}