'use strict';
// 窗帘控制
var curtainControl = {
    // 窗帘控制入口
    init: function () {
        this.addCurtain();
        this.editCurtain();
        this.deleteCurtain();
        this.controlCurtain();
    },
    // 添加设备
    addCurtain: function () {
        $(document).on("click", ".js-add-curtain", function () {
            $("#curtain_modal").show();
        })
    },
    //修改设备
    editCurtain: function () {
        $(document).on("click", ".js-edit-curtain", function (e) {
            e.stopPropagation();
            $("#curtain_modal").show();
        })
    }, //删除设备
    deleteCurtain: function () {
        $(document).on("click", ".js-delete-curtain", function (e) {
            e.stopPropagation();
            $.affirm("确定要删除么", function () {
                alert("删除成功！");
            })
        })
    },
    // 控制窗帘
    controlCurtain: function () {
        // 开启窗帘
        $(document).on("click", ".curtain-on", function () {
            //  ajax
            // success 
            $(this).addClass("active").siblings().removeClass("active");
        });
        // 暂停窗帘
        $(document).on("click", ".curtain-suspend", function () {
            //  ajax
            // success 
            $(this).addClass("active").siblings().removeClass("active");
        });
        // 关闭窗帘
        $(document).on("click", ".curtain-off", function () {
            //  ajax
            // success 
            $(this).addClass("active").siblings().removeClass("active");
        })
    }
}