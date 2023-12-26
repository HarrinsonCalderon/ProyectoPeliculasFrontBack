using AutoMapper;
using BackEnd.DTOs;
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
        private readonly IMapper mapper;

        public GenerosController(ApplicationDbContext context, IMapper mapper) {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<GeneroDTO>>> Get()
        {
            var generos= await context.Generos.ToListAsync(); 
            //mapeando generos a generosdt utiliando la libreria automaper
            return mapper.Map<List<GeneroDTO>>(generos);
           
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<GeneroDTO>> Get(int Id)
        {
            var genero = await context.Generos.FirstOrDefaultAsync(x=>x.Id==Id);
            if(genero==null) return NotFound(); 
            return mapper.Map<GeneroDTO>(genero);

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
        public async Task<ActionResult> Post([FromBody] GeneroCreacionDTO generoCreacionDTO) { 
            var genero= mapper.Map<Genero>(generoCreacionDTO);
            context.Add(genero);    
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            var genero = await context.Generos.FirstOrDefaultAsync(x => x.Id == Id);
            if (genero == null) return NotFound();

            genero = mapper.Map(generoCreacionDTO,genero);
            await context.SaveChangesAsync();
            return NoContent();

        }
        [HttpDelete]
        public void Delete()
        {

        }

    }
}
