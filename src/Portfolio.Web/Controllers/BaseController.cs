using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using Portfolio.Services;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using AutoMapper;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio.Web.Controllers
{
    /// <summary>
    /// Base Controller
    /// </summary>
    /// <typeparam name="TEnityIn">Domain Model</typeparam>
    /// <typeparam name="TEntityOut">View Model</typeparam>
    [Route("api/[controller]")]
    public abstract class BaseController<TEnityIn,TEntityOut> : Controller where TEnityIn : IEntity where TEntityOut : class
    {
        private readonly IBaseService<TEnityIn> _baseService;
        private readonly ILogger<IBaseService<TEnityIn>> _logger;

        public BaseController(IBaseService<TEnityIn> baseService, ILogger<IBaseService<TEnityIn>> logger)
        {
            _baseService = baseService;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<TEntityOut> Get()
        {            
            return Mapper.Map<List<TEnityIn>, List<TEntityOut>>(_baseService.Get());
        }       

        // GET api/values/5
        [HttpGet("{id}")]
        public TEntityOut Get(string id)
        {
            if (id == null)
                throw new ArgumentNullException("Id value cannot be null");

            var result = _baseService.GetBy(l => l.Id == new ObjectId(id)).FirstOrDefault();

            return Mapper.Map<TEnityIn, TEntityOut>(result);
        }
        
        // POST api/values
        [HttpPost]
        public void Post([FromBody]TEntityOut value)
        {
            if (value == null)
                throw new ArgumentNullException("Form value can not be null");

            _baseService.Create(Mapper.Map<TEntityOut, TEnityIn>(value));
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]TEntityOut value)
        {
            if (value == null)
                throw new ArgumentNullException("Form value can not be null");

            _baseService.Update(new ObjectId(id), Mapper.Map<TEntityOut, TEnityIn>(value));
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            if (id == null)
                throw new ArgumentNullException("Id value cannot be null");

            _baseService.Delete(new ObjectId(id));
        }
    }
}
