import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Observable } from 'rxjs';
import { Product } from '../../services/product.model';
import { ProductService } from '../../services/product.service';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Dialogs } from '@nativescript/core';

@Component({
  selector: 'ns-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  private productId: number;

  constructor(
    private route: ActivatedRoute,
    public router: RouterExtensions,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params.id;
    if (this.productId) {
      this.product$ = this.productService.getProduct(this.productId);
    }
  }

  onEditTap(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }

  onDeleteTap(id: number): void {
    Dialogs.confirm({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this product?",
      okButtonText: "Delete",
      cancelButtonText: "Cancel"
    }).then(result => {
      if (result) {
        // Пользователь нажал "Delete"
        this.productService.deleteProduct(id).subscribe({
          next: () => {
            Dialogs.alert("Product deleted successfully.").then(() => {
              this.router.navigate(['/products'], { clearHistory: true });
            });
          },
          error: (err) => {
            console.error("Delete error:", err);
            Dialogs.alert("Failed to delete the product.");
          }
        });
      }
    });
  }
}