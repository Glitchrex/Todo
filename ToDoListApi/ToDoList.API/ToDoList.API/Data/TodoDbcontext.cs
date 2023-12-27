using Microsoft.EntityFrameworkCore;
using ToDoList.API.Models;

namespace ToDoList.API.Data
{
    public class TodoDbcontext: DbContext
    {
        public TodoDbcontext(DbContextOptions options) : base(options) { }
        public DbSet<Todo> Todos { get; set; }
    }
}
