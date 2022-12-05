import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Crud } from '../crud';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  noteForm!: FormGroup
  noteObj: Crud = {
    id: '',
    note_title: '',
    note_desc: ''
  }

  constructor(public fb:FormBuilder,public __crud:CrudService) { 
    this.noteForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      // title:['',Validators.required]
    })
  }

  ngOnInit(): void {
    // this.__crud.getNotes().subscribe((response:any)=>{
    //   console.log(response,";;;;;;")
    // })

  }

  addNote(){
    const {value} = this.noteForm
    this.noteObj.id= ''
    this.noteObj.note_title= value.title
    this.noteObj.note_desc= value.description
    this.__crud.addNote(this.noteObj).then((res) => {
      console.log(res)
    })
  }
  
 
}
