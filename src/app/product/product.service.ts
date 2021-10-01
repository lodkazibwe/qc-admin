import { Injectable } from '@angular/core';
import { Product } from './product';
import {Calc} from "./calc";
import {Fees} from "./fees";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {AppSettings} from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  private productsUrl = AppSettings.API_ENDPOINT+'loan/product/getAll';
  private productUrl = AppSettings.API_ENDPOINT+'loan/product/get/';
  private productAddUrl = AppSettings.API_ENDPOINT+'loan/product/root/add';
  private calcUrl =AppSettings.API_ENDPOINT+"loan/admin/loanCalc";

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
       
  }

  loanCalc(calc: Calc): Observable<Fees>{
    return this.http.put<Fees>(this.calcUrl,calc);
  }

  getProduct(id: number): Observable<Product> {
    //return of(PRODUCTS.find(product => product.id === id));
    return this.http.get<Product>(this.productUrl+id)
    .pipe(
      catchError(this.handleError<Product>('getProduct'))
    );
  }

  addProduct(product: Product): Observable<Product>{

    return this.http.post<Product>(this.productAddUrl, product, this.httpOptions)
    .pipe(
      catchError(this.handleError<Product>('addProduct'))
    );
    
  }





  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      if (error.error instanceof ErrorEvent){
        this.log(`${operation} Error, Not Found: ${error.error.message}`);
    } else {

      switch (error.status) {
        case 404: {
            this.log(`${operation} failed, Not Found: ${error.message}`);
        }
        case 403: {
          this.log(`${operation} Access Denied: ${error.message}`);
        }
        case 500: {
          this.log(`${operation} Internal Server Error: ${error.message}`);
        }
        default: {
          this.log(`${operation} Unknown Server Error: ${error.message}`);
        }}
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ProductService: ${message}`);
  }

  

}

