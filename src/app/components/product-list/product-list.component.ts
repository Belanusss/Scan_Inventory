import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Product } from '../../services/product.model';
import { ProductService } from '../../services/product.service';
import { Observable, tap } from 'rxjs';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
  selector: 'ns-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: RouterExtensions,
    private page: Page
  ) {}

  ngOnInit(): void {
    // --- НАЧАЛО ИСПРАВЛЕНИЯ ---
    // 1. Вызываем загрузку сразу при инициализации для первого запуска.
    this.loadProducts();

    // 2. Устанавливаем слушатель для всех последующих переходов на эту страницу.
    this.page.on('navigatedTo', (args) => {
      // Добавляем проверку, чтобы не перезагружать данные дважды при самом первом запуске
      if (args.isBackNavigation) {
        this.loadProducts();
      }
    });
    // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
  }

  loadProducts(): void {
    this.products$ = this.productService.getProducts().pipe(
      tap(data => this.products = data)
    );
  }

  onItemTap(args): void {
    const index = args.index;
    const tappedItem = this.products[index];
    if (tappedItem) {
      this.router.navigate(['/products', tappedItem.id]);
    }
  }

  onAddTap(): void {
    this.router.navigate(['/products/add']);
  }
}