$.fn.dataTable.ext.buttons.csv = {
    className: 'buttons-csv btn-primary',
    text: '<i class="fa fa-file-text-o" data-toggle="tooltip" data-title="Export to CSV"></i>',
    action: function (e, dt, button, config) {
        window.location = _buildUrl(dt, 'csv');
    }
};
