using FarmTest.Api.Interfaces;
using FarmTest.Api.Models;
using FarmTest.Api.Storage;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmTest.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("AllowAll")]
    public class AnimalsController : ControllerBase
    {
        private readonly ILogger<AnimalsController> _logger;
        private readonly IStorage<Animal> _storage;

        public AnimalsController(ILogger<AnimalsController> logger, IStorage<Animal> storage)
        {
            _logger = logger;
            _storage = storage;
        }

        [HttpGet]
        public IEnumerable<Animal> Get()
        {
            return _storage.Get();
        }

        [HttpPost]
        public IActionResult Post(Animal animal)
        {
            try
            {
                return Ok(_storage.Add(animal));
            }
            catch(Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

        [HttpPut]
        public IActionResult Put(Animal animal)
        {
            try
            {
                return Ok(_storage.Update(animal));
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            _storage.Delete(id);

            return Ok();
        }
    }
}
