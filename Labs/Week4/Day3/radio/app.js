const Radio ={
    stations: [
        {
            name: "Jam'n 94.5",
            songs: [
                {
                    title: "Rap God",
                    artist: "Eminem"
                },
                {
                    title: "Pe$o",
                    artist: "A$ap Rocky"
                },{
                    title: "Encore",
                    artist: "Jay Z"
                },{
                    title: "Lollipop",
                    artist: "Lil Wayne"
                }
            ]
        },{
            name: "Hot 96.9",
            songs: [
                {
                    title: "One Dance",
                    artist: "Drake"
                },{
                    title: "Umbrella",
                    artist: "Rhianna"
                },{
                    title: "Single Ladies",
                    artist: "Beyonce"
                },{
                    title: "Poker Face",
                    artist: "Lady Gaga"
                }
            ]
        },{
            name: "80.8 Down South",
            songs: [
                {
                    title: "Lemonade",
                    artist: "Gucci"
                },{
                    title: "Bad and Boujee",
                    artist: "Migos"
                },{
                    title: "I'm Different",
                    artist: "2 Chainz"
                },{
                    title: "Hey Ya",
                    artist: "Andre 3000"
                }
            ]
        }
    ],

    changeStation(){
        station = Math.floor(Math.random()*3)
        song = Math.floor(Math.random()*4)
        stationSelection = Radio.stations[station]
        songSelection = Radio.stations[station].songs[song]
        console.log("Now Playing: " + songSelection.title + " by " + songSelection.artist + " on " + stationSelection.name)
    }
    
}

Radio.changeStation()