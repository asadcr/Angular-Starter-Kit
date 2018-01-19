import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

require('!style-loader!css-loader!primeng/resources/themes/bootstrap/theme.css');
require('!style-loader!css-loader!./asset/icons/css/font-awesome.min.css');
require('!style-loader!css-loader!primeng/resources/primeng.min.css');
// require('!style-loader!css-loader!@angular/material/core/theming/prebuilt/indigo-pink.css');
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.css');


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
