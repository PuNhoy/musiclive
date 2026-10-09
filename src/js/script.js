
/* ==========================================================================
       SVG COVER ART GENERATOR
       Generates unique, gorgeous, high-resolution vector album artworks
       without any external image CDN dependencies.
       ========================================================================== */
    function generateCoverSvg(index, title, artist, genre) {
      const themes = [
        // 1. Synthwave Horizon
        { c1: '#3b0764', c2: '#0369a1', c3: '#f43f5e', sun: true, grid: true, icon: 'sun' },
        // 2. Midnight Rain
        { c1: '#020617', c2: '#1e1b4b', c3: '#38bdf8', rain: true, moon: true, icon: 'rain' },
        // 3. Electric Pulse
        { c1: '#180033', c2: '#0f172a', c3: '#06b6d4', circuits: true, icon: 'bolt' },
        // 4. Starlight Serenade
        { c1: '#2e1065', c2: '#4c0519', c3: '#fb7185', stars: true, icon: 'star' },
        // 5. Urban Echoes
        { c1: '#1c1917', c2: '#450a0a', c3: '#f97316', city: true, icon: 'waveform' },
        // 6. Deep Cosmos
        { c1: '#09090b', c2: '#172554', c3: '#818cf8', portal: true, icon: 'planet' },
        // 7. Retro Boulevard
        { c1: '#4a044e', c2: '#1e1b4b', c3: '#f59e0b', palm: true, sun: true, icon: 'sun' },
        // 8. Coffee & Clouds
        { c1: '#291e14', c2: '#431407', c3: '#fdba74', clouds: true, icon: 'coffee' },
        // 9. Cybernetic Dreams
        { c1: '#022c22', c2: '#0f172a', c3: '#34d399', isometric: true, icon: 'chip' },
        // 10. Golden Hour Reverie
        { c1: '#7c2d12', c2: '#831843', c3: '#fbbf24', rays: true, icon: 'sun' },
        // 11. Thunder Road
        { c1: '#172554', c2: '#0f172a', c3: '#f87171', lightning: true, icon: 'bolt' },
        // 12. Cosmic Lullaby
        { c1: '#1e1b4b', c2: '#312e81', c3: '#c084fc', aurora: true, icon: 'star' },
        // 13. Glitch Symphony
        { c1: '#18181b', c2: '#3f3f46', c3: '#22d3ee', glitch: true, icon: 'glitch' },
        // 14. Zen Garden
        { c1: '#064e3b', c2: '#022c22', c3: '#6ee7b7', zenRings: true, icon: 'zen' },
        // 15. Neon Arcade
        { c1: '#701a75', c2: '#1e1b4b', c3: '#ec4899', pixel: true, icon: 'game' },
        // 16. Astral Traveler
        { c1: '#030712', c2: '#1e293b', c3: '#38bdf8', mandala: true, icon: 'diamond' }
      ];

      const t = themes[index % themes.length];
      const uid = `cov-${index}`;

      let extraArt = '';

      if (t.sun) {
        extraArt += `
          <circle cx="150" cy="140" r="65" fill="url(#gradSun-${uid})" filter="url(#glow-${uid})" />
          <line x1="85" y1="130" x2="215" y2="130" stroke="#000" stroke-width="3" stroke-opacity="0.4"/>
          <line x1="88" y1="145" x2="212" y2="145" stroke="#000" stroke-width="4" stroke-opacity="0.5"/>
          <line x1="95" y1="160" x2="205" y2="160" stroke="#000" stroke-width="5" stroke-opacity="0.6"/>
          <line x1="110" y1="175" x2="190" y2="175" stroke="#000" stroke-width="6" stroke-opacity="0.7"/>
        `;
      }

      if (t.grid) {
        extraArt += `
          <g opacity="0.35" stroke="${t.c3}" stroke-width="1.2">
            <line x1="150" y1="170" x2="0" y2="300" />
            <line x1="150" y1="170" x2="50" y2="300" />
            <line x1="150" y1="170" x2="100" y2="300" />
            <line x1="150" y1="170" x2="150" y2="300" />
            <line x1="150" y1="170" x2="200" y2="300" />
            <line x1="150" y1="170" x2="250" y2="300" />
            <line x1="150" y1="170" x2="300" y2="300" />
            <line x1="0" y1="200" x2="300" y2="200" />
            <line x1="0" y1="225" x2="300" y2="225" />
            <line x1="0" y1="255" x2="300" y2="255" />
            <line x1="0" y1="290" x2="300" y2="290" />
          </g>
        `;
      }

      if (t.rain || t.stars) {
        extraArt += `
          <g fill="${t.c3}" opacity="0.6">
            <circle cx="50" cy="50" r="1.5" /><circle cx="120" cy="80" r="2" />
            <circle cx="200" cy="40" r="1.5" /><circle cx="260" cy="90" r="2.5" />
            <circle cx="80" cy="180" r="2" /><circle cx="230" cy="220" r="1.8" />
            <circle cx="180" cy="130" r="2.2" /><circle cx="40" cy="240" r="1.5" />
          </g>
          <path d="M 190 70 A 45 45 0 0 0 240 120 A 40 40 0 1 1 190 70 Z" fill="${t.c3}" opacity="0.4" />
        `;
      }

      if (t.circuits || t.lightning) {
        extraArt += `
          <path d="M 40 40 L 100 120 L 80 180 L 150 220 L 260 260" stroke="${t.c3}" stroke-width="2.5" fill="none" opacity="0.6" filter="url(#glow-${uid})" />
          <circle cx="100" cy="120" r="5" fill="${t.c3}" />
          <circle cx="150" cy="220" r="5" fill="${t.c3}" />
          <polygon points="170,40 130,140 160,140 120,240 200,120 160,120" fill="${t.c3}" opacity="0.75" />
        `;
      }

      if (!extraArt) {
        // Geometric abstract concentric rings fallback
        extraArt = `
          <circle cx="150" cy="150" r="85" stroke="${t.c3}" stroke-width="2" fill="none" opacity="0.3" />
          <circle cx="150" cy="150" r="55" stroke="${t.c3}" stroke-width="3" fill="none" opacity="0.5" />
          <circle cx="150" cy="150" r="25" fill="${t.c3}" opacity="0.8" />
          <path d="M 60 220 Q 150 140 240 220" stroke="${t.c3}" stroke-width="3" fill="none" opacity="0.5"/>
        `;
      }

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
          <defs>
            <linearGradient id="bgGrad-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${t.c1}" />
              <stop offset="60%" stop-color="${t.c2}" />
              <stop offset="100%" stop-color="#050508" />
            </linearGradient>
            <linearGradient id="gradSun-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fde047" />
              <stop offset="60%" stop-color="${t.c3}" />
              <stop offset="100%" stop-color="#7c2d12" />
            </linearGradient>
            <filter id="glow-${uid}" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="300" height="300" fill="url(#bgGrad-${uid})" />
          ${extraArt}
          <!-- Vinyl Subtle Texture Overlay -->
          <circle cx="150" cy="150" r="140" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1" fill="none"/>
          <circle cx="150" cy="150" r="105" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1" fill="none"/>
          <!-- Genre Badge in Corner -->
          <rect x="20" y="248" width="80" height="24" rx="12" fill="#000000" fill-opacity="0.6"/>
          <text x="60" y="264" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" letter-spacing="1">${genre.toUpperCase()}</text>
        </svg>
      `;

      return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.trim());
    }

    /* ==========================================================================
       SONGS DATABASE (16 Fully Working SoundHelix Royalty-Free Tracks)
       ========================================================================== */
    const SONGS_DATA = [
      {
        id: 1,
        title: "ឆ្នេរអនុស្សារ Chhne Anusa ｜ ដួង វីរៈសិទ្ធ (Doung Virakseth)",
        artist: "Doung Virakseth",
        genre: "Pop",
        duration: "6:12",
        seconds: 372,
        src: "/src/audio/ឆ្នេរអនុស្សារ Chhne Anusa ｜ ដួង វីរៈសិទ្ធ (Doung Virakseth) .mp3"
      },
      {
        id: 2,
        title: "ចាំចម្លើយ (Cham Chom Reay) | ដួង វីរៈសិទ្ធ (Doung Virakseth)",
        artist: "Doung Virakseth",
        genre: "Pop",
        duration: "7:05",
        seconds: 425,
        src: "/src/audio/ចាំចម្លើយ.mp3"
      },
      {
        id: 3,
        title: "ផាត់ជាយបណ្តូលចិត្ត [HD+Lyric] ស៊ីន ស៊ីសាមុត",
        artist: "ស៊ីន ស៊ីសាមុត",
        genre: "Pop",
        duration: "5:44",
        seconds: 344,
        src: "/src/audio/ផាត់ជាយបណ្តូលចិត្ត [HD+Lyric] ស៊ីន ស៊ីសាមុត.mp3"
      },
      {
        id: 4,
        title: "បើមិនមែនជាគូ - Taa Zvet ｜ Official Audio ​",
        artist: "Taa Zvet",
        genre: "Pop",
        duration: "5:02",
        seconds: 302,
        src: "/src/audio/បើមិនមែនជាគូ - Taa Zvet ｜ Official Audio ​.mp3"
      },
      {
        id: 5,
        title: "មេឃអើយជួយផង",
        artist: "សាមុត+សុទ្ធា",
        genre: "Pop",
        duration: "5:53",
        seconds: 353,
        src: "/src/audio/មេឃអើយជួយផង   សាមុត+សុទ្ធា   Mek Euy Chuoy Phang   Sinn Sisamouth.mp3"
      },
      {
        id: 6,
        title: "សន្យា (Sanya) | Doung Virakseth",
        artist: "Doung Virakseth",
        genre: "Pop",
        duration: "6:38",
        seconds: 398,
        src: "/src/audio/សន្យា.mp3"
      },
      {
        id: 7,
        title: "បើបងមានអ្នកថ្មីអូនសប្បាយចិត្តទេ x__SengRmx__VIP2K25",
        artist: "SengRmx",
        genre: "Pop",
        duration: "6:01",
        seconds: 361,
        src: "/src/audio/បើបងមានអ្នកថ្មីអូនសប្បាយចិត្តទេ x__SengRmx__VIP2K25.mp3"
      },
      {
        id: 8,
        title: "មួយអាទិត្យ7ថ្ងៃ Every day hurts (feat.Mina) [Official MV]",
        artist: "Suly Pheng",
        genre: "Chill",
        duration: "5:12",
        seconds: 312,
        src: "/src/audio/Suly Pheng - មួយអាទិត្យ7ថ្ងៃ Every day hurts (feat.Mina) [Official MV].mp3"
      },
      {
        id: 9,
        title: "រាប់ ១ ២ ៣ ហាមយំ  Lyrics ｜ Pipo Chhouk",
        artist: "Pipo Chhouk",
        genre: "Pop",
        duration: "6:18",
        seconds: 378,
        src: "/src/audio/រាប់ ១ ២ ៣ ហាមយំ  Lyrics ｜ Pipo Chhouk.mp3"
      },
      {
        id: 10,
        title: "Golden Hour Reverie",
        artist: "Velvet Shore",
        genre: "Pop",
        duration: "4:48",
        seconds: 288,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
      },
      {
        id: 11,
        title: "Thunder Road",
        artist: "Desert Wolves",
        genre: "Rock",
        duration: "5:29",
        seconds: 329,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
      },
      {
        id: 12,
        title: "Cosmic Lullaby",
        artist: "Stellar Dust",
        genre: "Ambient",
        duration: "6:45",
        seconds: 405,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
      },
      {
        id: 13,
        title: "Glitch Symphony",
        artist: "ByteWave",
        genre: "Electronic",
        duration: "5:36",
        seconds: 336,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
      },
      {
        id: 14,
        title: "Zen Garden",
        artist: "Peaceful Mind",
        genre: "Chill",
        duration: "6:22",
        seconds: 382,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
      },
      {
        id: 15,
        title: "Neon Arcade",
        artist: "Pixel Heart",
        genre: "Synthwave",
        duration: "4:58",
        seconds: 298,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
      },
      {
        id: 16,
        title: "Astral Traveler",
        artist: "Nebula Dreams",
        genre: "Ambient",
        duration: "6:50",
        seconds: 410,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
      },
        {
        id: 17,
        title: "Astral Traveler",
        artist: "Nebula Dreams",
        genre: "Ambient",
        duration: "6:50",
        seconds: 410,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
      },
        {
        id: 16,
        title: "Astral Traveler",
        artist: "Nebula Dreams",
        genre: "Ambient",
        duration: "6:50",
        seconds: 410,
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
      }
    ];

    // Assign cover SVG data URLs to all songs
    SONGS_DATA.forEach((s, idx) => {
      s.cover = generateCoverSvg(idx, s.title, s.artist, s.genre);
    });

    /* ==========================================================================
       LOCAL STORAGE WRAPPER WITH GRACEFUL ERROR HANDLING
       ========================================================================== */
    const Storage = {
      get(key, fallback) {
        try {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : fallback;
        } catch (e) {
          console.warn('LocalStorage get failed:', e);
          return fallback;
        }
      },
      set(key, val) {
        try {
          localStorage.setItem(key, JSON.stringify(val));
        } catch (e) {
          console.warn('LocalStorage set failed:', e);
        }
      }
    };

    /* ==========================================================================
       APPLICATION STATE
       ========================================================================== */
    const state = {
      songs: SONGS_DATA,
      currentSongIndex: 0,
      isPlaying: false,
      volume: 0.8,
      previousVolume: 0.8,
      isMuted: false,
      repeatMode: 'all', // 'off' | 'all' | 'one'
      isShuffle: false,
      shuffledOrder: [],
      shuffleIndex: 0,
      queue: [], // Array of song IDs
      favorites: new Set(),
      activeTab: 'home', // 'home' | 'favorites'
      selectedGenre: 'All',
      searchQuery: '',
      viewMode: 'grid', // 'grid' | 'list'
      isDraggingSeek: false,
      isNowPlayingOpen: false,
      isQueueOpen: false,
      isShortcutsOpen: false,
      consecutiveErrors: 0
    };

    // DOM Elements Cache
    const audio = document.getElementById('audio-engine');
    const songsGrid = document.getElementById('songs-grid');
    const songsList = document.getElementById('songs-list');
    const emptyState = document.getElementById('empty-state');
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const trackCountBadge = document.getElementById('track-count-badge');
    const sectionTitle = document.getElementById('section-title');
    
    // Bottom Player Bar Elements
    const playerCoverImg = document.getElementById('player-cover-img');
    const playerTitle = document.getElementById('player-title');
    const playerArtist = document.getElementById('player-artist');
    const playerPlayBtn = document.getElementById('player-play-btn');
    const playerPlayIcon = document.getElementById('player-play-icon');
    const playerHeartBtn = document.getElementById('player-heart-btn');
    const playerHeartIcon = document.getElementById('player-heart-icon');
    const playerProgressBar = document.getElementById('player-progress-bar');
    const seekSlider = document.getElementById('seek-slider');
    const playerCurrentTime = document.getElementById('player-current-time');
    const playerDuration = document.getElementById('player-duration');
    const volumeSlider = document.getElementById('volume-slider');
    const playerVolumeBtn = document.getElementById('player-volume-btn');
    const playerShuffleBtn = document.getElementById('player-shuffle-btn');
    const playerRepeatBtn = document.getElementById('player-repeat-btn');
    const playerRepeatBadge = document.getElementById('player-repeat-badge');
    const playerQueueBadge = document.getElementById('player-queue-badge');

    // Sidebar Elements
    const sidebarCoverThumb = document.getElementById('sidebar-cover-thumb');
    const sidebarTrackTitle = document.getElementById('sidebar-track-title');
    const sidebarTrackArtist = document.getElementById('sidebar-track-artist');
    const sidebarLiveEq = document.getElementById('sidebar-live-eq');
    const sidebarFavCount = document.getElementById('sidebar-fav-count');
    const sidebarQueueCount = document.getElementById('sidebar-queue-count');

    // Now Playing Modal Elements
    const nowPlayingModal = document.getElementById('now-playing-modal');
    const npModalCoverImg = document.getElementById('np-modal-cover-img');
    const npModalTitle = document.getElementById('np-modal-title');
    const npModalArtist = document.getElementById('np-modal-artist');
    const npModalGenre = document.getElementById('np-modal-genre');
    const npModalPlayBtn = document.getElementById('np-modal-play-btn');
    const npModalPlayIcon = document.getElementById('np-modal-play-icon');
    const npModalHeartBtn = document.getElementById('np-modal-heart-btn');
    const npModalProgressBar = document.getElementById('np-modal-progress-bar');
    const npModalSeekSlider = document.getElementById('np-modal-seek-slider');
    const npModalCurrentTime = document.getElementById('np-modal-current-time');
    const npModalDuration = document.getElementById('np-modal-duration');
    const npModalShuffleBtn = document.getElementById('np-modal-shuffle-btn');
    const npModalRepeatBtn = document.getElementById('np-modal-repeat-btn');
    const npModalRepeatBadge = document.getElementById('np-modal-repeat-badge');
    const npVinylDisc = document.getElementById('np-vinyl-disc');
    const npVinylLabel = document.getElementById('np-vinyl-label');
    const npWaveVisualizer = document.getElementById('np-wave-visualizer');

    // Queue Drawer Elements
    const queuePanel = document.getElementById('queue-panel');
    const queueItemsContainer = document.getElementById('queue-items-container');
    const queueCurrentCard = document.getElementById('queue-current-card');
    const queuePanelCount = document.getElementById('queue-panel-count');

    // Shortcuts Modal
    const shortcutsModal = document.getElementById('shortcuts-modal');

    /* ==========================================================================
       UTILITY HELPERS
       ========================================================================== */
    function formatTime(seconds) {
      if (isNaN(seconds) || seconds < 0) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      
      const bgColors = {
        info: 'bg-slate-900 border-violet-500/40 text-slate-100',
        success: 'bg-emerald-950 border-emerald-500/40 text-emerald-100',
        warn: 'bg-amber-950 border-amber-500/40 text-amber-100',
        error: 'bg-rose-950 border-rose-500/40 text-rose-100'
      };

      toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-xl text-xs font-semibold backdrop-blur-md transform transition-all duration-300 translate-y-2 opacity-0 ${bgColors[type] || bgColors.info}`;
      
      toast.innerHTML = `
        <span class="w-2 h-2 rounded-full ${type === 'error' ? 'bg-rose-500' : type === 'success' ? 'bg-emerald-400' : 'bg-cyan-400'}"></span>
        <span>${message}</span>
      `;

      container.appendChild(toast);
      
      // Animate in
      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      });

      // Auto dismiss
      setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3200);
    }

    /* ==========================================================================
       INITIALIZATION & STORAGE RESTORATION
       ========================================================================== */
    function initializeApp() {
      // 1. Restore favorites
      const savedFavs = Storage.get('soundpulse_favorites', [1, 4, 8]);
      state.favorites = new Set(savedFavs);

      // 2. Restore playback state
      const savedState = Storage.get('soundpulse_player_state', null);
      if (savedState) {
        if (typeof savedState.volume === 'number') {
          state.volume = Math.max(0, Math.min(1, savedState.volume));
          volumeSlider.value = state.volume;
          audio.volume = state.volume;
        }
        if (savedState.isMuted) {
          state.isMuted = true;
          audio.muted = true;
        }
        if (savedState.repeatMode) {
          state.repeatMode = savedState.repeatMode;
        }
        if (typeof savedState.isShuffle === 'boolean') {
          state.isShuffle = savedState.isShuffle;
        }
        if (typeof savedState.songIndex === 'number' && savedState.songIndex >= 0 && savedState.songIndex < state.songs.length) {
          state.currentSongIndex = savedState.songIndex;
        }
      } else {
        audio.volume = state.volume;
      }

      // 3. Initialize visualizer bars in Now Playing view
      buildVisualizerBars();

      // 4. Render initial song views
      renderSongs();
      updateFavoritesBadge();
      updatePlayerUI(state.songs[state.currentSongIndex], false);
      updateRepeatButtonUI();
      updateShuffleButtonUI();
      updateVolumeUI();

      // 5. Preload audio source without playing (wait for user interaction)
      const initialSong = state.songs[state.currentSongIndex];
      audio.src = initialSong.src;
      audio.load();

      // 6. Setup event listeners
      setupAudioEvents();
      setupSeekSlider();
      setupKeyboardShortcuts();
      setupSearchListener();

      console.log('SoundPulse initialized with 16 tracks ready to stream.');
    }

    /* ==========================================================================
       VISUALIZER GENERATOR
       Builds dynamic bars in the Now Playing modal
       ========================================================================== */
    function buildVisualizerBars() {
      npWaveVisualizer.innerHTML = '';
      for (let i = 0; i < 32; i++) {
        const bar = document.createElement('span');
        bar.className = 'w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-violet-600 via-cyan-400 to-white transition-all duration-75';
        bar.style.height = '4px';
        npWaveVisualizer.appendChild(bar);
      }
    }

    let visualizerAnimationId = null;
    function startVisualizerLoop() {
      if (visualizerAnimationId) cancelAnimationFrame(visualizerAnimationId);
      const bars = npWaveVisualizer.children;

      function renderFrame() {
        if (!state.isPlaying) {
          // Reset smoothly to resting state
          for (let i = 0; i < bars.length; i++) {
            bars[i].style.height = '4px';
          }
          return;
        }

        const now = Date.now() / 150;
        for (let i = 0; i < bars.length; i++) {
          // Harmonic wave simulation with rhythmic energy
          const height = Math.abs(Math.sin(now + i * 0.35) * Math.cos(now * 0.7 + i * 0.2)) * 38 + 6;
          bars[i].style.height = `${Math.min(46, Math.max(4, height))}px`;
        }

        visualizerAnimationId = requestAnimationFrame(renderFrame);
      }

      renderFrame();
    }

    function stopVisualizerLoop() {
      if (visualizerAnimationId) {
        cancelAnimationFrame(visualizerAnimationId);
        visualizerAnimationId = null;
      }
      const bars = npWaveVisualizer.children;
      for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = '4px';
      }
    }

    /* ==========================================================================
       SONG RENDERING (Grid View & List View)
       ========================================================================== */
    function getFilteredSongs() {
      return state.songs.filter(song => {
        // Tab filter (Home vs Favorites)
        if (state.activeTab === 'favorites' && !state.favorites.has(song.id)) {
          return false;
        }

        // Genre filter
        if (state.selectedGenre !== 'All' && song.genre.toLowerCase() !== state.selectedGenre.toLowerCase()) {
          return false;
        }

        // Search filter
        if (state.searchQuery.trim() !== '') {
          const q = state.searchQuery.toLowerCase().trim();
          const matchTitle = song.title.toLowerCase().includes(q);
          const matchArtist = song.artist.toLowerCase().includes(q);
          const matchGenre = song.genre.toLowerCase().includes(q);
          if (!matchTitle && !matchArtist && !matchGenre) return false;
        }

        return true;
      });
    }

    function renderSongs() {
      const filtered = getFilteredSongs();
      const currentSong = state.songs[state.currentSongIndex];

      // Update counter and titles
      trackCountBadge.textContent = filtered.length;
      if (state.activeTab === 'favorites') {
        sectionTitle.textContent = 'Liked Favorites';
      } else if (state.searchQuery) {
        sectionTitle.textContent = `Search: "${state.searchQuery}"`;
      } else if (state.selectedGenre !== 'All') {
        sectionTitle.textContent = `${state.selectedGenre} Hits`;
      } else {
        sectionTitle.textContent = 'All Tracks';
      }

      // Empty State handling
      if (filtered.length === 0) {
        songsGrid.classList.add('hidden');
        songsList.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');

        const emptyTitle = document.getElementById('empty-title');
        const emptySub = document.getElementById('empty-subtitle');

        if (state.activeTab === 'favorites') {
          emptyTitle.textContent = 'No Favorite Tracks Yet';
          emptySub.textContent = 'Click the heart icon on any track in the library to save your favorite songs here!';
        } else {
          emptyTitle.textContent = 'No Matches Found';
          emptySub.textContent = 'Try adjusting your search query or picking a different genre filter.';
        }
        return;
      }

      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');

      if (state.viewMode === 'grid') {
        songsGrid.classList.remove('hidden');
        songsList.classList.add('hidden');
        renderGridView(filtered, currentSong);
      } else {
        songsGrid.classList.add('hidden');
        songsList.classList.remove('hidden');
        renderListView(filtered, currentSong);
      }
    }

    // Render Grid Cards
    function renderGridView(songs, currentSong) {
      songsGrid.innerHTML = '';
      songs.forEach(song => {
        const isCurrent = song.id === currentSong.id;
        const isFav = state.favorites.has(song.id);
        const card = document.createElement('div');
        
        card.className = `group relative bg-brand-card hover:bg-brand-cardHover border ${
          isCurrent 
            ? 'border-violet-500 shadow-lg shadow-violet-500/10' 
            : 'border-brand-border'
        } rounded-2xl p-3.5 transition-all duration-200 cursor-pointer flex flex-col justify-between`;

        card.onclick = (e) => {
          // If clicked on like or queue button, prevent card play
          if (e.target.closest('.action-stop-prop')) return;
          playSongById(song.id);
        };

        card.innerHTML = `
          <!-- Cover Artwork Container -->
          <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-900 mb-3 shadow-md">
            <img src="${song.cover}" alt="${song.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300">
            
            <!-- Playing Overlay Indicator -->
            ${isCurrent ? `
              <div class="absolute inset-0 bg-violet-950/60 flex items-center justify-center backdrop-blur-[2px]">
                <div class="flex items-end gap-1 h-5">
                  <span class="w-1 bg-cyan-400 rounded-full eq-bar-1 ${!state.isPlaying ? 'paused-anim' : ''}"></span>
                  <span class="w-1 bg-violet-400 rounded-full eq-bar-2 ${!state.isPlaying ? 'paused-anim' : ''}"></span>
                  <span class="w-1 bg-pink-400 rounded-full eq-bar-3 ${!state.isPlaying ? 'paused-anim' : ''}"></span>
                  <span class="w-1 bg-cyan-300 rounded-full eq-bar-4 ${!state.isPlaying ? 'paused-anim' : ''}"></span>
                </div>
              </div>
            ` : `
              <!-- Hover Quick Play Button -->
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div class="w-11 h-11 rounded-full bg-violet-500 text-white flex items-center justify-center shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <svg class="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            `}

            <!-- Genre Tag -->
            <span class="absolute top-2 left-2 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
              ${song.genre}
            </span>
          </div>

          <!-- Song Meta -->
          <div class="space-y-1">
            <div class="flex items-center justify-between gap-1">
              <h3 class="text-sm font-bold text-white truncate ${isCurrent ? 'text-violet-400' : 'group-hover:text-violet-300'} transition">
                ${song.title}
              </h3>
              <span class="text-[11px] font-mono text-slate-400 shrink-0">${song.duration}</span>
            </div>
            
            <div class="flex items-center justify-between">
              <p class="text-xs text-slate-400 truncate">${song.artist}</p>
              
              <!-- Card Action Icons -->
              <div class="flex items-center gap-1 action-stop-prop">
                <!-- Add to Queue Button -->
                <button onclick="addToQueue(${song.id})" title="Add to queue" class="p-1 text-slate-400 hover:text-cyan-400 transition">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                </button>

                <!-- Heart Like Button -->
                <button onclick="toggleFavorite(${song.id})" title="${isFav ? 'Remove favorite' : 'Add favorite'}" class="p-1 transition active:scale-90 ${isFav ? 'text-rose-500' : 'text-slate-400 hover:text-rose-400'}">
                  <svg class="w-4 h-4" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        `;

        songsGrid.appendChild(card);
      });
    }

    // Render List Table Rows
    function renderListView(songs, currentSong) {
      songsList.innerHTML = '';
      songs.forEach((song, idx) => {
        const isCurrent = song.id === currentSong.id;
        const isFav = state.favorites.has(song.id);
        const row = document.createElement('div');
        
        row.className = `group flex items-center justify-between px-4 py-2.5 rounded-xl border ${
          isCurrent 
            ? 'bg-violet-950/30 border-violet-500/40' 
            : 'bg-brand-card hover:bg-brand-cardHover border-brand-border'
        } transition cursor-pointer`;

        row.onclick = (e) => {
          if (e.target.closest('.action-stop-prop')) return;
          playSongById(song.id);
        };

        row.innerHTML = `
          <!-- Left: Track number & cover art & title -->
          <div class="flex items-center gap-3.5 min-w-0 flex-1">
            <span class="w-5 text-center text-xs font-mono font-semibold ${isCurrent ? 'text-violet-400' : 'text-slate-400'}">
              ${isCurrent && state.isPlaying ? `
                <div class="flex items-end justify-center gap-0.5 h-3">
                  <span class="w-0.5 bg-violet-400 rounded-full eq-bar-1"></span>
                  <span class="w-0.5 bg-cyan-400 rounded-full eq-bar-2"></span>
                  <span class="w-0.5 bg-pink-400 rounded-full eq-bar-3"></span>
                </div>
              ` : (idx + 1)}
            </span>

            <div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-slate-800">
              <img src="${song.cover}" alt="${song.title}" class="w-full h-full object-cover">
            </div>

            <div class="min-w-0">
              <h4 class="text-sm font-bold text-white truncate ${isCurrent ? 'text-violet-400' : 'group-hover:text-violet-300'} transition">
                ${song.title}
              </h4>
              <p class="text-xs text-slate-400 truncate">${song.artist}</p>
            </div>
          </div>

          <!-- Center: Genre badge -->
          <div class="hidden sm:block w-32">
            <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
              ${song.genre}
            </span>
          </div>

          <!-- Right: Duration & Actions -->
          <div class="flex items-center gap-3 shrink-0 action-stop-prop">
            <span class="text-xs font-mono text-slate-400">${song.duration}</span>

            <button onclick="addToQueue(${song.id})" title="Add to queue" class="p-1.5 text-slate-400 hover:text-cyan-400 transition">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
            </button>

            <button onclick="toggleFavorite(${song.id})" title="${isFav ? 'Remove favorite' : 'Add favorite'}" class="p-1.5 transition active:scale-90 ${isFav ? 'text-rose-500' : 'text-slate-400 hover:text-rose-400'}">
              <svg class="w-4 h-4" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
        `;

        songsList.appendChild(row);
      });
    }

    /* ==========================================================================
       AUDIO CONTROLLER & PLAYBACK ACTIONS
       ========================================================================== */
    function playSongByIndex(index) {
      if (index < 0 || index >= state.songs.length) return;
      state.currentSongIndex = index;
      const song = state.songs[index];

      audio.src = song.src;
      audio.load();

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          state.isPlaying = true;
          state.consecutiveErrors = 0;
          updatePlayerUI(song, true);
          renderSongs();
          renderQueue();
          savePlayerState();
        }).catch(err => {
          console.warn('Playback error / Autoplay blocked:', err);
          state.isPlaying = false;
          updatePlayerUI(song, false);
          renderSongs();
        });
      }
    }

    function playSongById(id) {
      const idx = state.songs.findIndex(s => s.id === id);
      if (idx !== -1) {
        if (idx === state.currentSongIndex) {
          togglePlayPause();
        } else {
          playSongByIndex(idx);
        }
      }
    }

    function togglePlayPause() {
      if (!audio.src || audio.src === '') {
        playSongByIndex(0);
        return;
      }

      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            state.isPlaying = true;
            updatePlayPauseButtonUI(true);
            startVisualizerLoop();
            renderSongs();
            savePlayerState();
          }).catch(err => {
            console.error('Playback failed:', err);
            showToast('Playback blocked. Click anywhere to activate audio.', 'warn');
          });
        }
      } else {
        audio.pause();
        state.isPlaying = false;
        updatePlayPauseButtonUI(false);
        stopVisualizerLoop();
        renderSongs();
        savePlayerState();
      }
    }

    function nextSong() {
      // 1. If queue has songs, prioritize the queue
      if (state.queue.length > 0) {
        const nextId = state.queue.shift();
        updateQueueBadge();
        renderQueue();
        playSongById(nextId);
        showToast('Playing next queued track', 'info');
        return;
      }

      // 2. If shuffle is enabled, pick next shuffled song
      if (state.isShuffle) {
        if (state.shuffledOrder.length === 0) {
          createShuffledOrder();
        }
        state.shuffleIndex = (state.shuffleIndex + 1) % state.shuffledOrder.length;
        playSongByIndex(state.shuffledOrder[state.shuffleIndex]);
        return;
      }

      // 3. Normal sequential advance
      let nextIndex = state.currentSongIndex + 1;
      if (nextIndex >= state.songs.length) {
        if (state.repeatMode === 'off') {
          audio.pause();
          audio.currentTime = 0;
          state.isPlaying = false;
          updatePlayPauseButtonUI(false);
          renderSongs();
          showToast('End of playlist reached', 'info');
          return;
        } else {
          nextIndex = 0; // Wrap around for repeatMode === 'all'
        }
      }
      playSongByIndex(nextIndex);
    }

    function prevSong() {
      // If played for more than 3 seconds, restart current song (standard behavior)
      if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
      }

      let prevIndex = state.currentSongIndex - 1;
      if (prevIndex < 0) {
        prevIndex = state.songs.length - 1;
      }
      playSongByIndex(prevIndex);
    }

    function playRandomSong() {
      const randomIndex = Math.floor(Math.random() * state.songs.length);
      playSongByIndex(randomIndex);
      showToast(`Surprise: Playing "${state.songs[randomIndex].title}"!`, 'success');
    }

    /* ==========================================================================
       AUDIO ENGINE EVENT LISTENERS
       ========================================================================== */
    function setupAudioEvents() {
      // Track time update
      audio.addEventListener('timeupdate', () => {
        if (!state.isDraggingSeek && audio.duration) {
          const current = audio.currentTime;
          const total = audio.duration;
          const pct = (current / total) * 100;

          // Update progress bars
          playerProgressBar.style.width = `${pct}%`;
          const mobileProg = document.getElementById('player-mobile-progress');
          if (mobileProg) mobileProg.style.width = `${pct}%`;
          seekSlider.value = pct;
          playerCurrentTime.textContent = formatTime(current);

          npModalProgressBar.style.width = `${pct}%`;
          npModalSeekSlider.value = pct;
          npModalCurrentTime.textContent = formatTime(current);
        }
      });

      // Loaded metadata: update duration
      audio.addEventListener('loadedmetadata', () => {
        if (audio.duration && !isNaN(audio.duration)) {
          const formatted = formatTime(audio.duration);
          playerDuration.textContent = formatted;
          npModalDuration.textContent = formatted;
        }
      });

      // Play & Pause synchronization
      audio.addEventListener('play', () => {
        state.isPlaying = true;
        updatePlayPauseButtonUI(true);
        startVisualizerLoop();
        updateMediaSession();
      });

      audio.addEventListener('pause', () => {
        state.isPlaying = false;
        updatePlayPauseButtonUI(false);
        stopVisualizerLoop();
      });

      // Ended event: auto-advance
      audio.addEventListener('ended', () => {
        if (state.repeatMode === 'one') {
          audio.currentTime = 0;
          audio.play();
        } else {
          nextSong();
        }
      });

      // Error handler: graceful fallback
      audio.addEventListener('error', (e) => {
        state.consecutiveErrors++;
        const failedSong = state.songs[state.currentSongIndex];
        console.error('Audio stream load error:', failedSong ? failedSong.src : 'unknown', e);

        if (state.consecutiveErrors >= 3) {
          showToast('Network error: Multiple tracks failed to load. Check your internet connection.', 'error');
          state.isPlaying = false;
          updatePlayPauseButtonUI(false);
          return;
        }

        showToast(`Could not load "${failedSong.title}". Skipping to next track...`, 'warn');
        setTimeout(() => {
          nextSong();
        }, 1200);
      });
    }

    /* ==========================================================================
       PROGRESS BAR SCRUBBER (CLICK & DRAG SUPPORT)
       ========================================================================== */
    function setupSeekSlider() {
      // Bottom Player Bar Scrubber
      seekSlider.addEventListener('input', (e) => {
        state.isDraggingSeek = true;
        const pct = e.target.value;
        playerProgressBar.style.width = `${pct}%`;
        npModalProgressBar.style.width = `${pct}%`;
        if (audio.duration) {
          const previewSec = (pct / 100) * audio.duration;
          playerCurrentTime.textContent = formatTime(previewSec);
          npModalCurrentTime.textContent = formatTime(previewSec);
        }
      });

      seekSlider.addEventListener('change', (e) => {
        if (audio.duration) {
          const pct = e.target.value;
          audio.currentTime = (pct / 100) * audio.duration;
        }
        state.isDraggingSeek = false;
      });

      // Now Playing Modal Scrubber
      npModalSeekSlider.addEventListener('input', (e) => {
        state.isDraggingSeek = true;
        const pct = e.target.value;
        npModalProgressBar.style.width = `${pct}%`;
        playerProgressBar.style.width = `${pct}%`;
        if (audio.duration) {
          const previewSec = (pct / 100) * audio.duration;
          npModalCurrentTime.textContent = formatTime(previewSec);
          playerCurrentTime.textContent = formatTime(previewSec);
        }
      });

      npModalSeekSlider.addEventListener('change', (e) => {
        if (audio.duration) {
          const pct = e.target.value;
          audio.currentTime = (pct / 100) * audio.duration;
        }
        state.isDraggingSeek = false;
      });
    }

    /* ==========================================================================
       VOLUME & MUTE CONTROLLER
       ========================================================================== */
    volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.volume = val;
      audio.volume = val;
      if (val > 0 && state.isMuted) {
        state.isMuted = false;
        audio.muted = false;
      }
      updateVolumeUI();
      savePlayerState();
    });

    function toggleMute() {
      if (state.isMuted || state.volume === 0) {
        state.isMuted = false;
        audio.muted = false;
        state.volume = state.previousVolume || 0.8;
        volumeSlider.value = state.volume;
        audio.volume = state.volume;
        showToast('Audio unmuted', 'info');
      } else {
        state.previousVolume = state.volume;
        state.isMuted = true;
        audio.muted = true;
        volumeSlider.value = 0;
        showToast('Audio muted', 'info');
      }
      updateVolumeUI();
      savePlayerState();
    }

    function updateVolumeUI() {
      const isMuted = state.isMuted || state.volume === 0;
      if (isMuted) {
        playerVolumeBtn.innerHTML = `
          <svg class="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
          </svg>
        `;
      } else if (state.volume < 0.4) {
        playerVolumeBtn.innerHTML = `
          <svg class="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
          </svg>
        `;
      } else {
        playerVolumeBtn.innerHTML = `
          <svg class="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
          </svg>
        `;
      }
    }

    /* ==========================================================================
       SHUFFLE & REPEAT MODES
       ========================================================================== */
    function toggleShuffle() {
      state.isShuffle = !state.isShuffle;
      if (state.isShuffle) {
        createShuffledOrder();
        showToast('Shuffle Mode: ON', 'info');
      } else {
        showToast('Shuffle Mode: OFF', 'info');
      }
      updateShuffleButtonUI();
      savePlayerState();
    }

    function createShuffledOrder() {
      state.shuffledOrder = state.songs.map((_, i) => i);
      // Fisher-Yates shuffle
      for (let i = state.shuffledOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.shuffledOrder[i], state.shuffledOrder[j]] = [state.shuffledOrder[j], state.shuffledOrder[i]];
      }
      state.shuffleIndex = state.shuffledOrder.indexOf(state.currentSongIndex);
      if (state.shuffleIndex === -1) state.shuffleIndex = 0;
    }

    function updateShuffleButtonUI() {
      if (state.isShuffle) {
        playerShuffleBtn.classList.add('text-cyan-400');
        playerShuffleBtn.classList.remove('text-slate-400');
        npModalShuffleBtn.classList.add('text-cyan-400');
        npModalShuffleBtn.classList.remove('text-slate-400');
      } else {
        playerShuffleBtn.classList.remove('text-cyan-400');
        playerShuffleBtn.classList.add('text-slate-400');
        npModalShuffleBtn.classList.remove('text-cyan-400');
        npModalShuffleBtn.classList.add('text-slate-400');
      }
    }

    function cycleRepeatMode() {
      if (state.repeatMode === 'off') {
        state.repeatMode = 'all';
        showToast('Repeat Mode: All Tracks', 'info');
      } else if (state.repeatMode === 'all') {
        state.repeatMode = 'one';
        showToast('Repeat Mode: Current Track', 'info');
      } else {
        state.repeatMode = 'off';
        showToast('Repeat Mode: OFF', 'info');
      }
      updateRepeatButtonUI();
      savePlayerState();
    }

    function updateRepeatButtonUI() {
      if (state.repeatMode === 'off') {
        playerRepeatBtn.classList.remove('text-violet-400');
        playerRepeatBtn.classList.add('text-slate-400');
        playerRepeatBadge.classList.add('hidden');
        playerRepeatBadge.classList.remove('flex');

        npModalRepeatBtn.classList.remove('text-violet-400');
        npModalRepeatBtn.classList.add('text-slate-400');
        npModalRepeatBadge.classList.add('hidden');
        npModalRepeatBadge.classList.remove('flex');
      } else if (state.repeatMode === 'all') {
        playerRepeatBtn.classList.add('text-violet-400');
        playerRepeatBtn.classList.remove('text-slate-400');
        playerRepeatBadge.classList.add('hidden');
        playerRepeatBadge.classList.remove('flex');

        npModalRepeatBtn.classList.add('text-violet-400');
        npModalRepeatBtn.classList.remove('text-slate-400');
        npModalRepeatBadge.classList.add('hidden');
        npModalRepeatBadge.classList.remove('flex');
      } else if (state.repeatMode === 'one') {
        playerRepeatBtn.classList.add('text-violet-400');
        playerRepeatBtn.classList.remove('text-slate-400');
        playerRepeatBadge.classList.remove('hidden');
        playerRepeatBadge.classList.add('flex');

        npModalRepeatBtn.classList.add('text-violet-400');
        npModalRepeatBtn.classList.remove('text-slate-400');
        npModalRepeatBadge.classList.remove('hidden');
        npModalRepeatBadge.classList.add('flex');
      }
    }

    /* ==========================================================================
       FAVORITES MANAGEMENT
       ========================================================================== */
    function toggleFavorite(songId) {
      const song = state.songs.find(s => s.id === songId);
      if (!song) return;

      if (state.favorites.has(songId)) {
        state.favorites.delete(songId);
        showToast(`Removed "${song.title}" from favorites`, 'info');
      } else {
        state.favorites.add(songId);
        showToast(`Added "${song.title}" to favorites ❤️`, 'success');
      }

      // Persist to storage
      Storage.set('soundpulse_favorites', Array.from(state.favorites));

      updateFavoritesBadge();
      updateFavoriteUI();
      renderSongs();
    }

    function toggleCurrentFavorite() {
      const cur = state.songs[state.currentSongIndex];
      if (cur) toggleFavorite(cur.id);
    }

    function updateFavoritesBadge() {
      sidebarFavCount.textContent = state.favorites.size;
    }

    function updateFavoriteUI() {
      const cur = state.songs[state.currentSongIndex];
      const isFav = cur ? state.favorites.has(cur.id) : false;

      // Bottom bar heart
      const mobileHeartIcon = document.getElementById('player-mobile-heart-icon');
      if (isFav) {
        playerHeartIcon.setAttribute('fill', 'currentColor');
        playerHeartBtn.classList.add('text-rose-500');
        playerHeartBtn.classList.remove('text-slate-400');
        if (mobileHeartIcon) {
          mobileHeartIcon.setAttribute('fill', 'currentColor');
          mobileHeartIcon.parentElement.classList.add('text-rose-500');
          mobileHeartIcon.parentElement.classList.remove('text-slate-400');
        }
      } else {
        playerHeartIcon.setAttribute('fill', 'none');
        playerHeartBtn.classList.remove('text-rose-500');
        playerHeartBtn.classList.add('text-slate-400');
        if (mobileHeartIcon) {
          mobileHeartIcon.setAttribute('fill', 'none');
          mobileHeartIcon.parentElement.classList.remove('text-rose-500');
          mobileHeartIcon.parentElement.classList.add('text-slate-400');
        }
      }

      // Modal heart
      if (isFav) {
        npModalHeartBtn.classList.add('text-rose-500');
        npModalHeartBtn.classList.remove('text-slate-400');
        npModalHeartBtn.querySelector('svg').setAttribute('fill', 'currentColor');
      } else {
        npModalHeartBtn.classList.remove('text-rose-500');
        npModalHeartBtn.classList.add('text-slate-400');
        npModalHeartBtn.querySelector('svg').setAttribute('fill', 'none');
      }
    }

    /* ==========================================================================
       QUEUE MANAGEMENT
       ========================================================================== */
    function addToQueue(songId) {
      const song = state.songs.find(s => s.id === songId);
      if (!song) return;

      state.queue.push(songId);
      updateQueueBadge();
      renderQueue();
      showToast(`Added "${song.title}" to queue`, 'info');
    }

    function removeFromQueue(index) {
      state.queue.splice(index, 1);
      updateQueueBadge();
      renderQueue();
    }

    function clearQueue() {
      state.queue = [];
      updateQueueBadge();
      renderQueue();
      showToast('Queue cleared', 'info');
    }

    function addRemainingToQueue() {
      state.songs.forEach(s => {
        if (s.id !== state.songs[state.currentSongIndex].id) {
          state.queue.push(s.id);
        }
      });
      updateQueueBadge();
      renderQueue();
      showToast('Added all tracks to queue', 'success');
    }

    function shuffleQueue() {
      for (let i = state.queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.queue[i], state.queue[j]] = [state.queue[j], state.queue[i]];
      }
      renderQueue();
      showToast('Queue order shuffled', 'info');
    }

    function updateQueueBadge() {
      sidebarQueueCount.textContent = state.queue.length;
      queuePanelCount.textContent = state.queue.length;
      if (state.queue.length > 0) {
        playerQueueBadge.classList.remove('hidden');
      } else {
        playerQueueBadge.classList.add('hidden');
      }
    }

    function renderQueue() {
      const current = state.songs[state.currentSongIndex];
      
      // Update currently playing card in queue
      queueCurrentCard.innerHTML = `
        <div class="w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-slate-800">
          <img src="${current.cover}" alt="${current.title}" class="w-full h-full object-cover">
        </div>
        <div class="min-w-0 flex-1">
          <h4 class="text-xs font-bold text-white truncate">${current.title}</h4>
          <p class="text-[11px] text-slate-400 truncate">${current.artist}</p>
        </div>
        <div class="flex items-end gap-0.5 h-3">
          <span class="w-0.5 bg-violet-400 rounded-full eq-bar-1 ${!state.isPlaying ? 'paused-anim' : ''}"></span>
          <span class="w-0.5 bg-cyan-400 rounded-full eq-bar-2 ${!state.isPlaying ? 'paused-anim' : ''}"></span>
          <span class="w-0.5 bg-pink-400 rounded-full eq-bar-3 ${!state.isPlaying ? 'paused-anim' : ''}"></span>
        </div>
      `;

      // Render upcoming queue list
      queueItemsContainer.innerHTML = '';
      if (state.queue.length === 0) {
        queueItemsContainer.innerHTML = `
          <div class="text-center py-12 px-4 space-y-2">
            <svg class="w-8 h-8 mx-auto text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <p class="text-xs font-semibold text-slate-400">Queue is empty</p>
            <p class="text-[11px] text-slate-400">Add songs using the + button on any track card.</p>
          </div>
        `;
        return;
      }

      state.queue.forEach((songId, qIdx) => {
        const song = state.songs.find(s => s.id === songId);
        if (!song) return;

        const item = document.createElement('div');
        item.className = 'group flex items-center justify-between p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-brand-border transition';
        item.innerHTML = `
          <div onclick="playSongById(${song.id})" class="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer">
            <span class="text-[10px] font-mono text-slate-400 w-4 text-center">${qIdx + 1}</span>
            <div class="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-slate-800">
              <img src="${song.cover}" alt="${song.title}" class="w-full h-full object-cover">
            </div>
            <div class="min-w-0">
              <h5 class="text-xs font-bold text-white truncate group-hover:text-violet-400 transition">${song.title}</h5>
              <p class="text-[10px] text-slate-400 truncate">${song.artist}</p>
            </div>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <span class="text-[10px] font-mono text-slate-400">${song.duration}</span>
            <button onclick="removeFromQueue(${qIdx})" title="Remove from queue" class="p-1 text-slate-400 hover:text-rose-400 transition">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        `;
        queueItemsContainer.appendChild(item);
      });
    }

    function toggleQueuePanel() {
      state.isQueueOpen = !state.isQueueOpen;
      if (state.isQueueOpen) {
        renderQueue();
        queuePanel.classList.remove('translate-x-full');
      } else {
        queuePanel.classList.add('translate-x-full');
      }
    }

    /* ==========================================================================
       NOW PLAYING EXPANDED VIEW / MODAL
       ========================================================================== */
    function toggleNowPlayingModal() {
      state.isNowPlayingOpen = !state.isNowPlayingOpen;
      if (state.isNowPlayingOpen) {
        nowPlayingModal.classList.remove('translate-y-full');
        if (state.isPlaying) startVisualizerLoop();
      } else {
        nowPlayingModal.classList.add('translate-y-full');
      }
    }

    /* ==========================================================================
       UI SYNC: PLAY/PAUSE ICONS & CURRENT TRACK LABELS
       ========================================================================== */
    function updatePlayPauseButtonUI(isPlaying) {
      const mobilePlayIcon = document.getElementById('player-mobile-play-icon');
      // Bottom Player Bar Icon
      if (isPlaying) {
        playerPlayIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        if (mobilePlayIcon) mobilePlayIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        npModalPlayIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        npVinylDisc.classList.remove('paused-anim');
        sidebarLiveEq.classList.remove('hidden');
        sidebarLiveEq.classList.add('flex');
      } else {
        playerPlayIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
        if (mobilePlayIcon) mobilePlayIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
        npModalPlayIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
        npVinylDisc.classList.add('paused-anim');
        sidebarLiveEq.classList.add('hidden');
        sidebarLiveEq.classList.remove('flex');
      }
    }

    function updatePlayerUI(song, isPlaying) {
      if (!song) return;

      // Bottom bar
      playerCoverImg.src = song.cover;
      playerTitle.textContent = song.title;
      playerArtist.textContent = song.artist;
      playerDuration.textContent = song.duration;

      // Sidebar mini card
      sidebarCoverThumb.innerHTML = `<img src="${song.cover}" alt="${song.title}" class="w-full h-full object-cover">`;
      sidebarTrackTitle.textContent = song.title;
      sidebarTrackArtist.textContent = song.artist;

      // Now Playing Modal
      npModalCoverImg.src = song.cover;
      npModalTitle.textContent = song.title;
      npModalArtist.textContent = song.artist;
      npModalGenre.textContent = song.genre;
      npModalDuration.textContent = song.duration;
      npVinylLabel.innerHTML = `
        <img src="${song.cover}" alt="label" class="w-full h-full object-cover opacity-60">
        <div class="absolute w-4 h-4 rounded-full bg-slate-950 border border-slate-700"></div>
      `;

      updateFavoriteUI();
      updatePlayPauseButtonUI(isPlaying);
    }

    /* ==========================================================================
       KEYBOARD SHORTCUTS
       ========================================================================== */
    function setupKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        // Ignore if user is currently typing in an input
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          if (e.key === 'Escape') {
            document.activeElement.blur();
          }
          return;
        }

        switch (e.code) {
          case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;

          case 'ArrowLeft':
            e.preventDefault();
            prevSong();
            break;

          case 'ArrowRight':
            e.preventDefault();
            nextSong();
            break;

          case 'ArrowUp':
            e.preventDefault();
            state.volume = Math.min(1, state.volume + 0.05);
            audio.volume = state.volume;
            volumeSlider.value = state.volume;
            updateVolumeUI();
            showToast(`Volume: ${Math.round(state.volume * 100)}%`, 'info');
            savePlayerState();
            break;

          case 'ArrowDown':
            e.preventDefault();
            state.volume = Math.max(0, state.volume - 0.05);
            audio.volume = state.volume;
            volumeSlider.value = state.volume;
            updateVolumeUI();
            showToast(`Volume: ${Math.round(state.volume * 100)}%`, 'info');
            savePlayerState();
            break;

          case 'KeyM':
            toggleMute();
            break;

          case 'KeyL':
            toggleCurrentFavorite();
            break;

          case 'KeyS':
            toggleShuffle();
            break;

          case 'KeyR':
            cycleRepeatMode();
            break;

          case 'Slash':
            e.preventDefault();
            focusSearch();
            break;

          case 'Escape':
            if (state.isNowPlayingOpen) toggleNowPlayingModal();
            if (state.isQueueOpen) toggleQueuePanel();
            if (state.isShortcutsOpen) toggleShortcutsModal();
            break;

          default:
            if (e.key === '?') {
              toggleShortcutsModal();
            }
            break;
        }
      });
    }

    function toggleShortcutsModal() {
      state.isShortcutsOpen = !state.isShortcutsOpen;
      if (state.isShortcutsOpen) {
        shortcutsModal.classList.remove('hidden');
      } else {
        shortcutsModal.classList.add('hidden');
      }
    }

    /* ==========================================================================
       SEARCH & GENRE FILTERS
       ========================================================================== */
    function setupSearchListener() {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery.trim() !== '') {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
        renderSongs();
      });
    }

    function focusSearch() {
      searchInput.focus();
      searchInput.select();
    }

    function clearSearch() {
      state.searchQuery = '';
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      renderSongs();
    }

    function setGenreFilter(genre) {
      state.selectedGenre = genre;
      const pills = document.querySelectorAll('.genre-pill');
      pills.forEach(pill => {
        if (pill.getAttribute('data-genre').toLowerCase() === genre.toLowerCase()) {
          pill.className = 'genre-pill shrink-0 px-4 py-1.5 rounded-xl text-xs font-semibold transition active:scale-95 bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-600/20';
        } else {
          pill.className = 'genre-pill shrink-0 px-4 py-1.5 rounded-xl text-xs font-semibold transition active:scale-95 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800';
        }
      });

      // Switch back to Home tab if on Favorites tab
      if (state.activeTab === 'favorites') {
        switchTab('home');
      } else {
        renderSongs();
      }
    }

    function resetFilters() {
      state.selectedGenre = 'All';
      state.searchQuery = '';
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      state.activeTab = 'home';
      setGenreFilter('All');
      switchTab('home');
    }

    function setViewMode(mode) {
      state.viewMode = mode;
      const gridBtn = document.getElementById('view-grid-btn');
      const listBtn = document.getElementById('view-list-btn');

      if (mode === 'grid') {
        gridBtn.className = 'p-1.5 rounded-lg text-white bg-slate-800 transition';
        listBtn.className = 'p-1.5 rounded-lg text-slate-400 hover:text-white transition';
      } else {
        gridBtn.className = 'p-1.5 rounded-lg text-slate-400 hover:text-white transition';
        listBtn.className = 'p-1.5 rounded-lg text-white bg-slate-800 transition';
      }
      renderSongs();
    }

    function switchTab(tab) {
      state.activeTab = tab;

      const homeBtn = document.getElementById('nav-btn-home');
      const favBtn = document.getElementById('nav-btn-favorites');

      if (tab === 'home') {
        homeBtn.className = 'nav-item w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-violet-600/20 to-transparent text-white border-l-2 border-violet-500';
        favBtn.className = 'nav-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-slate-900 transition-all duration-200';
      } else if (tab === 'favorites') {
        homeBtn.className = 'nav-item w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-slate-900 transition-all duration-200';
        favBtn.className = 'nav-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-rose-600/20 to-transparent text-white border-l-2 border-rose-500';
      }

      renderSongs();
    }

    /* ==========================================================================
       MEDIA SESSION API INTEGRATION (For OS Media Keys / Lock Screen)
       ========================================================================== */
    function updateMediaSession() {
      if ('mediaSession' in navigator) {
        const cur = state.songs[state.currentSongIndex];
        navigator.mediaSession.metadata = new MediaMetadata({
          title: cur.title,
          artist: cur.artist,
          album: 'SoundPulse Hi-Fi Stream',
          artwork: [
            { src: cur.cover, sizes: '300x300', type: 'image/svg+xml' }
          ]
        });

        navigator.mediaSession.setActionHandler('play', () => togglePlayPause());
        navigator.mediaSession.setActionHandler('pause', () => togglePlayPause());
        navigator.mediaSession.setActionHandler('previoustrack', () => prevSong());
        navigator.mediaSession.setActionHandler('nexttrack', () => nextSong());
      }
    }

    /* ==========================================================================
       STORAGE PERSISTENCE HELPER
       ========================================================================== */
    function savePlayerState() {
      Storage.set('soundpulse_player_state', {
        songIndex: state.currentSongIndex,
        volume: state.volume,
        isMuted: state.isMuted,
        repeatMode: state.repeatMode,
        isShuffle: state.isShuffle
      });
    }

    // Auto-boot application on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', initializeApp);