using System.ComponentModel.DataAnnotations;

namespace BackEnd.DTOs
{
    public class GeneroCreacionDTO
    {
        
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 10, ErrorMessage = "El campo {0} debe tener 10 maximo de longitud")]

        public string Nombre { get; set; }
    }
}
