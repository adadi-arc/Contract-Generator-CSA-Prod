import { Component, OnInit , ViewChild } from '@angular/core';
import { SpService } from '../../../services/base/sp.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-tracking',
  templateUrl: './list-tracking.component.html',
  styleUrls: ['./list-tracking.component.scss']
})
export class ListTrackingComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['ContractName', 'Created', 'CreatedBy'];
  constructor(public sp : SpService) { }

  ngOnInit(): void {
    this.getTrackingList();
  }

  getTrackingList(){
    debugger
    var query = {
      select:'*,AuthorId,Author/Title',
      expand:'Author'
    }
    this.sp.readItems("Tracking List" , query).then((res:any)=>{
      this.dataSource = new MatTableDataSource(res['d'].results as any[]);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
