import {Component} from 'angular2/core';
import {CourseService} from "../../providers/services/CourseService";
import {HTTP_PROVIDERS} from "angular2/http";
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';


// only import this if you are using the ag-Grid-Enterprise
//import 'ag-grid-enterprise/main';

@Component({
    selector: 'table-data',
    templateUrl: './app/components/table/table.html',
    directives: [AgGridNg2],
    providers: [CourseService, HTTP_PROVIDERS],
    styles: ['.toolbar button {margin: 2px; padding: 0px;}']   
})
export class Table {
        
    private gridOptions: GridOptions;
    private showGrid: boolean;    
    private columnDefs: any[];
    private rowCount: string;
    

    constructor(private courseService: CourseService) {  
        this.courseService = courseService;                      
        this.gridOptions = <GridOptions>{};        
        this.createColumnDefs();      
        this.showGrid = true;       
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

    private getDataSource(countCourses) {
        var dataSource = {
            sort: 'asc',
            rowCount: countCourses,
            pageSize: 5,

            getRows: function(params) {                                             
                this.getCourses(params);
            },

            getCourses: function(params) {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        var data = JSON.parse(xhttp.responseText);                                                
                        var lastRow = -1;
                        if (data.length <= params.endRow) {
                            lastRow = data.length;
                        }

                        params.successCallback(data, lastRow);
                    }
                }

                if (params.sortModel.length != 0) {
                    this.sort = params.sortModel[0].sort;
                }
                xhttp.open("GET", "http://localhost:8080/courses/" + CourseService.ACTIVES + "/" + this.sort + "/" + params.startRow + "/" + this.pageSize, true);
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
        this.courseService.countCourses(CourseService.ACTIVES).then(
            (res) => {                
                this.gridOptions.api.setDatasource(this.getDataSource(res));
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )        
        
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