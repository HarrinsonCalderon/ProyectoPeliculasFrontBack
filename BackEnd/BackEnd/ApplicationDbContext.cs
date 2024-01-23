using BackEnd.Entidades;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace BackEnd
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options):base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Para hacer una llave primaria compuesta
            modelBuilder.Entity<PeliculasActores>().HasKey(x=>new { x.ActorId,x.PeliculaId});

            modelBuilder.Entity<PeliculasGeneros>().HasKey(  x=>new { x.PeliculaId,x.GeneroId});

            modelBuilder.Entity<PeliculasCines>().HasKey(x => new { x.PeliculaId, x.CineId });

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Genero>Generos { get; set; }

        public DbSet<Actor> Actores { get; set; }

        public DbSet<Cine> Cines { get; set; }

        public DbSet<Pelicula> Peliculas { get; set; }

        public DbSet<PeliculasActores> PeliculasActores { get; set; }

        public DbSet<PeliculasGeneros> PeliculasGeneros { get; set; }

        public DbSet<PeliculasCines> PeliculasCines { get; set; }

    }
}
