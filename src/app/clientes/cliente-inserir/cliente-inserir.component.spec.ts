import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInserirComponent } from './cliente-inserir.component';

describe('ClienteInserirComponent', () => {
  let component: ClienteInserirComponent;
  let fixture: ComponentFixture<ClienteInserirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
