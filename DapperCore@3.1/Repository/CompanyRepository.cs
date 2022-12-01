using Dapper;
using DapperCore_3._1.Context;
using DapperCore_3._1.Contracts;
using DapperCore_3._1.Dto;
using DapperCore_3._1.Models;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DapperCore_3._1.Repository
{
    public class CompanyRepository: ICompanyRepository
    {
        private readonly DapperContext _context;
        public CompanyRepository(DapperContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Company>> GetCompanies()
        {
            var query = "SELECT Id, Name AS CompanyName, Address, Country FROM Companies";
            using(var connection = _context.CreateConnection())
            {
                var companies = await connection.QueryAsync<Company>(query);
                return companies.ToList();
            }
        }

        public async Task<Company> GetCompanyById(int id)
        {
            var query = "SELECT Id, Name AS CompanyName, Address, Country FROM Companies WHERE Id= @Id";
            using (var connection = _context.CreateConnection())
            {
                var company = await connection.QuerySingleOrDefaultAsync<Company>(query, new {id});
                return company;
            }
        }

        public async Task<Company> CreateCompany(CompanyToCreate company)
        {
            //var query = "INSERT INTO Companies (Name, Address, Country) VALUES (@Name,@Address,@Country)";
            //var parameters = new DynamicParameters();
            //parameters.Add("Name", company.Name, DbType.String);
            //parameters.Add("Address", company.Address, DbType.String);
            //parameters.Add("Country", company.Country, DbType.String);

            //using ( var connection = _context.CreateConnection())
            //{
            //    await connection.ExecuteAsync(query,parameters);
            //}

            var query = "INSERT INTO Companies (Name, Address, Country) VALUES (@Name, @Address, @Country)" +
            "SELECT CAST(SCOPE_IDENTITY() as int)";
            var parameters = new DynamicParameters();
            parameters.Add("Name", company.Name, DbType.String);
            parameters.Add("Address", company.Address, DbType.String);
            parameters.Add("Country", company.Country, DbType.String);

            using (var connection = _context.CreateConnection())
            {
                var id = await connection.QuerySingleAsync<int>(query, parameters);
                var createdCompany = new Company
                {
                    Id = id,
                    CompanyName = company.Name,
                    Address = company.Address,
                    Country = company.Country
                };
                return createdCompany;
            }
        }

        public async Task<Company> GetCompanyByEmployeeId(int empid)
        {
            var procedureName = "ShowCompanyForProvidedEmployeeId";
            var parameters = new DynamicParameters();
            parameters.Add("Id", empid, DbType.Int32, ParameterDirection.Input);
            using (var connection = _context.CreateConnection())
            {
                var company = await connection.QueryFirstOrDefaultAsync<Company> // If SP returns a value use QueryFirst... else if SP doesnt returns can use ExecuteAsync
                    (procedureName, parameters, commandType: CommandType.StoredProcedure);
                return company;
            }
        }

        public async Task<Cafe> GetCafeByCompanyId(int compid) // One to One Relationship Implementation
        {
            var query = "SELECT Id, Name, ManagerName FROM Cafe WHERE Id= @Compid";
            using (var connection = _context.CreateConnection())
            {
                var cafe = await connection.QuerySingleOrDefaultAsync<Cafe>(query, new { compid });
                return cafe;
            }
        }

        public async Task UpdateCompany(int id, CompanyForUpdateDto company)
        {
            var query = "UPDATE Companies SET Name = @Name, Address = @Address, Country = @Country, CafeId= @cafeid WHERE Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("Id", id, DbType.Int32);
            parameters.Add("Name", company.Name, DbType.String);
            parameters.Add("Address", company.Address, DbType.String);
            parameters.Add("Country", company.Country, DbType.String);
            parameters.Add("CafeId", company.CafeId, DbType.Int32);
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(query, parameters);
            }
        }

        //Employees > Model > Interface > Repository ( DB Calls ) >  DTO > Controllers // Basic Structure
 
        public async Task DeleteCompany(int id)
        {
            var query = "DELETE FROM Companies WHERE Id = @Id";
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(query, new { id });
            }
        }
    }
}
