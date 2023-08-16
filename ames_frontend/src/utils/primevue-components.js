import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Checkbox from 'primevue/checkbox';
   // optional
import Row from 'primevue/row';

export default{
    install(app){
        app.component('InputText', InputText);
        app.component('Button', Button);
        app.component('DataTable', DataTable);
        app.component('Column', Column);
        app.component('ColumnGroup', ColumnGroup);
        app.component('Row', Row);
        app.component('Checkbox',Checkbox)
    },
};
