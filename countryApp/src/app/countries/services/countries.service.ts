import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({
    providedIn: 'root'
})


export class CountriesService {
    private _apiUrl: string =  "https://restcountries.com/v3.1";

    constructor( private http: HttpClient){ }

    /*
    *
    * Observable de RxJS
    * Usaremos el pipe() para hacer un catch si no tenemos respuesta.
    * Dentro del pipe() tenemos varios métodos que van transformando la respuesta
    * Tiene la respuesta como parámetro de los métodos tap, map...
    * Aquí usaremos el catchError para controlar erroes, que devuelve a su vez un nuevo Observable (!!)
    * 
    */
    public SearchByCapital( term: string ): Observable<Country[]> {
        const url = `${ this._apiUrl }/capital/${ term }`;
        return this.http.get<Country[]>( url ).
        pipe(
            // Métodos map y tap para trnasformar la resupesta recibida
            //tap( countries => console.log('paso por Observable.pipe().tap =>', countries)),
            //map( countries => console.log('paso por Observable.pipe().map =>', countries))
            //
            // Con catchError disponemos del error y podemos devolverlo (será un Observable)
            // Pero en este caso devolvemos un array vacío para implementar una respuesta vacía en la página
            
            catchError( error => {
                console.log(error);
                return of([])                 
            })
            
            // Forma abreviada sin return del error
            //catchError( error => of([]) )
        );
    }

    public SearchCountry( term: string ): Observable<Country[]> {
        const url = `${ this._apiUrl }/name/${ term }`;
        return this.http.get<Country[]>( url ).
        pipe(
            catchError( error => of([]) )
        );
    }

    public SearchByRegion( region: string ): Observable<Country[]> {
        const url = `${ this._apiUrl }/region/${ region }`;
        return this.http.get<Country[]>( url ).
        pipe(
            catchError( error => of([]) )
        );
    }

    /*
    * La API restcountries siempre devuelve un array pere a estar peticionando solo un país, vamos a pulirlo
    */
    public searchCountryByAlphaCode( code: string ): Observable<Country | null> {
        const url = `${ this._apiUrl }/alpha/${ code }`;
        return this.http.get<Country[]>( url ).
        pipe(
            // Con map transformamos la respuesta a un solo país (el 1o del array) 
            map ( countries => countries.length > 0 ? countries[0] : null),
            catchError( error => of(null) )
        );
    }
}