import {Component, OnInit} from '@angular/core';
import {SharedService, Products} from '../shared.service';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.component.html',
    providers: [SharedService]
})

export class HomeComponent implements OnInit {
    products: Products[];

    constructor(private sharedService: SharedService) {
    }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.sharedService.getData('products')
            .subscribe((products) => this.products = products)
    }
}