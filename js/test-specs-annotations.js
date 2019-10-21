tests = [
    ...tests,
    {
        id: "test-annotation-1",
        description: "Implementing custom star path inside fusioncharts",
        test: {
            dataSource: {
                chart: {
                    caption: "Test Annotation",
                    subCaption: "Test Annotation sample"
                },
                data: dobData
            },
            annotations: [{
                groups: [{
                    items: [{
                        
                    }]
                }]
            }]
        }
    }
]