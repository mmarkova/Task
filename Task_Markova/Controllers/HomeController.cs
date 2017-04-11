using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Task_Markova.Models;

namespace Task_Markova.Controllers
{
    public class HomeController : Controller
    {
        private static List<Person> _persons;
        static HomeController()
        {
            _persons = new List<Person>();
        }

        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.persons = _persons;
            return View();
        }
        [HttpPost]
        //Add person to list persons
        public ActionResult ListPersons(Person person)
        {
            int idx = (_persons.Count == 0) ? 1 : ++_persons.LastOrDefault().Id;
            person.Id = idx;
            _persons.Add(person);
            return PartialView(_persons);
        }
        //used this attribute, because in task need allow user input tags values
        [ValidateInput(false)]
        [HttpPost]
        public ActionResult TextToHtml(string area_text)
        {
            return PartialView("TextToHtml", area_text);
        }



    }
}