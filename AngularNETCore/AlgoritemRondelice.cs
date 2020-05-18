using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularNETCore
{
    public class AlgoritemRondelice
    {

        public int izracunRondelice(int sirinaTraka, int dolzinaTraka, int polmerRondelice, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int ploscina = CelotnaPloscinaTrak(sirinaTraka, dolzinaTraka);
            int ploscinaRobov = PloscinaRobov(sirinaTraka, dolzinaTraka, zgornjiInSpodnjiRob, zacetekInKonecRoba);
            int obdelovalnaPovrsina = DejanskaObdelovalnaPovrsina(ploscina, ploscinaRobov);

            int steviloRondelic = IzracunSteviloRondelic(obdelovalnaPovrsina, polmerRondelice);
            return steviloRondelic;
        }

        public int DejanskaObdelovalnaPovrsina(int celotnaPloscina, int ploscinaRobov)
        {
            int obdelovalnaPovrsina = celotnaPloscina - ploscinaRobov;
            return obdelovalnaPovrsina;
        }

        public int CelotnaPloscinaTrak(int sirinaTraka, int dolzinaTraka) {
            int ploscina = sirinaTraka * dolzinaTraka;
            return ploscina;
        }
        public int PloscinaRobov(int sirinaTraka, int dolzinaTraka, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int ploscinaZgornjiInSpodnjiRob = 2 * (zgornjiInSpodnjiRob * dolzinaTraka);
            int sirinaTrakaBrezRoba = sirinaTraka - (2 * zgornjiInSpodnjiRob);
            int ploscinaZacetekInKonecRob = 2 * sirinaTrakaBrezRoba;
            int ploscinaRobov = 2* ploscinaZgornjiInSpodnjiRob + 2*ploscinaZacetekInKonecRob;
            return ploscinaRobov;
        }
        public int IzracunSteviloRondelic(int obdelovalnaPovrsina, int polmerRondelice)
        {
            int steviloRondelic = obdelovalnaPovrsina / polmerRondelice;
            return steviloRondelic;
        }
    }
}
