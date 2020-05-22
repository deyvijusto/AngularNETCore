namespace AngularNETCore
{
    public class AlgoritemRondelice
    {

        public static int IzracunRondelice(int sirinaTraka, int dolzinaTraka, int polmerRondelice,int razdaljaMedRondelicama, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int premerRondelice = (polmerRondelice * 2);
            int obdelovalnaPovrsina = DejanskaObdelovalnaPovrsina(sirinaTraka, dolzinaTraka, zgornjiInSpodnjiRob, zacetekInKonecRoba);
            return IzracunSteviloRondelic(obdelovalnaPovrsina, polmerRondelice, razdaljaMedRondelicama);
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
            int ploscinaRobov = 2 * ploscinaZgornjiInSpodnjiRob + 2 * ploscinaZacetekInKonecRob;
            return ploscinaRobov;
        }

        public static int DejanskaObdelovalnaPovrsina(int sirinaTraka, int dolzinaTraka, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int obdelovalnaPovrsina = CelotnaPloscinaTrak(sirinaTraka, dolzinaTraka) - PloscinaRobov(sirinaTraka, dolzinaTraka, zgornjiInSpodnjiRob, zacetekInKonecRoba);
            return obdelovalnaPovrsina;
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
