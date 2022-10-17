const growingPlants = []


// will take seed object as input and will add the seed to the field 
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const plant of seedObject) {
            growingPlants.push(plant)
        }

    } else { 
        growingPlants.push(seedObject)
    }
}


// returns a copy of the array of plants 
export const usePlants = () => {
    return growingPlants

    //return growingPlants.map(growingPlants => ({...growingPlants}))
}



