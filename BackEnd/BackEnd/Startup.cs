using BackEnd.Entidades.Repositorios;
using BackEnd.Utilidades;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //para mapear las entidades a DTOs
            services.AddAutoMapper(typeof(Startup));

            //para el cargue de archivos local
            services.AddTransient<IAlmacenadorArchivos,AlmacenadorArchivosLocal>();
            services.AddHttpContextAccessor();

            //db tablas
            services.AddDbContext<ApplicationDbContext>(options=>options.UseSqlServer(Configuration.GetConnectionString("defaultConnection")));

            //permisos de cors
            services.AddCors(options =>
            {
                var frontEndUrl = Configuration.GetValue<string>("frontEndUrl");
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins(frontEndUrl).AllowAnyMethod().AllowAnyHeader();
                });
            });

            services.AddTransient<IRepositorio,RepositorioEnMeMoria>();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "BackEnd", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "BackEnd v1"));
            }

            app.UseHttpsRedirection();

            //para almacenar archivos localmente
            app.UseStaticFiles();

            app.UseRouting();

            //configurando cors
            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
