import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';
import { Food } from '../model/Food';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { startWith, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  foodList: Food[] = [
    {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];
  displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs','protein','remove'];
  states;
  myControl = new FormControl();
  filteredOptions : Observable<string[]>;

  tooltipContent: string;

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  favoriteSeason: string;

  selectedValue: string;

  checked = false;
  labelPosition = 'Status: ';

  datePicker = new FormControl();

  //slider
  sliderDisabled = false;
  invert = false;
  thumbLabel = false;
  value = 50;
  vertical = false;

  //toggle
  divDisabled = false;
  divChecked = false;

  isavailable = true;
  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  selectItem="N/A";

  constructor(public dialog: MatDialog) {
    this.loadStates();
  }

  loadStates() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Delaware,\
       Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
       Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
       Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
       North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
       South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
       Wisconsin, Wyoming';
    this.states = allStates.split(/, +/g).map(function (state) {
       return {
          value: state.toUpperCase(),
          display: state
       };
    });
    this.filteredOptions=this.myControl.valueChanges.pipe(
      tap(value => console.log(value)),
      startWith(''),
      map(value => this.filterValues(value))
    );
  }

  filterValues(search: string){
    return this.states.filter(value=>value.value.toLowerCase().indexOf(search.toLowerCase())===0);
  }

  send() {
    console.log(this.myControl.value);
  }

  ngOnInit() {
    this.tooltipContent='Change here...';
  }

  removeAll(){
    this.foodList=[];
  }

  removeAt(i){    
    this.foodList.splice(i,1);
    this.foodList=JSON.parse(JSON.stringify(this.foodList));
  }

  openDialog(){
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '400px',       
      width: '400px',
      disableClose: true,
      position: {top: '30px'},
      hasBackdrop: false,
      backdropClass: `btn-default`,
      panelClass: `btn-default`,
    });
    dialogRef.afterClosed().subscribe(result => {
      //if(JSON.stringify(result) != "{}"){
      if(result != undefined){
        this.foodList.push({
          name: result.name || 'default', 
          calories: result.calories || 10, 
          fat: 1, 
          carbs: 2, 
          protein: 3
        });
        this.foodList=JSON.parse(JSON.stringify(this.foodList));
      }
    });
  }

  editDialog(element){
    const dialogRef = this.dialog.open(PopupComponent,{
      width:'300px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result != undefined){
        console.log('The dialog was closed',result);
      }
    })
  }

  postChanges(){
    alert('Post changes to server (written to console)!');
    console.log(JSON.stringify(this.foodList));
  }

  handleProductClick()
  {
    console.log(this.checked);
  }

  changedToggle(){
    this.divChecked=!this.divChecked;
  }

  getChange(val: string) {
    this.selectItem=val;
  }

  toggleTemplate(event) {
    this.isavailable = !this.isavailable; 
    console.log(event);
  }
}
