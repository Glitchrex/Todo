using Microsoft.VisualBasic;

namespace ToDoList.API.Models
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string TaskName { get; set; }
        public string Status { get; set; }
        public DateTime? DueDate { get; set;}
    }
}
