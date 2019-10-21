let tests = [{
    id: "test-gen-1",
    description: "Implementing my first area2d chart, checking all required and common chart attributes like caption, subcaption, height, width etc. Labels are slanted and values are above the plot",
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
                valuePosition: 'ABOVE',
            },
            data
        }
    }
},
{
    id: "test-gen-2",
    description: "Implementing default pallete and toolbar cosmetics",
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
                exportEnabled: 1,
                toolbarPosition: "TL",
                toolbarButtonColor: "#0000ff",
                showToolBarButtonTooltext: "1", //does nothing
                toolbarButtonScale: 5
            },
            data
        }
    }
},
{
    id: "test-gen-3",
    description: "Implementing Y axis max and min values and few number format attributes, custom palettecolor.",
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
    description: "Implementing useEllipses to see ... at the end of text :O.",
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
    description: "Values and labels hidden.",
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
    description: "Implementing anchor and cutomizing it",
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
                showVlineLabelBorder: 0,
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
                setAdaptiveYMin: 1,
                showPrintMenuItem: 1
            },
            data: lData
        }
    }
},
{
    id: "test-gen-9",
    description: "Applying cosmetics on caption",
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
    description: "Implementing alignCaptionWithCanvas",
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
                captionFont: 'Arial',
                subCaptionFont: 'Arial',
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
    description: "Implementing triangular anchors using anchorSides and anchor hover effect",
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
                showHoverEffect: 1,
                anchorHoverSides: 4,
                anchorBgHoverColor: "#000000",
                anchorBgHoverAlpha: 50,
                anchorHoverStartAngle: 40,
                anchorBgColor: "#d3f7ff",
                drawFullAreaBorder: 1,
            },
            data: lData
        }
    }
},
{
    id: "test-gen-12",
    description: "Implementing triangular anchors using anchorSides and hover effects on anchor",
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
                showHoverEffect: 1,
                anchorHoverDip: 1,
                anchorHoverAnimation: 1
            },
            data: lData
        }
    }
},
{
    id: "test-gen-13",
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
{
    id: "test-gen-14",
    description: "Applying crossline with cosmetics",
    test: {
        dataSource: {
            chart: {
                caption: "Sales of Liquor",
                subCaption: "Last week",
                xAxisName: "Day",
                yAxisName: "Sales (In USD)",
                numberPrefix: "$",
                theme: "fusion",
                drawCrossLine: 1,
                crossLineColor: "#ff2755",
                crossLineAlpha: 100,
                crossLineAnimation: 1,
                crossLineAnimationDuration: .2,
                plotColorinTooltip: 1,
                drawCrossLineOnTop: 1
            },
            data
        }
    }
},
{
    id: "test-gen-15",
    description: "Applying crossline with cosmetics",
    test: {
        dataSource: {
            chart: {
                caption: "Sales of Liquor",
                subCaption: "Last week",
                xAxisName: "Day",
                yAxisName: "Sales (In USD)",
                numberPrefix: "$",
                theme: "fusion",
                showPlotBorder: 1,
                plotBorderColor: "#000000",
                plotBorderThickness: 5,
                plotBorderAlpha: 80,
                plotBorderDashed: 1,
                plotBorderDashLen: 4,
                plotBorderDashGap: 2,
                plotFillAngle: 30,
                plotFillRatio: "60,40",
                plotFillAlpha: 80,
                plotGradientColor: "#00ff00,#00ffff",
                showShadow: 1,
                plotFillColor: "#00ff00,#00ffff",
                usePlotGradientColor: 1,
                drawFullAreaBorder: 1,
                // inheritPlotBorderColor: 0 //need to ask
            },
            data
        }
    }
},
{
    id: "test-gen-16",
    description: "Applying div line cosmetics",
    test: {
        dataSource: {
            chart: {
                caption: "Sales of Liquor",
                subCaption: "Last week",
                xAxisName: "Day",
                yAxisName: "Sales (In USD)",
                numberPrefix: "$",
                theme: "fusion",
                divLineColor: "#ff0000",
                divLineThickness: 3,
                divLineAlpha: 50,
                divLineDashed: 1,
                divLineDashLen: 4,
                divLineDashGap: 2,
                zeroPlaneColor: "#ff00ff",
                zeroPlaneThickness: 5,
                zeroPlaneAlpha: 80,
                showZeroPlaneValue: 1,
                showAlternateHGridColor: 1,
                alternateHGridColor: "#00ff00",
                alternateHGridAlpha: 20,
                numVDivLines: 3,
                vDivLineColor: "#0000ff",
                vDivLineThickness: 2,
                vDivLineAlpha: "#ffff00",
                vDivLineDashed: 1,
                vDivLineDashLen: 4,
                vDivLineDashGap: 2,
                showAlternateVGridColor: 1,
                alternateVGridColor: "#ffff00",
                alternateVGridAlpha: 100
            },
            data
        }
    }
},
{
    id: "test-gen-17",
    description: "Implementing toolbar cosmetics X and Y position coordinates",
    test: {
        dataSource: {
            chart: {
                caption: "Sales of Liquor",
                subCaption: "Last week",
                xAxisName: "Day",
                yAxisName: "Sales (In USD)",
                numberPrefix: "$",
                theme: "fusion",
                toolbarX: 20,
                toolbarY: 10,
                exportEnabled: 1
            },
            data
        }
    }
},
{
    id: "test-gen-18",
    description: "Implementing toolbar align attributes",
    test: {
        dataSource: {
            chart: {
                caption: "Sales of Liquor",
                subCaption: "Last week",
                xAxisName: "Day",
                yAxisName: "Sales (In USD)",
                numberPrefix: "$",
                theme: "fusion",
                toolbarVAlign: "bottom",
                toolbarHAlign: "left",
                exportEnabled: 1
            },
            data
        }
    }
}
]