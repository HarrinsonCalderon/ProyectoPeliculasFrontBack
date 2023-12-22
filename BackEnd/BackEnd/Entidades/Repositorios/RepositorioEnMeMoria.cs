using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Entidades.Repositorios
{
    public class RepositorioEnMeMoria:IRepositorio
    {
        private List<Genero> _generos;

        public RepositorioEnMeMoria()
        {
            _generos = new List<Genero> { 
                new Genero {Id=1,Nombre="Comedia"},
                new Genero {Id=2,Nombre="Accion"},
            };
        }
        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }
        public async Task<Genero> ObtenerPorId(int Id) 
        { 
            await Task.Delay(1000);
            return _generos.FirstOrDefault(o => o.Id == Id);
        }
    }
}
