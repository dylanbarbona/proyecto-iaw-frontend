/*
import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @HostBinding('class.fileover') fileOver: boolean
  @Output() filesDropped: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  @HostListener('dragover', ['$event'])
  onDragOver(evt){
    evt.preventDefault()
    evt.stopPropagation()
    this.fileOver = true
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(evt){
    evt.preventDefault()
    evt.stopPropagation()
    console.log('Drag leave')
  }

  @HostListener('drop', ['$event'])
  onDrop(evt){
    evt.preventDefault()
    evt.stopPropagation()
    this.fileOver = false
    const files = evt.dataTransfer.files
    this.filesDropped.emit(files)
  }
}
*/