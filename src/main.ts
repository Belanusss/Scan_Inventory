import { bootstrapApplication, provideNativeScriptHttpClient, provideNativeScriptRouter, registerElement, registerNativeScriptViewComponents, runNativeScriptAngularApp } from '@nativescript/angular';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';


import { CameraPlus } from '@nstudio/nativescript-camera-plus';
registerElement("CameraPlus", () => CameraPlus);

registerNativeScriptViewComponents();

runNativeScriptAngularApp({
  appModuleBootstrap: () =>
    bootstrapApplication(AppComponent, {
      providers: [
        provideZonelessChangeDetection(),
        provideNativeScriptRouter(routes),
        provideNativeScriptHttpClient(),
      ],
    }),
});