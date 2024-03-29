const data = [{
    "label": "Mon",
    "value": "4123"
},
{
    "label": "Tue",
    "value": "4633"
},
{
    "label": "Wed",
    "value": "5507"
},
{
    "label": "Thu",
    "value": "4910"
},
{
    "label": "Fri",
    "value": "5529",
    toolText: "Custom text"
},
{
    "label": "Sat",
    "value": "5803"
},
{
    "label": "Sun",
    "value": "6202"
}
],
    discontinuedData = [{
        "label": "Mon",
        "value": "4123",
    },
    {
        "label": "Tue",
        "value": "4633"
    },
    {
        "label": "Wed"
    },
    {
        "label": "Thu is a big day",
        "value": "4910"
    },
    {
        "label": "Fri",
        "value": "5529"
    },
    {
        "label": "Sat",
        "value": "5803"
    },
    {
        "label": "Sun",
        "value": "6202"
    }
    ],
    lData = [{
        "label": "Jan",
        "value": "420000"
    },
    {
        vLine: true,
        color: "#333333",
        thickness: 5,
        alpha: 80,
        dashed: 1,
        dashLen: 4,
        dashGap: 2,
        label: "lomba",
        // showLabelBorder: 0,
        linePosition: 0.9,
        labelPosition: 1,
        labelHAlign: "left",
        labelVAlign: "bottom",
        rotateLabel: 1,
    },
    {
        "label": "Feb",
        "value": "810000"
    },
    {
        "label": "Mar",
        "value": "720000"
    },
    {
        "label": "Apr",
        "value": "550000"
    },
    {
        "label": "May",
        "value": "820000"
    },
    {
        "label": "Jun",
        "value": "580000"
    },
    {
        "label": "Jul",
        "value": "680000"
    },
    {
        "label": "Aug",
        "value": "620000"
    },
    {
        "label": "Sep",
        "value": "610000"
    },
    {
        "label": "Oct",
        "value": "490000"
    },
    {
        "label": "Nov",
        "value": "900000",
        "link": "https://www.facebook.com/siddhartha.paul.568"
    },
    {
        "label": "Dec",
        "value": "730000"
    }
    ],
    dobData = [{
        label: 'Jan',
        anchorImageUrl: ""
    },
    {
        label: 'Feb',
        anchorImageUrl: ""
    },
    {
        label: 'Mar',
        anchorImageUrl: ""
    },
    {
        label: 'Apr',
        value: 5,
        anchorImageUrl: "//images.ctfassets.net/fevtq3bap7tj/3XfSeI5zTLSpFMn1sN1NeB/7351e7c251f6aae6bc48c75a3b72ea12/vivek.png"
    },
    {
        label: 'May',
        anchorImageUrl: ""
    },
    {
        label: 'Jun',
        anchorImageUrl: ""
    },
    {
        label: 'Jul',
        anchorImageUrl: ""
    },
    {
        label: 'Aug',
        anchorImageUrl: ""
    },
    {
        label: 'Sep',
        value: 7,
        anchorImageUrl: "//images.ctfassets.net/fevtq3bap7tj/TmWwsbmaCf7r5ETjuM7BH/821b198f222b3bee3184ce6b2f600738/srishti-jaiswal.png"
    },
    {
        label: 'Oct',
        value: -20,
        anchorImageUrl: "//images.ctfassets.net/fevtq3bap7tj/76OSVlV0YQn5u9JLGeYxc3/cf47490bc5dcba45d6c8ca07021870c0/jyoti-mishra.png"
    },
    {
        label: 'Nov',
        value: 20,
        toolText: "Siddhartha Paul, 20th Nov 1996",
        anchorImageUrl: "//images.ctfassets.net/fevtq3bap7tj/3oXV8jn8T5A4HCqE7nGhPZ/1fbafd99328f8afefa713609151ce6c8/siddhartha-paul.png",
    },
    {
        label: 'Dec',
        value: 7,
        anchorImageUrl: "//images.ctfassets.net/fevtq3bap7tj/3j9B2HnWjm5NiFgU91debv/ce94b69ac7eb90e6c8fe4eb351107001/yaminim.png"
    }
    ],
    storageData = [{
        "label": "08:00",
        "value": "3572355443"
    }, {
        "label": "10:00",
        "value": "3321445434"
    }, {
        "label": "12:00",
        "value": "3012343453"
    }, {
        "label": "14:00",
        "value": "2645546455"
    }, {
        "label": "16:00",
        "value": "2425445435"
    }, {
        "label": "18:00",
        "value": "1935657565"
    }, {
        "label": "20:00",
        "value": "1545565666"
    }, {
        "label": "22:00",
        "value": "1135654544"
    }, {
        "label": "00:00",
        "value": "1006543455"
    }, {
        "label": "02:00",
        "value": "957343445"
    }, {
        "label": "04:00",
        "value": "886334444"
    }, {
        "label": "06:00",
        "value": "800"
    }, {
        "label": "07:59",
        "value": "695"
    }],
    drilldownJSData = [{
        "label": "Q1",
        "value": "1950000",
        "link": "javascript:alert('Q1, 1950K')"
    }, {
        "label": "Q2",
        "value": "1970000",
        "link": "j-customDrilldownTestFunction-a"
    }, {
        "label": "Q3",
        "value": "1910000",
        "link": "P-https://www.fusioncharts.com"
    }, {
        "label": "Q4",
        "value": "2120000",
        "link": "n-https://www.fusioncharts.com"
    }, {
        "label": "Q4",
        "value": "2120000",
        "link": "F-drill-https://www.fusioncharts.com"
    }];