const numRaces = 22;

const circuits = []

function getCircuitList() {
    for (let i = 1; i < numRaces; i++) {
        var settings = {
    
            "url": "http://ergast.com/api/f1/2022/" + i + "/results.json",
            "method": "GET",
            "timeout": 0,
        };
    
        $.ajax(settings).done(function (response) {
        circuits.push(response.MRData.RaceTable.Races[0].raceName)
        //console.log(circuits)
        });;

    }
}


var dtpList = []

function circuitFinishingPosition() {

    let driverCode = "";
    let driverPoints = 0;
    
    for (let i = 1; i <  numRaces; i++) {
        dtpList.push({})
    }

    dtpList[0]["age"] = "hello"; 
    //console.log(dtpList)


    




    for (let i = 1; i < numRaces; i++) {
        var settings = {
            "url": "http://ergast.com/api/f1/2022/" + i + "/results.json",
            "method": "GET",
            //"async": false,
            "timeout": 0,
        };        
        $.ajax(settings).done(function (response) {
            let dtpDictionary = {}; //driver to point dictionary
            let temp = response.MRData.RaceTable.Races[0].Results;
            let roundNum = Number(response.MRData.RaceTable.Races[0].round)
            //console.log(temp, roundNum)
            for (let j = 0; j < 20; j++ ) {
                driverCode = temp[j].Driver.code
                driverPoints = Number(temp[j].points)
                dtpDictionary[driverCode] = driverPoints;
            }
            dtpList[roundNum] = dtpDictionary
            
        });; 
    }

    console.log(dtpList)
    
    //list comprehension to add previous dic
    
}


getCircuitList()
circuitFinishingPosition()
