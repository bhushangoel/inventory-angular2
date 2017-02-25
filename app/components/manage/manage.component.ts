import {Component, OnInit} from '@angular/core';
import {SharedService, Products} from '../shared.service';

@Component({
    selector: 'manage',
    templateUrl: 'app/components/manage/manage.component.html',
    providers: [SharedService]
})

export class ManageComponent implements OnInit {
    products: Promise<Products[]>;

    constructor(private sharedservice: SharedService) {
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        //promise to get the data here
        this.sharedservice.getDataUsingPromise('products')
            .then(result => {
                console.log('result here', result)
                this.products = result
            })
    }
}