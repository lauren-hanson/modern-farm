export const catalog = (harvestArray) => { 
    let htmlString = ""

    for (const harvest of harvestArray) { 
        htmlString += `<section class="harvest">${harvest.type}</section>\n`
    }
    return htmlString
}