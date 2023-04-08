import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import data from "../../../assets/gallery_data.json";
import { utils } from "../../app.utils";

@Component({
	selector: "app-collection",
	templateUrl: "./collection.component.html",
	styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
	collectionObj: any;
	collectionToken: string;
	collectionName: string;
	constructor(private route: ActivatedRoute) {}
	ngOnInit() {
		this.collectionToken = this.route.snapshot.params["token"];
		this.collectionName = utils.detokenize(this.collectionToken);
		data.forEach((collection: any) => {
			if (collection.name == this.collectionName) {
				this.collectionObj = collection;
			}
		});
		this.collectionObj.name = utils.capitalize(this.collectionObj.name);
		this.collectionObj.artworks.forEach((artwork: any) => {
			artwork.token = utils.tokenize(artwork.name);
			artwork.name = utils.capitalize(artwork.name);
		});
	}
}
