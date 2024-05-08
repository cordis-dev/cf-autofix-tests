using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutofixTests
{
    internal class CATestClass
    {
        public static string GetNameToCheck(string input)
        {
            if (input.Contains('\\', StringComparison.Ordinal))
            {
                return input.Substring(0, input.IndexOf("\\", StringComparison.Ordinal));
            }

            return Path.GetFileNameWithoutExtension(input);
        }
    }
}
