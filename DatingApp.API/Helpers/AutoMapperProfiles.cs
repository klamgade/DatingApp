using AutoMapper;
using DatingApp.API.DTOs;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UsersForListDTO>();
            CreateMap<User, UserForDetailedDTO>();
            CreateMap<Photo, PhotosForDetailedDTO>();
        }
    }
}