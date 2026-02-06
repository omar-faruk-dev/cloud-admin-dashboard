import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create', async () => {
    const fixture = await TestBed.configureTestingModule({ imports: [AppComponent] }).createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
