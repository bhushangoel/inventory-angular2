import {Component} from '@angular/core';
import {SharedService, Products} from '../shared.service';

@Component({
    selector: 'addproduct',
    templateUrl: 'app/components/addProduct/addProduct.component.html',
    providers: [SharedService]
})

export class AddProductComponent {
    categories: any[];
    formData = {};
    showPreview: boolean = false;
    heading = 'Add New Product';

    constructor(private sharedService: SharedService) {
        this.loadCategories();
    }

    loadCategories() {
        this.sharedService.getData('categories')
            .subscribe((result) => this.categories = result)
    }

    save(addForm: any) {
        if (!addForm.valid) {
            return;
        }
        else {
            this.showPreview = true;
            this.sharedService.addData('products', this.formData)
                .subscribe((result) => {
                    this.formData = {};
                })
        }
    }
}

