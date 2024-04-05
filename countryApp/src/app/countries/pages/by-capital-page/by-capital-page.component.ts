import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})

export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService  ){

  }

  public searchByCapital( term: string ): void{
    /*
    *
    * Es necesario susbcribirse al Observable para poder lanzarlo
    * Lo hacewmos con el método .subscribe()
    * 
    */
    this.countriesService.SearchByCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      });
  }
}
