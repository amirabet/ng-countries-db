import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService  ){

  }

  public searchCountry( term: string ): void{
    this.countriesService.SearchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      });
  }
}
