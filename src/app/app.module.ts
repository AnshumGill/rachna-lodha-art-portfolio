import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { CollectionComponent } from "./gallery/collection/collection.component";
import { ArtworkComponent } from "./gallery/collection/artwork/artwork.component";

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		GalleryComponent,
		CollectionComponent,
		ArtworkComponent,
		NavComponent,
		AboutComponent,
		ContactComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
