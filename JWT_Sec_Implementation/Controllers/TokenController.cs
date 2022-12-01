using JWT_Sec_Implementation.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System;
using Microsoft.EntityFrameworkCore;

namespace JWT_Sec_Implementation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly JWTContext _context;

        public TokenController(IConfiguration config, JWTContext context)
        {
            _configuration = config;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post(UserInfo _userData)
        {

            if (_userData != null && _userData.Email != null && _userData.Password != null)
            {
                var user = await GetUser(_userData.Email, _userData.Password);

                if (user != null)
                {
                    //create claims details based on the user information
                    var claims = new[] {
                    new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                    new Claim("Id", user.UserId.ToString()),
                    new Claim("FirstName", user.FirstName),
                    new Claim("LastName", user.LastName),
                    new Claim("UserName", user.UserName),
                    new Claim("Email", user.Email)
                   };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));

                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }

        private async Task<UserInfo> GetUser(string email, string password)
        {
            return await _context.UserInfo.FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
        }

        //JWT Generated
        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RBY2Vzc1Rva2VuIiwianRpIjoiMjVjYjIxYWQtYWQ4MC00OTc0LThjZjUtNmE0ZDI2NWE1MWFkIiwiaWF0IjoiMTEvMjMvMjAyMiA4OjQ3OjQ4IEFNIiwiSWQiOiIxIiwiRmlyc3ROYW1lIjoiSW52ZW50b3J5IiwiTGFzdE5hbWUiOiJBZG1pbiIsIlVzZXJOYW1lIjoiSW52ZW50b3J5QWRtaW4iLCJFbWFpbCI6IkludmVudG9yeUFkbWluQGFiYy5jb20iLCJleHAiOjE2NjkyNzk2NjgsImlzcyI6IkpXVEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUU2VydmljZVBvc3RtYW5DbGllbnQifQ._To2UL3Tr9EtRqHv2fb_SXyQgmnr9vUPsAtzpoBM0es
    }
}
