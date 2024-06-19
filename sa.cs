using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutofixTests
{
    internal class MixedTypes
    {
	public bool Enabled
	{
	    get
	    {
	
	        return true;
	    }
	}

        public static void Test()
        {
            int pid = Environment.ProcessId;
        }
		
    }
}
