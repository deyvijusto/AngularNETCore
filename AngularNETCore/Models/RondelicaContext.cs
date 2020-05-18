using Microsoft.EntityFrameworkCore;


namespace AngularNETCore.Models
{
    public class RondelicaContext : DbContext
    {
        public RondelicaContext(DbContextOptions<RondelicaContext> options)
            : base(options)
        {
        }

        public DbSet<RondelicaItem> RondelicaItem { get; set; }
    }
}
