using System.ComponentModel.DataAnnotations;

namespace BackEnd.Entidades
{
    public class Genero
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="El campo {0} es requerido")]
        [StringLength(maximumLength:50,MinimumLength =3)]
        
        public string Nombre { get; set; }
    }

}
