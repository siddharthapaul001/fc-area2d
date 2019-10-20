let tests = [{
        id: "test-gen-1",
        description: "Implementing my first area2d chart, checking all required and common chart attributes like caption, subcaption, height, width etc.",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    showValues: 1,
                    theme: "fusion",
                    rotateLabels: 1,
                    slantLabels: 1,
                    valuePosition: 'ABOVE'
                },
                data
            }
        }
    },
    {
        id: "test-gen-2",
        description: "Implementing my first area2d chart, checking all required and common chart attributes like caption, subcaption, height, width etc.",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    animation: 0,
                    palette: 4,
                    labelDisplay: 'STAGGER',
                    staggerLines: 3,
                    valuePosition: 'BELOW',
                    exportEnabled: true
                },
                data
            }
        }
    },
    {
        id: "test-gen-3",
        description: "Implementing my first area2d chart, checking all required and common chart attributes like caption, subcaption, height, width etc.",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    showXAxisLine: 1,
                    showYAxisLine: 1,
                    xAxisLineColor: "#ff0000",
                    yAxisLineColor: "#00ffff",
                    yAxisValuesStep: 2,
                    yAxisMinValue: 2000,
                    yAxisMaxValue: 10000,
                    forceYAxisValueDecimals: 1,
                    yAxisValueDecimals: 2,
                    axisLineAlpha: 20,
                    numberPrefix: "$",
                    showValues: 1,
                    theme: "fusion",
                    animation: 1,
                    animationDuration: 3,
                    labelDisplay: 'ROTATE', // NONE WILL DO NO OPTIMAIZATION
                    paletteColors: "#ff2d57", //only one palette color works in area chart
                },
                data: discontinuedData
            }
        }
    },
    {
        id: "test-gen-4",
        description: "Implementing my first area2d chart, checking all required and common chart attributes like caption, subcaption, height, width etc.",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    showValues: 1,
                    rotateValues: 1,
                    theme: "fusion",
                    connectNullData: 1,
                    maxLabelHeight: 30,
                    useEllipsesWhenOverflow: 1
                },
                data: discontinuedData
            }
        }
    },
    {
        id: "test-gen-5",
        description: "Implementing my first area2d chart, checking all required and common chart attributes like caption, subcaption, height, width etc.",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    theme: "fusion",
                    showValues: 0,
                    showLabels: 0,
                },
                data
            }
        }
    },
    {
        id: "test-gen-6",
        description: "Implementing labelStep to skip some data labels though datapoins are plotted on chart",
        test: {
            dataSource: {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Monthly revenue for last year",
                    xAxisName: "Month",
                    yAxisName: "Amount",
                    numberPrefix: "$",
                    theme: "fusion",
                    labelStep: 3,
                    showDivLineValues: 0,
                    showLimits: 0
                },
                data: lData
            }
        }
    },
    {
        id: "test-gen-7",
        description: "Implementing labelStep to skip some data labels though datapoins are plotted on chart",
        test: {
            dataSource: {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Monthly revenue for last year",
                    xAxisName: "Month",
                    yAxisName: "Amount",
                    numberPrefix: "$",
                    theme: "fusion",
                    adjustDivLines: 0,
                    numDivLines: 2,
                    drawAnchors: 1,
                    // anchorStartAngle: 30,
                    anchorRadius: 5,
                    anchorBorderColor: "#ff2d57",
                    anchorBorderThickness: 5,
                    anchorBgColor: "#dddddd",
                    clickUrl: "https://www.fusioncharts.com"
                },
                data: lData
            }
        }
    },
    {
        id: "test-gen-8",
        description: "Implementing labelStep to skip some data labels though datapoins are plotted on chart",
        test: {
            dataSource: {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Monthly revenue for last year",
                    xAxisName: "Month",
                    yAxisName: "Amount",
                    numberPrefix: "$",
                    theme: "fusion",
                    adjustDivLines: 0,
                    numDivLines: 2,
                    setAdaptiveYMin: 1,
                    showPrintMenuItem: 1
                },
                data: lData
            }
        }
    },
    {
        id: "test-gen-9",
        description: "Implementing labelStep to skip some data labels though datapoins are plotted on chart",
        test: {
            dataSource: {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Monthly revenue for last year",
                    xAxisName: "Month",
                    yAxisName: "Amount",
                    xAxisPosition: 'top',
                    yAxisPosition: 'right',
                    numberPrefix: "$",
                    rotateLabels: 0,
                    theme: "fusion",
                    captionAlignment: 'right',
                    captionOnTop: 0,
                    captionFontSize: 42,
                    subCaptionFontSize: 24,
                    captionFont: 'Verdana',
                    subCaptionFont: 'Verdana',
                    captionFontColor: '#0000ff',
                    subCaptionFontColor: '#ffff00',
                    captionFontBold: 1,
                    subCaptionFontBold: 1,
                    // alignCaptionWithCanvas: 'left',
                    captionHorizontalPadding: 20
                },
                data: lData
            }
        }
    },
    {
        id: "test-gen-10",
        description: "Implementing labelStep to skip some data labels though datapoins are plotted on chart",
        test: {
            dataSource: {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Monthly revenue for last year",
                    xAxisName: "Month",
                    yAxisName: "Amount",
                    numberPrefix: "$",
                    theme: "fusion",
                    captionFontSize: 42,
                    subCaptionFontSize: 24,
                    captionAlignment: 'left',
                    showXAxisLine: 0,
                    showYAxisValues: 0,
                    captionFont: 'Verdana',
                    subCaptionFont: 'Verdana',
                    captionFontColor: '#0000ff',
                    subCaptionFontColor: '#ffff00',
                    captionFontBold: 1,
                    subCaptionFontBold: 1,
                    alignCaptionWithCanvas: 0
                },
                data: lData
            }
        }
    },
    {
        id: "test-gen-11",
        description: "Implementing triangular anchors using anchorSides",
        test: {
            dataSource: {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Monthly revenue for last year",
                    xAxisName: "Month",
                    yAxisName: "Amount",
                    numberPrefix: "$",
                    theme: "fusion",
                    anchorRadius: 6,
                    anchorBorderThickness: 2,
                    anchorBorderColor: "#127fcb",
                    anchorSides: 3,
                    anchorBgColor: "#d3f7ff",
                    drawFullAreaBorder: 1
                },
                data: lData
            }
        }
    },
    {
        id: "test-gen-12",
        description: "Implementing images inside anchors",
        test: {
            dataSource: {
                chart: {
                    caption: "Fun DOB",
                    subCaption: "Hehe",
                    xAxisName: "Month",
                    yAxisName: "Amount",
                    theme: "fusion",
                    anchorBorderColor: "#127fcb",
                    anchorAlpha: 80,
                    anchorImageAlpha: 80,
                    anchorImagePadding: 5,
                    anchorImageScale: 20,
                    connectNullData: 1,
                    canvasBgColor: "ffffff,dddddd",
                    canvasBgRatio: "60,40",
                    canvasBgAlpha: "100,50",
                    bgColor: "#ff0000,#00ff00,#0000ff",
                    bgAngle: 45,
                    canvasBgAngle: 180
                },
                data: dobData
            }
        }
    },
]