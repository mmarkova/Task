using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Task_Markova.Models
{
    public class Person
    {
        public int Id { get; set; }
        [DisplayName("Person name: ")]
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        [DisplayName("Person surname: ")]
        [Required(ErrorMessage = "Surname is required")]
        public string Surname { get; set; }
        [DisplayName("Person age: ")]
        [Required(ErrorMessage = "Age is required")]
        [Range(1, 100, ErrorMessage = "Age must be between 1 and 100")]
        public int Age { get; set; }
        [DisplayName("Persons profession: ")]
        public string Profession { get; set; }
    }
}