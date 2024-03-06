namespace SmashGames.Server.Models
{
    public class Meta
    {
        public int MetaID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<Game> Games { get; set; }
    }
}
