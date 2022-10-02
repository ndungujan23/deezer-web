import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {

  public isMenuVisible = false;

  @Input() searchInput = '';
  @Input() isLoading = false;

  @Output() queryValueChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  onSearchValueChanged(value: string): void {
    this.queryValueChanged.emit(value);
  }

  onSearch(): void {
    this.searchClicked.emit(true);
  }
}
