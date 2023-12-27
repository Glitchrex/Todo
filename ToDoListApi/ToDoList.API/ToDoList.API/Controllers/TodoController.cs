using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.API.Data;
using ToDoList.API.Models;

namespace ToDoList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoDbcontext _todoDbContext;

        public TodoController(TodoDbcontext todoDbContext)
        {
            _todoDbContext = todoDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTodos()
        {
            var todos = await _todoDbContext.Todos.ToListAsync();

            return Ok(todos);
        }

        [HttpPost]
        public async Task<IActionResult> AddTodo(Todo todo)
        {
            todo.Id = Guid.NewGuid();
            _todoDbContext.Todos.Add(todo);
            await _todoDbContext.SaveChangesAsync();

            return Ok(todo);
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateToDo([FromRoute] Guid id)
        {
            var todo = await _todoDbContext.Todos.FindAsync(id);
            todo.Status = "Complete";
            await _todoDbContext.SaveChangesAsync();


            return Ok(todo);
        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteToDo([FromRoute] Guid id)
        {
            var task = await _todoDbContext.Todos.FindAsync(id);
            if (task==null)
            {
                return NotFound();
            }
            _todoDbContext.Todos.Remove(task);
            await _todoDbContext.SaveChangesAsync();

            return Ok(task);
        }

    }
}
