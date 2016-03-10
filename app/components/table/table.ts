import {Component} from 'angular2/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {CourseService} from "../../providers/services/CourseService";
import {HTTP_PROVIDERS} from "angular2/http";


// only import this if you are using the ag-Grid-Enterprise
//import 'ag-grid-enterprise/main';

@Component({
    selector: 'table-data',
    templateUrl: './app/components/table/table.html',
    directives: [AgGridNg2],
    styles: ['.toolbar button {margin: 2px; padding: 0px;}'],
    providers: [CourseService, HTTP_PROVIDERS]
})
export class Table {
    courseService: CourseService;    
    private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;

    constructor(courseService: CourseService) {        
        this.courseService = courseService;
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();      
        this.showGrid = true;       
    }

       

    private createRowData() {        
        this.courseService.getCourses().then(
            (res) => {                                
                this.rowData = res;
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )
    }

    private createColumnDefs() {
        this.columnDefs = [            
            { headerName: 'Título', field: 'title',  },
            { headerName: 'Profesor', field: 'teacher.name' },
            { headerName: 'Nivel', field: 'level' },
            { headerName: 'Horas', field: 'hours'},
            { headerName: 'Activo', field: 'active' }
        ];
    }

    private getDataSource() {
        var dataSource = {
            rowCount: 15,
            pageSize: 5, // changing to number, as scope keeps it as a string
            getRows: function(params) {

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {                        
                        var dataAfterSorting = JSON.parse(xhttp.responseText);
                        var rowsThisPage = dataAfterSorting.slice(params.startRow, params.endRow);
                        var lastRow = -1;
                        if (dataAfterSorting.length <= params.endRow) {
                            lastRow = dataAfterSorting.length;
                        }
                        params.successCallback(rowsThisPage, lastRow);

                    }
                };
                xhttp.open("GET", "http://localhost:8080/courses/true/asc", true);
                xhttp.send();
                               

            }
        };
        return dataSource;
    }

      

    private onModelUpdated() {
        console.log('onModelUpdated');        
    }

    private onGridReady($event) {
        console.log('onReady'); 
        this.gridOptions.api.setDatasource(this.getDataSource());
    }

    private onCellClicked($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellValueChanged($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    }

    private onCellDoubleClicked($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellContextMenu($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellFocused($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    }

    private onRowSelected($event) {
        console.log('onRowSelected: ' + $event.node.data.name);
    }

    private onSelectionChanged() {
        console.log('selectionChanged');
    }

    private onBeforeFilterChanged() {
        console.log('beforeFilterChanged');
    }

    private onAfterFilterChanged() {
        console.log('afterFilterChanged');
    }

    private onFilterModified() {
        console.log('onFilterModified');
    }

    private onBeforeSortChanged() {
        console.log('onBeforeSortChanged');        
    }

    private onAfterSortChanged() {
        console.log('onAfterSortChanged');
    }

    private onVirtualRowRemoved($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    }

    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    }

    private onQuickFilterChanged($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    private onColumnEvent($event) {
        console.log('onColumnEvent: ' + $event);
    }

}