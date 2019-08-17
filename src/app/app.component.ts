import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public formCadastro: FormGroup;
  public isValid = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.creatForm();
  }

  creatForm() {
    this.formCadastro = this.formBuilder.group({
      nome: [''],
      fileSingle: ['', Validators.required],
      fileMultiple: ['', Validators.required],
    });
    this.formCadastro.valueChanges.subscribe(() => {
      this.isValid = this.formCadastro.valid;
    });
  }


  submit() {
    console.log(this.formCadastro.get('nome').value);
    console.log(this.formCadastro.get('files').value);
  }

  deleteAttachment(file) {
    console.log(file);
    file.splice(1);
  }

}
