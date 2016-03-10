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
        var rowData: any[] = [];
        this.courseService.getCourses().then(
            (res) => {                
                rowData = res;
                this.rowData = rowData;
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )
    }

    private createColumnDefs() {
        this.columnDefs = [            
            { headerName: 'Título', field: 'title' },
            { headerName: 'Profesor', field: 'teacher.name' },
            { headerName: 'Nivel', field: 'level' },
            { headerName: 'Horas', field: 'hours'},
            { headerName: 'Activo', field: 'active' }
        ];
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

    private onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    private onReady() {
        console.log('onReady');
        this.calculateRowCount();
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