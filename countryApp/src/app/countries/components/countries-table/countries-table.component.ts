import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styles: `img{
            width: 25px;
            border:1px solid #EEE;
          }`
})
export class CountriesTableComponent {

  @Input()
  public countries: Country[] = []; 

  @Input()
  public hasSearchStarted: boolean = false; 

}
