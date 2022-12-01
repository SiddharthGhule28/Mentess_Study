using Microsoft.VisualBasic;
using System;

namespace ADONet_Ef_Dapper.Models
{
    public class Player
    {
        public int id { get; set; }
        public string Name { get; set; }
        public int player_no { get; set; }

        public DateTime AddedOn { get; set; }
    }
}
