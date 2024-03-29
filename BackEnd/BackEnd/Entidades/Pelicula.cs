﻿using System;
using System.Collections.Generic;

namespace BackEnd.Entidades
{
    public class Pelicula
    {

        public int Id { get; set; }
        public string Titulo { get; set; }

        public string Resumen { get; set; }

        public string Trailer { get; set; }

        public bool EnCines { get; set; }

        public DateTime FechaLanzamiento { get; set; }

        public string Poster { get; set; }

        //Para poder hacer los saltos a estas tablas
        public List<PeliculasActores> PeliculasActores { get; set; }
        public List<PeliculasGeneros> PeliculasGeneros { get; set; }
        public List<PeliculasCines> PeliculasCines { get; set; }

    }
}
