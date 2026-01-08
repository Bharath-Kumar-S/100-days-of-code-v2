type AlbumState =
  | {
      type: "released";
      releasedate: string;
    }
  | {
      type: "recording";
      studio: string;
    }
  | {
      type: "mixing";
      engineer: string;
    };

type NotReleased = Exclude<AlbumState, { type: "released" }>;

type OnlyRecordings = Exclude<AlbumState, { type: "recording" }>;
