import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ShoppingListEditComponent } from './shopping-list-edit.component';
import { FormsModule } from '@angular/forms';

describe('ShoppingListEditComponent', () => {
  let component: ShoppingListEditComponent;
  let fixture: ComponentFixture<ShoppingListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListEditComponent ],
      imports: [ FormsModule ],
      providers: [
        provideMockStore({ })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
