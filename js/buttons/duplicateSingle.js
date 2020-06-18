/**
 * DataTables duplicateSingle button.
 *
 * -- Laravel Integration --
 *
 * Button::make('duplicateSingle')
 *
 */
$.fn.dataTable.ext.buttons.duplicateSingle = {
    name: 'duplicateSingle',
    extend: 'selectedSingle',
    className: 'buttons-duplicate btn-success',
    text: '<i class="fa fa-copy"></i> Duplicate',
    action: function (e, dt, node, config) {
        // Start in edit mode, and then change to create
        let editor = config.editor || dt.editor();
        editor.edit(dt.rows({selected: true}).indexes(), {
            title: config.formTitle || 'Duplicate Record',
            buttons: config.formButtons || [
                {
                    text: '<i class="fa fa-copy"></i> Duplicate',
                    className: 'btn btn-success btn-editor-duplicate',
                    action: function () {
                        this.submit();
                    }
                },
                {
                    text: 'Cancel', className: 'btn btn-secondary ml-2', action: function () {
                        this.close();
                    }
                }
            ]
        }).mode('create');
    }
};
