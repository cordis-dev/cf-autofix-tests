using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace CF.Tests;

public static class SampleHash
{
    public static string GenerateSHA256Hash(string text)
   {
         byte[] data = Encoding.GetEncoding(1252).GetBytes(text);
         byte[] hash;
         using (SHA256 mySha256 = SHA256.Create())
			hash = mySha256.ComputeHash(data);
         return Convert.ToHexString(hash);
   }
}
