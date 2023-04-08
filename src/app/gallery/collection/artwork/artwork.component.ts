import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import data from "../../../../assets/gallery_data.json";
import { utils } from "../../../app.utils";

@Component({
	selector: "app-artwork",
	templateUrl: "./artwork.component.html",
	styleUrls: ["./artwork.component.scss"],
})
export class ArtworkComponent {
	collectionObj: any;
	artworkObj: any;
	collectionName: string;
	artworkName: string;
	collectionToken: string;
	constructor(private route: ActivatedRoute) {
		this.collectionToken = this.route.snapshot.params["collectionToken"];
		this.collectionName = utils.detokenize(this.collectionToken);
		this.artworkName = utils.detokenize(this.route.snapshot.params["artworkToken"]);

		data.forEach((collection: any) => {
			if (collection.name == this.collectionName) {
				this.collectionObj = collection;
			}
		});

		this.collectionObj.artworks.forEach((artwork: any) => {
			if (artwork.name == this.artworkName) {
				this.artworkObj = artwork;
			}
		});
		this.artworkObj.name = utils.capitalize(this.artworkObj.name);
		this.artworkObj.description = this.artworkObj.description.replace(".", "\n");
		this.collectionName = utils.capitalize(this.collectionName);
	}
}
