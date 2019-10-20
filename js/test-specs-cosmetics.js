tests = [
    ...tests,
    {
        id: "test-cosmetics-1",
        description: "Applying all Axis Name cosmetics",
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
                    xAxisNameFont: "Arial",
                    xAxisNameFontColor: "#ff0000",
                    xAxisNameFontSize: 32,
                    xAxisNameFontBold: 1,
                    xAxisNameFontItalic: 1,
                    xAxisNameBgColor: "#ffff00",
                    xAxisNameBorderColor: "#000000",
                    xAxisNameAlpha: 80,
                    xAxisNameFontAlpha: 100,
                    xAxisNameBgAlpha: 60,
                    xAxisNameBorderAlpha: 100,
                    xAxisNameBorderPadding: 5,
                    xAxisNameBorderRadius: 20,
                    xAxisNameBorderThickness: 5,
                    xAxisNameBorderDashed: 1,
                    xAxisNameBorderDashLen: 4,
                    xAxisNameBorderDashGap: 2,
                    yAxisNameFont: "Arial",
                    yAxisNameFontColor: "#ff0000",
                    yAxisNameFontSize: 32,
                    yAxisNameFontBold: 1,
                    yAxisNameFontItalic: 1,
                    yAxisNameBgColor: "#ffff00",
                    yAxisNameBorderColor: "#000000",
                    yAxisNameAlpha: 80,
                    yAxisNameFontAlpha: 100,
                    yAxisNameBgAlpha: 60,
                    yAxisNameBorderAlpha: 100,
                    yAxisNameBorderPadding: 5,
                    yAxisNameBorderRadius: 20,
                    yAxisNameBorderThickness: 5,
                    yAxisNameBorderDashed: 1,
                    yAxisNameBorderDashLen: 4,
                    yAxisNameBorderDashGap: 2,
                    valueFont: "Arial",
                    valueFontColor: "#00ffff",
                    valueFontSize: 24,
                    valueFontBold: 1,
                    valueFontItalic: 1,
                    valueBgColor: "#aaaaaa",
                    valueBorderColor: "#000000",
                    valueAlpha: 20,
                    valueFontAlpha: 100,
                    valueBgAlpha: 80,
                    valueBorderAlpha: 100,
                    valueBorderThickness: 3,
                    valueBorderPadding: 5,
                    valueBorderRadius: 20,
                    valueBorderDashed: 1,
                    valueBorderDashLen: 4,
                    valueBorderDashGap: 2,
                    textOutline: 1
                },
                data
            }
        }
    },
    {
        id: "test-cosmetics-2",
        description: "Applying Cosmetics on Y Axis Values and X Axis Labels",
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
                    yAxisValueFont: "Arial",
                    yAxisValueFontColor: "#ff0000",
                    yAxisValueFontSize: 18,
                    yAxisValueFontBold: 1,
                    yAxisValueFontItalic: 1,
                    yAxisValueBgColor: "#ffff00",
                    yAxisValueBorderColor: "#000000",
                    yAxisValueAlpha: 80,
                    yAxisValueBgAlpha: 20,
                    yAxisValueBorderAlpha: 100,
                    yAxisValueBorderPadding: 5,
                    yAxisValueBorderRadius: 50,
                    yAxisValueBorderThickness: 5,
                    yAxisValueBorderDashed: 1,
                    yAxisValueBorderDashLen: 4,
                    yAxisValueBorderDashGap: 2,
                    yAxisValueLink: "https://www.wikipedia.org/",
                    labelFont: "Arial",
                    labelFontColor: "#ff0000",
                    labelFontSize: 18,
                    labelFontBold: 1,
                    labelFontItalic: 1,
                    labelBgColor: "#ffff00",
                    labelBorderColor: "#000000",
                    labelAlpha: 80,
                    labelBgAlpha: 20,
                    labelBorderAlpha: 100,
                    labelBorderPadding: 5,
                    labelBorderRadius: 50,
                    labelBorderThickness: 5,
                    labelBorderDashed: 1,
                    labelBorderDashLen: 4,
                    labelBorderDashGap: 2,
                    labelLink: "https://www.wikipedia.org/"
                },
                data
            }
        }
    },
    {
        id: "test-cosmetics-3",
        description: "Applying border cosmetics on canvas and chart",
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
                    showcanvasborder: 1,
                    canvasBorderColor: "#ff0000",
                    canvasBorderThickness: 5,
                    canvasBorderAlpha: 80,
                    showBorder: 1,
                    borderColor: "#000000",
                    borderThickness: 3,
                    borderAlpha: 90,
                    drawFullAreaBorder: 1,
                    logoURL: "https://www.fusioncharts.com/favicon.ico",
                    logoLeftMargin: 10,
                    logoTopMargin: -10,
                    logoPosition: 'BL',
                    logoAlpha: 50,
                    logoScale: 80,
                    logoLink: "https://www.fusioncharts.com"
                },
                data
            }
        }
    }
]