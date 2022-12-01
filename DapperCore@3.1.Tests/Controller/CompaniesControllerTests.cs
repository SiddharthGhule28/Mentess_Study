using DapperCore_3._1.Contracts;
using DapperCore_3._1.Controllers;
using DapperCore_3._1.Dto;
using DapperCore_3._1.Models;
using DapperCore_3._1.Repository;
using FakeItEasy;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using static Azure.Core.HttpHeader;

namespace DapperCore_3._1.Tests.Controller
{
    public class CompaniesControllerTests
    {
        private readonly ICompanyRepository _companyRepo;
        
        public CompaniesControllerTests()
        {
            _companyRepo = A.Fake<ICompanyRepository>();
        }
        [Fact]
        public void CompaniesController_GetCompanies_ReturnCompany()
        {
            //arrange
            var companies = A.Fake<ICollection<CompanyForUpdateDto>>();
            var controller = new CompaniesController(_companyRepo);
            //act
            var result = controller.GetCompanies();
            //assert
            result.Should().NotBeNull();

        }

        [Fact]

        public void CompaniesController_CreateCompany_ReturnOk()
        {
            //arrange 
            var company = A.Fake<Company>();
            var companyCreate = A.Fake<CompanyToCreate>();
            var companies = A.Fake<ICollection<CompanyToCreate>>();
            var companyList=A.Fake<IList<CompanyToCreate>>();
            A.CallTo(()=>_companyRepo.CreateCompany(companyCreate)).Returns(company);
            var controller = new CompaniesController(_companyRepo);
            //act
            var result=controller.CreateCompany(companyCreate);
            //assert
            result.Should().NotBeNull();
        }
        [Fact]
        public void CompaniesController_UpdateCompany_ReturnOk()
        {

        }
    }
}
