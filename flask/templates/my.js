                 var myConfig = {
      graphset: [{
        type: "bar",
        x: 0,
        y: 0,
        height: "100%",
        width: "30%",
        title: {
          text: "Livello Acqua",
          y: "80%",
          fontColor: "#515151",
          bold: false
        },
        subtitle: {
          text: "l",
          y: "76%",
          fontSize: 15,
          bold: false
        },
        scaleY: {
          lineColor: "none",
          values: "0:600:10",
          guide: {
            visible: false
          },
          tick: {
            margin: 3,
            lineWidth: 4,
            size: 15,
            lineColor: "#5F5F5F",
            placement: "outter",
            rules: [{
              rule: "%i % 2 == 1",
              lineWidth: 2
            }]
          },
          minorTicks: 4,
          minorTick: {
            lineColor: "#C1C1C1",
            placement: "inner",
            size: 7
          },
          item: {
            fontSize: 16,
            rules: [{
              rule: "%i % 2 == 1",
              visible: false
            }]
          }
        },
        "scale-y-2": {
          values: "0:600:10",
          lineColor: "none",
          item: {
            visible: false
          },
          guide: {
            visible: false
          },
          tick: {
            placement: "inner",
            size: 40,
            padding: 0,
            margin: 0,
            offsetX: 50,
            lineColor: "#fff",
            rules: [{
              rule: "%i == 0 || %i == 10",
              visible: false
            }]
          }
        },
        plot: {
          barsOverlap: "100%",
          borderRadius: 2,
          hoverState: {
            visible: false
          },
          tooltip: {
            visible: false
          }
        },
        plotarea: {
          marginBottom: "30%",
          marginTop: "10%",
          _marginRight: "35%"
        },
        scaleX: {
          visible: false
        },
        series: [{
          values: [600],
          backgroundColor: "#fff",
          borderWidth: 4,
          borderColor: "#C1C1C1",
          maxTrackers: 0,
          barWidth: "100%",
          tooltip: {
            visble: false
          }
        }, {
          values: [0],
          backgroundColor: "lightblue",
          barWidth: "93%",
          maxTrackers: 0,
          tooltip: {
            visble: false
          },
          valueBox: {
            text: "%v",
            placement: "bottom-out",
            offsetY: 0,
            fontSize: 28,
            fontColor: "#515151",
          }
        }]
      }]
    };

    function clone(obj) {
        var copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
    var myConfig2 = clone(myConfig)

zingchart.THEME="classic";

var myConfig3 = {
    "background-color":"#ecf2f6",
    "graphset":[
        {
            "type":"bar",
            "background-color":"#FFF",
            "border-color":"#dae5ec",
            "border-width":"1px",
            "height":"30%",
            "width":"96%",
            "x":"2%",
            "y":"3%",
            "title":{
                "margin-top":"7px",
                "margin-left":"9px",
                "font-family":"Arial",
                "text":"Stato Serbatoio",
                "background-color":"none",
                "shadow":0,
                "text-align":"left",
                "font-size":"11px",
                "font-weight":"bold",
                "font-color":"#707d94"
            },
            "scale-y":{
                "values":"0:600:50",
                "max-ticks":4,
                "max-items":4,
                "line-color":"none",
                "tick":{
                    "visible":false
                },
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding-right":"5px"
                },
                "guide":{
                    "rules":[
                        {
                          "rule":"%i == 0",
                          "line-width":0
                        },
                        {
                          "rule":"%i > 0",
                          "line-style":"solid",
                          "line-width":"1px",
                          "line-color":"#d2dae2",
                          "alpha":0.4
                        }

                    ]
                }
            },
            "scale-x":{
                "items-overlap":true,
                "max-items":9999,
                "values":["Stato Impianto","Stato Impianto Teorico"],
                "offset-y":"1px",
                "line-color":"#d2dae2",
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "padding-top":"2px"
                },
                "tick":{
                    "visible":false,
                    "line-color":"#d2dae2"
                },
                "guide":{
                    "visible":false
                }
            },
            "plotarea":{
                "margin":"45px 20px 38px 45px"
            },
            "plot":{
                "bar-width":"33px",
                "hover-state":{
                    "visible":false
                },
                "animation":{
                    "delay":0,
                    "effect":"ANIMATION_SLIDE_BOTTOM"
                },
                "tooltip":{
                    "font-color":"#fff",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "border-radius":"6px",
                    "shadow":false,
                    "padding":"5px 10px",
                    "background-color":"#707e94"
                }
            },
            "series":[
                {
                    "values":[0,0],
                    "styles":[
                        {
                            "background-color":"#A1E2FF"
                        },
                        {
                            "background-color":"#0099FF"
                        },
                        {
                            "background-color":"#ad6bae"
                        },
                        {
                            "background-color":"#707d94"
                        },
                        {
                            "background-color":"#f3950d"
                        },
                        {
                            "background-color":"#e62163"
                        },
                        {
                            "background-color":"#4e74c0"
                        },
                        {
                            "background-color":"#9dc012"
                        }
                    ]
                }
            ]
        },
        {
            "type":"hbar",
            "background-color":"#fff",
            "border-color":"#dae5ec",
            "border-width":"1px",
            "x":"2%",
            "y":"35.2%",
            "height":"63%",
            "width":"30%",
            "title":{
                "margin-top":"7px",
                "margin-left":"9px",
                "text":"POSSO REALIZZARE UN ALTRO GRAFICO CON ALTRI DATI",
                "background-color":"none",
                "shadow":0,
                "text-align":"left",
                "font-family":"Arial",
                "font-size":"11px",
                "font-color":"#707d94"
            },
            "scale-y":{
                "line-color":"none",
                "tick":{
                    "visible":false
                },
                "item":{
                    "visible":false
                },
                "guide":{
                    "visible":false
                }
            },
            "scale-x":{
                "values":["Pippo"],
                "line-color":"none",
                "tick":{
                    "visible":false
                },
                "item":{
                    "width":200,
                    "text-align":"left",
                    "offset-x":206,
                    "offset-y":-12,
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "padding-bottom":"8px"
                },
                "guide":{
                    "visible":false
                }
            },
            "plot":{
                "bars-overlap":"100%",
                "bar-width":"12px",
                "thousands-separator":",",
                "tooltip":{
                    "font-color":"#ffffff",
                    "background-color":"#707e94",
                    "font-family":"Arial",
                    "font-size":"11px",
                    "border-radius":"6px",
                    "shadow":false,
                    "padding":"5px 10px"
                },
                "hover-state":{
                    "background-color":"#707e94"
                },
                "animation":{
                    "delay":0,
                    "effect":"ANIMATION_EXPAND_LEFT"
                }
            },
            "plotarea":{
                "margin":"50px 15px 10px 15px"
            },
            "series":[
                {
                    "values":[150],
                    "z-index":2,
                    "styles":[
                        {
                            "background-color":"#4dbac0"
                        },
                        {
                            "background-color":"#4dbac0"
                        },
                        {
                            "background-color":"#4dbac0"
                        },
                        {
                            "background-color":"#4dbac0"
                        },
                        {
                            "background-color":"#4dbac0"
                        },
                        {
                            "background-color":"#4dbac0"
                        }
                    ],
                    "tooltip-text":"$%node-value"
                },
                {
                    "max-trackers":0,
                    "values":[150],
                    "data-rvalues":[150],
                    "background-color":"#d9e4eb",
                    "z-index":1,
                    "value-box":{
                        "visible":true,
                        "offset-y":"-12px",
                        "offset-x":"-54px",
                        "text-align":"right",
                        "font-color":"#8391a5",
                        "font-family":"Arial",
                        "font-size":"11px",
                        "text":"$%data-rvalues",
                        "padding-bottom":"8px"
                    }
                }
            ]
        },
        {
            "type":"line",
            "background-color":"#fff",
            "border-color":"#dae5ec",
            "border-width":"1px",
            "width":"64%",
            "height":"63%",
            "x":"34%",
            "y":"35.2%",
            "title":{
                "margin-top":"7px",
                "margin-left":"12px",
                "text":"livello acqua in f(t)",
                "background-color":"none",
                "shadow":0,
                "text-align":"left",
                "font-family":"Arial",
                "font-size":"11px",
                "font-color":"#707d94"
            },
            "plot":{
                "animation":{
                    "delay":0,
                    "effect":"ANIMATION_SLIDE_LEFT"
                }
            },
            "plotarea":{
                "margin":"50px 25px 70px 46px"
            },
            "scale-y":{
                "values":"0:600:25",
                "line-color":"none",
                "guide":{
                    "line-style":"solid",
                    "line-color":"#d2dae2",
                    "line-width":"1px",
                    "alpha":0.5
                },
                "tick":{
                    "visible":false
                },
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding-right":"5px"
                }
            },
            "scale-x":{
                "line-color":"#d2dae2",
                "line-width":"2px",
                "step": '1',
                "tick":{
                    "line-color":"#d2dae2",
                    "line-width":"1px"
                },
                "maxItems":"20",
                "guide":{
                    "alfa": 1,
                    "visible":true,
                    "lineStyle":"solid"
                },
                "scrollX":{

                },
                "item":{
                    "font-color":"#8391a5",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding-top":"5px"
                }
            },
            "legend":{
                "layout":"x4",
                "background-color":"none",
                "shadow":0,
                "margin":"auto auto 15 auto",
                "border-width":0,
                "item":{
                    "font-color":"#707d94",
                    "font-family":"Arial",
                    "padding":"0px",
                    "margin":"0px",
                    "font-size":"9px"
                },
                "marker":{
                    "show-line":"true",
                    "type":"match",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "size":4,
                    "line-width":2,
                    "padding":"3px"
                }
            },
            "crosshair-x":{
                "lineWidth":1,
                "line-color":"#707d94",
                "plotLabel":{
                    "shadow":false,
                    "font-color":"#000",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding":"5px 10px",
                    "border-radius":"5px",
                    "alpha":1
                },
                "scale-label":{
                    "font-color":"#ffffff",
                    "background-color":"#707d94",
                    "font-family":"Arial",
                    "font-size":"10px",
                    "padding":"5px 10px",
                    "border-radius":"5px"
                }
            },
            "tooltip":{
                "visible":false
            },
            "series":[
                {
                    "values":[],
                    "text":"Stato Impianto",
                    "line-color":"#A1E2FF",
                    "line-width":"2px",
                    "shadow":0,
                    "marker":{
                        "background-color":"#fff",
                        "size":2,
                        "border-width":1,
                        "border-color":"#A1E2FF",
                        "shadow":0
                    },
                    "palette":0
                },
                {
                    "values":[],
                    "text":"Stato Impianto Teorico",
                    "line-width":"2px",
                    "line-color":"#0099FF",
                    "shadow":0,
                    "marker":{
                        "background-color":"#fff",
                        "size":2,
                        "border-width":1,
                        "border-color":"#0099FF",
                        "shadow":0
                    },
                    "palette":1,
                    "visible":1
                },
                {
                    "values":[450],
                    "text":"Livello Massimo",
                    "line-color":"#969696",
                    "line-width":"2px",
                    "shadow":0,
                    "marker":{
                        "background-color":"#969696",
                        "size":0,
                        "border-width":1,
                        "border-color":"#969696",
                        "shadow":0
                    },
                    "palette":2,
                    "visible":1
                },
                {
                    "values":[300],
                    "text":"Livello Medio",
                    "line-color":"#969696",
                    "line-width":"2px",
                    "shadow":0,
                    "marker":{
                        "background-color":"#969696",
                        "size":0,
                        "border-width":1,
                        "border-color":"#969696",
                        "shadow":0
                    },
                    "palette":3
                }
            ]
        }
    ]
};

var myConfig4 = {
 	type: 'line',
 	backgroundColor:'#FFFFFF',
 	title:{
 	  text:'Time Series Data with null values',
 	  adjustLayout: true,
 	  fontColor:"#E3E3E5",
 	  marginTop: 7
 	},
 	legend:{
 	  align: 'center',
 	  verticalAlign: 'top',
 	  backgroundColor:'none',
 	  borderWidth: 0,
 	  item:{
 	    fontColor:'#E3E3E5',
 	    cursor: 'hand'
 	  },
 	  marker:{
 	    type:'circle',
 	    borderWidth: 0,
 	    cursor: 'hand'
 	  }
 	},
 	plotarea:{
 	  margin:'dynamic 70'
 	},
 	plot:{
 	  aspect: 'spline',
 	  lineWidth: 2,
 	  marker:{
 	    borderWidth: 0,
 	    size: 5
 	  }
 	},
 	scaleX:{
 	  lineColor: '#E3E3E5',
 	  zooming: true,
 	  zoomTo:[0,60],
 	  minValue: 1459468800000,
 	  step: 'day',
 	  item:{
 	    fontColor:'#E3E3E5'
 	  },
 	  transform:{
 	    type: 'date',
 	    all: '%D %M %d<br>%h:%i:%s'
 	  }
 	},
 	scaleY:{
 	  minorTicks: 1,
 	  lineColor: '#E3E3E5',
 	  tick:{
 	    lineColor: '#E3E3E5'
 	  },
 	  minorTick:{
 	    lineColor: '#E3E3E5'
 	  },
 	  minorGuide:{
 	    visible: true,
 	    lineWidth: 1,
 	    lineColor: '#E3E3E5',
 	    alpha: 0.7,
 	    lineStyle: 'dashed'
 	  },
 	  guide:{
 	    lineStyle: 'dashed'
 	  },
 	  item:{
 	    fontColor:'#E3E3E5'
 	  }
 	},
 	tooltip:{
 	  borderWidth: 0,
 	  borderRadius: 3
 	},
 	preview:{
 	  adjustLayout: true,
 	  borderColor:'#E3E3E5',
 	  mask:{
 	    backgroundColor:'#E3E3E5'
 	  }
 	},
 	crosshairX:{
 	  plotLabel:{
 	    multiple: true,
 	    borderRadius: 3
 	  },
 	  scaleLabel:{
 	    backgroundColor:'#53535e',
 	    borderRadius: 3
 	  },
 	  marker:{
 	    size: 7,
 	    alpha: 0.5
 	  }
 	},
 	crosshairY:{
 	  lineColor:'#E3E3E5',
 	  type:'multiple',
 	  scaleLabel:{
 	    decimals: 2,
 	    borderRadius: 3,
 	    offsetX: -5,
 	    fontColor:"#2C2C39",
 	    bold: true
 	  }
 	},
 	shapes:[
              {
                type:'rectangle',
                id:'view_all',
                height:'20px',
                width:'75px',
                borderColor:'#E3E3E5',
                borderWidth:1,
                borderRadius: 3,
                x:'85%',
                y:'11%',
                backgroundColor:'#53535e',
                cursor:'hand',
                label:{
                  text:'View All',
                  fontColor:'#E3E3E5',
                  fontSize:12,
                  bold:true
                }
              }
            ],
	series: [
		{
			values: [],
			lineColor:'#E34247',
			marker:{
			  backgroundColor:'#E34247'
			}
		},
		{
		  values:[],
		  lineColor: '#FEB32E',
		  marker:{
		    backgroundColor:'#FEB32E'
		  }
		},
		{
		  values: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
		  lineColor:'#31A59A',
		  marker:{
		    backgroundColor:'#31A59A'
		  }
		},
		{
		  values: [450, 450 , 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450],
		  lineColor:'#31A59A',
		  marker:{
		    backgroundColor:'#31A59A'
		  }
		}
	]
};
