/**
 * Created by 良敏 on 2017/2/6.
 */
$(document).ready(function () {
    $("#btn").button();
    $("#select").selectable();
    $("#btn").on("click",function () {
        if($("#right").hasClass("ui-selected")){
            alert("恭喜你答对了！");
        }
    })
});