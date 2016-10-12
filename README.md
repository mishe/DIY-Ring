# DIY-Ring
 自定义环形分布进度条 Custom ring profile progress bar
 
 使用canvas画布实现。

 * ==================================
 * opts.parent 插入到哪里 一个JS元素对象
 * opts.width 宽度 = 2* (半径+弧宽)
 * opts.radius 半径
 * opts.arc 弧宽
 * opts.perent 百分比,数组array，可以死一个活多个，和下面的color对应。
 * opts.color 弧渲染颜色 [底色,...进度色]
 * opts.textColor 文字渲染颜色
 * opts.textSize 文字渲染大小
 * opts.animated 是否以动画的方式绘制 默认false
 * opts.after 绘制完成时执行函数
 * ==================================
 **/
 
 ## 使用范例
 
 ### 多进度
 ```
 ring({
            parent:$('.asset-chart')[0],
            animated: true,
            width: 400,
            radius: 175,
            arc: 50,
            perent: [15,22,35,28],
            color: ['#f6f6f6', '#ff6046','#ffcd00','#b34afc','#5682f7'],
            textColor: '#f30',
            textSize: '30px',
            after: function(){
                //console.timeEnd('用时');
            }
        });
```
### 单进度
```
ring({
            parent:$('.progress-ring')[0],
            animated: true,
            width: 452,
            radius: 210,
            arc: 24,
            perent: [perent],
            color: ['#f6f6f6','#f30'],
            textColor: '#f30',
            textSize: '30px',
            after: function(){
            //console.timeEnd('用时');
            }
        });
```
        
