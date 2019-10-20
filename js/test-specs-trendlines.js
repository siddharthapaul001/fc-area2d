tests = [
    ...tests,
    {
        id: "test-specs-trendlines-1",
        description: "Implementing trendline with line cosmetics. dashed: 1 not working only &quot;1&quot; works",
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
                    showTrendsLine: 1,
                    plotFillAlpha: 100,
                    trendlineColor: "#ffff00",
                    trendlineThickness: 5,
                    trendlineAlpha: 80,
                    showTrendlinesOnTop: "0",
                    trendValueFont: "Arial",
                    trendValueFontColor: "#0000ff", //Not Available in docs
                    trendValueFontSize: 18,
                    trendValueFontBold: 1,
                    trendValueFontItalic: 1,
                    trendValueBgColor: "#ffff00",
                    trendValueBorderColor: "#ff0000",
                    trendValueAlpha: 80,
                    trendValueBgAlpha: 40,
                    trendValueBorderAlpha: 100,
                    trendValueBorderPadding: 10,
                    trendValueBorderRadius: 20,
                    trendValueBorderThickness: 5,
                    trendValueBorderDashed: 1,
                    trendValueBorderDashLen: 4,
                    trendValueBorderDashGap: 2
                },
                data,
                trendlines: [{
                    line: [{
                            startValue: 4000,
                            displayValue: "HoHoHoh",
                            color: "#00ff00",
                            thickness: 1,
                            alpha: 100,
                            dashed: "1",
                            dashLen: 4,
                            dashGap: 2,
                            valueOnRight: 1,
                            toolText: "HoHoHoh",
                            showOnTop: 1
                        },
                        {
                            startValue: 4000,
                            endValue: 6000,
                            displayValue: "HoHoHoh"
                        },
                        {
                            startValue: 2000,
                            endValue: 3000,
                            isTrendZone: 1,
                            showOnTop: 1,
                            valueOnRight: 1
                        }
                    ]
                }]
            }
        }
    }
]