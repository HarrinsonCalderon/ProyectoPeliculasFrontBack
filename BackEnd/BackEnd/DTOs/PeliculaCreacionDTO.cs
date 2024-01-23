using BackEnd.Entidades;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Utilidades;

namespace BackEnd.DTOs
{
    public class PeliculaCreacionDTO
    {
        [Required]
        [StringLength(maximumLength:300)]
        public string Titulo { get; set; }

        public string Resumen { get; set; }

        public string Trailer { get; set; }

        public bool EnCines { get; set; }

        public DateTime FechaLanzamiento { get; set; }

        public IFormFile Poster { get; set; }
        //Para recibir un listado a partir de fromForm
        [ModelBinder(BinderType =typeof(TypeBinder<List<int>>))]
        public List<int> GenerosIds { get; set; }

        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> CinesIds { get; set; }

        public List<ActorPeliculaCreacionDTO> Actore { get; set; }  

        //Para poder hacer los saltos a estas tablas
        //public List<PeliculasActores> PeliculasActores { get; set; }
        //public List<PeliculasGeneros> PeliculasGeneros { get; set; }
        //public List<PeliculasCines> PeliculasCines { get; set; }
    }
}
