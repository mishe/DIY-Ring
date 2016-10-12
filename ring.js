/**
 * ==================================
 * opts.parent 插入到哪里 一个JS元素对象
 * opts.width 宽度 = 2* (半径+弧宽)
 * opts.radius 半径
 * opts.arc 弧宽
 * opts.perent 百分比
 * opts.color 弧渲染颜色 [底色,进度色]
 * opts.textColor 文字渲染颜色
 * opts.textSize 文字渲染大小
 * opts.animated 是否以动画的方式绘制 默认false
 * opts.after 绘制完成时执行函数
 * ==================================
 **/

module.exports = function drawRing(opts) {
    var _opts = {
        parent: document.body,
        width: 100,
        radius: 45,
        arc: 5,
        perent: [15,22,35,28],
        color: ['#f6f6f6', '#ff6046','#ffcd00','#b34afc','#5682f7'],
        textColor: '#000',
        textSize: '14px',
        animated: false,
        after: function() {}
    }, k;
    for (k in opts) _opts[k] = opts[k];

    var width = _opts.width,
        radius = _opts.radius,
        arc = _opts.arc,
        x=0,
        perent=_opts.perent,
        color = _opts.color,
        textSize = _opts.textSize,
        textColor = _opts.textColor,
        ctx=document.createElement('canvas');

    _opts.perent.unshift(0);
    _opts.parent.appendChild(ctx);
    ctx = ctx.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = width;

    function clearFill() {
        ctx.clearRect(0, 0, width, width);
    }

    function fillBG() {
        ctx.beginPath();
        ctx.lineWidth = arc;
        ctx.strokeStyle = color[0];
        ctx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function fillArc(x) {
        var start=parseInt(perent[0]);
        for(var i=1;i<perent.length;i++) {
            ctx.beginPath();
            ctx.lineWidth = arc;
            ctx.strokeStyle = color[i];
            ctx.arc(width / 2, width / 2, radius, (-90+start*3.6) * Math.PI / 180, (x*perent[i]/100*3.6 - 90+start*3.6) * Math.PI / 180);
            ctx.stroke();
            start+=parseInt(perent[i]);
            // console.log(i,start)
        }
    }

    function fillText(x) {
        ctx.font = textSize + ' Arial';
        ctx.fillStyle = textColor;
        ctx.textBaseline = "middle";
        ctx.textAlign = 'center';
        ctx.fillText(x.toFixed(1) + '%', width / 2, width / 2-15);
    }

    function fill(x) {
        fillBG();
        fillArc(x);
        // fillText(x);
    }

    if (!_opts.animated) return fill(perent);

    // fill(x);
    !function animate() {
        if (++x > 100) return _opts.after && _opts.after();
        setTimeout(animate, 10);
        clearFill();
        fill(x);
    }();
}
