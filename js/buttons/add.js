$.fn.dataTable.ext.buttons.add = {
    className: 'buttons-add btn-success',
    text: '<i class="fa fa-plus"></i> New',
    action: function (e, dt, button, config) {
        let uri = window.location.toString();
        if (uri.indexOf("?") > 0) {
            uri = uri.substring(0, uri.indexOf("?"));
        }
        window.location = uri + '/create';
    }
};
