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

        public DbSet<Genero>Generos { get; set; }

        public DbSet<Actor> Actores { get; set; }

    }
}
