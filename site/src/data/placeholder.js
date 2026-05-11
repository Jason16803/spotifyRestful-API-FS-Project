// ============================================================
// St. Song — Placeholder / filler data for UI scaffolding
// No real Spotify data. Replace with API responses in Week 2+
// ============================================================

export const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #fd746c 0%, #ff9068 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
  'linear-gradient(135deg, #1DB954 0%, #004225 100%)',
  'linear-gradient(135deg, #e96c6c 0%, #a11f1f 100%)',
  'linear-gradient(135deg, #6a85b6 0%, #bac8e0 100%)',
];

export const TRENDING_ARTISTS = [
  { id: 1, name: 'Neon Vega',       genre: 'Synthwave',     followers: '4.2M', gradient: GRADIENTS[0]  },
  { id: 2, name: 'Solara',          genre: 'R&B / Soul',    followers: '9.8M', gradient: GRADIENTS[1]  },
  { id: 3, name: 'The Pale Echoes', genre: 'Indie Rock',    followers: '2.1M', gradient: GRADIENTS[2]  },
  { id: 4, name: 'Dusk Radio',      genre: 'Lo-fi Hip Hop', followers: '6.3M', gradient: GRADIENTS[3]  },
  { id: 5, name: 'Mara Voss',       genre: 'Alt Pop',       followers: '1.7M', gradient: GRADIENTS[4]  },
  { id: 6, name: 'Coral Drift',     genre: 'Dream Pop',     followers: '3.5M', gradient: GRADIENTS[5]  },
];

export const POPULAR_ALBUMS = [
  { id: 1, title: 'Ultraviolet',      artist: 'Neon Vega',       year: 2024, tracks: 12, gradient: GRADIENTS[6]  },
  { id: 2, title: 'Satin Hours',      artist: 'Solara',          year: 2025, tracks: 10, gradient: GRADIENTS[7]  },
  { id: 3, title: 'Glass Meridian',   artist: 'The Pale Echoes', year: 2024, tracks: 14, gradient: GRADIENTS[8]  },
  { id: 4, title: 'Midnite Cassette', artist: 'Dusk Radio',      year: 2025, tracks: 8,  gradient: GRADIENTS[9]  },
  { id: 5, title: 'Bloom Season',     artist: 'Mara Voss',       year: 2024, tracks: 11, gradient: GRADIENTS[10] },
  { id: 6, title: 'Sea of Static',    artist: 'Coral Drift',     year: 2025, tracks: 9,  gradient: GRADIENTS[11] },
];

export const RECENTLY_PLAYED = [
  { id: 1, title: 'Phosphene',      artist: 'Neon Vega',       duration: '3:42', gradient: GRADIENTS[2]  },
  { id: 2, title: 'Golden Hour II', artist: 'Solara',          duration: '4:11', gradient: GRADIENTS[4]  },
  { id: 3, title: 'Quiet Storm',    artist: 'Dusk Radio',      duration: '2:58', gradient: GRADIENTS[7]  },
  { id: 4, title: 'Iris Protocol',  artist: 'The Pale Echoes', duration: '5:03', gradient: GRADIENTS[1]  },
  { id: 5, title: 'Paper Crane',    artist: 'Mara Voss',       duration: '3:27', gradient: GRADIENTS[9]  },
  { id: 6, title: 'Tidal Memory',   artist: 'Coral Drift',     duration: '4:44', gradient: GRADIENTS[0]  },
];

export const SAVED_SONGS = [
  { id: 1, title: 'Phosphene',       artist: 'Neon Vega',       album: 'Ultraviolet',      duration: '3:42', gradient: GRADIENTS[2]  },
  { id: 2, title: 'Golden Hour II',  artist: 'Solara',          album: 'Satin Hours',      duration: '4:11', gradient: GRADIENTS[4]  },
  { id: 3, title: 'Quiet Storm',     artist: 'Dusk Radio',      album: 'Midnite Cassette', duration: '2:58', gradient: GRADIENTS[7]  },
  { id: 4, title: 'Iris Protocol',   artist: 'The Pale Echoes', album: 'Glass Meridian',   duration: '5:03', gradient: GRADIENTS[1]  },
  { id: 5, title: 'Paper Crane',     artist: 'Mara Voss',       album: 'Bloom Season',     duration: '3:27', gradient: GRADIENTS[9]  },
  { id: 6, title: 'Tidal Memory',    artist: 'Coral Drift',     album: 'Sea of Static',    duration: '4:44', gradient: GRADIENTS[0]  },
  { id: 7, title: 'Neon Cathedral',  artist: 'Neon Vega',       album: 'Ultraviolet',      duration: '4:29', gradient: GRADIENTS[6]  },
  { id: 8, title: 'Velvet Collapse', artist: 'Solara',          album: 'Satin Hours',      duration: '3:55', gradient: GRADIENTS[11] },
];

export const SAVED_ALBUMS = [
  { id: 1, title: 'Ultraviolet',      artist: 'Neon Vega',       year: 2024, tracks: 12, gradient: GRADIENTS[6]  },
  { id: 2, title: 'Satin Hours',      artist: 'Solara',          year: 2025, tracks: 10, gradient: GRADIENTS[7]  },
  { id: 3, title: 'Glass Meridian',   artist: 'The Pale Echoes', year: 2024, tracks: 14, gradient: GRADIENTS[8]  },
  { id: 4, title: 'Midnite Cassette', artist: 'Dusk Radio',      year: 2025, tracks: 8,  gradient: GRADIENTS[9]  },
];
