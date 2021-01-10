import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: Error) {
    console.log('Error Handler -> ', error);
    // this.errorDialogService.openDialog(
    //   error.message || 'Undefined client error'
    // );
  }
}
