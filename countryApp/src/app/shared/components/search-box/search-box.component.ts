import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent implements OnInit, OnDestroy {
  
  /*
  * Subject es un Observable especial de RxJS
  */
  private _debouncer: Subject<string> = new Subject<string>;
  private _debouncerSubscription?: Subscription;

  @ViewChild('inputSearch')
  public inputSearch!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    /*
    * Al ser un Observable, nos permite usar la pipe
    * Con la propiedad debounceTime podemos forzar el delay
    */
    //this._debouncer

    /*
    * Añadimos una subscrpicón al debouncer
    *
    */
    this._debouncerSubscription = this._debouncer
      .pipe(
        debounceTime(600)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      });
  }

  ngOnDestroy(): void {
    /*
    * Al salir del componente nos dessubscribiremos del Observable
    * para optimizar memoria
    * Los observables de http request se dessubscriben solos
    * Únicamente necesitamos detruir los Observables creados manualmente
    */
    //this._debouncer.unsubscribe();
    /*
    * Con la subscripción creada
    */
    this._debouncerSubscription?.unsubscribe();
  }

  public onPressEnter(): void {
    this.onValue.emit(this.inputSearch.nativeElement.value);
  }

  public onKeyPress( searchTerm: string ) {
    console.log('default event', searchTerm);
    
    /*
    * Usamos el debouncer para obtener el search term
    */
    this._debouncer.next( searchTerm );

  }
}
