$(function() {

    // Create the chart
    $('#container').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Month Wise Units Sold'
      },
      xAxis: {
        type: 'category'
      },
  
      legend: {
        enabled: false
      },
  
      plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function (e) {
                        hs.htmlExpand(null, {
                            pageOrigin: {
                                x: e.pageX || e.clientX,
                                y: e.pageY || e.clientY
                            },
                            headingText: this.series.name,
                            maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                this.y + ' sessions',
                            width: 200
                        });
                    }
                }
            },
            marker: {
                lineWidth: 1
            }
        }
    },
  
      series: [{
        name: 'Category',
        colorByPoint: true,
        data: [{
          name: 'Grocery',
          y: 400,
          drilldown: 'Grocery'
        }, {
          name: 'Drinks',
          y: 200,
          drilldown: 'Drinks'
        }, {
          name: 'Vegetables',
          y: 600,
          drilldown: 'Vegetables'
        }, {
          name: 'Meat Production',
          y: 750,
          drilldown: 'Meat Production'
        }]
      }],
      drilldown: {
        series: [{
          id: 'Grocery',
          data: [
            ['Fresh Bread & Rolls', 70, 'Fresh Bread & Rolls'],
            ['Coffee', 100, 'Coffee'],
            ['Cold Cereal', 230, 'Cold Cereal']
          ],
          keys: ['name', 'y', 'drilldown']
        }, {
          id: 'Drinks',
          data: [
            ['Bottled Juices', 50],
            ['Soup', 150],
          ]
        }, {
          id: 'Fresh Bread & Rolls',
          data: [
            ['01-july-2020', 4],
            ['02-july-2020', 2],
            ['03-july-2020', 1],
            ['04-july-2020', 2],
            ['05-july-2020', 1],
            ['06-july-2020', 4],
            ['07-july-2020', 2],
            ['08-july-2020', 1],
            ['09-july-2020', 2],
            ['10-july-2020', 1],
          ]
        }, {
          id: 'Coffee',
          data: [
            ['01-july-2020', 4],
            ['02-july-2020', 2],
            ['03-july-2020', 1],
            ['04-july-2020', 2],
            ['05-july-2020', 1],
            ['06-july-2020', 4],
            ['07-july-2020', 2],
            ['08-july-2020', 1],
            ['09-july-2020', 2],
            ['10-july-2020', 1],
          ]
        }]
      }
    })
  });
  