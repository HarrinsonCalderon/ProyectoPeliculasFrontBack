using System.ComponentModel.DataAnnotations;

namespace BackEnd.DTOs
{
    public class CineCreacionDTO
    {
        

        [Required]
        [StringLength(maximumLength: 75)]
        public string Nombre { get; set; }


    }
}
