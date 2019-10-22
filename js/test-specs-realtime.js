tests = [
    ...tests,
    {
        id: "test-realtime-1",
        description: "Testing realtime chart data update through streamurl",
        test: {
            type: 'realtimearea',
            dataSource: {
                chart: {
                    dataStreamURL: "api/gendata.php",
                    refreshInterval: 0.5,
                    dataStamp: "13:43:45",
                    numDisplaySets: 10,
                    theme: 'candy',
                    rotateLabels: 1,
                    useMessageLog: 1,
                    showRTMenuItem: 1,
                    showValues: 1,
                    yAxisMinValue: 0,
                    yAxisMaxValue: 50
                },
                categories: [{
                    category: [{
                        label: "00:00:00"
                    }]                   
                }],
                dataset: [{
                    data: [{
                        value: 50
                    }]
                }]
            }
        }
    }
]