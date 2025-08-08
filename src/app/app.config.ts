import {ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PiesService } from './pies.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    PiesService,
    {
      provide: DEFAULT_CURRENCY_CODE,
      useFactory: (locale: string) => {
        switch (locale) {
          case 'en-US':
            return 'USD';
          case 'nl':
          case 'nl-NL':
            return 'EUR';
          default:
            return 'USD'; // Default to USD if locale is not recognized
        }
      },
      deps: [LOCALE_ID]
    }
  ]
};
