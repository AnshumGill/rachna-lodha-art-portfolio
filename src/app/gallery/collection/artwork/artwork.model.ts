export class Artwork {
	public token: string;
	public name: string;
	public description: string;
	public image: string;
	public sold: boolean;

	constructor(name: string, description: string, image: string, sold: boolean) {
		(this.token = name.replace(/\s/g, "-").toLowerCase()),
			(this.name = name),
			(this.description = description),
			(this.image = image),
			(this.sold = sold);
	}
}
