using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDTO
    {
        [Required]
        public string Username { get; set; }
        
        [StringLength(10,MinimumLength=4,ErrorMessage="must specify password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}