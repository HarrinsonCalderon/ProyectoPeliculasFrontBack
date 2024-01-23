using BackEnd.DTOs;
using BackEnd.Entidades;
using AutoMapper;
using System.Collections.Generic;

namespace BackEnd.Utilidades
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Genero, GeneroDTO>().ReverseMap();
            CreateMap<GeneroCreacionDTO, Genero >().ReverseMap();

            CreateMap<Actor, ActorDTO>().ReverseMap();
            CreateMap<ActorCreacionDTO, Actor>().ForMember(x=>x.Foto,options=>options.Ignore());

            CreateMap<Cine, CineDTO>().ReverseMap();
            CreateMap<CineCreacionDTO, Cine>().ReverseMap();

            CreateMap<PeliculaCreacionDTO, Pelicula>().ForMember(x=>x.Poster,opciones=>opciones.Ignore()).
                ForMember(x=>x.PeliculasGeneros,opciones=>opciones.MapFrom(MapearPeliculasGenero)).
                ForMember(x=>x.PeliculasCines,opciones=>opciones.MapFrom(MapearPeliculasCines)).
                ForMember(x => x.PeliculasActores, opciones => opciones.MapFrom(MapearPeliculasActores));
        }

        private List<PeliculasActores> MapearPeliculasActores(PeliculaCreacionDTO peliculaCreacionDTO, Pelicula pelicula)
        {
            var resultado = new List<PeliculasActores>();
            if (peliculaCreacionDTO.GenerosIds == null)
            {
                return resultado;
            }
            foreach (var actor in peliculaCreacionDTO.Actore)
            {
                resultado.Add(new PeliculasActores() { ActorId = actor.Id,Personaje =actor.Personaje});
            }
            return resultado;
        }

        private List<PeliculasGeneros> MapearPeliculasGenero(PeliculaCreacionDTO peliculaCreacionDTO,Pelicula pelicula)
        {
            var resultado=new List<PeliculasGeneros>();
            if (peliculaCreacionDTO.GenerosIds==null)
            {
                return resultado;
            }
            foreach (var id in peliculaCreacionDTO.GenerosIds)
            {
                resultado.Add(new PeliculasGeneros() { GeneroId=id});
            }
            return resultado;
        }
        private List<PeliculasCines> MapearPeliculasCines(PeliculaCreacionDTO peliculaCreacionDTO, Pelicula pelicula)
        {
            var resultado = new List<PeliculasCines>();
            if (peliculaCreacionDTO.CinesIds== null)
            {
                return resultado;
            }
            foreach (var id in peliculaCreacionDTO.CinesIds)
            {
                resultado.Add(new PeliculasCines() { CineId = id });
            }
            return resultado;
        }
    }
}
