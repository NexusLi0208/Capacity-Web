'use strict';
// 灯光控制
var lightControl = {
    // 灯光控制入口
    init: function () {
        this.addLight();
        this.editLight();
        this.deleteLight();
        this.controllight();
    },
    // 添加设备
    addLight: function () {
        $(document).on("click", ".js-add-light", function () {
            $("#device_modal").show();
        })
    },
    //修改设备
    editLight: function () {
        $(document).on("click", ".js-edit-light", function (e) {
            e.stopPropagation();
            $("#device_modal").show();
        })
    }, //删除设备
    deleteLight: function () {
        $(document).on("click", ".js-delete-light", function (e) {
            e.stopPropagation();
            $.affirm("确定要删除么", function () {
                alert("删除成功！");
            })
        })
    },
    // 控制开关灯
    controllight: function () {
        $(document).on("click", ".light-main li", function () {
            var $state = $(this).find(".item-icon");
            //  ajax
            // success 
            $state.toggleClass("light-on");
        })
    }
}
$(function () {
    // 底部导航页面切换
    $(".bottom-nav li").on("click", function () {
        var pageNum = $(this).attr("data-topage");
        swiperMain.slideTo(pageNum, 500, false);
    })
    // 灯光控制
    lightControl.init();
})