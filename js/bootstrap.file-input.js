/**
 * 利用label辅助点击file框
 * 可完美解决在ie中的“访问限制”问题（即必须是用户点击才能进行文件上传）
 */
$(function() {
    $('input[type=file]').each(function(i,elem){
        var $input = $(this);
        if(!$input.prop("id")) {
            $input.prop("id", "file_" + i);
        }
        var btnTitle = "浏览";
        if ($input.prop('title')) {
            btnTitle = $input.prop('title');
        }
        $input.wrap("<div class='file-input'></div>");

        var $btn = $('<a class="btn"><label for="' + $input.prop("id") + '">' + btnTitle + '</label></a>');
        $input.before($btn);
        $input.addClass("file-input-opacity");

        $input.change(function() {
            $btn.next('.name').remove();
            $btn.after('<span class="name">'+$(this).val()+'</span>');
        });

    });
});