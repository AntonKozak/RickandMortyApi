class CharDetails {
    // Get info which we need using Class
    constructor(id, name, image, status, gender, location, species, origin){
        this.id = id;
        this.name = name;
        this.image = image;
        this.status = status;
        this.gender = gender;
        this.location = location.name;
        this.species = species;
        this.origin = origin.name;
    }
}

export default CharDetails;