## Team API Call Modifiers

`?expand=team.roster`

- Shows roster of active players for the specified team

`?expand=person.names`

- Same as above, but gives less info.

`?expand=team.schedule.next`

- Returns details of the upcoming game for a team

`?expand=team.schedule.previous`

- Same as above but for the last game played

`?expand=team.stats`

- Returns the teams stats for the season

`?expand=team.roster&season=20142015`

- Adding the season identifier shows the roster for that season

`?teamId=4,5,29`

- Can string team id together to get multiple teams

`?stats=statsSingleSeasonPlayoffs`

- Specify which stats to get. Not fully sure all of the values
