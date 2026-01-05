type Album = {
  title: string;
  artist: string;
  releaseYear?: number;
  genre?: {
    parentGenre?: string;
    subGenre?: string;
  };
};

type AlbumData = Pick<Album, "title" | "artist">;

type AlbumReleaseYear = Omit<Album, "genre" | "artist">;

const albumData: AlbumData = {
  artist: "fgertg",
  title: "fvrfvfrvvf",
};

const albumReleaseYear: AlbumReleaseYear = {
  title: "efwg",
  releaseYear: 43546,
};
