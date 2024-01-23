namespace BackEnd.Entidades
{
    public class PeliculasActores
    {

        // tabla de n a m de actores && pelicula
        public int PeliculaId { get; set; }
        public int ActorId { get; set; }

        public Pelicula Pelicula { get; set; }

        public Actor Actor { get; set; }    

        public string Personaje { get; set; }

        public int Orden { get; set; } 


    }
}
