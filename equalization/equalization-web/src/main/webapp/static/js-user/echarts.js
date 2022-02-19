
// 获取选择框内容开始
var serveSelects = document.getElementById("serve");
var serve = '基本公共教育';
serveSelects.onchange = function () {
  var serveIndexs = serveSelects.selectedIndex;  //选中项的索引
  serve = serveSelects.options[serveIndexs].value;
  //console.log(serveSelects.options[serveIndexs].value);
}

var citySelects = document.getElementById('city');
var city = '北京';
citySelects.onchange = function () {
  var cityIndexs = citySelects.selectedIndex;  //选中项的索引
  city = citySelects.options[cityIndexs].value;
}
// 获取选择框内容结束


//初始化echarts实例
var myChart = echarts.init(document.getElementById('economy'));
var option;
//指定图表的配置项和数据
var fun = function (data) {
  myChart.setOption(option = {
    title: {
      text: '数据折线图',
      left: '1%'
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '5%',
      right: '15%',
      bottom: '10%'
    },
    xAxis: {
      data: data.map(function (item) {
        return item[0];
      })
    },
    yAxis: {},
    toolbox: {
      right: 10,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: [{
      startValue: '2011'
    }, {
      type: 'inside'
    }],
    visualMap: {
      top: 50,
      right: 10,
      pieces: [{
        gt: 0,
        lte: 50000,
        color: '#93CE07'
      }, {
        gt: 50000,
        lte: 1000000,
        color: '#FBDB0F'
      }, {
        gt: 1000000,
        lte: 2000000,
        color: '#FC7D02'
      }, {
        gt: 2000000,
        lte: 3000000,
        color: '#FD0100'
      }, {
        gt: 3000000,
        lte: 4000000,
        color: '#AA069F'
      }, {
        gt: 4000000,
        color: '#AC3B2A'
      }],
      outOfRange: {
        color: '#999'
      }
    },
    series: {
      type: 'line',
      data: data.map(function (item) {
        return item[1];
      }),
      markLine: {
        silent: true,
        lineStyle: {
          color: '#333'
        },
        data: [{
          yAxis: 50000
        }, {
          yAxis: 1000000
        }, {
          yAxis: 2000000
        }, {
          yAxis: 3000000
        }, {
          yAxis: 4000000
        }]
      }
    }
  });
}
//var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
//ROOT_PATH + '/data/asset/data/aqi-beijing.json'

var btn = document.querySelector('.btn');
btn.onclick = function () {
  $.get(url + city + serve, fun);
}

$.get('../../json/data.json', fun);

//使用指定的配置项和数据显示图表
option && myChart.setOption(option);