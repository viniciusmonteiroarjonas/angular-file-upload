import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'single-file-upload',
  templateUrl: './single-file-upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SingleFileUploadComponent,
      multi: true
    }
  ],
  styleUrls: ['./single-file-upload.component.css']
})
export class SingleFileUploadComponent implements ControlValueAccessor {

  public attachements: any = [];
  public onChange: Function;
  public files: [];
  public limit: number = 1;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {

    for (let i = 0; i < event.length; i++) {
      this.attachements.push(event[i]);
    }

    this.onChange(this.attachements);
    this.files = this.attachements;

    if (this.files.length > this.limit) {
      alert('É permitido apenas 2 arquivos');
      this.files.splice(1, 1);
    }

  }

  constructor(private host: ElementRef<HTMLInputElement>) { }

  writeValue(value: null) {
    this.host.nativeElement.value = '';
    this.files = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
