import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {createComponent} from '@angular/core';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent]

    }).
    compileComponents();
  });
fixture = TestBed.createComponent(AppComponent);
app = fixture.componentInstance;
fixture.detectChanges();
});
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the title 'Hello, portfolio' `, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hello, portfolio');
  });

  it('should render title "portfolio"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio');
  });

  it('should have the title "Hello, portfolio"', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio'); // Teste l'affichage
  });
  });
