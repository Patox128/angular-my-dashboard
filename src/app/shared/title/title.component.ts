import { booleanAttribute, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent {
  @Input({required: true}) title!: string;
  @Input({transform: booleanAttribute}) withShadow:boolean = false;
}
