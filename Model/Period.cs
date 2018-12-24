using System;
using System.Collections.Generic;
using System.Linq;

namespace YouthSoccerLineup.Model {
    public class Period {
        public Guid Id {get;set;}
        public int Number {get; set;}
        public int DurationInMinutes {get;set;}
        public List<Position> Positions {get; set;}

        public Period(int number, int durationInMinutes)
        {
            this.Id = Guid.NewGuid();
            this.Number = number;
            this.DurationInMinutes = durationInMinutes;
            this.Positions = new List<Position>();
            this.Positions.Add(new Position("goalie", this.Id));

        }

        public bool NonBenchPositionsAreFilled()
        {
            return this.Positions
                .Where(position => (position.Name).ToLower() != "bench" && position.StartingPlayer != null)
                .Any();
        }
    }
}