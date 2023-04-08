import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LandingComponent } from "./landing/landing.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CollectionComponent } from "./gallery/collection/collection.component";
import { ArtworkComponent } from "./gallery/collection/artwork/artwork.component";

const routes: Routes = [
	{ path: "", component: LandingComponent },
	{ path: "gallery", component: GalleryComponent },
	{ path: "about", component: AboutComponent },
	{ path: "contact", component: ContactComponent },
	{
		path: "collection",
		children: [
			{ path: ":token", component: CollectionComponent },
			{ path: ":collectionToken/artwork/:artworkToken", component: ArtworkComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
