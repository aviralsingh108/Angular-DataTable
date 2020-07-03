
import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface Nutritions {
  name: string;
  calories: number;
  fat:number;
  carbs:number;
  protein:number;
  sodium:number;
  calcium:number;
  iron:number;

}

const ELEMENT_DATA: Nutritions[] = [
  {name: 'Peanuts', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'MysorePak', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Banana', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Apple', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Mango', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Naan', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Rice', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Roti', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Chai', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},
  {name: 'Coffee', calories: 100, fat: 1.0079, carbs: 1, protein: 1, sodium: 1, calcium: 1, iron: 1},


];

/**
 * @title Table with selection
 */


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['select', 'name', 'calories',	'fat',	'carbs',	'protein',	'sodium',	'calcium',	'iron'];
  dataSource = new MatTableDataSource<Nutritions>(ELEMENT_DATA);
  selection = new SelectionModel<Nutritions>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Nutritions): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
}
