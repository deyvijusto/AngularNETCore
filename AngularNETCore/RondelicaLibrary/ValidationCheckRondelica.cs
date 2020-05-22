using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularNETCore.RondelicaLibrary
{
    public class ValidationCheckRondelica

    {

        public static bool ValidateInput(RondelicaItem rondelica)
        {
            return ValidatePolmer(rondelica);
        }

        private static bool ValidatePolmer(RondelicaItem rondelica)
        {
            if (rondelica.PolmerRondelic > rondelica.DolzinaTraku)
            {
                return false;
            }
            else
            {
                return true;
            }
        }


    }
}
