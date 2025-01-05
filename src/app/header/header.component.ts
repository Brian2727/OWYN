import { Component } from '@angular/core';
import {DropdownDirective} from "../shared/dropdown.directive";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DropdownDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData() {
    this.dataStorageService.saveRecipes();
  }
}
