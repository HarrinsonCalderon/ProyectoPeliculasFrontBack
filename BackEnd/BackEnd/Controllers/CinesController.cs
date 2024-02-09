using AutoMapper;
using BackEnd.DTOs;
using BackEnd.Entidades;
using BackEnd.Utilidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CinesController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IAlmacenadorArchivos almacenadorArchivos;
        private readonly UserManager<IdentityUser> userManager;

        public CinesController(ApplicationDbContext context, IMapper mapper, IAlmacenadorArchivos almacenadorArchivos,UserManager<IdentityUser> userManager) {
            this.context = context;
            this.mapper = mapper;
            this.almacenadorArchivos = almacenadorArchivos;
            this.userManager = userManager;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)] //solo usuario autenticados pueden acceder aqui
        public async Task<ActionResult> Post([FromBody] CineCreacionDTO cineCreacionDTO) {

            //usando el token, puedo usar el email de la persona para validar cosas
            
            var email = HttpContext.User.Claims.FirstOrDefault(x=>x.Type=="email").Value;
            var usuario=await userManager.FindByEmailAsync(email);

            var cine=mapper.Map<Cine>(cineCreacionDTO);
            context.Add(cine);
            await context.SaveChangesAsync();
            return  NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<List<CineDTO>>> Get()
        {
            var cines = await context.Cines.ToListAsync();

            return mapper.Map<List<CineDTO>>(cines);

        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<CineDTO>> Get(int id)
        {
            var cine = await context.Cines.FirstOrDefaultAsync(x => x.Id == id);
            if (cine == null) return NotFound();
            return mapper.Map<CineDTO>(cine);

        }


        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] CineCreacionDTO cineCreacionDTO)
        {
            var cine = await context.Cines.FirstOrDefaultAsync(x => x.Id == Id);
            if (cine == null) return NotFound();

            cine = mapper.Map(cineCreacionDTO, cine);

            await context.SaveChangesAsync();
            return NoContent();

        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Cines.FirstOrDefaultAsync(x => x.Id == id);
            if (existe == null) return NotFound();
            context.Remove(existe);

            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
