import { Component, OnInit, NO_ERRORS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Dialogs, knownFolders, path, ImageSource, ListPicker } from '@nativescript/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.model';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { NativescriptCameraPlusModule } from '@nstudio/nativescript-camera-plus/angular';

@Component({
  selector: 'ns-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  standalone: true,
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativescriptCameraPlusModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductAddComponent implements OnInit {
  product: Partial<Product> = { name: '', code: '', description: '', imageUrl: '', status: 'In Stock' };
  productImageSource: ImageSource;
  showCamera = false;
  isEditMode = false;
  pageTitle = "New Product";
  availableStatuses = ['In Stock', 'Low Stock', 'Out of Stock'];
  public selectedStatusIndex = 0;

  constructor(
    private productService: ProductService,
    public router: RouterExtensions,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.isEditMode = true;
      this.pageTitle = "Edit Product";
      this.productService.getProduct(id).subscribe(product => {
        this.product = product;
        if (product.imageUrl && ImageSource.fromFileSync(product.imageUrl)) {
          this.productImageSource = ImageSource.fromFileSync(product.imageUrl);
        }
        const index = this.availableStatuses.indexOf(this.product.status);
        this.selectedStatusIndex = index > -1 ? index : 0;
      });
    }
  }

  onStatusChange(args: { object: ListPicker }): void {
      this.product.status = this.availableStatuses[args.object.selectedIndex];
  }

  onShowCameraTap(): void {
    this.showCamera = true;
  }

  onCancelCamera(): void {
    this.showCamera = false;
  }

  onPhotoCaptured(event: any): void {
    this.showCamera = false;
    const imageAsset = event.data;
    ImageSource.fromAsset(imageAsset).then(source => {
      const folder = knownFolders.documents();
      const fileName = `product-${Date.now()}.jpg`;
      const filePath = path.join(folder.path, fileName);
      const saved = source.saveToFile(filePath, 'jpeg');

      if (saved) {
        this.productImageSource = source;
        this.product.imageUrl = filePath;
        this.cdr.detectChanges();
        Dialogs.alert("Product photo added successfully!");
      } else {
        Dialogs.alert("Failed to save photo.");
      }
    });
  }

  onError(event: any): void {
    this.showCamera = false;
    Dialogs.alert("Camera error or action canceled.");
  }
  
  onSubmit(): void {
    // <-- ЛОГ 1: Начало процесса
    console.log("--- [ACTION] Save button clicked ---");

    const errors = [];
    if (!this.product.name.trim()) errors.push("Product Name is required.");
    if (!this.product.code.trim()) errors.push("Product Code is required.");
    if (!this.product.imageUrl) errors.push("Product Photo is required.");

    if (errors.length > 0) {
      // <-- ЛОГ 2: Ошибка валидации
      console.log("--- [VALIDATION] Failed:", errors);
      Dialogs.alert({ title: "Validation Error", message: errors.join("\n"), okButtonText: "OK" });
      return;
    }

    if (this.isEditMode) {
      // <-- ЛОГ 3 (Редактирование): Какие данные отправляем
      console.log("--- [API] Sending UPDATE (PUT) request with data:", JSON.stringify(this.product));
      this.productService.updateProduct(this.product as Product).subscribe({
        next: (response) => {
            // <-- ЛОГ 4 (Редактирование): Успешный ответ
            console.log("--- [API] UPDATE SUCCESS. Server responded:", JSON.stringify(response));
            Dialogs.alert("Product updated successfully!").then(() => this.router.navigate(['/products'], { clearHistory: true }));
        },
        error: (err) => {
            // <-- ЛОГ 5 (Редактирование): Ошибка
            console.log("--- [API] UPDATE FAILED. Error:", err);
            Dialogs.alert("An error occurred while updating the product.");
        },
      });
    } else {
      // <-- ЛОГ 3 (Создание): Какие данные отправляем
      console.log("--- [API] Sending CREATE (POST) request with data:", JSON.stringify(this.product));
      this.productService.addProduct(this.product).subscribe({
        next: (response) => {
            // <-- ЛОГ 4 (Создание): Успешный ответ
            console.log("--- [API] CREATE SUCCESS. Server responded:", JSON.stringify(response));
            Dialogs.alert("Product added successfully!").then(() => this.router.backToPreviousPage());
        },
        error: (err) => {
            // <-- ЛОГ 5 (Создание): Ошибка
            console.log("--- [API] CREATE FAILED. Error:", err);
            Dialogs.alert("An error occurred while adding the product.");
        },
      });
    }
  }
}