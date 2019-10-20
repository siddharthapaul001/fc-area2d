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
    }
]