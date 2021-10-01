import { Component, OnInit } from '@angular/core';
import { Product} from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Calc} from '../calc';
import {Fees} from '../fees';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  calc:Calc;
  fees: Fees;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }


  submit(object:Calc): void{
    this.calc={cycle:object.cycle, months: object.months, principal: object.principal, 
      weeks: object.weeks, productId:this.product.id}
    
      this.fees ={
        principal: object.principal, duration: object.months,
        handlingCharge: (this.product.handlingCharge/100)*object.principal,
        insuranceFee: (this.product.insuranceRate/100)*object.principal,
        interest: (this.product.interest/100)*object.principal*object.months,
        repayment:((this.product.interest/100)*object.principal*object.months +object.principal)/object.months
      }
      
  }
  
}
