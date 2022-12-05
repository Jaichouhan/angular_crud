import { Injectable } from '@angular/core';
import { Crud } from './crud';
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fs:Firestore) { }

  addNote(note:Crud){
    note.id = doc(collection(this.fs,'id')).id
    return addDoc(collection(this.fs,'Notes'),note)
  }

  //get All notes from database
  getNotes(){
    let notesRef = collection(this.fs,'Notes')
    return collectionData(notesRef,{idField:"id"})
  }

  deleteNote(note:Crud){
    let docRef = doc(this.fs,`Notes/${note.id}`)
    return deleteDoc(docRef)
  }

  updateNote(note:Crud,notes:any){
    let docRef= doc(this.fs,`Notes/${note.id}`);
    return updateDoc(docRef,notes)

  }
}
