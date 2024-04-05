import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor( 
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private countriesService: CountriesService
    ) {}

  ngOnInit(): void {
		/*
		*
		* Usamos ActivatedRoute, que es un Observable, para controlar
		* en todo momento, el estado de la bara de direcciones del browser
		* En params tenemos el objecto con el query params
		*
		*/
		this.activatedRoute.params
      // .subscribe( params =>  {
      //   console.log({ params: params['id'] });
      // })
      //
      // Con destructuring
      /*
      * PERO con este código tenemos un problema:
      * Observable Hell => un observable dentro de otro
      */
      // .subscribe( ({ id }) =>  {
      //     /*
      //     * Observable Hell => un observable dentro de otro
      //     */
      //     this.conutriesService.searchCountryByAlphaCode(id)
      //       .subscribe( country => {
      //         console.log({ country })
      //       });
      // });
      //
      /*
      *
      * Para resolverlo usaremos un Pipe con un SwitchMap
      * que nos permite eliminar el segundo subscribe (...)
      * (a lot of stuff is going on here...)
      * 
      */
     .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id) )
     )
     .subscribe( country => {
        //
        // Con el router controlaremos la exisencia del país
        // y en caso contrario volveremos a 
        //
        if(!country)
          return this.router.navigateByUrl('');

        return this.country = country;
        
     });
  }

  public searchCountry (code: string) {
    this.countriesService.searchCountryByAlphaCode(code)
            .subscribe( country => {
              console.log({ country })
            });
  }

}
