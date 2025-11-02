import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptHttpClientModule } from '@nativescript/angular';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule.forRoot(routes),
    AppComponent, // <-- Вот как мы импортируем standalone компонент
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}