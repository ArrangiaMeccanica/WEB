// ============================================================
// pixel-chars.js  v2 — Pokémon GBC style
// 16×24 macro-pixel sprites (each pixel = 3×3 real px → 48×72 canvas)
// Inspired by GBC Pokémon trainer sprites
// ============================================================

(function () {

    const PX = 3;   // real pixels per sprite pixel
    const SW = 16;  // sprite width
    const SH = 24;  // sprite height

    const SK = '#f5c5a3'; // skin

    // ---- VOCALIST 1: dark curly hair, white tee, mic left hand ----
    const V1_grid = [
        '......HHHH......',
        '.....HHHHHH.....',
        '....HHHHHHHHH...',
        '....HhSSSSSHh...',
        '....hSSSSSSh....',
        '....hSdSSSdS....',
        '....hSSSSSSh....',
        '....hSSmSSh.....',
        '...CCCCCCCCCC...',
        '..CCcCCCCCCcCC..',
        '..CCcCCCCCCcCC..',
        '..CCcCCCCCCcCC..',
        '.mCCCCCCCCCCCC..',
        '.mmCCCCCCCCCCC..',
        '...CCCCCCCCC....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const V1_pal = {
        H:'#2c1810', h:'#3d2415',
        S: SK, d:'#c8885a',
        C:'#e8e8e0', c:'#c8c8c0',
        P:'#5a8ac8',
        s:'#c8a870',
        m:'#e0e0e0',
    };

    // ---- VOCALIST 2: straight black hair, sunglasses, striped blouse, long skirt ----
    const V2_grid = [
        '......HHHH......',
        '.....HHHHHH.....',
        '....HHHHHHHH....',
        '....HSSSSSSH....',
        '....HSSSSSS.....',
        '....HGGGGGG.....',
        '....HSSSSSS.....',
        '....HSSsSSSH....',
        '...BBBBBBBBBBB..',
        '..BBbBBBBBBbBB..',
        '..BBbBBBBBBbBB..',
        '..BBbBBBBBBbBB..',
        '.mBBBBBBBBBBBB..',
        '.mmBBBBBBBBBBB..',
        '...BBBBBBBBBBB..',
        '...KKKKKKKKKK...',
        '...KKKKKKKKKK...',
        '...KKKKKKKKKK...',
        '...KKKKKKKKKK...',
        '...KKKKKKKKKK...',
        '...KKKKKKKKKK...',
        '...KsKKKKKsK....',
        '...KssKKKKssK...',
        '................',
    ];
    const V2_pal = {
        H:'#1a1a1a',
        S: SK, d:'#c8885a',
        G:'#1a3a5c',
        B:'#6a5a8a', b:'#5a4a7a',
        K:'#4a3060',
        m:'#e0e0e0',
        s:'#c8a870',
    };

    // ---- VOCALIST 3: long wavy brown hair, tank top pink, shorts pink ----
    const V3_grid = [
        '.....HHHHH......',
        '....HHHHHHHH....',
        '...HHHhHHHHHH...',
        '...HhSSSSSSHH...',
        '...HhSSSSSSH....',
        '...HhSdSSdSH....',
        '...HhSSSSSSH....',
        '...HHSSsSS.H....',
        '..HCCCCCCCCCH...',
        '...CCcCCCCCcCC..',
        '...CCcCCCCCcCC..',
        '...CCcCCCCCcCC..',
        '..mCCCCCCCCCCC..',
        '..mmCCCCCCCCCC..',
        '...CCCCCCCCC....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..SsS....SsS....',
        '................',
    ];
    const V3_pal = {
        H:'#8B4513', h:'#6b3010',
        S: SK, d:'#c8885a',
        C:'#ff8a9a', c:'#e87080',
        P:'#ff9bc0',
        m:'#e0e0e0',
        s:'#c8a870',
    };

    // ---- VOCALIST 4: short hair with glasses, striped shirt ----
    const V4_grid = [
        '......HHHH......',
        '.....HHHHHH.....',
        '....HHHHHHH.....',
        '....HSSSSSH.....',
        '....HSSSSSH.....',
        '....HGGsGGH.....',
        '....HSSSSSH.....',
        '....HSSsSSH.....',
        '...TTTTTTTTTT...',
        '..TtTTTtTtTtTT..',
        '..TtTTTtTtTtTT..',
        '..TtTTTtTtTtTT..',
        '.mTTTTTTTTTTTT..',
        '.mmTTTTTTTTTTT..',
        '...TTTTTTTTTT...',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const V4_pal = {
        H:'#2a1a0a',
        S: SK, d:'#c8885a',
        G:'#2a4a7c', s:'#8ab8e8',
        T:'#e8d890', t:'#c8b870',
        P:'#7090c8',
        m:'#e0e0e0',
    };

    // ---- VOCALIST 5: hair in bun, white dress, mic ----
    const V5_grid = [
        '.....BBBBB......',
        '....BBBBBBB.....',
        '....BSSSSSS.....',
        '....BSSSSSS.....',
        '....BSSSSSS.....',
        '....BSdSSdS.....',
        '....BSSSSSB.....',
        '....BSSsSS......',
        '...DDDDDDDDDDD..',
        '..DDdDDDDDDdDD..',
        '..DDdDDDDDDdDD..',
        '..DDdDDDDDDdDD..',
        '.mDDDDDDDDDDDD..',
        '.mmDDDDDDDDDDD..',
        '...DDDDDDDDDDD..',
        '...DDDDDDDDD....',
        '...DDDDDDDDD....',
        '..DDDDDDDDDDD...',
        '..DDDDDDDDDDD...',
        '...DD.......DD..',
        '...DD.......DD..',
        '..SdS.......SdS.',
        '..SsS.......SsS.',
        '................',
    ];
    const V5_pal = {
        B:'#2c1810',
        S: SK, d:'#c8885a',
        D:'#f0ece0',
        m:'#e0e0e0',
        s:'#c0b090',
    };

    // ---- SAXOPHONIST: tall, white shirt, holds golden sax ----
    const SAX_grid = [
        '.......HHH......',
        '......HHHHH.....',
        '.....HHSSSSH....',
        '.....HSSSSSSH...',
        '.....HSSSSSSH...',
        '.....HSdSSSdS...',
        '.....HSSSSSSH...',
        '.....HSSsSSSH...',
        '....CCCCCCCCCC..',
        '...CcCCCCCCcCC..',
        '...CcCCCCCCcCC..',
        '...CCCCCCCCCC...',
        '..AAAAACCCCCC...',
        '..AaAaACCCCCC...',
        '..AAAAaCCCC.....',
        '..ApPPPPPP......',
        '..APPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const SAX_pal = {
        H:'#1a1a1a',
        S: SK, d:'#c8885a',
        C:'#f0f0f0', c:'#d0d0d0',
        P:'#4a6a9a', p:'#3a5a8a',
        A:'#d4a017', a:'#b88a10',
        s:'#c8a870',
    };

    // ---- KEYBOARDIST: round glasses, plays keyboard in front ----
    const KEYS_grid = [
        '......HHHH......',
        '.....HHHHHH.....',
        '....HHHHHHHHH...',
        '....HSSSSSSSH...',
        '....HSSSSSSSH...',
        '....HGGSGGsS....',
        '....HSSSSSSSH...',
        '....HSSsSSSH....',
        '...CCCCCCCCCC...',
        '..CCcCCCCCCcCC..',
        '.KKKKKKKKKKKKK..',
        '.KkKkKkKkKkKkKK.',
        '.KKKKKKKKKKKKK..',
        '...CCCCCCCCCC...',
        '...CCCCCCCCCC...',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const KEYS_pal = {
        H:'#2c1810',
        S: SK, d:'#c8885a',
        G:'#1a2a4c', s:'#8ab8e8',
        C:'#7a9abc', c:'#5a7a9c',
        K:'#f0ece0', k:'#1a1a2e',
        P:'#3a4a6a',
    };

    // ---- GUITARIST: holds electric guitar body left ----
    const GTR_grid = [
        '.....HHHHH......',
        '....HHHHHHHH....',
        '....HHSSSSSSH...',
        '....HSSSSSSH....',
        '....HSdSSSdS....',
        '....HSSSSSSH....',
        '....HSSsSSSH....',
        '...CCCCCCCCCC...',
        '..CCcCCCCCCcCC..',
        '..CCcCCGGGGcCC..',
        '..CCcCGGGGGcCC..',
        '.GGGCGGGGGGGCCe.',
        '.GgGCCCCCCCCCee.',
        '.GgGCCCCCCCC....',
        '..GCCCCCCCCC....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const GTR_pal = {
        H:'#4a2010',
        S: SK, d:'#c8885a',
        C:'#c03030', c:'#a02020',
        G:'#d4a030', g:'#b08820',
        P:'#4a5a8a',
        e:'#c8c8c0', // strings
        s:'#c8a870',
    };

    // ---- BASSIST: tall, dark green tee, electric bass guitar ----
    const BASS_grid = [
        '......HHHH......',
        '.....HHHHHH.....',
        '....HHHHHHHHH...',
        '....HSSSSSSSH...',
        '....HSSSSSSSH...',
        '....HSdSSSdSH...',
        '....HSSSSSSSH...',
        '....HSSsSSSH....',
        '...BBBBBBBBBB...',
        '..BBbBBBBBBbBB..',
        '..BBbBBBBBBbBB..',
        '..BBbBBBBBBbBB..',
        '.GGGBBBBBBBBBe..',
        '.GgGGBBBBBBBee..',
        '..GGBBBBBBBe....',
        '..GBPPPPPPPP....',
        '..GPPPPPPPPP....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const BASS_pal = {
        H:'#1a1a1a',
        S: SK, d:'#c8885a',
        B:'#2a4a2a', b:'#1a3a1a',
        G:'#4a8ab0', g:'#3a7a9a',
        P:'#3a3a5a',
        e:'#c8c8b0',
        s:'#c8a870',
    };

    // ---- DJ: snapback cap, headphones over ears, behind turntable ----
    const DJ_grid = [
        '....CCCCCCC.....',
        '...CccccCCC.....',
        '...CCSSSSS......',
        '...CSSSSSS......',
        '...CSSSSSS......',
        '...CSdSSSd......',
        '...CSSSSSS......',
        '...CSSsSS.......',
        '..HHHHHHHHHHHH..',
        '..HhTTTTTTTThH..',
        '..HHHHHHHHHHHH..',
        '...TTTTTTTTTT...',
        '...TkTkTkTkTT...',
        '...TTTTTTTTTT...',
        '..JJJJJJJJJJJJ.',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const DJ_pal = {
        C:'#1a1a1a', c:'#0a0a0a',
        S: SK, d:'#c8885a',
        H:'#2a2a2a', h:'#e03060',
        T:'#3a3a3a',
        k:'#e0e0e0',
        J:'#1a1a3a',
        P:'#1a1a2a',
        s:'#c8a870',
    };

    // ---- DRUMMER: drumsticks in both raised hands, snare drum ----
    const DRUM_grid = [
        '.....HHHHH......',
        '....HHHHHHHH....',
        '....HHSSSSSSH...',
        '....HSSSSSSH....',
        '....HSdSSSdS....',
        '....HSSSSSSH....',
        '....HSSsSSSH....',
        'K...CCCCCCCCC..K',
        'KkKCCcCCCCcCC.Kk',
        '.KkCCcCCCCcCC.K.',
        '..KCCCCCCCCCCK..',
        '...CCCCCCCCCC...',
        '...CCCCCCCCCC...',
        '...DDDDDDDDDDD..',
        '...DdDDDDDDdDD..',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PPPPPPPP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '...PP....PP.....',
        '..ShS....ShS....',
        '..Sss....Sss....',
        '................',
    ];
    const DRUM_pal = {
        H:'#3a2010',
        S: SK, d:'#c8885a',
        C:'#a04030', c:'#803020',
        K:'#e8e8d0', k:'#b8b8a0',
        D:'#d4a030',
        P:'#3a4050',
        s:'#c8a870',
    };

    // ============================================================
    const CHARS = [
        { cls: 'char-voce1',    grid: V1_grid,   pal: V1_pal  },
        { cls: 'char-voce2',    grid: V2_grid,   pal: V2_pal  },
        { cls: 'char-voce3',    grid: V3_grid,   pal: V3_pal  },
        { cls: 'char-voce4',    grid: V4_grid,   pal: V4_pal  },
        { cls: 'char-voce5',    grid: V5_grid,   pal: V5_pal  },
        { cls: 'char-sasso',    grid: SAX_grid,  pal: SAX_pal },
        { cls: 'char-tasti',    grid: KEYS_grid, pal: KEYS_pal},
        { cls: 'char-chitarra', grid: GTR_grid,  pal: GTR_pal },
        { cls: 'char-basso',    grid: BASS_grid, pal: BASS_pal},
        { cls: 'char-dj',       grid: DJ_grid,   pal: DJ_pal  },
        { cls: 'char-perc',     grid: DRUM_grid, pal: DRUM_pal},
    ];

    function renderSprite(canvas, grid, pal, bob) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, SW * PX, SH * PX);
        for (let row = 0; row < SH; row++) {
            const line = grid[row] || '';
            for (let col = 0; col < SW; col++) {
                const ch = line[col];
                if (!ch || ch === '.' || ch === ' ') continue;
                const color = pal[ch];
                if (!color) continue;
                ctx.fillStyle = color;
                // bob: shift body rows (row >= 3) by 1px on frame 1
                const yShift = (bob && row >= 3) ? 1 : 0;
                ctx.fillRect(col * PX, row * PX + yShift, PX, PX);
            }
        }
    }

    let bobFrame = 0;
    let lastTime = 0;

    function tick(ts) {
        if (ts - lastTime > 480) {
            bobFrame = 1 - bobFrame;
            lastTime = ts;
            CHARS.forEach(c => {
                const el = document.querySelector('.' + c.cls);
                if (!el) return;
                const canvas = el.querySelector('canvas');
                if (canvas) renderSprite(canvas, c.grid, c.pal, bobFrame);
            });
        }
        requestAnimationFrame(tick);
    }

    function init() {
        CHARS.forEach(c => {
            const el = document.querySelector('.' + c.cls);
            if (!el) return;
            let canvas = el.querySelector('canvas');
            if (!canvas) {
                canvas = document.createElement('canvas');
                el.insertBefore(canvas, el.firstChild);
            }
            canvas.width  = SW * PX;
            canvas.height = SH * PX;
            canvas.style.cssText = 'image-rendering:pixelated;image-rendering:crisp-edges;display:block;';
            renderSprite(canvas, c.grid, c.pal, 0);
        });
        requestAnimationFrame(tick);
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();

})();

// ============================================================
// Click: expand in-place con glow + drag rubber-band + audio
// ============================================================
(function () {
    const CHAR_INFO = {
        'char-voce1':    { audioSrc: 'castello-MIX2025_v1-2.mp3' },
        'char-voce2':    { audioSrc: "l'amare-MIX2025-Fm_v5.mp3" },
        'char-voce3':    { audioSrc: '41-tonton-120BPM-88k_v23.mp3' },
        'char-voce4':    { audioSrc: 'sociabilità-MIX2025_v3.mp3' },
        'char-voce5':    { audioSrc: 'dottore-MIX2025_v3.mp3' },
        'char-sasso':    { audioSrc: null },
        'char-tasti':    { audioSrc: null },
        'char-chitarra': { audioSrc: null },
        'char-basso':    { audioSrc: null },
        'char-dj':       { audioSrc: null },
        'char-perc':     { audioSrc: null },
    };
    let currentExpanded = null, currentAudio = null;

    function collapse(el) {
        if (!el) return;
        el.classList.remove('expanded');
        if (currentAudio) { currentAudio.pause(); currentAudio = null; }
        currentExpanded = null;
    }
    function expand(el, info) {
        if (currentExpanded === el) { collapse(el); return; }
        if (currentExpanded) collapse(currentExpanded);
        el.classList.add('expanded');
        currentExpanded = el;
        if (info.audioSrc) {
            currentAudio = new Audio(info.audioSrc);
            currentAudio.play().catch(() => {});
            currentAudio.onended = () => { currentAudio = null; };
        }
    }

    // --- Drag: sposta la fila e rimane lì, niente snap-back ---
    const stage = document.getElementById('pixelStage');
    let dragStartX = 0, currentOffset = 0, isDragging = false, dragMoved = false;
    let touchStartX = 0, touchStartY = 0, dirLocked = false, isHoriz = false;

    function clamp(x) {
        const limit = window.innerWidth / 3;
        return Math.max(-limit, Math.min(limit, x));
    }
    function onStart(x) {
        isDragging = true; dragMoved = false;
        dragStartX = x - currentOffset;
        stage.style.transition = 'none';
    }
    function onMove(x) {
        if (!isDragging) return;
        const d = x - dragStartX;
        if (Math.abs(d - currentOffset) > 4) dragMoved = true;
        currentOffset = clamp(d);
        stage.style.transform = `translateX(${currentOffset}px)`;
    }
    function onEnd() { isDragging = false; }

    // Touch — rileva direzione prima di intercettare
    stage.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        dirLocked = false; isHoriz = false;
        onStart(e.touches[0].clientX);
    }, { passive: true });

    stage.addEventListener('touchmove', e => {
        if (!isDragging) return;
        if (!dirLocked) {
            const dx = Math.abs(e.touches[0].clientX - touchStartX);
            const dy = Math.abs(e.touches[0].clientY - touchStartY);
            if (dx < 3 && dy < 3) return;
            isHoriz = dx > dy;
            dirLocked = true;
        }
        if (!isHoriz) { isDragging = false; return; }
        e.preventDefault();
        onMove(e.touches[0].clientX);
    }, { passive: false });

    stage.addEventListener('touchend', () => onEnd());

    // Mouse
    stage.addEventListener('mousedown', e => { onStart(e.clientX); stage.style.cursor = 'grabbing'; });
    window.addEventListener('mousemove', e => { if (isDragging) onMove(e.clientX); });
    window.addEventListener('mouseup', () => { if (isDragging) { onEnd(); stage.style.cursor = ''; } });

    // --- Click ---
    function attachClicks() {
        Object.keys(CHAR_INFO).forEach(cls => {
            const el = document.querySelector('.' + cls);
            if (!el) return;
            el.addEventListener('click', e => {
                e.stopPropagation();
                if (dragMoved) { dragMoved = false; return; }
                expand(el, CHAR_INFO[cls]);
            });
        });
        document.addEventListener('click', () => collapse(currentExpanded));
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', attachClicks)
        : attachClicks();
})();
