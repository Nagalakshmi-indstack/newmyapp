import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

//   todoList = [ {
//     itemName :'Do You wakeup at 5 A.M ?',
//     itemDueDate :'5-10-21',
//     itemPriority :'high',
//     itemCategory : 'Daily Tasks'

//   },
//   {    
//   itemName :'Do you Written Goals ?',
//   itemDueDate :'7-6-22',
//   itemPriority :'low',
//   itemCategory : 'Daily Tasks'

// },
// {  

//  itemName :'Did you Read/Listen to affiramation ?',
// itemDueDate :'1-7-22',
// itemPriority :'middle',
// itemCategory : 'Daily Tasks'

// },
// { 
//   itemName :'Do you Spend 2 hours to Learn Today ?',
//  itemDueDate :'1-8-22',
//  itemPriority :'low',
//  itemCategory : 'Daily Tasks'
 
//  },
//  { 
//   itemName :'Are you Listening to Stangest Secrete daily ?',
//  itemDueDate :'3-8-22',
//  itemPriority :'high',
//  itemCategory : 'Daily Task'
 
//  },
//  { 
//   itemName :'Are you Giving back socity ?',
//  itemDueDate :'3-8-22',
//  itemPriority :'high',
//  itemCategory : 'Daily Tasks'
//  },
//  { 
//   itemName :'Are you Doing Physical Exercise daily ?',
//  itemDueDate :'3-8-22',
//  itemPriority :'high',
//  itemCategory : 'Daily Tasks'
//  },
//  { 
//   itemName :'Collaboration & accountability ?',
//  itemDueDate :'1-8-22',
//  itemPriority :'high',
//  itemCategory : 'Daily Tasks'
//  },
//  { 
//   itemName :'Did You Finished Assignments ?',
//  itemDueDate :'3-8-22',
//  itemPriority :'high',
//  itemCategory : 'Daily Tasks'
//  },
// ]

//   today :number = Date.now()
// public title: string = 'Tasks';

public todoList: any=[]

constructor(public http: HttpClient) { }

getTodoApiData() {
this.http.get('https://1337-steep-tree-96465010.eu-ws4.runcode.io/test').subscribe(res => {
  console.log(res)
  this.todoList = res;
})
}

ngOnInit(): void {
this.getTodoApiData();

}


selectedDay: string= '';
days: any = [
  'YES then 5 Marks Added',

  'No'
];
radioChangeHandler(event : any){
  this.selectedDay = event.target.value;
}
}

