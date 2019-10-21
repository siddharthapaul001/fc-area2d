tests = [
    ...tests,
    {
        id: "test-num-1",
        description: "No number fomating.",
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
        id: "test-num-2",
        description: "Applying ustom unit specifications",
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
    },
    {
        id: "test-num-3",
        description: "Applying ustom unit specifications with scale recursive",
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
                    scaleRecursively: 1,
                    maxScaleRecursion: 2,
                    theme: "candy"
                },
                data: storageData.slice(3, 5),
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
    },
    {
        id: "test-num-3",
        description: "Applying custom decimal seperator",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    numberSuffix: "/hr",
                    decimalSeparator: "[.]",
                    forceDecimals: 1,
                    decimals: 2,
                    showValues: 1,
                    theme: "fusion"
                },
                data
            }
        }
    },
    {
        id: "test-num-4",
        description: "Applying custom thousand seperator",
        test: {
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    thousandSeparator: "H",
                    thousandSeparatorPosition: "2",
                    formatNumberScale: 0,
                    showValues: 1,
                    theme: "fusion"
                },
                data
            }
        }
    }

    //How to use inThousandSeparator and inDecimalSeparator
]