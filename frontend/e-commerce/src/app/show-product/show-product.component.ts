import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  products:any = [];

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { 
    // this.readProduct();
    console.log(this.products)
  }

  ngOnInit(): void { 
    this.activeRoute.params.subscribe(routeParams => {
      console.log(routeParams);
      
      const category = routeParams.category
      this.apiService.getProducts(category).subscribe((data) => {
        this.products = data
        console.log('data',data)
      })
    });

  }
  // readProduct(){
  //   this.apiService.getProducts().subscribe((data) => {
  //    this.products = data;
  //   })  
  // }

}
