import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import './const.service';
import {config} from "./const.service";


export class Products {
    constructor(public name: string, public description: string, public category: string, public price: number, public quantity: number) {
    }
}

@Injectable()

export class SharedService {
    constructor(private http: Http) {

    }

    //using rxJs to fetch data
    getData(url: string) {
        let urlPath = `${config.apiPathProd}${url}`;
        return this.http
            .get(urlPath)
            .map((response: Response) => response.json())
    }

    getDataUsingPromise(url: string) {
        let urlPath = `${config.apiPathProd}${url}`;
        return this.http
            .get(urlPath)
            .map((response: Response) => response.json())
            .toPromise()
    }

    addData(url: string, data: {}) {
        return this.http
            .post(`${config.apiPathProd}${url}`, data)
            .map((response: Response) => console.log(response))
    }
}