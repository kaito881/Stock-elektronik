let modeStok = 'semua';
let filterSekarang = { kategori: 'Semua' };
let urutanDesc = true;

const gudangData = [
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 7kg G", h: "1.375.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 8kg B", h: "1.475.000", s: 0, t: "2-2-26"},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 9kg Y", h: "1.625.000", s: 0, t: "7-2-26"},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 9kg 81 V", h: "1.700.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 9kg 81Y", h: "1.700.000", s: 0, t: "7-2-26"},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 10kg Y", h: "1.840.000", s: 0, t: "6-2-26"},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 10kg 81 V", h: "1.900.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 12kg X", h: "2.225.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron 14kg B", h: "2.340.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Sharp", n: "Mesin Cuci Sharp ES-T 1490WA-RD", h: "2.980.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Toshiba", n: "Mesin Cuci Toshiba VH-H95MN-WB", h: "1.700.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron PAW 8029TS", h: "2.375.000", s: 1, t: ""},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron PAW 9029TS", h: "2.600.000", s: 0, t: "5-2-26"},
    {k: "Mesin Cuci", m: "Polytron", n: "Mesin Cuci Polytron PAW 1029TY", h: "2.875.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 159 R", h: "1.675.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 159 B", h: "1.675.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 179 R", h: "1.825.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 177 LB", h: "1.825.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 187 TY", h: "1.925.000", s: 0, t: "4-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 187 PR", h: "1.925.000", s: 0, t: "4-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 15 DMY", h: "1.725.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 16 DRX", h: "1.825.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 16 DRD", h: "1.825.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18 DRD", h: "2.065.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18 DRX", h: "2.065.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18 MNX", h: "2.065.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18 MOW", h: "2.065.000", s: 0, t: "3-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18 MOB", h: "2.065.000", s: 0, t: "3-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18 DMY", h: "2.065.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18DMR", h: "2.065.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 18 MTR", h: "2.065.000", s: 1, t: ""},
    {k: "Kulkas", m: "Sharp", n: "Kulkas Sharp SJ-X 165 MD (GD)", h: "1.725.000", s: 1, t: ""},
    {k: "Kulkas", m: "Sharp", n: "Kulkas Sharp SJ-N 192 D (VB)", h: "2.065.000", s: 1, t: ""},
    {k: "Kulkas", m: "Sharp", n: "Kulkas Sharp SJ-X 197W-DW", h: "2.225.000", s: 1, t: ""},
    {k: "Kulkas", m: "Toshiba", n: "Kulkas Toshiba GR-RD196CC - DMF", h: "1.900.000", s: 1, t: ""},
    {k: "Kulkas", m: "Toshiba", n: "Kulkas Toshiba GR-RD235CC - DMF", h: "1.975.000", s: 1, t: ""},
    {k: "Kulkas", m: "Aqua", n: "Kulkas Aqua AQR-D185 MDS", h: "1.725.000", s: 1, t: ""},
    {k: "Kulkas", m: "Aqua", n: "Kulkas Aqua AQR-D205 MDS", h: "1.825.000", s: 1, t: ""},
    {k: "Kulkas", m: "LG", n: "Kulkas LG GN -Y201CLAR", h: "2.300.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 2p 200 Y", h: "2.600.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 2p 20 CRD", h: "2.675.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 2p 20 CLD", h: "2.675.000", s: 0, t: "7-2-26"},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 2p 21DMY", h: "2.850.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 2p 21DRD3", h: "2.850.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 23 MNX", h: "2.975.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 25 MNX", h: "3.150.000", s: 1, t: ""},
    {k: "Kulkas", m: "Polytron", n: "Kulkas Polytron 29 HB", h: "3.600.000", s: 0, t: "1-2-26"},
    {k: "Kulkas", m: "Sharp", n: "Kulkas Sharp 2p SJ 197 ND", h: "2.725.000", s: 1, t: ""},
    {k: "Kulkas", m: "Sharp", n: "Kulkas Sharp 2p SJ 236 MG(GR)", h: "3.030.000", s: 0, t: "2-2-26"},
    {k: "Kulkas", m: "LG", n: "Kulkas LG 2p GN - B202SQIR", h: "3.400.000", s: 1, t: ""},
    {k: "Kulkas", m: "Toshiba", n: "Kulkas Toshiba 2p GR-B28ISP", h: "3.075.000", s: 1, t: ""},
    {k: "Kulkas", m: "Samsung", n: "Kulkas Samsung 2p RT19M300BGE", h: "3.575.000", s: 1, t: ""},
    {k: "Freezer", m: "Artugo", n: "Freezer Artugo CF101CN", h: "1.850.000", s: 0, t: "7-2-26"},
    {k: "Freezer", m: "Artugo", n: "Freezer Artugo CF201CN", h: "2.455.000", s: 0, t: "7-2-26"},
    {k: "Freezer", m: "TCL", n: "Freezer TCL TCF201ZID", h: "2.410.000", s: 1, t: ""},
    {k: "Freezer", m: "TCL", n: "Freezer TCL TCF100ZID", h: "1.860.000", s: 0, t: "5-2-26"},
    {k: "Freezer", m: "Polytron", n: "Freezer Box Polytron PC318", h: "3.250.000", s: 1, t: ""},
    {k: "Dapur", m: "Miyako", n: "Magic com Miyako MCM-609", h: "215.000", s: 1, t: ""},
    {k: "Dapur", m: "Miyako", n: "Magic com Miyako MCM 508", h: "245.000", s: 2, t: ""},
    {k: "Dapur", m: "Miyako", n: "Magic com Miyako MCM 508 SBC", h: "275.000", s: 2, t: ""},
    {k: "Dapur", m: "Miyako", n: "Magic com Miyako MCM 528 MIX FRUITS", h: "245.000", s: 3, t: ""},
    {k: "Dapur", m: "Philips", n: "Magic com Philips", h: "425.000", s: 2, t: ""},
    {k: "Dapur", m: "Cosmos", n: "Magic com Cosmos CRJ- 3232", h: "290.000", s: 4, t: ""},
    {k: "Dapur", m: "Lainnya", n: "Blender BL 101 PL", h: "200.000", s: 3, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 602 A", h: "525.000", s: 1, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 522 CE", h: "370.000", s: 1, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 522 E", h: "415.000", s: 2, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 712T", h: "660.000", s: 2, t: ""},
    {k: "Lainnya", m: "Cosmos", n: "Setrika Cosmos cis -318 f1", h: "150.000", s: 1, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Roda kulkas besi", h: "85.000", s: 4, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Hand Mixer Hm-620", h: "180.000", s: 1, t: ""},
    {k: "Lainnya", m: "Welhome", n: "Water Heater Welhome", h: "850.000", s: 1, t: ""},
    {k: "TV", m: "Coocaa", n: "TV Coocaa 32S3U", h: "1.650.000", s: 1, t: ""},
    {k: "TV", m: "Polytron", n: "TV Polytron PLD40 CV8969", h: "2.625.000", s: 1, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Kipas KAD927BGB", h: "175.000", s: 1, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Bracket TV", h: "65.000", s: 2, t: ""}
];

function toggleDesc(id) { document.getElementById('row-' + id).classList.toggle('expanded'); }

function setModeStok(m) { 
    modeStok = m; 
    document.querySelectorAll('.btn-stok').forEach(b => b.classList.remove('active'));
    document.getElementById('stok-'+m).classList.add('active');
    document.getElementById('btnSort').style.display = (m === 'habis') ? 'flex' : 'none';
    render(); 
}

function setFilter(j, n) { filterSekarang[j] = n; render(); initFilters(); }

function gantiUrutan() { 
    urutanDesc = !urutanDesc; 
    document.getElementById('txtSort').innerText = urutanDesc ? "Terbaru" : "Terlama"; 
    render(); 
}

function parseTgl(t) { 
    if(!t) return 0; 
    const p = t.split('-'); 
    return new Date(`20${p[2]}`, p[1]-1, p[0]).getTime(); 
}

function formatTgl(t) { 
    if(!t) return "-"; 
    const p = t.split('-'); 
    return `${p[0]} ${["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"][p[1]-1]} 20${p[2]}`; 
}

function render() {
    const wadah = document.getElementById('tempatBarang');
    const cari = document.getElementById('inputCari').value.toLowerCase();
    let list = gudangData.filter(i => {
        return (filterSekarang.kategori==='Semua' || i.k===filterSekarang.kategori) &&
               (i.n.toLowerCase().includes(cari) || i.m.toLowerCase().includes(cari)) &&
               (modeStok==='semua' || (modeStok==='ready' ? i.s>0 : i.s<=0));
    });

    // LOGIKA URUTAN: KULKAS > MESIN CUCI > READY > HABIS
    list.sort((a,b) => {
        if (modeStok === 'habis') return urutanDesc ? parseTgl(b.t) - parseTgl(a.t) : parseTgl(a.t) - parseTgl(b.t);
        
        // Prioritas Kategori
        const prioritas = {"Kulkas": 1, "Mesin Cuci": 2};
        const pA = prioritas[a.k] || 99;
        const pB = prioritas[b.k] || 99;
        if (pA !== pB) return pA - pB;

        // Prioritas Stok Ready di Atas
        return (b.s > 0 ? 1 : 0) - (a.s > 0 ? 1 : 0);
    });

    document.getElementById('stat-total').innerText = list.length;
    document.getElementById('stat-ready').innerText = list.filter(x=>x.s>0).length;
    document.getElementById('stat-sold').innerText = list.filter(x=>x.s<=0).length;

    wadah.innerHTML = list.map((i, idx) => `
        <tr id="row-${idx}" class="product-row ${i.s<=0?'row-habis':''}" onclick="toggleDesc(${idx})">
            <td style="width:55%"><span class="merek-tag">${i.m}</span><br><strong>${i.n}</strong></td>
            <td style="width:25%; text-align:right" class="harga">Rp ${i.h}</td>
            <td style="width:20%; text-align:right">
                <div class="stok-status-wrapper"><span class="angka-stok">${i.s}</span>
                <span class="badge ${i.s<=0?'badge-habis':'badge-ready'}">${i.s<=0?'SOLD':'READY'}</span></div>
            </td>
        </tr>
        <tr class="desc-row"><td colspan="3" style="padding:0"><div class="desc-content"><div style="padding:10px 15px; background:#f9f9f9;">
            Kategori: ${i.k}<br>${i.s<=0 ? 'Habis tgl: '+formatTgl(i.t) : 'Stok Ready.'}
        </div></div></td></tr>`).join('');
}

function initFilters() {
    const kats = ['Semua', ...new Set(gudangData.map(i => i.k))];
    document.getElementById('filterKategori').innerHTML = kats.map(k => 
        `<button class="btn-filter ${filterSekarang.kategori===k?'active':''}" onclick="setFilter('kategori','${k}')">${k}</button>`).join('');
}

// Jalankan fungsi saat pertama kali loading
initFilters(); 
render();
    {k: "Dapur", m: "Lainnya", n: "Blender BL 101 PL", h: "200.000", s: 12, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 602 A", h: "525.000", s: 5, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 522 CE", h: "370.000", s: 4, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 522 E", h: "415.000", s: 6, t: ""},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 712T", h: "660.000", s: 3, t: ""},
    {k: "Lainnya", m: "Cosmos", n: "Setrika Cosmos cis -318 f1", h: "150.000", s: 15, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Roda kulkas besi", h: "85.000", s: 20, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Hand Mixer Hm-620", h: "180.000", s: 5, t: ""},
    {k: "Lainnya", m: "Welhome", n: "Water Heater Welhome", h: "850.000", s: 2, t: ""},
    {k: "TV", m: "Coocaa", n: "TV Coocaa 32S3U", h: "1.650.000", s: 4, t: ""},
    {k: "TV", m: "Polytron", n: "TV Polytron PLD40 CV8969", h: "2.625.000", s: 3, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Kipas KAD927BGB", h: "175.000", s: 8, t: ""},
    {k: "Lainnya", m: "Lainnya", n: "Bracket TV", h: "65.000", s: 10, t: ""}
];
    {k: "Dapur", m: "Miyako", n: "Magic com Miyako MCM 508 SBC", h: "275.000", s: 2},
    {k: "Dapur", m: "Miyako", n: "Magic com Miyako MCM 528 MIX FRUITS", h: "245.000", s: 3},
    {k: "Dapur", m: "Philips", n: "Magic com Philips", h: "425.000", s: 2},
    {k: "Dapur", m: "Cosmos", n: "Magic com Cosmos CRJ- 3232", h: "290.000", s: 4},
    {k: "Dapur", m: "Lainnya", n: "Blender BL 101 PL", h: "200.000", s: 3},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 602 A", h: "525.000", s: 1},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 522 CE", h: "370.000", s: 1},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 522 E", h: "415.000", s: 2},
    {k: "Dapur", m: "Rinnai", n: "Kompor Rinnai RI 712T", h: "660.000", s: 2},
    {k: "Lainnya", m: "Cosmos", n: "Setrika Cosmos cis -318 f1", h: "150.000", s: 1},
    {k: "Lainnya", m: "Lainnya", n: "Roda kulkas besi", h: "85.000", s: 4},
    {k: "Lainnya", m: "Lainnya", n: "Hand Mixer Hm-620", h: "180.000", s: 1},
    {k: "Lainnya", m: "Welhome", n: "Water Heater Welhome", h: "850.000", s: 1},
    {k: "TV", m: "Coocaa", n: "TV Coocaa 32S3U", h: "1.650.000", s: 1},
    {k: "TV", m: "Polytron", n: "TV Polytron PLD40 CV8969", h: "2.625.000", s: 1},
    {k: "Lainnya", m: "Lainnya", n: "Kipas KAD927BGB", h: "175.000", s: 1},
    {k: "Lainnya", m: "Lainnya", n: "Bracket TV", h: "65.000", s: 2}
];

function setModeStok(mode) {
    modeStok = mode;
    document.querySelectorAll('.btn-stok').forEach(btn => btn.classList.remove('active'));
    document.getElementById('stok-' + mode).classList.add('active');
    render();
}

function initFilters() {
    const listKategori = ['Semua', ...new Set(gudangData.map(i => i.k))];
    document.getElementById('filterKategori').innerHTML = listKategori.map(k => 
        `<button class="${filterSekarang.kategori === k ? 'active' : ''}" onclick="setFilter('kategori', '${k}')">${k}</button>`
    ).join('');
}

function setFilter(jenis, nilai) {
    filterSekarang[jenis] = nilai;
    render();
    initFilters();
}

function render() {
    const wadah = document.getElementById('tempatBarang');
    const cari = document.getElementById('inputCari').value.toLowerCase();
    
    const filtered = gudangData.filter(i => {
        const cKat = filterSekarang.kategori === 'Semua' || i.k === filterSekarang.kategori;
        const cCari = i.n.toLowerCase().includes(cari) || i.m.toLowerCase().includes(cari);
        let cStok = modeStok === 'semua' || (modeStok === 'ready' ? i.s > 0 : i.s <= 0);
        return cKat && cCari && cStok;
    });

    wadah.innerHTML = filtered.map(i => `
        <tr class="${i.s <= 0 ? 'row-habis' : ''}">
            <td>
                <span class="merek-tag">${i.m}</span><br>
                <strong>${i.n}</strong>
            </td>
            <td>${i.k}</td>
            <td class="harga">Rp ${i.h}</td>
            <td style="text-align: center;">
                ${i.s > 0 
                    ? `<span class="badge badge-ready">Stock : ${i.s}</span>` 
                    : `<span class="badge badge-habis">Stock : 0</span>`}
            </td>
        </tr>
    `).join('');
}

initFilters(); 
render();
