
// define & export harvestPlants function that takes input of the plants array
export const harvestPlants = (plantArray) => {
    
    // new array of seed objects that will be returned 
    const seedObjects = []

    // iterate the array of growing plants array & get the output 
   
    for (const plant of plantArray) {
        let output = ""

        if (plant.type === "Corn") { 
            output = plant.output / 2
            //console.log(output)
        } else { 
            output = plant.output
            //console.log(output)
        }
        // will allow duplicate versions of objects
        // add output amount of object to the array
        for (let i=0; i < output; i++) {
            seedObjects.push(plant)
        }
        
    }
    return seedObjects
}

