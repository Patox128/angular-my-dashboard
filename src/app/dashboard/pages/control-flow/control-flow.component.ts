import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';
import { CustombuttonComponent } from '../../../custombutton/custombutton.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, CustombuttonComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>([
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Ember',
  ]);
  public frameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
