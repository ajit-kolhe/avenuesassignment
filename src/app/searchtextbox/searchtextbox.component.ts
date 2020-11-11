import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Intsearchtext } from '../intsearchtext';
import { SearchApiService } from '../services/search-api.service'
import {Textsearchmodel } from '../textsearchmodel'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-searchtextbox',
  templateUrl: './searchtextbox.component.html',
  styleUrls: ['./searchtextbox.component.css']
})

export class SearchtextboxComponent implements OnInit  {

  flgDisplayView : boolean = false ; 
  txtSrhModel : Textsearchmodel[] ; 

  constructor(private searchApiService : SearchApiService ) { 
    
  }

  

  ngOnInit(): void {
   
  }
  
  selectedSearchText  : Intsearchtext = {
    id : 0, 
    searchString : ''
  }; 
  
  searchtext = [];//  =  SEARCHTEXT; 
  collection = []; 
  // on selection of list box item 
  onSelect(textStr: Intsearchtext): void {
    this.selectedSearchText = textStr;
    this.flgDisplayView = true; 
    console.log("this.selectedSearchText:"+ this.selectedSearchText);

    var strSearchType : String ="findSpecific";

    let pHeaders = {
      searchvalue:this.selectedSearchText.searchString,
      searchtype:strSearchType,
    }

    this.searchApiService.findAll(pHeaders).subscribe(data => {
      this.collection = data;
    });

  }

  // dataSource = new MatTableDataSource<Intsearchtext>(this.collection);
  // Search on keypress event of text box 
  onKeypressEvent(event: any){
    this.flgDisplayView = false; 
    let callHeaders = {
      searchtype: "keypressten",
      searchvalue: event.target.value,
    }
    
    let pHeaders = {
      searchvalue:event.target.value,
      searchtype:"keypress",
    }

    this.searchApiService.findAll(pHeaders).subscribe(data => {
      this.txtSrhModel = data;
    });

    this.collection = []; 
    if(this.txtSrhModel != undefined){
      this.txtSrhModel.forEach(element => {
        this.collection.push(element); 
      });
    }
    // this.dataSource = new MatTableDataSource<Intsearchtext>(this.collection);
  }

// On Enter event of text box 
  onEnter() { 
    this.flgDisplayView = true; 
    var strSearchType : String ="findSpecific";

    if(this.selectedSearchText.searchString == ""){
        strSearchType="findAll";
    } 

    let pHeaders = {
      searchvalue:this.selectedSearchText.searchString,
      searchtype:strSearchType,
    }

    this.searchApiService.findAll(pHeaders).subscribe(data => {
      this.collection = data;
    });
 }

  displayedColumns: string[] = ['id', 'searchString'];

/*  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }*/
}
