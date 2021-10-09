class Team {
    constructor(teamName, teamDescription){
        this.name = teamName;
        this.description = teamDescription;
    }
    getTeamName(){
        return this.name;
    }
    getTeamDesc() {
        return this.description;
    }
}

module.exports = Team;