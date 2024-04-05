import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region, Subregion } from '../../interfaces/regions.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public selectedRegion?: Region;
  public selectedSubregion?: Subregion;
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public subregions: Subregion[] = [];
  public isLoading = false;

  constructor( private countriesService: CountriesService  ){}

  private SetSubRegionsByRegion(){
    switch(this.selectedRegion){
      case 'Africa':
        this.subregions = ['Northern Africa', 'Eastern Africa', 'Middle Africa', 'Southern Africa', 'Western Africa'];
        break;
      case 'Americas':
        this.subregions = ['Caribbean', 'Central America', 'South America', 'Northern America'];
        break;
      case 'Asia':
        this.subregions = ['Central Asia', 'Eastern Asia', 'South-eastern Asia', 'Southern Asia', 'Western Asia'];
        break;
      case 'Europe':
        this.subregions = ['Eastern Europe', 'Northern Europe', 'Southern Europe', 'Western Europe'];
        break;
      case 'Oceania':
        this.subregions = ['Australia and New Zealand', 'Melanesia', 'Micronesia', 'Polynesia'];
        break;
    }
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.selectedSubregion = this.countriesService.cacheStore.byRegion.subregion;
    this.SetSubRegionsByRegion();
  }

  public searchByRegion( term: Region ): void{
    this.selectedRegion = term;
    this.SetSubRegionsByRegion();
    this.selectedSubregion = undefined;
    this.isLoading = true;

    this.countriesService.SearchByRegion( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

  public searchBySubregion( subRegion: Subregion ): void{
    this.selectedSubregion = subRegion;
    this.isLoading = true;

    this.countriesService.SearchBySubregion( subRegion )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
