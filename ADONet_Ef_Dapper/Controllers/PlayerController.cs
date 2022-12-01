using ADONet_Ef_Dapper.Reposistories;
using ADONet_Ef_Dapper.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ADONet_Ef_Dapper.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : Controller
    {
        private readonly PlayerRepository _playersRepository;

        public PlayerController(IConfiguration configuration)
        {
        
            _playersRepository = new PlayerRepository(configuration);
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_playersRepository.Get());
        }


        [HttpPost]
        public IActionResult Post(Player player)
        {
            return Ok(_playersRepository.Create(player));
        }

        [HttpPost]

        [Route("createusingsp")]
        public IActionResult PostUsingSP(Player player )
        {
            return Ok(_playersRepository.CreateUsingStoredProcedure(player));
        }
        [HttpPut]
        public IActionResult Put([FromBody] Player player, int id)
        {
            
            return Ok(_playersRepository.Update(player, id));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            return Ok(_playersRepository.Delete(id));
        }
    }
}
