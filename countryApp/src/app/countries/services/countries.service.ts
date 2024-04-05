import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region, Subregion } from '../interfaces/regions.interface';

@Injectable({
    providedIn: 'root'
})


export class CountriesService {

    private _apiUrl: string =  "https://restcountries.com/v3.1";
    private _localStorageKey: string =  "countriesCacheStore";

    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: [] },
        byCountries: { term: '', countries: [] },
        byRegion: { region: undefined, subregion: undefined, countries: [] }
    }

    constructor( private http: HttpClient){
        this.loadFromlocalStorage();
    }

    /*
    *
    * Observable de RxJS
    * Usaremos el pipe() para hacer un catch si no tenemos respuesta.
    * Dentro del pipe() tenemos varios métodos que van transformando la respuesta
    * Tiene la respuesta como parámetro de los métodos tap, map...
    * Aquí usaremos el catchError para controlar erroes, que devuelve a su vez un nuevo Observable (!!)
    * 
    */

    private saveTolocalStorage(){
        localStorage.setItem( this._localStorageKey, JSON.stringify( this.cacheStore ));
    }

    private loadFromlocalStorage(){
        if(!localStorage.getItem( this._localStorageKey ))
            return;

        this.cacheStore = JSON.parse( localStorage.getItem( this._localStorageKey)! );
    }

    /*
    * Unificamos las API calls en un solo método unificado
    */
    private getCountriesRequest( url: string ): Observable<Country[]> {
        return this.http.get<Country[]>( url ).
        pipe(
            catchError( error => of([]) ),
                delay(200)
        );
    }

    public SearchByCapital( term: string ): Observable<Country[]> {
        const url = `${ this._apiUrl }/capital/${ term }`;
        return this.http.get<Country[]>( url ).
        pipe(
            // Métodos map y tap para trabajar con la resupesta recibida
            tap( countries => this.cacheStore.byCapital = { term, countries }),
            tap( () => this.saveTolocalStorage() ),
            //map( countries => console.log('paso por Observable.pipe().map =>', countries))
            //
            // Con catchError disponemos del error y podemos devolverlo (será un Observable)
            // Pero en este caso devolvemos un array vacío para implementar una respuesta vacía en la página
            
            catchError( error => {
                console.log(error);
                return of([])
            }),
            delay(200)
            
            // Forma abreviada sin return del error
            //catchError( error => of([]) )

            // Llamar al método unificado
            //return this.getCountriesRequest(url); 
        );
    }

    public SearchCountry( term: string ): Observable<Country[]> {
        const url = `${ this._apiUrl }/name/${ term }`;
        return this.getCountriesRequest(url).
        pipe(
            tap( countries => this.cacheStore.byCountries = { term, countries }),
            tap( () => this.saveTolocalStorage() )
        );
    }

    public SearchByRegion( region: Region ): Observable<Country[]> {
        const url = `${ this._apiUrl }/region/${ region }`;
        return this.getCountriesRequest(url).
        pipe(
            tap( countries => this.cacheStore.byRegion = { region, subregion:undefined, countries }),
            tap( () => this.saveTolocalStorage() )
        );
    }

    public SearchBySubregion( subregion: Subregion ): Observable<Country[]> {
        const url = `${ this._apiUrl }/subregion/${ subregion }`;
        return this.getCountriesRequest(url).
        pipe(
            tap( countries => this.cacheStore.byRegion = { region: this.cacheStore.byRegion.region, subregion: subregion, countries }),
            tap( () => this.saveTolocalStorage() )
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