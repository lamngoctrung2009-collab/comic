"use client"; 

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Lớp căn giữa nội dung */}
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>Truyện Tranh</h3>
            <ul>
              <li>Manga</li>
              <li>Manhwa</li>
              <li>Light Novel</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Hỗ trợ</h3>
            <ul>
              <li>Lịch phát hành</li>
              <li>Đổi trả sách</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Địa chỉ</h3>
            <p>592 Nguyễn Ảnh Thủ, Quận 12, TP.HCM</p>
            <p>Email: comic@website.vn</p>
          </div>

          <div className={styles.footerColumn}>
            <h3>Fan cứng</h3>
            <div className={styles.subscribeBox}>
              <input type="email" placeholder="Email nhận tin..." />
              <button>Gửi</button>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 Trần Gia Huy - Dự án Web Truyện Tranh</p>
        </div>
      </div>
    </footer>
  );
}