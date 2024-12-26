import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false
  @HostListener('click', ['$event']) toggleDropdown(event: MouseEvent) {
    this.isOpen = !this.isOpen;

  }
}
