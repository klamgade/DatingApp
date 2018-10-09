using System.Threading.Tasks;
using DatingApp.API.Data.IRepositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IDatingRepository _datingRepo;

        public UserController(IDatingRepository repo)
        {
            _datingRepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers() 
        {
            var users = await _datingRepo.GetUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _datingRepo.GetUser(id);
            return Ok(user);
        }
    }
}