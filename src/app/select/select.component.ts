import { Component, OnInit, Input } from '@angular/core'; 

const KEY = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  ESC: 27,
  SPACE: 32
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() options;
  selectedValue: string = 'Choose a fruit';
  isOpen: boolean = false;
  focusIndex: number = -1;

  constructor() { }

  ngOnInit() {
  }

  handleKey(e) {
    switch (e.keyCode) {
      case KEY.ENTER:
      case KEY.SPACE:
        if (this.isOpen && this.focusIndex >= 0) {
          this.chooseItem(
            this.getOptionNameFromFocus(this.focusIndex)
          );
        }
      break;
      case KEY.ESC:
        this.closeSelect();
      break;
      case KEY.UP:
        this.focusIndex = this.getPrevIndex(this.focusIndex)
      break;
      case KEY.DOWN:
        if (!this.isOpen) return this.toggleSelect(e);
        this.focusIndex = this.getNextIndex(this.focusIndex)
      break;
    }
  }

  handleOptionClick(e, optionName: string): void {
    this.chooseItem(optionName);
    this.toggleSelect(e);
  }

  toggleSelect(e): void {
    e.preventDefault();
    this.isOpen = !this.isOpen;
    this.focusIndex = -1;
  }

  closeSelect(): void {
    this.isOpen = false;
    this.focusIndex = -1;
  }

  chooseItem(optionName: string): void {
    this.selectedValue = optionName;
  }

  setOptionDomId(optionId: number): string {
    return `select-option-${optionId}`;
  }

  getOptionNameFromFocus(index: number): string {
    return this.options[index].name;
  }

  getNextIndex(currentIndex: number): number {
    return Math.min(this.focusIndex + 1, this.options.length -1);
  }

  getPrevIndex(currentIndex: number): number {
    return Math.max(this.focusIndex - 1, 0);
  }

  getActiveOptionId(): string {
    if (this.focusIndex < 0) return null;
    return `select-option-${this.focusIndex}`;
  }
}
