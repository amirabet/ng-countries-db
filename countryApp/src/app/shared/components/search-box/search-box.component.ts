import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @ViewChild('inputSearch')
  public inputSearch!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  public emitValue(): void {
    this.onValue.emit(this.inputSearch.nativeElement.value);
  }
}
