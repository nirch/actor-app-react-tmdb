
export default class ActorModel {
    constructor(name, relativeImageURL) {
        this.name = name;
        this.imageURL = "https://image.tmdb.org/t/p/w500" + relativeImageURL;
    }
}