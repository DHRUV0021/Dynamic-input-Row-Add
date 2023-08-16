import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';  
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastr: ToastrService) { }  
  
  dynamicArray: Array<AppModule> = [];  
  newDynamic: any = {};  
  ngOnInit(): void {  
      this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic);  
  }  

  /**
   * Add Row 
   * @param index 
   * @returns 
   */
  addRow(index: any) {    
      this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic);  
      this.toastr.success('New row added successfully', 'New Row');  
      console.log(this.dynamicArray);  
      return true;  
  }  
    

  /**
   * Delete Row 
   * @param index 
   * @returns 
   */
  deleteRow(index: number) {  
      if(this.dynamicArray.length ==1) {  
        this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
          return false;  
      } else {  
          this.dynamicArray.splice(index, 1);  
          this.toastr.warning('Row deleted successfully', 'Delete row');  
          return true;  
      }  
  }  
} 