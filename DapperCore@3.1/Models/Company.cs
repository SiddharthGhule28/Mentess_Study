using System.Collections.Generic;

namespace DapperCore_3._1.Models
{
    public class Company
    {
        
        public int Id { get; set; }
            public string CompanyName { get; set; }
            public string Address { get; set; }
            public string Country { get; set; }
            public Cafe cafeteria { get; set; } // One to One Relationship
            public List<Employee> Employees { get; set; } = new List<Employee>(); // One to Many RelationShip
    }
}
