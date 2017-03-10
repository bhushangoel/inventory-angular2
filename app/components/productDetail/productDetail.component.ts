import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SharedService} from '../shared.service';


@Component({
    selector: 'productDetail',
    templateUrl: 'app/components/productDetail/productDetail.component.html',
    providers: [SharedService]
})

export class productDetail implements OnInit{
    details = {};

    constructor(private route: ActivatedRoute, private sharedService: SharedService) {
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
                this.details = result;
            })
    }
}