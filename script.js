document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fungsi Pencarian Global (Redirect ke halaman lain)
    window.searchContent = function() {
        const input = document.getElementById("searchInput");
        if (!input) return; 

        const keyword = input.value.toLowerCase().trim();

        if (keyword === "") {
            alert("Silakan masukkan kata kunci.");
            return;
        }

        // Logika Pengalihan (Ganti dengan kata kunci yang sesuai dengan isi web Anda)
        if (keyword.includes("profil") || keyword.includes("sejarah") || keyword.includes("visi")) {
            window.location.href = "profil.html?cari=" + encodeURIComponent(keyword);
        } else if (keyword.includes("umkm") || keyword.includes("produk") || keyword.includes("usaha")) {
            window.location.href = "umkm.html?cari=" + encodeURIComponent(keyword);
        } else if (keyword.includes("galeri") || keyword.includes("foto")) {
            window.location.href = "galeri.html?cari=" + encodeURIComponent(keyword);
        } else if (keyword.includes("unduh") || keyword.includes("dokumen") || keyword.includes("file")) {
            window.location.href = "unduhan.html?cari=" + encodeURIComponent(keyword);
        } else {
            alert("Mohon maaf, kata kunci '" + keyword + "' tidak ditemukan di menu utama.");
        }
    };

    // 2. Fungsi Highlight (Untuk dijalankan otomatis saat halaman lain terbuka)
    function highlightOnPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const keyword = urlParams.get('cari');

        if (keyword) {
            const items = document.querySelectorAll(".searchable");
            items.forEach(item => {
                if (item.innerText.toLowerCase().includes(keyword.toLowerCase())) {
                    item.classList.add("search-highlight");
                    item.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            });
        }
    }

    // Jalankan highlight saat halaman dimuat
    highlightOnPage();

    // Event listener untuk tombol Enter
    const input = document.getElementById("searchInput");
    if (input) {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") window.searchContent();
        });
    }
});