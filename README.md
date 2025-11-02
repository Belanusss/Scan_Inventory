Scan Inventory
Prosta aplikacja mobilna do zarządzania zapasami, zbudowana przy użyciu NativeScript i Angular. Aplikacja umożliwia przeglądanie listy produktów, dodawanie nowych z wykorzystaniem aparatu fotograficznego, edycję oraz usuwanie istniejących pozycji.
A simple mobile application for inventory management, built with NativeScript and Angular. The application allows users to view a list of products, add new ones using the camera, and edit or delete existing items.
Spis treści / Table of Contents
Funkcjonalności / Features
Technologie / Technologies Used
Wymagania / Prerequisites
Instalacja i uruchomienie / Installation and Running
Struktura aplikacji / Application Structure
Zrzuty ekranu / Screenshots
Funkcjonalności / Features
Przeglądanie listy produktów: Wyświetlanie kluczowych informacji o produktach na głównym ekranie.
Szczegóły produktu: Dostęp do pełnych danych produktu, w tym zdjęcia, opisu i statusu.
Dodawanie nowego produktu: Formularz z walidacją oraz integracja z natywną funkcją aparatu do robienia zdjęć.
Edycja produktu: Możliwość modyfikacji wszystkich pól istniejącego produktu.
Usuwanie produktu: Potwierdzenie i usunięcie produktu z listy.
Komunikacja z API: Pełna integracja z REST API (GET, POST, PUT, DELETE) do zarządzania danymi.
Automatyczna aktualizacja: Lista produktów odświeża się automatycznie po dodaniu, edycji lub usunięciu pozycji.

Product List View: Displays key information about products on the main screen.
Product Details: Access to full product data, including a photo, description, and status.
Add New Product: A form with validation and integration with the native camera feature for taking photos.
Edit Product: Ability to modify all fields of an existing product.
Delete Product: Confirmation and removal of a product from the list.
API Communication: Full integration with a REST API (GET, POST, PUT, DELETE) for data management.
Automatic Refresh: The product list updates automatically after adding, editing, or deleting an item.
Technologie / Technologies Used
NativeScript 14+
Angular 18+
TypeScript
@nstudio/nativescript-camera-plus: Plugin do integracji z natywną kamerą wbudowaną w aplikację. / Plugin for native in-app camera integration.
json-server: Do symulacji backendu i REST API. / For simulating a backend and REST API.
Wymagania / Prerequisites
Zainstalowane środowisko NativeScript / NativeScript environment installed.
Node.js i npm / Node.js and npm.
Urządzenie z systemem Android lub emulator / An Android device or emulator.
Instalacja i uruchomienie / Installation and Running
1.     Sklonuj repozytorium / Clone the repository:
codeBash
git clone <your-repository-url>
cd ScanInventory
2.     Zainstaluj zależności / Install dependencies:
codeBash
npm install
3.     Uruchom mock API (w osobnym terminalu) / Run the mock API (in a separate terminal):
 W katalogu głównym projektu znajduje się plik db.json. Uruchom json-server, aby go obsłużyć.
 The project's root directory contains a db.json file. Run json-server to serve it.
codeBash
json-server --watch db.json
4.     Zaktualizuj adres IP API / Update the API IP address:
 W pliku src/app/services/product.service.ts zmień adres IP w private apiUrl na adres IP komputera, na którym działa json-server.
 In the src/app/services/product.service.ts file, change the IP address in private apiUrl to the IP address of the computer running json-server.
codeTypeScript
private apiUrl = 'http://YOUR_COMPUTER_IP:3000/products';
5.     Uruchom aplikację na urządzeniu Android / Run the application on an Android device:
codeBash
ns run android
Struktura aplikacji / Application Structure
src/app/components/product-list: Główny widok z listą produktów. / Main view with the product list.
src/app/components/product-detail: Widok szczegółów wybranego produktu. / Details view for a selected product.
src/app/components/product-add: Widok z formularzem do dodawania i edycji produktu. / View with the form for adding and editing a product.
src/app/services/product.service.ts: Serwis odpowiedzialny za komunikację z API. / Service responsible for API communication.
src/app/app.routes.ts: Konfiguracja nawigacji w aplikacji. / Application navigation configuration.
 
Scan Inventory
Prosta aplikacja mobilna do zarządzania zapasami, zbudowana przy użyciu NativeScript i Angular. Aplikacja umożliwia przeglądanie listy produktów, dodawanie nowych z wykorzystaniem aparatu fotograficznego, edycję oraz usuwanie istniejących pozycji.
A simple mobile application for inventory management, built with NativeScript and Angular. The application allows users to view a list of products, add new ones using the camera, and edit or delete existing items.
Spis treści / Table of Contents
Funkcjonalności / Features
Technologie / Technologies Used
Wymagania / Prerequisites
Instalacja i uruchomienie / Installation and Running
Struktura aplikacji / Application Structure
Zrzuty ekranu / Screenshots
Funkcjonalności / Features
Przeglądanie listy produktów: Wyświetlanie kluczowych informacji o produktach na głównym ekranie.
Szczegóły produktu: Dostęp do pełnych danych produktu, w tym zdjęcia, opisu i statusu.
Dodawanie nowego produktu: Formularz z walidacją oraz integracja z natywną funkcją aparatu do robienia zdjęć.
Edycja produktu: Możliwość modyfikacji wszystkich pól istniejącego produktu.
Usuwanie produktu: Potwierdzenie i usunięcie produktu z listy.
Komunikacja z API: Pełna integracja z REST API (GET, POST, PUT, DELETE) do zarządzania danymi.
Automatyczna aktualizacja: Lista produktów odświeża się automatycznie po dodaniu, edycji lub usunięciu pozycji.

Product List View: Displays key information about products on the main screen.
Product Details: Access to full product data, including a photo, description, and status.
Add New Product: A form with validation and integration with the native camera feature for taking photos.
Edit Product: Ability to modify all fields of an existing product.
Delete Product: Confirmation and removal of a product from the list.
API Communication: Full integration with a REST API (GET, POST, PUT, DELETE) for data management.
Automatic Refresh: The product list updates automatically after adding, editing, or deleting an item.
Technologie / Technologies Used
NativeScript 14+
Angular 18+
TypeScript
@nstudio/nativescript-camera-plus: Plugin do integracji z natywną kamerą wbudowaną w aplikację. / Plugin for native in-app camera integration.
json-server: Do symulacji backendu i REST API. / For simulating a backend and REST API.
Wymagania / Prerequisites
Zainstalowane środowisko NativeScript / NativeScript environment installed.
Node.js i npm / Node.js and npm.
Urządzenie z systemem Android lub emulator / An Android device or emulator.
Instalacja i uruchomienie / Installation and Running
1.     Sklonuj repozytorium / Clone the repository:
codeBash
git clone <your-repository-url>
cd ScanInventory
2.     Zainstaluj zależności / Install dependencies:
codeBash
npm install
3.     Uruchom mock API (w osobnym terminalu) / Run the mock API (in a separate terminal):
 W katalogu głównym projektu znajduje się plik db.json. Uruchom json-server, aby go obsłużyć.
 The project's root directory contains a db.json file. Run json-server to serve it.
codeBash
json-server --watch db.json
4.     Zaktualizuj adres IP API / Update the API IP address:
 W pliku src/app/services/product.service.ts zmień adres IP w private apiUrl na adres IP komputera, na którym działa json-server.
 In the src/app/services/product.service.ts file, change the IP address in private apiUrl to the IP address of the computer running json-server.
codeTypeScript
private apiUrl = 'http://YOUR_COMPUTER_IP:3000/products';
5.     Uruchom aplikację na urządzeniu Android / Run the application on an Android device:
codeBash
ns run android
Struktura aplikacji / Application Structure
src/app/components/product-list: Główny widok z listą produktów. / Main view with the product list.
src/app/components/product-detail: Widok szczegółów wybranego produktu. / Details view for a selected product.
src/app/components/product-add: Widok z formularzem do dodawania i edycji produktu. / View with the form for adding and editing a product.
src/app/services/product.service.ts: Serwis odpowiedzialny za komunikację z API. / Service responsible for API communication.
src/app/app.routes.ts: Konfiguracja nawigacji w aplikacji. / Application navigation configuration.
 

