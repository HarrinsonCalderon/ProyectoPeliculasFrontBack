using System;

namespace BackEnd.DTOs
{
    public class RespuestasAutenticacion
    {
        public string Token { get; set; }

        public DateTime Expiracion { get; set; }
    }
}
