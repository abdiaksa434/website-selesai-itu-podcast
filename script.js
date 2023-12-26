const navbarList = document.querySelector ('.navbar-list');
const hamburger = document.querySelector ('#hamburger-menu');

hamburger.addEventListener('click', function (){
    // buatlah di dalam navbarList kelas baru dan juga tambahkan
    // toggle jika ada hilangkan kalau tdk ada tmbahkan
    navbarList.classList.toggle ('active');
})


document.addEventListener('click', function (e) {
    // Ketika di-klik semuanya , fungsi ini akan dijalankan
  
    if (!hamburger.contains(e.target) && !navbarList.contains(e.target)) {
      // Memeriksa apakah target dari event (e.target) tidak berada di dalam elemen hamburger
      // dan juga tidak berada di dalam elemen navbarList
  
      navbarList.classList.remove('active');
      // Jika target event tidak berada di dalam hamburger atau navbarList,
      // maka class 'active' akan dihapus dari elemen navbarList.
      // Class 'active' mungkin digunakan untuk menampilkan atau menyembunyikan menu navigasi dengan CSS.
    }
});