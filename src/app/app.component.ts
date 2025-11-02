import { Component, NO_ERRORS_SCHEMA } from '@angular/core'; // <-- Добавляем импорт
import { NativeScriptRouterModule } from '@nativescript/angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NativeScriptRouterModule,
  ],
  schemas: [NO_ERRORS_SCHEMA], // <-- Добавляем эту строку
})
export class AppComponent {}