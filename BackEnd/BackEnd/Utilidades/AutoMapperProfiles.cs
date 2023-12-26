using BackEnd.DTOs;
using BackEnd.Entidades;
using AutoMapper;
namespace BackEnd.Utilidades
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Genero, GeneroDTO>().ReverseMap();
            CreateMap<GeneroCreacionDTO, Genero >().ReverseMap();
        }
    }
}
