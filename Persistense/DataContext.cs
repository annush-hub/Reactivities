using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistense
{
    public  class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) 
        { 

        }

        public DbSet<Activity> Activities { get; set; }
    }
}
