var DIR_FOLDER = './'; //trên host để trống
CKEDITOR.editorConfig = function( config )
{
        // Define changes to default configuration here. For example:
    config.language = 'vi';
    
        // config.uiColor = '#AADC6E';
        
        config.toolbar_Full = [
            ['Source','-','Save','NewPage','Preview','-','Templates'],
            ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
            ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
            '/',
            ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
            ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],
            ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
            ['BidiLtr', 'BidiRtl' ],
            ['Link','Unlink','Anchor'],
            ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe'],
            '/',
            ['Styles','Format','Font','FontSize'],
            ['TextColor','BGColor'],
            ['Maximize', 'ShowBlocks','-','About']
            ];
        
        config.entities = false;
        //config.entities_latin = false;
        config.height = 350; 

        config.filebrowserBrowseUrl = DIR_FOLDER+'ckfinder/ckfinder.html';

        config.filebrowserImageBrowseUrl = DIR_FOLDER+'ckfinder/ckfinder.html?type=Images';

        config.filebrowserFlashBrowseUrl = DIR_FOLDER+'ckfinder/ckfinder.html?type=Flash';

        config.filebrowserUploadUrl = DIR_FOLDER+'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';

        config.filebrowserImageUploadUrl = DIR_FOLDER+'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';

        config.filebrowserFlashUploadUrl = DIR_FOLDER+'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';

};  