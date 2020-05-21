using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularNETCore
{
    public class AlgoritemRondelice
    {

        public static int IzracunRondelice(int sirinaTraka, int dolzinaTraka, int polmerRondelice,int razdaljaMedRondelicama, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int ploscina = CelotnaPloscinaTrak(sirinaTraka, dolzinaTraka);
            int ploscinaRobov = PloscinaRobov(sirinaTraka, dolzinaTraka, zgornjiInSpodnjiRob, zacetekInKonecRoba);
            int obdelovalnaPovrsina = DejanskaObdelovalnaPovrsina(ploscina, ploscinaRobov);

            int steviloRondelic = IzracunSteviloRondelic(obdelovalnaPovrsina, polmerRondelice, razdaljaMedRondelicama);
            return steviloRondelic;
        }

        public static int DejanskaObdelovalnaPovrsina(int celotnaPloscina, int ploscinaRobov)
        {
            int obdelovalnaPovrsina = celotnaPloscina - ploscinaRobov;
            return obdelovalnaPovrsina;
        }

        public static int CelotnaPloscinaTrak(int sirinaTraka, int dolzinaTraka) {
            int ploscina = sirinaTraka * dolzinaTraka;
            return ploscina;
        }
        public static int PloscinaRobov(int sirinaTraka, int dolzinaTraka, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int ploscinaZgornjiInSpodnjiRob = 2 * (zgornjiInSpodnjiRob * dolzinaTraka);
            int sirinaTrakaBrezRoba = sirinaTraka - (2 * zgornjiInSpodnjiRob);
            int ploscinaZacetekInKonecRob = 2 * sirinaTrakaBrezRoba;
            int ploscinaRobov = 2* ploscinaZgornjiInSpodnjiRob + 2*ploscinaZacetekInKonecRob;
            return ploscinaRobov;
        }
        public static int IzracunSteviloRondelic(int obdelovalnaPovrsina, int polmerRondelice, int razdaljaMedRondelicama)
        {
            int straniRondelice = polmerRondelice + (razdaljaMedRondelicama / 2);
            int kvadratRondelica = straniRondelice * straniRondelice;
            int steviloRondelic = obdelovalnaPovrsina / kvadratRondelica;
            return steviloRondelic;
        }
    }
}
