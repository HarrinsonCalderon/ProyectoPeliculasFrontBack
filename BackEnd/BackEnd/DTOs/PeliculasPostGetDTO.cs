using System.Collections.Generic;

namespace BackEnd.DTOs
{
    public class PeliculasPostGetDTO
    {
        public List<GeneroDTO> Generos { get; set; }
        public List<CineDTO> Cines { get; set; }    
    }
}
