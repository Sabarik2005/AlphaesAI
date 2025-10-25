const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Challenge #1
  const [players1, players2] = game.players;
  const [gk, ...fieldPlayers] = players1;
  const allPlayers = [...players1, ...players2];
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  const { team1, x: draw, team2 } = game.odds;
  
  function printGoals(...players) {
    console.log(`${players.length} goals were scored`);
    for (const player of players) {
      console.log(player);
    }
  }
  
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  
  if (team1 < team2) {
    console.log(`${game.team1} is more likely to win`);
  } else {
    console.log(`${game.team2} is more likely to win`);
  }
  
  // Challenge #2
  for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
  }
  
  const odds = Object.values(game.odds);
  let sum = 0;
  for (let odd of odds) {
    sum += odd;
  }
  const average = sum / odds.length;
  console.log(`Average odd: ${average}`);
  
  console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
  console.log(`Odd of draw: ${game.odds.x}`);
  console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
  
  const scorers = {};
  for (let player of game.scored) {
    if (scorers[player]) {
      scorers[player]++;
    } else {
      scorers[player] = 1;
    }
  }
  console.log(scorers);
  