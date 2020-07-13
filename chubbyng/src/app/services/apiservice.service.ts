import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/config/appsettings';
import { Observable, of } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getPersons() : Observable<Person[]>{
    return this.http.get<Person[]>(AppSettings.personUrl)
    .pipe(
      tap(_ => console.log('fetched person...')),
      retry(3),
      catchError(this.handleError<Person[]>('getPersonList', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // TODO: send the error to remote logging infrastructure
      console.log(`${operation} failed: ${error.message}`); // TODO: better job of transforming error for user consumption
      return of(result as T); // Let the app keep running by returning an empty result.
    };
  }

  GetemployeeDetails(){
    return this.http.get(AppSettings.empurl); 
  }
}
