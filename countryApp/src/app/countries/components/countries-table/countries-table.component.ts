import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styles: `img{
            width: 25px;
            border:1px solid #DDD;
          }`
})
export class CountriesTableComponent {

  @Input()
  public countries: Country[] = []; 

}
