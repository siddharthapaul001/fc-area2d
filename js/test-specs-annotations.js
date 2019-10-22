tests = [
    ...tests,
    {
        id: "test-annotation-1",
        description: "Implementing custom star path inside fusioncharts",
        test: {
            dataSource: {
                chart: {
                    caption: "Test Annotation",
                    subCaption: "Test Annotation sample",
                    anchorImageScale: 20,
                    connectNullData: 1,
                    theme: 'candy',
                    plotFillAlpha: 10,
                    canvasPadding: 30,
                    exportEnabled: 1,
                    drawanchors: 1
                },
                data: dobData,
                annotations: {
                    groups: [
                        {
                        id: "matha",
                        items: [{
                            id: "star-viv",
                            type: "path",
                            path: "M0,0" + getStarPath(20),
                            color: "#ffff00",
                            alpha: 100,
                            x: "$dataset.0.set.3.x",
                            y: "$dataset.0.set.3.y - 50",
                            // borderThickness: 2,
                            // borderColor: "#ff0000",
                            // borderAlpha: 80
                        },
                        {
                            id: "ghurche-sri",
                            type: "image",
                            url: "images/dizziness.png",
                            alpha: 100,
                            x: "$dataset.0.set.8.x - 24",
                            y: "$dataset.0.set.8.y - 65",
                            xScale: 6,
                            yScale: 6
                        },
                        {
                            id: "devil-jyo",
                            type: "image",
                            url: "images/devil.png",
                            alpha: 100,
                            x: "$dataset.0.set.9.x - 42",
                            y: "$dataset.0.set.9.y - 80",
                            xScale: 10,
                            yScale: 10
                        },
                        {
                            alpha: 100,
                            id: "star-sid",
                            type: "path",
                            path: "M0,0" + getStarPath(20),
                            color: "#ffff00",
                            x: "$dataset.0.set.10.x",
                            y: "$dataset.0.set.10.y - 50"
                        },
                        {
                            alpha: 100,
                            id: "star-yam",
                            type: "path",
                            path: "M0,0" + getStarPath(20),
                            color: "#ffff00",
                            x: "$dataset.0.set.11.x",
                            y: "$dataset.0.set.11.y - 50"
                        }
                        ]
                    }]
                }
            }
        }
    }
]