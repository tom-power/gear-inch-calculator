import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from 'app/core/service/form.service';
import {Params} from '@angular/router';
import {Bike} from '../core/model/bike.interface';

@Component({
  selector: 'app-form-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() params: Params;
  @Output() update = new EventEmitter<Bike>();

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.form = this.formService.initForm(this.params);
  }

  add(controlName: string, id: number) {
    this.formService.add(this.form, controlName, id);
  }

  remove(controlName: string, id: number) {
    this.formService.remove(this.form, controlName, id);
  }

  updateOutput() {
    if (this.form.valid) {
      this.update = this.form.value;
    }
  }

}
