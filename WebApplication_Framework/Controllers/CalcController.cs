using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using standardclass_lib;


namespace WebApplication_Framework.Controllers
{
    public class CalcController : ApiController
    {
        [HttpGet]
        public int Get()
        {
            return new standardclass_lib.Class1().add(2,3);


        }
    }
}
