import {Component, OnInit} from '@angular/core';
import {SharedService, Products} from '../shared.service';

@Component({
    selector: 'manage',
    templateUrl: 'app/components/manage/manage.component.html',
    providers: [SharedService]
})

export class ManageComponent implements OnInit {
    products: Products[] = [];

    constructor(private sharedservice: SharedService) {
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.sharedservice.getData('products')
            .subscribe(
                products => {
                    this.products = products;
                }
            )
    }
}