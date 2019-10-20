tests = [
    ...tests,
    {
        id: "test-num-1",
        description: "Implementing my first area2d chart, checking all required and common chart attributes like caption, subcaption, height, width etc.",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    formatNumber: 0,
                    formatNumberScale: 0,
                    showValues: 1,
                    theme: "fusion"
                },
                data
            }
        }
    },
    {
        test: {
            dataSource: {
                chart: {
                    caption: "Backup Server - Free Storage Volume",
                    subcaption: "Last 24 hours",
                    xaxisname: "Time",
                    yaxisname: "Free Storage Volume",
                    yAxisMaxValue: 4096,
                    rotatevalues: 1,
                    showValues: 1,
                    numdivlines: 4,
                    formatNumberScale: 1,
                    numberScaleValue: "1024,1024,1024",
                    numberScaleUnit: " MB, GB, TB",
                    defaultNumberScale: " KB",
                    scaleRecursively: 0,
                    theme: "fusion"
                },
                data: storageData,
                trendlines: [{
                    line: [{
                        startvalue: "2802434345",
                        color: "#ff0000",
                        displayvalue: "Critical",
                        dashed: "1",
                        valueOnRight: "1"
                    }]
                }]
            }
        }
    }
]