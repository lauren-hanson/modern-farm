console.log("Welcome to the main module")


import { createPlan } from './plan.js'
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

// store usePlants() into a variable
// array of seeds being grown 
const plantsGrowing = usePlants()
console.log(plantsGrowing) 

// store createPlan() into a variable
// calling plantSeeds() w/ new variable 
const newGrowingPlan = createPlan()
plantSeeds(newGrowingPlan)

// array will print with row information
console.log(newGrowingPlan)


const finalHarvest = harvestPlants(plantsGrowing) 
console.log(finalHarvest)


//check that HTML string is printing correctly
const harvestHTML = catalog(finalHarvest) 
console.log(harvestHTML)


const parentHTMLElement = document.querySelector(".harvest") 
let htmlString = `<div>${harvestHTML}</div>`
parentHTMLElement.innerHTML = htmlString



// //SEED IMPORTS 

// import { createAsparagus } from "./seeds/asparagus.js"
// //const asparagusSeed = createAsparagus()
// //console.log(asparagusSeed)


// // import { createCorn } from "./seeds/corn.js"
// // const cornSeed = createCorn()
// //console.log(cornSeed)


// import { createPotato } from "./seeds/potato.js"
// const potatoSeed = createPotato()
// //console.log(potatoSeed)


// import { createSoybean } from "./seeds/soybean.js"
// const soybeanSeed = createSoybean()
// //console.log(soybeanSeed)


// import { createSunflower } from "./seeds/sunflower.js"
// const sunflowerSeed = createSunflower()
// //console.log(sunflowerSeed)


// import { createWheat } from "./seeds/wheat.js"
// const wheatSeed = createWheat()
// //console.log(wheatSeed)

// //END OF SEEDS IMPORTS 




// return copy of the array of plants 
// checks to see if functions in field.js are returning an array of plants 
// addPlant(soybeanSeed) 
// addPlant(potatoSeed) 
// addPlant(asparagusSeed) 
// addPlant(wheatSeed) 
// addPlant(sunflowerSeed) 
// addPlant(cornSeed) 































