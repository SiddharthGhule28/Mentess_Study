//using Microsoft.AspNetCore.Components;
using DapperCore_3._1.Contracts;
using DapperCore_3._1.Dto;
using DapperCore_3._1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DapperCore_3._1.Controllers
{
    [Route("api/companies")]
    [ApiController]
    public class CompaniesController: ControllerBase
    {
        private readonly ICompanyRepository _companyRepo;
        public CompaniesController(ICompanyRepository companyRepo)
        {
            _companyRepo = companyRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetCompanies()
        {
            try
            {
                var companies = await _companyRepo.GetCompanies();
                return Ok(companies);
            }catch(Exception err)
            {
                return StatusCode(500,err.Message);
            }
        }

        [HttpGet("{id}", Name = "CompanyById")]
        public async Task<IActionResult> GetCompanyById(int id)
        {
            try
            {
                var company = await _companyRepo.GetCompanyById(id);
                return Ok(company);
            }
            catch (Exception err)
            {
                return StatusCode(500, err.Message);
            }
        }

        [HttpGet("ByCompanyId/{compid}")]
        public async Task<IActionResult> GetCafeByCompanyId(int compid)
        {
            try
            {
                var cafe = await _companyRepo.GetCafeByCompanyId(compid);
                if (cafe == null)
                    return NotFound();

                return Ok(cafe);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("ByEmployeeId/{empid}")] // Implemented SP and the one to many relationship !
        public async Task<IActionResult> GetCompanyByEmployeeId(int empid)
        {
            try
            {
                var company = await _companyRepo.GetCompanyByEmployeeId(empid);
                if (company == null)
                    return NotFound();

                return Ok(company);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateCompany(CompanyToCreate company)
        {
            try
            {
                var createdCompany = await _companyRepo.CreateCompany(company);
                return CreatedAtRoute("CompanyById", new { id = createdCompany.Id }, createdCompany);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCompany(int id, CompanyForUpdateDto company)
        {
            try
            {
                var dbCompany = await _companyRepo.GetCompanyById(id);
                if (dbCompany == null)
                    return NotFound();
                await _companyRepo.UpdateCompany(id, company);
                return NoContent();
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            try
            {
                var dbCompany = await _companyRepo.GetCompanyById(id);
                if (dbCompany == null)
                    return NotFound();
                await _companyRepo.DeleteCompany(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }
    }
}
