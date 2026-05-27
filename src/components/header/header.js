"use client"; 

import styles from "./header.module.css";

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className={styles.header}>
      {/* Logo của Shop */}
      <div className={styles.logo}>
        COMIC<span>STORE</span>
      </div>

      {/* Thanh tìm kiếm */}
      <div className={styles.searchBox}>
        <span className={styles.searchIcon}>🔍</span>
        <input 
          type="text" 
          placeholder="Tìm tên truyện, tác giả..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>

      {/* Điều hướng */}
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>Trang chủ</li>
          <li>Mới nhất</li>
          <li>Xếp hạng</li>
          <li>Yêu thích</li>
        </ul>
      </nav>

      {/* Nút đăng nhập/giỏ hàng giả lập */}
      <div className={styles.userActions}>
        <button className={styles.loginBtn}>Đăng nhập</button>
      </div>
    </header>
  );
}