import { Component, OnInit, ElementRef, ChangeDetectorRef } from "@angular/core";
import { register } from "swiper/element/bundle";
import data from "../../assets/gallery_data.json";
import { utils } from "../app.utils";

@Component({
	selector: "app-gallery",
	templateUrl: "./gallery.component.html",
	styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
	gallery_data: any;
	constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {
		this.gallery_data = data;
		this.gallery_data.forEach((collection: any) => {
			collection.token = utils.tokenize(collection.name);
			collection.name = utils.capitalize(collection.name);
		});
	}

	ngOnInit() {
		const el = this.el.nativeElement;
		const swiperEl = el.querySelector("swiper-container");
		const swiperParams = {
			slidesPerView: 1,
			allowTouchMove: true,
			loop: true,
			observe: true,
			observeParent: true,
			centerInsufficientSlides: true,
			longSwipes: false,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
			},
		};
		this.cdr.detectChanges();
		register();
		Object.assign(swiperEl, swiperParams);
		swiperEl.initialize();
	}
}
