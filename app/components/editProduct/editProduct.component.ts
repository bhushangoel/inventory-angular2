import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SharedService} from '../shared.service';


@Component({
    selector: 'editproduct',
    templateUrl: 'app/components/addProduct/addProduct.component.html',
    providers: [SharedService]
})

export class EditProductComponent {
    formData = {};

    constructor(private route: ActivatedRoute, private sharedService: SharedService) {
        this.loadCategories();
    }

    loadCategories() {
        this.sharedService.getData('categories')
            .subscribe((result) => this.categories = result)
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .do(id => this.id = +id)
            .subscribe(id => this.getProduct())
    }

    getProduct() {
        this.sharedService.getData(`products/${this.id}`)
            .subscribe(result => {
                this.formData = result;
            })
    }
}