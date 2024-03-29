﻿using AutoMapper;
using BackEnd.DTOs;
using BackEnd.Entidades;
using BackEnd.Migrations;
using BackEnd.Utilidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/actores")]
    [ApiController]
    public class ActoresController :ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IAlmacenadorArchivos almacenadorArchivos;
        private readonly string contenedor = "actores";

        public ActoresController(ApplicationDbContext context, IMapper mapper, IAlmacenadorArchivos almacenadorArchivos) {
            this.context = context;
            this.mapper = mapper;
            this.almacenadorArchivos = almacenadorArchivos;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes=JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult> Post([FromForm] ActorCreacionDTO actorCreacionDTO) {
            var actor = mapper.Map<Actor>(actorCreacionDTO);




            if (actorCreacionDTO.Foto!=null) {
               actor.Foto= await almacenadorArchivos.GuardarArchivo(contenedor,actorCreacionDTO.Foto);
            }

            context.Add(actor);
            await context.SaveChangesAsync();
            return NoContent(); 
        }

        [HttpGet]
        public async Task<ActionResult<List<ActorDTO>>> Get()
        {
            var actores = await context.Actores.ToListAsync();
             
            return mapper.Map<List<ActorDTO>>(actores);

        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ActorDTO>> Get(int id)
        {
            var actor = await context.Actores.FirstOrDefaultAsync(x => x.Id == id);
            if (actor == null) return NotFound();
            return mapper.Map<ActorDTO>(actor);

        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int Id, [FromForm] ActorCreacionDTO actorCreacionDTO)
        {
            var actor = await context.Actores.FirstOrDefaultAsync(x => x.Id == Id);
            if (actor == null) return NotFound();

            actor = mapper.Map(actorCreacionDTO, actor);

            if (actorCreacionDTO.Foto != null)
            {
                actor.Foto = await almacenadorArchivos.EditarArchivo(contenedor,actorCreacionDTO.Foto,actor.Foto);
            }

            await context.SaveChangesAsync();
            return NoContent();

        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Actores.FirstOrDefaultAsync(x => x.Id == id);
            if (existe==null) return NotFound();
            context.Remove(existe);

            await almacenadorArchivos.BorrarArchivo(existe.Foto,contenedor);

            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
