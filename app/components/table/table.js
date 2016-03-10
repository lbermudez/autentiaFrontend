System.register(['angular2/core', 'ag-grid-ng2/main', "../../providers/services/CourseService", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, main_1, CourseService_1, http_1;
    var Table;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (CourseService_1_1) {
                CourseService_1 = CourseService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            // only import this if you are using the ag-Grid-Enterprise
            //import 'ag-grid-enterprise/main';
            Table = (function () {
                function Table(courseService) {
                    this.courseService = courseService;
                    this.gridOptions = {};
                    this.createRowData();
                    this.createColumnDefs();
                    this.showGrid = true;
                }
                Table.prototype.createRowData = function () {
                    var _this = this;
                    this.courseService.getCourses().then(function (res) {
                        _this.rowData = res;
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                };
                Table.prototype.createColumnDefs = function () {
                    this.columnDefs = [
                        { headerName: 'Título', field: 'title', },
                        { headerName: 'Profesor', field: 'teacher.name' },
                        { headerName: 'Nivel', field: 'level' },
                        { headerName: 'Horas', field: 'hours' },
                        { headerName: 'Activo', field: 'active' }
                    ];
                };
                Table.prototype.getDataSource = function () {
                    var dataSource = {
                        rowCount: 15,
                        pageSize: 5,
                        getRows: function (params) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function () {
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
                };
                Table.prototype.onModelUpdated = function () {
                    console.log('onModelUpdated');
                };
                Table.prototype.onGridReady = function ($event) {
                    console.log('onReady');
                    this.gridOptions.api.setDatasource(this.getDataSource());
                };
                Table.prototype.onCellClicked = function ($event) {
                    console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
                };
                Table.prototype.onCellValueChanged = function ($event) {
                    console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
                };
                Table.prototype.onCellDoubleClicked = function ($event) {
                    console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
                };
                Table.prototype.onCellContextMenu = function ($event) {
                    console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
                };
                Table.prototype.onCellFocused = function ($event) {
                    console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
                };
                Table.prototype.onRowSelected = function ($event) {
                    console.log('onRowSelected: ' + $event.node.data.name);
                };
                Table.prototype.onSelectionChanged = function () {
                    console.log('selectionChanged');
                };
                Table.prototype.onBeforeFilterChanged = function () {
                    console.log('beforeFilterChanged');
                };
                Table.prototype.onAfterFilterChanged = function () {
                    console.log('afterFilterChanged');
                };
                Table.prototype.onFilterModified = function () {
                    console.log('onFilterModified');
                };
                Table.prototype.onBeforeSortChanged = function () {
                    console.log('onBeforeSortChanged');
                };
                Table.prototype.onAfterSortChanged = function () {
                    console.log('onAfterSortChanged');
                };
                Table.prototype.onVirtualRowRemoved = function ($event) {
                    // because this event gets fired LOTS of times, we don't print it to the
                    // console. if you want to see it, just uncomment out this line
                    // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
                };
                Table.prototype.onRowClicked = function ($event) {
                    console.log('onRowClicked: ' + $event.node.data.name);
                };
                Table.prototype.onQuickFilterChanged = function ($event) {
                    this.gridOptions.api.setQuickFilter($event.target.value);
                };
                // here we use one generic event to handle all the column type events.
                // the method just prints the event name
                Table.prototype.onColumnEvent = function ($event) {
                    console.log('onColumnEvent: ' + $event);
                };
                Table = __decorate([
                    core_1.Component({
                        selector: 'table-data',
                        templateUrl: './app/components/table/table.html',
                        directives: [main_1.AgGridNg2],
                        styles: ['.toolbar button {margin: 2px; padding: 0px;}'],
                        providers: [CourseService_1.CourseService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [CourseService_1.CourseService])
                ], Table);
                return Table;
            }());
            exports_1("Table", Table);
        }
    }
});
//# sourceMappingURL=table.js.map