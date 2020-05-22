using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularNETCore.Models;
using Microsoft.AspNetCore.Cors;
using NSwag.Annotations;

namespace AngularNETCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RondelicaItemsController : ControllerBase
    {
        private readonly RondelicaContext _context;

        public RondelicaItemsController(RondelicaContext context)
        {
            _context = context;
        }

        // GET: api/RondelicaItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RondelicaItem>>> GetRondelicaItem()
        {
            return await _context.RondelicaItem.ToListAsync();
        }

        // GET: api/RondelicaItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RondelicaItem>> GetRondelicaItem(long id)
        {
            var rondelicaItem = await _context.RondelicaItem.FindAsync(id);

            if (rondelicaItem == null)
            {
                return NotFound();
            }

            return rondelicaItem;
        }

        // PUT: api/RondelicaItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRondelicaItem(long id, RondelicaItem rondelicaItem)
        {
            if (id != rondelicaItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(rondelicaItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RondelicaItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RondelicaItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [SwaggerResponse(StatusCodes.Status201Created, typeof(RondelicaItem))]
        public async Task<ActionResult<RondelicaItem>> PostRondelicaItem(RondelicaItem rondelicaItem)
        {

            
            int premerRondelic = rondelicaItem.PolmerRondelic * 2;

            if (premerRondelic > (rondelicaItem.DolzinaTraku - (rondelicaItem.ZacetekInKonecRob * 2)) )
            {
                return BadRequest("Polmer rondelice je večji od delovne dolžine traku za izsekovanje rondelic!");
            } else if (premerRondelic > (rondelicaItem.SirinaTraku - (rondelicaItem.ZacetekInKonecRob * 2)))
            {
                return BadRequest("Polmer rondelice je večji od delovne širine traku za izsekovanje rondelic!");
            } else if (rondelicaItem.ZacetekInKonecRob > ((rondelicaItem.DolzinaTraku / 2) - premerRondelic))
            {
                return BadRequest("Začetek in konec roba traku, je prevelik da bi lahko izsekovali rondelice. Zmanjšajte polmer rondelice ali začetek in konec roba traku");
            }

            rondelicaItem.SteviloOptimalnihRondelic = IzracunStevilaRondelic.Rondelica.IzracunRondelice(
                rondelicaItem.SirinaTraku, rondelicaItem.DolzinaTraku, rondelicaItem.PolmerRondelic, rondelicaItem.RazdaljaMedRondelicama, rondelicaItem.ZgornjiInSpodnjiRob, rondelicaItem.ZacetekInKonecRob);

            if(rondelicaItem.SteviloOptimalnihRondelic < 0)
            {
                return BadRequest("Parametri niso pravilni, ne dobite pozitivnega števila");
            }

            _context.RondelicaItem.Add(rondelicaItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRondelicaItem", new { id = rondelicaItem.Id,  }, rondelicaItem);
            
        }

        // DELETE: api/RondelicaItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RondelicaItem>> DeleteRondelicaItem(long id)
        {
            var rondelicaItem = await _context.RondelicaItem.FindAsync(id);
            if (rondelicaItem == null)
            {
                return NotFound();
            }

            _context.RondelicaItem.Remove(rondelicaItem);
            await _context.SaveChangesAsync();

            return rondelicaItem;
        }

        private bool RondelicaItemExists(long id)
        {
            return _context.RondelicaItem.Any(e => e.Id == id);
        }
    }
}
