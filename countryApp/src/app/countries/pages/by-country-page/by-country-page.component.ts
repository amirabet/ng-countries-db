import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading = false;

  constructor( private countriesService: CountriesService  ){

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  public searchCountry( term: string ): void{
    this.isLoading = true;
    this.initialValue = term;

    this.countriesService.SearchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
