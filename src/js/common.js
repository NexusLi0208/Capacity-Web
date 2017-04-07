'use strict';
// 通用方法
$(function () {
    // 模态框
    $(document).on("click", ".js-close", function () {
        $("#affirm_modal").remove();
        $(".modal-main").hide();
    })
    $.extend({
        // 确认框
        affirm: function (text, callback) {
            var modal = "<div class='modal-main' id='affirm_modal'>" +
                "<div class='modal-bg js-close'></div>" +
                "<div class='modal-dolog'>" +
                "<div class='modal-content sm-modal animate bounceIn'>" +
                "<div class='modal-header text-l'>提示</div>" +
                "<div class='modal-body'>" +
                "<p class='txt'>" + text + "</p>" +
                "</div>" +
                "<div class='modal-footer'>" +
                "<button type='button' class='modal-btn cancel-btn floatl js-close'>取消</button>" +
                "<button type='button' class='modal-btn success-btn floatr js-success'>确定</button>" +
                "</div></div></div></div>";
            $('body').append(modal);
            $(".js-success").on("click", function () {
                if (callback) {
                    callback();
                }
                $("#affirm_modal").remove();
                $(document).off("click", ".js-success");
            })
        }
    })

    // 模拟下拉框
    var dropBox = {
        init: function () {
            this.click();
            this.backup();
            this.select();
        },
        // 点击
        click: function () {
            $("input[real=select]").on("focus", function () {
                var $list = $(this).siblings("ul");
                if ($list.is(":hidden")) {
                    $(".select-list").hide();
                    $list.slideDown(100);
                } else {
                    $list.slideUp(100);
                }
            })
        },
        // 选择选项
        select: function () {
            $(".select-list li").on("click", function () {
                var $ipt = $(this).parents("ul").siblings("input");
                $ipt.val($(this).text());
            })
        },
        // 点击其他区域收回
        backup: function () {
            $(document).on("click", function () {
                var eo = $(event.target);
                if ($("input[real=select]").siblings("ul").is(":visible") && eo.attr("real") != "select") {
                    $(".select-list").slideUp(100);
                }
            })
        }
    }

    dropBox.init();

    // 灯光控制
    lightControl.init();
    // 窗帘控制
    curtainControl.init();
    // 底部导航页面切换
    $(".bottom-nav li").on("click", function () {
        var pageNum = $(this).attr("data-topage");
        swiperMain.slideTo(pageNum, 500, false);
    })


})