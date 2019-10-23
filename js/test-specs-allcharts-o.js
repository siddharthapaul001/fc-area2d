const charts = [{
    type: 'area2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales of Liquor",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "showValues": "1",
            "theme": "fusion"
        },

        "data": [{
            "label": "Mon",
            "value": "4123"
        }, {
            "label": "Tue",
            "value": "4633"
        }, {
            "label": "Wed",
            "value": "5507"
        }, {
            "label": "Thu",
            "value": "4910"
        }, {
            "label": "Fri",
            "value": "5529"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
,{
    type: 'bar2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 5 Stores by Sales",
            "subCaption": "Last month",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Bakersfield Central",
            "value": "880000"
        }, {
            "label": "Garden Groove harbour",
            "value": "730000"
        }, {
            "label": "Los Angeles Topanga",
            "value": "590000"
        }, {
            "label": "Compton-Rancho Dom",
            "value": "520000"
        }, {
            "label": "Daly City Serramonte",
            "value": "330000"
        }]
    }
}
,{
    type: 'bar3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 5 Stores by Sales",
            "subCaption": "Last month",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Bakersfield Central",
            "value": "880000"
        }, {
            "label": "Garden Groove harbour",
            "value": "730000"
        }, {
            "label": "Los Angeles Topanga",
            "value": "590000"
        }, {
            "label": "Compton-Rancho Dom",
            "value": "520000"
        }, {
            "label": "Daly City Serramonte",
            "value": "330000"
        }]
    }
}
,{
    type: 'boxandwhisker2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Distribution of annual salaries",
            "subcaption": "By Gender",
            "xAxisName": "Pay Grades",
            "YAxisName": "Salaries (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Grade 1"
            }, {
                "label": "Grade 2"
            }, {
                "label": "Grade 3"
            }]
        }],
        "dataset": [{
            "seriesname": "Male",
            "lowerboxcolor": "#0075c2",
            "upperboxcolor": "#1aaf5d",
            "data": [{
                "value": "2400,2000,2500,2800,3500,4000, 3700, 3750, 3880, 5000,5500,7500,8000,8200, 8400, 8500, 8550, 8800, 8700, 9000, 14000"
            }, {
                "value": "7500,9000,12000,13000,14000,16500,17000, 18000, 19000, 19500"
            }, {
                "value": "15000,19000,25000,32000,50000,65000"
            }]
        }, {
            "seriesname": "Female",
            "lowerboxcolor": "#f45b00",
            "upperboxcolor": "#f2c500",
            "data": [{
                "value": "1900,2100,2300,2350,2400,2550,3000,3500,4000, 6000, 6500, 9000"
            }, {
                "value": "7000,8000,8300,8700,9500,11000,15000, 17000, 21000"
            }, {
                "value": "24000,32000,35000,37000,39000, 58000"
            }]
        }]
    }
}
,{
    type: 'bubble',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales Analysis of Shoe Brands",
            "subcaption": "Last Quarter",
            "xAxisMinValue": "0",
            "xAxisMaxValue": "100",
            "yAxisMinValue": "0",
            "yAxisMaxValue": "30000",
            "plotFillAlpha": "70",
            "plotFillHoverColor": "#6baa01",
            "xAxisName": "Average Price",
            "yAxisName": "Units Sold",
            "numDivlines": "2",
            "showValues": "1",
            "plotTooltext": "$name : Profit Contribution - $zvalue%",
            "drawQuadrant": "1",
            "quadrantLineAlpha": "80",
            "quadrantLineThickness": "3",
            "quadrantXVal": "50",
            "quadrantYVal": "15000",
            //Quadrant Labels
            "quadrantLabelTL": "Low Price / High Sale",
            "quadrantLabelTR": "High Price / High Sale",
            "quadrantLabelBL": "Low Price / Low Sale",
            "quadrantLabelBR": "High Price / Low Sale",

            //Cosmetics
            "use3dlighting": "0",
            "showAlternateHGridColor": "0",
            "showAlternateVGridColor": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "$0",
                "x": "0"
            }, {
                "label": "$20",
                "x": "20",
                "showverticalline": "1"
            }, {
                "label": "$40",
                "x": "40",
                "showverticalline": "1"
            }, {
                "label": "$60",
                "x": "60",
                "showverticalline": "1"
            }, {
                "label": "$80",
                "x": "80",
                "showverticalline": "1"
            }, {
                "label": "$100",
                "x": "100",
                "showverticalline": "1"
            }]
        }],
        "dataset": [{
            "color": "#00aee4",
            "data": [{
                "x": "80",
                "y": "15000",
                "z": "24",
                "name": "Nike"
            }, {
                "x": "60",
                "y": "18500",
                "z": "26",
                "name": "Adidas"
            }, {
                "x": "50",
                "y": "19450",
                "z": "19",
                "name": "Puma"
            }, {
                "x": "65",
                "y": "10500",
                "z": "8",
                "name": "Fila"
            }, {
                "x": "43",
                "y": "8750",
                "z": "5",
                "name": "Lotto"
            }, {
                "x": "32",
                "y": "22000",
                "z": "10",
                "name": "Reebok"
            }, {
                "x": "44",
                "y": "13000",
                "z": "9",
                "name": "Woodland"
            }]
        }],
        "trendlines": [{
            "line": [{
                "startValue": "20000",
                "endValue": "30000",
                "isTrendZone": "1",
                "color": "#aaaaaa",
                "alpha": "14"
            }, {
                "startValue": "10000",
                "endValue": "20000",
                "isTrendZone": "1",
                "color": "#aaaaaa",
                "alpha": "7"
            }]
        }],
        "vTrendlines": [{
            "line": [{
                "startValue": "44",
                "isTrendZone": "0",
                "color": "#0066cc",
                "thickness": "1",
                "dashed": "1",
                "displayValue": "Gross Avg."
            }]
        }]
    }
}
,{
    type: 'candlestick',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Daily Stock Price HRYS",
            "subCaption": "Last 2 months",
            "numberprefix": "$",
            "vNumberPrefix": " ",
            "pyaxisname": "Price",
            "vyaxisname": "Volume (In Millions)",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "2 month ago",
                "x": "1"
            }, {
                "label": "1 month ago",
                "x": "31"
            }, {
                "label": "Today",
                "x": "60"
            }]
        }],
        "dataset": [{
            "data": [{
                "open": "18.74",
                "high": "19.16",
                "low": "18.67 ",
                "close": "18.99",
                "x": "1",
                "volume": "4991285"
            }, {
                "open": "18.74",
                "high": "19.06",
                "low": "18.54",
                "close": "18.82",
                "x": "2",
                "volume": "3615889"
            }, {
                "open": "19.21",
                "high": "19.3",
                "low": "18.59 ",
                "close": "18.65",
                "x": "3",
                "volume": "4749586"
            }, {
                "open": "19.85",
                "high": "19.86",
                "low": "19.12",
                "close": "19.4",
                "x": "4",
                "volume": "4366740"
            }, {
                "open": "20.19",
                "high": "20.21",
                "low": "19.57",
                "close": "19.92",
                "x": "5",
                "volume": "3982709"
            }, {
                "open": "20.47",
                "high": "20.64",
                "low": "20.15",
                "close": "20.16",
                "x": "6",
                "volume": "2289403"
            }, {
                "open": "20.36",
                "high": "20.52",
                "low": "20.29",
                "close": "20.48",
                "x": "7",
                "volume": "1950919"
            }, {
                "open": "20.21",
                "high": "20.25",
                "low": "19.91",
                "close": "20.15",
                "x": "8",
                "volume": "2391070"
            }, {
                "open": "19.46",
                "high": "20.54",
                "low": "19.46",
                "close": "20.22",
                "x": "9",
                "volume": "4548422"
            }, {
                "open": "19.24",
                "high": "19.5",
                "low": "19.13",
                "close": "19.44",
                "x": "10",
                "volume": "1889811"
            }, {
                "open": "19.25",
                "high": "19.41",
                "low": "18.99",
                "close": "19.22",
                "x": "11",
                "volume": "2543355"
            }, {
                "open": "18.85",
                "high": "19.45",
                "low": "18.8",
                "close": "19.24",
                "x": "12",
                "volume": "2134393"
            }, {
                "open": "18.97",
                "high": "19.01",
                "low": "18.68",
                "close": "18.95",
                "x": "13",
                "volume": "1740852"
            }, {
                "open": "18.69",
                "high": "19",
                "low": "18.35",
                "close": "18.97",
                "x": "14",
                "volume": "2701392"
            }, {
                "open": "19.02",
                "high": "19.1",
                "low": "18.68",
                "close": "18.7",
                "x": "15",
                "volume": "2198755"
            }, {
                "open": "19.29",
                "high": "19.38",
                "low": "18.88",
                "close": "19.05",
                "x": "16",
                "volume": "2464958"
            }, {
                "open": "18.64",
                "high": "19.35",
                "low": "18.53",
                "close": "19.33",
                "x": "17",
                "volume": "2962994"
            }, {
                "open": "18.14",
                "high": "18.58",
                "low": "18.08",
                "close": "18.52",
                "x": "18",
                "volume": "1964932"
            }, {
                "open": "18.49",
                "high": "18.92",
                "low": "18.19",
                "close": "18.26",
                "x": "19",
                "volume": "3013102"
            }, {
                "open": "18.71",
                "high": "18.84",
                "low": "18",
                "close": "18.51",
                "x": "20",
                "volume": "4435894"
            }, {
                "open": "19.17",
                "high": "19.35",
                "low": "18.61",
                "close": "18.66",
                "x": "21",
                "volume": "3245851"
            }, {
                "open": "19.12",
                "high": "19.41",
                "low": "18.92",
                "close": "19.2",
                "x": "22",
                "volume": "2259792"
            }, {
                "open": "19.43",
                "high": "19.58",
                "low": "19.16",
                "close": "19.33",
                "x": "23",
                "volume": "3531327"
            }, {
                "open": "19.72",
                "high": "19.81",
                "low": "19.04",
                "close": "19.27",
                "x": "24",
                "volume": "5834733"
            }, {
                "open": "19.7",
                "high": "19.94",
                "low": "19.49",
                "close": "19.77",
                "x": "25",
                "volume": "2009987"
            }, {
                "open": "19.84",
                "high": "19.98",
                "low": "19.39",
                "close": "19.88",
                "x": "26",
                "volume": "2767592"
            }, {
                "open": "20.71",
                "high": "20.73",
                "low": "19.16",
                "close": "19.63",
                "x": "27",
                "volume": "673358"
            }, {
                "open": "21.14",
                "high": "21.14",
                "low": "20.55",
                "close": "20.65",
                "x": "28",
                "volume": "3164006"
            }, {
                "open": "21.5",
                "high": "21.86",
                "low": "21.2",
                "close": "21.33",
                "x": "29",
                "volume": "7986466"
            }, {
                "open": "20.45",
                "high": "21.08",
                "low": "20.1",
                "close": "20.56",
                "x": "30",
                "volume": "5813040"
            }, {
                "open": "20.07",
                "high": "20.69",
                "low": "20.04",
                "close": "20.36",
                "x": "31",
                "volume": "3440002"
            }, {
                "open": "19.88",
                "high": "20.11",
                "low": "19.51",
                "close": "20.03",
                "x": "32",
                "volume": "2779171"
            }, {
                "open": "19.76",
                "high": "20.13",
                "low": "19.65",
                "close": "19.88",
                "x": "33",
                "volume": "2918115"
            }, {
                "open": "19.77",
                "high": "19.97",
                "low": "19.27",
                "close": "19.9",
                "x": "34",
                "volume": "3850357"
            }, {
                "open": "19.43",
                "high": "19.72",
                "low": "18.88",
                "close": "19.5",
                "x": "35",
                "volume": "5047378"
            }, {
                "open": "19.69",
                "high": "19.84",
                "low": "19.17",
                "close": "19.43",
                "x": "36",
                "volume": "3479017"
            }, {
                "open": "19.59",
                "high": "20.02",
                "low": "19.02",
                "close": "19.41",
                "x": "37",
                "volume": "5749874"
            }, {
                "open": "20.95",
                "high": "21.09",
                "low": "19.64",
                "close": "19.83",
                "x": "38",
                "volume": "6319111"
            }, {
                "open": "20.52",
                "high": "21.03",
                "low": "20.45",
                "close": "21",
                "x": "39",
                "volume": "4412413"
            }, {
                "open": "20.36",
                "high": "20.96",
                "low": "20.2",
                "close": "20.44",
                "x": "40",
                "volume": "5948318"
            }, {
                "open": "21.45",
                "high": "21.48",
                "low": "19.63",
                "close": "20.3",
                "x": "41",
                "volume": "11935440"
            }, {
                "open": "23.49",
                "high": "23.57",
                "low": "21.12",
                "close": "21.63",
                "x": "42",
                "volume": "10523910"
            }, {
                "open": "24.04",
                "high": "24.21",
                "low": "23.04",
                "close": "23.28",
                "x": "43",
                "volume": "3843797"
            }, {
                "open": "23.6",
                "high": "24.065",
                "low": "23.51",
                "close": "23.94",
                "x": "44",
                "volume": "3691404"
            }, {
                "open": "22.87",
                "high": "23.49",
                "low": "22.86",
                "close": "23.48",
                "x": "45",
                "volume": "3387393"
            }, {
                "open": "22.35",
                "high": "22.89",
                "low": "22.35",
                "close": "22.74",
                "x": "46",
                "volume": "3737330"
            }, {
                "open": "22.11",
                "high": "22.5",
                "low": "21.9",
                "close": "22.24",
                "x": "47",
                "volume": "4630397"
            }, {
                "open": "22.58",
                "high": "22.80",
                "low": "22.25",
                "close": "22.42",
                "x": "48",
                "volume": "3024711"
            }, {
                "open": "23.54",
                "high": "23.76",
                "low": "22.6",
                "close": "22.68",
                "x": "49",
                "volume": "3984508"
            }, {
                "open": "23.66",
                "high": "24.09",
                "low": "23.09",
                "close": "23.46",
                "x": "50",
                "volume": "3420204"
            }, {
                "open": "24.36",
                "high": "24.42",
                "low": "22.90",
                "close": "23.6",
                "x": "51",
                "volume": "5151096"
            }, {
                "open": "24.34",
                "high": "24.6",
                "low": "23.73",
                "close": "24.15",
                "x": "52",
                "volume": "5999654"
            }, {
                "open": "23.38",
                "high": "24.8",
                "low": "23.36",
                "close": "24.1",
                "x": "53",
                "volume": "5382049"
            }, {
                "open": "23.76",
                "high": "23.84",
                "low": "23.23",
                "close": "23.47",
                "x": "54",
                "volume": "3508510"
            }, {
                "open": "23.64",
                "high": "23.94",
                "low": "23.48",
                "close": "23.76",
                "x": "55",
                "volume": "2718428"
            }, {
                "open": "23.99",
                "high": "24.18",
                "low": "23.59",
                "close": "23.66",
                "x": "56",
                "volume": "2859391"
            }, {
                "open": "23.32",
                "high": "24.26",
                "low": "23.32",
                "close": "23.79",
                "x": "57",
                "volume": "4138618"
            }, {
                "open": "24.08",
                "high": "24.4",
                "low": "23.26",
                "close": "23.39",
                "x": "58",
                "volume": "4477478"
            }, {
                "open": "22.84",
                "high": "23.96",
                "low": "22.83",
                "close": "23.88",
                "x": "59",
                "volume": "4822378"
            }, {
                "open": "23.38",
                "high": "23.78",
                "low": "22.94",
                "close": "23.01",
                "x": "60",
                "volume": "4037312"
            }, {
                "open": "23.97",
                "high": "23.99",
                "low": "23.14",
                "close": "23.32",
                "x": "61",
                "volume": "4879546"
            }]
        }]
    }
}
,{
    type: 'column2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
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
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "700000",
                "valueOnRight": "1",
                "displayvalue": "Monthly Target"
            }]
        }]
    }
}
,{
    type: 'column3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "theme": "fusion"
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
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
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
}
,{
    type: 'doughnut2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Revenue by Product Categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "defaultCenterLabel": "Total revenue: $64.08K",
            "centerLabel": "Revenue from $label: $value",
            "decimals": "0",
            "theme": "fusion"
        },
        "data": [{
            "label": "Food",
            "value": "28504"
        }, {
            "label": "Apparels",
            "value": "14633"
        }, {
            "label": "Electronics",
            "value": "10507"
        }, {
            "label": "Household",
            "value": "4910"
        }]
    }
}
,{
    type: 'doughnut3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Revenue by Product Categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "data": [{
            "label": "Food",
            "value": "28504"
        }, {
            "label": "Apparels",
            "value": "14633"
        }, {
            "label": "Electronics",
            "value": "10507"
        }, {
            "label": "Household",
            "value": "4910"
        }]
    }
}
,{
    type: 'dragnode',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Project Plan for Construction of a Store (time duration in weeks)",
            "arrowatstart": "0",
            "arrowatend": "1",
            "viewMode": "1",
            "connectorToolText": "$label Weeks",
            "theme": "fusion"
        },
        "dataset": [{
            "id": "1",
            "seriesname": "DS1",
            "data": [{
                "id": "2",
                "x": "15",
                "y": "56",
                "name": "A",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "A. Excavate"
            }, {
                "id": "3",
                "x": "28",
                "y": "56",
                "name": "B",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "B. Foundation"
            }, {
                "id": "4",
                "x": "42",
                "y": "56",
                "name": "C",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "C. Rough Wall"
            }, {
                "id": "5",
                "x": "45",
                "y": "28",
                "name": "D",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "D. Roof"
            }, {
                "id": "6",
                "x": "56",
                "y": "56",
                "name": "E",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "E. Exterior Plumbing"
            }, {
                "id": "7",
                "x": "64",
                "y": "71",
                "name": "F",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "F. Interior Plumbing"
            }, {
                "id": "8",
                "x": "59",
                "y": "28",
                "name": "G",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "G. Exterior Siding"
            }, {
                "id": "9",
                "x": "70",
                "y": "28",
                "name": "H",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "H. Exterior Painting"
            }, {
                "id": "10",
                "x": "82",
                "y": "40",
                "name": "M",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "M. Exterior Fixtures"
            }, {
                "id": "11",
                "x": "44",
                "y": "81",
                "name": "I",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "I. Electrical Work"
            }, {
                "id": "12",
                "x": "70",
                "y": "82",
                "name": "J",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "J. Wallboard"
            }, {
                "id": "13",
                "x": "79",
                "y": "94",
                "name": "L",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "L. Interior Painting"
            }, {
                "id": "14",
                "x": "87",
                "y": "82",
                "name": "N",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "N. Interior Fixtures"
            }, {
                "id": "15",
                "x": "80",
                "y": "70",
                "name": "K",
                "radius": "20",
                "shape": "CIRCLE",
                "tooltext": "K. Flooring"
            }, {
                "id": "1",
                "x": "4",
                "y": "57",
                "name": "Start",
                "height": "15",
                "width": "40",
                "shape": "RECTANGLE",
                "tooltext": "Start of Construction"
            }, {
                "id": "16",
                "x": "95",
                "y": "59",
                "name": "Finish",
                "height": "15",
                "width": "40",
                "shape": "RECTANGLE",
                "tooltext": "End Of Construction"
            }]
        }],
        "connectors": [{
            "stdthickness": "2",
            "connector": [{
                "from": "2",
                "to": "3",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "4"
            }, {
                "from": "3",
                "to": "4",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "10"
            }, {
                "from": "4",
                "to": "5",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "6"
            }, {
                "from": "4",
                "to": "6",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "4"
            }, {
                "from": "4",
                "to": "11",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "7"
            }, {
                "from": "5",
                "to": "8",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "7"
            }, {
                "from": "6",
                "to": "9",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "9"
            }, {
                "from": "9",
                "to": "10",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "2"
            }, {
                "from": "6",
                "to": "7",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "5"
            }, {
                "from": "11",
                "to": "12",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "8"
            }, {
                "from": "7",
                "to": "12",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": ""
            }, {
                "from": "12",
                "to": "13",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "5"
            }, {
                "from": "12",
                "to": "15",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "4"
            }, {
                "from": "13",
                "to": "14",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "6"
            }, {
                "from": "15",
                "to": "14",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": ""
            }, {
                "from": "1",
                "to": "2",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": "2"
            }, {
                "from": "8",
                "to": "9",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": ""
            }, {
                "from": "14",
                "to": "16",
                "color": "#1aaf5d",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": ""
            }, {
                "from": "10",
                "to": "16",
                "color": "#f2c500",
                "strength": "1",
                "arrowatstart": "0",
                "alpha": "100",
                "label": ""
            }]
        }],
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1",
            "groups": [{
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 54",
                "items": [{
                    "id": "anno-A",
                    "type": "text",
                    "label": "A. Excavate",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 24"
                }, {
                    "id": "anno-B",
                    "type": "text",
                    "label": "B. Foundation",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 124"
                }, {
                    "id": "anno-C",
                    "type": "text",
                    "label": "C. Rough Wall",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 224"
                }, {
                    "id": "anno-D",
                    "type": "text",
                    "label": "D. Roof",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 315"
                }]
            }, {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 42",
                "items": [{
                    "id": "anno-E",
                    "type": "text",
                    "label": "E. Exterior Plumbing",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 24"
                }, {
                    "id": "anno-F",
                    "type": "text",
                    "label": "F. Interior Plumbing",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 124"
                }, {
                    "id": "anno-G",
                    "type": "text",
                    "label": "G. Exterior Siding",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 224"
                }, {
                    "id": "anno-H",
                    "type": "text",
                    "label": "H. Exterior Painting",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 315"
                }]
            }, {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 30",
                "items": [{
                    "id": "anno-I",
                    "type": "text",
                    "label": "I. Electrical Work",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 24"
                }, {
                    "id": "anno-J",
                    "type": "text",
                    "label": "J. Wallboard",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 124"
                }, {
                    "id": "anno-K",
                    "type": "text",
                    "label": "K. Flooring",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 224"
                }, {
                    "id": "anno-L",
                    "type": "text",
                    "label": "L. Interior Painting",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 315"
                }]
            }, {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 18",
                "items": [{
                    "id": "anno-M",
                    "type": "text",
                    "label": "M. Exterior Fixtures",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 24"
                }, {
                    "id": "anno-N",
                    "type": "text",
                    "label": "N. Interior Fixtures",
                    "align": "Left",
                    "verticalAlign": "top",
                    "bold": "1",
                    "x": "$chartStartX + $chartLeftMargin + 124"
                }]
            }]
        }
    }
}
,{
    type: 'dragarea',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales Projections",
            "subCaption": "iPhone vs Samsung Galaxy",
            "xAxisName": "Quarter",
            "yAxisName": "No. of Units",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3(E)"
            }, {
                "label": "Q4(E)"
            }]
        }],
        "dataset": [{
            "seriesname": "Apple",
            "valuePosition": "ABOVE",
            "allowDrag": "0",
            "data": [{
                "value": "1200"
            }, {
                "value": "1500",
                "dashed": "1"
            }, {
                "value": "1300",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "900",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }, {
            "seriesname": "Samsung",
            "allowDrag": "0",
            "data": [{
                "value": "600"
            }, {
                "value": "850",
                "dashed": "1"
            }, {
                "value": "1000",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "1200",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }]
    }
}
,{
    type: 'dragcolumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Inventory status - Bakersfield Central",
            "subCaption": "Top 5 Food items",
            "xAxisName": "Food Item",
            "yAxisName": "No. of Units",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Poultry"
            }, {
                "label": "Rice"
            }, {
                "label": "Peanut Butter"
            }, {
                "label": "Salmon"
            }, {
                "label": "Cereal"
            }]
        }],
        "dataset": [{
            "seriesname": "Available Stock",
            "allowDrag": "0",
            "data": [{
                "value": "6000"
            }, {
                "value": "9500"
            }, {
                "value": "11900"
            }, {
                "value": "8000"
            }, {
                "value": "9700"
            }]
        }, {
            "seriesname": "Estimated Demand",
            "dashed": "1",
            "data": [{
                "value": "19000"
            }, {
                "value": "16500"
            }, {
                "value": "14300"
            }, {
                "value": "10000"
            }, {
                "value": "9800"
            }]
        }]
    }
}
,{
    type: 'dragline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales Projections",
            "subCaption": "iPhone vs Samsung Galaxy",
            "xAxisName": "Quarter",
            "yAxisName": "No. of Units",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3(E)"
            }, {
                "label": "Q4(E)"
            }]
        }],
        "dataset": [{
            "seriesname": "Apple",
            "valuePosition": "ABOVE",
            "allowDrag": "0",
            "data": [{
                "value": "1200"
            }, {
                "value": "1500",
                "dashed": "1"
            }, {
                "value": "1300",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "900",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }, {
            "seriesname": "Samsung",
            "allowDrag": "0",
            "data": [{
                "value": "600"
            }, {
                "value": "850",
                "dashed": "1"
            }, {
                "value": "1000",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "1200",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }]
    }
}
,{
    type: 'errorbar2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Machinery lifespan range",
            "subcaption": "Means & standard deviations",
            "xAxisName": "Systems",
            "yAxisName": "Life Span",
            "numberSuffix": " Years",
            "halfErrorBar": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Central AC"
            }, {
                "label": "Computers"
            }, {
                "label": "Bar-code Scanners"
            }, {
                "label": "Packaging Machines"
            }, {
                "label": "Chilling Compartments"
            }]
        }],
        "dataset": [{
            "seriesname": "Daly City Serramonte",
            "data": [{
                "value": "8",
                "errorvalue": "2"
            }, {
                "value": "3",
                "errorvalue": "0.5"
            }, {
                "value": "2",
                "errorvalue": "1"
            }, {
                "value": "6",
                "errorvalue": "1.8"
            }, {
                "value": "8",
                "errorvalue": "1.2"
            }]
        }, {
            "seriesname": "Bakersfield Central",
            "data": [{
                "value": "7",
                "errorvalue": "1"
            }, {
                "value": "4",
                "errorvalue": "0.5"
            }, {
                "value": "2",
                "errorvalue": "1"
            }, {
                "value": "4",
                "errorvalue": "0.8"
            }, {
                "value": "7",
                "errorvalue": "1"
            }]
        }, {
            "seriesname": "Garden Groove harbour",
            "data": [{
                "value": "9",
                "errorvalue": "2"
            }, {
                "value": "3",
                "errorvalue": "0.7"
            }, {
                "value": "3",
                "errorvalue": "1"
            }, {
                "value": "6",
                "errorvalue": "1.8"
            }, {
                "value": "7",
                "errorvalue": "1.2"
            }]
        }]
    }
}
,{
    type: 'errorline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "Predicted for next year",
            "xAxisname": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "halferrorbar": "0",
            "plotTooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #999999; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}$seriesName : <b>$dataValue</b>{br}Deviation : <b>± $errorDataValue</b>",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan"
            }, {
                "label": "Feb"
            }, {
                "label": "Mar"
            }, {
                "label": "Apr"
            }, {
                "label": "May"
            }, {
                "label": "Jun"
            }, {
                "label": "Jul"
            }, {
                "label": "Aug"
            }, {
                "label": "Sep"
            }, {
                "label": "Oct"
            }, {
                "label": "Nov"
            }, {
                "label": "Dec"
            }]
        }],
        "dataset": [{
            "seriesName": "Revenues",
            "dashed": "1",
            "dashlen": "2",
            "dashGap": "2",
            "data": [{
                "value": "16000",
                "errorvalue": "2000"
            }, {
                "value": "20000",
                "errorvalue": "4000"
            }, {
                "value": "18000",
                "errorvalue": "1000"
            }, {
                "value": "19000",
                "errorvalue": "1500"
            }, {
                "value": "15000",
                "errorvalue": "1000"
            }, {
                "value": "21000",
                "errorvalue": "4500"
            }, {
                "value": "16000",
                "errorvalue": "1500"
            }, {
                "value": "20000",
                "errorvalue": "3000"
            }, {
                "value": "17000",
                "errorvalue": "2000"
            }, {
                "value": "22000",
                "errorvalue": "4000"
            }, {
                "value": "19000",
                "errorvalue": "2500"
            }, {
                "value": "23000",
                "errorvalue": "3000"
            }]
        }, {
            "seriesName": "Profits",
            "dashed": "1",
            "dashlen": "2",
            "dashGap": "2",
            "data": [{
                "value": "8000",
                "errorvalue": "2000"
            }, {
                "value": "9000",
                "errorvalue": "2000"
            }, {
                "value": "7000",
                "errorvalue": "2700"
            }, {
                "value": "8000",
                "errorvalue": "2750"
            }, {
                "value": "6000",
                "errorvalue": "1200"
            }, {
                "value": "11000",
                "errorvalue": "3000"
            }, {
                "value": "6900",
                "errorvalue": "1250"
            }, {
                "value": "8000",
                "errorvalue": "1400"
            }, {
                "value": "6500",
                "errorvalue": "1200"
            }, {
                "value": "12000",
                "errorvalue": "3000"
            }, {
                "value": "6000",
                "errorvalue": "1500"
            }, {
                "value": "11000",
                "errorvalue": "2500"
            }]
        }]
    }
}
,{
    type: 'errorscatter',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "xaxisname": "Month",
            "yaxisname": "Revenue (In USD)",
            "caption": "Revenue forecast",
            "subcaption": "For Next Year",
            "halfverticalerrorbar": "0",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan",
                "x": "20",
            }, {
                "label": "Feb",
                "x": "30",
            }, {
                "label": "Mar",
                "x": "40",
            }, {
                "label": "Apr",
                "x": "50",
            }, {
                "label": "May",
                "x": "60",
            }, {
                "label": "Jun",
                "x": "70",
            }, {
                "label": "Jul",
                "x": "80",
            }, {
                "label": "Aug",
                "x": "90",
            }, {
                "label": "Sep",
                "x": "100",
            }, {
                "label": "Oct",
                "x": "110",
            }, {
                "label": "Nov",
                "x": "120",
            }, {
                "label": "Dec",
                "x": "130",
            }]
        }],
        "dataset": [{
            "seriesname": "This Year",
            "color": "",
            "anchorradius": "8",
            "anchorbgcolor": "#1aaf5d",
            "data": [{
                "y": "450000",
                "x": "20",
                "verticalErrorValue": "50000"
            }, {
                "y": "860000",
                "x": "30",
                "verticalErrorValue": "69000"
            }, {
                "y": "750000",
                "x": "40",
                "verticalErrorValue": "69000"
            }, {
                "y": "570000",
                "x": "50",
                "verticalErrorValue": "60000"
            }, {
                "y": "910000",
                "x": "60",
                "verticalErrorValue": "50000"
            }, {
                "y": "580000",
                "x": "70",
                "verticalErrorValue": "55000"
            }, {
                "y": "610000",
                "x": "80",
                "verticalErrorValue": "87000"
            }, {
                "y": "620000",
                "x": "90",
                "verticalErrorValue": "45000"
            }, {
                "y": "520000",
                "x": "100",
                "verticalErrorValue": "59000"
            }, {
                "y": "530000",
                "x": "110",
                "verticalErrorValue": "72000"
            }, {
                "y": "950000",
                "x": "120",
                "verticalErrorValue": "69000"
            }, {
                "y": "770000",
                "x": "130",
                "verticalErrorValue": "69000"
            }]
        }]
    }
}
,{
    type: 'funnel',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Website - Harry's SuperMart",
            "subcaption": "Visit to purchase - Conversion analysis for last year",
            "decimals": "1",
            "isHollow": "1",
            "labelDistance": "15",
            "is2D": "1",
            "plotTooltext": "Success : $percentOfPrevValue",
            "showPercentValues": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Unique Website Visits",
            "value": "1460000"
        }, {
            "label": "Programme Details Section Visits",
            "value": "930000"
        }, {
            "label": "Attempts to Register",
            "value": "540000"
        }, {
            "label": "Successful Registrations",
            "value": "210000"
        }, {
            "label": "Logged In",
            "value": "190000"
        }, {
            "label": "Purchased on Introductory Offers",
            "value": "120000"
        }]
    }
}
,{
    type: 'gantt',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Construction management of a new store in Denver",
            "subcaption": "Planned vs Actual",
            "dateformat": "dd/mm/yyyy",
            "outputdateformat": "ddds mns yy",
            "ganttwidthpercent": "60",
            "ganttPaneDuration": "40",
            "ganttPaneDurationUnit": "d",
            "plottooltext": "$processName{br} $label starting date $start{br}$label ending date $end",
            "legendBorderAlpha": "0",
            "flatScrollBars": "1",
            "gridbordercolor": "#333333",
            "gridborderalpha": "20",
            "slackFillColor": "#e44a00",
            "taskBarFillMix": "light+0",
            "theme": "fusion"
        },
        "categories": [{
            "bgcolor": "#999999",
            "category": [{
                "start": "1/4/2014",
                "end": "30/6/2014",
                "label": "Months",
                "align": "middle",
                "fontcolor": "#ffffff",
                "fontsize": "12"
            }]
        }, {
            "bgcolor": "#999999",
            "align": "middle",
            "fontcolor": "#ffffff",
            "fontsize": "12",
            "category": [{
                "start": "1/4/2014",
                "end": "30/4/2014",
                "label": "April"
            }, {
                "start": "1/5/2014",
                "end": "31/5/2014",
                "label": "May"
            }, {
                "start": "1/6/2014",
                "end": "30/6/2014",
                "label": "June"
            }]
        }, {
            "bgcolor": "#ffffff",
            "fontcolor": "#333333",
            "fontsize": "11",
            "align": "center",
            "category": [{
                "start": "1/4/2014",
                "end": "5/4/2014",
                "label": "Week 1"
            }, {
                "start": "6/4/2014",
                "end": "12/4/2014",
                "label": "Week 2"
            }, {
                "start": "13/4/2014",
                "end": "19/4/2014",
                "label": "Week 3"
            }, {
                "start": "20/4/2014",
                "end": "26/4/2014",
                "label": "Week 4"
            }, {
                "start": "27/4/2014",
                "end": "3/5/2014",
                "label": "Week 5"
            }, {
                "start": "4/5/2014",
                "end": "10/5/2014",
                "label": "Week 6"
            }, {
                "start": "11/5/2014",
                "end": "17/5/2014",
                "label": "Week 7"
            }, {
                "start": "18/5/2014",
                "end": "24/5/2014",
                "label": "Week 8"
            }, {
                "start": "25/5/2014",
                "end": "31/5/2014",
                "label": "Week 9"
            }, {
                "start": "1/6/2014",
                "end": "7/6/2014",
                "label": "Week 10"
            }, {
                "start": "8/6/2014",
                "end": "14/6/2014",
                "label": "Week 11"
            }, {
                "start": "15/6/2014",
                "end": "21/6/2014",
                "label": "Week 12"
            }, {
                "start": "22/6/2014",
                "end": "28/6/2014",
                "label": "Week 13"
            }]
        }],
        "processes": {
            "headertext": "Task",
            "fontcolor": "#000000",
            "fontsize": "11",
            "isanimated": "1",
            "bgcolor": "#6baa01",
            "headervalign": "bottom",
            "headeralign": "left",
            "headerbgcolor": "#999999",
            "headerfontcolor": "#ffffff",
            "headerfontsize": "12",
            "align": "left",
            "isbold": "1",
            "bgalpha": "25",
            "process": [{
                "label": "Clear site",
                "id": "1"
            }, {
                "label": "Excavate Foundation",
                "id": "2",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Concrete Foundation",
                "id": "3",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Footing to DPC",
                "id": "4",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Drainage Services",
                "id": "5",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Backfill",
                "id": "6",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Ground Floor",
                "id": "7"
            }, {
                "label": "Walls on First Floor",
                "id": "8"
            }, {
                "label": "First Floor Carcass",
                "id": "9",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "First Floor Deck",
                "id": "10",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Roof Structure",
                "id": "11"
            }, {
                "label": "Roof Covering",
                "id": "12"
            }, {
                "label": "Rainwater Gear",
                "id": "13"
            }, {
                "label": "Windows",
                "id": "14"
            }, {
                "label": "External Doors",
                "id": "15"
            }, {
                "label": "Connect Electricity",
                "id": "16"
            }, {
                "label": "Connect Water Supply",
                "id": "17",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Install Air Conditioning",
                "id": "18",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Interior Decoration",
                "id": "19",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Fencing And signs",
                "id": "20"
            }, {
                "label": "Exterior Decoration",
                "id": "21",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            }, {
                "label": "Setup racks",
                "id": "22"
            }]
        },
        "datatable": {
            "showprocessname": "1",
            "namealign": "left",
            "fontcolor": "#000000",
            "fontsize": "10",
            "valign": "right",
            "align": "center",
            "headervalign": "bottom",
            "headeralign": "center",
            "headerbgcolor": "#999999",
            "headerfontcolor": "#ffffff",
            "headerfontsize": "12",
            "datacolumn": [{
                "bgcolor": "#eeeeee",
                "headertext": "Actual{br}Start{br}Date",
                "text": [{
                    "label": "9/4/2014"
                }, {
                    "label": "13/4/2014"
                }, {
                    "label": "26/4/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40",

                }, {
                    "label": "4/5/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "6/5/2014"
                }, {
                    "label": "5/5/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "11/5/2014"
                }, {
                    "label": "16/5/2014"
                }, {
                    "label": "16/5/2014"
                }, {
                    "label": "21/5/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "25/5/2014"
                }, {
                    "label": "28/5/2014"
                }, {
                    "label": "4/6/2014"
                }, {
                    "label": "4/6/2014"
                }, {
                    "label": "4/6/2014"
                }, {
                    "label": "2/6/2014"
                }, {
                    "label": "5/6/2014"
                }, {
                    "label": "18/6/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "16/6/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "23/6/2014"
                }, {
                    "label": "18/6/2014"
                }, {
                    "label": "25/6/2014"
                }]
            }, {
                "bgcolor": "#eeeeee",
                "headertext": "Actual{br}End{br}Date",
                "text": [{
                    "label": "12/4/2014"
                }, {
                    "label": "25/4/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "4/5/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "10/5/2014"
                }, {
                    "label": "10/5/2014"
                }, {
                    "label": "11/5/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "14/5/2014"
                }, {
                    "label": "19/5/2014"
                }, {
                    "label": "21/5/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "24/5/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "27/5/2014"
                }, {
                    "label": "1/6/2014"
                }, {
                    "label": "6/6/2014"
                }, {
                    "label": "4/6/2014"
                }, {
                    "label": "4/6/2014"
                }, {
                    "label": "7/6/2014"
                }, {
                    "label": "17/6/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "20/6/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "23/6/2014"
                }, {
                    "label": "23/6/2014"
                }, {
                    "label": "23/6/2014",
                    "bgcolor": "#e44a00",
                    "bgAlpha": "40"
                }, {
                    "label": "28/6/2014"
                }]
            }]
        },
        "tasks": {
            "task": [{
                "label": "Planned",
                "processid": "1",
                "start": "9/4/2014",
                "end": "12/4/2014",
                "id": "1-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "1",
                "start": "9/4/2014",
                "end": "12/4/2014",
                "id": "1",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "2",
                "start": "13/4/2014",
                "end": "23/4/2014",
                "id": "2-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "2",
                "start": "13/4/2014",
                "end": "25/4/2014",
                "id": "2",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Delay",
                "processid": "2",
                "start": "23/4/2014",
                "end": "25/4/2014",
                "id": "2-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 2 days."
            }, {
                "label": "Planned",
                "processid": "3",
                "start": "23/4/2014",
                "end": "30/4/2014",
                "id": "3-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "3",
                "start": "26/4/2014",
                "end": "4/5/2014",
                "id": "3",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Delay",
                "processid": "3",
                "start": "3/5/2014",
                "end": "4/5/2014",
                "id": "3-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 1 days."
            }, {
                "label": "Planned",
                "processid": "4",
                "start": "3/5/2014",
                "end": "10/5/2014",
                "id": "4-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "4",
                "start": "4/5/2014",
                "end": "10/5/2014",
                "id": "4",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "5",
                "start": "6/5/2014",
                "end": "11/5/2014",
                "id": "5-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "5",
                "start": "6/5/2014",
                "end": "10/5/2014",
                "id": "5",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "6",
                "start": "4/5/2014",
                "end": "7/5/2014",
                "id": "6-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "6",
                "start": "5/5/2014",
                "end": "11/5/2014",
                "id": "6",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Delay",
                "processid": "6",
                "start": "7/5/2014",
                "end": "11/5/2014",
                "id": "6-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 4 days."
            }, {
                "label": "Planned",
                "processid": "7",
                "start": "11/5/2014",
                "end": "14/5/2014",
                "id": "7-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "7",
                "start": "11/5/2014",
                "end": "14/5/2014",
                "id": "7",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "8",
                "start": "16/5/2014",
                "end": "19/5/2014",
                "id": "8-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "8",
                "start": "16/5/2014",
                "end": "19/5/2014",
                "id": "8",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "9",
                "start": "16/5/2014",
                "end": "18/5/2014",
                "id": "9-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "9",
                "start": "16/5/2014",
                "end": "21/5/2014",
                "id": "9",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Delay",
                "processid": "9",
                "start": "18/5/2014",
                "end": "21/5/2014",
                "id": "9-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 3 days."
            }, {
                "label": "Planned",
                "processid": "10",
                "start": "20/5/2014",
                "end": "23/5/2014",
                "id": "10-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "10",
                "start": "21/5/2014",
                "end": "24/5/2014",
                "id": "10",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Delay",
                "processid": "10",
                "start": "23/5/2014",
                "end": "24/5/2014",
                "id": "10-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 1 days."
            }, {
                "label": "Planned",
                "processid": "11",
                "start": "25/5/2014",
                "end": "27/5/2014",
                "id": "11-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "11",
                "start": "25/5/2014",
                "end": "27/5/2014",
                "id": "11",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "12",
                "start": "28/5/2014",
                "end": "1/6/2014",
                "id": "12-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "12",
                "start": "28/5/2014",
                "end": "1/6/2014",
                "id": "12",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "13",
                "start": "4/6/2014",
                "end": "6/6/2014",
                "id": "13-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "13",
                "start": "4/6/2014",
                "end": "6/6/2014",
                "id": "13",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "14",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "14-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "14",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "14",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "15",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "15-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "15",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "15",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "16",
                "start": "2/6/2014",
                "end": "7/6/2014",
                "id": "16-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "16",
                "start": "2/6/2014",
                "end": "7/6/2014",
                "id": "16",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "17",
                "start": "5/6/2014",
                "end": "10/6/2014",
                "id": "17-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "17",
                "start": "5/6/2014",
                "end": "17/6/2014",
                "id": "17",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Delay",
                "processid": "17",
                "start": "10/6/2014",
                "end": "17/6/2014",
                "id": "17-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 7 days."
            }, {
                "label": "Planned",
                "processid": "18",
                "start": "10/6/2014",
                "end": "12/6/2014",
                "id": "18-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Delay",
                "processid": "18",
                "start": "18/6/2014",
                "end": "20/6/2014",
                "id": "18",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 8 days."
            }, {
                "label": "Planned",
                "processid": "19",
                "start": "15/6/2014",
                "end": "23/6/2014",
                "id": "19-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "19",
                "start": "16/6/2014",
                "end": "23/6/2014",
                "id": "19",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "20",
                "start": "23/6/2014",
                "end": "23/6/2014",
                "id": "20-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "20",
                "start": "23/6/2014",
                "end": "23/6/2014",
                "id": "20",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Planned",
                "processid": "21",
                "start": "18/6/2014",
                "end": "21/6/2014",
                "id": "21-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "21",
                "start": "18/6/2014",
                "end": "23/6/2014",
                "id": "21",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }, {
                "label": "Delay",
                "processid": "21",
                "start": "21/6/2014",
                "end": "23/6/2014",
                "id": "21-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 2 days."
            }, {
                "label": "Planned",
                "processid": "22",
                "start": "24/6/2014",
                "end": "28/6/2014",
                "id": "22-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            }, {
                "label": "Actual",
                "processid": "22",
                "start": "25/6/2014",
                "end": "28/6/2014",
                "id": "22",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }]
        },
        "connectors": [{
            "connector": [{
                "fromtaskid": "1",
                "totaskid": "2",
                "color": "#008ee4",
                "thickness": "2",
                "fromtaskconnectstart_": "1"
            }, {
                "fromtaskid": "2-2",
                "totaskid": "3",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "3-2",
                "totaskid": "4",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "3-2",
                "totaskid": "6",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "7",
                "totaskid": "8",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "7",
                "totaskid": "9",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "12",
                "totaskid": "16",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "12",
                "totaskid": "17",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "17-2",
                "totaskid": "18",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                "fromtaskid": "19",
                "totaskid": "22",
                "color": "#008ee4",
                "thickness": "2"
            }]
        }],
        "milestones": {
            "milestone": [{
                    "date": "2/6/2014",
                    "taskid": "12",
                    "color": "#f8bd19",
                    "shape": "star",
                    "tooltext": "Completion of Phase 1"
                }
                /*{
                    "date": "21/8/2008",
                    "taskid": "10",
                    "color": "#f8bd19",
                    "shape": "star",
                    "tooltext": "New estimated moving date"
                }*/
            ]
        },
        "legend": {
            "item": [{
                "label": "Planned",
                "color": "#008ee4"
            }, {
                "label": "Actual",
                "color": "#6baa01"
            }, {
                "label": "Slack (Delay)",
                "color": "#e44a00"
            }]
        }
    }
}
,{
    type: 'heatmap',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top Smartphone Ratings",
            "subcaption": "By Features",
            "xAxisName": "Features",
            "yAxisName": "Model",
            "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",
            "theme": "fusion"
        },
        "rows": {
            "row": [{
                "id": "SGS5",
                "label": "Samsung Galaxy S5"
            }, {
                "id": "HTC1M8",
                "label": "HTC One (M8)"
            }, {
                "id": "IPHONES5",
                "label": "Apple iPhone 5S"
            }, {
                "id": "LUMIA",
                "label": "Nokia Lumia 1520"
            }]
        },
        "columns": {
            "column": [{
                "id": "processor",
                "label": "Processor"
            }, {
                "id": "screen",
                "label": "Screen Size"
            }, {
                "id": "price",
                "label": "Price"
            }, {
                "id": "backup",
                "label": "Battery Backup"
            }, {
                "id": "cam",
                "label": "Camera"
            }]
        },
        "dataset": [{
            "data": [{
                "rowid": "SGS5",
                "columnid": "processor",
                "value": "8.7",
                "tllabel": "Quad Core 2.5 GHz",
                "trlabel": "OS : Android 4.4 Kitkat"
            }, {
                "rowid": "SGS5",
                "columnid": "screen",
                "value": "8.5",
                "tllabel": "5.1 inch",
                "trlabel": "AMOLED screen"
            }, {
                "rowid": "SGS5",
                "columnid": "price",
                "value": "9.3",
                "tllabel": "$600"
            }, {
                "rowid": "SGS5",
                "columnid": "backup",
                "value": "9.7",
                "tllabel": "29 Hrs",
                "trlabel": "Battery : 2800 MAH"
            }, {
                "rowid": "SGS5",
                "columnid": "cam",
                "value": "8",
                "tllabel": "16 MP",
                "trlabel": "Front Camera : 2.1 MP"
            }, {
                "rowid": "HTC1M8",
                "columnid": "processor",
                "value": "9.2",
                "tllabel": "Quad Core 2.3 GHz",
                "trlabel": "OS : Android 4.4 Kitkat"
            }, {
                "rowid": "HTC1M8",
                "columnid": "screen",
                "value": "8.3",
                "tllabel": "5 inch",
                "trlabel": "LCD screen"
            }, {
                "rowid": "HTC1M8",
                "columnid": "price",
                "value": "7.3",
                "tllabel": "$600"
            }, {
                "rowid": "HTC1M8",
                "columnid": "backup",
                "value": "8.8",
                "tllabel": "20 Hrs",
                "trlabel": "Battery : 2600 MAH"
            }, {
                "rowid": "HTC1M8",
                "columnid": "cam",
                "value": "8.7",
                "tllabel": "4 MP",
                "trlabel": "Front Camera : 5 MP"
            }, {
                "rowid": "IPHONES5",
                "columnid": "processor",
                "value": "9.1",
                "tllabel": "Dual Core",
                "trlabel": "OS : iOS 7"
            }, {
                "rowid": "IPHONES5",
                "columnid": "screen",
                "value": "8.6",
                "tllabel": "4 inch",
                "trlabel": "Retina LCD screen"
            }, {
                "rowid": "IPHONES5",
                "columnid": "price",
                "value": "7.2",
                "tllabel": "$649"
            }, {
                "rowid": "IPHONES5",
                "columnid": "backup",
                "value": "8.4",
                "tllabel": "10 Hrs",
                "trlabel": "Battery : 1560 MAH"
            }, {
                "rowid": "IPHONES5",
                "columnid": "cam",
                "value": "9.5",
                "tllabel": "8 MP",
                "trlabel": "Front Camera : 1.2 MP"
            }, {
                "rowid": "LUMIA",
                "columnid": "processor",
                "value": "8.8",
                "tllabel": "Quad Core 2.2 GHz",
                "trlabel": "OS: Windows Phone 8"
            }, {
                "rowid": "LUMIA",
                "columnid": "screen",
                "value": "9.1",
                "tllabel": "6 inch",
                "trlabel": "LCD screen"
            }, {
                "rowid": "LUMIA",
                "columnid": "price",
                "value": "9.7",
                "tllabel": "$470"
            }, {
                "rowid": "LUMIA",
                "columnid": "backup",
                "value": "9.2",
                "tllabel": "27 Hrs",
                "trlabel": "Battery : 3400 MAH"
            }, {
                "rowid": "LUMIA",
                "columnid": "cam",
                "value": "8.1",
                "tllabel": "20MP",
                "trlabel": "Front Camera : 1.2 MP"
            }]
        }],
        "colorrange": {
            "gradient": "0",
            "minvalue": "0",
            "code": "E24B1A",
            "startlabel": "Poor",
            "endlabel": "Good",
            "color": [{
                "code": "E24B1A",
                "minvalue": "1",
                "maxvalue": "5",
                "label": "Bad"
            }, {
                "code": "F6BC33",
                "minvalue": "5",
                "maxvalue": "8.5",
                "label": "Average"
            }, {
                "code": "6DA81E",
                "minvalue": "8.5",
                "maxvalue": "10",
                "label": "Good"
            }]
        }
    }
}
,{
    type: 'hbullet',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "lowerLimit": "0",
            "upperLimit": "100",
            "caption": "Monthly Revenue",
            "subcaption": "Actual vs Target<br>Bakersfield Central",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "targetColor": "#8e0000",
            "showHoverEffect": "1",
            "colorRangeFillMix": "{light+0}",
            "valuePadding": "7",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "70"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f2c500",
                "alpha": "70"
            }, {
                "minValue": "75",
                "maxValue": "120",
                "code": "#1aaf5d",
                "alpha": "70"
            }]
        },
        "value": "82",
        "target": "90"
    }
}
,{
    type: 'hled',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer satisfaction score",
            "subcaption": "Current week - Bakersfield Central",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Bad",
            "upperLimitDisplay": "Good",
            "numberSuffix": "%",
            "tickMarkDistance": "5",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45",
                "code": "#8e0000"
            }, {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f2c500"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#1aaf5d"
            }]
        },
        "value": "92"
    }
}
,{
    type: 'inversemsarea',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Daily bounce rate",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Percentage",
            "numberSuffix": "%",
            "plotFillAlpha": "50",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "food.hsm.com",
            "data": [{
                "value": "27"
            }, {
                "value": "22"
            }, {
                "value": "25"
            }, {
                "value": "27"
            }, {
                "value": "21"
            }, {
                "value": "29"
            }, {
                "value": "22"
            }]
        }, {
            "seriesname": "cloth.hsm.com",
            "data": [{
                "value": "42"
            }, {
                "value": "38"
            }, {
                "value": "39"
            }, {
                "value": "36"
            }, {
                "value": "43"
            }, {
                "value": "44"
            }, {
                "value": "35"
            }]
        }]
    }
}
,{
    type: 'InverseMSColumn2D',
    dataFormat: 'json',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Average Page Load Time (hsm.com)",
            "subCaption": "Last Week",
            "yAxisName": "Time (In Sec)",
            "numberSuffix": "s",
            "xAxisLineThickness": "1",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "Loading Time",
            "allowDrag": "0",
            "data": [{
                "value": "6"
            }, {
                "value": "5.8"
            }, {
                "value": "5"
            }, {
                "value": "4.3"
            }, {
                "value": "4.1"
            }, {
                "value": "3.8"
            }, {
                "value": "3.2"
            }]
        }]
    }
}
,{
    type: 'inversemsline',
    dataFormat: 'json',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Average Page Load Time (hsm.com)",
            "subCaption": "Last Week",
            "showBorder": "0",
            "xAxisName": "Day",
            "yAxisName": "Time (In Sec)",
            "numberSuffix": "s",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "Loading Time",
            "allowDrag": "0",
            "data": [{
                "value": "6"
            }, {
                "value": "5.8"
            }, {
                "value": "5"
            }, {
                "value": "4.3"
            }, {
                "value": "4.1"
            }, {
                "value": "3.8"
            }, {
                "value": "3.2"
            }]
        }]
    }
}
,{
    type: 'kagi',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Stock Price HRYS",
            "subCaption": "Last 2 months",
            "numberPrefix": "$",
            "xAxisName": "Day",
            "yAxisName": "Amount (In USD)",
            "reversalPercentage": "5",
            "rallythickness": "3",
            "declinethickness": "3",
            "theme": "fusion"
        },
        "data": [{
            "label": "Day 60",
            "value": "18.99"
        }, {
            "label": "Day 59",
            "value": "18.82"
        }, {
            "label": "Day 58",
            "value": "18.65"
        }, {
            "label": "Day 57",
            "value": "19.4"
        }, {
            "label": "Day 56",
            "value": "19.92"
        }, {
            "label": "Day 55",
            "value": "20.16"
        }, {
            "label": "Day 54",
            "value": "20.48"
        }, {
            "label": "Day 53",
            "value": "20.15"
        }, {
            "label": "Day 52",
            "value": "20.22"
        }, {
            "label": "Day 51",
            "value": "19.44"
        }, {
            "label": "Day 50",
            "value": "19.22"
        }, {
            "label": "Day 49",
            "value": "19.24"
        }, {
            "label": "Day 48",
            "value": "18.95"
        }, {
            "label": "Day 47",
            "value": "18.97"
        }, {
            "label": "Day 46",
            "value": "18.7"
        }, {
            "label": "Day 45",
            "value": "19.05"
        }, {
            "label": "Day 44",
            "value": "19.33"
        }, {
            "label": "Day 43",
            "value": "18.52"
        }, {
            "label": "Day 42",
            "value": "18.26"
        }, {
            "label": "Day 41",
            "value": "18.51"
        }, {
            "label": "Day 40",
            "value": "18.66"
        }, {
            "label": "Day 39",
            "value": "19.2"
        }, {
            "label": "Day 38",
            "value": "19.33"
        }, {
            "label": "Day 37",
            "value": "19.27"
        }, {
            "label": "Day 36",
            "value": "19.77"
        }, {
            "label": "Day 35",
            "value": "19.88"
        }, {
            "label": "Day 34",
            "value": "19.63"
        }, {
            "label": "Day 33",
            "value": "20.65"
        }, {
            "label": "Day 32",
            "value": "21.33"
        }, {
            "label": "Day 31",
            "value": "20.56"
        }, {
            "label": "Day 30",
            "value": "20.36"
        }, {
            "label": "Day 29",
            "value": "20.03"
        }, {
            "label": "Day 28",
            "value": "19.88"
        }, {
            "label": "Day 27",
            "value": "19.9"
        }, {
            "label": "Day 26",
            "value": "19.5"
        }, {
            "label": "Day 25",
            "value": "19.43"
        }, {
            "label": "Day 24",
            "value": "19.41"
        }, {
            "label": "Day 23",
            "value": "19.83"
        }, {
            "label": "Day 22",
            "value": "21"
        }, {
            "label": "Day 21",
            "value": "20.44"
        }, {
            "label": "Day 20",
            "value": "20.3"
        }, {
            "label": "Day 19",
            "value": "21.63"
        }, {
            "label": "Day 18",
            "value": "23.28"
        }, {
            "label": "Day 17",
            "value": "23.94"
        }, {
            "label": "Day 16",
            "value": "23.48"
        }, {
            "label": "Day 15",
            "value": "22.74"
        }, {
            "label": "Day 14",
            "value": "22.24"
        }, {
            "label": "Day 13",
            "value": "22.42"
        }, {
            "label": "Day 12",
            "value": "22.68"
        }, {
            "label": "Day 11",
            "value": "23.46"
        }, {
            "label": "Day 10",
            "value": "23.6"
        }, {
            "label": "Day 9",
            "value": "24.15"
        }, {
            "label": "Day 8",
            "value": "24.1"
        }, {
            "label": "Day 7",
            "value": "23.47"
        }, {
            "label": "Day 6",
            "value": "23.76"
        }, {
            "label": "Day 55",
            "value": "23.66"
        }, {
            "label": "Day 5",
            "value": "23.79"
        }, {
            "label": "Day 4",
            "value": "23.39"
        }, {
            "label": "Day 3",
            "value": "23.88"
        }, {
            "label": "Day 2",
            "value": "23.01"
        }, {
            "label": "Yesterday",
            "value": "23.32"
        }]
    }
}
,{
    type: 'line',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "lineThickness": "2",
            "theme": "fusion"
        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "23507"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "18500",
                "color": "#1aaf5d",
                "displayvalue": "Average{br}weekly{br}footfall",
                "valueOnRight": "1",
                "thickness": "2"
            }]
        }]
    }
}
,{
    type: 'logmscolumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store footfall vs Online visitors ",
            "subCaption": "Last Year",
            "xAxisName": "Quarter",
            "yAxisName": "No of visitors",
            "base": "10",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Total footfalls",
            "data": [{
                "value": "126734"
            }, {
                "value": "159851"
            }, {
                "value": "197393"
            }, {
                "value": "168560"
            }, {
                "value": "199428"
            }]
        }, {
            "seriesname": "Online Visits",
            "data": [{
                "value": "1126059"
            }, {
                "value": "1292145"
            }, {
                "value": "1496849"
            }, {
                "value": "1460249"
            }, {
                "value": "1083962"
            }]
        }]
    }
}
,{
    type: 'logmsline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Store footfall vs Online visitors ",
            "subCaption": "Last Year",
            "xAxisName": "Quarter",
            "yAxisName": "USD",
            "base": "10",
            "numberprefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Total footfalls",
            "data": [{
                "value": "126734"
            }, {
                "value": "159851"
            }, {
                "value": "197393"
            }, {
                "value": "168560"
            }, {
                "value": "199428"
            }]
        }, {
            "seriesname": "Online Visits",
            "data": [{
                "value": "1126059"
            }, {
                "value": "1292145"
            }, {
                "value": "1496849"
            }, {
                "value": "1460249"
            }, {
                "value": "1083962"
            }]
        }]
    }
}
,{
    type: 'marimekko',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Electronic Brands in Top 3 Revenue Earning States",
            "subcaption": "Last month",
            "aligncaptiontocanvas": "0",
            "yaxisname": "Statewise Sales (in %)",
            "xaxisname": "Brand",
            "numberprefix": "$",
            "valueBgColor": "#FFFFFF",
            "valueBgAlpha": "60",
            "showPlotBorder": "1",
            "plotBorderThickness": "0.25",
            "showxaxispercentvalues": "1",
            "showsum": "1",
            //Custom tool-text string built using a combination of HTML and chart macro variables
            "plottooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}State: <b>$seriesName</b>{br}Sales : <b>$dataValue</b>{br}Market share in $seriesName : <b>$percentValue</b>{br}Overall market share of $label: <b>$xAxisPercentValue</b>",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Bose"
            }, {
                "label": "Dell"
            }, {
                "label": "Apple"
            }]
        }],
        "dataset": [{
            "seriesname": "California",
            "data": [{
                "value": "335000"
            }, {
                "value": "225100"
            }, {
                "value": "164200"
            }]
        }, {
            "seriesname": "Washington",
            "data": [{
                "value": "215000"
            }, {
                "value": "198000"
            }, {
                "value": "120000"
            }]
        }, {
            "seriesname": "Nevada",
            "data": [{
                "value": "298000"
            }, {
                "value": "109300"
            }, {
                "value": "153600"
            }]
        }]
    }
}
,{
    "type": "multiaxisline",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "CPU Usage",
            "subcaption": "(Last 10 Hours)",
            "xaxisname": "Time",
            "numvdivlines": "4",
            "vdivlinealpha": "0",
            "alternatevgridalpha": "5",
            "labeldisplay": "ROTATE",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "10:00"
            }, {
                "label": "11:00"
            }, {
                "label": "12:00"
            }, {
                "label": "13:00"
            }, {
                "label": "14:00"
            }, {
                "label": "15:00"
            }, {
                "label": "16:00"
            }, {
                "label": "17:00"
            }, {
                "label": "18:00"
            }, {
                "label": "19:00"
            }]
        }],
        "axis": [{
            "title": "CPU Usage",
            "tickwidth": "10",
            "divlineDashed": "1",
            "numbersuffix": "%",
            "dataset": [{
                "seriesname": "CPU 1",
                "linethickness": "3",
                "color": "CC0000",
                "data": [{
                    "value": "16"
                }, {
                    "value": "19"
                }, {
                    "value": "16"
                }, {
                    "value": "17"
                }, {
                    "value": "23"
                }, {
                    "value": "23"
                }, {
                    "value": "15"
                }, {
                    "value": "14"
                }, {
                    "value": "19"
                }, {
                    "value": "21"
                }]
            }, {
                "seriesname": "CPU 2",
                "linethickness": "3",
                "color": "0372AB",
                "data": [{
                    "value": "12"
                }, {
                    "value": "12"
                }, {
                    "value": "9"
                }, {
                    "value": "9"
                }, {
                    "value": "11"
                }, {
                    "value": "13"
                }, {
                    "value": "16"
                }, {
                    "value": "14"
                }, {
                    "value": "16"
                }, {
                    "value": "11"
                }]
            }]
        }, {
            "title": "PF Usage",
            "axisonleft": "0",
            "numdivlines": "4",
            "tickwidth": "10",
            "divlineDashed": "1",
            "formatnumberscale": "1",
            "defaultnumberscale": " MB",
            "numberscaleunit": "GB",
            "numberscalevalue": "1024",
            "dataset": [{
                "seriesname": "PF Usage",
                "data": [{
                    "value": "696"
                }, {
                    "value": "711"
                }, {
                    "value": "636"
                }, {
                    "value": "671"
                }, {
                    "value": "1293"
                }, {
                    "value": "789"
                }, {
                    "value": "793"
                }, {
                    "value": "993"
                }, {
                    "value": "657"
                }, {
                    "value": "693"
                }]
            }]
        }, {
            "title": "Processes",
            "axisonleft": "0",
            "numdivlines": "5",
            "tickwidth": "10",
            "divlineDashed": "1",
            "dataset": [{
                "seriesname": "Processes",
                "data": [{
                    "value": "543"
                }, {
                    "value": "511"
                }, {
                    "value": "536"
                }, {
                    "value": "449"
                }, {
                    "value": "668"
                }, {
                    "value": "588"
                }, {
                    "value": "511"
                }, {
                    "value": "536"
                }, {
                    "value": "449"
                }, {
                    "value": "668"
                }]
            }]
        }]
    }
}
,{
    type: 'multilevelpie',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Top Products Sold",
            "subCaption": "Last Quarter",
            "basefontsize": "9",
            "pieFillAlpha": "60",
            "pieBorderThickness": "2",
            "hoverFillColor": "#cccccc",
            "pieBorderColor": "#ffffff",
            "showPercentInTooltip": "0",
            "numberPrefix": "$",
            "plotTooltext": "$label, $$valueK, $percentValue",
            "theme": "fusion"
        },
        "category": [{
            "label": "Sales by category",
            "color": "#ffffff",
            "value": "150",
            "category": [{
                "label": "Food & {br}Beverages",
                "color": "#f8bd19",
                "value": "55.5",
                "category": [{
                    "label": "Breads",
                    "color": "#f8bd19",
                    "value": "11.1"
                }, {
                    "label": "Juice",
                    "color": "#f8bd19",
                    "value": "27.75"
                }, {
                    "label": "Noodles",
                    "color": "#f8bd19",
                    "value": "9.99"
                }, {
                    "label": "Seafood",
                    "color": "#f8bd19",
                    "value": "6.66"
                }]
            }, {
                "label": "Apparel &{br}Accessories",
                "color": "#e44a00",
                "value": "42",
                "category": [{
                    "label": "Sun Glasses",
                    "color": "#e44a00",
                    "value": "10.08"
                }, {
                    "label": "Clothing",
                    "color": "#e44a00",
                    "value": "18.9"
                }, {
                    "label": "Handbags",
                    "color": "#e44a00",
                    "value": "6.3"
                }, {
                    "label": "Shoes",
                    "color": "#e44a00",
                    "value": "6.72"
                }]
            }, {
                "label": "Baby {br}Products",
                "color": "#008ee4",
                "value": "22.5",
                "category": [{
                    "label": "Bath &{br}Grooming",
                    "color": "#008ee4",
                    "value": "9.45"
                }, {
                    "label": "Feeding",
                    "color": "#008ee4",
                    "value": "6.3"
                }, {
                    "label": "Diapers",
                    "color": "#008ee4",
                    "value": "6.75"
                }]
            }, {
                "label": "Electronics",
                "color": "#33bdda",
                "value": "30",
                "category": [{
                    "label": "Laptops",
                    "color": "#33bdda",
                    "value": "8.1"
                }, {
                    "label": "Televisions",
                    "color": "#33bdda",
                    "value": "10.5"
                }, {
                    "label": "SmartPhones",
                    "color": "#33bdda",
                    "value": "11.4"
                }]
            }]
        }]
    }
}
,{
    type: 'mscombidy2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "For last year",
            "xAxisname": "Month",
            "pYAxisName": "Amount (In USD)",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "50",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan"
            }, {
                "label": "Feb"
            }, {
                "label": "Mar"
            }, {
                "label": "Apr"
            }, {
                "label": "May"
            }, {
                "label": "Jun"
            }, {
                "label": "Jul"
            }, {
                "label": "Aug"
            }, {
                "label": "Sep"
            }, {
                "label": "Oct"
            }, {
                "label": "Nov"
            }, {
                "label": "Dec"
            }]
        }],
        "dataset": [{
            "seriesName": "Revenues",
            "data": [{
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "15000"
            }, {
                "value": "21000"
            }, {
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "17000"
            }, {
                "value": "22000"
            }, {
                "value": "19000"
            }, {
                "value": "23000"
            }]
        }, {
            "seriesName": "Profits",
            "renderAs": "area",
            "showValues": "0",
            "data": [{
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "7000"
            }, {
                "value": "1000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "8000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }]
        }, {
            "seriesName": "Profit %",
            "parentYAxis": "S",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                "value": "25"
            }, {
                "value": "25"
            }, {
                "value": "16.66"
            }, {
                "value": "21.05"
            }, {
                "value": "6.66"
            }, {
                "value": "33.33"
            }, {
                "value": "6.25"
            }, {
                "value": "25"
            }, {
                "value": "5.88"
            }, {
                "value": "36.36"
            }, {
                "value": "10.52"
            }, {
                "value": "30.43"
            }]
        }]
    }
}
,{
    type: 'mscombi2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Sales analysis of last year",
            "xAxisname": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan"
            }, {
                "label": "Feb"
            }, {
                "label": "Mar"
            }, {
                "label": "Apr"
            }, {
                "label": "May"
            }, {
                "label": "Jun"
            }, {
                "label": "Jul"
            }, {
                "label": "Aug"
            }, {
                "label": "Sep"
            }, {
                "label": "Oct"
            }, {
                "label": "Nov"
            }, {
                "label": "Dec"
            }]
        }],
        "dataset": [{
            "seriesName": "Actual Revenue",
            "showValues": "1",
            "data": [{
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "15000"
            }, {
                "value": "21000"
            }, {
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "17000"
            }, {
                "value": "25000"
            }, {
                "value": "19000"
            }, {
                "value": "23000"
            }]
        }, {
            "seriesName": "Projected Revenue",
            "renderAs": "line",
            "data": [{
                "value": "15000"
            }, {
                "value": "16000"
            }, {
                "value": "17000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "19000"
            }, {
                "value": "19000"
            }, {
                "value": "19000"
            }, {
                "value": "20000"
            }, {
                "value": "21000"
            }, {
                "value": "22000"
            }, {
                "value": "23000"
            }]
        }, {
            "seriesName": "Profit",
            "renderAs": "area",
            "data": [{
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "7000"
            }, {
                "value": "1000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "8000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }]
        }]
    }
}
,{
    type: 'mscombidy3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "For last year",
            "xAxisname": "Month",
            "pYAxisName": "Amount (In USD)",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "50",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan"
            }, {
                "label": "Feb"
            }, {
                "label": "Mar"
            }, {
                "label": "Apr"
            }, {
                "label": "May"
            }, {
                "label": "Jun"
            }, {
                "label": "Jul"
            }, {
                "label": "Aug"
            }, {
                "label": "Sep"
            }, {
                "label": "Oct"
            }, {
                "label": "Nov"
            }, {
                "label": "Dec"
            }]
        }],
        "dataset": [{
            "seriesName": "Revenues",
            "data": [{
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "15000"
            }, {
                "value": "21000"
            }, {
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "17000"
            }, {
                "value": "22000"
            }, {
                "value": "19000"
            }, {
                "value": "23000"
            }]
        }, {
            "seriesName": "Profits",
            "renderAs": "area",
            "showValues": "0",
            "data": [{
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "7000"
            }, {
                "value": "1000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "8000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }]
        }, {
            "seriesName": "Profit %",
            "parentYAxis": "S",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                "value": "25"
            }, {
                "value": "25"
            }, {
                "value": "16.66"
            }, {
                "value": "21.05"
            }, {
                "value": "6.66"
            }, {
                "value": "33.33"
            }, {
                "value": "6.25"
            }, {
                "value": "25"
            }, {
                "value": "5.88"
            }, {
                "value": "36.36"
            }, {
                "value": "10.52"
            }, {
                "value": "30.43"
            }]
        }]
    }
}
,{
    type: 'mscombi3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Revenue, Profits & Number of employees",
            drawcrossline: "1",
            yaxisname: "Revenue / Profit (in $)",
            syaxisname: "Number of employees",
            showvalues: "0",
            showanchors: "0",
            numberprefix: "$",
            plothighlighteffect: "fadeout",
            theme: "fusion"
        },
        categories: [{
            category: [{
                    label: "Mar-2012"
                },
                {
                    label: "Jun-2012"
                },
                {
                    label: "Sept-2012"
                },
                {
                    label: "Dec-2012"
                },
                {
                    label: "Mar-2013"
                },
                {
                    label: "Jun-2013"
                },
                {
                    label: "Sept-2013"
                },
                {
                    label: "Dec-2013"
                },
                {
                    label: "Mar-2014"
                },
                {
                    label: "Jun-2014"
                },
                {
                    label: "Sept-2014"
                },
                {
                    label: "Dec-2014"
                },
                {
                    label: "Mar-2015"
                },
                {
                    label: "Jun-2015"
                },
                {
                    label: "Sept-2015"
                },
                {
                    label: "Dec-2015"
                },
                {
                    label: "Mar-2016"
                },
                {
                    label: "Jun-2016"
                },
                {
                    label: "Sept-2016"
                },
                {
                    label: "Dec-2016"
                },
                {
                    label: "Mar-2017"
                },
                {
                    label: "Jun-2017"
                }
            ]
        }],
        dataset: [{
                seriesname: "Revenue",
                plottooltext: "Revenue in $label : <b>$dataValue</b>",
                data: [{
                        value: "36000"
                    },
                    {
                        value: "22000"
                    },
                    {
                        value: "24000"
                    },
                    {
                        value: "42000"
                    },
                    {
                        value: "35000"
                    },
                    {
                        value: "21000"
                    },
                    {
                        value: "26000"
                    },
                    {
                        value: "28000"
                    },
                    {
                        value: "47000"
                    },
                    {
                        value: "38000"
                    },
                    {
                        value: "29000"
                    },
                    {
                        value: "23000"
                    },
                    {
                        value: "24000"
                    },
                    {
                        value: "42000"
                    },
                    {
                        value: "35000"
                    },
                    {
                        value: "21000"
                    },
                    {
                        value: "26000"
                    },
                    {
                        value: "28000"
                    },
                    {
                        value: "47000"
                    },
                    {
                        value: "38000"
                    },
                    {
                        value: "29000"
                    },
                    {
                        value: "23000"
                    }
                ]
            },
            {
                seriesname: "Profit",
                plottooltext: "Profit in $label : <b>$dataValue</b>",
                renderas: "area",
                showvalues: "0",
                data: [{
                        value: "4000"
                    },
                    {
                        value: "5000"
                    },
                    {
                        value: "3000"
                    },
                    {
                        value: "4000"
                    },
                    {
                        value: "1000"
                    },
                    {
                        value: "7000"
                    },
                    {
                        value: "1000"
                    },
                    {
                        value: "4000"
                    },
                    {
                        value: "1000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "2000"
                    },
                    {
                        value: "7000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "8000"
                    },
                    {
                        value: "10000"
                    },
                    {
                        value: "7000"
                    },
                    {
                        value: "8000"
                    },
                    {
                        value: "4000"
                    },
                    {
                        value: "9000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "7000"
                    }
                ]
            },
            {
                seriesname: "Number of Employees",
                parentyaxis: "S",
                renderas: "line",
                showvalues: "0",
                plottooltext: "$value employees",
                data: [{
                        value: "31"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "35"
                    },
                    {
                        value: "29"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "23"
                    },
                    {
                        value: "26"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "35"
                    },
                    {
                        value: "20"
                    },
                    {
                        value: "30"
                    },
                    {
                        value: "46"
                    },
                    {
                        value: "34"
                    },
                    {
                        value: "26"
                    },
                    {
                        value: "33"
                    },
                    {
                        value: "46"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "35"
                    },
                    {
                        value: "28"
                    },
                    {
                        value: "20"
                    },
                    {
                        value: "43"
                    }
                ]
            }
        ]
    }
}
,{
    type: 'msarea',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales of Liquor",
            "subCaption": "Previous week vs current week",
            "xAxisName": "Day",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "plotFillAlpha": "60",
            "theme": "fusion"
        },

        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],

        "dataset": [{
            "seriesname": "Previous Week",
            "data": [{
                "value": "13000"
            }, {
                "value": "14500"
            }, {
                "value": "13500"
            }, {
                "value": "15000"
            }, {
                "value": "15500"
            }, {
                "value": "17650"
            }, {
                "value": "19500"
            }]
        }, {
            "seriesname": "Current Week",
            "data": [{
                "value": "8400"
            }, {
                "value": "9800"
            }, {
                "value": "11800"
            }, {
                "value": "14400"
            }, {
                "value": "18800"
            }, {
                "value": "24800"
            }, {
                "value": "30800"
            }]
        }]
    }
}
,{
    type: 'msbar2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)",
            "numberPrefix": "$",
            "placevaluesInside": "1",
            "xAxisLineColor": "#999999",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Bakersfield Central"
            }, {
                "label": "Garden Groove harbour"
            }, {
                "label": "Los Angeles Topanga"
            }, {
                "label": "Compton-Rancho Dom"
            }, {
                "label": "Daly City Serramonte"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "17000"
            }, {
                "value": "19500"
            }, {
                "value": "12500"
            }, {
                "value": "14500"
            }, {
                "value": "17500"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "19500"
            }, {
                "value": "11500"
            }]
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "15000",
                "color": "#0075c2",
                "valueOnRight": "1",
                "displayvalue": "Avg. for{br}Food"
            }, {
                "startvalue": "22000",
                "color": "#1aaf5d",
                "valueOnRight": "1",
                "displayvalue": "Avg. for{br}Non-food"
            }]
        }]
    }
}
,{
    type: 'msbar3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)",
            "numberPrefix": "$",
            "alignCaptionWithCanvas": "1",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Bakersfield Central"
            }, {
                "label": "Garden Groove harbour"
            }, {
                "label": "Los Angeles Topanga"
            }, {
                "label": "Compton-Rancho Dom"
            }, {
                "label": "Daly City Serramonte"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "17000"
            }, {
                "value": "19500"
            }, {
                "value": "12500"
            }, {
                "value": "14500"
            }, {
                "value": "17500"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "19500"
            }, {
                "value": "11500"
            }]
        }]
    }
}
,{
    type: 'mscolumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "xAxisname": "Quarter",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "plotFillAlpha": "80",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Previous Year",
            "data": [{
                "value": "10000"
            }, {
                "value": "11500"
            }, {
                "value": "12500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Current Year",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "26800"
            }]
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "12250",
                "color": "#0075c2",
                "displayvalue": "Previous{br}Average",
                "valueOnRight": "1",
                "thickness": "1",
                "showBelow": "1",
                "tooltext": "Previous year quarterly target  : $13.5K"
            }, {
                "startvalue": "25950",
                "color": "#1aaf5d",
                "displayvalue": "Current{br}Average",
                "valueOnRight": "1",
                "thickness": "1",
                "showBelow": "1",
                "tooltext": "Current year quarterly target  : $23K"
            }]
        }]
    }
}
,{
    type: 'mscolumn3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Sales by quarter",
            "xAxisName": "Quarter",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Previous Year",
            "data": [{
                "value": "10000"
            }, {
                "value": "11500"
            }, {
                "value": "12500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Current Year",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "26800"
            }]
        }]
    }
}
,{
    type: 'mscolumn3dlinedy',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise Quarterly Revenue vs. Profit %",
            "subCaption": "Harry's SuperMart - Last Year",
            "xAxisname": "Quarter",
            "pYAxisName": "Sales",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "25",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "11000"
            }, {
                "value": "14000"
            }, {
                "value": "10500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "14400"
            }, {
                "value": "14800"
            }, {
                "value": "8300"
            }, {
                "value": "11800"
            }]
        }, {
            "seriesname": "Profit %",
            "renderAs": "line",
            "parentYAxis": "S",
            "showValues": "0",
            "data": [{
                "value": "14"
            }, {
                "value": "16"
            }, {
                "value": "15"
            }, {
                "value": "17"
            }]
        }]
    }
}
,{
    type: 'MSColumnLine3D',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "showvalues": "0",
            "caption": "Cost Analysis",
            "numberprefix": "$",
            "xaxisname": "Quarters",
            "yaxisname": "Cost",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Quarter 1"
            }, {
                "label": "Quarter 2"
            }, {
                "label": "Quarter 3"
            }, {
                "label": "Quarter 4"
            }]
        }],
        "dataset": [{
            "seriesname": "Fixed Cost",
            "data": [{
                "value": "235000"
            }, {
                "value": "225100"
            }, {
                "value": "222000"
            }, {
                "value": "230500"
            }]
        }, {
            "seriesname": "Variable Cost",
            "data": [{
                "value": "230000"
            }, {
                "value": "143000"
            }, {
                "value": "198000"
            }, {
                "value": "327600"
            }]
        }, {
            "seriesname": "Budgeted cost",
            "renderas": "Line",
            "data": [{
                "value": "455000"
            }, {
                "value": "334000"
            }, {
                "value": "426000"
            }, {
                "value": "403000"
            }]
        }]
    }
}
,{
    type: 'msline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "xAxisName": "Day",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "vline": "true",
                "lineposition": "0",
                "color": "#6baa01",
                "labelHAlign": "center",
                "labelPosition": "0",
                "label": "National holiday",
                "dashed": "1"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "Bakersfield Central",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "25507"
            }, {
                "value": "9110"
            }, {
                "value": "15529"
            }, {
                "value": "20803"
            }, {
                "value": "19202"
            }]
        }, {
            "seriesname": "Los Angeles Topanga",
            "data": [{
                "value": "13400"
            }, {
                "value": "12800"
            }, {
                "value": "22800"
            }, {
                "value": "12400"
            }, {
                "value": "15800"
            }, {
                "value": "19800"
            }, {
                "value": "21800"
            }]
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "17022",
                "color": "#6baa01",
                "valueOnRight": "1",
                "displayvalue": "Average"
            }]
        }]
    }
}
,{
    type: 'msspline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitor",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "vline": "true",
                "lineposition": "0",
                "color": "#6baa01",
                "labelHAlign": "right",
                "labelPosition": "0",
                "label": "National holiday"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],

        "dataset": [{
            "seriesname": "Bakersfield Central",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "25507"
            }, {
                "value": "9110"
            }, {
                "value": "15529"
            }, {
                "value": "20803"
            }, {
                "value": "19202"
            }]
        }, {
            "seriesname": "Los Angeles Topanga",
            "data": [{
                "value": "13400"
            }, {
                "value": "12800"
            }, {
                "value": "22800"
            }, {
                "value": "12400"
            }, {
                "value": "15800"
            }, {
                "value": "19800"
            }, {
                "value": "21800"
            }]
        }]
    }
}
,{
    type: 'mssplinearea',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of Footfalls Last Week",
            "subCaption": "Garden Groove harbour vs Crompton-Rancho Dom",
            "xAxisName": "Day",
            "yAxisName": "No. of Footfalls",
            "theme": "fusion"
        },

        "categories": [{
            "category": [{
                "label": "Mon"
            }, {
                "label": "Tue"
            }, {
                "label": "Wed"
            }, {
                "vline": "true",
                "lineposition": "0",
                "color": "#6baa01",
                "labelHAlign": "right",
                "labelPosition": "0",
                "label": "National holiday"
            }, {
                "label": "Thu"
            }, {
                "label": "Fri"
            }, {
                "label": "Sat"
            }, {
                "label": "Sun"
            }]
        }],
        "dataset": [{
            "seriesname": "Garden Groove harbour",
            "data": [{
                "value": "15123"
            }, {
                "value": "14233"
            }, {
                "value": "21507"
            }, {
                "value": "9110"
            }, {
                "value": "14829"
            }, {
                "value": "17503"
            }, {
                "value": "20202"
            }]
        }, {
            "seriesname": "Crompton-Rancho Dom",
            "data": [{
                "value": "11400"
            }, {
                "value": "12800"
            }, {
                "value": "17800"
            }, {
                "value": "10400"
            }, {
                "value": "11800"
            }, {
                "value": "13100"
            }, {
                "value": "20800"
            }]
        }]
    }
}
,{
    type: 'msstackedcolumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise break-up of quarterly revenue in last year",
            "subcaption": "Harry's SuperMart",
            "xaxisname": "Quarter",
            "yaxisname": "Sales (In USD)",
            "numberPrefix": "$",
            "numbersuffix": "M",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "dataset": [{
                "seriesname": "Processed Food",
                "data": [{
                    "value": "30"
                }, {
                    "value": "26"
                }, {
                    "value": "29"
                }, {
                    "value": "31"
                }]
            }, {
                "seriesname": "Un-Processed Food",
                "data": [{
                    "value": "21"
                }, {
                    "value": "28"
                }, {
                    "value": "39"
                }, {
                    "value": "41"
                }]
            }]
        }, {
            "dataset": [{
                "seriesname": "Electronics",
                "data": [{
                    "value": "27"
                }, {
                    "value": "25"
                }, {
                    "value": "28"
                }, {
                    "value": "26"
                }]
            }, {
                "seriesname": "Apparels",
                "data": [{
                    "value": "17"
                }, {
                    "value": "15"
                }, {
                    "value": "18"
                }, {
                    "value": "16"
                }]
            }, {
                "seriesname": "Others",
                "data": [{
                    "value": "12"
                }, {
                    "value": "17"
                }, {
                    "value": "16"
                }, {
                    "value": "15"
                }]
            }]
        }]
    }
}
,{
    type: 'msstackedcolumn2dlinedy',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Sales vs. Profit % in Last Year",
            "subcaption": "Product-wise Break-up - Harry's SuperMart",
            "xAxisName": "Quarter",
            "pYAxisName": "Sales",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "numbersuffix": "M",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "25",
            "theme": "fusion"

        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "dataset": [{
                "seriesname": "Processed Food",
                "data": [{
                    "value": "30"
                }, {
                    "value": "26"
                }, {
                    "value": "33"
                }, {
                    "value": "31"
                }]
            }, {
                "seriesname": "Un-Processed Food",
                "data": [{
                    "value": "21"
                }, {
                    "value": "28"
                }, {
                    "value": "39"
                }, {
                    "value": "41"
                }]
            }]
        }, {
            "dataset": [{
                "seriesname": "Electronics",
                "data": [{
                    "value": "27"
                }, {
                    "value": "25"
                }, {
                    "value": "28"
                }, {
                    "value": "26"
                }]
            }, {
                "seriesname": "Apparels",
                "data": [{
                    "value": "17"
                }, {
                    "value": "15"
                }, {
                    "value": "18"
                }, {
                    "value": "16"
                }]
            }]
        }],
        "lineset": [{
            "seriesname": "Profit %",
            "showValues": "0",
            "data": [{
                "value": "14"
            }, {
                "value": "16"
            }, {
                "value": "15"
            }, {
                "value": "17"
            }]
        }]
    }
}
,{
    type: 'overlappedcolumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "xAxisname": "Quarter",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                    "label": "Q1"
                },
                {
                    "label": "Q2"
                },
                {
                    "label": "Q3"
                },
                {
                    "label": "Q4"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Previous Year",
                "data": [{
                        "value": "10000"
                    },
                    {
                        "value": "11500"
                    },
                    {
                        "value": "12500"
                    },
                    {
                        "value": "15000"
                    }
                ]
            },
            {
                "seriesname": "Current Year",
                "data": [{
                        "value": "25400"
                    },
                    {
                        "value": "29800"
                    },
                    {
                        "value": "21800"
                    },
                    {
                        "value": "26800"
                    }
                ]
            }
        ],
        "trendlines": [{
            "line": [{
                    "startvalue": "12250",
                    "color": "#0075c2",
                    "displayvalue": "Previous{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Previous year quarterly target  : $13.5K"
                },
                {
                    "startvalue": "25950",
                    "color": "#1aaf5d",
                    "displayvalue": "Current{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Current year quarterly target  : $23K"
                }
            ]
        }]
    }
},{
    type: 'overlappedbar2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                    "label": "Bakersfield Central"
                },
                {
                    "label": "Garden Groove harbour"
                },
                {
                    "label": "Los Angeles Topanga"
                },
                {
                    "label": "Compton-Rancho Dom"
                },
                {
                    "label": "Daly City Serramonte"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Food Products",
                "data": [{
                        "value": "17000"
                    },
                    {
                        "value": "19500"
                    },
                    {
                        "value": "12500"
                    },
                    {
                        "value": "14500"
                    },
                    {
                        "value": "17500"
                    }
                ]
            },
            {
                "seriesname": "Non-Food Products",
                "data": [{
                        "value": "25400"
                    },
                    {
                        "value": "29800"
                    },
                    {
                        "value": "21800"
                    },
                    {
                        "value": "19500"
                    },
                    {
                        "value": "11500"
                    }
                ]
            }
        ],
        "trendlines": [{
            "line": [{
                    "startvalue": "15000",
                    "color": "#0075c2",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Food"
                },
                {
                    "startvalue": "22000",
                    "color": "#1aaf5d",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Non-food"
                }
            ]
        }]
    }
},{
    type: 'pareto2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Employee late arrivals by reported cause",
            "subCaption": "Last month",
            "xAxisName": "Reported Cause",
            "pYAxisName": "No. of Occurrence",
            "sYAxisname": "Cumulative Percentage",
            "theme": "fusion"
        },
        "data": [{
            "label": "Traffic",
            "value": "5680"
        }, {
            "label": "Family Engagement",
            "value": "1036"
        }, {
            "label": "Public Transport",
            "value": "950"
        }, {
            "label": "Weather",
            "value": "500"
        }, {
            "label": "Emergency",
            "value": "140"
        }, {
            "label": "Others",
            "value": "68"
        }]
    }
}
,{
    type: 'pareto3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Employee late arrivals by reported cause",
            "subCaption": "Last month",
            "xAxisName": "Reported Cause",
            "pYAxisName": "No. of Occurrence",
            "sYAxisname": "Cumulative Percentage",
            "theme": "fusion"
        },
        "data": [{
            "label": "Traffic",
            "value": "5680"
        }, {
            "label": "Family Engagement",
            "value": "1036"
        }, {
            "label": "Public Transport",
            "value": "950"
        }, {
            "label": "Weather",
            "value": "500"
        }, {
            "label": "Emergency",
            "value": "140"
        }, {
            "label": "Others",
            "value": "68"
        }]
    }
}
,{
    type: 'pie2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Visitors by Age Group",
            "subCaption": "Last year",
            "use3DLighting": "0",
            "showPercentValues": "1",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Teenage",
            "value": "1250400"
        }, {
            "label": "Adult",
            "value": "1463300"
        }, {
            "label": "Mid-age",
            "value": "1050700"
        }, {
            "label": "Senior",
            "value": "491000"
        }]
    }
}
,{
    type: 'pie3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Visitors by Age Group",
            "subCaption": "Last year",
            "enableSmartLabels": "0",
            "startingAngle": "0",
            "showPercentValues": "1",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Teenage",
            "value": "1250400"
        }, {
            "label": "Adult",
            "value": "1463300"
        }, {
            "label": "Mid-age",
            "value": "1050700"
        }, {
            "label": "Senior",
            "value": "491000"
        }]
    }
}
,{
    type: 'pyramid',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "The Global Wealth Pyramid",
            "captionOnTop": "0",
            "captionPadding": "25",
            "alignCaptionWithCanvas": "1",
            "subcaption": "Credit Suisse 2013",
            "subCaptionFontSize": "12",
            "borderAlpha": "20",
            "is2D": "1",
            "showValues": "1",
            "numberPrefix": "$",
            "numberSuffix": "M",
            "plotTooltext": "$label of world population is worth USD $value tn ",
            "showPercentValues": "1",
            "chartLeftMargin": "40",
            "theme": "fusion"
        },
        "data": [{
            "label": "Top 32 mn (0.7%)",
            "value": "98.7"
        }, {
            "label": "Next 361 mn (7.7%)",
            "value": "101.8"
        }, {
            "label": "Next 1.1 bn (22.9%)",
            "value": "33"
        }, {
            "label": "Last 3.2 bn (68.7%)",
            "value": "7.3"
        }]
    }
}
,{
    type: 'radar',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Budget analysis",
            "subCaption": "Current month",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Marketing"
            }, {
                "label": "Product Management"
            }, {
                "label": "Customer Service"
            }, {
                "label": "Human Resource"
            }, {
                "label": "Sales & Distribution"
            }]
        }],
        "dataset": [{
            "seriesname": "Allocated Budget",
            "data": [{
                "value": "19000"
            }, {
                "value": "16500"
            }, {
                "value": "14300"
            }, {
                "value": "10000"
            }, {
                "value": "9800"
            }]
        }, {
            "seriesname": "Actual Cost",
            "data": [{
                "value": "6000"
            }, {
                "value": "9500"
            }, {
                "value": "11900"
            }, {
                "value": "8000"
            }, {
                "value": "9700"
            }]
        }]
    }
}
,{
    type: 'angulargauge',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Speedometer",
            "origw": "320",
            "origh": "320",
            "tickvaluedistance": "-10",
            "upperlimit": "240",
            "lowerlimit": "0",
            "basefontcolor": "#FFFFFF",
            "majortmnumber": "9",
            "majortmcolor": "#FFFFFF",
            "majortmheight": "8",
            "majortmthickness": "5",
            "minortmnumber": "5",
            "minortmcolor": "#FFFFFF",
            "minortmheight": "3",
            "minortmthickness": "2",
            "pivotradius": "10",
            "pivotbgcolor": "#000000",
            "pivotbordercolor": "#FFFFFF",
            "pivotborderthickness": "2",
            "tooltipbordercolor": "#FFFFFF",
            "tooltipbgcolor": "#333333",
            "gaugeouterradius": "115",
            "gaugestartangle": "240",
            "gaugeendangle": "-60",
            "decimals": "0",
            "placevaluesinside": "1",
            "pivotfillmix": "",
            "showpivotborder": "1",
            "annrenderdelay": "0",
            "gaugeoriginx": "160",
            "gaugeoriginy": "160",
            "theme": "fusion"
        },
        "dials": {
            "dial": [{
                "value": "65",
                "bgcolor": "000000",
                "bordercolor": "#FFFFFF",
                "borderalpha": "100",
                "basewidth": "4",
                "topwidth": "4",
                "borderthickness": "2",
                "valuey": "260"
            }]
        },
        "annotations": {
            "groups": [{
                "x": "160",
                "y": "160",
                "items": [{
                    "type": "circle",
                    "radius": "130",
                    "fillasgradient": "1",
                    "fillcolor": "#4B4B4B,#AAAAAA",
                    "fillalpha": "100,100",
                    "fillratio": "95,5"
                }, {
                    "type": "circle",
                    "x": "0",
                    "y": "0",
                    "radius": "120",
                    "showborder": "1",
                    "bordercolor": "cccccc",
                    "fillasgradient": "1",
                    "fillcolor": "#ffffff,#000000",
                    "fillalpha": "50,100",
                    "fillratio": "1,99"
                }]
            }, {
                "x": "160",
                "y": "160",
                "showbelow": "0",
                "scaletext": "1",
                "items": [{
                    "type": "text",
                    "y": "100",
                    "label": "KPH",
                    "fontcolor": "#FFFFFF",
                    "fontsize": "14",
                    "bold": "1"
                }]
            }]
        }
    },
    events: {
        "initialized": function(evtObj, argObj) {
            var scoreArray = [],
                score,
                speedScore,
                flag,
                diff;
            evtObj.sender.resetInterval = setInterval(function() {
                var i,
                    percent,
                    num = 30;
                score = 40 +
                    parseInt(Math.floor(Math.random() * 170));
                if (!speedScore) {
                    speedScore = score;
                }
                diff = (score - speedScore);

                for (var i = 0; i < 5; i++) {
                    percent = num - (i * 5);
                    scoreArray[i] = diff * (percent / 100);
                }
                flag = 0;

            }, 1000);
            evtObj.sender.changeInterval = setInterval(function() {
                if (speedScore && diff) {
                    speedScore += scoreArray[flag];
                    flag += 1;
					evtObj.sender.feedData && evtObj.sender.feedData("value=" + speedScore);

                }
            }, 2000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.resetInterval);
            clearInterval(evtObj.sender.changeInterval);
        }
    }
}
,{
    id: "stockRealTimeChart",
    type: 'realtimearea',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Real-time stock price monitor",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Time",
            "yAxisName": "Stock Price",
            "numberPrefix": "$",
            "refreshinterval": "5",
            "yaxisminvalue": "35",
            "yaxismaxvalue": "36",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "showRealTimeValue": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Day Start"
            }]
        }],
        "dataset": [{
            "data": [{
                "value": "35.27"
            }]
        }]
    },
    "events": {
        "initialized": function(e) {
            function addLeadingZero(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                // Get reference to the chart using its ID
                var chartRef = FusionCharts("stockRealTimeChart"),
                    // We need to create a querystring format incremental update, containing
                    // label in hh:mm:ss format
                    // and a value (random).
                    currDate = new Date(),
                    label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                    // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
                    randomValue = Math.floor(Math.random() * 50) / 100 + 35.25,
                    // Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + randomValue;
                // Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }

            e.sender.interval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'bulb',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Temperature status of deep freezers",
            "upperlimit": "-5",
            "lowerlimit": "-60",
            "captionPadding": "30",
            "showshadow": "0",
            "showvalue": "1",
            "useColorNameAsValue": "1",
            "placeValuesInside": "1",
            "theme": "fusion"
        },
        "colorrange": {
            "color": [{
                "minvalue": "-60",
                "maxvalue": "-35",
                "label": "Problem detected!",
                "code": "#ff0000"
            }, {
                "minvalue": "-35",
                "maxvalue": "-25",
                "label": "Alert!",
                "code": "#ff9900"
            }, {
                "minvalue": "-25",
                "maxvalue": "-5",
                "label": "All well!",
                "code": "#00ff00"
            }]
        },
        "value": "-5"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.interval = setInterval(function() {
                var num = (Math.floor(Math.random() * 55) * -1) - 5;
                evtObj.sender.feedData && evtObj.sender.feedData("&value=" + num);
            }, 10000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'realtimecolumn',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Online Transactions per 10 seconds",
            "subCaption": "HarrysSupermart.com",
            "showrealtimevalue": "1",
            "yaxismaxvalue": "10",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "numbersuffix": " Transactions",
            "showRealTimeValue": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Start"
            }]
        }],
        "dataset": [{
            "seriesname": "",
            "alpha": "100",
            "data": [{
                "value": "3"
            }]
        }]
    },
    "events": {
        "initialized": function(evt, arg) {
            //Format minutes, seconds by adding 0 prefix accordingly
            function formatTime(time) {
                (time < 10) ? (time = "0" + time) : (time = time);
                return time;
            }
            //Update Data method

            function updateData() {

                //Get reference to the chart using its ID
                var chartRef = evt.sender,
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 1 & 5 - rounded
                    transactions = Math.round(Math.random() * 4) + 1,
                    strData = "&label=" + label + "&value=" + transactions;
                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }
            //Interval
            evt.sender.interval = setInterval(function() {
                updateData();

            }, 10000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'cylinder',
    dataFormat: 'json',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Fuel Meter",
            "subcaption": "Diesel level in generator Bakersfield Central",
            "subcaptionFontBold": "0",
            "lowerLimit": "0",
            "upperLimit": "120",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showhovereffect": "1",
            "theme": "fusion"
        },
        "value": "110"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var fuelVolume = 110;
            evtObj.sender.interval = setInterval(function() {
                (fuelVolume < 10) ? (fuelVolume = 110) : "";
                var consVolume = fuelVolume - (Math.floor(Math.random() * 3));
                evtObj.sender.feedData && evtObj.sender.feedData("&value=" + consVolume);
                fuelVolume = consVolume;
            }, 1000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'hlineargauge',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server CPU Utilization",
            "subcaption": "food.hsm.com",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "valueAbovePointer": "0",
            "showShadow": "0",
            "gaugeFillMix": "{light}",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#1aaf5d"
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f2c500"
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#c02d00"
            }]
        },
        "pointers": {
            "pointer": [{
                "value": "72.5"
            }]
        }
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.interval = setInterval(function() {
                var prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);
                evtObj.sender.feedData && evtObj.sender.feedData("value=" + prcnt);
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'realtimeline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Real-time stock price monitor",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Time",
            "yAxisName": "Stock Price",
            "numberPrefix": "$",
            "refreshinterval": "5",
            "yaxisminvalue": "35",
            "yaxismaxvalue": "36",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "showRealTimeValue": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Day Start"
            }]
        }],
        "dataset": [{
            "data": [{
                "value": "35.27"
            }]
        }]
    },
    "events": {
        "initialized": function(e) {
            function addLeadingZero(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                // Get reference to the chart using its ID
                var chartRef = e.sender,
                    // We need to create a querystring format incremental update, containing
                    // label in hh:mm:ss format
                    // and a value (random).
                    currDate = new Date(),
                    label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                    // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
                    randomValue = Math.floor(Math.random() * 50) / 100 + 35.25,
                    // Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + randomValue;
                // Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }

            e.sender.interval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'realtimelinedy',
    dataFormat: 'json',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Stock Price Monitor",
            "subCaption": "Harry's Supermart",
            "showRealTimeValue": "0",
            "numberprefix": "$",
            "setadaptiveymin": "1",
            "setadaptivesymin": "1",
            "xaxisname": "Time",
            "labeldisplay": "Rotate",
            "slantlabels": "1",
            "pyaxisminvalue": "35",
            "pyaxismaxvalue": "36",
            "syaxisminvalue": "10000",
            "syaxismaxvalue": "12000",
            "numDisplaySets": "10",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Day Start"
            }]
        }],
        "dataset": [{
            "seriesname": "HRYS Price",
            "showvalues": "0",
            "data": [{
                "value": "35.1"
            }]
        }, {
            "seriesname": "NYSE Index",
            "showvalues": "0",
            "parentyaxis": "S",
            "data": [{
                "value": "10962.87"
            }]
        }],
        "trendlines": [{
            "line": [{
                "parentyaxis": "P",
                "startvalue": "35.1",
                "displayvalue": "Open",
                "thickness": "1",
                "color": "#0075c2",
                "dashed": "1"
            }, {
                "parentyaxis": "S",
                "startvalue": "10962.87",
                "displayvalue": "Open",
                "thickness": "1",
                "color": "#1aaf5d",
                "dashed": "1"
            }]
        }]
    },
    "events": {
        "initialized": function(e) {
            function formatTime(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                // Get reference to the chart using its ID
                var chartRef = e.sender,
                    //We need to create a querystring format incremental update, containing
                    //label in hh:mm:ss format
                    //and a value (random).
                    currDate = new Date(),
                    label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                    //Get random number between 35.25 & 30.75 - rounded to 2 decimal places
                    hrys = Math.floor(Math.random() * 50) / 100 + 35.25,
                    //Get random number between 10962.87 & 11052.87
                    nyse = Math.floor(Math.random() * 9000) / 100 + 10962.87,
                    //Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + hrys + "|" + nyse;
                //Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }
            e.sender.interval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    id: "stackRealTimeChart",
    type: 'realtimestackedarea',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Live Visitors on Site",
            "subCaption": "Updated every 5 seconds",
            "xAxisName": "Time",
            "yAxisName": "No. of visitors",
            "numberSuffix": "s",
            "refreshinterval": "5",
            "yaxisminvalue": "0",
            "yaxismaxvalue": "60",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "showRealTimeValue": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Day Start"
            }]
        }],
        "dataset": [{
            "seriesName": "clothing.hsm.com",
            "data": [{
                "value": "12"
            }]
        }, {
            "seriesName": "food.hsm.com",
            "data": [{
                "value": "20"
            }]
        }]
    },
    "events": {
        "initialized": function(e) {
            function addLeadingZero(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                // Get reference to the chart using its ID
                var chartRef = FusionCharts("stackRealTimeChart"),
                    // We need to create a querystring format incremental update, containing
                    // label in hh:mm:ss format
                    // and a value (random).
                    currDate = new Date(),
                    label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                    // Get random number between 20 & 38 - rounded to 2 decimal places
                    randomValue = parseInt(Math.random() * 15) + 10,
                    randomValue2 = parseInt(Math.random() * 20) + 15,
                    // Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + randomValue + "|" + randomValue2;
                // Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }

            e.sender.interval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'realtimestackedcolumn',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Live Visitors on Site",
            "subCaption": "Every 5 seconds",
            "xAxisName": "Time",
            "yAxisName": "No. of visitors",
            "refreshinterval": "5",
            "numberSuffix": "s",
            "yaxisminvalue": "0",
            "yaxismaxvalue": "60",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "showValues": "1",
            "showRealTimeValue": "0",
            "placeValuesInside": "1",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Day Start"
            }]
        }],
        "dataset": [{
            "seriesName": "clothing.hsm.com",
            "data": [{
                "value": "12"
            }]
        }, {
            "seriesName": "food.hsm.com",
            "data": [{
                "value": "20"
            }]
        }]
    },
    "events": {
        "initialized": function(e) {
            function addLeadingZero(num) {
                return (num <= 9) ? ("0" + num) : num;
            }

            function updateData() {
                // Get reference to the chart using its ID
                var chartRef = e.sender,
                    // We need to create a querystring format incremental update, containing
                    // label in hh:mm:ss format
                    // and a value (random).
                    currDate = new Date(),
                    label = addLeadingZero(currDate.getHours()) + ":" +
                    addLeadingZero(currDate.getMinutes()) + ":" +
                    addLeadingZero(currDate.getSeconds()),
                    // Get random number between 20 & 38 - rounded to 2 decimal places
                    randomValue = parseInt(Math.random() * 15) + 10,
                    randomValue2 = parseInt(Math.random() * 20) + 15,
                    // Build Data String in format &label=...&value=...
                    strData = "&label=" + label + "&value=" + randomValue + "|" + randomValue2;
                // Feed it to chart.
                chartRef.feedData && chartRef.feedData(strData);
            }

            e.sender.interval = setInterval(function() {
                updateData();
            }, 5000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'thermometer',
    id: 'temp-monitor',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Central cold storage",
            "subcaption": "Bakersfield Central",
            "lowerLimit": "-20",
            "upperLimit": "20",
            "numberSuffix": "°C",
            "theme": "fusion"
        },
        "value": "-10"
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            evtObj.sender.interval = setInterval(function() {
                var temp = -10 + parseInt(Math.floor(Math.random() * 6), 10);
                FusionCharts.items["temp-monitor"].feedData("value=" + temp);
            }, 3000);
        },
        "disposed": function(evtObj, argObj) {
            clearInterval(evtObj.sender.interval);
        }
    }
}
,{
    type: 'scatter',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales of Beer & Ice-cream vs Temperature",
            "subCaption": "Los Angeles Topanga",
            "baseFont": "Helvetica Neue,Arial",
            "xAxisName": "Average Day Temperature",
            "yAxisName": "Sales (In USD)",
            "xAxisMinValue": "23",
            "xAxisMaxValue": "95",
            "yNumberPrefix": "$",
            "xNumberSuffix": "&deg; F",
            "theme": "fusion"
        },
        "categories": [{
            "verticalLineDashed": "1",
            "verticalLineDashLen": "1",
            "verticalLineDashGap": "1",
            "verticalLineThickness": "1",
            "verticalLineColor": "#000000",
            "category": [{
                "x": "23",
                "label": "23\xB0 F",
                "showverticalline": "0"
            }, {
                "x": "32",
                "label": "32\xB0 F",
                "showverticalline": "1"
            }, {
                "x": "50",
                "label": "50\xB0 F",
                "showverticalline": "1"
            }, {
                "x": "68",
                "label": "68\xB0 F",
                "showverticalline": "1"
            }, {
                "x": "80",
                "label": "80\xB0 F",
                "showverticalline": "1"
            }, {
                "x": "95",
                "label": "95\xB0 F",
                "showverticalline": "1"
            }]
        }],
        "dataset": [{
            "seriesname": "Ice Cream",
            "showregressionline": "1",
            "data": [{
                "x": "23",
                "y": "1560"
            }, {
                "x": "24",
                "y": "1500"
            }, {
                "x": "24",
                "y": "1680"
            }, {
                "x": "25",
                "y": "1780"
            }, {
                "x": "25",
                "y": "1620"
            }, {
                "x": "26",
                "y": "1810"
            }, {
                "x": "27",
                "y": "2310"
            }, {
                "x": "29",
                "y": "2620"
            }, {
                "x": "31",
                "y": "2500"
            }, {
                "x": "32",
                "y": "2410"
            }, {
                "x": "35",
                "y": "2880"
            }, {
                "x": "36",
                "y": "3910"
            }, {
                "x": "34",
                "y": "3960"
            }, {
                "x": "38",
                "y": "4080"
            }, {
                "x": "40",
                "y": "4190"
            }, {
                "x": "41",
                "y": "4170"
            }, {
                "x": "42",
                "y": "4280"
            }, {
                "x": "54",
                "y": "5180"
            }, {
                "x": "53",
                "y": "5770"
            }, {
                "x": "55",
                "y": "5900"
            }, {
                "x": "56",
                "y": "5940"
            }, {
                "x": "58",
                "y": "6090"
            }, {
                "x": "61",
                "y": "6086"
            }, {
                "x": "67",
                "y": "6100"
            }, {
                "x": "68",
                "y": "6200"
            }, {
                "x": "70",
                "y": "6360"
            }, {
                "x": "75",
                "y": "6450"
            }, {
                "x": "79",
                "y": "6650"
            }, {
                "x": "80",
                "y": "6710"
            }, {
                "x": "79",
                "y": "6975"
            }, {
                "x": "82",
                "y": "7000"
            }, {
                "x": "85",
                "y": "7150"
            }, {
                "x": "86",
                "y": "7160"
            }, {
                "x": "86",
                "y": "7200"
            }, {
                "x": "88",
                "y": "7230"
            }, {
                "x": "87",
                "y": "7210"
            }, {
                "x": "86",
                "y": "7480"
            }, {
                "x": "89",
                "y": "7540"
            }, {
                "x": "89",
                "y": "7400"
            }, {
                "x": "90",
                "y": "7500"
            }, {
                "x": "92",
                "y": "7640"
            }]
        }, {
            "seriesname": "Beer",
            "showregressionline": "1",
            "data": [{
                "x": "23",
                "y": "3160"
            }, {
                "x": "24",
                "y": "3000"
            }, {
                "x": "24",
                "y": "3080"
            }, {
                "x": "25",
                "y": "3680"
            }, {
                "x": "25",
                "y": "3320"
            }, {
                "x": "26",
                "y": "3810"
            }, {
                "x": "27",
                "y": "5310"
            }, {
                "x": "29",
                "y": "3620"
            }, {
                "x": "31",
                "y": "4100"
            }, {
                "x": "32",
                "y": "3910"
            }, {
                "x": "35",
                "y": "4280"
            }, {
                "x": "36",
                "y": "4210"
            }, {
                "x": "34",
                "y": "4160"
            }, {
                "x": "38",
                "y": "4480"
            }, {
                "x": "40",
                "y": "4890"
            }, {
                "x": "41",
                "y": "4770"
            }, {
                "x": "42",
                "y": "4880"
            }, {
                "x": "54",
                "y": "4980"
            }, {
                "x": "53",
                "y": "4770"
            }, {
                "x": "55",
                "y": "4900"
            }, {
                "x": "56",
                "y": "4940"
            }, {
                "x": "58",
                "y": "4990"
            }, {
                "x": "61",
                "y": "5086"
            }, {
                "x": "67",
                "y": "5100"
            }, {
                "x": "68",
                "y": "4700"
            }, {
                "x": "70",
                "y": "5360"
            }, {
                "x": "75",
                "y": "5150"
            }, {
                "x": "79",
                "y": "5450"
            }, {
                "x": "80",
                "y": "5010"
            }, {
                "x": "79",
                "y": "4975"
            }, {
                "x": "82",
                "y": "5400"
            }, {
                "x": "85",
                "y": "5150"
            }, {
                "x": "86",
                "y": "5460"
            }, {
                "x": "86",
                "y": "5000"
            }, {
                "x": "88",
                "y": "5200"
            }, {
                "x": "87",
                "y": "5410"
            }, {
                "x": "86",
                "y": "5480"
            }, {
                "x": "89",
                "y": "5440"
            }, {
                "x": "89",
                "y": "5300"
            }, {
                "x": "90",
                "y": "5500"
            }, {
                "x": "92",
                "y": "5240"
            }]
        }],
        "vtrendlines": [{
            "line": [{
                "startvalue": "23",
                "endvalue": "32",
                "istrendzone": "1",
                "displayvalue": " ",
                "color": "#adebff",
                "alpha": "25"
            }, {
                "startvalue": "23",
                "endvalue": "32",
                "istrendzone": "1",
                "alpha": "0",
                "displayvalue": "Very cold"
            }, {
                "startvalue": "32",
                "endvalue": "50",
                "istrendzone": "1",
                "displayvalue": " ",
                "color": "#adebff",
                "alpha": "15"
            }, {
                "startvalue": "32",
                "endvalue": "50",
                "istrendzone": "1",
                "alpha": "0",
                "displayvalue": "Cold"
            }, {
                "startvalue": "50",
                "endvalue": "68",
                "istrendzone": "1",
                "alpha": "0",
                "displayvalue": "Moderate"
            }, {
                "startvalue": "68",
                "endvalue": "80",
                "istrendzone": "1",
                "alpha": "0",
                "displayvalue": "Hot"
            }, {
                "startvalue": "68",
                "endvalue": "80",
                "istrendzone": "1",
                "displayvalue": " ",
                "color": "#f2a485",
                "alpha": "15"
            }, {
                "startvalue": "80",
                "endvalue": "95",
                "istrendzone": "1",
                "alpha": "0",
                "displayvalue": "Very hot"
            }, {
                "startvalue": "80",
                "endvalue": "95",
                "istrendzone": "1",
                "displayvalue": " ",
                "color": "#f2a485",
                "alpha": "25"
            }]
        }]
    }
}
,{
    type: 'scrollarea2d',
    dataFormat: 'json',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Sales Trends",
            "subCaption": "(FY 2012 to FY 2013)",
            "xAxisname": "Month",
            "pYAxisName": "Amount",
            "labelDisplay": "AUTO",
            "sYAxisName": "Employees",
            "numberPrefix": "$",
            "numVisiblePlot": "8",
            "flatScrollBars": "1",
            "scrollheight": "10",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan 2012"
            }, {
                "label": "Feb 2012"
            }, {
                "label": "Mar 2012"
            }, {
                "label": "Apr 2012"
            }, {
                "label": "May 2012"
            }, {
                "label": "Jun 2012"
            }, {
                "label": "Jul 2012"
            }, {
                "label": "Aug 2012"
            }, {
                "label": "Sep 2012"
            }, {
                "label": "Oct 2012"
            }, {
                "label": "Nov 2012"
            }, {
                "label": "Dec 2012"
            }, {
                "label": "Jan 2013"
            }, {
                "label": "Feb 2013"
            }, {
                "label": "Mar 2013"
            }, {
                "label": "Apr 2013"
            }, {
                "label": "May 2013"
            }, {
                "label": "Jun 2013"
            }, {
                "label": "Jul 2013"
            }, {
                "label": "Aug 2013"
            }, {
                "label": "Sep 2013"
            }, {
                "label": "Oct 2013"
            }, {
                "label": "Nov 2013"
            }, {
                "label": "Dec 2013"
            }]
        }],
        "dataset": [{
            "data": [{
                "value": "27400"
            }, {
                "value": "29800"
            }, {
                "value": "25800"
            }, {
                "value": "26800"
            }, {
                "value": "29600"
            }, {
                "value": "32600"
            }, {
                "value": "31800"
            }, {
                "value": "36700"
            }, {
                "value": "29700"
            }, {
                "value": "31900"
            }, {
                "value": "34800"
            }, {
                "value": "24800"
            }, {
                "value": "26300"
            }, {
                "value": "31800"
            }, {
                "value": "30900"
            }, {
                "value": "33000"
            }, {
                "value": "36200"
            }, {
                "value": "32100"
            }, {
                "value": "37500"
            }, {
                "value": "38500"
            }, {
                "value": "35400"
            }, {
                "value": "38200"
            }, {
                "value": "33300"
            }, {
                "value": "38300"
            }]
        }]
    }
}
,{
    type: 'scrollbar2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Top 25 NPM Packages for Node.js Developers",
            "subCaption": "March 2019",
            "plottooltext": "$datavalue Downloads",
            "YAxisname": "Number of Downloads",
            "XAxisname": "Packages",
        },
        "categories": [{
            "category": [{
                    "label": "Commander.js"
                },
                {
                    "label": "Async.js"
                },
                {
                    "label": "Request – Simplified HTTP Client"
                },
                {
                    "label": "Express"
                },
                {
                    "label": "WebPack"
                },
                {
                    "label": "Underscore"
                },
                {
                    "label": "React"
                },
                {
                    "label": "JSDom"
                },
                {
                    "label": "Cheerio"
                },
                {
                    "label": "Mocha"
                },
                {
                    "label": "Marked"
                },
                {
                    "label": "LESS"
                },
                {
                    "label": "Morgan"
                },
                {
                    "label": "Karma"
                },
                {
                    "label": "MongoDB Node.JS Driver"
                },
                {
                    "label": "Nodemailer"
                },
                {
                    "label": "Passport"
                },
                {
                    "label": "Browserify"
                },
                {
                    "label": "Grunt"
                },
                {
                    "label": "JSHint"
                },
                {
                    "label": "Angular"
                },
                {
                    "label": "Bower"
                },
                {
                    "label": "Pug"
                },
                {
                    "label": "PM2"
                },
                {
                    "label": "Hapi"
                }

            ]
        }],
        "dataset": [{
            "data": [{
                    "value": "97294205"
                },
                {
                    "value": "95482197"
                },
                {
                    "value": "60224172"
                },
                {
                    "value": "33018247"
                },
                {
                    "value": "31615028"
                },
                {
                    "value": "28984878"
                },
                {
                    "value": "25391784"
                },
                {
                    "value": "23581733"
                },
                {
                    "value": "12321215"
                },
                {
                    "value": "10838161"
                },
                {
                    "value": "7808888"
                },
                {
                    "value": "7127519"
                },
                {
                    "value": "6659395"
                },
                {
                    "value": "5731933"
                },
                {
                    "value": "4843888"
                },
                {
                    "value": "3264090"
                },
                {
                    "value": "2755188"
                },
                {
                    "value": "2661761"
                },
                {
                    "value": "2371272"
                },
                {
                    "value": "2201511"
                },
                {
                    "value": "1821149"
                },
                {
                    "value": "1683996"
                },
                {
                    "value": "1602832"
                },
                {
                    "value": "1267422"
                },
                {
                    "value": "1042206"
                },

            ]
        }]
    }
}
,{
    type: 'scrollColumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales Trends",
            "subcaption": "FY 2018 - FY 2019",
            "xaxisname": "Month",
            "yaxisname": "Revenue",
            "showvalues": "1",
            "numberprefix": "$",
            "labeldisplay": "WRAP",
            "linethickness": "3",
            "numVisiblePlot": "12",
            "scrollheight": "10",
            "flatScrollBars": "1",
            "scrollShowButtons": "0",
            "scrollColor": "#cccccc",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan 2012"
            }, {
                "label": "Feb 2012"
            }, {
                "label": "Mar 2012"
            }, {
                "label": "Apr 2012"
            }, {
                "label": "May 2012"
            }, {
                "label": "Jun 2012"
            }, {
                "label": "Jul 2012"
            }, {
                "label": "Aug 2012"
            }, {
                "label": "Sep 2012"
            }, {
                "label": "Oct 2012"
            }, {
                "label": "Nov 2012"
            }, {
                "label": "Dec 2012"
            }, {
                "label": "Jan 2013"
            }, {
                "label": "Feb 2013"
            }, {
                "label": "Mar 2013"
            }, {
                "label": "Apr 2013"
            }, {
                "label": "May 2013"
            }, {
                "label": "Jun 2013"
            }, {
                "label": "Jul 2013"
            }, {
                "label": "Aug 2013"
            }, {
                "label": "Sep 2013"
            }, {
                "label": "Oct 2013"
            }, {
                "label": "Nov 2013"
            }, {
                "label": "Dec 2013"
            }]
        }],
        "dataset": [{
            "data": [{
                "value": "27400"
            }, {
                "value": "29800"
            }, {
                "value": "25800"
            }, {
                "value": "26800"
            }, {
                "value": "29600"
            }, {
                "value": "32600"
            }, {
                "value": "31800"
            }, {
                "value": "36700"
            }, {
                "value": "29700"
            }, {
                "value": "31900"
            }, {
                "value": "34800"
            }, {
                "value": "24800"
            }, {
                "value": "26300"
            }, {
                "value": "31800"
            }, {
                "value": "30900"
            }, {
                "value": "33000"
            }, {
                "value": "36200"
            }, {
                "value": "32100"
            }, {
                "value": "37500"
            }, {
                "value": "38500"
            }, {
                "value": "35400"
            }, {
                "value": "38200"
            }, {
                "value": "33300"
            }, {
                "value": "38300"
            }]
        }]
    }
}
,{
    type: 'scrollcombidy2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "(FY 2012 to FY 2013)",
            "xAxisname": "Month",
            "pYAxisName": "Amount (In USD)",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "50",
            "showValues": "1",
            "numVisiblePlot": "12",
            "flatScrollBars": "1",
            "scrollheight": "10",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan 2012"
            }, {
                "label": "Feb 2012"
            }, {
                "label": "Mar 2012"
            }, {
                "label": "Apr 2012"
            }, {
                "label": "May 2012"
            }, {
                "label": "Jun 2012"
            }, {
                "label": "Jul 2012"
            }, {
                "label": "Aug 2012"
            }, {
                "label": "Sep 2012"
            }, {
                "label": "Oct 2012"
            }, {
                "label": "Nov 2012"
            }, {
                "label": "Dec 2012"
            }, {
                "label": "Jan 2013"
            }, {
                "label": "Feb 2013"
            }, {
                "label": "Mar 2013"
            }, {
                "label": "Apr 2013"
            }, {
                "label": "May 2013"
            }, {
                "label": "Jun 2013"
            }, {
                "label": "Jul 2013"
            }, {
                "label": "Aug 2013"
            }, {
                "label": "Sep 2013"
            }, {
                "label": "Oct 2013"
            }, {
                "label": "Nov 2013"
            }, {
                "label": "Dec 2013"
            }]
        }],
        "dataset": [{
            "seriesName": "Revenues",
            "data": [{
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "15000"
            }, {
                "value": "21000"
            }, {
                "value": "16000"
            }, {
                "value": "20000"
            }, {
                "value": "17000"
            }, {
                "value": "22000"
            }, {
                "value": "19000"
            }, {
                "value": "23000"
            }, {
                "value": "24000"
            }, {
                "value": "25000"
            }, {
                "value": "26000"
            }, {
                "value": "24000"
            }, {
                "value": "19000"
            }, {
                "value": "22000"
            }, {
                "value": "18000"
            }, {
                "value": "19000"
            }, {
                "value": "22000"
            }, {
                "value": "21000"
            }, {
                "value": "23000"
            }, {
                "value": "24000"
            }]
        }, {
            "seriesName": "Profits",
            "renderAs": "area",
            "showValues": "0",
            "data": [{
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "7000"
            }, {
                "value": "1000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "8000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }, {
                "value": "6000"
            }, {
                "value": "7000"
            }, {
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "9000"
            }, {
                "value": "2000"
            }, {
                "value": "6000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }, {
                "value": "4000"
            }, {
                "value": "6000"
            }]
        }, {
            "seriesName": "Profit %",
            "parentYAxis": "S",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                "value": "25"
            }, {
                "value": "25"
            }, {
                "value": "16.66"
            }, {
                "value": "21.05"
            }, {
                "value": "6.66"
            }, {
                "value": "33.33"
            }, {
                "value": "6.25"
            }, {
                "value": "25"
            }, {
                "value": "5.88"
            }, {
                "value": "36.36"
            }, {
                "value": "10.52"
            }, {
                "value": "30.43"
            }, {
                "value": "25"
            }, {
                "value": "28"
            }, {
                "value": "15.38"
            }, {
                "value": "20.83"
            }, {
                "value": "15.79"
            }, {
                "value": "40.91"
            }, {
                "value": "11.11"
            }, {
                "value": "31.58"
            }, {
                "value": "9.09"
            }, {
                "value": "33.33"
            }, {
                "value": "17.39"
            }, {
                "value": "25"
            }]
        }]
    }
}
,{
    type: 'scrollcombi2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Actual Revenue, Targeted Revenues & Profits",
            "subCaption": "FY 2012 - FY 2013",
            "xAxisname": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "numVisiblePlot": "12",
            "scrollheight": "10",
            "flatScrollBars": "1",
            "scrollShowButtons": "0",
            "scrollColor": "#cccccc",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan 2012"
            }, {
                "label": "Feb 2012"
            }, {
                "label": "Mar 2012"
            }, {
                "label": "Apr 2012"
            }, {
                "label": "May 2012"
            }, {
                "label": "Jun 2012"
            }, {
                "label": "Jul 2012"
            }, {
                "label": "Aug 2012"
            }, {
                "label": "Sep 2012"
            }, {
                "label": "Oct 2012"
            }, {
                "label": "Nov 2012"
            }, {
                "label": "Dec 2012"
            }, {
                "label": "Jan 2013"
            }, {
                "label": "Feb 2013"
            }, {
                "label": "Mar 2013"
            }, {
                "label": "Apr 2013"
            }, {
                "label": "May 2013"
            }, {
                "label": "Jun 2013"
            }, {
                "label": "Jul 2013"
            }, {
                "label": "Aug 2013"
            }, {
                "label": "Sep 2013"
            }, {
                "label": "Oct 2013"
            }, {
                "label": "Nov 2013"
            }, {
                "label": "Dec 2013"
            }]
        }],
        "dataset": [{
            "seriesName": "Actual Revenue",
            "data": [{
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "18000"
                }, {
                    "value": "19000"
                }, {
                    "value": "15000"
                }, {
                    "value": "21000"
                }, {
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "17000"
                }, {
                    "value": "25000"
                }, {
                    "value": "19000"
                }, {
                    "value": "23000"
                }, {
                    "value": "22000"
                }, {
                    "value": "25000"
                }, {
                    "value": "21000"
                }, {
                    "value": "23000"
                }, {
                    "value": "27000"
                }, {
                    "value": "26000"
                }, {
                    "value": "24000"
                }, {
                    "value": "28000"
                }, {
                    "value": "26000"
                }, {
                    "value": "27000"
                }, {
                    "value": "29000"
                }, {
                    "value": "26000"
                }

            ]
        }, {
            "seriesName": "Projected Revenue",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                    "value": "15000"
                }, {
                    "value": "16000"
                }, {
                    "value": "17000"
                }, {
                    "value": "18000"
                }, {
                    "value": "19000"
                }, {
                    "value": "19000"
                }, {
                    "value": "19000"
                }, {
                    "value": "19000"
                }, {
                    "value": "20000"
                }, {
                    "value": "21000"
                }, {
                    "value": "22000"
                }, {
                    "value": "23000"
                }, {
                    "value": "24000"
                }, {
                    "value": "22000"
                }, {
                    "value": "23000"
                }, {
                    "value": "25000"
                }, {
                    "value": "22000"
                }, {
                    "value": "20000"
                }, {
                    "value": "24000"
                }, {
                    "value": "25000"
                }, {
                    "value": "27000"
                }, {
                    "value": "24000"
                }, {
                    "value": "23000"
                }, {
                    "value": "25000"
                }

            ]
        }, {
            "seriesName": "Profit",
            "renderAs": "area",
            "showValues": "0",
            "data": [{
                "value": "4000"
            }, {
                "value": "5000"
            }, {
                "value": "3000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "7000"
            }, {
                "value": "1000"
            }, {
                "value": "4000"
            }, {
                "value": "1000"
            }, {
                "value": "8000"
            }, {
                "value": "2000"
            }, {
                "value": "7000"
            }, {
                "value": "6000"
            }, {
                "value": "5000"
            }, {
                "value": "7000"
            }, {
                "value": "8000"
            }, {
                "value": "8000"
            }, {
                "value": "9000"
            }, {
                "value": "7000"
            }, {
                "value": "10000"
            }, {
                "value": "9000"
            }, {
                "value": "7000"
            }, {
                "value": "8000"
            }, {
                "value": "11000"
            }]
        }]
    }
}
,{
    type: 'scrollline2d',
    dataFormat: 'json',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Sales Trends",
            "subCaption": "(FY 2012 to FY 2013)",
            "xAxisName": "Month",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "lineThickness": "3",
            "flatScrollBars": "1",
            "scrollheight": "10",
            "numVisiblePlot": "12",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan 2012"
            }, {
                "label": "Feb 2012"
            }, {
                "label": "Mar 2012"
            }, {
                "label": "Apr 2012"
            }, {
                "label": "May 2012"
            }, {
                "label": "Jun 2012"
            }, {
                "label": "Jul 2012"
            }, {
                "label": "Aug 2012"
            }, {
                "label": "Sep 2012"
            }, {
                "label": "Oct 2012"
            }, {
                "label": "Nov 2012"
            }, {
                "label": "Dec 2012"
            }, {
                "label": "Jan 2013"
            }, {
                "label": "Feb 2013"
            }, {
                "label": "Mar 2013"
            }, {
                "label": "Apr 2013"
            }, {
                "label": "May 2013"
            }, {
                "label": "Jun 2013"
            }, {
                "label": "Jul 2013"
            }, {
                "label": "Aug 2013"
            }, {
                "label": "Sep 2013"
            }, {
                "label": "Oct 2013"
            }, {
                "label": "Nov 2013"
            }, {
                "label": "Dec 2013"
            }]
        }],
        "dataset": [{
            "data": [{
                "value": "27400"
            }, {
                "value": "29800"
            }, {
                "value": "25800"
            }, {
                "value": "26800"
            }, {
                "value": "29600"
            }, {
                "value": "32600"
            }, {
                "value": "31800"
            }, {
                "value": "36700"
            }, {
                "value": "29700"
            }, {
                "value": "31900"
            }, {
                "value": "34800"
            }, {
                "value": "24800"
            }, {
                "value": "26300"
            }, {
                "value": "31800"
            }, {
                "value": "30900"
            }, {
                "value": "33000"
            }, {
                "value": "36200"
            }, {
                "value": "32100"
            }, {
                "value": "37500"
            }, {
                "value": "38500"
            }, {
                "value": "35400"
            }, {
                "value": "38200"
            }, {
                "value": "33300"
            }, {
                "value": "38300"
            }]
        }]
    }
}
,{
    type: 'scrollmsstackedcolumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "numVisiblePlot": "5",
            "caption": "Avocado sales among different states",
            "subcaption": "2015-2017",
            "plottooltext": "<b>$seriesName</b><hr>$label: <b>$dataValue</b>",
            "xaxisname": "Quarter",
            "yaxisname": "Sales (In USD)",
        },
        "categories": [{
            "category": [{
                    "label": "2015-Q1"
                },
                {
                    "label": "2015-Q2"
                },
                {
                    "label": "2015-Q3"
                },
                {
                    "label": "2015-Q4"
                },
                {
                    "label": "2016-Q1"
                },
                {
                    "label": "2016-Q2"
                },
                {
                    "label": "2016-Q3"
                },
                {
                    "label": "2016-Q4"
                },
                {
                    "label": "2017-Q1"
                },
                {
                    "label": "2017-Q2"
                },
                {
                    "label": "2017-Q3"
                },
                {
                    "label": "2017-Q4"
                }
            ]
        }],
        "dataset": [{
                "dataset": [{
                        "seriesname": "New York",
                        "data": [{
                                "value": "510344.4"
                            },
                            {
                                "value": "825541.86"
                            },
                            {
                                "value": "1078603.31"
                            },
                            {
                                "value": "895751.26"
                            },
                            {
                                "value": "1213115.71"
                            },
                            {
                                "value": "1207901.26"
                            },
                            {
                                "value": "1163397.45"
                            },
                            {
                                "value": "841621.26"
                            },
                            {
                                "value": "1245085.8"
                            },
                            {
                                "value": "1103347.9"
                            },
                            {
                                "value": "1022076.68"
                            },
                            {
                                "value": "1025565.8"
                            }
                        ]
                    },
                    {
                        "seriesname": "Georgia",
                        "data": [{
                                "value": "5318642.2"
                            },
                            {
                                "value": "5701956"
                            },
                            {
                                "value": "5095298.61"
                            },
                            {
                                "value": "4118810.44"
                            },
                            {
                                "value": "5240363.94"
                            },
                            {
                                "value": "5212220.71"
                            },
                            {
                                "value": "4522632.08"
                            },
                            {
                                "value": "3374924.99"
                            },
                            {
                                "value": "4764169.41"
                            },
                            {
                                "value": "4424022.98"
                            },
                            {
                                "value": "3989718.21"
                            },
                            {
                                "value": "3970043.21"
                            }
                        ]
                    }
                ]
            },
            {
                "dataset": [{
                        "seriesname": "Maryland",
                        "data": [{
                                "value": "7524659.79"
                            },
                            {
                                "value": "8196424.21"
                            },
                            {
                                "value": "8325170.33"
                            },
                            {
                                "value": "7111010.55"
                            },
                            {
                                "value": "8694218.26"
                            },
                            {
                                "value": "8895865.95"
                            },
                            {
                                "value": "7244663.98"
                            },
                            {
                                "value": "5703274.8"
                            },
                            {
                                "value": "8419998.48"
                            },
                            {
                                "value": "7388812.3"
                            },
                            {
                                "value": "6517872.07"
                            },
                            {
                                "value": "7064818.95"
                            },

                        ]
                    },
                    {
                        "seriesname": "Idaho",
                        "data": [{
                                "value": "887124.05"
                            },
                            {
                                "value": "993801.32"
                            },
                            {
                                "value": "803841.86"
                            },
                            {
                                "value": "581555.6"
                            },
                            {
                                "value": "696292.47"
                            },
                            {
                                "value": "577209.67"
                            },
                            {
                                "value": "563216.54"
                            },
                            {
                                "value": "520417.15"
                            },
                            {
                                "value": "688505.86"
                            },
                            {
                                "value": "718619.31"
                            },
                            {
                                "value": "630249.87"
                            },
                            {
                                "value": "628688"
                            },

                        ]
                    },
                    {
                        "seriesname": "Massachusetts",
                        "data": [{
                                "value": "4441861.75"
                            },
                            {
                                "value": "5404269.51"
                            },
                            {
                                "value": "6223966.11"
                            },
                            {
                                "value": "5626179.46"
                            },
                            {
                                "value": "6722592.97"
                            },
                            {
                                "value": "6931022.03"
                            },
                            {
                                "value": "5220110.38"
                            },
                            {
                                "value": "4765293.29"
                            },
                            {
                                "value": "6584454.42"
                            },
                            {
                                "value": "5961664.26"
                            },
                            {
                                "value": "5567418.89"
                            },
                            {
                                "value": "5466678.99"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
,{
    type: 'scrollmsstackedcolumn2dlinedy',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Market Share of Korean Automobile Manufacturers in US",
            subcaption: "2005 - 2019",
            pyaxisname: "Units Sold",
            syaxisname: "% of total market share",
            snumbersuffix: "%",
            syaxismaxvalue: "25",
            theme: "fusion",
            showvalues: "0",
            drawcrossline: "1",
            divlinealpha: "20"
        },
        categories: [{
            category: [{
                    label: "2005"
                },
                {
                    label: "2006"
                },
                {
                    label: "2007"
                },
                {
                    label: "2008"
                },
                {
                    label: "2009"
                },
                {
                    label: "2010"
                },
                {
                    label: "2011"
                },
                {
                    label: "2012"
                },
                {
                    label: "2013"
                },
                {
                    label: "2014"
                },
                {
                    label: "2015"
                },
                {
                    label: "2016"
                },
                {
                    label: "2017"
                },
                {
                    label: "2018"
                },
                {
                    label: "2019"
                },

            ]
        }],
        dataset: [{
                dataset: [{
                        seriesname: "Honda City",
                        data: [{
                                value: "997281"
                            },
                            {
                                value: "1063599"
                            },
                            {
                                value: "1063964"
                            },
                            {
                                value: "1152123"
                            },
                            {
                                value: "1289128"
                            },
                            {
                                value: "1394972"
                            },
                            {
                                value: "1331194"
                            },
                            {
                                value: "1047958"
                            },
                            {
                                value: "974751"
                            },
                            {
                                value: "983243"
                            },
                            {
                                value: "1294208"
                            },
                            {
                                value: "1435345"
                            },
                            {
                                value: "1217785"
                            },
                            {
                                value: "1163621"
                            },
                            {
                                value: "1161561"
                            },
                        ]
                    },
                    {
                        seriesname: "Honda Civic",
                        data: [{
                                value: "196354"
                            },
                            {
                                value: "259493"
                            },
                            {
                                value: "234755"
                            },
                            {
                                value: "205717"
                            },
                            {
                                value: "205081"
                            },
                            {
                                value: "224978"
                            },
                            {
                                value: "1277225"
                            },
                            {
                                value: "1132872"
                            },
                            {
                                value: "852656"
                            },
                            {
                                value: "1234768"
                            },
                            {
                                value: "205081"
                            },
                            {
                                value: "1027759"
                            },
                            {
                                value: "1141363"
                            },
                            {
                                value: "1277225"
                            },
                            {
                                value: "1285716"
                            }
                        ]
                    }
                ]
            },
            {
                dataset: [{
                        seriesname: "Hyundai Verna",
                        data: [{
                                value: "373709"
                            },
                            {
                                value: "391276"
                            },
                            {
                                value: "380002"
                            },
                            {
                                value: "411456"
                            },
                            {
                                value: "476001"
                            },
                            {
                                value: "500537"
                            },
                            {
                                value: "413815"
                            },
                            {
                                value: "496356"
                            },
                            {
                                value: "514865"
                            },
                            {
                                value: "697118"
                            },
                            {
                                value: "567824"
                            },
                            {
                                value: "525457"
                            },
                            {
                                value: "576222"
                            },
                            {
                                value: "484427"
                            },
                            {
                                value: "491488"
                            }
                        ]
                    },
                    {
                        seriesname: "Hyundai Sonata",
                        data: [{
                                value: "47548"
                            },
                            {
                                value: "73130"
                            },
                            {
                                value: "107659"
                            },
                            {
                                value: "179783"
                            },
                            {
                                value: "202390"
                            },
                            {
                                value: "156107"
                            },
                            {
                                value: "88315"
                            },
                            {
                                value: "103964"
                            },
                            {
                                value: "191982"
                            },
                            {
                                value: "120271"
                            },
                            {
                                value: "125909"
                            },
                            {
                                value: "138739"
                            },
                            {
                                value: "179152"
                            },
                            {
                                value: "131125"
                            },
                            {
                                value: "181549"
                            }
                        ]
                    }
                ]
            }
        ],
        lineset: [{
            seriesname: "Market Share %",
            plottooltext: "Total market share of Korean cars in $label is <b>$dataValue</b> in US",
            showvalues: "0",
            data: [{
                    value: "17.74"
                },
                {
                    value: "19.23"
                },
                {
                    value: "15.43"
                },
                {
                    value: "12.34"
                },
                {
                    value: "15.34"
                },
                {
                    value: "21.17"
                },
                {
                    value: "13.14"
                },
                {
                    value: "18.13"
                },
                {
                    value: "13.13"
                },
                {
                    value: "15.34"
                },
                {
                    value: "14.74"
                },
                {
                    value: "18.17"
                },
                {
                    value: "19.22"
                },
                {
                    value: "17.74"
                },
                {
                    value: "20.17"
                }
            ]
        }]
    }
}
,{
    type: 'scrollstackedbar2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        chart: {
            "theme": "fusion",
            "numVisiblePlot": "5",
            "caption": "Video games sales breakup",
            "subcaption": "Across different markets (In Million USD)",
            "numbersuffix": "M",
            "plottooltext": "<b>$seriesName</b><hr>$label: <b>$dataValue</b>"

        },
        categories: [{
            category: [{
                    "label": "Wii Sports"
                },
                {
                    "label": "Super Mario Bros"
                },
                {
                    "label": "Mario Kart Wii"
                },
                {
                    "label": "Wii Sports Resort"
                },
                {
                    "label": "Pokemon Red/Pokemon Blue"
                },
                {
                    "label": "Tetris"
                },
                {
                    "label": "New Super Mario Bros"
                },
                {
                    "label": "Wii Play"
                },
                {
                    "label": "New Super Mario Bros. Wii"
                },
                {
                    "label": "Duck Hunt"
                },
                {
                    "label": "Nintendogs"
                },
                {
                    "label": "Mario Kart DS"
                },
                {
                    "label": "Pokemon Gold/Pokemon Silver"
                },
                {
                    "label": "Wii Fit"
                },
                {
                    "label": "Wii Fit Plus"
                },
                {
                    "label": "Kinect Adventures"
                },
                {
                    "label": "Grand Theft Auto V"
                },
                {
                    "label": "Grand Theft Auto: San Andreas"
                },
                {
                    "label": "Super Mario World"
                },
                {
                    "label": "Brain Age"
                },
                {
                    "label": "Pokemon Diamond/Pokemon Pearl"
                },
                {
                    "label": "Super Mario Land"
                },
                {
                    "label": "Super Mario Bros. 3"
                },
                {
                    "label": "Grand Theft Auto V"
                },
                {
                    "label": "Grand Theft Auto: Vice City"
                }
            ]
        }],
        dataSet: [

            {
                "seriesName": "North America",
                "data": [{
                        "value": "41.49"
                    },
                    {
                        "value": "29.08"
                    },
                    {
                        "value": "15.85"
                    },
                    {
                        "value": "15.75"
                    },
                    {
                        "value": "11.27"
                    },
                    {
                        "value": "23.2"
                    },
                    {
                        "value": "11.38"
                    },
                    {
                        "value": "14.03"
                    },
                    {
                        "value": "14.59"
                    },
                    {
                        "value": "26.93"
                    },
                    {
                        "value": "9.07"
                    },
                    {
                        "value": "9.81"
                    },
                    {
                        "value": "9"
                    },
                    {
                        "value": "8.94"
                    },
                    {
                        "value": "9.09"
                    },
                    {
                        "value": "14.97"
                    },
                    {
                        "value": "7.01"
                    },
                    {
                        "value": "9.43"
                    },
                    {
                        "value": "12.78"
                    },
                    {
                        "value": "4.75"
                    },
                    {
                        "value": "6.42"
                    },
                    {
                        "value": "10.83"
                    },
                    {
                        "value": "9.54"
                    },
                    {
                        "value": "9.63"
                    },
                    {
                        "value": "8.41"
                    }

                ]
            },
            {
                "seriesName": "Europe ",
                "data": [{
                        "value": "29.02"
                    },
                    {
                        "value": "3.58"
                    },
                    {
                        "value": "12.88"
                    },
                    {
                        "value": "11.01"
                    },
                    {
                        "value": "8.89"
                    },
                    {
                        "value": "2.26"
                    },
                    {
                        "value": "9.23"
                    },
                    {
                        "value": "9.2"
                    },
                    {
                        "value": "7.06"
                    },
                    {
                        "value": "0.63"
                    },
                    {
                        "value": "11"
                    },
                    {
                        "value": "7.57"
                    },
                    {
                        "value": "6.18"
                    },
                    {
                        "value": "8.03"
                    },
                    {
                        "value": "8.59"
                    },
                    {
                        "value": "4.94"
                    },
                    {
                        "value": "9.27"
                    },
                    {
                        "value": "0.4"
                    },
                    {
                        "value": "3.75"
                    },
                    {
                        "value": "9.26"
                    },
                    {
                        "value": "4.52"
                    },
                    {
                        "value": "2.71"
                    },
                    {
                        "value": "3.44"
                    },
                    {
                        "value": "5.31"
                    },
                    {
                        "value": "5.49"
                    }
                ]
            },
            {
                "seriesName": "Japan",
                "data": [{
                        "value": "3.77"
                    },
                    {
                        "value": "6.81"
                    },
                    {
                        "value": "3.79"
                    },
                    {
                        "value": "3.28"
                    },
                    {
                        "value": "10.22"
                    },
                    {
                        "value": "4.22"
                    },
                    {
                        "value": "6.5"
                    },
                    {
                        "value": "2.93"
                    },
                    {
                        "value": "4.7"
                    },
                    {
                        "value": "0.28"
                    },
                    {
                        "value": "1.93"
                    },
                    {
                        "value": "4.13"
                    },
                    {
                        "value": "7.2"
                    },
                    {
                        "value": "3.6"
                    },
                    {
                        "value": "2.53"
                    },
                    {
                        "value": "0.24"
                    },
                    {
                        "value": "0.97"
                    },
                    {
                        "value": "0.41"
                    },
                    {
                        "value": "3.54"
                    },
                    {
                        "value": "4.16"
                    },
                    {
                        "value": "6.04"
                    },
                    {
                        "value": "4.18"
                    },
                    {
                        "value": "3.84"
                    },
                    {
                        "value": "0.06"
                    },
                    {
                        "value": "0.47"
                    }
                ]
            },
            {
                "seriesName": " Rest of the world",
                "data": [{
                        "value": "8.46"
                    },
                    {
                        "value": "0.77"
                    },
                    {
                        "value": "3.31"
                    },
                    {
                        "value": "2.96"
                    },
                    {
                        "value": "1"
                    },
                    {
                        "value": "0.58"
                    },
                    {
                        "value": "2.9"
                    },
                    {
                        "value": "2.85"
                    },
                    {
                        "value": "2.26"
                    },
                    {
                        "value": "0.47"
                    },
                    {
                        "value": "2.75"
                    },
                    {
                        "value": "1.92"
                    },
                    {
                        "value": "0.71"
                    },
                    {
                        "value": "2.15"
                    },
                    {
                        "value": "1.79"
                    },
                    {
                        "value": "1.67"
                    },
                    {
                        "value": "4.14"
                    },
                    {
                        "value": "10.57"
                    },
                    {
                        "value": "0.55"
                    },
                    {
                        "value": "2.05"
                    },
                    {
                        "value": "1.37"
                    },
                    {
                        "value": "0.42"
                    },
                    {
                        "value": "0.46"
                    },
                    {
                        "value": "1.38"
                    },
                    {
                        "value": "1.78"
                    }
                ]
            },

        ]
    }
},{
    type: 'scrollstackedcolumn2d',
    dataFormat: 'json',
    width: '100%',
    height: '100%',
    dataSource: {
        "chart": {
            "caption": "Sales Comparison",
            "subCaption": "(2018 to 2019)",
            "xaxisname": "Month",
            "yaxisname": "Revenue",
            "numberprefix": "$",
            "lineThickness": "3",
            "flatScrollBars": "1",
            "scrollheight": "10",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan 2018"
            }, {
                "label": "Feb 2018"
            }, {
                "label": "Mar 2018"
            }, {
                "label": "Apr 2018"
            }, {
                "label": "May 2018"
            }, {
                "label": "Jun 2018"
            }, {
                "label": "Jul 2018"
            }, {
                "label": "Aug 2018"
            }, {
                "label": "Sep 2018"
            }, {
                "label": "Oct 2018"
            }, {
                "label": "Nov 2018"
            }, {
                "label": "Dec 2018"
            }, {
                "label": "Jan 2019"
            }, {
                "label": "Feb 2019"
            }, {
                "label": "Mar 2019"
            }, {
                "label": "Apr 2019"
            }, {
                "label": "May 2019"
            }, {
                "label": "Jun 2019"
            }, {
                "label": "Jul 2019"
            }, {
                "label": "Aug 2019"
            }, {
                "label": "Sep 2019"
            }, {
                "label": "Oct 2019"
            }, {
                "label": "Nov 2019"
            }, {
                "label": "Dec 2019"
            }]
        }],
        "dataset": [{
            "seriesname": "Products",
            "color": "008ee4",
            "data": [{
                "value": "27400"
            }, {
                "value": "29800"
            }, {
                "value": "25800"
            }, {
                "value": "26800"
            }, {
                "value": "29600"
            }, {
                "value": "32600"
            }, {
                "value": "31800"
            }, {
                "value": "36700"
            }, {
                "value": "29700"
            }, {
                "value": "31900"
            }, {
                "value": "34800"
            }, {
                "value": "24800"
            }, {
                "value": "25400"
            }, {
                "value": "27800"
            }, {
                "value": "23800"
            }, {
                "value": "23800"
            }, {
                "value": "21600"
            }, {
                "value": "30600"
            }, {
                "value": "24800"
            }, {
                "value": "30700"
            }, {
                "value": "27400"
            }, {
                "value": "28200"
            }, {
                "value": "31500"
            }, {
                "value": "24300"
            }]
        }, {
            "seriesname": "Services",
            "color": "f8bd19",
            "data": [{
                "value": "10000"
            }, {
                "value": "11500"
            }, {
                "value": "12500"
            }, {
                "value": "15000"
            }, {
                "value": "11000"
            }, {
                "value": "9800"
            }, {
                "value": "11800"
            }, {
                "value": "19700"
            }, {
                "value": "21700"
            }, {
                "value": "21900"
            }, {
                "value": "22900"
            }, {
                "value": "20800"
            }, {
                "value": "12000"
            }, {
                "value": "10300"
            }, {
                "value": "11200"
            }, {
                "value": "13000"
            }, {
                "value": "15000"
            }, {
                "value": "11800"
            }, {
                "value": "9800"
            }, {
                "value": "14600"
            }, {
                "value": "19200"
            }, {
                "value": "20100"
            }, {
                "value": "21200"
            }, {
                "value": "19500"
            }]
        }]
    }
}
,{
   type: "selectscatter",
   width: "100%",
   height: "100%",
   dataFormat: "json",
   dataSource: {
      chart: {
         caption: "Products Sold vs Price points",
            subcaption: "This Week at Harry's SuperMart",
            yaxisname: "Quantity Sold",
            xaxisname: "Price(In US $)",
            xaxismaxvalue: "1000",
            xaxisminvalue: "100",
            yaxismaxvalue: "200",
            xnumberprefix: "$",
            ynumbersuffix: " units",
            showcanvasborder: "1",
            canvasborderthickness: "0.5",
            canvasborderalpha: "50",
            theme: "fusion",
            showformbtn: 1,
            formaction: "#",
            formbtntitle: "Submit"
      },
      categories: [
         {
            verticallinecolor: "666666",
            verticallinethickness: "1",
            alpha: "40",
            category: [
               {
                  label: "$100",
                  x: "100",
                  showverticalline: "0"
               },
               {
                  label: "$200",
                  x: "200",
                  showverticalline: "1"
               },
               {
                  label: "$300",
                  x: "300",
                  showverticalline: "1"
               },
               {
                  label: "$400",
                  x: "400",
                  showverticalline: "1"
               },
               {
                  label: "$500",
                  x: "500",
                  showverticalline: "1"
               },
               {
                  label: "$600",
                  x: "600",
                  showverticalline: "1"
               },
               {
                  label: "$700",
                  x: "700",
                  showverticalline: "1"
               },
               {
                  label: "$800",
                  x: "800",
                  showverticalline: "1"
               },
               {
                  label: "$900",
                  x: "900",
                  showverticalline: "1"
               },
               {
                  label: "$1000",
                  x: "1000",
                  showverticalline: "0"
               }
            ]
         }
      ],
         dataset: [
            {
               drawline: "0",
               seriesname: "Televisions",
               color: "#6baa01",
               anchorsides: "3",
               anchorradius: "4",
               anchorbgcolor: "#6baa01",
               anchorbordercolor: "#6baa01",
               data: [
                  {
                     id: "TV_1",
                     y: "559",
                     x: "714"
                  },
                  {
                     id: "TV_2",
                     y: "293",
                     x: "988"
                  },
                  {
                     id: "TV_3",
                     y: "231",
                     x: "970"
                  },
                  {
                     id: "TV_4",
                     y: "528",
                     x: "142"
                  },
                  {
                     id: "TV_5",
                     y: "95",
                     x: "800"
                  },
                  {
                     id: "TV_6",
                     y: "515",
                     x: "813"
                  },
                  {
                     id: "TV_7",
                     y: "444",
                     x: "928"
                  },
                  {
                     id: "TV_8",
                     y: "592",
                     x: "238"
                  },
                  {
                     id: "TV_9",
                     y: "229",
                     x: "959"
                  },
                  {
                     id: "TV_10",
                     y: "238",
                     x: "521"
                  },
                  {
                     id: "TV_11",
                     y: "285",
                     x: "222"
                  },
                  {
                     id: "TV_12",
                     y: "524",
                     x: "863"
                  },
                  {
                     id: "TV_13",
                     y: "422",
                     x: "820"
                  },
                  {
                     id: "TV_14",
                     y: "344",
                     x: "894"
                  },
                  {
                     id: "TV_15",
                     y: "510",
                     x: "800"
                  },
                  {
                     id: "TV_16",
                     y: "132",
                     x: "785"
                  },
                  {
                     id: "TV_17",
                     y: "381",
                     x: "214"
                  },
                  {
                     id: "TV_18",
                     y: "210",
                     x: "961"
                  },
                  {
                     id: "TV_19",
                     y: "496",
                     x: "575"
                  },
                  {
                     id: "TV_20",
                     y: "330",
                     x: "847"
                  },
                  {
                     id: "TV_21",
                     y: "436",
                     x: "893"
                  },
                  {
                     id: "TV_22",
                     y: "406",
                     x: "157"
                  },
                  {
                     id: "TV_23",
                     y: "125",
                     x: "349"
                  },
                  {
                     id: "TV_24",
                     y: "450",
                     x: "818"
                  },
                  {
                     id: "TV_25",
                     y: "455",
                     x: "615"
                  },
                  {
                     id: "TV_26",
                     y: "328",
                     x: "256"
                  },
                  {
                     id: "TV_27",
                     y: "188",
                     x: "460"
                  },
                  {
                     id: "TV_28",
                     y: "565",
                     x: "350"
                  },
                  {
                     id: "TV_29",
                     y: "149",
                     x: "582"
                  },
                  {
                     id: "TV_30",
                     y: "425",
                     x: "970"
                  }
               ]
            },
            {
               seriesname: "Cell Phones",
               color: "#f8bd19",
               anchorsides: "4",
               anchorradius: "4",
               anchorbgcolor: "#f8bd19",
               anchorbordercolor: "#f8bd19",
               data: [
                  {
                     id: "Mob_1",
                     y: "335",
                     x: "156"
                  },
                  {
                     id: "Mob_2",
                     y: "339",
                     x: "927"
                  },
                  {
                     id: "Mob_3",
                     y: "328",
                     x: "847"
                  },
                  {
                     id: "Mob_4",
                     y: "1",
                     x: "177"
                  },
                  {
                     id: "Mob_5",
                     y: "246",
                     x: "175"
                  },
                  {
                     id: "Mob_6",
                     y: "368",
                     x: "441"
                  },
                  {
                     id: "Mob_7",
                     y: "146",
                     x: "200"
                  },
                  {
                     id: "Mob_8",
                     y: "347",
                     x: "482"
                  },
                  {
                     id: "Mob_9",
                     y: "1",
                     x: "463"
                  },
                  {
                     id: "Mob_10",
                     y: "63",
                     x: "440"
                  },
                  {
                     id: "Mob_11",
                     y: "77",
                     x: "211"
                  },
                  {
                     id: "Mob_12",
                     y: "108",
                     x: "824"
                  },
                  {
                     id: "Mob_13",
                     y: "44",
                     x: "850"
                  },
                  {
                     id: "Mob_14",
                     y: "77",
                     x: "712"
                  },
                  {
                     id: "Mob_15",
                     y: "15",
                     x: "199"
                  },
                  {
                     id: "Mob_16",
                     y: "333",
                     x: "836"
                  },
                  {
                     id: "Mob_17",
                     y: "31",
                     x: "482"
                  },
                  {
                     id: "Mob_18",
                     y: "90",
                     x: "604"
                  },
                  {
                     id: "Mob_19",
                     y: "294",
                     x: "716"
                  },
                  {
                     id: "Mob_20",
                     y: "241",
                     x: "870"
                  },
                  {
                     id: "Mob_21",
                     y: "258",
                     x: "421"
                  },
                  {
                     id: "Mob_22",
                     y: "186",
                     x: "456"
                  },
                  {
                     id: "Mob_23",
                     y: "255",
                     x: "327"
                  },
                  {
                     id: "Mob_24",
                     y: "203",
                     x: "995"
                  },
                  {
                     id: "Mob_25",
                     y: "35",
                     x: "792"
                  }
               ]
            }
         ]
   },
   events: {
      beforeInitialize: function (evtObj, argObj) {
         var chartRef = evtObj.sender;
         /*
          * getDataFromChart method prepares the
          * tabular string from selection and
          * write in a div and display it.
          */
         chartRef.getDataFromChart = function () {
            var i,
               j,
               str,
               ds = "",
               dataArr,
               flagData = false,
               objDataset =
                  chartRef.getJSONData && chartRef.getJSONData().dataset;
            //Form tabular string
            str =
               '<div style="margin: 3px"> Data is returned by the chart as Array. The data is converted into tabular format using JavaScript.</div>';
            str +=
               '<table width="100%">';
            for (i in objDataset) {
               dataArr = objDataset[i].data;
               if (dataArr.length > 0) {
                  flagData = true;
                  str += "    <tr>";
                  str +=
                     '        <td width="20%" class="fontBold valueFont" color="' +
                     objDataset[i].color +
                     '">' +
                     objDataset[i].seriesname +
                     "</td>";

                  ds =
                     '<table bordercolor="' +
                     objDataset[i].color +
                     '" width="100%">';
                  ds += "<tr>";
                  ds += '<td width="20%" class="fontBoldSmall"> Id</td>';
                  ds +=
                     '<td width="40%" class="fontBoldSmall"> Price (in USD)</td>';
                  ds +=
                     '<td width="40%" class="fontBoldSmall"> Quantity Sold</td>';
                  ds += "</tr>";
                  for (j = 0; j < dataArr.length; j++) {
                     ds += "<tr>";
                     ds +=
                        '<td width="20%" align="center">' +
                        dataArr[j].id +
                        "</td>";
                     ds +=
                        '<td width="40%" align="center"> ' +
                        dataArr[j].x +
                        "</td>";
                     ds +=
                        '<td width="40%" align="center">' +
                        dataArr[j].y +
                        " units</td>";
                     ds += "</tr>";
                  }
                  ds += "</table>";
                  str +=
                     '        <td width="80%" class="valueFont">' +
                     ds +
                     "</td>";
                  str += "    </tr>";
               }
            }
            str += "</table>";
            if (!flagData) {
               str = "No Data Selected";
            }


            //Display container div and write table
            document.getElementById("tableView").style.display = "block";
            document.getElementById("tableView").innerHTML = str;
         };
      },

      beforeRender: function (evtObj, argObj) {
         var chartRef = evtObj.sender,
            controls = document.createElement('div'),
            chartContainer = argObj.container;

         controls.setAttribute('id', 'tableView');
         controls.style.display = "block";
         controls.style.maxHeight = "300px";
         controls.style.overflow = "auto";
         controls.style.padding = "20px 25px";
         controls.style.marginBottom = "20px";
         chartContainer.parentNode.insertBefore(controls, chartContainer.nextSibling);
      },

      beforeDataSubmit: function (evtObj, argObj) {
         evtObj.preventDefault();
         var chartRef = evtObj.sender;
         chartRef.getDataFromChart();
      },

      datarestored: function (evtObj, argObj) {
         document.getElementById("tableView").style.display = "none";
         document.getElementById("tableView").innerHTML = "";
      }
   }
}
,{
    "type": "spline",
    "dataFormat": "json",
    "width": "100%",
    "height": "100%",
    "dataSource": {
        "chart": {
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Footfalls",
            "lineThickness": "2",
            "theme": "fusion"
        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "25507"
        }, {
            "vline": "true",
            "lineposition": "0",
            "color": "#6baa01",
            "labelHAlign": "left",
            "label": "National holiday"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }]
    }
}
,{
    type: 'splinearea',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total sales of iPhone",
            "subCaption": "Last month",
            "xAxisName": "Week",
            "yAxisName": "Units sold",
            "xAxisLineThickness": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Week 1",
            "value": "530"
        }, {
            "label": "Week 2",
            "value": "660"
        }, {
            "label": "Week 3",
            "value": "420"
        }, {
            "label": "Week 4",
            "value": "580"
        }, {
            "label": "Week 5",
            "value": "560"
        }]
    }
}
,{
    type: 'sparkcolumn',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue by Month",
            "subcaption": "Last year",
            "chartTopMargin": "10",
            "chartBottomMargin": "10",
            "chartRightMargin": "10",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "dataset": [{
            "data": [{
                "value": "783000"
            }, {
                "value": "601000"
            }, {
                "value": "515000"
            }, {
                "value": "315900"
            }, {
                "value": "388000"
            }, {
                "value": "433000"
            }, {
                "value": "910000"
            }, {
                "value": "798000"
            }, {
                "value": "483300"
            }, {
                "value": "562000"
            }, {
                "value": "359400"
            }, {
                "value": "485000"
            }]
        }]
    }
}
,{
    type: 'sparkline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Stock Price",
            "subcaption": "Last month",
            "numberPrefix": "$",
            "canvasleftmargin": "145",
            "chartTopMargin": "10",
            "chartRightMargin": "10",
            "theme": "fusion"
        },
        "dataset": [{
            "data": [{
                "value": "38.42"
            }, {
                "value": "41.43"
            }, {
                "value": "34.78"
            }, {
                "value": "40.67"
            }, {
                "value": "44.12"
            }, {
                "value": "38.45"
            }, {
                "value": "40.71"
            }, {
                "value": "49.90"
            }, {
                "value": "40.12"
            }, {
                "value": "34.91"
            }, {
                "value": "42.02"
            }, {
                "value": "35.21"
            }, {
                "value": "43.31"
            }, {
                "value": "40.21"
            }, {
                "value": "40.54"
            }, {
                "value": "40.90"
            }, {
                "value": "54.21"
            }, {
                "value": "41.90"
            }, {
                "value": "33.43"
            }, {
                "value": "46.73"
            }, {
                "value": "50.42"
            }, {
                "value": "40.74"
            }, {
                "value": "42.31"
            }, {
                "value": "50.39"
            }, {
                "value": "51.10"
            }, {
                "value": "44.84"
            }, {
                "value": "51.64"
            }, {
                "value": "47.62"
            }, {
                "value": "39.61"
            }, {
                "value": "35.13"
            }]
        }]
    }
}
,{
    type: 'sparkwinloss',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "On-target sales by month",
            "subcaption": "Last year",
            "numberPrefix": "$",
            "chartTopMargin": "10",
            "chartBottomMargin": "10",
            "chartRightMargin": "10",
            "theme": "fusion"
        },
        "dataset": [{
            "data": [{
                "value": "W"
            }, {
                "value": "W"
            }, {
                "value": "W"
            }, {
                "value": "L"
            }, {
                "value": "W"
            }, {
                "value": "W"
            }, {
                "value": "L"
            }, {
                "value": "L"
            }, {
                "value": "W"
            }, {
                "value": "L"
            }, {
                "value": "W"
            }, {
                "value": "W"
            }]
        }]
    }
}
,{
    type: 'stackedcolumn2dline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue Vs profit in last year",
            "subCaption": "Harry's SuperMart",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "110000"
            }, {
                "value": "150000"
            }, {
                "value": "135000"
            }, {
                "value": "150000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "114000"
            }, {
                "value": "148000"
            }, {
                "value": "83000"
            }, {
                "value": "118000"
            }]
        }, {
            "seriesname": "Profit",
            "renderAs": "line",
            "showValues": "0",
            "data": [{
                "value": "24000"
            }, {
                "value": "45000"
            }, {
                "value": "23000"
            }, {
                "value": "38000"
            }]
        }]
    }
}
,{
    type: 'stackedcolumn3dline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Cost Analysis",
            "subcaption": "Last Year",
            "numberprefix": "$",
            "xaxisname": "Quarter",
            "yaxisname": "Cost",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Quarter 1"
            }, {
                "label": "Quarter 2"
            }, {
                "label": "Quarter 3"
            }, {
                "label": "Quarter 4"
            }]
        }],
        "dataset": [{
            "seriesname": "Fixed Cost",
            "data": [{
                "value": "235000"
            }, {
                "value": "225100"
            }, {
                "value": "222000"
            }, {
                "value": "230500"
            }]
        }, {
            "seriesname": "Variable Cost",
            "data": [{
                "value": "230000"
            }, {
                "value": "143000"
            }, {
                "value": "198000"
            }, {
                "value": "327600"
            }]
        }, {
            "seriesname": "Budgeted cost",
            "renderAs": "Line",
            "showValues": "0",
            "data": [{
                "value": "455000"
            }, {
                "value": "334000"
            }, {
                "value": "426000"
            }, {
                "value": "403000"
            }]
        }]
    }
}
,{
    type: 'stackedarea2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Product-wise quarterly revenue in current year",
            "xAxisname": "Quarter",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "11000"
            }, {
                "value": "15000"
            }, {
                "value": "13500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "11400"
            }, {
                "value": "14800"
            }, {
                "value": "8300"
            }, {
                "value": "11800"
            }]
        }]
    }
}
,{
    type: 'stackedarea2dlinedy',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Energy Data for consumption vs. Price ",
            "subCaption": "2010-2014",
            "xAxisname": "Year",
            "pYAxisName": "Total consumption-in billion BTU",
            "sYAxisName": "Price-in USD per million BTU",
            "sNumberSuffix": "M",
            "theme": "fusion",
            "showanchors": "0",
        },
        "categories": [{
            "category": [{
                    "label": "2010"
                },
                {
                    "label": "2011"
                },
                {
                    "label": "2012"
                },
                {
                    "label": "2013"
                },
                {
                    "label": "2014"
                }
            ]
        }],
        "dataset": [{
                "seriesname": "Coal",
                "data": [{
                        "value": "41656762"
                    },
                    {
                        "value": "39327714"
                    },
                    {
                        "value": "34761848"
                    },
                    {
                        "value": "36077545"
                    },
                    {
                        "value": "35993151"
                    }
                ]
            },
            {
                "seriesname": "Electricity",
                "data": [{
                        "value": "25623035"
                    },
                    {
                        "value": "25588952"
                    },
                    {
                        "value": "25212289"
                    },
                    {
                        "value": "25418495"
                    },
                    {
                        "value": "25690310"
                    }
                ]
            },
            {
                "seriesname": "Natural Gas",
                "data": [{
                        "value": "49267013"
                    },
                    {
                        "value": "50029967"
                    },
                    {
                        "value": "52276699"
                    },
                    {
                        "value": "53716269"
                    },
                    {
                        "value": "55026395"
                    }
                ]
            },
            {
                "seriesname": "LPG",
                "data": [{
                        "value": "5641972"
                    },
                    {
                        "value": "5677909"
                    },
                    {
                        "value": "5823618"
                    },
                    {
                        "value": "6333475"
                    },
                    {
                        "value": "6180102"
                    }
                ]
            },
            {
                "seriesname": "Total Price",
                "renderAs": "line",
                "showanchors": "1",
                "parentYAxis": "S",
                "showValues": "0",
                "data": [{
                        "value": "3386.97"
                    },
                    {
                        "value": "3571.81‬"
                    },
                    {
                        "value": "5370.72‬"
                    },
                    {
                        "value": "5658.28‬"
                    },
                    {
                        "value": "5974.85‬‬"
                    }
                ]
            }
        ]
    }
},{
    type: 'stackedbar2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue in current year",
            "subCaption": "Harry's SuperMart",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "121000"
            }, {
                "value": "135000"
            }, {
                "value": "123500"
            }, {
                "value": "145000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "131400"
            }, {
                "value": "154800"
            }, {
                "value": "98300"
            }, {
                "value": "131800"
            }]
        }]
    }
}
,{
    type: 'stackedbar3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue in last year",
            "subCaption": "Harry's SuperMart",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "121000"
            }, {
                "value": "135000"
            }, {
                "value": "123500"
            }, {
                "value": "145000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "131400"
            }, {
                "value": "154800"
            }, {
                "value": "98300"
            }, {
                "value": "131800"
            }]
        }]
    }
}
,{
    type: 'stackedcolumn2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue in current year",
            "subCaption": "Harry's SuperMart",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "121000"
            }, {
                "value": "135000"
            }, {
                "value": "123500"
            }, {
                "value": "145000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "131400"
            }, {
                "value": "154800"
            }, {
                "value": "98300"
            }, {
                "value": "131800"
            }]
        }]
    }
}
,{
    type: 'stackedcolumn2dlinedy',
    width: '550',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Global Robotic Process Automation Market",
            subcaption: "2016 - 2021",
            yaxisname: "Market Size (in $ Millions)",
            syaxisname: "YoY growth in %",
            formatnumberscale: "0",
            numberprefix: "$",
            numbersuffix: "M",
            snumbersuffix: "%",
            showvalues: "0",
            plottooltext: "Market size for $seriesName in $label is <b>$dataValue</b>",
            theme: "fusion"
        },
        categories: [{
            category: [{
                    label: "2016"
                },
                {
                    label: "2017"
                },
                {
                    label: "2018"
                },
                {
                    label: "2019"
                },
                {
                    label: "2020"
                },
                {
                    label: "2021"
                }
            ]
        }],
        dataset: [{
                seriesname: "RPA Software",
                data: [{
                        value: "73"
                    },
                    {
                        value: "113"
                    },
                    {
                        value: "153"
                    },
                    {
                        value: "192"
                    },
                    {
                        value: "232"
                    },
                    {
                        value: "272"
                    }
                ]
            },
            {
                seriesname: "RPA Services",
                data: [{
                        value: "198"
                    },
                    {
                        value: "330"
                    },
                    {
                        value: "476"
                    },
                    {
                        value: "630"
                    },
                    {
                        value: "790"
                    },
                    {
                        value: "952"
                    }
                ]
            },
            {
                seriesname: "YoY Growth",
                parentyaxis: "S",
                plottooltext: "$dataValue growth expected in $label",
                renderas: "line",
                data: [{
                        value: "73"
                    },
                    {
                        value: "63"
                    },
                    {
                        value: "42"
                    },
                    {
                        value: "31"
                    },
                    {
                        value: "24"
                    },
                    {
                        value: "20"
                    }
                ]
            }
        ]
    }
}
,{
    type: 'stackedcolumn3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise quarterly revenue in current year",
            "subCaption": "Harry's SuperMart",
            "xAxisname": "Quarter",
            "yAxisName": "Revenue (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "121000"
            }, {
                "value": "135000"
            }, {
                "value": "123500"
            }, {
                "value": "145000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "131400"
            }, {
                "value": "154800"
            }, {
                "value": "98300"
            }, {
                "value": "131800"
            }]
        }]
    }
}
,{
    type: 'stackedcolumn3dlinedy',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Product-wise Quarterly Revenue vs. Profit %",
            "subCaption": "Harry's SuperMart - Last Year",
            "xAxisname": "Quarter",
            "pYAxisName": "Sales",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "25",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3"
            }, {
                "label": "Q4"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "11000"
            }, {
                "value": "15000"
            }, {
                "value": "13500"
            }, {
                "value": "15000"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "11400"
            }, {
                "value": "14800"
            }, {
                "value": "8300"
            }, {
                "value": "11800"
            }]
        }, {
            "seriesname": "Profit %",
            "renderAs": "line",
            "parentYAxis": "S",
            "showValues": "0",
            "data": [{
                "value": "14"
            }, {
                "value": "16"
            }, {
                "value": "15"
            }, {
                "value": "17"
            }]
        }]
    }
}
,{
    type: 'msstepline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Revenue Vs Expense",
            "subCaption": "Last year",
            "xaxisname": "Month",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            "useforwardsteps": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Jan"
            }, {
                "label": "Feb"
            }, {
                "label": "Mar"
            }, {
                "label": "Apr"
            }, {
                "label": "May"
            }, {
                "label": "Jun"
            }, {
                "label": "Jul"
            }, {
                "label": "Aug"
            }, {
                "label": "Sep"
            }, {
                "label": "Oct"
            }, {
                "label": "Nov"
            }, {
                "label": "Dec"
            }]
        }],
        "dataset": [{
            "seriesname": "Revenue",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [{
                "value": "374000"
            }, {
                "value": "350000"
            }, {
                "value": "380000"
            }, {
                "value": "340000"
            }, {
                "value": "398000"
            }, {
                "value": "326000"
            }, {
                "value": "448000"
            }, {
                "value": "379000"
            }, {
                "value": "355000"
            }, {
                "value": "374000"
            }, {
                "value": "348000"
            }, {
                "value": "402000"
            }]
        }, {
            "seriesname": "Expense",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [{
                "value": "100000"
            }, {
                "value": "115000"
            }, {
                "value": "135000"
            }, {
                "value": "150000"
            }, {
                "value": "110000"
            }, {
                "value": "98000"
            }, {
                "value": "118000"
            }, {
                "value": "197000"
            }, {
                "value": "228000"
            }, {
                "value": "249000"
            }, {
                "value": "229000"
            }, {
                "value": "208000"
            }]
        }]
    }

}
,{
    type: 'treemap',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
          "animation": "0",
          "hideTitle": "1",
          "plotToolText": "<div><b>$label</b><br/> <b>Sale: </b>$$value<br/><b>Growth: </b>$svalue%</div>",
          "horizontalPadding": "1",
          "verticalPadding": "1",
          "plotborderthickness": ".5",
          "plotbordercolor": "666666",
          "legendpadding": "0",
          "legendItemFontSize": "10",
          "legendItemFontBold": "1",
          "showLegend": "1",
          "legenditemfontcolor": "3d5c5c",
          "algorithm": "squarified",
          "caption": "Harry's SuperMart: Sales Team Performance Analysis",
          "legendScaleLineThickness": "0",
          "legendCaptionFontSize": "10",
          "subcaption": "Year Till Date",
          "legendCaption": "Growth in sales - Compared to previous year",
          "theme": "fusion"
        },
        "data": [{
        "label": "USA",
        "fillcolor": "8c8c8c",
        "value": "8635000",
        "data": [{
          "label": "Northern Region",
          "value": "4140000",
          "data": [{
            "label": "Carol Francis",
            "value": "84000",
            "sValue": "15"
          }, {
            "label": "Otis Newman",
            "value": "60000",
            "sValue": "10"
          }, {
            "label": "Darlene Alvarez",
            "value": "50000",
            "sValue": "11"
          }, {
            "label": "Lucas Cannon",
            "value": "58000",
            "sValue": "5"
          }, {
            "label": "Rosalie Huff",
            "value": "36000",
            "sValue": "-5"
          }, {
            "label": "Jerome Vargas",
            "value": "72000",
            "sValue": "14"
          }, {
            "label": "Becky Barton",
            "value": "18000",
            "sValue": "-10"
          }, {
            "label": "Ben Rios",
            "value": "14000",
            "sValue": "-5"
          }, {
            "label": "Donnie Patton",
            "value": "37000",
            "sValue": "2"
          }, {
            "label": "Dana Freeman",
            "value": "41000",
            "sValue": "5"
          }, {
            "label": "Darren Barrett",
            "value": "54000",
            "sValue": "7"
          }, {
            "label": "Steve Vaughn",
            "value": "35000",
            "sValue": "12"
          }, {
            "label": "Roosevelt Rhodes",
            "value": "48000",
            "sValue": "15"
          }, {
            "label": "Moses Sparks",
            "value": "38000",
            "sValue": "-4"
          }, {
            "label": "Hope Cox",
            "value": "32000",
            "sValue": "-10"
          }, {
            "label": "Hector Lowe",
            "value": "66000",
            "sValue": "15"
          }, {
            "label": "Lori Christensen",
            "value": "47000",
            "sValue": "10"
          }, {
            "label": "Roman Aguilar",
            "value": "14000",
            "sValue": "-15"
          }, {
            "label": "Brittany Chandler",
            "value": "21000",
            "sValue": "-12"
          }, {
            "label": "Tiffaney Battle",
            "value": "60000",
            "sValue": "10"
          }, {
            "label": "Elin Stamps",
            "value": "54000",
            "sValue": "5"
          }, {
            "label": "Donnetta Coley",
            "value": "59000",
            "sValue": "+14"
          }, {
            "label": "Emmaline Halcomb",
            "value": "34000",
            "sValue": "-5"
          }, {
            "label": "Natosha Hammett",
            "value": "39000",
            "sValue": "-7"
          }, {
            "label": "Kimi Stegall",
            "value": "15000",
            "sValue": "-19"
          }, {
            "label": "Norberto Kirk",
            "value": "46000",
            "sValue": "2"
          }, {
            "label": "Noma Martindale",
            "value": "52000",
            "sValue": "12"
          }, {
            "label": "Coreen Numbers",
            "value": "30000",
            "sValue": "-1"
          }, {
            "label": "Chas Irvin",
            "value": "26000",
            "sValue": "-17"
          }, {
            "label": "Carlo Tobin",
            "value": "31000",
            "sValue": "-14"
          }, {
            "label": "Ayanna Mclain",
            "value": "29000",
            "sValue": "-5"
          }, {
            "label": "Rolland Turney",
            "value": "42000",
            "sValue": "+5"
          }, {
            "label": "Ona Roden",
            "value": "64000",
            "sValue": "+20"
          }, {
            "label": "Drew Clarkson",
            "value": "24000",
            "sValue": "-20"
          }, {
            "label": "Samuel Adler",
            "value": "29000",
            "sValue": "-15"
          }, {
            "label": "Adrian Steen",
            "value": "51000",
            "sValue": "2"
          }, {
            "label": "Xiao Batson",
            "value": "35000",
            "sValue": "-2"
          }, {
            "label": "Britney Hammonds",
            "value": "45000",
            "sValue": "3"
          }, {
            "label": "Roslyn Wilhelm",
            "value": "28000",
            "sValue": "-5"
          }, {
            "label": "Alva Puente",
            "value": "26000",
            "sValue": "-8"
          }, {
            "label": "Daina Horvath",
            "value": "49000",
            "sValue": "9"
          }, {
            "label": "Louie Chaney",
            "value": "54000",
            "sValue": "15"
          }, {
            "label": "Olympia Mcmullen",
            "value": "71000",
            "sValue": "14"
          }, {
            "label": "Nichol Leclair",
            "value": "38000",
            "sValue": "-10"
          }, {
            "label": "Marylou Messenger",
            "value": "41000",
            "sValue": "5"
          }, {
            "label": "Christoper Crowley",
            "value": "34000",
            "sValue": "-4"
          }, {
            "label": "Neville Venable",
            "value": "37000",
            "sValue": "-10"
          }, {
            "label": "Brock Rowell",
            "value": "35000",
            "sValue": "-4"
          }, {
            "label": "Gisele Pelletier",
            "value": "32000",
            "sValue": "-5"
          }, {
            "label": "Thelma Caldwell",
            "value": "35000",
            "sValue": "5"
          }, {
            "label": "Shyla Plunkett",
            "value": "84000",
            "sValue": "15"
          }, {
            "label": "Joie Dickson",
            "value": "60000",
            "sValue": "10"
          }, {
            "label": "Shana Nabors",
            "value": "50000",
            "sValue": "11"
          }, {
            "label": "Catina Burris",
            "value": "58000",
            "sValue": "5"
          }, {
            "label": "Man Spearman",
            "value": "36000",
            "sValue": "-5"
          }, {
            "label": "Shaunna Hamby",
            "value": "72000",
            "sValue": "14"
          }, {
            "label": "Stormy Read",
            "value": "18000",
            "sValue": "-10"
          }, {
            "label": "Wen Coe",
            "value": "14000",
            "sValue": "-5"
          }, {
            "label": "Elizebeth Poston",
            "value": "37000",
            "sValue": "2"
          }, {
            "label": "Breanna Stringer",
            "value": "41000",
            "sValue": "5"
          }, {
            "label": "Allyn Holly",
            "value": "54000",
            "sValue": "7"
          }, {
            "label": "Lera Gaylord",
            "value": "35000",
            "sValue": "12"
          }, {
            "label": "Lashunda Dowd",
            "value": "48000",
            "sValue": "15"
          }, {
            "label": "Kiesha Tyner",
            "value": "38000",
            "sValue": "-4"
          }, {
            "label": "Lamont Allman",
            "value": "32000",
            "sValue": "-10"
          }, {
            "label": "Sun Switzer",
            "value": "66000",
            "sValue": "15"
          }, {
            "label": "Dorene Small",
            "value": "47000",
            "sValue": "10"
          }, {
            "label": "Cherlyn Bozeman",
            "value": "14000",
            "sValue": "-15"
          }, {
            "label": "Stephani Contreras",
            "value": "21000",
            "sValue": "-12"
          }, {
            "label": "Bebe Holcomb",
            "value": "60000",
            "sValue": "10"
          }, {
            "label": "Shenika Barham",
            "value": "54000",
            "sValue": "5"
          }, {
            "label": "Troy Hobbs",
            "value": "59000",
            "sValue": "+14"
          }, {
            "label": "Thomas Tom",
            "value": "34000",
            "sValue": "-5"
          }, {
            "label": "Sunshine Libby",
            "value": "39000",
            "sValue": "-7"
          }, {
            "label": "Tambra Patten",
            "value": "15000",
            "sValue": "-19"
          }, {
            "label": "Marlyn Cato",
            "value": "46000",
            "sValue": "2"
          }, {
            "label": "Jeanelle Ham",
            "value": "52000",
            "sValue": "12"
          }, {
            "label": "Armanda Kimble",
            "value": "30000",
            "sValue": "-1"
          }, {
            "label": "Danna Fitzpatrick",
            "value": "26000",
            "sValue": "-17"
          }, {
            "label": "Elmira Nagle",
            "value": "31000",
            "sValue": "-14"
          }, {
            "label": "Bella Marx",
            "value": "29000",
            "sValue": "-5"
          }, {
            "label": "Vania Meeks",
            "value": "42000",
            "sValue": "+5"
          }, {
            "label": "Florencio Heffner",
            "value": "64000",
            "sValue": "+20"
          }, {
            "label": "Amie Peoples",
            "value": "24000",
            "sValue": "-20"
          }, {
            "label": "Chrystal Downs",
            "value": "29000",
            "sValue": "-15"
          }, {
            "label": "Glennis Chisholm",
            "value": "51000",
            "sValue": "2"
          }, {
            "label": "Sydney Castaneda",
            "value": "35000",
            "sValue": "-2"
          }, {
            "label": "Gregory Drummond",
            "value": "45000",
            "sValue": "3"
          }, {
            "label": "Birdie Neely",
            "value": "28000",
            "sValue": "-5"
          }, {
            "label": "Ciera Mcafee",
            "value": "26000",
            "sValue": "-8"
          }, {
            "label": "Martin Larose",
            "value": "49000",
            "sValue": "9"
          }, {
            "label": "Bobette Dutton",
            "value": "54000",
            "sValue": "15"
          }, {
            "label": "Numbers Yarbrough",
            "value": "71000",
            "sValue": "14"
          }, {
            "label": "Sanjuanita Croteau",
            "value": "38000",
            "sValue": "-10"
          }, {
            "label": "Alysha Aguirre",
            "value": "41000",
            "sValue": "5"
          }, {
            "label": "Beau Welker",
            "value": "34000",
            "sValue": "-4"
          }, {
            "label": "Yuri Brannon",
            "value": "37000",
            "sValue": "-10"
          }, {
            "label": "Breana Marion",
            "value": "35000",
            "sValue": "-4"
          }, {
            "label": "Bernardina Fennell",
            "value": "32000",
            "sValue": "-5"
          }, {
            "label": "Bridgette Gould",
            "value": "35000",
            "sValue": "5"
          }]
        }, {
          "label": "Eastern Region",
          "value": "1110000",
          "data": [{
            "label": "Lee Miles",
            "value": "18000",
            "sValue": "-5"
          }, {
            "label": "Eduardo Day",
            "value": "21000",
            "sValue": "5"
          }, {
            "label": "Darrell Schultz",
            "value": "29500",
            "sValue": "10"
          }, {
            "label": "Troy Patrick",
            "value": "25500",
            "sValue": "12"
          }, {
            "label": "Kerry Smith",
            "value": "30000",
            "sValue": "15"
          }, {
            "label": "Franklin Walker",
            "value": "18500",
            "sValue": "-5"
          }, {
            "label": "Toby Brady",
            "value": "28500",
            "sValue": "-2"
          }, {
            "label": "Kenneth Wilkerson",
            "value": "25000",
            "sValue": "5"
          }, {
            "label": "Ralph Goodman",
            "value": "36000",
            "sValue": "10"
          }, {
            "label": "Lela Glover",
            "value": "15500",
            "sValue": "-14"
          }, {
            "label": "Warren Gordon",
            "value": "25500",
            "sValue": "-10"
          }, {
            "label": "Gladys Ruiz",
            "value": "33000",
            "sValue": "15"
          }, {
            "label": "Mabel Norris",
            "value": "14000",
            "sValue": "-5"
          }, {
            "label": "Darrel Rodgers",
            "value": "17500",
            "sValue": "-15"
          }, {
            "label": "Barry Larson",
            "value": "20000",
            "sValue": "2"
          }, {
            "label": "Alma Houston",
            "value": "31000",
            "sValue": "-3"
          }, {
            "label": "Rochelle Burke",
            "value": "12500",
            "sValue": "5"
          }, {
            "label": "Orville Garza",
            "value": "34500",
            "sValue": "-7"
          }, {
            "label": "Rex Nichols",
            "value": "14500",
            "sValue": "-10"
          }, {
            "label": "Jenna Burton",
            "value": "18500",
            "sValue": "8"
          }, {
            "label": "Jordan Little",
            "value": "21000",
            "sValue": "3"
          }, {
            "label": "Rodolfo Dawson",
            "value": "28500",
            "sValue": "10"
          }, {
            "label": "Darryl Bowen",
            "value": "15500",
            "sValue": "-10"
          }, {
            "label": "Marsha Foster",
            "value": "12500",
            "sValue": "-18"
          }, {
            "label": "Sandra Curtis",
            "value": "32000",
            "sValue": "19"
          }, {
            "label": "Alexis Robinson",
            "value": "19500",
            "sValue": "-4"
          }, {
            "label": "Courtney Stokes",
            "value": "27500",
            "sValue": "10"
          }, {
            "label": "Kelli Miller",
            "value": "34500",
            "sValue": "14"
          }, {
            "label": "Cathy Davis",
            "value": "14500",
            "sValue": "-16"
          }, {
            "label": "Gaynell Mcafee",
            "value": "14000",
            "sValue": "-5"
          }, {
            "label": "Trinidad Iverson",
            "value": "24500",
            "sValue": "5"
          }, {
            "label": "Anjelica Kilpatrick",
            "value": "27000",
            "sValue": "15"
          }, {
            "label": "Cheryle Hearn",
            "value": "17500",
            "sValue": "-10"
          }, {
            "label": "Rosamond Gass",
            "value": "21000",
            "sValue": "5"
          }, {
            "label": "Katharine Perrin",
            "value": "12500",
            "sValue": "-20"
          }, {
            "label": "Heide Matteson",
            "value": "32000",
            "sValue": "20"
          }, {
            "label": "Amparo Fortin",
            "value": "25500",
            "sValue": "10"
          }, {
            "label": "Charlena Bills",
            "value": "19500",
            "sValue": "-2"
          }, {
            "label": "Ronna Irizarry",
            "value": "30000",
            "sValue": "15"
          }, {
            "label": "Fidelia Hummel",
            "value": "28000",
            "sValue": "5"
          }, {
            "label": "Darlena Maher",
            "value": "14500",
            "sValue": "-7"
          }, {
            "label": "Isa Browning",
            "value": "17000",
            "sValue": "-10"
          }, {
            "label": "Dalene Baron",
            "value": "22500",
            "sValue": "10"
          }, {
            "label": "Ghislaine Loy",
            "value": "12000",
            "sValue": "-18"
          }, {
            "label": "Alexander Eldridge",
            "value": "18500",
            "sValue": "-2"
          }, {
            "label": "Brett Clemmons",
            "value": "13000",
            "sValue": "-15"
          }, {
            "label": "Mellie Hackney",
            "value": "13000",
            "sValue": "-18"
          }, {
            "label": "Gerry Felder",
            "value": "35500",
            "sValue": "15"
          }, {
            "label": "Librada Creighton",
            "value": "17500",
            "sValue": "-7"
          }, {
            "label": "Florence Pierce",
            "value": "21000",
            "sValue": "5"
          }]
        }, {
          "label": "Southern Region",
          "value": "1555000",
          "data": [{
            "label": "Derek Sandoval",
            "value": "12000",
            "sValue": "-15"
          }, {
            "label": "Bertha Bishop",
            "value": "55000",
            "sValue": "10"
          }, {
            "label": "Dominick Price",
            "value": "24500",
            "sValue": "10"
          }, {
            "label": "Sylvia Rodriquez",
            "value": "15000",
            "sValue": "-2"
          }, {
            "label": "Leland Jennings",
            "value": "63000",
            "sValue": "-5"
          }, {
            "label": "Dean Collins",
            "value": "56000",
            "sValue": "3"
          }, {
            "label": "Jamie Cohen",
            "value": "19500",
            "sValue": "4"
          }, {
            "label": "Elias Hammond",
            "value": "29500",
            "sValue": "12"
          }, {
            "label": "Kristy Stone",
            "value": "24500",
            "sValue": "5"
          }, {
            "label": "Jeanette Wood",
            "value": "17500",
            "sValue": "-10"
          }, {
            "label": "Salvador Colon",
            "value": "75000",
            "sValue": "18"
          }, {
            "label": "Victor Ferguson",
            "value": "60000",
            "sValue": "10"
          }, {
            "label": "Marion Hernandez",
            "value": "14500",
            "sValue": "-18"
          }, {
            "label": "Javier Erickson",
            "value": "18000",
            "sValue": "-19"
          }, {
            "label": "Stephanie Matthews",
            "value": "16500",
            "sValue": "5"
          }, {
            "label": "Deanna Russell",
            "value": "25500",
            "sValue": "1"
          }, {
            "label": "Nettie Holt",
            "value": "32500",
            "sValue": "-10"
          }, {
            "label": "Lynne Mack",
            "value": "50000",
            "sValue": "8"
          }, {
            "label": "Carrie Stevens",
            "value": "47000",
            "sValue": "14"
          }, {
            "label": "Janyce Hildebrand",
            "value": "29000",
            "sValue": "-5"
          }, {
            "label": "Emery Underhill",
            "value": "67000",
            "sValue": "20"
          }, {
            "label": "Priscila Coy",
            "value": "72000",
            "sValue": "15"
          }, {
            "label": "Dede Moffett",
            "value": "12500",
            "sValue": "-15"
          }, {
            "label": "Sydney Merchant",
            "value": "65500",
            "sValue": "10"
          }, {
            "label": "Daryl Farrar",
            "value": "65000",
            "sValue": "5"
          }, {
            "label": "Nella Nickerson",
            "value": "27000",
            "sValue": "14"
          }, {
            "label": "Octavia Mccorkle",
            "value": "17500",
            "sValue": "-2"
          }, {
            "label": "Lynsey Boren",
            "value": "22500",
            "sValue": "5"
          }, {
            "label": "Argentina Ireland",
            "value": "15500",
            "sValue": "-8"
          }, {
            "label": "Tonda Ricks",
            "value": "14500",
            "sValue": "-10"
          }, {
            "label": "Shira Laporte",
            "value": "25500",
            "sValue": "-5"
          }, {
            "label": "Reuben Upshaw",
            "value": "12000",
            "sValue": "-15"
          }, {
            "label": "Angelia Mcalister",
            "value": "23500",
            "sValue": "15"
          }, {
            "label": "Ludivina Teel",
            "value": "19000",
            "sValue": "-10"
          }, {
            "label": "Darcel Scarbrough",
            "value": "13000",
            "sValue": "-20"
          }, {
            "label": "Chantelle Carl",
            "value": "14000",
            "sValue": "2"
          }, {
            "label": "Young Chestnut",
            "value": "14500",
            "sValue": "-7"
          }, {
            "label": "Janetta Gilman",
            "value": "17000",
            "sValue": "-8"
          }, {
            "label": "Otto Pfeifer",
            "value": "29500",
            "sValue": "10"
          }, {
            "label": "Queen Trudeau",
            "value": "70000",
            "sValue": "15"
          }, {
            "label": "Candie Vang",
            "value": "17000",
            "sValue": "-12"
          }, {
            "label": "Tia Burgos",
            "value": "21000",
            "sValue": "12"
          }, {
            "label": "Teresita Sprague",
            "value": "46500",
            "sValue": "18"
          }, {
            "label": "Tomoko Shull",
            "value": "17000",
            "sValue": "-4"
          }, {
            "label": "Yahaira Snider",
            "value": "24500",
            "sValue": "8"
          }, {
            "label": "Zina Espinoza",
            "value": "51000",
            "sValue": "5"
          }, {
            "label": "Jamal Crespo",
            "value": "12000",
            "sValue": "-20"
          }, {
            "label": "Ariel Jorgensen",
            "value": "16000",
            "sValue": "5"
          }, {
            "label": "Fredda Tuttle",
            "value": "14000",
            "sValue": "-10"
          }, {
            "label": "Gerardo Carter",
            "value": "34500",
            "sValue": "-16"
          }]
        }, {
          "label": "Western Region",
          "value": "1830000",
          "data": [{
            "label": "Sadie Wells",
            "value": "30000",
            "sValue": "-10"
          }, {
            "label": "Jacqueline Griffith",
            "value": "45000",
            "sValue": "2"
          }, {
            "label": "Malcolm Lee",
            "value": "55000",
            "sValue": "18"
          }, {
            "label": "Martin Hudson",
            "value": "59000",
            "sValue": "-15"
          }, {
            "label": "Carlos Hart",
            "value": "64000",
            "sValue": "18"
          }, {
            "label": "Alison Luna",
            "value": "35000",
            "sValue": "-20"
          }, {
            "label": "Pablo Paul",
            "value": "72000",
            "sValue": "20"
          }, {
            "label": "Arlene Fox",
            "value": "33000",
            "sValue": "-15"
          }, {
            "label": "Lillian Young",
            "value": "39000",
            "sValue": "-5"
          }, {
            "label": "Annie Ford",
            "value": "66000",
            "sValue": "10"
          }, {
            "label": "Manuel Delgado",
            "value": "46000",
            "sValue": "-5"
          }, {
            "label": "Arthur Pope",
            "value": "28000",
            "sValue": "-15"
          }, {
            "label": "Antonia Marshall",
            "value": "24000",
            "sValue": "-17"
          }, {
            "label": "Glen Alexander",
            "value": "29000",
            "sValue": "15"
          }, {
            "label": "Myrtle Bass",
            "value": "40000",
            "sValue": "10"
          }, {
            "label": "Garry Palmer",
            "value": "27000",
            "sValue": "-18"
          }, {
            "label": "Dianne Blair",
            "value": "35000",
            "sValue": "-1"
          }, {
            "label": "Melba Page",
            "value": "36000",
            "sValue": "5"
          }, {
            "label": "Darla Nelson",
            "value": "60000",
            "sValue": "14"
          }, {
            "label": "Winston Brewer",
            "value": "43000",
            "sValue": "17"
          }, {
            "label": "Drew Osborne",
            "value": "21000",
            "sValue": "-12"
          }, {
            "label": "Jesus Sullivan",
            "value": "46000",
            "sValue": "18"
          }, {
            "label": "Jeremiah Flowers",
            "value": "15000",
            "sValue": "-20"
          }, {
            "label": "Suzanne Richardson",
            "value": "24000",
            "sValue": "-15"
          }, {
            "label": "Nicholas Mathis",
            "value": "71000",
            "sValue": "20"
          }, {
            "label": "Della King",
            "value": "28000",
            "sValue": "-10"
          }, {
            "label": "Beth Boone",
            "value": "40000",
            "sValue": "15"
          }, {
            "label": "Ruben Powell",
            "value": "35000",
            "sValue": "6"
          }, {
            "label": "Marlon Harrington",
            "value": "14000",
            "sValue": "-7"
          }, {
            "label": "Sharice Kang",
            "value": "25000",
            "sValue": "-20"
          }, {
            "label": "Lizette Stout",
            "value": "55000",
            "sValue": "15"
          }, {
            "label": "Jimmy Cho",
            "value": "41000",
            "sValue": "10"
          }, {
            "label": "Weston Alcorn",
            "value": "21000",
            "sValue": "-5"
          }, {
            "label": "Omer Whitfield",
            "value": "18000",
            "sValue": "-10"
          }, {
            "label": "Delora Downs",
            "value": "35000",
            "sValue": "2"
          }, {
            "label": "Rea Booker",
            "value": "22000",
            "sValue": "12"
          }, {
            "label": "Jon Blue",
            "value": "73000",
            "sValue": "20"
          }, {
            "label": "Haley Cameron",
            "value": "17000",
            "sValue": "-15"
          }, {
            "label": "Jani Fortune",
            "value": "23000",
            "sValue": "-15"
          }, {
            "label": "Theressa Talbot",
            "value": "26000",
            "sValue": "8"
          }, {
            "label": "Tashia Crane",
            "value": "38000",
            "sValue": "-2"
          }, {
            "label": "Latonya Grey",
            "value": "19000",
            "sValue": "-20"
          }, {
            "label": "Lyndsey Song",
            "value": "40000",
            "sValue": "15"
          }, {
            "label": "Lan Bean",
            "value": "48000",
            "sValue": "5"
          }, {
            "label": "Ethelene Haas",
            "value": "52000",
            "sValue": "10"
          }, {
            "label": "Lauran Dunaway",
            "value": "29000",
            "sValue": "8"
          }, {
            "label": "Williams Hodge",
            "value": "14000",
            "sValue": "-18"
          }, {
            "label": "Elwanda Archuleta",
            "value": "24000",
            "sValue": "-5"
          }, {
            "label": "Florida Andersen",
            "value": "30000",
            "sValue": "5"
          }, {
            "label": "Scott Perry",
            "value": "20000",
            "sValue": "2"
          }]
        }]
      }],
      "colorrange": {
        "mapbypercent": "1",
        "gradient": "1",
        "minvalue": "-25",
        "code": "e24b1a",
        "startlabel": "Decline",
        "endlabel": "Rise",
        "color": [{
          "code": "ffffff",
          "maxvalue": "0",
          "label": "Static"
        }, {
          "code": "6da81e",
          "maxvalue": "25",
          "label": "AVERAGE"
        }]
      }
    }
}
,{
    type: 'vbullet',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberPrefix": "$",
            "numberSuffix": "K",
            "colorRangeFillMix": "{light}",
            "chartBottomMargin": "20",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "70"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f2c500",
                "alpha": "70"
            }, {
                "minValue": "75",
                "maxValue": "120",
                "code": "#1aaf5d",
                "alpha": "70"
            }]
        },
        "value": "82",
        "target": "90"
    }
}
,{
    type: 'vled',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Customer score",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Bad",
            "upperLimitDisplay": "Good",
            "numberSuffix": "%",
            "tickMarkDistance": "5",
            "alignCaptionWithCanvas": "1",
            "captionAlignment": "center",
            "theme": "fusion"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "45",
                "code": "#8e0000"
            }, {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f2c500"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#1aaf5d"
            }]
        },
        "value": "92"
    }
}
,{
    type: 'waterfall2d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total Profit Calculation",
            "subcaption": "Last month",
            "yAxisname": "Amount (In USD)",
            "numberprefix": "$",
            "connectordashed": "1",
            "sumlabel": "Total {br} Profit",
            "positiveColor": "#6baa01",
            "negativeColor": "#e44a00",
            "theme": "fusion"
        },
        "data": [{
            "label": "Online sales",
            "value": "420000"
        }, {
            "label": "Store Sales",
            "value": "710000"
        }, {
            "label": "Total Sales",
            "issum": "1"
        }, {
            "label": "Fixed Costs",
            "value": "-250000"
        }, {
            "label": "Variable Costs",
            "value": "-156000"
        }, {
            "label": "COGS",
            "value": "-310000"
        }, {
            "label": "Promotion Costs",
            "value": "-86000"
        }, {
            "label": "Total Costs",
            "issum": "1",
            "cumulative": "0"
        }]
    }
}
,{
    type: 'zoomline',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Unique Website Visitors",
            "subcaption": "Last year",
            "yaxisname": "Unique Visitors",
            "xaxisname": "Date",
            "yaxisminValue": "800",
            "yaxismaxValue": "1400",
            "pixelsPerPoint": "0",
            "pixelsPerLabel": "30",
            "lineThickness": "1",
            "compactdatamode": "1",
            "dataseparator": "|",
            "labelHeight": "30",
            "scrollheight": "10",
            "flatScrollBars": "1",
            "scrollShowButtons": "0",
            "scrollColor": "#cccccc",
            "theme": "fusion"
        },
        "categories": [{
            "category": "Jan 01|Jan 02|Jan 03|Jan 04|Jan 05|Jan 06|Jan 07|Jan 08|Jan 09|Jan 10|Jan 11|Jan 12|Jan 13|Jan 14|Jan 15|Jan 16|Jan 17|Jan 18|Jan 19|Jan 20|Jan 21|Jan 22|Jan 23|Jan 24|Jan 25|Jan 26|Jan 27|Jan 28|Jan 29|Jan 30|Jan 31|Feb 01|Feb 02|Feb 03|Feb 04|Feb 05|Feb 06|Feb 07|Feb 08|Feb 09|Feb 10|Feb 11|Feb 12|Feb 13|Feb 14|Feb 15|Feb 16|Feb 17|Feb 18|Feb 19|Feb 20|Feb 21|Feb 22|Feb 23|Feb 24|Feb 25|Feb 26|Feb 27|Feb 28|Mar 01|Mar 02|Mar 03|Mar 04|Mar 05|Mar 06|Mar 07|Mar 08|Mar 09|Mar 10|Mar 11|Mar 12|Mar 13|Mar 14|Mar 15|Mar 16|Mar 17|Mar 18|Mar 19|Mar 20|Mar 21|Mar 22|Mar 23|Mar 24|Mar 25|Mar 26|Mar 27|Mar 28|Mar 29|Mar 30|Mar 31|Apr 01|Apr 02|Apr 03|Apr 04|Apr 05|Apr 06|Apr 07|Apr 08|Apr 09|Apr 10|Apr 11|Apr 12|Apr 13|Apr 14|Apr 15|Apr 16|Apr 17|Apr 18|Apr 19|Apr 20|Apr 21|Apr 22|Apr 23|Apr 24|Apr 25|Apr 26|Apr 27|Apr 28|Apr 29|Apr 30|May 01|May 02|May 03|May 04|May 05|May 06|May 07|May 08|May 09|May 10|May 11|May 12|May 13|May 14|May 15|May 16|May 17|May 18|May 19|May 20|May 21|May 22|May 23|May 24|May 25|May 26|May 27|May 28|May 29|May 30|May 31|Jun 01|Jun 02|Jun 03|Jun 04|Jun 05|Jun 06|Jun 07|Jun 08|Jun 09|Jun 10|Jun 11|Jun 12|Jun 13|Jun 14|Jun 15|Jun 16|Jun 17|Jun 18|Jun 19|Jun 20|Jun 21|Jun 22|Jun 23|Jun 24|Jun 25|Jun 26|Jun 27|Jun 28|Jun 29|Jun 30|Jul 01|Jul 02|Jul 03|Jul 04|Jul 05|Jul 06|Jul 07|Jul 08|Jul 09|Jul 10|Jul 11|Jul 12|Jul 13|Jul 14|Jul 15|Jul 16|Jul 17|Jul 18|Jul 19|Jul 20|Jul 21|Jul 22|Jul 23|Jul 24|Jul 25|Jul 26|Jul 27|Jul 28|Jul 29|Jul 30|Jul 31|Aug 01|Aug 02|Aug 03|Aug 04|Aug 05|Aug 06|Aug 07|Aug 08|Aug 09|Aug 10|Aug 11|Aug 12|Aug 13|Aug 14|Aug 15|Aug 16|Aug 17|Aug 18|Aug 19|Aug 20|Aug 21|Aug 22|Aug 23|Aug 24|Aug 25|Aug 26|Aug 27|Aug 28|Aug 29|Aug 30|Aug 31|Sep 01|Sep 02|Sep 03|Sep 04|Sep 05|Sep 06|Sep 07|Sep 08|Sep 09|Sep 10|Sep 11|Sep 12|Sep 13|Sep 14|Sep 15|Sep 16|Sep 17|Sep 18|Sep 19|Sep 20|Sep 21|Sep 22|Sep 23|Sep 24|Sep 25|Sep 26|Sep 27|Sep 28|Sep 29|Sep 30|Oct 01|Oct 02|Oct 03|Oct 04|Oct 05|Oct 06|Oct 07|Oct 08|Oct 09|Oct 10|Oct 11|Oct 12|Oct 13|Oct 14|Oct 15|Oct 16|Oct 17|Oct 18|Oct 19|Oct 20|Oct 21|Oct 22|Oct 23|Oct 24|Oct 25|Oct 26|Oct 27|Oct 28|Oct 29|Oct 30|Oct 31|Nov 01|Nov 02|Nov 03|Nov 04|Nov 05|Nov 06|Nov 07|Nov 08|Nov 09|Nov 10|Nov 11|Nov 12|Nov 13|Nov 14|Nov 15|Nov 16|Nov 17|Nov 18|Nov 19|Nov 20|Nov 21|Nov 22|Nov 23|Nov 24|Nov 25|Nov 26|Nov 27|Nov 28|Nov 29|Nov 30|Dec 01|Dec 02|Dec 03|Dec 04|Dec 05|Dec 06|Dec 07|Dec 08|Dec 09|Dec 10|Dec 11|Dec 12|Dec 13|Dec 14|Dec 15|Dec 16|Dec 17|Dec 18|Dec 19|Dec 20|Dec 21|Dec 22|Dec 23|Dec 24|Dec 25|Dec 26|Dec 27|Dec 28|Dec 29|Dec 30|Dec 31"
        }],
        "dataset": [{
            "seriesname": "harrysfoodmart.com",
            "data": "978|976|955|981|992|964|973|949|985|962|977|955|988|959|985|965|991|985|966|989|960|944|976|980|940|941|945|952|973|946|951|983|942|964|937|942|963|971|969|967|934|935|956|974|930|936|935|973|979|990|994|992|994|984|991|986|963|985|1006|965|958|976|993|974|995|989|966|965|1011|995|1007|978|985|1012|997|985|1004|987|986|981|991|982|992|983|1018|994|976|989|1022|989|1002|983|1015|1006|1005|1003|1017|1014|995|1007|1001|1019|1012|1005|1027|1011|1013|1035|1010|1011|1011|1036|1041|1005|1005|997|1012|1032|1025|1020|998|1018|1000|1009|1005|1004|1042|1047|1021|1032|1019|1038|1050|1037|1019|1018|1035|1055|1028|1049|1013|1028|1023|1054|1041|1051|1069|1051|1072|1049|1054|1035|1072|1042|1048|1083|1054|1048|1065|1046|1055|1056|1085|1046|1048|1048|1068|1089|1074|1078|1046|1052|1082|1052|1067|1058|1051|1052|1082|1060|1076|1077|1059|1070|1082|1093|1100|1089|1079|1075|1087|1089|1088|1106|1107|1067|1076|1101|1094|1078|1097|1094|1083|1066|1079|1111|1100|1085|1091|1095|1081|1091|1077|1095|1107|1083|1116|1118|1101|1111|1096|1077|1086|1117|1087|1105|1107|1094|1112|1101|1084|1094|1125|1099|1108|1084|1099|1120|1122|1092|1120|1121|1094|1114|1099|1129|1095|1125|1127|1121|1129|1110|1097|1136|1110|1098|1131|1125|1144|1104|1117|1105|1105|1145|1102|1143|1115|1147|1149|1129|1108|1109|1130|1153|1121|1127|1133|1120|1155|1120|1147|1118|1117|1145|1152|1145|1130|1157|1135|1115|1156|1163|1131|1123|1137|1151|1160|1152|1166|1144|1137|1124|1151|1129|1133|1143|1139|1171|1135|1132|1174|1170|1163|1175|1152|1142|1160|1148|1173|1158|1160|1151|1142|1168|1153|1143|1157|1142|1172|1186|1176|1185|1175|1178|1184|1166|1148|1166|1186|1187|1180|1179|1161|1174|1155|1172|1173|1179|1149|1170|1175|1162|1151|1152|1163|1155|1197|1174|1199|1180|1160|1174|1159|1168|1160"

        }, {
            "seriesname": "harrysfashion.com",
            "data": "1053|1057|1084|1082|1098|1055|1068|1067|1074|1056|1067|1078|1079|1084|1041|1052|1066|1080|1049|1051|1049|1044|1083|1053|1038|1077|1046|1067|1053|1033|1047|1055|1031|1074|1031|1041|1071|1057|1035|1070|1050|1069|1054|1049|1022|1044|1049|1058|1064|1088|1093|1103|1085|1072|1104|1106|1078|1061|1078|1105|1105|1062|1076|1074|1114|1069|1091|1086|1094|1072|1079|1088|1082|1075|1110|1120|1108|1102|1090|1088|1092|1102|1110|1111|1085|1113|1110|1116|1095|1105|1105|1122|1133|1132|1093|1097|1120|1105|1135|1106|1108|1135|1098|1136|1122|1113|1113|1145|1103|1127|1104|1126|1147|1120|1119|1120|1132|1107|1149|1147|1149|1141|1145|1152|1117|1144|1157|1134|1157|1120|1125|1153|1141|1132|1158|1134|1166|1167|1170|1163|1139|1171|1145|1156|1158|1154|1196|1196|1169|1174|1174|1195|1161|1201|1208|1188|1182|1188|1162|1174|1174|1211|1189|1211|1172|1211|1179|1199|1216|1184|1209|1181|1186|1174|1185|1220|1206|1190|1206|1201|1190|1209|1208|1189|1195|1188|1193|1206|1214|1205|1215|1200|1194|1210|1205|1236|1226|1208|1228|1235|1197|1197|1198|1224|1220|1210|1226|1244|1228|1241|1237|1201|1208|1238|1213|1222|1213|1249|1222|1221|1230|1223|1214|1251|1234|1220|1240|1213|1252|1224|1222|1234|1262|1255|1225|1226|1242|1240|1250|1265|1235|1228|1261|1221|1230|1235|1260|1273|1253|1268|1258|1233|1258|1248|1230|1270|1246|1242|1246|1253|1253|1257|1253|1266|1248|1247|1257|1245|1281|1271|1272|1248|1292|1251|1253|1257|1259|1288|1252|1297|1290|1268|1291|1258|1263|1254|1302|1279|1272|1271|1281|1261|1263|1289|1294|1272|1296|1264|1282|1268|1296|1280|1281|1277|1277|1292|1266|1310|1288|1312|1308|1300|1289|1273|1282|1300|1322|1301|1314|1296|1305|1305|1327|1323|1295|1314|1298|1312|1330|1293|1309|1286|1309|1332|1300|1295|1325|1322|1305|1323|1300|1308|1299|1324|1338|1313|1329|1331|1299|1329|1344|1335|1342|1307|1314|1326|1331|1328|1328|1311|1352|1328|1309|1311|1312"
        }]
    }
}
,{
    type: 'zoomlinedy',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Harry's Supermart - Sales Analysis",
            "subcaption": "Previous calendar year",
            "pYAxisName": "Unique footfall",
            "sYAxisName": "Sales",
            "compactDataMode": "1",
            "pixelsPerPoint": "0",
            "lineThickness": "1",
            "dataSeparator": "|",
            "snumberPrefix": "$",
            "pYAxisMaxValue": "1500",
            "pYAxisMinValue": "900",
            "sYAxisMaxValue": "23000",
            "sYAxisMinValue": "15000",
            "theme": "fusion"            
        },
        "categories": [{
            "category": "Jan 01|Jan 02|Jan 03|Jan 04|Jan 05|Jan 06|Jan 07|Jan 08|Jan 09|Jan 10|Jan 11|Jan 12|Jan 13|Jan 14|Jan 15|Jan 16|Jan 17|Jan 18|Jan 19|Jan 20|Jan 21|Jan 22|Jan 23|Jan 24|Jan 25|Jan 26|Jan 27|Jan 28|Jan 29|Jan 30|Jan 31|Feb 01|Feb 02|Feb 03|Feb 04|Feb 05|Feb 06|Feb 07|Feb 08|Feb 09|Feb 10|Feb 11|Feb 12|Feb 13|Feb 14|Feb 15|Feb 16|Feb 17|Feb 18|Feb 19|Feb 20|Feb 21|Feb 22|Feb 23|Feb 24|Feb 25|Feb 26|Feb 27|Feb 28|Mar 01|Mar 02|Mar 03|Mar 04|Mar 05|Mar 06|Mar 07|Mar 08|Mar 09|Mar 10|Mar 11|Mar 12|Mar 13|Mar 14|Mar 15|Mar 16|Mar 17|Mar 18|Mar 19|Mar 20|Mar 21|Mar 22|Mar 23|Mar 24|Mar 25|Mar 26|Mar 27|Mar 28|Mar 29|Mar 30|Mar 31|Apr 01|Apr 02|Apr 03|Apr 04|Apr 05|Apr 06|Apr 07|Apr 08|Apr 09|Apr 10|Apr 11|Apr 12|Apr 13|Apr 14|Apr 15|Apr 16|Apr 17|Apr 18|Apr 19|Apr 20|Apr 21|Apr 22|Apr 23|Apr 24|Apr 25|Apr 26|Apr 27|Apr 28|Apr 29|Apr 30|May 01|May 02|May 03|May 04|May 05|May 06|May 07|May 08|May 09|May 10|May 11|May 12|May 13|May 14|May 15|May 16|May 17|May 18|May 19|May 20|May 21|May 22|May 23|May 24|May 25|May 26|May 27|May 28|May 29|May 30|May 31|Jun 01|Jun 02|Jun 03|Jun 04|Jun 05|Jun 06|Jun 07|Jun 08|Jun 09|Jun 10|Jun 11|Jun 12|Jun 13|Jun 14|Jun 15|Jun 16|Jun 17|Jun 18|Jun 19|Jun 20|Jun 21|Jun 22|Jun 23|Jun 24|Jun 25|Jun 26|Jun 27|Jun 28|Jun 29|Jun 30|Jul 01|Jul 02|Jul 03|Jul 04|Jul 05|Jul 06|Jul 07|Jul 08|Jul 09|Jul 10|Jul 11|Jul 12|Jul 13|Jul 14|Jul 15|Jul 16|Jul 17|Jul 18|Jul 19|Jul 20|Jul 21|Jul 22|Jul 23|Jul 24|Jul 25|Jul 26|Jul 27|Jul 28|Jul 29|Jul 30|Jul 31|Aug 01|Aug 02|Aug 03|Aug 04|Aug 05|Aug 06|Aug 07|Aug 08|Aug 09|Aug 10|Aug 11|Aug 12|Aug 13|Aug 14|Aug 15|Aug 16|Aug 17|Aug 18|Aug 19|Aug 20|Aug 21|Aug 22|Aug 23|Aug 24|Aug 25|Aug 26|Aug 27|Aug 28|Aug 29|Aug 30|Aug 31|Sep 01|Sep 02|Sep 03|Sep 04|Sep 05|Sep 06|Sep 07|Sep 08|Sep 09|Sep 10|Sep 11|Sep 12|Sep 13|Sep 14|Sep 15|Sep 16|Sep 17|Sep 18|Sep 19|Sep 20|Sep 21|Sep 22|Sep 23|Sep 24|Sep 25|Sep 26|Sep 27|Sep 28|Sep 29|Sep 30|Oct 01|Oct 02|Oct 03|Oct 04|Oct 05|Oct 06|Oct 07|Oct 08|Oct 09|Oct 10|Oct 11|Oct 12|Oct 13|Oct 14|Oct 15|Oct 16|Oct 17|Oct 18|Oct 19|Oct 20|Oct 21|Oct 22|Oct 23|Oct 24|Oct 25|Oct 26|Oct 27|Oct 28|Oct 29|Oct 30|Oct 31|Nov 01|Nov 02|Nov 03|Nov 04|Nov 05|Nov 06|Nov 07|Nov 08|Nov 09|Nov 10|Nov 11|Nov 12|Nov 13|Nov 14|Nov 15|Nov 16|Nov 17|Nov 18|Nov 19|Nov 20|Nov 21|Nov 22|Nov 23|Nov 24|Nov 25|Nov 26|Nov 27|Nov 28|Nov 29|Nov 30|Dec 01|Dec 02|Dec 03|Dec 04|Dec 05|Dec 06|Dec 07|Dec 08|Dec 09|Dec 10|Dec 11|Dec 12|Dec 13|Dec 14|Dec 15|Dec 16|Dec 17|Dec 18|Dec 19|Dec 20|Dec 21|Dec 22|Dec 23|Dec 24|Dec 25|Dec 26|Dec 27|Dec 28|Dec 29|Dec 30|Dec 31"
        }],
        "dataset": [{
            "seriesname": "Unique Footfall",
            "color": "0075c2",
            "data": "1140|1160|1167|1145|1140|1132|1127|1137|1172|1181|1142|1134|1117|1147|1141|1149|1150|1113|1119|1110|1092|1102|1128|1131|1083|1081|1087|1088|1092|1109|1112|1065|1063|1057|1045|1043|1078|1083|1043|1039|1036|1031|1048|1056|1074|1045|1037|1034|1039|1031|1045|1048|1031|1019|1026|1017|1011|1022|1027|1022|1017|1019|1010|1015|1023|1029|1020|1009|1012|1008|1015|1027|1033|1008|1007|1009|1010|1013|1017|1024|1012|1009|1007|1009|1011|1015|1020|1004|1009|1011|1028|1037|1049|1057|1045|1047|1056|1068|1077|1089|1100|1090|1086|1094|1098|1101|1125|1131|1111|1102|1109|1099|1094|1112|1121|1102|1094|1087|1089|1097|1139|1148|1131|1127|1129|1122|1137|1158|1174|1145|1143|1137|1139|1147|1156|1162|1134|1127|1130|1123|1117|1137|1138|1117|1109|1107|1100|1107|1120|1122|1120|1112|1100|1094|1090|1100|1102|1052|1054|1044|1047|1063|1077|1080|1050|1047|1030|1022|1021|1022|1025|1015|1009|1010|1007|1002|1010|1020|1000|994|990|987|990|1001|999|982|977|967|966|974|990|987|974|977|969|962|967|972|977|961|957|959|960|958|967|970|959|954|962|961|957|980|987|977|976|979|982|983|1000|1009|994|999|1002|1009|1015|1024|1029|1020|1011|1009|1015|1010|1025|1031|1019|1018|1022|1014|1018|1022|1025|1010|1022|1017|1019|1010|1015|1023|1029|1020|1009|1012|1008|1015|1027|1033|1008|1007|1009|1010|1013|1017|1024|1012|1009|1007|1009|1011|1015|1020|1004|1009|1045|1043|1078|1083|1043|1039|1036|1031|1048|1056|1074|1045|1037|1034|1039|1031|1045|1048|1031|1019|1026|1017|1011|1022|1027|1022|1020|1023|1024|1025|1040|1057|1035|1033|1037|1047|1049|1068|1074|1052|1059|1064|1060|1064|1080|1089|1080|1081|1079|1086|1084|1090|1099|1090|1091|1088|1084|1082|1089|1100|1094|1127|1129|1122|1137|1158|1174|1145|1143|1137|1139|1147|1156|1162|1134|1127|1130|1123|1117|1137|1138|1117|1109|1107|1100|1107|1137|1140|1120|1127|1130|1131"
        },  {
            "seriesname": "Sales",
            "color": "1aaf5d",
            "parentYAxis": "S",
            "data": "21270|21290|21220|21370|21580|21740|21450|21430|21370|21390|21470|21560|21620|21340|21270|21300|21230|21170|21370|21380|22170|21090|21070|21000|21070|21370|21400|21200|21270|21300|21310|21400|21600|21670|21450|21400|21320|21270|21370|21720|21810|21420|21340|21170|21470|21410|21490|21500|21130|21190|21100|20920|21020|21280|21310|20830|20810|20870|20880|20450|20430|20780|20830|20430|20390|20360|20310|20480|20560|20740|20450|20370|20340|20390|20310|20450|20480|20310|20190|20260|20170|20110|20220|20270|20220|20200|20230|20240|20250|20400|20720|20670|20690|20600|20650|20730|20790|20700|20590|20620|20580|20650|20770|20830|20580|20570|20590|20600|20630|20670|20740|20620|20590|20570|20590|20610|20650|20700|20540|20590|21150|20530|21070|20950|20930|20980|21330|20930|20890|20860|20810|20790|21060|21240|20950|20870|20840|20890|20810|20950|20980|20810|20690|20760|20670|20610|20720|20770|20700|20720|20800|20400|20370|20400|20510|20490|20320|20270|20170|20160|20240|19900|19870|19740|19770|19690|19620|19670|19720|19770|19610|19570|19590|19600|19580|19670|19700|19590|19540|19620|19610|19570|19800|19870|19770|19760|19790|19820|19830|20000|20090|19940|19990|20020|20090|20150|20240|20290|20200|20110|20090|20150|20100|20250|20310|20190|20180|20220|20140|20180|20220|20250|20100|21120|21000|20940|20900|21000|21020|20520|20540|20440|20470|20630|20770|20800|20500|20470|20300|20220|20210|20220|20250|20150|20090|20100|20070|20020|20100|20200|20000|19940|20220|20170|20190|20100|20150|20230|20290|20200|20090|20120|20080|20150|20270|20330|20080|20070|20090|20100|20130|20170|20240|20120|20090|20070|20090|20110|20150|20200|20040|20090|20110|20280|20370|20490|20570|20450|20470|20560|20680|20770|20890|21000|20900|20860|20940|20980|21010|21250|21310|21110|21020|21090|20990|20940|21120|21210|21020|20940|20870|20890|20970|20570|20350|20330|20370|20470|20490|20680|20740|20520|20590|20640|20600|20640|20800|20890|20800|20810|20790|20860|20840|20900|20990|20900|20910|20880|20840|20820|20890|21000|20940|21390|21480|21310|21270|21290|21220|21370|21580|21740|21450|21430|21370|21390|21470|21560|21620|21340|21270|21300|21230|21170|21370|21380|21170|21090|21070|21000|21070|21200|21220|21200"
        }]
    }
}
,{
    type: 'zoomscatter',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Server Performance",
            "yaxisname": "Response Time (sec)",
            "xaxisname": "Server Load (TPS)",
            "xaxismaxvalue": "100",
            "xaxisminvalue": "20",
            "yaxismaxvalue": "7",
            "theme": "fusion"
        },
        "dataset": [
        {
            "drawline": "1",
            "seriesname": "Server 1",
            "color": "009900",
            "anchorsides": "3",
            "anchorradius": "4",
            "anchorbgcolor": "D5FFD5",
            "anchorbordercolor": "009900",
            "data": [
            {
                "y": "2.4",
                "x": "21"
            },
            {
                "y": "3.5",
                "x": "32"
            },
            {
                "y": "2.5",
                "x": "43"
            },
            {
                "y": "4.1",
                "x": "48"
            },
            {
                "y": "3.5",
                "x": "50"
            },
            {
                "y": "4.6",
                "x": "56"
            },
            {
                "y": "4.8",
                "x": "59"
            },
            {
                "y": "4.9",
                "x": "73"
            },
            {
                "y": "4.6",
                "x": "89"
            },
            {
                "y": "4.2",
                "x": "93"
            }
            ]
        },
        {
            "seriesname": "Server 2",
            "color": "0000FF",
            "anchorsides": "4",
            "anchorradius": "4",
            "anchorbgcolor": "C6C6FF",
            "anchorbordercolor": "0000FF",
            "data": [
            {
                "y": "1.4",
                "x": "23"
            },
            {
                "y": "1.5",
                "x": "29"
            },
            {
                "y": "1.5",
                "x": "33"
            },
            {
                "y": "1.1",
                "x": "41"
            },
            {
                "y": "1.5",
                "x": "47"
            },
            {
                "y": "1.6",
                "x": "49"
            },
            {
                "y": "1.8",
                "x": "51"
            },
            {
                "y": "1.9",
                "x": "53"
            },
            {
                "y": "1.6",
                "x": "57"
            },
            {
                "y": "1.2",
                "x": "58"
            },
            {
                "y": "1.9",
                "x": "61"
            },
            {
                "y": "1.1",
                "x": "63"
            },
            {
                "y": "1.9",
                "x": "64"
            },
            {
                "y": "1.7",
                "x": "71"
            },
            {
                "y": "1.1",
                "x": "77"
            },
            {
                "y": "1.3",
                "x": "79"
            },
            {
                "y": "1.7",
                "x": "83"
            },
            {
                "y": "1.8",
                "x": "89"
            },
            {
                "y": "1.9",
                "x": "91"
            },
            {
                "y": "1.0",
                "x": "93"
            }
            ]
        }
        ],
        "vtrendlines": [
        {
            "line": [
            {
                "startvalue": "20",
                "endvalue": "65",
                "alpha": "5",
                "color": "00FF00"
            },
            {
                "startvalue": "65",
                "endvalue": "75",
                "alpha": "15",
                "color": "FFFF00"
            },
            {
                "startvalue": "75",
                "endvalue": "100",
                "alpha": "15",
                "color": "FF0000"
            }
            ]
        }
        ],
        "trendlines": [
        {
            "line": [
            {
                "startvalue": "5.2",
                "displayvalue": "Check",
                "linethickness": "2",
                "color": "FF0000",
                "valueonright": "1",
                "dashed": "1",
                "dashgap": "5"
            }
            ]
        }
        ]
    }
}
,];