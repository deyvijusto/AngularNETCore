using System;
using System.ComponentModel.DataAnnotations;

public class Rondelica
{
	[Required]
	public int SirinaTraku { get; set; }

	[Required]
	public int DolzinaTraku { get; set; }

	[Required]
	public int PolmerRondelic { get; set; }

  [Required]
  public int ZgornjiInSpodnjiRob { get; set; }

  [Required]
  public int ZacetekInKonecRob { get; set; }
}