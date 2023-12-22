using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackEnd.Entidades.Repositorios
{
    public interface IRepositorio
    {
        List<Genero> ObtenerTodosLosGeneros();

        Task<Genero> ObtenerPorId(int Id);
    }
}
