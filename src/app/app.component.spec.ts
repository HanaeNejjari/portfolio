import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import any = jasmine.any;

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      declarations: []
    }).
    compileComponents();
  });
  beforeEach( ()=> {
fixture = TestBed.createComponent(AppComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'Hello, portfolio' `, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hello, portfolio');
  });

  it('should have the title "Hello, portfolio"', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component.title).toEqual('Hello, portfolio'); // Teste l'affichage
  });
});

  it('should render title "portfolio"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio');
  });

