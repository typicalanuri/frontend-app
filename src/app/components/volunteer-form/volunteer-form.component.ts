import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-services';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit{
  volunteerform!: FormGroup;
  constructor(private fb: FormBuilder, apiService: ApiService){}

  ngOnInit(){
    this.volunteerform = this.fb.group({
      name: ['', Validators.required],
      expertise:['Technology', Validators.required],
      membership: ['', Validators.required],
      duration:['', Validators.required]
    });
  }

  onSubmit(form: FormGroup){
    console.log('Valid?', form.valid);

  }
}
