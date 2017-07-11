import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OutputComponent} from './output.component';
import {UpdateService} from 'app/core/service/update.service';

describe('Component: Output', () => {

  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        OutputComponent
      ],
      providers: [
        UpdateService,
      ]
    });
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
  });

  // TODO

});
