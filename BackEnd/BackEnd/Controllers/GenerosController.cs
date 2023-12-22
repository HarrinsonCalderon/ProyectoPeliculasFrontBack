using BackEnd.Entidades;
using BackEnd.Entidades.Repositorios;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace BackEnd.Controllers
{
    [Route("api/generos")]
    public class GenerosController:ControllerBase
    {
        private readonly ApplicationDbContext context;

        public GenerosController(ApplicationDbContext context) {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Genero>>> Get()
        {
            return await context.Generos.ToListAsync(); 
           
        }
        ////[HttpGet("Ejemplo")]
        //[HttpGet("{Id}")]
        //public ActionResult<Genero> Get(int Id)
        //{
        //    var genero = repositorio.ObtenerPorId(Id);
        //    if (genero==null)
        //    {
        //        return NotFound();
        //    }
        //    return genero;
        //}

        
        //[HttpGet("{Id:int}")]
        //public  async Task<ActionResult<Genero>> Get(int Id )
        //{
           

            
            
        //}

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Genero genero) { 
            context.Add(genero);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut]
        public void Put()
        {

        }
        [HttpDelete]
        public void Delete()
        {

        }

    }
}
