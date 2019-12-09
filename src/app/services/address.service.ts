import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  api = "https://viacep.com.br/ws"

  constructor(private http : HttpClient) { }

  pesquisaPorCep(uf:string, cidade:string, bairro:string):Observable<any>{
    return this.http.get(`${this.api}/${uf}/${cidade}/${bairro}/json`).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a customer-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

