export function createPetList() {
  const petList = [];

  function addPet(pet) {
    if(pet === undefined){
        return petList;
    }
    else {
        petList.push(pet);
        console.log(petList);
    }
  }
  return addPet;
}

let myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();