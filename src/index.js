import 'bootstrap';
// import './scss/main.scss'
import './css/style.css';
import './css/style2.css';
import { proto } from "./compiled.js";
// import './move_pb.js'
// import './message_pb.js'

(function($, window) {

    console.log(proto)

    var ws;
    $("#connect").click(function() {
        console.log("connecting")
        ws = new WebSocket("ws://192.168.2.119:8080/ws");
        ws.onopen = function() {

            console.log("链接成功...");
        };

        ws.onmessage = function(evt) {
            console.log(evt)

             var reader = new FileReader();
             reader.readAsArrayBuffer(evt.data);
             reader.onload = function (e) {
                 var buf = new Uint8Array(reader.result);
                 console.log(proto.Message.decode(buf))
             }
        };

        ws.onclose = function() {
            // 关闭 websocket
            console.log("连接已关闭...");
        };
    })
    $("#close").click(function() {
        ws.close()
    })



    $("#button1").click(function() {
        var message = proto.Message.create({ path: "ok" })
        var move = proto.Move.create({ speed: 23, direction: 33 })
        message.move = move
        ws.send(proto.Message.encode(message).finish())

    })

    $("#button2").click(function() {})
    $("#button3").click(function() {})

})(jQuery, window)