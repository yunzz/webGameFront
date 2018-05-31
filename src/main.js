

;
(function($, window) {
    var comment;

    function Trues() {

    }

    comment = Trues.comment = {}

    Trues.refreshHoldjs=function() {
        var Holder= require( 'holderjs')
        Holder.run({
            images: $('img').get()
        });
    }

    Trues.article = {
        chat: '',
        overClass: 'te-art-over',
        initHover: function(selector) {
            var articleChat = selector
            // 浮动按钮
            articleChat.addClass('te-article-over')
            var chat = $('#chat-button')
            var that = this;
            articleChat.mouseenter(function(e) {
                var $this = $(this)
                console.log($this)
                var margin = $this.css('margin-top')
                var top = $this.position().top + parseInt($this.css('margin-top')) - chat.height()
                chat.css('top', top)
                chat.css('display', 'block')
                chat.chatTarget = $this

            })
            articleChat.mouseleave(function(e) {

            })
            var replay = $("#reply")
            chat.find('#chat-button1').click(function() {

                var $this = $(this)
                var target = chat.chatTarget

                if (target) {
                    var $next = target.next('#reply')

                    if ($next.length > 0) {
                        console.log(replay.is(':visible'))
                        if (replay.is(':visible')) {
                            target.removeClass(that.overClass)
                        } else {
                            target.addClass(that.overClass)
                        }
                        replay.slideToggle()

                    } else {
                        replay.hide(0)
                        target.after(replay)
                        if (chat.beforeTarget) {
                            chat.beforeTarget.removeClass(that.overClass)
                        }
                        chat.beforeTarget = target
                        target.addClass(that.overClass)

                        replay.slideDown()

                    }
                }

            })
            chat.children('#chat-button2').click(function() {
                alert($(this).attr('id'))
            })
            chat.children('#chat-button3').click(function() {
                alert($(this).attr('id'))
            })
            replay.find("#reply-cancel").click(function() {
                replay.find("textarea").val('')
                chat.beforeTarget.removeClass(that.overClass)
                replay.slideToggle()
            })

            // Article reply
            var artCommit = '<div class="media  border-bottom mb-3">\
                    <img class="align-self-start mr-3" src="holder.js/44x44?theme=sky" alt="Generic placeholder image">\
                    <section class="media-body ">\
                        <h5 class="mt-0">Top-aligned media</h5>\
                        <hr/>\
                        <section>\
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\
                            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\
                        </section>\
                        <footer class="te-ask"><a href="#" class="">回复</a></footer>\
                    </section>\
                </div>'
            $("#reply-commit").click(function() {
                var text = $("#comment").append(artCommit)
                replay.find("textarea").val('')
                chat.beforeTarget.removeClass(that.overClass)
                replay.slideToggle()
                $("#comment").animate({ scrollTop: $(document).height() }, 1000);
                Trues.refreshHoldjs()
            })


            // 文章显示评论数量
            articleChat.each(function() {
                var chatId = $(this).data('chat')
                if (chatId) {
                    var $this = $(this)
                    var bubble = $('<span class="te-mark badge badge-warning">999</span>')
                    $this.after(bubble)

                    bubble.css('top', $this.position().top + parseInt($this.css('margin-top')))
                }
            })
        }

    }


    window.Trues = Trues
})(jQuery, window);

(function() {
    // 文章浮动评论
    Trues.article.initHover($('article')
        .find('p,img,.message,pre,:not(pre) li')
        .not('.ui.message *'));

    // 评论回复按钮
    (function() {
        var askReplayDialog = "#ask-reply"
        var askCommitBtn = "#ask-reply-commit"
        var askCancelBtn = "#ask-reply-cancel"

        var artReplyDialog = "#reply"
        var artCommitBtn = "#reply-commit"
        var artCancelBtn = "#reply-cancel"

        $(document).on('click', '.te-ask', function() {
            var replay = $(askReplayDialog)
            var $this = $(this)
            var $next = $this.next(askReplayDialog)

            if ($next.length > 0) {
                replay.slideToggle()
            } else {
                replay.hide(0)
                $this.after(replay)
                replay.slideDown()

            }
        })
        // Comment cancel
        $(askCancelBtn).click(function() {
            $(askReplayDialog).find("textarea").val('')
            $(askReplayDialog).slideToggle()
        })


        // Commit
        // 评论回复
        var commitContent = '<div class="media mt-3">\
                            <a class="pr-3" href="#"> <img class="te-avatar44" src="holder.js/44x44?theme=lava"   alt="Generic placeholder image"> </a>\
                            <div class="media-body ">\
                                <h6 class="mt-0">Media heading</h6>\
                                <p>{}</p>\
                            </div>\
                            </div>'
        $(askCommitBtn).click(function() {
            var textarea = $(askReplayDialog).find("textarea")
            var text = textarea.val()
            var comment = commitContent.replace('{}', text)
            $(askReplayDialog).siblings('footer').before(comment)
            textarea.val('')
            $(askReplayDialog).slideToggle(0)
                            Trues.refreshHoldjs()

        })


    })()

    // 防止评论区滚动的时候滚动外部滚动条
    $(function() {
        var scrollTop = -1; // 鼠标进入到区域后，则存储当前window滚动条的高度
        $('#comment').hover(function() {
            scrollTop = $(window).scrollTop();
        }, function() {
            scrollTop = -1;
        });

        // 鼠标进入到区域后，则强制window滚动条的高度
        $(window).scroll(function() {
            scrollTop !== -1 && $(this).scrollTop(scrollTop);
        })
    })


})()