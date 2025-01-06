import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export default class ChangeDetectionComponent {
  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: 2024,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2024,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkSignal.update((framework) => ({
        ...framework,
        name: 'React',
      }));

      console.log('Hecho');
    }, 2000);
  }
}
