import { SortService } from './../services/sort.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {



  

  public allSaints = [
    {
      name: 'Saint John'
    },
    {
      name: 'Saint Paul'
    },
    {
      name: 'Saint Peter'
    },
    {
      name: 'Saint Andrew'
    },
    {
      name: 'Saint James'
    },
    {
      name: 'Saint Matthew'
    },
    {
      name: 'Saint Mark'
    },
    {
      name: 'Saint Luke'
    },
    {
      name: 'Saint Jude'
    },
    {
      name: 'Saint Simon'
    },
    {
      name: 'Saint Bartholomew'
    },
    {
      name: 'Saint Thomas'
    },
    {
      name: 'Saint Philip'
    },
    {
      name: 'Saint James the Less'
    },
    {
      name: 'Saint Matthias'
    }
  ];
  public sortedSaints = [];
  public nonSortedSaints = [];

  public sortedSaint: string; 
  public visibleSortedSaint: boolean;
  public visibleAddSaintModal: boolean;
  public visibleSortedSaintListCard: boolean;
  public visibleNonSortedSaintListCard: boolean;
  public visibleSortSaintCard: boolean;

  
  constructor(
    private formBuilder: FormBuilder
  ) {}
  
  
  ngOnInit(): void {
    this.visibleSortedSaint = false;
    this.visibleAddSaintModal = false;
    this.nonSortedSaints = this.allSaints;
  }
  


  public sortSaint(){
    var index = Math.floor(Math.random() * this.allSaints.length);
    this.sortedSaint = this.nonSortedSaints[index].name;
    this.sortedSaints.push(this.allSaints[index]);
    this.nonSortedSaints.splice(index, 1);
    this.visibleSortedSaint = true;
  }

  public addSaint(saintName: string){
    this.allSaints.push({name: saintName});
    this.nonSortedSaints.push({name: saintName});
    this.visibleAddSaintModal = false;
  }

  openSortSaintCard() {
    this.visibleSortSaintCard = true;
    }

  public openAddSaintCard() {
    this.visibleAddSaintModal = true;
  }

  public openNonSortedSaintsListCard() {
    if(this.nonSortedSaints.length == 0){
      this.visibleNonSortedSaintListCard = false;
    }
    else
      this.visibleNonSortedSaintListCard = true;
    }

  public openSortedSaintsListCard() {
    if(this.sortedSaints.length == 0){
      this.visibleSortedSaintListCard = false;
    }
    else
      this.visibleSortedSaintListCard = true;
    }

}
