using DapperCore_3._1.Dto;
using DapperCore_3._1.Models;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DapperCore_3._1.Contracts
{
    public interface ICompanyRepository
    {
        public Task<IEnumerable<Company>> GetCompanies();
        public Task<Company> GetCompanyById(int id);
        public Task<Company> CreateCompany(CompanyToCreate company);
        public Task<Company> GetCompanyByEmployeeId(int empid);
        public Task<Cafe> GetCafeByCompanyId(int compid);
        public Task UpdateCompany(int id, CompanyForUpdateDto company);
        public Task DeleteCompany(int id);
    }
}
