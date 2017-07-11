import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './form.component';
import {FormBuilderService} from 'app/core/service/form.builder.service';
import {FormService} from 'app/core/service/form.service';
import {UpdateService} from '../core/service/update.service';
import {GearInchMapService} from '../core/service/gear.inch.map.service';
import {CalculateService} from '../core/service/calculate.service';
import {LinkService} from '../core/service/link.service';

describe('Component: Form', () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [
        FormComponent
      ],
      providers: [
        FormService,
        FormBuilderService,
        UpdateService,
        GearInchMapService,
        CalculateService,
        LinkService
      ]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.params = {};
    component.ngOnChanges();
  });

  it('should be invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  describe('app parameters', () => {

    beforeEach(() => {
      component.params = {
        'wheel-diameter': '17',
        'chainrings': '[60]',
        'cogs': '[10,9]'
      };
      component.ngOnChanges();
    });

    it('should populate wheel field correctly', () => {
      const wheelDiameter = getWheelDiameterControl();
      expect(wheelDiameter.valid).toBeTruthy();
      expect(wheelDiameter.value).toEqual(17);
    });

    it('should populate chainring field correctly', () => {
      const chainringTeeth = getChainringTeethControl();
      expect(chainringTeeth.valid).toBeTruthy();
      expect(chainringTeeth.value).toEqual(60);
    });

    it('should populate cog field correctly', () => {
      const cogTeeth = getCogTeethControl();
      expect(cogTeeth.valid).toBeTruthy();
      expect(cogTeeth.value).toEqual(10);
    });

  });

  describe('wheel field', () => {

    let wheelDiameter;

    beforeAll(() => {
      wheelDiameter = getWheelDiameterControl();
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

  describe('chainrings field', () => {

    let chainringTeeth;

    beforeAll(() => {
      chainringTeeth = getChainringTeethControl();
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

  describe('cogs field', () => {

    let cogTeeth;

    beforeAll(() => {
      cogTeeth = getCogTeethControl();
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


  function getCogTeethControl() {
    const cogs: FormArray = <FormArray>component.form.controls['cogs'];
    const thisCog = <FormGroup>cogs.controls[0];
    return thisCog.controls['teeth'];
  }

  function getChainringTeethControl() {
    const chainrings: FormArray = <FormArray>component.form.controls['chainrings'];
    const thisChainring = <FormGroup>chainrings.controls[0];
    return thisChainring.controls['teeth'];
  }

  function getWheelDiameterControl() {
    const wheel: FormGroup = <FormGroup>component.form.controls['wheel'];
    const wheelDiameter = wheel.controls['diameter'];
    return wheelDiameter;
  }


});
