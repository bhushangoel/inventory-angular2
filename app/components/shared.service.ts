import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import './const.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {config} from "./const.service";


export class Products {
    constructor(public name: string, public description: string, public category: string, public price: number, public quantity: number) {
    }
}

@Injectable()

export class SharedService {
    constructor(private http: Http) {

    }

    getData(url: string) {
        return this.http.get(`${config.apiPath}${url}`)
            .map((response: Response) => response.json())
    }

    addData(url: string, data: {}) {
        return this.http.post(`${config.apiPath}${url}`, data)
            .map((response: Response) => console.log(response))
    }
}