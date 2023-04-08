import { Artwork } from "./artwork/artwork.model";

export class Collection {
	public token: string;
	public name: string;
	public description: string;
	public image: string;
	public artworks: Artwork[];

	constructor(name: string, description: string, image: string) {
		(this.token = name.replace(/\s/g, "-").toLowerCase()),
			(this.name = name),
			(this.description = description),
			(this.image = image),
			(this.artworks = []);
	}

	addArtwork(artwork: Artwork) {
		this.artworks.push(artwork);
	}
}
