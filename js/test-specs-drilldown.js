tests = [
    ...tests,
    {
        id: "test-drilldown-1",
        description: "Implementing toolbar cosmetics X and Y position coordinates",
        test: {
            // type: 'column2d',
            dataSource: {
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    theme: "fusion",
                    showAnchors: 1
                },
                data: [{
                    "label": "Q1",
                    "value": "1950000",
                    "link": "newchart-json-q1"
                }, {
                    "label": "Q2",
                    "value": "1970000",
                    "link": "newchart-json-q2"
                }, {
                    "label": "Q3",
                    "value": "1910000",
                    "link": "newchart-json-q3"
                }, {
                    "label": "Q4",
                    "value": "2120000",
                    "link": "newchart-json-q4"
                }],

                "linkeddata": [{
                    "id": "q1",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Revenue",
                            "subcaption": "First Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
                        },
                        "data": [{
                            "label": "Jan",
                            "value": "420000"
                        }, {
                            "label": "Feb",
                            "value": "810000"
                        }, {
                            "label": "Mar",
                            "value": "720000"
                        }]
                    }
                }, {
                    "id": "q2",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Revenue",
                            "subcaption": "Second Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
                        },
                        "data": [{
                            "label": "Apr",
                            "value": "550000"
                        }, {
                            "label": "May",
                            "value": "910000"
                        }, {
                            "label": "Jun",
                            "value": "510000"
                        }]
                    }
                }, {
                    "id": "q3",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Revenue",
                            "subcaption": "Third Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
                        },
                        "data": [{
                            "label": "Jul",
                            "value": "680000"
                        }, {
                            "label": "Aug",
                            "value": "620000"
                        }, {
                            "label": "Sep",
                            "value": "610000"
                        }]
                    }
                }, {
                    "id": "q4",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Revenue",
                            "subcaption": "Fourth Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
                        },
                        "data": [{
                            "label": "Oct",
                            "value": "490000"
                        }, {
                            "label": "Nov",
                            "value": "900000"
                        }, {
                            "label": "Dec",
                            "value": "730000"
                        }]
                    }
                }]
            }
        },
        callback: function (chart) {
            chart.configureLink({
                type: 'pie2d', // Set the linked-charts configuration to load all linked charts as Pie
                overlayButton: {
                    message: ' X ', // Set the button to show letter "X"
                    bgColor: '#999999',
                    borderColor: '#cccccc',
                    bold: 1,
                    fontSize: 18,
                    padding: 15
                }
            });
        }
    },
    {
        id: 'test-drilldown-2',
        description: 'calling js functions using drilldown',
        test:{
            dataSource:{
                chart: {
                    caption: "Sales of Liquor",
                    subCaption: "Last week",
                    xAxisName: "Day",
                    yAxisName: "Sales (In USD)",
                    numberPrefix: "$",
                    theme: "fusion",
                    showAnchors: 1
                },
                data: drilldownJSData
            }
        }
    }
]