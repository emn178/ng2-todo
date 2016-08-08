import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[confirm]'
})
export class ConfirmDirective {
  @Input() message: string;
  @Output() confirm = new EventEmitter();

  @HostListener('click') onClick(e) {
    if (!confirm(this.message)) {
      return;
    }
    this.confirm.emit(e);
  }
}
