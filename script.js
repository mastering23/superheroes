const infoSuperheroes = {
    'Iron Man': {
        realName: 'Tony Stark',
        power: ['Advance Technology', 'Flight Abilities'],
        team: 'The Avengers'
    },
    'Capitan America': {
        realName: 'Steve Rogers',
        power: ['Superhuman Power', 'Agilities and reflect'],
        team: 'The Avengers'

    },
    'Thor': {
        realName: 'Thor Odison',
        power: ['Mjoinir', 'Airbender and Thunder'],
        team: 'The Avengers'
    },
    'Spider Man': {
        realName: 'Peter Parker',
        power: ['Balanceo', 'Spider Web', 'spider senses'],
        team: 'The Avengers'
    },
    'Hulk': {
        realName: 'Bruce Banner',
        power: ['Superhuman strength', 'invulnerability'],
        team: 'The Avengers'
    }
};

const showInfoSuperheroes = (aka) => {
        if (aka in infoSuperheroes) {
            const infortmation = infoSuperheroes[aka]
            console.log(`Real Name : ${infortmation.realName}`);
            console.log(`Powers : ${infortmation.power.join(`, `)}`);
        console.log(`Team : ${infortmation.team}`);

    } else {
        console.log(`Superheroe ${aka} not found in the data base...`);
    }
}

showInfoSuperheroes('Thor');