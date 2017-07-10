import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {GearInchMapService} from './service/gear.inch.map.service';
import {CalculateService} from './service/calculate.service';
import {FormBuilderService} from 'app/service/form.builder.service';
import {LinkService} from './service/link.service';
import {UpdateService} from 'app/service/update.service';
import {FormService} from 'app/service/form.service';

const appRoutes: Routes = [
  {path: '*', component: AppComponent}
];

describe('Component: App', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        UpdateService,
        FormService,
        FormBuilderService,
        LinkService,
        CalculateService,
        GearInchMapService
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should be invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  describe('wheel field', () => {

    let wheelDiameter;

    beforeEach(() => {
      const wheel: FormGroup = <FormGroup>component.form.controls['wheel'];
      wheelDiameter = wheel.controls['diameter'];
    });

    it('should be invalid when empty', () => {
      wheelDiameter.setValue('');
      expect(wheelDiameter.valid).toBeFalsy();
    });

    it('should be invalid when not a number', () => {
      wheelDiameter.setValue('sdfds');
      expect(wheelDiameter.valid).toBeFalsy();
    });

    it('should be valid when is a number', () => {
      wheelDiameter.setValue(10);
      expect(wheelDiameter.valid).toBeTruthy();
    });

  });

  describe('chainrings', () => {

    let chainringTeeth;

    beforeEach(() => {
      const chainrings: FormArray = <FormArray>component.form.controls['chainrings'];
      const thisChainring = <FormGroup>chainrings.controls[0];
      chainringTeeth = thisChainring.controls['teeth'];
    });

    it('should be invalid when empty', () => {
      chainringTeeth.setValue('');
      expect(chainringTeeth.valid).toBeFalsy();
    });

    it('should be invalid when not a number', () => {
      chainringTeeth.setValue('sdfds');
      expect(chainringTeeth.valid).toBeFalsy();
    });

    it('should be valid when is a number', () => {
      chainringTeeth.setValue(10);
      expect(chainringTeeth.valid).toBeTruthy();
    });

  });

  describe('cogs', () => {

    let cogTeeth;

    beforeEach(() => {
      const cogs: FormArray = <FormArray>component.form.controls['cogs'];
      const thisCog = <FormGroup>cogs.controls[0];
      cogTeeth = thisCog.controls['teeth'];
    });

    it('should be invalid when empty', () => {
      cogTeeth.setValue('');
      expect(cogTeeth.valid).toBeFalsy();
    });

    it('should be invalid when not a number', () => {
      cogTeeth.setValue('sdfds');
      expect(cogTeeth.valid).toBeFalsy();
    });

    it('should be valid when is a number', () => {
      cogTeeth.setValue(10);
      expect(cogTeeth.valid).toBeTruthy();
    });

  });


});
