import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";
import { GlobalErrorHandler } from "./global-error-handler";
import { HttpErrorInterceptor } from "./http-error.interceptor";
import { JwtTokenInterceptor } from "./jwt-token.interceptor";

export const GlobalInterceptors = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true,
    },
    // {
    //   provide: JWT_OPTIONS,
    //   useValue: JWT_OPTIONS,
    // },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ];